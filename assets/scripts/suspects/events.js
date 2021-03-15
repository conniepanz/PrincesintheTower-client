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
const onIndexSuspect = function (event) {
  event.preventDefault()
  api.indexSuspect()
    .then(ui.onIndexSuspectSuccess)
    .catch(ui.onIndexSuspectFailure)
}
const onDestroySuspect = function (event) {
  event.preventDefault()
  console.log(event.target[0].value)
  api.destroySuspect(event.target[0].value)
    .then(ui.onDestroySuspectSuccess)
    .catch(ui.onDestroySuspectFailure)
}

module.exports = {
  onCreateSuspect,
  onUpdateSuspect,
  onIndexSuspect,
  onDestroySuspect
}
