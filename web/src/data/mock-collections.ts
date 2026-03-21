import type { Collection } from 'src/types/menu';
import { allProducts } from './mock-products';

export const collections: Collection[] = [
  {
    id: 'gid://shopify/Collection/3001',
    handle: 'breakfast',
    title: 'Breakfast',
    description:
      'Start your morning right with our all-day breakfast favorites. From fluffy stacks of buttermilk pancakes to hearty egg platters and indulgent Eggs Benedict, every dish is made fresh to order. Rise and shine — the kitchen is ready.',
    products: allProducts.filter((p) => p.categoryHandle === 'breakfast'),
    hasDescribeYourOwn: true,
    describeYourOwnPrice: '12.99',
  },
  {
    id: 'gid://shopify/Collection/3002',
    handle: 'burgers',
    title: 'Burgers',
    description:
      'Hand-formed patties griddled fresh on our flat-top and stacked with house-made sauces, quality cheeses, and the toppings that make each burger its own thing. From the timeless Classic Cheeseburger to the fire-forward Jalapeño Popper, there is a burger here with your name on it.',
    products: allProducts.filter((p) => p.categoryHandle === 'burgers'),
    hasDescribeYourOwn: true,
    describeYourOwnPrice: '14.99',
  },
  {
    id: 'gid://shopify/Collection/3003',
    handle: 'sandwiches',
    title: 'Sandwiches',
    description:
      'Stacked tall and built with purpose — our sandwiches feature quality proteins, fresh produce, and house-made spreads on breads baked or sourced locally. Whether you are after the nostalgic comfort of a Grilled Cheese or the bold flavors of a Philly Cheesesteak, we have got you covered.',
    products: allProducts.filter((p) => p.categoryHandle === 'sandwiches'),
    hasDescribeYourOwn: true,
    describeYourOwnPrice: '12.99',
  },
  {
    id: 'gid://shopify/Collection/3004',
    handle: 'sides',
    title: 'Sides',
    description:
      'The supporting cast that sometimes steals the show. Our sides are made with the same care as the mains — hand-cut fries, battered-from-scratch onion rings, and a four-cheese mac that regulars order as their entire meal. Pick one or order the table a spread.',
    products: allProducts.filter((p) => p.categoryHandle === 'sides'),
    hasDescribeYourOwn: false,
  },
  {
    id: 'gid://shopify/Collection/3005',
    handle: 'drinks',
    title: 'Drinks',
    description:
      'From hand-spun milkshakes and fresh-squeezed juices to bottomless diner coffee and nostalgic root beer floats, our drinks are designed to complete the experience. Every sip is made with the same intention as every plate.',
    products: allProducts.filter((p) => p.categoryHandle === 'drinks'),
    hasDescribeYourOwn: false,
  },
  {
    id: 'gid://shopify/Collection/3006',
    handle: 'desserts',
    title: 'Desserts',
    description:
      'Because no great meal should end without something sweet. Our desserts range from the warmly familiar — a slice of house-baked apple pie à la mode — to the show-stopping Chocolate Lava Cake that people genuinely plan their visits around. Save room.',
    products: allProducts.filter((p) => p.categoryHandle === 'desserts'),
    hasDescribeYourOwn: true,
    describeYourOwnPrice: '8.99',
  },
];
