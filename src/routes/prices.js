import express from 'express'
import Prices from '../controllers/prices/PricesController'
const router = express.Router()


router.get('/', Prices.getAllPlanes)

export default router
