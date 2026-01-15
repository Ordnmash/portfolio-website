const ca = document.getElementById("current-age");
const birthDate = new Date("2007-06-13T00:00:00Z");

function ageUpdate(){
  const now = new Date();
  const ageMilliseconds = now - birthDate;
  const ageMillisecondsYear = 1000 * 60 * 60 * 24 * 365.2425;
  const ageInYears = ageMilliseconds / ageMillisecondsYear;
  
  ca.textContent = ageInYears.toFixed(12);
  requestAnimationFrame(ageUpdate);
}

ageUpdate();

const passcode = "mash3Nine";
const security = document.getElementById("security");
const message = document.getElementById("messages");
const bio = document.getElementById("bio-cover");

security.addEventListener("click", function (e) {

  if (e.target.id === "passcode-btn") {
    enterpass();
  }

  if (e.target.id === "back") {
    closeInput();
  }

  if (e.target.id === "submit") {
    submitCode();
  }
});

function enterpass() {
  security.innerHTML = `
    <span class="material-symbols-outlined" id="back">
      arrow_back_ios_new
    </span>
    <input type="text" id="input-passcode" placeholder="Enter passcode">
    <button id="submit">submit</button>
  `;
}

function closeInput() {
  security.innerHTML = `
    <span>for all hidden info:</span>
    <button id="passcode-btn">enter passcode</button>
  `;
  message.innerText = "";
}

function submitCode() {
  const codeValue = document.getElementById("input-passcode").value;

  if (!codeValue) {
    message.innerText = "enter code";
    return;
  }

  if (codeValue === passcode) {
    bio.classList.add("show");
    message.innerText = "access granted";
    security.innerHTML = ``;
  } else {
    message.innerText = "incorrect code!";
  }
}