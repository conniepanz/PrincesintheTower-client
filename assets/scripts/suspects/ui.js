const store = require('../store')

const onCreateSuspectSuccess = function (response) {
  $('#message').text('Post Created')
  store.suspect = response.suspect
}

const onCreateSuspectFailure = function (response) {
  $('#message').text('Post Failed')
}

const onUpdateSuccess = function (response) {
  $('#message').text('Post Updated')
}

module.exports = {
  onCreateSuspectSuccess,
  onCreateSuspectFailure,
  onUpdateSuccess

}
