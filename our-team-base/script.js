const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);

// Array di oggetti
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },

    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },

    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },

    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
    
];
console.log(team);

// pusho il nuovo oggetto dentro all'array team usando la funzione per generare nuovi oggetti
team.push(newMember('New Member', 'Marketing Manager', 'img/new-team-member-01.jpg'));
team.push(newMember('New Member', 'Project Manager', 'img/new-team-member-02.jpg'));
team.push(newMember('New Member', 'Data Analyst', 'img/new-team-member-03.jpg'));
team.push(newMember('New Member', 'Chief Financial Officer', 'img/new-team-member-04.jpg'));
console.log(team)

// Creo un ciclo for che cicla dentro l'array di oggetti
for(let i = 0; i < team.length; i++){
    // creo la team card 
    const teamCard =`<div class="team-card">
                        <div class="card-image">
                            <img
                                src="${team[i].image}" 
                            />
                        </div>
                        <div class="card-text">
                            <h3>${team[i].name}</h3>
                            <p>${team[i].role}</p>
                        </div>
                    </div>`;

    //inserisco la teamCard nel teamContainer in HTML
    teamContainer.innerHTML += `${teamCard}`;   
}
//Dentro al ciclo for quando scrivo team[i].image --> con team[i] prendo la posizione dell'array e con .image dico quale proprietà, di quella data posizione di team, voglio vedere

console.log(teamContainer);

//funzione che crea un nuovo oggetto e mi ritorna il nuovo oggetto
function newMember(nome, ruolo, foto) {
    // creo un nuovo oggetto
    const member = {
        name: nome,
        role: ruolo,
        image: foto,
    }

    return member;
}




