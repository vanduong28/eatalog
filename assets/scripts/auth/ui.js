'use strict'
const store = require('../store')

const signUpSuccess = () => {
  // console.log('sign up success')
  $('#signUp-modal').modal('hide')
  $('.game-prompt').hide()
  $('.sign-up-btn').hide()
  $('.sign-in-prompt').text('Sign in to start planning!')
  $('.game-message').text(' ')
}

const signUpFailure = () => {
  // console.error('sign up failure')
  $('#sign-up-modal-label').text('Error with sign up. Please try again.')
}
const signInSuccess = (data) => {
  // console.log('signIn success ran. data is: ', data)
  store.user = data.user
  $('#sign-in-modal-label').text('Sign In')
  $('#signIn-modal').modal('hide')
  $('.game-prompt').hide()
  $('.sign-in-prompt').text(' ')
  $('.hide-on-start').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  $('.game-message').text(' ')
  $('#city-input-fields').show()
  $('.view-cities-button').show()
  $('.new-city-button').show()
  $('.map-button').show()
}

const signInFailure = () => {
  // console.error('signIn failure ran. error is: ', error)
  $('#sign-in-modal-label').text('Incorrect email/password. Please try again.')
}
const signOutSuccess = () => {
  // console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOut-modal').modal('hide')
  $('.game-prompt').show()
  $('.game-prompt').text('Sign up or sign in to start planning!')
  $('.new-game-button').hide()
  $('.hide-on-start').hide()
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('.new-game-prompt').text('')
  $('.create-city-message').text('')
  $('#city-input-fields').hide()
  $('.view-cities-button').hide()
  $('.new-city-button').hide()
  $('#content').empty()
  $('.map-container').hide()
  $('.map-button').hide()
}

const signOutFailure = () => {
  // console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = () => {
  // console.log('change password success. data is: ', data)
  $('#changePasswordLabel').text('Password successfully changed')
}

const changePasswordFailure = () => {
  // console.error('change password failure ran. error is: ', error)
  $('#changePasswordLabel').text('Invalid password. Try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
