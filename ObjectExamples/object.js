////////*In this file, we will do some examples about javascript objects.
const kisiler = [
    {
      name: "Ahmet",
      surname: "Can",
      job: "developer",
      age: 30,
    },
    {
      name: "Mehmet",
      surname: "Baki",
      job: "tester",
      age: 35,
    },
    {
      name: "Nur",
      surname: "Ersan",
      job: "team lead",
      age: 40,
    },
    {
      name: "Merve",
      surname: "Veli",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Ruzgar",
      surname: "Kuzey",
      job: "tester",
      age: 24,
    },
  ];

//* Example-1 ---> List the people who younger than 33.

console.log("*********Example-1*********");


const littles = kisiler.filter((yas) => yas.age < 33).forEach((ad) => console.log(ad.name));

//* Example-2 ---> Please keep the names of those under 33 years old in the array
console.log("*******Example-2***********");
const littleName = kisiler.filter((yas) => yas.age < 33).map((nm) => nm.name);

console.log(littleName);

//* Example-3 ---> (Yaşı 33 ten küçük olanların isim ve yaşlarının obje halinde bir listede göster.)
console.log("*********Example-3***********");

const isYas = kisiler
  .filter((meslek) => meslek.job == "developer")
  .map((is) => ({
    name: is.name,
    age: is.age,
  }));
console.log(isYas);
