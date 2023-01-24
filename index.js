class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static showAge(personA, personB, personC) {
    if (personA.age > personB.age && personA.age > personC.age) {
      return `L'eta di ${persone[0].name} è maggiore dell'eta di ${persone[1].name} e di ${persone[2].name}!`;
    } else if (personB.age > personA.age && personB.age > personC.age) {
      return `L'eta di ${persone[1].name} è maggiore dell'eta di ${persone[0].name} e di ${persone[2].name}!`;
    } else if (personC.age > personA.age && personC.age > personB.age) {
      return `L'eta di ${persone[2].name} è maggiore dell'eta di ${persone[0].name} e di ${persone[1].name}!`;
    } else {
      return "Le età di entrambe le persone sono uguali!";
    }
  }
}

let persone = [
  new Person("Andrea", 39),
  new Person("Luca", 23),
  new Person("Gianmarco", 30),
];

console.log(Person.showAge(persone[0], persone[1], persone[2]));
