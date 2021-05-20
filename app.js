// let a = "mustaffa";
// let b = "farzana";

// let arr1;
// let arr2;

// flames(a, b);
// function flames(a, b) {
//   arr1 = a.split("");
//   arr2 = b.split("");

//   for (let i = 0; i < arr1.length; i++) {
//     let ele = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       let ele2 = arr2[j];
//       if (ele === ele2) {
//         arr1.splice(i, 1);
//         arr2.splice(j, 1);
//         i = -1;
//         j = -1;
//         break;
//       }
//     }
//   }

//   return arr1, arr2;
// }

// let remainingLetters = arr1.concat(arr2);
// console.log(remainingLetters);
// let numberOfLetters = remainingLetters.length;
// console.log(numberOfLetters);

// var l = numberOfLetters;
// var ar = new Array("F", "L", "A", "M", "E", "S");
// var stp = 1;

// for (var x = 6; x > 1; x--) {
//   var g = (l % x) + stp - 1;
//   if (g > x) {
//     g = g % x;
//   }
//   if (g == 0) {
//     g = ar.length;
//   }
//   ar.splice(g - 1, 1);
//   stp = g;
// }

// switch (ar[0]) {
//   case "F":
//     console.log("Friends");
//     break;
//   case "L":
//     console.log("Love");
//     break;

//   case "A":
//     console.log("Affection");
//     break;

//   case "M":
//     console.log("Marriage");
//     break;

//   case "E":
//     console.log("Enemy");
//     break;

//   case "S":
//     console.log("Sister");
//     break;

//   default:
//     break;
// }

let button = document.querySelector("#button");
let arr1;
let arr2;

button.addEventListener("click", () => {
  let userName = document.querySelector("#firstName").value;
  let crushName = document.querySelector("#secondName").value;
  let answer = document.querySelector("#answer");
  let bg = document.querySelector("#main");

  arr1 = userName.split("");
  arr2 = crushName.split("");
  console.log(arr1);
  console.log(arr2);
  for (let i = 0; i < arr1.length; i++) {
    let ele = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let ele2 = arr2[j];
      if (ele === ele2) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        i = -1;
        j = -1;
        break;
      }
    }
  }

  console.log(`${arr1} ans`);
  console.log(`${arr2} ans`);
  let remainingLetters = arr1.concat(arr2);
  console.log(remainingLetters);
  let numberOfLetters = remainingLetters.length;
  console.log(numberOfLetters);

  var l = numberOfLetters;
  var ar = new Array("F", "L", "A", "M", "E", "S");
  var stp = 1;

  for (var x = 6; x > 1; x--) {
    var g = (l % x) + stp - 1;
    if (g > x) {
      g = g % x;
    }
    if (g == 0) {
      g = ar.length;
    }
    ar.splice(g - 1, 1);
    stp = g;
  }

  let removeColor = () => {
    let colors = ["blue", "red", "green", "yellow", "dark", "pink"];
    colors.map((color) => bg.classList.remove(color));
  };
  switch (ar[0]) {
    case "F":
      removeColor();
      answer.innerHTML = "Friends";
      bg.classList.add("blue");
      break;
    case "L":
      removeColor();
      answer.innerHTML = "Love";
      bg.classList.add("red");
      break;

    case "A":
      removeColor();
      answer.innerHTML = "Affection";
      bg.classList.add("green");

      break;

    case "M":
      removeColor();
      answer.innerHTML = "Marriage";
      bg.classList.add("yellow");
      break;

    case "E":
      removeColor();
      answer.innerHTML = "Enemy";
      bg.classList.add("dark");

      break;

    case "S":
      removeColor();
      answer.innerHTML = "Sister";
      bg.classList.add("pink");
      break;

    default:
      break;
  }
});
