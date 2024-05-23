let initialCenter = [55.809051420500964, 38.989719939147925];
let initialMarker = [55.809150668069144, 38.99120035881731];
let smallScreenCenter = [55.80907558821371, 38.99120051852415]; // Для маленьких экранов
let smallScreenMarker = [55.80907558821371, 38.99120051852415]; // Для маленьких экранов

function init() {
	let map = new ymaps.Map('map', {
		center: initialCenter,
		zoom: 18,
	});

	let myPlacemark = new ymaps.Placemark(
		initialMarker,
		{
			balloonContentHeader: 'Фитнес-центр "Пантеон"<br>',
			balloonContentBody: '<a href="tel:+7 (496) 416-19-16">+7 (496) 416-19-16</a><br/>',
			balloonContentFooter: 'г. Орехово-Зуево, ул. Ленина 84',
			hintContent: 'Фитнес-центр "Пантеон"',
		},
		{
			iconLayout: 'default#image',
			iconImageHref: 'https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/simple-37-256.png',
			iconImageSize: [40, 40],
			iconImageOffset: [-19, -25],
		}
	);

	map.geoObjects.add(myPlacemark);

	map.controls.remove('geolocationControl');
	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl');
	map.controls.remove('rulerControl');
	map.behaviors.disable(['scrollZoom']);

	function updateMapCenter() {
		if (window.innerWidth <= 680) {
			map.setCenter(smallScreenCenter);
			myPlacemark.geometry.setCoordinates(smallScreenMarker);
			myPlacemark.options.set('iconImageOffset', [-19, -50]); // Новое значение для маленьких экранов
		} else {
			map.setCenter(initialCenter);
			myPlacemark.geometry.setCoordinates(initialMarker);
			myPlacemark.options.set('iconImageOffset', [-19, -25]); // Исходное значение
		}
	}

	window.addEventListener('resize', updateMapCenter);
	updateMapCenter();
}

ymaps.ready(init);
