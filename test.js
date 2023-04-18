let question = [{
    num: 1,
    title: "\"print 39//2\" equals",
    option: ["19", "19.5", "19.0", "Error"],
    ans: "a"
  },
  {
    num: 2,
    title: "print Hello World[::-1]",
    option: ["dlroW olleH", "Hello Worl", "d", "Error"],
    ans: "a"
  },
  {
    num: 3,
    title: "The module in Python that supports regular expressions is",
    option: ["regularEx", "pyregX", "regex", "None"],
    ans: "c"
  },
  {
    num: 4,
    title: "What does ~~~~~~5 evaluate to?",
    option: ["11", "-1", "-5", "5"],
    ans: "d"
  },
  {
    num: 5,
    title: "Which of these is not a core data type?",
    option: ["Lists", "Dictionary", "Tuples", "Class"],
    ans: "d"
  },
  {
    num: 6,
    title: "What data type is the object below ? X = [90, 65, ‘hello’, -23]",
    option: ["Lists", "Dictionary", "Tuples", "Class"],
    ans: "a"
  },
  {
    num: 7,
    title: "To start Python from the command prompt, we use the command ______",
    option: ["execute python", "python", "go python", "run pyhton"],
    ans: "b"
  },
  {
    num: 8,
    title: "Which of the following is correct about Python?",
    option: ["It supports automatic garbage collection", "It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java", "Both", "None"],
    ans: "c"
  },
  {
    num: 9,
    title: "L = ['a','b','c','d']. Now printing with join() function will give what?",
    option: ["['a','b','c','d']", "abcd", "Error", "None"],
    ans: "b"
  },
  {
    num: 10,
    title: "Which of the following is correct about Python?",
    option: ["Statically Typed", "Dynamically Typed", "Loosely Typed", "None"],
    ans: "b"
  },
  {
    num: 11,
    title: "Python is a case-sensitive language?",
    option: ["Yes", "No", "Can't be answered", "Not Valid"],
    ans: "a"
  },
  {
    num: 12,
    title: "Choose the best time complexity.",
    option: ["O(log(n))", "O(n)", "O(n^2)", "O(n!)"],
    ans: "a"
  },
  {
    num: 13,
    title: "Choose the worst time complexity",
    option: ["O(2^N)", "O(n^7)", "O(n^(1/2))", "O(n)"],
    ans: "a"
  },
  {
    num: 14,
    title: "Which of the following best describes the useful criterion for comparing the efficiency of algorithms?",
    option: ["Time Complexity", "Space Complexity", "Both", "None"],
    ans: "c"
  },
  {
    num: 15,
    title: "Algorithm A and B have a worst-case running time of O(Sqrt(n)) and O(logn), respectively. Therefore, algorithm B always runs faster than algorithm A.",
    option: ["Yes", "No", "Same Speed","Can't be predicted"],
    ans: "a"
  }
];


let abc = ["a", "b", "c", "d"];
let sum = 0;
let interval;
let opt;
let startBox = document.querySelector(".starter");
let container = document.querySelector(".container");
let queBox = document.querySelector(".question-box");
let nextBtn = document.getElementById("next-btn");
let finishBtn = document.getElementById("finish-btn");
let timerDiv = document.querySelector(".timer");
let resultBox = document.querySelector(".result-box");
let index = 0;
const eachTime = 60;
let timeLimit = question.length * eachTime;
const fixedTime = timeLimit;
// start quiz
function startQuiz(starter) {
  startBox.classList.add("hide");
  container.classList.remove("hide");
  interval = setInterval(timer, 1000);
}

for (i = 0; i < question.length; i++) {
  queBox.innerHTML +=
    `<div class='section' id='${question[i].num}'>` +
    `<p class='title'>${question[i].title}</p>` +
    `</div>`;
  let section = queBox.querySelectorAll(".section");
  for (k = 0; k < 4; k++) {
    section[
      i
    ].innerHTML += `<div id='${abc[k]}'>(${abc[k]}) ${question[i].option[k]}</div>`;
  }
}
section = queBox.querySelectorAll(".section");
section.forEach((section1) => {
  opt = section1.querySelectorAll("div");
  let input = document.createElement("input");
  input.hidden = true;
  input.readOnly = true;
  section1.appendChild(input);
  opt.forEach((opt1) => {
    opt1.onclick = (e) => {
      section1.querySelectorAll("div").forEach((optR) => {
        optR.classList.remove("selected");
      });
      opt1.classList.add("selected");
      input.value = e.target.id;
    };
  });
});

function increament() {
  index++;
  if (index < question.length) {
    queBox.style.transform = `translateX(${-section[0].offsetWidth * index}px)`;
  }
  if (index == question.length - 1) {
    nextBtn.classList.add("hide");
    finishBtn.classList.remove("hide");
  }
}
nextBtn.onclick = () => {
  increament();
};

finishBtn.onclick = () => {
  clearInterval(interval);
  index = 0;
  container.classList.add("hide");
  resultBox.classList.remove("hide");
  for (j = 0; j < section.length; j++) {
    if (section[j].querySelector("input").value == question[j].ans) {
      sum++;
      section[j].querySelector(".selected").innerHTML +=
        "<i class='fa fa-check ricon'></i>";
    } else if (section[j].querySelector(".selected")) {
      section[j].querySelector(".selected").classList.add("wrong");
      section[j].querySelector(".selected").innerHTML +=
        "<i class='fa fa-times ricon'></i>";
    }
  }
  resultBox.querySelector("#got-num").innerHTML = sum;
  resultBox.querySelector("#total-num").innerHTML = question.length;
};

function replay() {
  sum = 0;
  index = 0;
  timeLimit = fixedTime;
  clearInterval(interval);
  interval = setInterval(timer, 1000);

  container.classList.remove("hide");
  resultBox.classList.add("hide");
  nextBtn.classList.remove("hide");
  finishBtn.classList.add("hide");
  queBox.style.transform = `translateX(0px)`;
  queBox.style.pointerEvents = "initial";
  queBox.querySelectorAll("div").forEach((opt2) => {
    opt2.classList.remove("selected", "correct", "wrong");
  });
  queBox.querySelectorAll(".ricon").forEach((ricon) => {
    ricon.remove();
  });
  queBox.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

function resultShow() {
  index = 0;
  sum = 0;
  container.classList.remove("hide");
  resultBox.classList.add("hide");
  nextBtn.classList.remove("hide");
  finishBtn.classList.remove("hide");
  queBox.style.transform = `translateX(0px)`;
  for (m = 0; m < question.length; m++) {
    section[m].querySelector(`#${question[m].ans}`).classList.add("correct");
  }
  queBox.style.pointerEvents = "none";
}
// timer start
let min = (timeLimit / 60).toString().split(".")[0];
let sec = timeLimit % 60;
if (min < 10) min = "0" + min;
if (sec < 10) sec = "0" + sec;
timerDiv.innerHTML = min + " : " + sec;

function timer() {
  timeLimit--;
  min = (timeLimit / 60).toString().split(".")[0];
  sec = timeLimit % 60;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  if (timeLimit == 0) {
    clearInterval(interval);
    nextBtn.classList.add("hide");
    finishBtn.classList.remove("hide");
    queBox.style.pointerEvents = "none";
  }
  timerDiv.innerHTML = min + " : " + sec;
}
//timer end
document.onkeydown = (e) => {
  e.preventDefault();
  if (e.keyCode == 13 && index + 1 < question.length) {
    increament();
  }
};
window.onresize = () => {
  queBox.style.transform = `translateX(${-section[0].offsetWidth * index}px)`;
};
window.oncontextmenu = (e) => {
  e.preventDefault();
};
