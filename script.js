const people=[

{
name:"Alisher Navoiy",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Alisher_Navoi_2.jpg",
info:"Buyuk shoir va davlat arbobi."
},

{
name:"Amir Temur",
img:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Tamerlan.jpg",
info:"Temuriylar imperiyasi asoschisi."
},

{
name:"Mirzo Ulugbek",
img:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Ulugh_Beg.jpg",
info:"Mashhur astronom va matematik."
},

{
name:"Zahiriddin Bobur",
img:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Babur.jpg",
info:"Boburiylar imperiyasi asoschisi."
},

{
name:"Ibn Sino",
img:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Avicenna_Portrait.jpg",
info:"Mashhur tabib va olim."
}

];

const grid=document.getElementById("grid");

function highlight(text,search){

if(!search) return text;

const reg=new RegExp(search,"gi");

return text.replace(reg,match=>`<span class="highlight">${match}</span>`);

}

function render(list,search=""){

grid.innerHTML="";

list.forEach(p=>{

let card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${p.img}">
<h3>${highlight(p.name,search)}</h3>

`;

card.onclick=()=>openModal(p);

grid.appendChild(card);

});

}

render(people);

document.getElementById("search").addEventListener("input",e=>{

let text=e.target.value.toLowerCase();

let filtered=people.filter(p=>p.name.toLowerCase().includes(text));

render(filtered,text);

});

function openModal(p){

document.getElementById("modal").style.display="flex";

document.getElementById("modalName").innerText=p.name;

document.getElementById("modalInfo").innerText=p.info;

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

document.getElementById("voiceBtn").onclick=function(){

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
alert("Chrome brauzer kerak");
return;
}

const recognition=new SpeechRecognition();

recognition.lang="uz-UZ";

recognition.onresult=function(e){

let text=e.results[0][0].transcript;

document.getElementById("search").value=text;

let filtered=people.filter(p=>p.name.toLowerCase().includes(text.toLowerCase()));

render(filtered,text);

}

recognition.start();

}