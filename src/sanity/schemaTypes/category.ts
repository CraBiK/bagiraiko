import {defineField, defineType} from 'sanity'

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
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Родительская категория',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Выбери, если это подкатегория. Оставь пустым, если главная.',
    }),
  ],
})