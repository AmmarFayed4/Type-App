// get all html elements in vars
let myStart = document.querySelector(".srt-btn"),
  eLevel = document.querySelector(".e"),
  mLevel = document.querySelector(".m"),
  hLevel = document.querySelector(".h"),
  container = document.querySelector(".con-d"),
  theWord = document.querySelector(".w-c"),
  timer = document.querySelector(".t-c span"),
  theInput = document.querySelector(".in-p"),
  theBtn = document.querySelector(".ch-k");
// set the arrays of the levels
const eArray = ["code", "word", "bed", "cat", "cool", "done"];
const mhArray = ["school", "water", "gallery", "music", "calender", "contacts"];
// remove manue of the levels
eLevel.onclick = () => {
  myStart.remove();
  theInput.focus();
  timer.innerHTML = 30;
  let counter = setInterval(() => {
    timer.innerHTML = parseInt(timer.innerHTML) - 1;
    // if the time is over then the game is over
    if (timer.innerHTML === "0") {
      clearInterval(counter);
      let myDiv = document.createElement("div"),
        mySpan = document.createElement("span"),
        myText = document.createTextNode("Try Again");
      mySpan.appendChild(myText);
      myDiv.appendChild(mySpan);
      myDiv.className = "tr-y";
      document.body.appendChild(myDiv);
      mySpan.onclick = () => {
        location.reload();
      };
    }
  }, 1000);
  shuffle(eArray);
  let i = 0;
  theWord.innerHTML = eArray[i++];
  theInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      if (theInput.value === theWord.innerHTML) {
        theInput.value = "";
        theInput.focus();
        theWord.innerHTML = eArray[i++];
        if (i === eArray.length) {
          clearInterval(counter);
          theInput.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
              location.reload();
            }
          });
          let myDiv1 = document.createElement("div"),
            mySpan1 = document.createElement("span"),
            myText1 = document.createTextNode("go to next level");
          mySpan1.appendChild(myText1);
          myDiv1.appendChild(mySpan1);
          myDiv1.className = "su-c";
          document.body.appendChild(myDiv1);
          mySpan1.focus();
          mySpan1.onclick = () => {
            location.reload();
          };
        }
      } else {
        let myDiv = document.createElement("div"),
          mySpan = document.createElement("span"),
          myText = document.createTextNode("Try Again");
        mySpan.appendChild(myText);
        myDiv.appendChild(mySpan);
        myDiv.className = "tr-y";
        document.body.appendChild(myDiv);
        mySpan.onclick = () => {
          location.reload();
        };
      }
    }
  });
};
mLevel.onclick = () => {
  myStart.remove();
  theInput.focus();
  timer.innerHTML = 30;
  let counter = setInterval(() => {
    timer.innerHTML = parseInt(timer.innerHTML) - 1;
    // if the time is over then the game is over
    if (timer.innerHTML === "0") {
      clearInterval(counter);
      let myDiv = document.createElement("div"),
        mySpan = document.createElement("span"),
        myText = document.createTextNode("Try Again");
      mySpan.appendChild(myText);
      myDiv.appendChild(mySpan);
      myDiv.className = "tr-y";
      document.body.appendChild(myDiv);
      mySpan.onclick = () => {
        location.reload();
      };
    }
  }, 1000);
  shuffle(mhArray);
  let i = 0;
  theWord.innerHTML = mhArray[i++];
  theInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      if (theInput.value === theWord.innerHTML) {
        theInput.value = "";
        theInput.focus();
        theWord.innerHTML = mhArray[i++];
        if (i === mhArray.length) {
          clearInterval(counter);
          let myDiv1 = document.createElement("div"),
            mySpan1 = document.createElement("span"),
            myText1 = document.createTextNode("go to next level");
          mySpan1.appendChild(myText1);
          myDiv1.appendChild(mySpan1);
          myDiv1.className = "su-c";
          document.body.appendChild(myDiv1);
          mySpan1.onclick = () => {
            location.reload();
          };
        }
      } else {
        let myDiv = document.createElement("div"),
          mySpan = document.createElement("span"),
          myText = document.createTextNode("Try Again");
        mySpan.appendChild(myText);
        myDiv.appendChild(mySpan);
        myDiv.className = "tr-y";
        document.body.appendChild(myDiv);
        mySpan.onclick = () => {
          location.reload();
        };
      }
    }
  });
};
hLevel.onclick = () => {
  myStart.remove();
  theInput.focus();
  timer.innerHTML = 20;
  let counter = setInterval(() => {
    timer.innerHTML = parseInt(timer.innerHTML) - 1;
    // if the time is over then the game is over
    if (timer.innerHTML === "0") {
      clearInterval(counter);
      let myDiv = document.createElement("div"),
        mySpan = document.createElement("span"),
        myText = document.createTextNode("Try Again");
      mySpan.appendChild(myText);
      myDiv.appendChild(mySpan);
      myDiv.className = "tr-y";
      document.body.appendChild(myDiv);
      mySpan.onclick = () => {
        location.reload();
      };
    }
  }, 1000);
  shuffle(mhArray);
  let i = 0;
  theWord.innerHTML = mhArray[i++];
  theInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      if (theInput.value === theWord.innerHTML) {
        theInput.value = "";
        theInput.focus();
        theWord.innerHTML = mhArray[i++];
        if (i === mhArray.length) {
          clearInterval(counter);
          let myDiv1 = document.createElement("div"),
            mySpan1 = document.createElement("span"),
            myText1 = document.createTextNode("go to next level");
          mySpan1.appendChild(myText1);
          myDiv1.appendChild(mySpan1);
          myDiv1.className = "su-c";
          document.body.appendChild(myDiv1);
          mySpan1.onclick = () => {
            location.reload();
          };
        }
      } else {
        let myDiv = document.createElement("div"),
          mySpan = document.createElement("span"),
          myText = document.createTextNode("Try Again");
        mySpan.appendChild(myText);
        myDiv.appendChild(mySpan);
        myDiv.className = "tr-y";
        document.body.appendChild(myDiv);
        mySpan.onclick = () => {
          location.reload();
        };
      }
    }
  });
};
// shffule function
function shuffle(array) {
  // settings vars
  let current = array.length;
  let temp;
  let random;
  while (current > 0) {
    // get random element
    random = Math.floor(Math.random() * current);
    // decrease length by one
    current--;
    // [1] save current element in stach
    temp = array[current];
    // [2] current Element = random Element
    array[current] = array[random];
    // [3] random Element = get Element from stach
    array[random] = temp;
  }
  return array;
}
