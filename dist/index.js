
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./firestore-link.cjs.production.min.js')
} else {
  module.exports = require('./firestore-link.cjs.development.js')
}
