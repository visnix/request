import request from './request.js'

const button = document.createElement('button')
const app = document.getElementById('app')
app.appendChild(button)

button.innerText = 'get'
button.onclick = () => {
  request('http://localhost:9870').then((data) => {
    console.log('==========>1',data)
  })
}


const postBtn = document.createElement('button')
app.appendChild(postBtn)
postBtn.innerText = 'post请求'
postBtn.onclick = () => {
  request('http://localhost:9870?hello=world', { method: 'POST', body: 'hello-body'}).then(async response => {
    console.log('---------->res', response)
  })
}
