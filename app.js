const data = [
    {
         name: "React",
         skill: "80%",
         catagory: "web"
    },
    {
         name: "Others",
         skill: "80%",
         catagory: "others"
    },
    {
         name: "Others",
         skill: "80%",
         catagory: "others"
    },
    {
         name: "Otherssdfs",
         skill: "80%",
         catagory: "others"
    },
    {
         name: "Otherssdf",
         skill: "80%",
         catagory: "others"
    },
    {
         name: "htmlcss",
         skill: "80%",
         catagory: "others"
    },
    {
         name: "Proggramin",
         skill: "80%",
         catagory: "proggraming"
    },
    {
         name: "Tools",
         skill: "80%",
         catagory: "tools"
    }
];

let skills = document.getElementById('skill');

const addSkill = (d, data) => {
    let filter = data.filter(item => item.catagory === d);
    skills.innerHTML = ' ';
    console.log(skills);
    filter.forEach(item => {
         let div = document.createElement('div');
         div.innerHTML = `
         <div class="progress1 container">
             <h2>${item.name}</h2>
             <h2>${item.skill}</h2>
         </div>
         <div class="progress-line">
     </div>`;
         div.classList.add("progress-grid")
         skills.appendChild(div);
    })
}
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

// portfolio card here 
const cards = document.getElementById('cards-row');
data.slice(0,5).forEach(item => {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
    <div class="card" id="cards-sec">
        <div>
            <img height="180px" src="./images/myPic.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below .</p>
                <p class="card-text">Stack : js html css </p>
                <p class="card-text">link icon icon</p>
            </div>
        </div>
    </div>
</div>`;
   
    cards.appendChild(div);
})