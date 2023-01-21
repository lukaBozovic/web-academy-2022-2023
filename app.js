const questions = [
    {
      topic: "Pogodite grad u Crnoj Gori",
      words: [
        "podgorica",
        "budva",
        "bar",
        "kolašin",
        "danilovgrad",
        "tivat",
        "kotor"
      ]
    },
    {
      topic: "Pogodite programski jezik",
      words:[
        "javascript",
        "php",
        "cpp",
        "csharp",
        "kotlin"
      ]
    }
  ];
  const letters = ['a','b','c','č','ć','d','dž','đ','e','f','g','h','i','j','k','l','lj','m','n','nj','o','p','r','s','š','t','u','v','z','ž'];

  var topic = document.getElementById('topic');
  var hiddenWordDiv = document.getElementById('hiddenWord');
  var img = document.getElementById('img');
  var keyboard = document.getElementById('keyboard');
  var mistakesNumber = document.getElementById('mistakesNumber');


  var numberOfMistakes = 0;

  function displayKeyboard(){
    let buttonsHtml = [];
    letters.forEach((letter) => {
      buttonsHtml.push(`<button id="button_${letter}"
       class="btn btn-primary m-2">${letter}</button>`);
    })
    keyboard.innerHTML = buttonsHtml.join("");

    letters.forEach((letter) => {
      document.getElementById("button_" + letter).addEventListener('click', (e) => {pickLetter(letter)});
    });
  }

  var randomQuestion = undefined;
  var randomWord = undefined;
  var hiddenWord = undefined;
  var hiddenWordDisplay = undefined;
  function displayContent(){
      randomQuestion = generateRandomElement(questions);
      randomWord = generateRandomElement(randomQuestion.words);
      topic.innerHTML = `<h3>${randomQuestion.topic}</h3>`;

      hiddenWord = '';
      hiddenWordDisplay = '';
      for (let i = 0; i < randomWord.length; i++){
        hiddenWord += '_';
        hiddenWordDisplay += '_ '
      }
      hiddenWordDiv.innerHTML = `<h3>${hiddenWordDisplay}</h3>`;
  }

  function generateRandomElement(array){
    return array[Math.floor(Math.random() * array.length)];
  }

  function replaceChar(index, str, replacement){
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
  }

  function pickLetter(letter){
    if (randomWord.includes(letter)){

        for(let i = 0; i < randomWord.length; i++){
          if (randomWord[i] == letter){
            hiddenWord = replaceChar(i, hiddenWord, letter);
          }
        }

        let hiddenWordDisplayTemp = "";
        for(let i = 0; i < hiddenWord.length; i++){
          hiddenWordDisplayTemp += hiddenWord[i] + " ";
        }
        hiddenWordDisplay = hiddenWordDisplayTemp;
        hiddenWordDiv.innerHTML = `<h3>${hiddenWordDisplay}</h3>`
    }
    else{
      numberOfMistakes++;
      img.innerHTML = `<img src="./img/${numberOfMistakes}.png" alt="">`
      document.getElementById("button_" + letter).setAttribute('disabled', '');
      mistakesNumber.innerHTML = "Broj pokusaja " + numberOfMistakes + " od 6"
      if (numberOfMistakes == 6){
        console.log("Zavrsena igra");
      }
    }
  }
 
  displayKeyboard();
  displayContent();


   