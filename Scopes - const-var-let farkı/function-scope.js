function sayName() {
  var name = "Can";

  if (true) {
    console.log(name);
  }

  function again() {
    console.log(name);
  }
  again();

  console.log(name);
}

sayName();
console.log(name);
