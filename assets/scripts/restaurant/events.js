'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetRestaurants = function (event) {
  // event.preventDefault()
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

const addRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createRestaurant(data)
    .then(ui.createRestaurantSuccess)
    .then(onGetRestaurants)
    .catch(ui.createRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const id = $(this).data('id')
  console.log('update button clicked. restaurant id is: ', id)
  const updateInfo = getFormFields(this)
  api.updateRestaurant(updateInfo, id)
    .then(ui.updateRestaurantSuccess(id))
    // .then(onGetRestaurants)
    .catch(ui.updateRestaurantFailure)
  // $('#updateRestaurant-modal').show()
  // $('td[data-id=' + id + ']').attr('contenteditable', 'true')
  // $('.restaurant-row').not(`.this${id}`).attr('contenteditable', 'false')
}

module.exports = {
  onGetRestaurants,
  onDeleteRestaurant,
  addRestaurant,
  onUpdateRestaurant
}
