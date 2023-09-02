import express, { Application, Request, Response } from 'express'

import { products } from './mockdata/tutorialData'

const app: Application = express()

const PORT: number = 3001

// Endpoint to get all products

app.get('/products', (req: Request, res: Response) => {
  res.json(products)
})

// Endpoint to get product by ID

app.get('/products/:id', (req: Request, res: Response) => {
  const product = products.find((p) => p.id === parseInt(req.params.id))

  if (!product) {
    res.status(404).send('Product not found')
  } else {
    res.json(product)
  }
})

// Start server

app.listen(PORT, () => {
  console.log(`Product catalog service started on port ${PORT}`)
})
