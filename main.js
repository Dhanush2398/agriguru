function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
  document.getElementById('authButtons').classList.toggle('show');
}



// Get modal elements
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// Get button elements
document.getElementById("loginBtn").onclick = () => loginModal.style.display = "block";
document.getElementById("signupBtn").onclick = () => signupModal.style.display = "block";

// Close modals when clicking on X
document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.onclick = () => {
    document.getElementById(closeBtn.dataset.close).style.display = "none";
  };
});

// Close modals when clicking outside content
window.onclick = (event) => {
  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === signupModal) signupModal.style.display = "none";
};




const questions = [
  {
    question: "In the Universal Soil Loss Equation, the soil erodibility factor K is_?",
    options: ["Measure of the susceptibility of soil particles to detachment and transport", "Slope length gradient factor", "Crop management factor", "Rainfall-runoff factor"],
    answer: "Measure of the susceptibility of soil particles to detachment and transport"
  },
  {
    question: "The most sensitive stage of rice to soil moisture stress is __ ?",
    options: ["Panicle initiation", "Booting", "Early heading", "Flowering"],
    answer: "Panicle initiation"
  },
  {
    question: "Protein found in wheat is?",
    options: ["Zein", "Oryzenin", "Gluten", "Albumin"],
    answer: "Gluten"
  }
];

let current = 0;
let score = 0;
let selectedAnswer = "";

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      selectedAnswer = option;
      document.querySelectorAll('#options button').forEach(b => b.classList.remove('selected'));
      btn.classList.add("selected");
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  if (selectedAnswer === questions[current].answer) {
    score++;
  }
  current++;
  selectedAnswer = "";
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
  }
}

loadQuestion();

 function openPopup() {
      document.getElementById("popup").style.display = "block";
}
 function closePopup() {
      document.getElementById("popup").style.display = "none";
}

