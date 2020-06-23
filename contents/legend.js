const modalOverlay1=document.querySelector(".modal-overlay1");
const modalOverlay2=document.querySelector(".modal-overlay2");
const modalContent1=document.querySelector(".modal-content1");
const modalContent2=document.querySelector(".modal-content2");
const modalBtn1=document.querySelector(".modal-btn1");
const modalBtn2=document.querySelector(".modal-btn2");
const closeBtn1=document.querySelector(".close-btn1");
const closeBtn2=document.querySelector(".close-btn2");

closeBtn1.addEventListener("click",function(){
    modalOverlay1.classList.remove("open-modal");
})
closeBtn2.addEventListener("click",function(){
    modalOverlay2.classList.remove("open-modal");
})

modalBtn1.addEventListener("click",function(){
    modalOverlay1.classList.add("open-modal");
    //modalContent.innerHTML="<div class='routine1'><h2>무분할 루틴1</h2><ul><li>머신 벤치 프레스</li><li>랫 풀 다운</li><li>머신 숄더 프레스</li><li>바벨/덤벨 컬</li><li>레그 익스텐션</li><li>레그 컬</li><li>레그 레이즈</li><li>플랭크</li></ul></div>";
    modalContent1.classList.add("open-modal");
})
modalBtn2.addEventListener("click",function(){
    modalOverlay2.classList.add("open-modal");
    modalContent2.classList.add("open-modal");
})