/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let amt = 20
let inputEl = document.getElementById("input-number")
const btnConvert = document.getElementById("btn-convert")
let spanEl = document.getElementById("error-msg")

const lengthEl = document.getElementById("length-area")
const volumeEl = document.getElementById("volume-area")
const massEl = document.getElementById("mass-area")
const results = document.getElementById("results")

btnConvert.addEventListener("click", ()=> {
    let enteredAmt = inputEl.value

    console.log(enteredAmt)
    if(isNaN(enteredAmt)){
        spanEl.textContent = "please enter a number"
        inputEl.value = ""
    } else {
        spanEl.textContent = ""
        //results.classList.remove("hidden");
            length(enteredAmt)
            volume(enteredAmt)
            mass(enteredAmt)
    }


})

function length(amt){
   // console.log("length")
    lengthEl.innerHTML = `
       
        ${amt} meters = ${(amt * 3.281).toFixed(3)} feet| ${amt} feet = ${(amt / 3.281).toFixed(3)} meters
    
    `
}

function volume(amt){
    //console.log("volume")
    volumeEl.innerHTML = `

        ${amt} liters = ${(amt / 3.785).toFixed(3)} gallons | ${amt} gallons = ${(amt * 3.785).toFixed(3)} liters
    `
}

function mass(amt){
    //console.log("mass")
    massEl.innerHTML = `
    
    ${amt} kilos = ${(amt * 2.204).toFixed(3)} pounds | ${amt} pounds = ${(amt / 2.204).toFixed(3)} kilos
    `
}

// function genericConverter(unit1, amt, unit2, ratio){
//     return `${amt} ${unit1} = ${(amt * ratio).toFixed(3)} | ${amt} ${unit2} = ${(amt / ratio).toFixed(3)}
//     `
// }

// console.log(genericConverter("meters", 20, "feet", 3.785 ))
