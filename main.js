const specialists=[
    {
        id:1,
        name:"강경원 선수",
        img:"images/legend.jpg"
    },
    {
        id:2,
        name:"김계란",
        img:"images/eggkim.jpg",
    },
    {
        id:3,
        name:"트리거",
        img:"images/trigger.jpg",
    }
]

const img=document.getElementById("person-img");
const name=document.querySelector(".item-name");
const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");

let current=0;

window.addEventListener("DOMContentLoaded",showPerson());

function showPerson(){
    const item=specialists[current];
    img.src=item.img;
    // if(current===1){
    //     img.style.width="80%";
    //     console.log("egg");
    // }else{
    //     img.style.width="30vw";
    // }
    name.textContent=item.name;
    console.log(item);
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