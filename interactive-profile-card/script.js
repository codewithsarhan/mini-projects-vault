let cardHolder = document.querySelector("#cardHolder");
let changeThemeBtn = document.querySelector("#ChangeThemeBtn");


let theme = "grey";

changeThemeBtn.addEventListener("click", () => {


    if (theme === "grey") {

        cardHolder.style.backgroundColor = "lightblue"
        cardHolder.style.color = "black"
        theme = "liGreen"

    } else if (theme === "liGreen") {

        cardHolder.style.backgroundColor = "lightgreen"
        cardHolder.style.color = "black"
        theme = "liPink"

    } else if (theme === "liPink") {

        cardHolder.style.backgroundColor = "lightPink"
        cardHolder.style.color = "black"
        theme = "orange"

    }else if (theme === "orange") {

        cardHolder.style.backgroundColor = "orange"
        cardHolder.style.color = "black"
        theme = "default"
        
    }else if (theme === "default"){
        
        cardHolder.style.backgroundColor = "#808080"
        cardHolder.style.color = "black"
        theme = "grey"

    }

})