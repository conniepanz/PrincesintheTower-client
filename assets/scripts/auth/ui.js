const store = require('../store')

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}
const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again')
}
const signInSuccess = function (response) {
  store.user = response.user
  $('#error-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#mystery').show()
  $('#suspect-view').show()
  $('#auth-section').show()
}

const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, try again')
}
const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#error-message').text('Password successfully changed!')
}
const changePasswordFailure = function (response) {
  $('#error-message').text('Password failed')
}
const signOutSuccess = function () {
  $('#error-message').text('Signed out successfully')
  $('#error-message').removeClass()
  $('#error-message').addClass('success')
  $('#sign-out').trigger('reset')
  $('#auth-section').hide()
  console.log('signOutSuccess ran and nothing was returned!')
}

const signOutFailure = function (error) {
  $('#error-message').text('Error on sign out')
  $('#error-message').removeClass()
  $('#error-message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure

}
