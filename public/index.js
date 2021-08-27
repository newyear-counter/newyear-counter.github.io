const newYearText = document.getElementById("newyear"), /* Footer DOM Item */
      newFullYear = new Date().getFullYear() + 1, /* Next Full Year */
      newYear = new Date(newFullYear, 0, 1, 0, 0, 0); /* New Year Date */

/* Web Query Add */
const url = new URL(window.location);
url.searchParams.set('year', newFullYear);
window.history.pushState({}, '', url);

/*
 Change DOM Items
*/

newYearText.innerText = `New Year: ${newFullYear}`;
document.title = `New Year - ${newFullYear} | New Year Counter`;


/* DOM Time Elements */
const Elements = { 
    months: null, 
    weeks: null, 
    days: null, 
    hours: null,/*  */
    minutes: null, 
    seconds: null
};

/* Select Item */

Object.keys(Elements).forEach(key => {
    Elements[key] = document.querySelector(`#${key} .time`);
});


/*
  New Year Loop
*/

let nextTime = (new Date().getTime() + (10000));
setInterval(() => {
    const nowYear = new Date(), /* Now Year */
          leftNewYear = nextTime - nowYear.getTime(),  /* Time Left */
          disabledFormat = ["weeks"],
          formatDates = formatDate(leftNewYear);
          
     Object.keys(formatDates).forEach((value) => {
      Elements[value].innerText = !disabledFormat.includes(value) && formatNumber(formatDates[value]) || formatDates[value];
    })
}, 1000); // 1000 Milli Seconds = 1 Second 


/* Methods */

function formatNumber(number){
  return number < 10 ? `0${number}` : number;
};

function formatDate(ms){
  if(ms <= 0) ms = 0;

  const seconds = ~~(ms / 1000),
      minutes = ~~(seconds / 60),
      hours = ~~(minutes / 60),
      days = ~~(hours / 24),
      weeks = ~~(days / 7), 
      months = ~~(weeks / 4);
  
      console.log(seconds)
   return {
    seconds: seconds % 60,
    minutes: minutes % 60,
    hours: hours % 24,
    days: days % 7,
    weeks: weeks % 4,
    months
  }
};


/*
  Added event listener to make the site look classic.
*/

const githubLink = document.getElementsByClassName("link")[0];
const discordInvite = document.getElementsByClassName("link")[1];

/* For Github */
githubLink.addEventListener("click", () => {
  window.location = "https://github.com/soulfly34/newyear-counter.github.io";
});
/* For Discord */
discordInvite.addEventListener("click", () => {
  window.location = "https://discord.gg/locale";
});