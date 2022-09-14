// TODO: 이 곳에 정답 코드를 작성해주세요.
const $id = document.getElementById('id')

// 1. autofocus 구현
window.addEventListener('load', () => $id.focus())

// 2. 유효성 검사 로직 구현
const $pw = document.getElementById('pw')
const $pwCheck = document.getElementById('pw-check')

const ID_REGEX = new RegExp(/^[a-z0-9_-]{5,20}$/)
const PW_REGEX = new RegExp(/^[a-zA-Z0-9]{8,16}$/)

const validateId = () => {
    const isValidId = ID_REGEX.test($id.value)
    console.log(isValidId)
}
$id.addEventListener('focusout', validateId)

const validatePw = () => {
    const isValidPw = PW_REGEX.test($pw.value)
    console.log(isValidPw)
}
$pw.addEventListener('focusout', validatePw)

const validatePwCheck = () => {
    const isValidPwCheck = $pw.value === $pwCheck.value
    console.log(isValidPwCheck)
}
$pwCheck.addEventListener('focusout', validatePwCheck)

const $submit = document.getElementById('submit')
$submit.addEventListener('click', (event) => {
    event.preventDefault()
    validateId()
    validatePw()
    validatePwCheck()
})
