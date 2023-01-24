let question = [{
    num: 1,
    title: "\"The convicted criminal absconded prior to the sentencing phase of the trial\". Here 'Absconded' means",
    option: ["Touched the jury", "Reported immediately", "Left after discussion", "Departed secretly"],
    ans: "d"
  },
  {
    num: 2,
    title: "\"The cathode of a battery was removed\". Here 'Cathode' means",
    option: ["Positive pole", "Negative pole", "Neutral pole", "Opposite pole"],
    ans: "b"
  },
  {
    num: 3,
    title: "\"The attorney accused the witness of defaming the defendant\". Here 'Defaming' means",
    option: ["Killing", "Badgering", "Suffocating", "Slandering"],
    ans: "d"
  },
  {
    num: 4,
    title: "\"The scientist was able to evoke powerful emotions from her audience\". Here 'Evoke' means",
    option: ["Sell", "Calm", "Call forth", "Exaggerate"],
    ans: "c"
  },
  {
    num: 5,
    title: "You won't get very wet if you leave now as it's only _______",
    option: ["pouring", "drizzling", "damping", "sliding"],
    ans: "b"
  },
  {
    num: 6,
    title: "He is on holiday _____ dubai now.",
    option: ["in", "at", "to", "for"],
    ans: "a"
  },
  {
    num: 7,
    title: "We ____ done it yet.",
    option: ["don't", "didn't", "hasn't", "haven't"],
    ans: "d"
  },
  {
    num: 8,
    title: "They ____ rung back yet.",
    option: ["have", "has", "haven't", "hasn't"],
    ans: "c"
  },
  {
    num: 9,
    title: "____ you learn it when you were at school?",
    option: ["Do", "Does", "Did", "Have"],
    ans: "c"
  },
  {
    num: 10,
    title: "I ____ had time to do it yet.",
    option: ["didn't", "haven't", "hasn't", "don't"],
    ans: "b"
  },
  {
    num: 11,
    title: "I didn't expect that she ____ be there.",
    option: ["will", "would", "be", "been"],
    ans: "b"
  },
  {
    num: 12,
    title: "If you had to make a choice, what ____ you decide on?",
    option: ["will", "would", "shall", "will have"],
    ans: "b"
  },
  {
    num: 13,
    title: "A ____ of sound advice",
    option: ["bunch", "slice", "piece", "horde"],
    ans: "c"
  },
  {
    num: 14,
    title: "______ the better team, we lost the match.",
    option: ["Despite of being", "Despite", "Despite being", "Although"],
    ans: "c"
  },
  {
    num: 15,
    title: "The best synonym for the word 'futile': ",
    option: ["animated", "petty", "pointless", "self-centered"],
    ans: "c"
  },
  {
    num: 16,
    title: "The best synonym for the word 'ponder':",
    option: ["sing loudly", "hold on", "put down", "think about"],
    ans: "d"
  },
  {
    num: 17,
    title: "The best synonym for the word 'bleak':",
    option: ["gentle", "unhealthily thin", "disgusting", "depressing"],
    ans: "d"
  },
  {
    num: 18,
    title: "The best synonym for the word 'vitality':",
    option: ["liveliness", "highlight", "joy", "courage"],
    ans: "a"
  },
  {
    num: 19,
    title: "The best synonym for the word 'aisle':",
    option: ["settlement", "cliff", "passage", "pond"],
    ans: "c"
  },
  {
    num: 20,
    title: "To kill someone by hanging.",
    option: ["Bluster", "Lynch", "Finagle", "Ordain"],
    ans: "b"
  },
  {
    num: 21,
    title: "Where's the ______ post office, please?",
    option: ["most near", "near", "more near", "nearest"],
    ans: "d"
  },
  {
    num: 22,
    title: "We would never have had the accident if you ______ so fast.",
    option: ["wouldn't been driving", "hadn't been driving", "had driven", "wouldn't drive"],
    ans: "b"
  },
  {
    num: 23,
    title: "I'd like ______ information, please.",
    option: ["an", "some", "piece", "a piece"],
    ans: "b"
  },
  {
    num: 24,
    title: "We arrived ______ England two days ago.",
    option: ["to", "in", "on", "at"],
    ans: "b"
  },
  {
    num: 25,
    title: "If only I ______ richer.",
    option: ["am", "were", "would be", "will be"],
    ans: "c"
  },
  {
    num: 26,
    title: "Choose the one with a different meaning.",
    option: ["thingy", "tank", "thing", "item"],
    ans: "b"
  },
  {
    num: 27,
    title: "Choose the one with a different meaning.",
    option: ["beside", "prior to", "in advance", "by"],
    ans: "a"
  },
  {
    num: 28,
    title: "An area of a seawater separated by a reef or low sandbank.",
    option: ["Coherence", "Rout", "Lagoon", "Underscore"],
    ans: "c"
  },
  {
    num: 29,
    title: "A person who is unfairly blamed.",
    option: ["Adobe", "Decorum", "Scapegoat", "Boychick"],
    ans: "c"
  },
  {
    num: 30,
    title: "To be ________ means to have a good characteristic.",
    option: ["Aesthetic", "Amicable", "Anachronistic", "Arid"],
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
const eachTime = 30;
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
