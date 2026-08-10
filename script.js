const summarybtn      = document.getElementById("summary-btn");
const projectsbtn     = document.getElementById("projects-btn");
const detailsbtn      = document.getElementById("details-btn");
const topmenubtn      = document.getElementById("topmenu");
const commentbtn      = document.getElementById("comment_");
const closeCommentbtn = document.getElementById("closeComment-btn");
const sendCommentbtn  = document.getElementById("sendComment-btn");

const summarySection  = document.getElementById("summary-section");
const projectsSection = document.getElementById("projects-section");
const detailsSection  = document.getElementById("details-section");
const outint          = document.getElementById("outint");
const inint           = document.getElementById("inint");
const commentInput    = document.getElementById("comment_to");
const topmenushow     = document.getElementById("right-tv");
const topmenublank    = document.getElementById("topmenu-blank");
const tvnames         = document.getElementById("tv-names");
const righttv         = document.getElementById("right-tv");

const red             = document.getElementById("red");
const yellow          = document.getElementById("yellow");
const green           = document.getElementById("green");

topmenubtn.addEventListener("click", function(){
  topmenushow.classList.add("active");
  tvnames.classList.add("notactive");
  topmenublank.classList.add("active");
  topmenubtn.classList.remove("active");
  righttv.classList.add("active");
});
topmenublank.addEventListener("click", function(){
  topmenushow.classList.remove("active");
  tvnames.classList.remove("notactive");
  topmenublank.classList.remove("active");
  topmenubtn.classList.add("active");
  righttv.classList.remove("active")
});

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

function animateColors(){
  let nowon = Math.random() * 3;
  setInterval(() =>{
    if (nowon <= 1){
      red.classList.add('active');
      yellow.classList.remove('active');
      green.classList.remove('active');
      nowon = Math.random() * 3;
    }
    else if (nowon <= 2){
      red.classList.remove('active');
      yellow.classList.add('active');
      green.classList.remove('active');
      nowon = Math.random() * 3;
    }
    else {
      red.classList.remove('active');
      yellow.classList.remove('active');
      green.classList.add('active');
      nowon = Math.random() * 3;
    }
  }, 150);
};
animateColors();

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
  tvnames.classList.remove("notactive");
  topmenublank.classList.remove("active");
  topmenubtn.classList.add("active");
  righttv.classList.remove("active")
});
projectsbtn.addEventListener("click", function(){
  projectsbtn.classList.add("active");
  summarybtn.classList.remove("active");
  detailsbtn.classList.remove("active");
  
  // screen display control
  projectsSection.classList.add("active");
  summarySection.classList.remove("active");
  detailsSection.classList.remove("active");
  topmenublank.classList.remove("active");
  tvnames.classList.remove("notactive");
  topmenublank.classList.remove("active");
  topmenubtn.classList.add("active");
  righttv.classList.remove("active")
});
detailsbtn.addEventListener("click", function(){
  detailsbtn.classList.add("active");
  summarybtn.classList.remove("active");
  projectsbtn.classList.remove("active");
  
  // screen display control
  detailsSection.classList.add("active");
  projectsSection.classList.remove("active");
  summarySection.classList.remove("active");
  topmenublank.classList.remove("active");
  tvnames.classList.remove("notactive");
  topmenublank.classList.remove("active");
  topmenubtn.classList.add("active");
  righttv.classList.remove("active")
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
