import express from 'express'
import objectValidator from '../helpers/validate/dataInValidation.js'
import signUp, { newUserDataProps } from '../api/auth/signUp.js'

const router = express.Router()

router.post('/signup', async (req, res) => {
  console.log('request: ', req.body)

  const newUser = objectValidator(req.body.user)

  console.log('new user: ', newUser)

  const createUser = await signUp(newUser as newUserDataProps)

  console.log('sql received: ', createUser)

  const response = res.send('This is going to be auth route')
})

export default router
