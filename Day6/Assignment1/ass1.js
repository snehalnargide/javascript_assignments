
let colors=["orange","black","pink","yellow"];

const list = document.querySelector('#list');
console.log(list);

colors.forEach(color=>{
    // list.innerText += `<li>${fruit}</li>`;
    list.innerHTML += `<li>${color}</li>`;
})
