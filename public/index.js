


const newYearText = document.getElementById("newyear"), 
      newFullYear = new Date().getFullYear() + 1;

const url = new URL(window.location);
url.searchParams.set('by', 'soufly');
window.history.pushState({}, '', url);

/*
 Change DOM Items
*/
newYearText.innerText = `New Year: ${newFullYear}`;
document.title = `New Year - ${newFullYear} | New Year Counter`;


/* 
  Get New Year
*/

let newYear = new Date(newFullYear, 0, 1, 0, 0, 0)
new Date(0, 0, );
console.log(newYear)

/* DOM Time Elements */
let Elements = { 
    months: null, 
    weeks: null, 
    days: null, 
    hours: null,
    minutes: null, 
    seconds: null
};


Object.keys(Elements).forEach(key => {
    Elements[key] = document.querySelector(`#${key} .time`);
});


/*
  Counter
*/

setInterval(() => {
    let nowYear = new Date(), /* Now Year */
        leftNewYear = newYear.getTime() - nowYear.getTime();  /* Time Left */

    let { seconds, minutes, hours, days, weeks, months } = formatDate(leftNewYear);

    if(hours > 0 && days > 0 && weeks > 0 && months > 0){
        Elements["seconds"].parentNode.classList.add("active");
        Elements["seconds"].innerText = formatNumber(seconds);
    } else {
        Elements["seconds"].parentNode.classList.remove("active");
    };

    if(hours > 0 && days > 0 && weeks > 0 && months > 0){
        Elements["minutes"].parentNode.classList.add("active");
        Elements["minutes"].innerText = formatNumber(minutes);
    } else {
        Elements["minutes"].parentNode.classList.remove("active");
    };

    if(hours > 0 && days > 0 && weeks > 0 && months > 0){
        Elements["hours"].parentNode.classList.add("active");
        Elements["hours"].innerText = formatNumber(hours);
    } else {
        Elements["hours"].parentNode.classList.remove("active");
    };

    if(days > 0 && weeks > 0 && months > 0){
        Elements["days"].parentNode.classList.add("active");
        Elements["days"].innerText = formatNumber(days);
    } else {
        Elements["days"].parentNode.classList.remove("active");
    };

    if(weeks > 0 && months > 0){
        Elements["weeks"].parentNode.classList.add("active");
        Elements["weeks"].innerText = weeks;
    } else {
        Elements["weeks"].parentNode.classList.remove("active");
    };

    if(months > 0){
        Elements["months"].parentNode.classList.add("active");
        Elements["months"].innerText = formatNumber(months);
    } else {
        Elements["months"].parentNode.classList.remove("active");
    };
}, 1000);


/* Methods */

function formatNumber(number){
  return number < 10 ? `0${number}` : number;
};

function formatDate(ms){
  let seconds = ~~(ms / 1000),
      minutes = ~~(seconds / 60),
      hours = ~~(minutes / 60),
      days = ~~(hours / 24),
      weeks = ~~(days / 7), 
      months = ~~(weeks / 4);

  return {
    seconds: seconds % 60,
    minutes: minutes % 60,
    hours: hours % 24,
    days: days % 7,
    weeks: weeks % 12,
    months: months % 12
  }
};

/*
  Added event listener to make the site look classic.
*/

const githubLink = document.getElementsByClassName("link")[0];
const discordInvite = document.getElementsByClassName("link")[1];

/* For Github */
githubLink.addEventListener("click", () => {
  window.location = "https://github.com/";
});
/* For Discord */
discordInvite.addEventListener("click", () => {
  window.location = "https://discord.gg/locale";
});