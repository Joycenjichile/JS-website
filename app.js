backgroundImage = "url('img. png')"; 
document.body.style.backgroundColor='silver'
// let back=document.querySelector('body');
// document.title.style.color="green"
document.getElementById("title").style.color="green"
// word[0]. toUpperCase(); "h3"
let title=document.querySelectorAll("h3").forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase())

const addElement = document.createElement("li")
addElement.appendChild(document.createTextNode("Pears"))
let Pears=document.getElementById("fruList").appendChild(addElement)

let addvege=document.createElement("li")
addvege.appendChild(document.createTextNode("Cabbage"))
let Cabbage=document.getElementById("vegList").appendChild(addvege)





