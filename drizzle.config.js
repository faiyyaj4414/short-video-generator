// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_N5VtbFL0ZyGP@ep-aged-scene-acgluhzf-pooler.sa-east-1.aws.neon.tech/short-video-generator?sslmode=require&channel_binding=require",
  },
});
