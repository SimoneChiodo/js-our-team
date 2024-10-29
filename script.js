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

// Definisco la card
let card;
function defineMemberCard(name, role, email, img) {
    return `<div class="col p-4">
              <div class="card d-flex flex-row">
                  <img
                      src="./${img}"
                      class="img-fluid rounded-start"
                      alt="member-photo"
                  />
                  <div class="card-body text-light bg-darkblue rounded-end">
                      <h5 class="card-title">${name.toUpperCase()}</h5>
                      <p class="card-text">${role}</p>
                      <a href="#" class="">${email}</a>
                  </div>
              </div>
          </div>`;
}

// Creo la card
function addMemberCard(name, role, email, img) {
    cardContainer.innerHTML += defineMemberCard(name, role, email, img);
}

// Mostro la card
teamMembers.forEach((membro) => {
    addMemberCard(membro.name, membro.role, membro.email, membro.img);
});

// Form - Nuovo Membro
const formNewMember = document.getElementById("form-new-member");
const inputName = document.getElementById("input-name");
const inputRole = document.getElementById("input-role");
const inputEmail = document.getElementById("input-email");

// Invio form
formNewMember.addEventListener("submit", (e) => {
    // Prevengo l'invio dei dati ed il reload della pagina
    e.preventDefault();

    addMemberCard(
        inputName.value,
        inputRole.value,
        inputEmail.value,
        "img/female3.png"
    );
});
