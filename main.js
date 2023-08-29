if(1 + 1 > 5){
    console.log("True Facts!");
} else {
    console.log("LIES!");
}

if(4 * 5 <= 20){
    console.log("True Facts!");
} else {
    console.log("LIES!");
}

if (6 - 2 >= 0) {
    console.log("True Facts!");
} else {
    console.log("LIES!");
}



let likesDogs = true;

if (likesDogs) {
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
}



const son = {
    name: "Ryder",
    lang: "English"
}

if (son.lang === "English") {
    console.log(`Hello, ${son.name}!`);
} else if (son.lang === "Spanish") {
    console.log(`Hola, ${son.name}!`);
} else { 
    console.log(`Bonjour, ${son.name}!`);
}



let grade = 85;

if (grade >= 0 && grade <= 69) {
    console.log("You got an F");
} else if (grade >= 70 && grade <= 76) {
    console.log("You got a D");
} else if (grade >= 77 && grade <= 84) {
    console.log("You got a C");
} else if (grade >= 85 && grade <= 92) {
    console.log("You got a B");
} else {
    console.log("You got an A");
}
