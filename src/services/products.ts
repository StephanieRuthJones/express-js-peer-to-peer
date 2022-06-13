/* THIS COMPONENT INTERACTS WITH THE DATA BASE */

import { Product } from '../types/product'
import products from './products.json'

export class ProductService {
	getAll() {
		return products
	}
	getOne(id: string) {
		const product = products.find((product) => product.id === id)
		if (!product) {
			throw Error('Product not found')
		}
		return product
	}
	create(product: Product) {
		products.push(product)
		return product
	}
	update(id: string, data: Partial<Omit<Product, 'id'>>) {
		const idx = products.findIndex((product) => product.id === id)
		products[idx] = { ...products[idx], ...data }
		return products[idx]
	}
	deleteOne(id: number) {}
}
export default new ProductService()
