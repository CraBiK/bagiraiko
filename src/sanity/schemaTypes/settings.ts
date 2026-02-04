import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Номер телефона',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      type: 'text',
    }),
  ],
})