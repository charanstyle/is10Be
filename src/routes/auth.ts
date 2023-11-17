import express from 'express'

const router = express.Router()

router.post('/signup', (req, res) => {
  console.log('request: ', req.body)
  res.send('This is going to be auth route')
})

export default router
