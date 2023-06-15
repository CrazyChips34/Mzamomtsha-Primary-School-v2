window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
  
    // Get elements
    var showLives = document.getElementById("myLives");
    var showCatagory = document.getElementById("catagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  var myButtons;
  var letters;
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Popular Songs";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Popular Cartoons";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The Chosen Category Is Countries";
      }else if (chosenCategory === categories[3]) {
        catagoryName.innerHTML = "The Chosen Category Is Subjects";
      }else if (chosenCategory === categories[4]) {
        catagoryName.innerHTML = "The Chosen Category Is Sports";
      }else if (chosenCategory === categories[5]) {
        catagoryName.innerHTML = "The Chosen Category Is Popular Movies";
      }else if (chosenCategory === categories[6]) {
        catagoryName.innerHTML = "The Chosen Category Is Stationary";
      }else if (chosenCategory === categories[7]) {
        catagoryName.innerHTML = "The Chosen Category Is Fruit";
      }else if (chosenCategory === categories[8]) {
        catagoryName.innerHTML = "The Chosen Category Is Food";
      }
    }
  
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "Lives: " + lives;
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }

    /*function updateMeltingSnowmanGraphic() {
      const meltingSnowmanContainer = document.querySelector('.MeltingSnowman');
      meltingSnowmanContainer.innerHTML = `<img src="images/MeltingSnowman${imageCount}.gif" alt="MeltingSnowman ${imageCount}">`;
      imageCount++;
    }*/
  
      // Animate man
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
     // Hangman
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
      categories = [
        ['shape-of-you', 'shake-it-off', 'hello', 'god-is-a-woman', 'uptown-funk', 'butter','flowers','despacito'],
        ['finding-nemo', 'cars', 'coco', 'moana', 'sing', 'smurfs', 'despicable-me','tangled'],
        ['south-africa','south-korea', 'japan', 'france', 'spain','germany','brazil','australia'],
        ['mathematics', 'geography', 'life-orientation', 'english', 'afrikaans', 'history', 'accounting', 'natural-sciences'],
        ['soccer', 'rugby', 'cricket', 'softball', 'netball', 'volleyball', 'basketball', 'athletics'],
        ['titanic','fast-and-furious', 'harry-potter', 'narnia','jurassic-park', 'star-wars','mean-girls','superman'],
        ["pencil", "eraser", "textbook", "notebook", "pencil case", "pen", "crayons", "highlighters"],
        ["apple", "banana", "grapes", "coconut", "tomato", "strawberries", "pineapple", "oranges"],
        ["pasta", "pizza", "doughnut", "fries", "fried chicken", "curry", "mac n cheese", "burger"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
    // Hint
  
      hint.onclick = function() {
  
        hints = [
          ["Song by Ed Sheeran", "Song by Taylor Swift", "Song by Adele", "Song by Ariana Grande", "Song by Bruno Mars", "Song by a Korean Boy Group", "Song named after a plant", "Spanish song"],
          ["A movie about a fish", "Cartoon about racing", "Mexican cartoon", "The main character is connected to the ocean", "Animals doing a talent show", "Blue small people", "Yellow characters", "Main character has long hair"],
          ["Country in Africa", "The capital city of this country is Seoul", "The flag is a red dot", "The Eiffel Tower is found in this country", "A country in Europe", "A country involved in World War 2", "Statue of Christ the Redeemer is found here","Venomous spiders are common in this country"],
          ["Numbers and letters are calculated in this subject", "The study of the Earth", "A subjects that invloves skills,values, and growth", "A languauge subject", "A language subject", "A subject that invloves learning about the past","A subject that deals with finances", "Chemistry and physics is taught in this subject"],
          ["Sport you play with your feet", "A popular sport in South Africa", "A sport played with a bat", "A female sport with a bat", "A female sport", "A sport where two teams of six players are separated by a net", "A sport that invloves a hoop", "One of the many sports include javelin"],
          ["Iceberg","A movie involving cars", "A child who is a wizard", "Four children walking into a closet", "Dinosaurs", "Lightsaber", "On Wednesdays we wear pink","I wear a red and blue suit"],
          ["Writing tool","Takes away mistakes", "Learn knowledge from it", "Write content in this tool", "A storage for various tools", "Writing tool that is permanent", "Made of wax","Bright colors"],
          ["Can be red, green and yellow","Yellow", "Used to make wine", "Hairy", "Can be mistaken for a vegetable", "Red", "Spongebob lives there","The name of it is a name of the color"],
          ["Claims to originate in Italy but can be traced back to China and Etruscan","The world's favourite fast food", "Has a whole in it", "McDonald's has the best .....?", "Coated in batter", "Spicy South Asian Cuisine", "Made with a type of pasta, creamy sauce and topped with something","Has a lot of layers"],
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue:  " +  hints [catagoryIndex][hintIndex];
    };
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
}
  
  
  