class TeamMember {
    constructor(firstName, lastName, jobPost, username, email, password, picture) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobPost = jobPost;
        this.username = username;
        this.email = email;
        this.password = password;
        this.picture = picture;
    }
}

const form = document.getElementById("teamForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const jobPost = document.getElementById("jobPost").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const picture = document.getElementById("picture").files[0];

   
    if (
        firstName.length < 3 ||
        lastName.length < 3 ||
        jobPost.length < 3 ||
        username.length < 3
    ) {
        alert("All fields must have at least 3 characters");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    
    if (username.includes(" ")) {
        alert("Username must not contain spaces");
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    const newMember = new TeamMember(
        firstName,
        lastName,
        jobPost,
        username,
        email,
        password,
        picture
    );

    let members = JSON.parse(localStorage.getItem("teamMembers")) || [];
    members.push(newMember);
    localStorage.setItem("teamMembers", JSON.stringify(members));

    alert("Member added successfully!");
    form.reset();
});
