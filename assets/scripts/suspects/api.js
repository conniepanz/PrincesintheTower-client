const config = require('../config')
const store = require('../store')

const createSuspect = function (formData) {
  const data = formData.suspects
  console.log('this is the data in create', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/suspects/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      suspects: {
        name: `${data.name}`,
        title: `${data.title}`,
        reason: `${data.reason}`,
        probability: `${data.probability}`
      }
    }
  })
}
const updateSuspect = function (data) {
  console.log('this is the data in update', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/suspects/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      suspects: {
        name: `${data.name}`,
        title: `${data.title}`,
        reason: `${data.reason}`,
        probability: `${data.probability}`,
        id: `${data.id}`
      }
    }
  })
}
const indexSuspect = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/suspects/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

  })
}
const destroySuspect = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/suspects/' + id,
    headers: {
      Authorization: 'Bearer' + store.user.token
    }

  })
}

module.exports = {
  createSuspect,
  updateSuspect,
  indexSuspect,
  destroySuspect

}
