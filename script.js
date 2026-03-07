let container = document.getElementById("container");
let search = document.getElementById("search");

fetch("data/bobolar.json")
.then(res => res.json())
.then(data => {

show(data);

search.addEventListener("keyup", ()=>{

let value = search.value.toLowerCase();

let filtered = data.filter(person =>
person.name.toLowerCase().includes(value)
);

show(filtered);

});

});

function show(list){

container.innerHTML="";

list.forEach(person=>{

let card = document.createElement("div");
card.className="card";

card.innerHTML = `
<img src="images/${person.image}">
<div class="name">${person.name}</div>
`;

card.onclick = ()=>{
window.open(person.link);
}

container.appendChild(card);

});

}