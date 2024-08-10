import formidable from 'formidable';
import fs from 'fs';
import pdf from 'pdf-parse';
import { PineconeClient } from '@pinecone-database/pinecone';
import { Configuration, OpenAIApi } from 'openai';

export const config = {
  api: {
    bodyParser: false,
  },
};

const pinecone = new PineconeClient();
await pinecone.init({
  environment: process.env.PINECONE_ENVIRONMENT,
  apiKey: process.env.PINECONE_API_KEY,
});

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing form data' });
      }

      const file = files.file;
      const data = fs.readFileSync(file.filepath);
      const pdfContent = await pdf(data);
      const text = pdfContent.text;

      const response = await openai.createEmbedding({
        model: "text-embedding-ada-002",
        input: text,
      });
      const embedding = response.data.data[0].embedding;

      const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);
      await index.upsert([
        {
          id: file.originalFilename,
          values: embedding,
          metadata: { text },
        },
      ]);

      res.status(200).json({ message: 'PDF uploaded and processed successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}