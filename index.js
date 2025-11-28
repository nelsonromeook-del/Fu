function createLoginTracker(correctUser, correctPass) {
    let attempts = 0;  

    // The returned function (closure)
    return (username, password) => {

        // Allow login if credentials are correct
        if (username === correctUser && password === correctPass) {
            console.log(" Login successful!");
            attempts = 0; // Reset attempts after correct login
            return true;
        }

        // If incorrect, increase attempts
        attempts++;

        // If attempts reached 3 → lock account
        if (attempts >= 3) {
            console.log(" Account locked. Too many failed attempts.");
            return false;
        }

        // Otherwise show remaining attempts
        console.log(`Wrong login. Attempts left: ${3 - attempts}`);
        return false;
    };
}
createLoginTracker();