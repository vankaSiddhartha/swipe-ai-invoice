import { PineconeClient } from '@pinecone-database/pinecone';
import { Configuration, OpenAIApi } from 'openai';

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
    const { query } = req.body;

    const queryEmbedding = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: query,
    });

    const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);
    const queryResponse = await index.query({
      vector: queryEmbedding.data.data[0].embedding,
      topK: 1,
      includeMetadata: true,
    });

    const context = queryResponse.matches[0].metadata.text;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant. Use the following context to answer the user's question." },
        { role: "user", content: `Context: ${context}\n\nQuestion: ${query}` }
      ],
    });

    const answer = completion.data.choices[0].message.content;

    res.status(200).json({ answer });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}