let btn1 = document.querySelector("#btn1");

// event handler
// btn1.onclick = (evt) => {
//     console.log("Button was clickeddddd")
//     console.log(evt);
//     console.log(evt.clientX, evt.clientY);
// }


btn1.addEventListener("click", () => {
    console.log("Button was click")
})

btn1.addEventListener("click", () => {
    console.log("Told you, we can use multiple event handler")
})

let modeBtn = document.querySelector("#mode");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";

        // to change the bg of the webpage
        // one way to change the bg with style.background
        // document.querySelector("body").style.backgroundColor = "darkgreen" 
        // document.querySelector("body").style.color = "white" 


        // use css class to change the custom bg
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")

    }
    else{
        currMode = "light";

        // document.querySelector("body").style.backgroundColor = "cadetblue"
        // document.querySelector("body").style.color = "black" 


        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark")


    }

    console.log(currMode);
})