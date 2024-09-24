let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn") //this will select all with class btn.
// we used this so that we can use for each loop and iterate over buttons.
btns.forEach(btn=> {
    btn.addEventListener("click", e=> {
        let elementId = e.currentTarget.id; //when button will press, id of that button will store 
        // in this variable. 
        if(elementId == "decrease") {
            count--;
            } else if(elementId == "reset") {
                count=0;
                } else {
                    count++;
                    }
                    value.textContent = count; //this will update the value in the html.
            value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#007bff"
    })
}) 







//We can use this logic also. please verify id and classes if want to use this logic.
// function increaseFunction() {
      
//     let counter = document.getElementById("number").innerHTML;

//     if (counter==0) {
//         counter=1;
//     } else {
//         counter++;
//     }
//     document.getElementById("number").innerHTML=counter;
//     document.getElementById("number").style.color="green";
// }


// function decreaseFunction() {
//     let decreaser = document.getElementById("number").innerHTML;

//     if (decreaser==0) {
//         decreaser=decreaser-1;
//     } else {
//         decreaser--;
//     }
//     document.getElementById("number").innerHTML=decreaser;
//     document.getElementById("number").style.color="red";
// }


// function resetFunction() {
//     let resetter = document.getElementById("number").innerHTML;
//     resetter=0;
//     document.getElementById("number").innerHTML=resetter;
//     document.getElementById("number").style.color="rgb(0, 174, 255)";
// }