document.title = 'gea'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn = document.querySelector('button')

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.background = 'tomato'
btn1.style.fontSize = '24px'

function clickButton(){
   btn1.style.background = 'aqua'
   const newText = document.createElement('p')
   newText.textContent = 'Halo Bung! pakabar'
   body.append(newText)
}

function ubahText(){
    btn1.textContent = 'hihi haha'
}

function oriText(){
    btn1.textContent = defaultText
}