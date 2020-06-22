const sections=document.querySelectorAll(".section");
const intro=document.getElementById("intro");

const goToStart=document.getElementById('go-to-start');
const startBtn=document.querySelector('.start-btn');
const cursor=document.querySelector(".cursor");

const nextBtn=document.querySelector(".next");
const topBtn=document.querySelector(".top");

const main=document.querySelector("main");

const thisIsforNext=document.querySelector("#intro");

const loaderWrap=document.querySelector(".loader-wrap");

window.addEventListener('load',function(){
    setTimeout(function(){
        console.log('loaded');
    loaderWrap.style.visibility="hidden";
    main.style.display="inherit"
    },3000)  
})
//section Y 길이 계산
let ls=[];
let resultSum=0;
for(let i=0;i<sections.length;i++){
    ls.push(sections[i].scrollHeight);
    resultSum+=sections[i].scrollHeight;
}
resultSum=resultSum-sections[sections.length-1].scrollHeight;

//Next 누르면 section 이동
nextBtn.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:window.pageYOffset+thisIsforNext.getBoundingClientRect().height,
    })
})

//페이지 맨 위로 이동하는 Top
topBtn.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:0,
    })
})


//temp
goToStart.addEventListener('mouseover',function(e){
    startBtn.classList.add("show-btn");
    console.log(cursor.style.top);
})

startBtn.addEventListener('mouseover',function(){
    startBtn.style.transform="scale(2.0)";
})
