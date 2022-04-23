import express from 'express'
import { Prices } from '../controllers/PricesController.mjs'
const router = express.Router()

router.post('/updatePrices', Prices.updatePrices)
router.get('/', Prices.getAllPlanes)

export default router
