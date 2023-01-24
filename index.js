class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static showAge(personA, personB, personC) {
    return personA.age > personB.age && personA.age > personC.age;
  }
}

let persone = [
  new Person("Andrea", 8),
  new Person("Luca", 22),
  new Person("Gianmarco", 15),
];

console.log(
  Person.showAge(persone[0], persone[1], persone[2]),
  `l'eta di ${persone[0].name} è maggiore dell'eta di ${persone[1].name} e di ${persone[2].name}`
);
