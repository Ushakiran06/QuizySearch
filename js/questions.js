// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
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

questionDivId =  document.getElementById('questions');

setInterval(function () {
    counter--;

    if (counter >= 0) {
        id = document.getElementById('count');
        id.innerHTML = counter;
    }
    if (counter === 0) {
        id.innerHTML = 'Times Up!';
        counter = 10;
        questionsCount++;
    } 
    
    //To check if all questions are completed or not
    if (questionsCount === questions.length){
        questionDivId.innerHTML = "Well Played! Game is over";
        id.innerHTML = "";
    } else{
        questionDivId.innerHTML = questions[questionsCount];
    }   
}, 1000);