

// Trecho - 1 -------------------------------------
let submitbutton = document.getElementById("submit-button");

// Define as respostas corretas para cada lacuna
let answers = {
  "answer-1-t1": "narizinho", //Alterar para o próximo trecho
};

// Armazena as respostas do usuário
let userAnswers = {};

// Captura o evento de envio do formulário
let form = document.querySelector("#quiz-form1"); //Alterar para o próximo trecho
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(answers).length;

  // Verifica cada resposta do usuário
  Object.keys(answers).forEach(function (answerId) {
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    userAnswers[answerId] = userAnswer;

    // Verifica se a resposta está correta
    if (userAnswer === answers[answerId]) {
      select.classList.add("correct");
      score++;
      // submitbutton.style.display = "none";
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_1 = document.querySelectorAll("#quiz-form1 select");
    selects_1.forEach(function (select) {
      select.disabled = true;
    });
  }

  let balaonextButton = document.querySelector(".balao-next-button1"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button1"); //Alterar para o próximo trecho

  // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  if (score === maxScore) {
    submitbutton.style.display= "none";
    balaonextButton.style.display = "block";
    nextButton.style.display = "block";
    nextButton.removeAttribute("disabled");
  } 
  else{
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let selects = document.querySelectorAll("select");
selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 2 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz2_answers = {
  "answer-1-t2": "emília", //Alterar para o próximo trecho
  "answer-2-t2": "narizinho", //Alterar para o próximo trecho

};

// Armazena as respostas do usuário
let quiz2_userAnswers = {};

// Captura o evento de envio do formulário
let quiz2_form = document.querySelector("#quiz-form2"); //Alterar para o próximo trecho
quiz2_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz2_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz2_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz2_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz2_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz2_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz2_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_2 = document.querySelectorAll("#quiz-form2 select");
    selects_2.forEach(function (select) {
      select.disabled = true;
    });
  }

   // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
   let submitButton2 = document.querySelector("#submit-button-2"); //botão submit 2
   if (score === maxScore) {
    submitButton2.style.display= "none";
  } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button2"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button2"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";
    // submitButton2.style.display = 'none'
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz2_selects = document.querySelectorAll("select");
quiz2_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 3 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz3_answers = {
  "answer-1-t3": "visconde", //Alterar para o próximo trecho
  "answer-2-t3": "emília", //Alterar para o próximo trecho
  "answer-3-t3": "visconde",
  
};

// Armazena as respostas do usuário
let quiz3_userAnswers = {};

// Captura o evento de envio do formulário
let quiz3_form = document.querySelector("#quiz-form3"); //Alterar para o próximo trecho
quiz3_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz2_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz3_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz3_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz3_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz3_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz3_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_3 = document.querySelectorAll("#quiz-form3 select");
    selects_3.forEach(function (select) {
      select.disabled = true;
    });
  }

    // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
    let submitButton3 = document.querySelector("#submit-button-3"); //botão submit 3
    if (score === maxScore) {
     submitButton3.style.display= "none";
   } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button3"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button3"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz3_selects = document.querySelectorAll("select");
quiz3_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 4 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz4_answers = {
  "answer-1-t4": "emilia", //Alterar para o próximo trecho
  "answer-2-t4": "nastacia", //Alterar para o próximo trecho
  "answer-3-t4": "nastacia",
  "answer-4-t4": "nastacia",
  "answer-5-t4": "boneca",
};

// Armazena as respostas do usuário
let quiz4_userAnswers = {};

// Captura o evento de envio do formulário
let quiz4_form = document.querySelector("#quiz-form4"); //Alterar para o próximo trecho
quiz4_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz4_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz4_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz4_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz4_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz4_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz4_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_4 = document.querySelectorAll("#quiz-form4 select");
    selects_4.forEach(function (select) {
      select.disabled = true;
    });
  }

     // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
     let submitButton4 = document.querySelector("#submit-button-4"); //botão submit 4
     if (score === maxScore) {
      submitButton4.style.display= "none";
    } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button4"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button4"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";

    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz4_selects = document.querySelectorAll("select");
quiz4_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 5 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz5_answers = {
  "answer-1-t5": "pedrinho", //Alterar para o próximo trecho
  "answer-2-t5": "donabenta", //Alterar para o próximo trecho
  
};

// Armazena as respostas do usuário
let quiz5_userAnswers = {};

// Captura o evento de envio do formulário
let quiz5_form = document.querySelector("#quiz-form5"); //Alterar para o próximo trecho
quiz5_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz5_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz5_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz5_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz5_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz5_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz5_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_5 = document.querySelectorAll("#quiz-form5 select");
    selects_5.forEach(function (select) {
      select.disabled = true;
    });
  }

     // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
     let submitButton5 = document.querySelector("#submit-button-5"); //botão submit 5
     if (score === maxScore) {
      submitButton5.style.display= "none";
    } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button5"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button5"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";

    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz5_selects = document.querySelectorAll("select");
quiz5_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 6 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz6_answers = {
  "answer-1-t6": "donabenta", //Alterar para o próximo trecho
  "answer-2-t6": "tianastacia", //Alterar para o próximo trecho
  "answer-3-t6": "pedrinho",
  "answer-4-t6": "tianastacia",
  
};

// Armazena as respostas do usuário
let quiz6_userAnswers = {};

// Captura o evento de envio do formulário
let quiz6_form = document.querySelector("#quiz-form6"); //Alterar para o próximo trecho
quiz6_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz6_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz6_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz6_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz6_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz6_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz6_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

 // Desabilita os selects de resposta 
 if (score === maxScore){
  let selects_6 = document.querySelectorAll("#quiz-form6 select");
  selects_6.forEach(function (select) {
    select.disabled = true;
  });
}

   // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
   let submitButton6 = document.querySelector("#submit-button-6"); //botão submit 6
   if (score === maxScore) {
    submitButton6.style.display= "none";
  } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button6"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button6"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";

    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz6_selects = document.querySelectorAll("select");
quiz6_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 7 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz7_answers = {
  "answer-1-t7": "donabenta", //Alterar para o próximo trecho

};

// Armazena as respostas do usuário
let quiz7_userAnswers = {};

// Captura o evento de envio do formulário
let quiz7_form = document.querySelector("#quiz-form7"); //Alterar para o próximo trecho
quiz7_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz7_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz7_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz7_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz7_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz7_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz7_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_7 = document.querySelectorAll("#quiz-form7 select");
    selects_7.forEach(function (select) {
      select.disabled = true;
    });
  }

     // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
     let submitButton7 = document.querySelector("#submit-button-7"); //botão submit 2
     if (score === maxScore) {
      submitButton7.style.display= "none";
    } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button7"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button7"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz7_selects = document.querySelectorAll("select");
quiz7_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 8 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz8_answers = {
  "answer-1-t8": "narizinho", //Alterar para o próximo trecho
  "answer-2-t8": "cuca", //Alterar para o próximo trecho
  "answer-3-t8": "cuca",
  "answer-4-t8": "cuca",
  
};

// Armazena as respostas do usuário
let quiz8_userAnswers = {};

// Captura o evento de envio do formulário
let quiz8_form = document.querySelector("#quiz-form8"); //Alterar para o próximo trecho
quiz8_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz8_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz8_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz8_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz8_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz8_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz8_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_8 = document.querySelectorAll("#quiz-form8 select");
    selects_8.forEach(function (select) {
      select.disabled = true;
    });
  }

     // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
     let submitButton8 = document.querySelector("#submit-button-8"); //botão submit 2
     if (score === maxScore) {
      submitButton8.style.display= "none";
    } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button8"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button8"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz8_selects = document.querySelectorAll("select");
quiz8_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 9 -------------------------------------------------

// Define as respostas corretas para cada lacuna
let quiz9_answers = {
  "answer-1-t9": "visconde", //Alterar para o próximo trecho
  "answer-2-t9": "donabenta", //Alterar para o próximo trecho
  "answer-3-t9": "boneca",
 
};

// Armazena as respostas do usuário
let quiz9_userAnswers = {};

// Captura o evento de envio do formulário
let quiz9_form = document.querySelector("#quiz-form9"); //Alterar para o próximo trecho
quiz9_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz9_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz9_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz9_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz9_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz9_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz9_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_9 = document.querySelectorAll("#quiz-form9 select");
    selects_9.forEach(function (select) {
      select.disabled = true;
    });
  }

     // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
     let submitButton9 = document.querySelector("#submit-button-9"); //botão submit 2
     if (score === maxScore) {
      submitButton9.style.display= "none";
    } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector(".balao-next-button9"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#next-button9"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "block";
    balaonextButton.style.display = "block";
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz9_selects = document.querySelectorAll("select");
quiz9_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});

// Trecho - 10 -------------------------------------------------

let submitbuttonTrecho10 = document.getElementById("submit-button-10");

// Define as respostas corretas para cada lacuna
let quiz10_answers = {
  "answer-1-t10": "pedrinho", //Alterar para o próximo trecho
  "answer-2-t10": "visconde", //Alterar para o próximo trecho
  "answer-3-t10": "visconde",
  "answer-4-t10": "pedrinho",
  "answer-5-t10": "visconde",
  "answer-6-t10": "emilia",
  "answer-7-t10": "pedrinho",
};

// Armazena as respostas do usuário
let quiz10_userAnswers = {};

// Captura o evento de envio do formulário
let quiz10_form = document.querySelector("#quiz-form10"); //Alterar para o próximo trecho
quiz10_form.addEventListener("submit", function (event) {
  event.preventDefault();
  quiz10_checkAnswers(); //Alterar para o próximo trecho
});

// Verifica as respostas do usuário e exibe o resultado
function quiz10_checkAnswers() {
  //Alterar para o próximo trecho
  let score = 0;
  let maxScore = Object.keys(quiz10_answers).length; //Alterar para o próximo trecho

  // Verifica cada resposta do usuário
  Object.keys(quiz10_answers).forEach(function (answerId) {
    //Alterar para o próximo trecho
    let select = document.querySelector("#" + answerId);
    let userAnswer = select.value.toLowerCase();
    quiz10_userAnswers[answerId] = userAnswer; //Alterar para o próximo trecho

    // Verifica se a resposta está correta
    if (userAnswer === quiz10_answers[answerId]) {
      //Alterar para o próximo trecho
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("incorrect");
    }
  });

   // Desabilita os selects de resposta 
   if (score === maxScore){
    let selects_10 = document.querySelectorAll("#quiz-form10 select");
    selects_10.forEach(function (select) {
      select.disabled = true;
    });
  }

  // Desabilitar o botão "Verificar resposta" se todas as respostas estiverem corretas
  if (score === maxScore) {
    submitbuttonTrecho10.style.display= "none";
  } 

  // Habilita o botão "Avançar" se todas as respostas estiverem corretas
  let balaonextButton = document.querySelector("#cuca-parabens"); //Alterar para o próximo trecho
  let nextButton = document.querySelector("#bt-avancar-secao3"); //Alterar para o próximo trecho
  if (score === maxScore) {
    nextButton.style.display = "initial";
    balaonextButton.style.display = "initial";
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

// Remove a classe "correct" ou "incorrect" ao selecionar uma nova opção
let quiz10_selects = document.querySelectorAll("select");
quiz10_selects.forEach(function (select) {
  select.addEventListener("change", function () {
    select.classList.remove("correct", "incorrect");
  });
});
