const summarybtn = document.getElementById("summary-btn");
const projectsbtn = document.getElementById("projects-btn");
const detailsbtn = document.getElementById("details-btn");
const commentbtn = document.getElementById("comment_");
const closeCommentbtn = document.getElementById("closeComment-btn");
const sendCommentbtn = document.getElementById("sendComment-btn");

const summarySection = document.getElementById("summary-section");
const projectsSection = document.getElementById("projects-section");
const detailsSection = document.getElementById("details-section");
const outint = document.getElementById("outint");
const inint = document.getElementById("inint");
const commentInput = document.getElementById("comment_to");

commentbtn.addEventListener("click", function(){
  outint.classList.remove("active");
  inint.classList.add("active");

  let mycode = setInterval(() =>{
    if (commentInput.value.length > 0){
      closeCommentbtn.classList.remove("active");
      sendCommentbtn.classList.add("active");
    } else {
      closeCommentbtn.classList.add("active");
      sendCommentbtn.classList.remove("active");
    };
  }, 1);
});
closeCommentbtn.addEventListener("click", function(){
  outint.classList.add("active");
  inint.classList.remove("active");
  clearInterval(mycode);
});

summarybtn.addEventListener("click", function(){
  summarybtn.classList.add("active");
  projectsbtn.classList.remove("active");
  detailsbtn.classList.remove("active");
  
  // screen display control
  summarySection.classList.add("active");
  projectsSection.classList.remove("active");
  detailsSection.classList.remove("active");
});
projectsbtn.addEventListener("click", function(){
  projectsbtn.classList.add("active");
  summarybtn.classList.remove("active");
  detailsbtn.classList.remove("active");
  
  // screen display control
  projectsSection.classList.add("active");
  summarySection.classList.remove("active");
  detailsSection.classList.remove("active");
});
detailsbtn.addEventListener("click", function(){
  detailsbtn.classList.add("active");
  summarybtn.classList.remove("active");
  projectsbtn.classList.remove("active");
  
  // screen display control
  detailsSection.classList.add("active");
  projectsSection.classList.remove("active");
  summarySection.classList.remove("active");
});

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