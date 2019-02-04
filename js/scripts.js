var search = document.querySelector('#search');
var menuItem = document.querySelectorAll('.menu-item');
var searchForm = document.querySelector('.search-form');
var close = document.querySelector('.close');
search.addEventListener('click', () => {
	for(let i of menuItem){
		i.classList.add('hide-item');
	}
	searchForm.classList.add('active');
	close.classList.add('active');
	search.classList.add('hide');
});
close.addEventListener('click', () => {
	for(let i of menuItem){
		i.classList.remove('hide-item');
	}
	searchForm.classList.remove('active');
	close.classList.remove('active');
	search.classList.remove('hide');
});