// document getelementsById()

let val;
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;


document.getElementById('document-title').style.background = '#333';


document.getElementById('document-title').style.color = '#fff';


document.getElementById('document-title').style.padding = '10px';

// document.getElementById('document-title').style.display = 'none';

val = document.querySelector('#document-title');
val = document.querySelector('.title-class');
val = document.querySelector('h3');

val = document.querySelector('ol');
val = document.querySelector('ol li');
val.style.background = 'red';
val.style.color = 'white';


val = document.querySelector('li:last-child');
document.querySelector('li:nth-child(even)').innerText="Hello";
document.querySelector('li:nth-child(odd)').innerText="world";


console.log(val);



