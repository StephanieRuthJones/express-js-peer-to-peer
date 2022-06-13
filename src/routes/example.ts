import { Router, Request, Response } from 'express'
import ProductCtrl from '../controllers/productctrl'

const router = Router()

router.get('/', ProductCtrl.getAll)

export default router
