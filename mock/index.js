const question = require('./question.js')
const test = require('./test.js')
const user  = require('./user.js')
const mockList=[
  ...question,
  ...test,
  ...user
]
module.exports = mockList