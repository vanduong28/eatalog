'use strict'

const showRestaurantsTemplate = require('../templates/restaurant-listing.handlebars')

const getRestaurantsSuccess = (data) => {
  console.log(data)
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: data.restaurants })
  $('.content').html(showRestaurantsHtml)
  // $('#removeBtn').on('click', deleteCitySuccess)
  // $('.user-city-message').empty()
}

const getRestaurantsFailure = (error) => {
  console.log('get restaurants failure. error is:', error)
}

const deleteRestaurantSuccess = (id) => {
  event.preventDefault()
  console.log('remove restaurant clicked. in restaurant/ui.js. data id:', id)
  $("tr[data-id='" + id + "']").remove()
  // $('.user-city-message').empty()
}

const deleteRestaurantFailure = () => {
  // console.log('delete city failure.')
}

const hideViewRestaurantsBtn = function () {
  // Hide View restaurants modal button initially until user signs in.
  $('#view-restaurant-btn').hide()
}

const showViewRestaurantsBtn = function () {
  $('#view-restaurant-btn').show()
}

const hideAddRestaurantBtn = function () {
  // Hide View restaurants modal button initially until user signs in.
  $('#add-restaurant-btn').hide()
}

const showAddRestaurantBtn = function () {
  $('#add-restaurant-btn').show()
}

const createRestaurantSuccess = (data) => {
  $('#addRestaurant-modal').modal('hide')
  // $('.user-city-message').text("Restaurant added. Click 'View Cities' for updated list")
}

const createRestaurantFailure = () => {
  // console.log('create city failure. error is:', error)
}
module.exports = {
  getRestaurantsSuccess,
  getRestaurantsFailure,
  deleteRestaurantSuccess,
  deleteRestaurantFailure,
  hideViewRestaurantsBtn,
  showViewRestaurantsBtn,
  hideAddRestaurantBtn,
  showAddRestaurantBtn,
  createRestaurantSuccess,
  createRestaurantFailure
}
