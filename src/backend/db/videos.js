import { v4 as uuid } from 'uuid';
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  // Audio
  {
    _id: uuid(),
    title: 'Sony WH-1000XM5 Review: Two Steps Forward, One Step Back!',
    description: "Sony's MK5 noise cancelling headphones are still king of the hill.",
    videoUrl: 'https://youtube.com/embed/6CsJZxfZsL0',
    thumbnail: 'https://i.ytimg.com/vi/6CsJZxfZsL0/hqdefault.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'AirPods Pro Unboxing & Impressions!',
    description: 'AirPods Pro are finally noise cancelling earbuds. For $250. From Apple.',
    videoUrl: 'https://youtube.com/embed/MrUhzYdcX6w',
    thumbnail: 'https://i.ytimg.com/vi/MrUhzYdcX6w/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: "NOTHING ear(1) - Let's Talk",
    description:
      "Thoughts on the NOTHING ear(1). The $99 wireless earphones from Carl Pei's new venture.",
    videoUrl: 'https://youtube.com/embed/-zTNuxUl5lM',
    thumbnail: 'https://i.ytimg.com/vi/-zTNuxUl5lM/hq720.jpg',
    creator: 'Dave2D',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'AirPods 3 vs 2 vs Pro vs Max - Every AirPods Compared!',
    description:
      'Thanks to Best Buy for sponsoring this video! Comparing all the AirPods! New AirPods 3 vs 2 vs AirPods Pro and AirPods Max. Enjoy!',
    videoUrl: 'https://youtube.com/embed/FfWGo_zw-kk',
    thumbnail: 'https://i.ytimg.com/vi/FfWGo_zw-kk/hq720.jpg',
    creator: 'Jonathan Morrison',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'Sony WH-1000XM4 Review: The Final Form!',
    description: 'Even better headphones. Still a terrible name.',
    videoUrl: 'https://youtube.com/embed/bInJjmH31Hk',
    thumbnail: 'https://i.ytimg.com/vi/bInJjmH31Hk/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  // Phones
  {
    _id: uuid(),
    title: 'Galaxy S22 Ultra Review: Separating from the Pack!',
    description:
      "Samsung's Galaxy S22 Ultra separates itself from the rest of the lineup with more than just specs",
    videoUrl: 'https://youtube.com/embed/vXIAB_1FEC0',
    thumbnail:
      'https://i.ytimg.com/vi/vXIAB_1FEC0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHtTz40hLk5gIVhI9BgzEILNJvcw',
    creator: 'MKBHD',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'The Fastest Android Phone - ASUS ROG',
    description:
      'The fastest Android phone. Powerful performance from the Snapdragon 8 Gen 1 Plus.',
    videoUrl: 'https://youtube.com/embed/1WIFY7_TZUE',
    thumbnail: 'https://i.ytimg.com/vi/1WIFY7_TZUE/hq720.jpg',
    creator: 'Dave2D',
    category: 'Phones',
  },
];
