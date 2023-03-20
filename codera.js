let lis=document.querySelectorAll(".nav ul li")
lis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active");
            e.currentTarget.classList.add("active");
        })
    })
})