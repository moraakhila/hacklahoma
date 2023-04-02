// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "Who played the role of Luke Skywalker in the original Star Wars trilogy? ",
    answer: "Mark Hamill",
    options: ["Anthony Daniels", "Peter Mayhew", "Andy Serkis", "Mark Hamill"],
  },
  {
    numb: 2,
    question:
      "In which Star Wars film did Luke Skywalker lose his right hand? ",
    answer: "The Empire Strikes Back",
    options: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Attack of the Clones",
    ],
  },
  {
    numb: 3,
    question: "Which planet did Luke Skywalker grow up on? ",
    answer: "Tatooine",
    options: ["Coruscant", "Hoth", "Tatooine", "Kamino"],
  },
  {
    numb: 4,
    question:
      "What was Luke Skywalker's call sign during the attack on the Death Star? ",
    answer: "Red Five",
    options: ["Red Two", "Red Five", "Red Leader", "Red star"],
  },
  {
    numb: 5,
    question: "What is the name of Luke Skywalker's father? ",
    answer: "Darth Vader",
    options: ["Han Solo", "Obi-Wan Kenobi", "Darth Vader", "Anakin Skywalker"],
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
var contentDiv = document.getElementById("content");
contentDiv.insertAdjacentHTML(
  "beforeend",

  "<h1>Hello, World!</h1>"
);
