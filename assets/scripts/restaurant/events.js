'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetRestaurants = function (event) {
  // event.preventDefault()
  console.log('onGetRestaurants')
  api.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch(ui.getRestaurantsFailure)
}

const onGetOneRestaurant = function (event) {
  // event.preventDefault()
  // const id =
  api.getRestaurant()
    .then(ui.getOneRestaurantSuccess)
    .catch(ui.getOneRestaurantFailure)
}

const onDeleteRestaurant = function (event) {
  event.preventDefault()
  // const id = $(this).data('id')
  // same as above
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
  // const id = $(this).data('id')
  // same as above
  const id = $(this).attr('data-id')
  console.log('update button clicked. restaurant id is: ', id)
  const updateInfo = getFormFields(this)
  console.log('update info is: ', updateInfo)
  api.updateRestaurant(updateInfo, id)
    .then(ui.updateRestaurantSuccess)
    .then(onGetRestaurants)
    .catch(ui.updateRestaurantFailure)
  // clear modal behavior. need to revisit this code
  $('.update-restaurant-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()

  // $('td[data-id=' + id + ']').attr('contenteditable', 'true')
  // $('.restaurant-row').not(`.this${id}`).attr('contenteditable', 'false')
}

// const displayUpdateModal = function () {
//   const id = $(this).attr('data-id')
//   console.log('pencil icon clicked. id is: ', id)
//   api.getRestaurant(id)
//   $('.update-restaurant-modal').modal('show')
// }

// const closeUpdateModal = function (event) {
//   $('.update-restaurant-modal').modal('hide')
// }

const onUpdateClose = function (event) {
  console.log('close update modal')
  onGetRestaurants()
  $('.update-restaurant-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

module.exports = {
  onGetRestaurants,
  onGetOneRestaurant,
  onDeleteRestaurant,
  addRestaurant,
  onUpdateRestaurant,
  // closeUpdateModal,
  onUpdateClose
  // displayUpdateModal
}
