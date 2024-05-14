function isStrongPassword(password) {
    // Check if the password is null or empty
    if (password === null || password === "") {
        return "weak";
    }

    // Check for repeated characters
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return "weak";
        }
    }

    const commonPasswords = ["password", "123456", "qwerty", "654321", "2024"];

    if (commonPasswords.includes(password.toLowerCase())) {
        return "weak";
    }

    return "strong";
}

const passwordsToTest = ["2024", null, "aaaa", "1234", "password", "123456", "Qwertut", "StrosngPass"];

passwordsToTest.forEach(password => {
    console.log(`Password: "${password}", strength: ${isStrongPassword(password)}`);
});
