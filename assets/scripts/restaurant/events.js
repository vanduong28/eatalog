'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

const onGetRestaurants = function (event) {
  event.preventDefault()
  api.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch(ui.getRestaurantsFailure)
}

module.exports = {
  onGetRestaurants
}
