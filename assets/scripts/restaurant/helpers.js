'use strict'

const hideAlerts = () => {
  $('#alert-id').hide()
}

const showAlert = function (message) {
  hideAlerts()

  // message.slideDown().delay(500).slideUp()
  message.fadeTo(1000, 5000).slideUp(500)
}

module.exports = {
  showAlert
}
