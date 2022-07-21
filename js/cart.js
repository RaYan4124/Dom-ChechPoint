let favBtnList = document.querySelectorAll(".heart")

favBtnList.forEach((Red) => {
    console.log(Red);
    Red.addEventListener("click" , ()=> {
        Red.classList.toggle("redclass")
    })
})


