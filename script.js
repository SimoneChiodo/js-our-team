const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png",
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png",
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png",
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png",
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png",
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png",
    },
];

// Prendo il contenitore della card
const cardContainer = document.getElementById("card-container");

// Creo la card
let card;
function createMemberCard(name, role, email, img) {
    return `<div class="col">
              <div class="card d-flex flex-row" style="width: 36rem">
                  <img
                      src="./${img}"
                      class="img-fluid rounded-start"
                      alt="member-photo"
                  />
                  <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">${role}</p>
                      <a href="#" class="">${email}</a>
                  </div>
              </div>
          </div>`;
}

// Mostro la card
teamMembers.forEach((membro) => {
    cardContainer.innerHTML += createMemberCard(
        membro.name,
        membro.role,
        membro.email,
        membro.img
    );
});
