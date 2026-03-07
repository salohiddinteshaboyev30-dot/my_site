const data = [

{
name:"Alisher Navoiy",
emoji:"📚",
img:"images/alisher-navoiy.jpg"
},

{
name:"Ibn Sino",
emoji:"🧠",
img:"images/ibn-sino.jpg"
},

{
name:"Ulugbek",
emoji:"🔭",
img:"images/ulugbek.jpg"
}

]

const results = document.getElementById("results")

function showData(list){

results.innerHTML=""

list.forEach(p=>{

results.innerHTML += `
<div class="card">
<img src="${p.img}">
<h2>${p.name}</h2>
<p>${p.emoji}</p>
</div>
`

})

}

showData(data)

document.getElementById("search").addEventListener("input", e=>{

let q = e.target.value.toLowerCase()

let filtered = data.filter(p=>

p.name.toLowerCase().includes(q) ||
p.emoji.includes(q)
)

showData(filtered)

})

function startVoice(){

const rec = new webkitSpeechRecognition()

rec.lang="uz-UZ"

rec.onresult = e=>{

let text = e.results[0][0].transcript

document.getElementById("search").value=text

document.getElementById("search").dispatchEvent(new Event("input"))

}

rec.start()

}

function speakText(){

let text = document.body.innerText

let speech = new SpeechSynthesisUtterance(text)

speech.lang="uz-UZ"

speechSynthesis.speak(speech)

}