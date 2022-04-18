const Prices = {
  async getAllPlanes(req, res) {
    try {
      console.log("send all prices");
      
    } catch (error) {
      res.status(400).send(error)
    }
  }
}