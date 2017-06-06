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

module.exports = {
  getRestaurantsSuccess,
  getRestaurantsFailure,
  deleteRestaurantSuccess,
  deleteRestaurantFailure,
  hideViewRestaurantsBtn,
  showViewRestaurantsBtn
}
