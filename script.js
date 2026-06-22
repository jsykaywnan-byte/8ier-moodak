window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){
header.style.background="#4b0082";
}
else{
header.style.background="#6a0dad";
}

});