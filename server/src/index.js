import { PORT } from "./settings.js"
import express from 'express'
import response from './mock.json' assert { type: "json" };

(async () => {
  const app = express()
  const port = PORT

  app.get('/', (req, res) => {
    res.send(response)
  })

  app.listen(port, () => {
    console.log('running on port: ' + port)
  })
})()
