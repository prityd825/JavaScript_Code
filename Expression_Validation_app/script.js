function validateExpression() {
    const expressionType = document.getElementById("expressionType").value;
    const inputValue = document.getElementById("inputValue").value;
    let regexPattern = '';

    switch (expressionType) {
        case 'email':
            regexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            break;
        case 'phone':
            regexPattern = /^\d{11}$/;
            break;
        case 'postcode':
            regexPattern = /^\d{4}$/;
            break;
        default:
            break;
    }

    const isValid = regexPattern.test(inputValue);

    if (isValid) {
        document.getElementById("validationResult").textContent = "Valid Expression!";
    } else {
        document.getElementById("validationResult").textContent = "Invalid Expression!";
    }
}
