let swiper = new Swiper('#swiper-top', {
	slidesPerView: 4,
	direction: 'horizontal',
	spaceBetween: 30,
	loop: true,

	navigation: {
		nextEl: '.gallery__swiper-next',
		prevEl: '.gallery__swiper-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 'auto',
		freeMode: true,
	},

	breakpoints: {
		// при разрешении экрана от 320px до 767px
		320: {
			slidesPerView: 1,
		},
		// при разрешении экрана от 768px до 1023px
		768: {
			slidesPerView: 2,
		},
		// при разрешении экрана от 1024px до 1199px
		1024: {
			slidesPerView: 3,
		},
		// при разрешении экрана от 1200px и выше
		1200: {
			slidesPerView: 4,
		},
		// и так далее, можно добавить больше breakpoint'ов по необходимости
	},
});

let swiperSecond = new Swiper('#swiper-bottom', {
	// Optional parameters
	slidesPerView: 3,
	direction: 'horizontal',
	spaceBetween: 40,
	loop: true,

	navigation: {
		nextEl: '.gallery__swiper-next-bottom',
		prevEl: '.gallery__swiper-prev-bottom',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 'auto',
		freeMode: true,
	},

	breakpoints: {
		// при разрешении экрана от 320px до 767px
		320: {
			slidesPerView: 1,
		},
		// при разрешении экрана от 768px до 1023px
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		// при разрешении экрана от 1024px до 1199px
		1024: {
			slidesPerView: 3,
		},
		// при разрешении экрана от 1200px и выше
		1200: {
			slidesPerView: 3,
		},
		// и так далее, можно добавить больше breakpoint'ов по необходимости
	},
});

let swiperCoaches = new Swiper('#swiper-coaches', {
	slidesPerView: 4,
	direction: 'horizontal',
	spaceBetween: 30,
	loop: true,

	navigation: {
		nextEl: '.coaches__swiper-button-next',
		prevEl: '.coaches__swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 'auto',
		freeMode: true,
	},

	breakpoints: {
		// при разрешении экрана от 320px до 767px
		320: {
			slidesPerView: 1,
		},
		// при разрешении экрана от 768px до 1023px
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		// при разрешении экрана от 1024px до 1199px
		1024: {
			slidesPerView: 3,
		},
		// при разрешении экрана от 1200px и выше
		1200: {
			slidesPerView: 4,
		},
		// и так далее, можно добавить больше breakpoint'ов по необходимости
	},
});

// Функция для проверки ширины экрана и скрытия навигационных элементов
function toggleNavigation() {
	if (window.innerWidth <= 1310) {
		swiper.navigation.destroy();
		document.querySelector('.gallery__swiper-next').style.display = 'none';
		document.querySelector('.gallery__swiper-prev').style.display = 'none';
		document.querySelector('.gallery__swiper-next-bottom').style.display = 'none';
		document.querySelector('.gallery__swiper-prev-bottom').style.display = 'none';
	} else {
		swiper.navigation.init();
		document.querySelector('.gallery__swiper-next').style.display = 'block';
		document.querySelector('.gallery__swiper-prev').style.display = 'block';
		document.querySelector('.gallery__swiper-next-bottom').style.display = 'block';
		document.querySelector('.gallery__swiper-prev-bottom').style.display = 'block';
	}
}

// Вызываем функцию при загрузке страницы и изменении размера окна
toggleNavigation();
window.addEventListener('resize', toggleNavigation);
