const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const TOTAL_PAGE_NUM = 10
const getIntSmallerThan = num => Math.floor(Math.random() * num)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/companies', (req, res) => {
  const { body: { pageIndex, cardsNumPerPage } } = req

  const getData = length => Array.from({ length }, () => ({
    id: Math.random(),
    name: `Company No.${getIntSmallerThan(1000)}`,
    email: 'email@email.com',
    phone: '0123456789',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: `https://picsum.photos/300?random=${getIntSmallerThan(1000)}`,
  }))

  const companies = getData(cardsNumPerPage)
  res.send({
    companies,
    totalPageNum: TOTAL_PAGE_NUM
  })
})

app.post('/login', (req, res) => {
  const { body: { username, password } } = req
  // do something with db
  // if (wrong username or password ) res.status(401).json({msg: 'wrong username or password'})
  res.json({
    userId: 'fakeUser._id',
    username,
    msg: 'LOGIN_SUCCESS'
  })
})

app.post('/signup', (req, res) => {
  const { body: { username, password } } = req
  // do something with db
  res.json({
    userId: 'fakeUser._id',
    username,
    msg: 'SIGNUP_SUCCESS'
  })
})

app.listen(3001, () => {
  console.log('Your server is running on port 3001')
})
