let menuIcon=document.querySelector("#menu-icon");
let sideBar=document.querySelector("#sideBar");
let HideContent=document.querySelectorAll(".row.a");
let mainSection=document.querySelector("main");
let maintestForm = document.getElementById("#maintestForm");
let progressReport = document.getElementById("#progress-Report");

function myFunction(){
    mainSection.classList.toggle("large-Container");
}
function myFunction2(){
    sideBar.classList.toggle("small-sideBar");
    maintestForm.classList.toggle("TestForm");
}
function myFunction3(){
    progressReport.classList.toggle("progressForm")
}

menuIcon.addEventListener("click",myFunction);
menuIcon.addEventListener("click",myFunction2);
menuIcon.addEventListener("click",myFunction3);


let MenuBar=document.getElementById("menubarButton");
let body=document.querySelector("body");
let html=document.querySelector("html");
let div=document.querySelectorAll("div");
let textarea=document.querySelector("textarea");

function DarkMode(){
    MenuBar.classList.toggle("Changetheme");
    body.classList.toggle("Theme-Color");
    html.classList.toggle("Theme-Color");
    textarea.classList.toggle("TextArea-Color");
    for(let i=0;i<=div.length;i++){
        div[i].classList.toggle("Theme-Color");
    }
}

// let accountIcon=document.getElementById("account-icon");
// accountIcon.addEventListener("click", function(){
//     if(MenuBar.style.display=="none"){
//         MenuBar.style.display="block";
//     }
//     else{
//         MenuBar.style.display="none";
//     }

// });


let sideBarDiv = document.querySelectorAll(".sideBar div");

for(let i=0 ; i <= sideBarDiv.length ; i++){

sideBarDiv[i].addEventListener("click" ,function(){
    sideBarDiv[i].classList.toggle("active");
});
    
}
    