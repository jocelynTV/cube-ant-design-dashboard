import { faker } from '@faker-js/faker';
import { Product, ProductQuery } from './type';
import { delay } from 'utils';

const productListApi = async (values: ProductQuery): Promise<Product[]> => {
  await delay();
  return Array.from(Array(100), () => ({
    ...values,
    id: faker.commerce.isbn(10),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    createdBy: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'OPEN',
      'PENDING',
      'PROCESSING',
      'SUCCESS',
      'FAILED'
    ]),
    createdAt: faker.date.recent(),
    image: faker.image.urlLoremFlickr({ category: 'fashion' })
  }));
};

export { productListApi };
