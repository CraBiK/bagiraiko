import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "x4lhsgkd", // Возьми его из sanity.config.ts
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Ставим false, чтобы сразу видеть изменения после публикации
})
// Функция для получения всех категорий
export async function getCategories() {
  const query = `*[_type == "category"] {
    title,
    "slug": slug.current,
    "image": image.asset->url
  }`
  return await client.fetch(query)
}
export async function getSettings() {
  const query = `*[_type == "settings"][0] {
    phone,
    email,
    address
  }`
  return await client.fetch(query)
}