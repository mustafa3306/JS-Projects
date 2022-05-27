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



const littles = kisiler.filter((yas) => yas.age < 33).forEach((ad) => console.log(ad.name));

//* Example-2 --->

