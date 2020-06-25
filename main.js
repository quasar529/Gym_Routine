const specialists=[
    {
        id:1,
        name:"강경원",
        img:"images/legend.jpg",
        link:"./contents/legend.html"
    },
    {
        id:2,
        name:"김계란",
        img:"images/eggkim.jpg",
        link:"./contents/eggkim.html"
    },
    {
        id:3,
        name:"트리거",
        img:"images/trigger.jpg",
        link:"./contents/trigger.html"
    }
]

const img=document.getElementById("person-img");
const name=document.querySelector(".item-name");
const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const link=document.getElementById("link");

let current=0;

window.addEventListener("DOMContentLoaded",showPerson());

function showPerson(){
    const item=specialists[current];
    img.src=item.img;
    name.textContent=item.name;
    link.href=item.link;
}

nextBtn.addEventListener('click',function(){
    current++;
    if(current>specialists.length-1){
        current=0;
    }
    showPerson();
})

prevBtn.addEventListener('click',function(){
    current--;
    if(current<0){
        current=specialists.length-1;
    }
    showPerson();
})