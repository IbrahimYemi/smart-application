const scrollBar = document.getElementById("zigzag");
const accClick = document.querySelectorAll(".faq-head")
accClick.forEach(ach=>{
    ach.addEventListener("click",showacc, false)
})

function showacc(){
    const showit = this.nextElementSibling;
    const isHide = showit.classList.contains("faq-show");
    const icons = this.firstElementChild;
    accClick.forEach(ach=>{
        const showitem = ach.nextElementSibling
        if(!showitem.classList.contains("faq-show")){
            showitem.classList.add("faq-show")
            icons.classList.remove("fa-minus")
            icons.classList.add("fa-plus")
        }
    });
    if(isHide){
        showit.classList.remove("faq-show")
        icons.classList.remove("fa-plus")
        icons.classList.add("fa-minus")
    }
}


const barIcon = document.querySelector(".fa-bars")
const navtag = document.querySelector("nav");
const Icons = document.querySelector(".icons")
barIcon.addEventListener("click", ()=>{
        barIcon.classList.toggle("fa-times")
        navtag.classList.toggle("tabs")
        Icons.classList.toggle("iconshow");
})


window.addEventListener("scroll",()=>{
    var header = document.querySelector("header");
    header.classList.toggle("fixed-top", window.scrollY > 0)
})