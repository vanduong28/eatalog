'use strict'

const hideAlerts = () => {
  $('#alert-id').hide()
}

const showAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(500).slideUp()
}

module.exports = {
  showAlert
}
