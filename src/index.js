// TODO: 이 곳에 정답 코드를 작성해주세요.
const $id = document.getElementById('id')

// 1. autofocus 구현
window.addEventListener('load', () => $id.focus())

// 2. 유효성 검사 로직 구현
const $pw = document.getElementById('pw')
const $pwCheck = document.getElementById('pw-check')

const ID_REGEX = new RegExp(/^[a-z0-9_-]{5,20}$/)
const PW_REGEX = new RegExp(/^[a-zA-Z0-9]{8,16}$/)

// 3. 커스텀 에러 메시지 구현
const $idMsg = document.getElementById('id-msg')
const $pwMsg = document.getElementById('pw-msg')
const $pwCheckMsg = document.getElementById('pw-check-msg')

const errorMsg = {
    required: '필수 정보입니다.',
    idInvalid:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    pwInvalid: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
    pwCheckInvalid: '비밀번호가 일치하지 않습니다.',
}
const { required, idInvalid, pwInvalid, pwCheckInvalid } = errorMsg

$id.addEventListener('focusout', () => {
    checkValidation($id, $idMsg)
})
$pw.addEventListener('focusout', () => {
    checkValidation($pw, $pwMsg)
})
$pwCheck.addEventListener('focusout', () => {
    checkValidation($pwCheck, $pwCheckMsg)
})

const checkValidation = ($input, $msg) => {
    $input.classList.add('border-red-600')
    if ($input.value === '') return ($msg.innerText = required)

    $msg.innerText = showProperMessage($msg)
    if (showProperMessage($msg) === '') {
        $input.classList.remove('border-red-600')
    }
}

function showProperMessage($msg) {
    switch ($msg) {
        case $idMsg:
            return ID_REGEX.test($id.value) ? '' : idInvalid
        case $pwMsg:
            return PW_REGEX.test($pw.value) ? '' : pwInvalid
        case $pwCheckMsg:
            return $pw.value === $pwCheck.value ? '' : pwCheckInvalid
    }
}

// 4. 입력 확인 모달 창 구현
const $submit = document.getElementById('submit')
const $modal = document.getElementById('modal')
const $confirmId = document.getElementById('confirm-id')
const $confirmPw = document.getElementById('confirm-pw')

$submit.addEventListener('click', (event) => {
    event.preventDefault()
    checkValidation($id, $idMsg)
    checkValidation($pw, $pwMsg)
    checkValidation($pwCheck, $pwCheckMsg)

    const allInputIsValid =
        $idMsg.innerText === '' &&
        $pwMsg.innerText === '' &&
        $pwCheckMsg.innerText === ''

    if (allInputIsValid) {
        $confirmId.innerText = $id.value
        $confirmPw.innerText = $pw.value
        $modal.showModal()
    }
})

const $cancelBtn = document.getElementById('cancel-btn')
const $approveBtn = document.getElementById('approve-btn')

$cancelBtn.addEventListener('click', () => {
    $modal.close()
})

$approveBtn.addEventListener('click', () => {
    $modal.close()
    alert('가입되었습니다 🥳')
})
