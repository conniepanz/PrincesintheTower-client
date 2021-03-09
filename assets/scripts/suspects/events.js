const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateSuspect = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createSuspect(data)
    .then(ui.onCreateSuspectSuccess)
    .catch(ui.onCreateSuspectFailure)
}

const onUpdateSuspect = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createSuspect(data)
    .then(ui.onUpdateSuspectSuccess)
    .catch(ui.onUpdateSuspectFailure)
}
const onShowPosts = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showPosts(data)
    .then(ui.onShowPostsSuccess)
    .catch(ui.onShowSuspectFailure)
}

module.exports = {
  onCreateSuspect,
  onUpdateSuspect,
  onShowPosts
}
