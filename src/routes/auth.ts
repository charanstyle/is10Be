import express from 'express'
import objectValidator from '../helpers/validate/dataInValidation.js'

const router = express.Router()

router.post('/signup', (req, res) => {
  console.log('request: ', req.body)

  const newUser = objectValidator(req.body.user)

  console.log('new user: ', newUser)

  res.send('This is going to be auth route')
})

export default router
