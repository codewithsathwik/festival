let heading = document.querySelector("#heading");
let naming = document.querySelector("#naming");
let text = document.querySelector("#text");

function clearLocal() {
    let storedUser = localStorage.getItem('userName');
    let userName = storedUser ? JSON.parse(storedUser) : null;
    if (userName && userName.name) {
        heading.textContent = "Local Storage Cleared!";
        naming.textContent = `Name Found : ${userName.name}`;
        text.textContent = "Reopen the site to get new content.";
        localStorage.clear();
    }else{
        heading.textContent = "No data found!";
        text.textContent = "Thank you for visiting.";
    }
}

clearLocal();