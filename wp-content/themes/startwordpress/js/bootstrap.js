// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log('DOM fully loaded');
//   let mobileMenu = document.getElementsByClassName('mobile-menu')
//   for (let menu of mobileMenu) {
//     menu.onclick=function(){
//       console.log('hello');
//       // Remove any element-specific value, falling back to stylesheets
//       if (document.getElementsByClassName('mobile-menu-content')[0].style.display==='contents') {
//         document.getElementsByClassName('mobile-menu-content')[0].style.display='none';
//       } else {
//         document.getElementsByClassName('mobile-menu-content')[0].style.display='contents';
//       }
//     };
//   }


// });

// $(document).ready(function(){
// 	$('.mobile-menu').click(function(e){
// 		e.preventDefault();
// 		// $(this).toggleClass('no-hamburgler');
//     console.log('clicked')
// 	});
// });

// handleClick = () => {
//   document.getElementById('mobile-menu').class === 'menu' ?
//     document.getElementById('mobile-menu').class = 'no-menu' :
//     document.getElementById('mobile-menu').class = 'menu';
// }

// document.getElementById('mobile-menu').addEventListener("click", () => {
//   handleClick();
// })
// $(document).ready(function(){

document.addEventListener("DOMContentLoaded", function(event) {
const menu = document.getElementsByClassName('menu-with-bar')[0];
const search = document.getElementsByClassName('search')[0];
const searchActive = document.getElementsByClassName('search-active-button')[0];
const searchSubmit = document.getElementsByClassName('search-submit-button')[0];
const header = document.getElementsByClassName('blog-masthead')[0];
const quit = document.getElementsByClassName('quit-mobile-search')[0];
const overlay = document.getElementById('overlay');
const form = document.getElementById('s');

menu.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
  document.body.classList.toggle('overlay-active-body');
  // overlay.classList.toggle('overlay-active');
})

search.addEventListener('click', () => {
  menu.classList.toggle('menu-active', false);
  search.classList.toggle('search-active-button');
  header.classList.toggle('search-active');
  overlay.classList.toggle('overlay-active', true);
  document.body.classList.toggle('overlay-active-body', true);
  quit.classList.toggle('show', true);
  searchSubmit.classList.toggle('submit-search');
  // document.getElementsByClassName('search-active-button')[0].addEventListener('click', () => {
  //   console.log('clicked');
  // })
  // searchActive.addEventListener('click', () => {
    //   console.log('clicked');
    // })
    // document.getElementsByClassName('search-active-button')[0].removeEventListener('click', () => {
    //   console.log('removed')
    // })
  });



quit.addEventListener('click', () => {
  // menu.classList.toggle('menu-active');
  // document.body.classList.toggle('overlay-active-body');
  // menu.classList.toggle('menu-active', true);

  search.classList.toggle('search-active-button');
  header.classList.toggle('search-active');
  overlay.classList.toggle('overlay-active');
  document.body.classList.toggle('overlay-active-body');
  quit.classList.toggle('show');
  searchSubmit.classList.toggle('submit-search');
})

overlay.addEventListener('click', () => {
  overlay.classList.toggle('overlay-active');
  header.classList.toggle('search-active', false);
  search.classList.toggle('search-active-button');
  document.body.classList.toggle('overlay-active-body');
  quit.classList.toggle('show', false);
  searchSubmit.classList.toggle('submit-search');
})

// menu.addEventListener('click', () => {
//       //if menu was closed and then clicked
//     if (this.id === 'menu-notclicked') {
//       //change id to menu-clicked
//       this.id = 'menu-clicked';
//       document.getElementsByClassName('container')[0].style.filter = 'blur(1px)';
//       document.getElementById("overlay").style.display = "block";
//       // document.getElementById("header-menu-bar").style.display = "block";
//       document.getElementById("header-menu-bar").style.display = "block";
//       //if menu was open and then clicked
//     } else {
//       this.id = 'menu-notclicked';
//       document.getElementsByClassName('container')[0].style.filter = 'blur(0)';
//       document.getElementById("overlay").style.display = "none";
//       document.getElementById("header-menu-bar").style.display = "none";
//     }
// });

// search.addEventListener('click', () => {
//   if (this.id === 'search-notclicked') {
//     this.id = 'search-clicked';
//     // document.getElementsByClassName('search-bar')[0].style.display = 'block';
//     document.getElementsByClassName('container')[0].style.filter = 'blur(1px)';
//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("header-search-bar").style.display = "flex";
//   } else {
//     this.id = 'search-notclicked';
//     // document.getElementsByClassName('search-bar')[0].style.display = 'none';
//     document.getElementsByClassName('container')[0].style.filter = 'blur(0)';
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("header-search-bar").style.display = "none";
//   }
// });

// overlay.addEventListener('click', () => {
//   document.getElementsByClassName('search')[0].id = 'search-notclicked';
//   document.getElementsByClassName('menu')[0].id = 'menu-notclicked';
//   document.getElementById("overlay").style.display = "none";
//   // document.getElementsByClassName('search-bar')[0].style.display = 'none';
//   document.getElementsByClassName('container')[0].style.filter = 'blur(0)';
//   document.getElementById("header-search-bar").style.display = "none";
//   document.getElementById("header-menu-bar").style.display = "none";
// });

// form.addEventListener('change', function() {
//   console.log(document.getElementById('s').value);
// });

// document.addEventListener("DOMContentLoaded", (event) => {
//   document.getElementsByClassName('menu')[0].onclick = function() {

//   };
  // document.getElementsByClassName('search')[0].onclick = function() {

  // };
  // document.getElementById('overlay').onclick = function() {

  // }
  // var form = document.querySelector('form');


  // document.getElementById('s').onchange = function() {
  //   console.log(this.value)
  // }

});
// $('.mobile-menu').click(function (event) {

// 	// Don't follow the link
// 	event.preventDefault();

// 	// Log the clicked element in the console
// 	console.log(event.target);

// });

