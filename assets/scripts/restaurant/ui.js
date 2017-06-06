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

module.exports = {
  getRestaurantsSuccess,
  getRestaurantsFailure
}
