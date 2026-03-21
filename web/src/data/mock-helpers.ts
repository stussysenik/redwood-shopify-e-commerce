import type { Collection, Product } from 'src/types/menu';
import { collections } from './mock-collections';
import { allProducts } from './mock-products';

export function getCollections(): Collection[] {
  return collections;
}

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export function getProductByHandle(handle: string): Product | undefined {
  return allProducts.find((p) => p.handle === handle);
}

export function getProductsByCategory(categoryHandle: string): Product[] {
  return allProducts.filter((p) => p.categoryHandle === categoryHandle);
}

export function getFeaturedProducts(): Product[] {
  const featured = allProducts.filter(
    (p) =>
      !p.isDescribeYourOwn &&
      (p.badges.includes('recommended') || p.badges.includes('popular')),
  );

  return featured.sort((a, b) => {
    const aScore = a.badges.includes('recommended') ? 1 : 0;
    const bScore = b.badges.includes('recommended') ? 1 : 0;
    return bScore - aScore;
  });
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
