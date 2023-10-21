import { jsonProducts } from './store';
import { parseProducts } from './utils';

import './style.css'
import { ProductRepository } from './schemas';
import { ConsoleShop } from './apps';

// const products = parseProducts(jsonProducts);
// const shop = new ProductRepository(products);
// console.table(shop.getAll());

const shop = new ConsoleShop();
