const nm=document.getElementById("name");
const nm1=prompt("Enter name  ")
nm.innerHTML+=nm1;

const ctime=document.getElementById('time1')
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText=time;
}

setInterval(clock,1000);

// const dark1=document.getElementById('dark');
// dark1.onclick=function dark_mode(){
//     document.body.style.backgroundColor='black';
//     document.body.style.color="white";
//     document.body.style.border="2px solid white";
// }

let dark=document.getElementById('attr');
dark.classList.add('black')
dark.classList.toggle('black')