const bobolar = [

{
name:"Alisher Navoiy",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Alisher_Navoi_2.jpg"
},

{
name:"Amir Temur",
img:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Tamerlan.jpg"
},

{
name:"Mirzo Ulugbek",
img:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Ulugh_Beg.jpg"
},

{
name:"Zahiriddin Bobur",
img:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Babur.jpg"
},

{
name:"Ibn Sino",
img:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Avicenna_Portrait.jpg"
}

];

const container = document.getElementById("container");
const searchInput = document.getElementById("search");

function render(list){

container.innerHTML="";

list.forEach(p=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${p.img}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/9/99/No_Image_Available.jpg'">
<div class="name">${p.name}</div>
`;

card.onclick=()=>{
window.open(
"https://uz.wikipedia.org/wiki/"+p.name.replace(/ /g,"_"),
"_blank",
"noopener"
);
};

container.appendChild(card);

});

}

render(bobolar);

searchInput.addEventListener("keyup", ()=>{

let input=searchInput.value.toLowerCase();

let filtered=bobolar.filter(p=>
p.name.toLowerCase().includes(input)
);

render(filtered);

});