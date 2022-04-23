import { csvToJSON } from '../utils/formatter.mjs'
import { resolve } from 'path'

export const Prices = {
  async getAllPlanes(req, res) {
    try {
      console.log("send all prices");
      res.status(200).send('all good')
      
    } catch (error) {
      res.status(400).send(error)
    }
  },

  updatePrices(req, res) {
    const path = resolve('src/data/aircraft_20220412.csv')
    csvToJSON(path)
    res.status(200)
  }
}