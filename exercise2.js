let firstName, givenName;
firstName = "Stacey";
let name = givenName || firstName || "John";
console.log(name);
//It will give stacey. As the name is assigned in the frist name variable. Given name is only declared but not assigned anything. John is not declared
