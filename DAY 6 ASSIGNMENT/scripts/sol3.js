console.log("hey");

//name input
let user_name=prompt("enter your name:","ANONYMOUS");
const gather=document.getElementById("content");
gather.innerText  =`HEY ${user_name}...!! WELCOME TO LETSUPGRADE :-)`;

//clock
let timing=document.getElementById("clock");
function clock()
{
    let date=new Date();
    let time=date.toLocaleTimeString();
    timing.innerText =time;
}
setInterval(clock,1000)


//dark mode
const mode_d=document.getElementById("mode");
function darkey()
{
    mode_d.classList.add("bla");
    mode_d.classList.remove("bla");
    mode_d.classList.toggle("bla");
}
darkey();




