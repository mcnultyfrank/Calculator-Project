"use strict";

// id, tagName, className, qS, qSA
console.log(document); // const list = document.querySelector('.list');

var list = document.getElementsByClassName('list')[0];
console.log(list);
var button = document.getElementsByTagName('button')[0];
console.log(button); // querySelector
// querySelectorAll
// get the input tag

var input = document.querySelector('input'); // console.log(inputElement);
// get the last item in the list

var lastItem = document.querySelectorAll('li')[4]; // console.log(lastListItem);
// const lastLi = document.querySelector('li:nth-child(5)');
// console.log(lastLi);
// console.log
// const form = document.getElementById('info');
// console.log(form);
// CLICK EVENTS
//addingto the page

var ul = document.querySelector('ul');
console.log(ul);
button.addEventListener('click', function (event) {
  event.preventDefault(); // console.log('CLICKED');
  // ul.innerHTML += '<li class="new" >New List Item</li>';

  var newText = input.value; // will grab whatever input added, store in newText

  var li = document.createElement('li');
  console.log(li);
  li.innerHTML = newText;
  li.classList.add('new');
  li.id = 'new-li';
  li.setAttribute("name", "new one");
  ul.append(li);
}); // remove from the page

var lis = document.querySelectorAll('li');
lis.forEach(function (li) {
  li.addEventListener('click', function () {});
});