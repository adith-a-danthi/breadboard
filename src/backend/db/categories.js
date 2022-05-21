import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Audio',
    description: '',
    categoryIcon: 'fas fa-headphones',
  },
  {
    _id: uuid(),
    categoryName: 'Phones',
    description: '',
    categoryIcon: 'fas fa-mobile',
  },
  {
    _id: uuid(),
    categoryName: 'Gaming',
    description: '',
    categoryIcon: 'fas fa-gamepad',
  },
  {
    _id: uuid(),
    categoryName: 'Laptops',
    description: '',
    categoryIcon: 'fas fa-laptop',
  },
];
