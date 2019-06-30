const winston = require('winston')
const env = process.env.NODE_ENV || 'development'

module.exports = (module) => {
  const date = new Date()
  let path = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + module.filename.split('/').slice(-2).join('/')

  path += module.filename.split('/').slice(-2).join('/')
  let log = winston.createLogger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: (env === 'development') ? 'debug' : 'error',
        label: path
      })
    ]
  })
  log.stream = {
    write (message, encoding) {
      log.debug(message)
    }
  }
  return log
}
