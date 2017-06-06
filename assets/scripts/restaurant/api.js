'use strict'

const config = require('../config')
const store = require('../store')

const getRestaurants = function () {
  return $.ajax({
    url: config.apiOrigin + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getRestaurants
}
