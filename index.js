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
