// manipulate html elements using javascript
const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content')
content.textContent="Hey I'm red!";
content.style.color='red';
container.appendChild(content) ;

const h3 = document.createElement('h3');
h3.textContent="Hey I'm blue h3!";
h3.style.color='blue';
container.appendChild(h3) ;

const div = document.createElement('div')
div.setAttribute('style','border:black; background:pink')

const h1 = document.createElement('h1')
h1.textContent="I'm in a div";

div.append(h1)
container.append(div)