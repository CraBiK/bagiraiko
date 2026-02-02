import category from './category'
import post from './post'

// Мы создаем именно тот объект "schema", который ищет твой конфиг
export const schema = {
  types: [category, post],
}