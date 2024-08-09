import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgresql://neondb_owner:SFd7IMDYmB4s@ep-shrill-sound-a5wh7pap.us-east-2.aws.neon.tech/neondb?sslmode=require`,
  },
} satisfies Config;

// npx drizzle-kit push:pg