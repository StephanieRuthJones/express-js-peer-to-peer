import { Request, Response } from 'express'
import ProductService from '../services/products'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/
export class ProductCtrl {
	getAll(req: Request, res: Response) {
		res.json(ProductService.getAll())
	}
	getOne(req: Request, res: Response) {
		// write the logic here
	}
	create(req: Request, res: Response) {
		// write the logic here
	}
	update(req: Request, res: Response) {
		// write the logic here
	}
	deleteOne(req: Request, res: Response) {
		// write the logic here
	}
}

export default new ProductCtrl()
