// Variables/Constants
const popupSuccess = document.querySelector('.popup--success')
const buttonSend = document.querySelector('.review__button')
const popupCloseSuccess = document.querySelector('.popup__close--success')
const popupFailure = document.querySelector('.popup--failure')
const buttonCloseFailure = document.querySelector('.button--close-failure')
const review = document.querySelector('.review')
const reviewName = review.querySelector('[name=user-name]')
const reviewSurname = review.querySelector('[name=user-surname]')
const reviewPatronymic = review.querySelector('[name=patronymic]')
const userTel = review.querySelector('[name=user-tel]')
const userMail = review.querySelector('[name=user-mail]')
const message = review.querySelector('[name=message]')
const empty = ''

// Event functions
const buttonSendClickEvent = (e) => {
  if (
    reviewName.value === empty ||
    reviewSurname.value === empty ||
    reviewPatronymic.value === empty ||
    userTel.value === empty ||
    userMail.value === empty ||
    message.value === empty)
  {
    e.preventDefault()
    popupFailure.classList.add('modal-show')
  }
}

const popupCloseSuccessEvent = (e) => {
  e.preventDefault()
  popupSuccess.classList.remove('modal-show')
}

const buttonCloseFailureEvent = (e) => {
  e.preventDefault()
  popupFailure.classList.remove('modal-show')
}

// Events
buttonSend.addEventListener('click', buttonSendClickEvent)
popupCloseSuccess.addEventListener('click', popupCloseSuccessEvent)
buttonCloseFailure.addEventListener('click', buttonCloseFailureEvent)






