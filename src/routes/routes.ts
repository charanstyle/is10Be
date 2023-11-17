import auth from './auth.js'

const mountRoutes = (app: any) => {
  app.use('/auth', auth)
}

export default mountRoutes
