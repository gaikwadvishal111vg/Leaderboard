// console.log("Html");

let section2 = document.querySelector(".section2");
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let pCountry = document.querySelector(".country");
let pScore = document.querySelector(".number");
let btn = document.querySelector("button");

let data = [
  {
    firstName: "Rohit",
    lastName: "Sharma",
    country: "MIRAMAR",
    playerScore: 120,
    
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    country: "Paramo",
    playerScore: 100,
  },
  {
    firstName: "vishal",
    lastName: "mehara",
    country: "Karakin",
    playerScore: 20,
  },
];

//adding player
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let pCountry = document.querySelector(".country");
  if (
    fName.value == "" ||
    lName.value == "" ||
    pCountry.value == "" ||
    pScore.value == ""
  ) {
    alert("Please fill all fields!");
  } else {
    let playerObj = {
      firstName: fName.value,
      lastName: lName.value,
      country: pCountry.value,
      playerScore: Number(pScore.value),
    };
    data.push(playerObj);

    updateData();

    fName.value = "";
    lName.value = "";
    pCountry.value = "";
    pScore.value = "";
  }
});

function updateData() {
  data.sort((p1, p2) => {
    return p2.playerScore - p1.playerScore;
  });

  let innerHTML = "";

  data.forEach((item) => {
    innerHTML += `
      <div class="playerList">
        <span>${item.firstName}</span>
        <span>${item.lastName}</span>
        <span>${item.country}</span>
        <span>${item.playerScore}</span>
        <div class="icons">
          <i class="fa-solid fa-trash-can delete"></i>
          <span class="add">+5</span>
          <span class="sub">-5</span>
        </div>
      </div>`;
  });
  section2.innerHTML = innerHTML;
  activateEventListener()
}
// const activateEventListener=()=>{
  const activateEventListener = () => {
    document.querySelectorAll('.icons').forEach((el, index) => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('add')) {
          data[index].playerScore += 5;
        } else if (e.target.classList.contains('sub')) {
          data[index].playerScore -= 5;
        } else if (e.target.classList.contains('fa-trash-can')) { // Corrected condition
          data.splice(index, 1);
        }
        updateData();
      });
    });
  }
document.onload = updateData();
// document.addEventListener('load', updateData);