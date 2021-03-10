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
        <form class='susp-update-dynamic' data-id=${suspect._id}>
          <input type='text' name='suspect[name]' placeholder='Enter Suspect Here' required>
          <input type='text' name='suspect[title]' placeholder='Enter Title Here' required>
          <input type='text' name='suspect[reason]' placeholder='Enter Reason Here' required>
          <input type='text' name='suspect[probability]' placeholder='Enter Probability Here' required>
          <input type='text' name='suspect[id]' placeholder='Enter ID Here' required>
          <button>Posts</button>
          <hr>
          </form>
    `
  })
  console.log(suspectHtml)
  $('#suspects-display').html(suspectHtml)
}
const onIndexSuspectFailure = function (response) {
  $('#suspects-display').text('Posts Failed')
}
const onDestroySuspectSuccess = function (response) {
  $('#delete-message').text('Delete Success')
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
