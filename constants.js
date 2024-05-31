const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '127.0.0.1'

const ROUTES = {
  provaiders: '/provedores',
  articles: '/artigos'
}

export {
  HOST,
  PORT,
  ROUTES
}