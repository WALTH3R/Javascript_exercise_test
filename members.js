const memberList = document.getElementById("memberList");

const members = JSON.parse(localStorage.getItem("teamMembers")) || [];

members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgHTML = member.picture
        ? `<img src="${member.picture}" alt="${member.firstName}'s picture" style="width:100%; max-height:200px; object-fit:cover; border-radius: 5px;">`
        : '';

    card.innerHTML = `
        ${imgHTML}
        <h3>${member.firstName} ${member.lastName}</h3>
        <p><strong>Job:</strong> ${member.jobPost}</p>
        <p><strong>Email:</strong> ${member.email}</p>
        <p><strong>Username:</strong> ${member.username}</p>
    `;
    memberList.appendChild(card);
});