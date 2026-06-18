const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (_request, response) => {
  response.send('4')
})

app.get('/health', (_request, response) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('error...')
  response.send('ok')
})

const start = async () => {
  await app.listen(PORT)

  console.log(`server started on port ${PORT}`)
}

start()
