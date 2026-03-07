let container = document.getElementById("container")

function show(list){

container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`
<div class="card">
<h3>${p.name}</h3>
</div>
`

})

}

show(people)

document.getElementById("search").addEventListener("input",function(){

let q=this.value.toLowerCase()

let filtered=people.filter(p =>
p.name.toLowerCase().includes(q)
)

show(filtered)

})