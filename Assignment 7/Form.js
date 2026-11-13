
document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.querySelector('input[type="text"]').value.trim();

    let email = document.querySelector('input[type="email"]').value.trim();

    let age = document.querySelector('input[type="number"]').value;

    let gender = document.querySelectorAll('input[name="gender"]');

    let course = document.querySelector("select").value;

    let studyMode = document.querySelectorAll('input[name="Study Mode"]');

    let passwords = document.querySelectorAll('input[type="password"]');

    let password = passwords[0].value;
    let confirmPassword = passwords[1].value;

    let terms = document.querySelector('input[type="checkbox"]');

    // Name validation
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email");
        return;
    }

    // Age validation
    if (age === "" || age < 17) {
        alert("Please enter a valid age (17 or above)");
        return;
    }

    // Gender validation
    if (![...gender].some(input => input.checked)) {
        alert("Please select your gender");
        return;
    }

    // Course validation
    if (course === "" || course === "Select Course") {
        alert("Please select your course");
        return;
    }

    // Study mode validation
    if (![...studyMode].some(input => input.checked)) {
        alert("Please select your study mode");
        return;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must contain at least 8 characters");
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    // Terms validation
    if (!terms.checked) {
        alert("Please accept Terms and Conditions");
        return;
    }

    // Success message
    alert("Registration Successful!");

    document.querySelector("form").reset();

});
