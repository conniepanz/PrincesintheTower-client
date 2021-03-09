const store = require('../store')

const onCreateSuspectSuccess = function (response) {
  $('#message').text('Post Created')
  $('#suspects-form').trigger('reset')
  store.suspect = response.suspect
}

const onCreateSuspectFailure = function (response) {
  $('#message').text('Post Failed')
}

const onUpdateSuspectSuccess = function (response) {
  $('#update-message').text('Post Updated')
  $('#edit-form').trigger('reset')
  store.suspect = response.suspect
}
const onUpdateFailure = function (response) {
  $('#update-message').text('Post Failed')
}
const onShowPostsSuccess = function (response){
$('#show-posts').text('Posts Shown')

const onShowPostsFailure = function (response) {
  $('#show-posts').text('Posts Failed')
}


module.exports = {
  onCreateSuspectSuccess,
  onCreateSuspectFailure,
  onUpdateSuspectSuccess,
  onUpdateSuccessFailure

}
