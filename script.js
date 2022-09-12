

let username = document.querySelector('#username')

let url = document.querySelector('#url')

let desc = document.querySelector('#desc')

let Uerr = document.querySelector('#Uerr')

let urlerr = document.querySelector('#urlerr')

let descerr = document.querySelector('#descerr')

let search = document.querySelector('#search')

let btn = document.querySelector('#btn')


let cardcontainer = document.querySelector('.cardcontainer')


let cardObj = { username: '', url: '', desc: '' ,id:'' }


let randomNum = ()=>{
   let num = Date.now() + Math.floor(Math.random() * 1000)
   return num.toString()
}


let cards = []


cards.forEach(card => {
   cardcontainer.innerHTML += `<div class="card">
                                <img src='${card.url}' alt="">
                                <h2>${card.username}</h2>
                                <p>${card.desc}</p>
                                <i style="color:red" onclick='deletecard(${card.id})'  id='delete_${card.id}'  class="ri-delete-bin-7-fill"></i>
                            </div>`
})




let deletecard = (id)=>{

 let index = cards.findIndex(v => v.id == id)
   cards.splice(index,1)
   cardcontainer.innerHTML = ''
   cards.forEach(card => {
      cardcontainer.innerHTML += `<div class="card">
                                <img src='${card.url}' alt="">
                                <h2>${card.username}</h2>
                                <i style="color:red" onClick="deletecard(${card.id})"  id='delete_${card.id}' class="ri-delete-bin-7-fill"></i>
                            </div>`
   })
}




username.addEventListener('change', (e) => {
   cardObj.username = e.target.value
})


url.addEventListener('change', (e) => {
   cardObj.url = e.target.value
})

desc.addEventListener('change', (e) => {
   cardObj.desc = e.target.value
})

btn.addEventListener('click', () => {
   let obj = { username: cardObj.username, url: cardObj.url, desc: cardObj.desc, id: randomNum() }

   username.value == '' ? Uerr.innerHTML = 'username must not empty' : Uerr.innerHTML = ''
   url.value == '' ? urlerr.innerHTML = 'Url must not empty' : urlerr.innerHTML = ''
   desc.value == '' ? descerr.innerHTML = 'Url must not empty' : descerr.innerHTML = ''

   if (username.value !== '' && url.value !== '' && desc.value !== '') {
      cardcontainer.innerHTML = ''
      cards.push(obj)
      cards.forEach(card => {
         cardcontainer.innerHTML += `<div class="card">
                                    <img src='${card.url}' alt="">
                                    <h2>${card.username}</h2>
                                    <i style="color:red" onClick="deletecard(${card.id})"  id='delete_${card.id}'  class="ri-delete-bin-7-fill"></i>
                                </div>`
      })

      username.value = ''
      url.value =  '' 
      desc.value = ''
   }

   username.value == '' ?  username.value = '' :  username.value =  username.value
   url.value ==  '' ? url.value = '' : url.value =  url.value
   desc.value == '' ? desc.value = '' : desc.value = desc.value 



   obj.id =  randomNum()

})


search.addEventListener('change', (e) => {

   let filterCard = cards.filter(v => v.username.includes(e.target.value))
   cardcontainer.innerHTML = ''
   filterCard.forEach(card => {
      cardcontainer.innerHTML += `<div class="card">
                                <img src='${card.url}' alt="">
                                <h2>${card.username}</h2>
                                <i style="color:red" onClick="deletecard(${card.id})"  id='delete_${card.id}'  class="ri-delete-bin-7-fill"></i>
                            </div>`
   })
})



