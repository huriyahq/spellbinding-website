const form = document.getElementById("contactForm");
const userName = form.elements["user_name"];
const userEmail = form.elements["user_email"];
const userMsg = form.elements["user_msg"];
const submitResult = document.getElementById("submitResult");
let result = submitResult;

// Validate form input when submit is clicked
form.addEventListener("submit", (event) => {
    // Stop form from being submitted
    event.preventDefault();
    // Get submitted values
    let username = userName.value;
    let email = userEmail.value;
    let msg = userMsg.value;

    // Validate form inputs
    const regexName = /^[a-zA-Z]+[\s]*[a-zA-Z]+$/;
    const validName = regexName.test(username);

    const regexEmail = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    const validEmail = regexEmail.test(email);

    const validMsg = /\S+/.test(msg);
    const regexMsg = /[^a-zA-Z0-9.,'":£$€@%?!—–-]+[\s]*[^a-zA-Z0-9.,'":£$€@%?!—–-]/g;
    const cleanedMsg = msg.replace(regexMsg, "");

    if (validName && validEmail && validMsg) {
        console.log("All form inputs are valid");
        submitData(username, email, cleanedMsg);
        result.innerText = "Message submitted successfully.";
        form.reset();
    }  else {
        console.log("Some form inputs are invalid");
        result.innerText = "Please ensure the entered name and email address are valid and all required fields are filled out.";
    }
});

// Reset result text when reset button is clicked
form.addEventListener("reset", () => {
    result.innerHTML = `<em>${submitResult.innerText}</em>`;
});

// Function to submit form values to API spreadsheet
function submitData (username, email, message) {
        fetch("https://api.apispreadsheets.com/data/iGlGqutHvBdoG7ap/", {
            method: "POST",
            body: JSON.stringify({"data": {"user_name":username,"user_email":email,"user_msg":message}}),
        }).then(res =>{
            if (res.status === 201){
                // SUCCESS
                console.log("Data submitted successfully.")
            }
            else{
                // ERROR
                console.log("Data not submitted.")
            }
        });
};