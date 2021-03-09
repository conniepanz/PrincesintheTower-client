const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
const onIndexSuspect = function (event) {
  event.preventDefault()
  api.indexSuspect()
    .then(ui.onIndexSuspectSuccess)
    .catch(ui.onIndexSuspectFailure)
}
const onDeleteSuspect = function () {
  api.deleteSuspect(store.campaign._id)
    .then(ui.deleteSuspectSuccess)
    .catch(ui.deleteSuspectFailure)
}

module.exports = {
  onCreateSuspect,
  onUpdateSuspect,
  onIndexSuspect,
  onDeleteSuspect
}
