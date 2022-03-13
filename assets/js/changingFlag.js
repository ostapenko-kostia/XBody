var select = document.querySelector('.langSelect-inner');
var flagImg = document.querySelector('.langSelect').querySelector('img');

function changeFlag() {
	switch(select.value) {
		case '1':
			flagImg.setAttribute('src', 'assets/imgs/engFlag.png');
			break;
		case '2':
			flagImg.setAttribute('src', 'assets/imgs/spaFlag.png');
			break;
		case '3':
			flagImg.setAttribute('src', 'assets/imgs/gerFlag.png');
			break;
		case '4':
			flagImg.setAttribute('src', 'assets/imgs/freFlag.png');
			break;
		case '5':
			flagImg.setAttribute('src', 'assets/imgs/itaFlag.png');
			break;
	}
}