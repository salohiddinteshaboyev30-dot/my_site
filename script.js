let people = [

{
name:"Alisher Navoiy",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Alisher_Navoi.jpg",
link:"https://uz.wikipedia.org/wiki/Alisher_Navoiy"
},

{
name:"Amir Temur",
img:"https://upload.wikimedia.org/wikipedia/commons/7/72/Amir_Timur_reconstruction.jpg",
link:"https://uz.wikipedia.org/wiki/Amir_Temur"
},

{
name:"Ibn Sino",
img:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Avicenna_Portrait.jpg",
link:"https://uz.wikipedia.org/wiki/Abu_Ali_ibn_Sino"
},

{
name:"Mirzo Ulug‘bek",
img:"https://upload.wikimedia.org/wikipedia/commons/7/77/Ulugh_Beg.jpg",
link:"https://uz.wikipedia.org/wiki/Mirzo_Ulug%CA%BBbek"
},

{
name:"Zahiriddin Bobur",
img:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Babur.jpg",
link:"https://uz.wikipedia.org/wiki/Zahiriddin_Muhammad_Bobur"
}

];

let container = document.getElementById("container");

function show(list){

container.innerHTML="";

list.forEach(p=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${p.img}">
<div class="name">${p.name}</div>
`;

card.onclick=()=>{
window.open(p.link);
}

container.appendChild(card);

});

}

show(people);

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=people.filter(p =>
p.name.toLowerCase().includes(value)
);

show(filtered);

});