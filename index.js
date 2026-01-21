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

const toggles = document.querySelector(".toggles");
const panels = document.querySelectorAll(".panel");
const contents = document.querySelectorAll(".content");

toggles.addEventListener("click", (e) => {
  const panel = e.target.closest(".panel");
  if (!panel) return; // click wasn't on a panel

  // Remove active from all panels & contents
  panels.forEach(p => p.classList.remove("active"));
  contents.forEach(c => c.classList.remove("active"));

  // Activate clicked panel
  panel.classList.add("active");

  // Figure out which content to show
  const name = panel.id.replace("-panel", "");
  document.getElementById(`${name}-content`).classList.add("active");
});

