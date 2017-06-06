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

const onDeleteRestaurant = function (event) {
  event.preventDefault()
  const restaurantId = $(this).data('id')
  api.deleteRestaurant(restaurantId)
    .then(ui.deleteRestaurantSuccess(restaurantId))
    .catch(ui.deleteRestaurantFailure)
}

module.exports = {
  onGetRestaurants,
  onDeleteRestaurant
}
