import http from 'http'
import fs from 'fs'

http.createServer((req, res) => {
  let postData = ''
  req.on('data', (chunk) => {
    postData += chunk.toString()
  })
  req.on('end', () => {
    console.log('==========>end', postData)
  })
  res.setHeader('Content-Type', 'application/json')
  const body = JSON.stringify({
    hello: 'data'
  })
  res.write(body)
  res.end()
  const desc = Object.getOwnPropertyDescriptors(req)
  const keys = Reflect.ownKeys(req)
}).listen(9870, () => {
  console.log('server is running at http://localhost:9870');
})