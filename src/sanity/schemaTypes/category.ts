import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Категории',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название категории',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Ссылка (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    // НОВОЕ ПОЛЕ:
    defineField({
      name: 'image',
      title: 'Изображение категории',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'parent',
      title: 'Родительская категория',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
})