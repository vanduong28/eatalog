'use strict'

const config = require('../config')
const store = require('../store')

const getRestaurants = function () {
  return $.ajax({
    url: config.apiOrigin + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRestaurant = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/restaurants/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createRestaurant = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/restaurants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateRestaurant = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/restaurants/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getRestaurants,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant
}
