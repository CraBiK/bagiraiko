import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Записи продукции',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок записи',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'content',
      title: 'Содержимое',
      type: 'array',
      of: [
        {type: 'block'}, // Текстовый редактор
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', title: 'Описание фото', type: 'string'}]
        },
        {
          type: 'file',
          title: 'Файл (Прайс/Документ)',
          fields: [{name: 'description', title: 'Название файла для кнопки', type: 'string'}]
        }
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Ссылка (URL)',
      type: 'slug',
      options: {source: 'title'},
    }),
  ],
})