//1
const dishes = [
  "Lasagne",
  "Spagetti",
  "Pizza",
  "French Fries",
  "Pasta carbonara",
];

for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
  const random = Math.floor(Math.random() * dishes.length);
  const randomDish = dishes[random];
  console.log(`Random dish: ${randomDish}`);
}

//2.
const myButton = document.createElement("button");
myButton.innerText = "Click!";
document.body.appendChild(myButton);

myButton.addEventListener("click", () => {
  const myHeader = document.createElement("h1");
  myHeader.innerText = "Javascript test";
  document.body.appendChild(myHeader);
  document.body.style.background = "pink";
});

//3.
const showFirstName = async (num) => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    for (let i = 0; i < num; i++) {
      const names = document.createElement("p");
      names.innerText = `The first name of the ${i + 1} user is: ${
        users.data[i].first_name
      }`;
      document.body.appendChild(names);
    }
  } catch (error) {
    console.error(`Something went wrong: ${error.message}`);
  }
};

showFirstName(3);

//4.
/*
class Person {
  constructor(firstname) {
    this.firstname = firstname;
  }
  sayHello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const peter = new Person("peter");
peter.sayHello(); // 'Hello my name is Peter'
*/
