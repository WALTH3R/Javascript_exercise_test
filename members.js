const memberContainer = document.getElementById("memberContainer");

const members = JSON.parse(localStorage.getItem("teamMembers")) || [];

members.array.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = '<h3>${member.Firstname}</h3> <p>Job: ${member.jobPost}</p>';
    memberContainer.appendChild(card);
});