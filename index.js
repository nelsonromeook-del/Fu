
// LOGIN FEATURE USING CLOSURES + NESTED FUNCTIONS + ARROW FUNCTIONS
function createLoginTracker() {

    const correctUser = "admin";
    const correctPass = "12345";
    let attempts = 3;  // outer variable protected by closure

    const login = (username, password) => {   // arrow function
        if (attempts <= 0) {
            showToast("Account locked. No attempts left.");
            return;
        }

        if (username === correctUser && password === correctPass) {
            showToast("Login Successful!");
        } else {
            attempts--;
            if ((attempts) > 0 && (attempts <= 3)) {
                showToast(` Wrong credentials. Attempts left: ${attempts}`);
            } else  {
                showToast(" Account locked. Contact support.");
            }
        }
    };

    // call inner function with user input
    login(
        document.getElementById("username").value,
        document.getElementById("password").value
    );
}

//  TOAST POPUP FUNCTION  
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}