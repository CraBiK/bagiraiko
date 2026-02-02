import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "x4lhsgkd", // Возьми его из sanity.config.ts
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Ставим false, чтобы сразу видеть изменения после публикации
})