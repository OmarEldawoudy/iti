

let testInput = document.querySelectorAll(`input`);
let btn=document.querySelector(".bt")

btn.addEventListener("click",

    function getele() {
        let counter = 0;
        for (let i = 0; i < testInput.length; i++) {
            if (testInput[i].value === "") {
                alert("Please fill all fields");
                counter++;
                break;
            }   
        };
        if (counter === 0) {
            if ((testInput[1].value) < 18) {
            alert("You are under age");

            }
            else {
                console.log(`Name:${testInput[0].value}`);
                console.log(`Age:${testInput[1].value}`);
                console.log(`Jop:${testInput[2].value}`);
                alert("Registration Completed");

            }
        }
    }
    );





