let successbtn = document.getElementById("successbtn")
let errorbtn = document.getElementById("errorbtn")
let invalidbtn = document.getElementById("invalidbtn")
let toastbox = document.getElementById("toastbox")


let successmsg = '<i class="fa-solid fa-check"></i> Successfully completed'
let errormsg = "<i class=\"fa-solid fa-x\"></i> Fix the error"
let invalidmsg = "<i class=\"fa-solid fa-x\"></i> Invalid input, check again"

function toast(msg) {

    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = msg
    toastbox.appendChild(toast)

    if(msg.includes("error")){
        toast.classList.add("error")
    }

    if(msg.includes("Invalid")){
        toast.classList.add("invalid")
    }
    
    setTimeout(()=>{
        toast.remove();

    }, 6000)

}