import category from './category'
import post from './post'
import settings from './settings' // Добавили импорт

export const schema = {
  // Теперь здесь три типа документов
  types: [category, post, settings], 
}