// Your code goes here

//document.querySelectorAll will return a Nodelist.
let nav = document.querySelectorAll("a");//Selected "a" tags and stored them in "nav"/
Array.from(nav); //Converted "nav" from a Nodelist into an array in order to manipulate each "a" tag
nav.forEach(navLink =>{ //for each item in array do something...
    navLink.addEventListener('click', (event)=> {
        navLink.style.color = 'green';
    })
})

let button = document.querySelectorAll(".btn");
Array.from(button);
button.forEach(btn =>{
    btn.addEventListener('mouseenter', (event)=>{
        btn.style.backgroundColor = 'beige';
    })
    btn.addEventListener('mouseleave', (event)=>{
        btn.style.backgroundColor = 'black';
     })
})


let foot = document.querySelector(".footer")
foot.addEventListener('dblclick', (event)=>{
    foot.style.backgroundColor = 'white';
})

let head = document.querySelector(".main-navigation")
head.addEventListener('mouseover', (event)=>{
    head.style.backgroundColor = 'beige';
})





