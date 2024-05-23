// Получить попап
let popup = document.getElementById('popup');

// Получить элемент <span>, который закрывает попап
let closeBtn = document.querySelector('.close-btn');

// Функция для отображения попапа
function showPopup() {
	popup.style.display = 'block';
}

// Когда пользователь нажимает на <span> (x), закрыть попап
closeBtn.onclick = function () {
	popup.style.display = 'none';
};

// Когда пользователь нажимает в любом месте вне попапа, закрыть его
window.onclick = function (event) {
	if (event.target == popup) {
		popup.style.display = 'none';
	}
};
