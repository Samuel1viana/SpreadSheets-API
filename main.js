
const form = document.querySelector('#form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()


const spreadsheetId = '1SlkNfAL7L-d7YDsGzUwbTeoNxMusZjBQjXzA9ORWryg'
let range = "sheet1!A1:B5"
let plan = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW`
const tokenn = 'ya29.a0AXooCgu9-GCFHVCDpH9u0Eqwpee2l6RWT-efAjbf5HoDxKpjC3nM92CNchr3tDe2nwuzFCsGC_TV5PW8c91oglqa1TZzbOv-_iDngc4_KLbNKxtueKsSKlr9WCwGc7F7geV4r-BA25OohU8MEQw2FWs9a0cMwkf3LgaCgYKAd0SARASFQHGX2MiJmVsd0gdSk6h9-pFy9M8_w0169'

const raw = JSON.stringify({
    "nome":'samuel',
    "idade": 21
})

const options = {
    method: 'POST',
    payload: 'payload',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenn}`
    },
    payload: {
        "row": {
         "values": ['value1', 'value2']
             }
          }
}

let result = fetch(plan, options)
.then( response => response.json())
.then(data =>{ console.log(data)})

console.log(result)

})