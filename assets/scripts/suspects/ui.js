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

const onUpdateSuspectFailure = function (response) {
  $('#update-message').text('Post Failed')
}

const onIndexSuspectSuccess = function (responseData) {
  console.log('this')
  const suspects = responseData.suspects
  console.log('these are the suspects', suspects)
  let suspectHtml = ''
  suspects.forEach(suspect => {
    suspectHtml += `
      <h4>Name: ${suspect.name}</h4>
      <p>Title: ${suspect.title}</p>
      <p>Reason: ${suspect.reason}</p>
      <p>Probability: ${suspect.probability}</p>
      <p>ID: ${suspect._id}</p>

    `
  })
  console.log(suspectHtml)
  $('#suspects-display').html(suspectHtml)
}
const onIndexSuspectFailure = function (response) {
  $('#suspects-display').text('Posts Failed')
}
const onDestroySuspectSuccess = function (response) {
  console.log('Success reached', response)
  $('#delete-message').text('Delete Success')
  $('#delete-form').trigger('reset')
}

const onDestroySuspectFailure = function (response) {
  $('#delete-message').text('Delete Failure')
}

module.exports = {
  onCreateSuspectSuccess,
  onCreateSuspectFailure,
  onUpdateSuspectSuccess,
  onUpdateSuspectFailure,
  onIndexSuspectSuccess,
  onIndexSuspectFailure,
  onDestroySuspectSuccess,
  onDestroySuspectFailure

}
