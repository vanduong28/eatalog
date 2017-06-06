'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const hideButtons = function (event) {
  $('.hide-on-start').hide()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('sign up button clicked')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const changePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const showSignUpModal = function (event) {
  console.log('this should toggle sign-up modal')
  $('#signUp-modal').modal('toggle')
}

const showSignInModal = function (event) {
  $('#signIn-modal').modal('toggle')
}

const showChangePasswordModal = function (event) {
  $('#changePassword-modal').modal('toggle')
}

const addHandlers = () => {
  $('#sign-up-modal').on('click', showSignUpModal)
  $('#sign-in-modal').on('click', showSignInModal)
  $('#chng-pw-modal').on('click', showChangePasswordModal)

  // Set up user sign-out click event handler
  $('#sign-out-modal').on('click', onSignOut)

  // Set up user submit event handlers
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
}
module.exports = {
  hideButtons,
  onSignUp,
  onSignIn,
  onSignOut,
  changePassword,
  addHandlers
}
