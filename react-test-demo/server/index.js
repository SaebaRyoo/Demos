const express = require('express')
const fs = require('fs')
const path = require('path')
const getUuiD = require('./genId')

const app = express()
const port = 8081

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.disable('etag')

app.get('/todo', (req, res) => {
  let data = fs.readFileSync('./data.json', 'utf-8')
  data = JSON.parse(data);
  res.send({
    status: 200,
    data: data,
    msg: ''
  })
})

app.post('/todo', (req, res) => {
  const body = req.body
  let data = fs.readFileSync('./data.json', 'utf-8')
  data = JSON.parse(data)
  const item = {
    id: getUuiD(8),
    name: body.name || '',
    done: false,
  }

  data.push(item)
  fs.writeFileSync('./data.json', JSON.stringify(data))
  res.send({
    status: 200,
    data: data,
    msg: ''
  })
})

app.patch('/todo', (req, res) => {
  const body = req.body
  let data = fs.readFileSync('./data.json', 'utf-8')
  data = JSON.parse(data)

  data = data.map((item) => {
    if (item.id === body.id) {
      item.name = body.name
      item.done = body.done
    }
    return item
  })
  fs.writeFileSync('./data.json', JSON.stringify(data))
  res.send({
    status: 200,
    data: data,
    msg: ''
  })
})

app.delete('/todo', (req, res) => {
  const id = req.query.id
  let data = fs.readFileSync('./data.json', 'utf-8')
  data = JSON.parse(data)

  data = data.filter((item) => {
    return item.id !== id
  })
  fs.writeFileSync('./data.json', JSON.stringify(data))
  res.send({
    status: 200,
    data: data,
    msg: ''
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
