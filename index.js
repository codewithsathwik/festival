let btnSubmit = document.querySelector("#submit");
let nameEle = document.querySelector("#name");
let msg = document.querySelector("#msg");
let loadContainer = document.querySelector(".load-container");
let namePage = document.querySelector(".enter-form");
let loadAnimation = document.querySelector(".load-animation");


// adding animation
let h1 = document.querySelector(".main-container h1");
let year = document.querySelector(".main-container h1 span");
let lamp = document.querySelector("#lamp");
let crackers = document.querySelector("#crackers");

window.addEventListener("load", () => {
    loadContainer.classList.add("hidden");
    namePage.classList.remove("hidden");
    // if(true){
    //     displayMain();
    // }
    //there should be check on local storage

    btnSubmit.addEventListener("click", async (event) => {
        event.stopPropagation();
        event.preventDefault();
        let personName = nameEle.value.trim();
        // console.log(personName);
        if (!personName) return;
        namePage.classList.add("hidden");
        loadAnimation.classList.remove("hidden");
        setTimeout(() => {
            displayMain(personName)
        }, 5000);
    })


    function displayMain(name) {
        if (namePage) {
            namePage.classList.add("hidden");
            loadAnimation.classList.remove("hidden");
        }
        loadAnimation.classList.add("hidden");
        h1.classList.add("ani-slide-right");
        year.classList.add("ani-slide-left");
        lamp.classList.add("ani-fade");
        addMessage(name)
    }

    function addMessage(name){
        let newName = document.createElement("h2");
        newName.textContent = name;
        newName.classList.add("ani-fade");
        

        setTimeout(() =>{
            // lamp.classList.add("ani-moveup");
            // h1.classList.add("ani-moveup");
            // year.classList.add("ani-moveup");
            msg.append(newName);
        },3500)
    }
})