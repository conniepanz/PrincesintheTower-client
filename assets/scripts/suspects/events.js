const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateSuspect = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('this is data in create', data)
  api.createSuspect(data)
    .then(ui.onCreateSuspectSuccess)
    .catch(ui.onCreateSuspectFailure)
}

module.exports =
onCreateSuspect
