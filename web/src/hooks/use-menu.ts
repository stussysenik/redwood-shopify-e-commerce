import {
  getCollections,
  getCollectionByHandle,
  getProductByHandle,
  getProductsByCategory,
  getFeaturedProducts,
  getProductById,
} from 'src/data/mock-helpers';

export function useMenu() {
  return {
    getCollections,
    getCollectionByHandle,
    getProductByHandle,
    getProductsByCategory,
    getFeaturedProducts,
    getProductById,
  };
}
