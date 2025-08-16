let x;
x = 6;

document.getElementById('demo').innerHTML = x;

function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastname').value;
    document.getElementById('fullname').innerHTML = firstName + ' ' + lastName;
}
