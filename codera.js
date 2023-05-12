let lis=document.querySelectorAll(".nav ul li")
lis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active");
            e.currentTarget.classList.add("active");
        })
    })
})
let SetDate = new Date("12 31 2025 23:59:59");
let counter = setInterval(() => {
    let DateNow = new Date();
    let DateDiff = SetDate - DateNow;
    let years = Math.floor(DateDiff / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(DateDiff % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    let hours = Math.floor(DateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor( DateDiff % (1000 * 60 * 60) / ( 1000 * 60));
    let seconds = Math.floor(DateDiff % (1000 * 60) / 1000);
    document.querySelector(".year").innerHTML = years;
    document.querySelector(".day").innerHTML =  `${days <10 ? `0${days}` : days}`;;
    document.querySelector(".hour").innerHTML =  `${hours <10 ? `0${hours}` : hours}`;;
    document.querySelector(".minute").innerHTML =  `${minutes <10 ? `0${minutes}` : minutes}`;;
    document.querySelector(".second").innerHTML =  `${seconds <10 ? `0${seconds}` : seconds}`;;
    if(DateDiff < 0){
        clearInterval(counter);
    }
},1000);
let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
})