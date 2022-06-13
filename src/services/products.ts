/* THIS COMPONENT INTERACTS WITH THE DATA BASE */

import { Product } from '../types/product'
import products from './products.json'

export class ProductService {
	getAll() {
		return products
	}
	getOne(id: string) {

	}
	create(product: Product) {

	}
	update(id: string, data: Partial<Omit<Product, 'id'>>) {

	}
	deleteOne(id: number) {}
}
export default new ProductService()
