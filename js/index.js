// Your code goes here
let nav = document.querySelectorAll("a");//Selected "a" tags and stored them in "nav"/
Array.from(nav); //Converted "nav" into an array
nav.forEach(navLink =>{ //for each item in array do something...
    navLink.addEventListener('click', (event)=> {
        navLink.style.color = 'red';
    })
})

let button = document.querySelectorAll(".btn");
Array.from(button);
button.forEach(btn =>{
    btn.addEventListener('mouseover', (event)=>{
        btn.style.backgroundColor = 'red';
    })
})

let foot = document.querySelector(".footer")
foot.addEventListener('dblclick', (event)=>{
    foot.style.backgroundColor = 'white';
})




