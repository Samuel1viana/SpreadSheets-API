const SCOPE = 'https://www.googleapis.com/auth/spreadsheets'
const REDIRECT = 'http://localhost:5500'
const clientID= '855022570534-et0fcib3lq8jc040cpbn48ha2h161v6n.apps.googleusercontent.com'
const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${SCOPE}&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${REDIRECT}&client_id=${clientID}`

const btn = document.querySelector('#btn')
btn.addEventListener('click',(e) =>{
    e.preventDefault()
    window.open(url, '_blanck')
})