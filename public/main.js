const getDataFromBackend = async () => {
  const rest = await fetch('http://localhost:8000/notion');
  const data = await rest.json();

  return data;
};

const container = document.getElementById('container');

const createQuestion = (question) => {
  const questionElement = document.createElement('h3');
  questionElement.classList.add('question');
  const questionNode = document.createTextNode(question);

  questionElement.appendChild(questionNode);

  return questionElement;
};

const createAnswers = (value) => {
  const answersDiv = document.createElement('div');
  answersDiv.classList.add('answersDiv');

  for (let i = 0; i < value.answers.length; i++) {
    const answerElement = document.createElement('p');
    answerElement.classList.add('answerOption');
    const answerNode = document.createTextNode(value.answers[i].name);

    answerElement.addEventListener('click', () => {
      answerElement.style.color = 'white';
      if (value.answers[i].name !== value.correct) {
        answerElement.style.backgroundColor = '#f55142';
      } else {
        answerElement.style.backgroundColor = '#6dbf39';
      }
    });

    answerElement.appendChild(answerNode);

    answersDiv.appendChild(answerElement);
  }

  return answersDiv;
};

// Add data to HTML
const addData = async () => {
  const data = await getDataFromBackend();

  data.forEach((value, index) => {
    const div = document.createElement('div');
    div.classList.add('questionContainer');

    const numberElement = document.createElement('p');
    numberElement.classList.add('numberElement');
    numberElement.innerHTML = `Question ${index + 1}`;

    div.appendChild(numberElement);

    const question = createQuestion(value.question);

    div.appendChild(question);

    const answers = createAnswers(value);

    div.appendChild(answers);

    container.append(div);
  });
};

addData();
