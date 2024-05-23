let selector = document.querySelector('#tel');
let im = new Inputmask('+7 ( 999 ) 999 - 99 - 99');
im.mask(selector);

let validation = new JustValidate('form');

validation
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Введите имя!',
		},
		{
			rule: 'minLength',
			minLength: 3,
			value: 2,
			errorMessage: 'Введите минимум 2 символа!',
		},
	])
	.addField('#tel', [
		{
			validator: (value) => {
				const phone = selector.inputmask.unmaskedvalue();
				return Boolean(Number(phone) && phone.length > 0);
			},
			errorMessage: 'Введите телефон',
		},
		{
			validator: (value) => {
				const phone = selector.inputmask.unmaskedvalue();
				return Boolean(Number(phone) && phone.length === 10);
			},
			errorMessage: 'Введите телефон полностью',
		},
	])
	.onSuccess(async function () {
		let data = {
			name: document.getElementById('name').value,
			tel: selector.inputmask.unmaskedvalue(),
		};

		let response = await fetch('mail.php', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
		});

		let result = await response.text();

		// Показать всплывающее окно
		popup.style.display = 'block';

		// Добавить обработчик событий на кнопку закрытия
		const closeButton = document.querySelector('.close-btn');
		closeButton.addEventListener('click', function () {
			popup.style.display = 'none';
		});

		// Закрытие всплывающего окна при клике вне его
		window.addEventListener('click', function (event) {
			if (!event.target.closest('.popup-content')) {
				popup.style.display = 'none';
			}
		});
	});
