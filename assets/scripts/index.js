'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
// const restaurantEvents = require('./restaurant/events.js')
const restaurantUi = require('./restaurant/ui.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  // restaurantEvents.addRestaurantHandlers()
  // Hide View restaurant modal button until user signs in
  restaurantUi.hideViewRestaurantsBtn()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const auth = require('./auth/events')
const restaurant = require('./restaurant/events')

$(() => {
  $(document).ready(auth.hideButtons)
  // $(document).ready(city.hideInputFields)
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.changePassword)
  $('#view-restaurant-btn').on('click', restaurant.onGetRestaurants)
  // listen for click events on the remove button for each restaurant entry
  $(document).on('click', '.delete-btn', restaurant.onDeleteRestaurant)

  $('#sign-up-modal').on('click', function () { $('#tempSignUpError').html('') })
  $('#sign-up-modal').on('click', function () { $('#signUp-modal').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()

  // clear content in modal fields
  $('#signUp-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Sign Up')
  })
  $('#signIn-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Sign In')
  })
  $('#changePassword-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Change Password')
  })
})
