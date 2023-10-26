import { useDynamicAdapt } from './dynamicAdapt.js';

window.addEventListener('DOMContentLoaded', () => {
	// Dymamic Adaptive
	useDynamicAdapt();

	if (window.innerWidth >= 1024) {
		const header = document.querySelector('.header');
		const submenu = document.querySelector('.submenu');
		const navItem = document.querySelector('.nav__item-menu');
		const whiteLogo = document.querySelector('.header__logo-white');
		const darkLogo = document.querySelector('.header__logo-dark');

		header.style.height = `${header.clientHeight + submenu.clientHeight}px`;

		navItem.addEventListener('mouseover', () => {
			header.classList.add('header--active');
			submenu.classList.add('submenu--active');
			whiteLogo.classList.remove('header__logo--active');
			darkLogo.classList.add('header__logo--active');
		});

		navItem.addEventListener('mouseout', () => {
			header.classList.remove('header--active');
			submenu.classList.remove('submenu--active');
			whiteLogo.classList.add('header__logo--active');
			darkLogo.classList.remove('header__logo--active');
		});
	} else {
		const navItem = document.querySelector('.nav__item-menu');
		const submenu = document.querySelector('.submenu');

		navItem.addEventListener('click', e => {
			e.preventDefault();
			navItem.classList.toggle('nav__item-menu--active');
			if (navItem.classList.contains('nav__item-menu--active')) {
				submenu.style.height = `${submenu.scrollHeight}px`;
			} else {
				submenu.style.height = 0;
			}
		});
	}

	// Hamburger Menu
	const headerMenu = document.querySelector('.header__menu');
	const hamburger = document.querySelector('.hamburger');
	const whiteLogo = document.querySelector('.header__logo-white');
	const darkLogo = document.querySelector('.header__logo-dark');
	let menu = false;

	hamburger.addEventListener('click', () => {
		if (!menu) {
			whiteLogo.classList.remove('header__logo--active');
			darkLogo.classList.add('header__logo--active');
			menu = true;
		} else {
			whiteLogo.classList.add('header__logo--active');
			darkLogo.classList.remove('header__logo--active');
			menu = false;
		}
		hamburger.classList.toggle('hamburger--active');
		headerMenu.classList.toggle('header__menu--active');
	});

	// Cards Slider
	const cards = new Swiper('.cards__slider', {
		navigation: {
			nextEl: '.cards__slider-next',
			prevEl: '.cards__slider-prev',
		},
		pagination: {
			el: '.cards__slider-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 10,
			},
			375: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			1300: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
	});

	// Partners SLider
	const partners = new Swiper('.partners__slider', {
		navigation: {
			nextEl: '.partners__slider-next',
			prevEl: '.partners__slider-prev',
		},
		pagination: {
			el: '.partners__slider-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			850: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1100: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	});

	// Show/Hide Seo Text
	const seoBtn = document.querySelector('.seo__btn');
	const seoContent = document.querySelector('.seo__content');

	seoBtn.addEventListener('click', () => {
		seoBtn.classList.toggle('seo__btn--active');
		if (seoBtn.classList.contains('seo__btn--active')) {
			setTimeout(() => {
				seoBtn.children[0].textContent = 'Подробнее';
			}, 200);
			seoContent.style.height = '80px';
		} else {
			setTimeout(() => {
				seoBtn.children[0].textContent = 'Скрыть';
			}, 200);
			seoContent.style.height = `${seoContent.scrollHeight}px`;
		}
	});

	if (window.innerWidth <= 768) {
		const itemTitle = document.querySelectorAll('.footer__item-title');

		itemTitle.forEach(el => {
			el.addEventListener('click', () => {
				el.classList.toggle('footer__item-title--active');

				if (el.classList.contains('footer__item-title--active')) {
					el.nextElementSibling.style.height = `${el.nextElementSibling.scrollHeight}px`;
				} else {
					el.nextElementSibling.style.height = 0;
				}
			});
		});
	}
});
