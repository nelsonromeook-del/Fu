// Outer function – initializes login feature
function createLoginTracker(userInfo) {

    let attemptCount = 0; // tracks wrong login attempts

    // Inner arrow function — handles each login attempt
    return (passwordAttempt) => {

        // If already locked
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        attemptCount++; // increase attempt count each try

        // Check password match
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };
}

const loginTracker = createLoginTracker({
    username: "user1",
    password: "password123"
});

// Handle Login Button Action
function handleLogin() {
    const enteredUser = document.getElementById("username").value;
    const enteredPass = document.getElementById("password").value;
    const msgBox = document.getElementById("message");

    if (enteredUser !== "user1") {
        msgBox.textContent = "Username not recognized.";
        return;
    }

    // Pass password to login tracker
    const result = loginTracker(enteredPass);
    msgBox.textContent = result;
}
