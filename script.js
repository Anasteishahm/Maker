document.getElementById('openVideo').addEventListener('click', function (e) {
	e.preventDefault();
	const modal = document.getElementById('videoModal');
	const iframe = document.getElementById('youtubeVideo');
	// iframe.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1';
	iframe.src = 'https://www.youtube.com/watch?v=d5K-A3Lp9ns';
	// src="https://www.youtube.com/embed/CQzZacgAmek?si=Ie1bIwurnfqtroud"
	modal.style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
	const modal = document.getElementById('videoModal');
	const iframe = document.getElementById('youtubeVideo');
	iframe.src = '';
	modal.style.display = 'none';
});


const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');
const headerNav = document.querySelector('.header__right-content');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('menu-icon--active');
	header.classList.toggle('header--mobile');
	headerNav.classList.toggle('header__nav-wrap');
	body.classList.toggle('no-scroll');
});
