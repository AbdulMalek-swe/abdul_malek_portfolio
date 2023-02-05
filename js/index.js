let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const data = [
{
     name: "React",
     skill: "80%",
     catagory: "web"
},
{
     name: "Express",
     skill: "60%",
     catagory: "web"
},
{
     name: "Redux",
     skill: "30%",
     catagory: "others"
},
{
     name: "JavaScript",
     skill: "80%",
     catagory: "Proggraming"
},
{
     name: "CPP",
     skill: "50%",
     catagory: "proggraming"
}, {
     name: "C",
     skill: "50%",
     catagory: "proggraming"
},
{
     name: "Firebase",
     skill: "70%",
     catagory: "tools"
},
{
     name: "Vercel",
     skill: "60%",
     catagory: "tools"
}
];
const project = [
{
     name:"Car Selling ecomerce",
     description:' It,s a common marketplace where people can buy and sell  cars easily.Its a fully developed website made with React Firebase Mui,Express js, mongo DB',
     technology:"Express Mongodb React",
     img: './images/car.jpg',
     live:'https://thunderous-narwhal-072096.netlify.app/',
     github:'https://github.com/AbdulMalek-swe/car_ecomerce_api'
},

]
let skills = document.getElementById('skill');
const addSkill = (d, data) => {
let filter = data.filter(item => item.catagory === d);

skills.innerHTML = ' ';
filter.forEach(item => {
     let div = document.createElement('div');
     div.innerHTML = `
     <div class="progress1 container">
         <h2>${item.name}</h2>
         <h2>${item.skill}</h2>
     </div>
     <div class="progress-line">
 </div>`;
//    document.getElementsByClassName("progress-line")[0].style.width='90%'
     div.classList.add("progress-grid")
     skills.appendChild(div);   
})
mycall(filter)
}
// skill here 
const skill = (skills, s = 0) => {
const btn = document.getElementsByClassName('skill-btn');
const skill = skills ? skills : 'web';
for (let i = 0; i < btn.length; i++) {
     if (i != s)
          btn[i].classList.remove("active");
}
let filter;
filter = data.filter(item => item.catagory === skill);
if (skill === filter[0].catagory) {
     addSkill(skill, data);
     btn[s].classList.add("active");
}

}
skill();
function mycall(newdata){
const percentSkill = document.getElementsByClassName("progress-line");
for(let i=0;i<newdata.length;i++){
percentSkill[i].style.width = newdata[i].skill;
}
}
// portfolio card here 
const cards = document.getElementById('cards-row');
project.forEach(item => {
let div = document.createElement('div');
div.innerHTML = `
<div class="col">
<div class="card" id="cards-sec">
    <div>
        <img height="180px" src=${item.img}  class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text">Stack : ${item.technology} </p>
            <a href= ${item.live} target="_blank"> <button class="skill-btn">Client Site</button></a>
            <a href= ${item.github} target="_blank"> <button class="skill-btn">Server Site</button></a>
        </div>
    </div>
</div>
</div>`;

cards.appendChild(div);
})