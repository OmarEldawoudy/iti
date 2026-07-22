// //!------ if condition-------
// var age = 16;
// var country = "USA"
// if (country == "Egypt") {
//     if (age >= 18) {

//         console.log("you can drive");
//     }
//     else {

//         console.log("you can't drive");

//     }
// }
// else if (country == "USA") {
//     if (age >= 16) {
//         console.log("you can drive");
//     }
//     else {
//         console.log("you can't drive");

//     }
// }
// else {

//     console.log("Country not supported");

// }


// //*---------------Switch-----------------------------

// var lang="Css";
// switch (lang )
// {
//     case "Html":
//         console.log("2 Day");
//         break;
    
//     case "Css":
//         console.log("5 Day");
//         break;
    
//     case "js":
//         console.log("20 Day");
//         break;
    
//     case "react":
//         console.log("15 day");
//         break;
// }

// !-----loop-----------

// for (var i = 1; i<=12; i++)
// {
//     console.log(`7 * ${i} =${7 * i}`);
// }

// var i = 0;
// do {
//     console.log(`the counter is ${i}`);
// } while (i<10);

// //----------------------
// (function call() {
//     console.log = (`hello omar`);    

// })()

// var user = {
//     full_name: "omar ismail",
//     age: 21,
//     job: "developer",
//     salary: 100000,
//     married: false,
//     eat: function (meal)
//     {
//         console.log(`iam eating ${meal}`);
//     },

//     bro: {
//         full_name: "Mo7med ismail",
//         age: 30,
//         job: "Eng",
//         salary: 1000000000,
//         married: true
//     },

// };
// console.log(user.full_name);
// console.log(user.job);

// console.log(user.bro.full_name);
// console.log(user.bro.job);
// console.log(user.eat("salad"));



let h2Element = document.querySelectorAll("h2.demo");

function sayhello(user) {
    alert(`hello ${user}`);
}

for (let i = 0; i < h2Element.length; i++)
{
    h2Element[i].addEventListener("click", function () {
        sayhello("omar");
    });
}