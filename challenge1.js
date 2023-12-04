/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function yourName(name) {
  console.log(name);
}
yourName("Muhammed");
yourName("tes2");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  console.log(2023 - birthYear);
}
printAge(2000);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
// function printHello(name,language)
function printHello(name, language) {
  console.log(name, language);
  if (language === "en") {
    console.log(`hello ${name}`);
  } else if (language === "es") {
    console.log(`hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}

printHello("muhammed", "en");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(nm1, nm2) {
  if (nm1 > nm2) {
    console.log(`the bigger ${nm1}`);
  } else console.log(`the bigger ${nm2}`);
}

printMax(6, 10);
