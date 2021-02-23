//var btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
	//console.log(document.querySelectorAll('.numbers-btns'));
	// for (let i = 0; i < 10; i++) {
	// 	eval(`btn${i} = ${document.querySelector('.numbers-btns')}`);
	// 	console.log(btn0);
	// }

let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let btn6 = document.getElementById('btn-6');
let btn7 = document.getElementById('btn-7');
let btn8 = document.getElementById('btn-8');
let btn9 = document.getElementById('btn-9');
let btn0 = document.getElementById('btn-0');

let btnAdd = document.getElementById('btn-add');
let btnSubs = document.getElementById('btn-subs');
let btnDivision = document.getElementById('btn-division');
let btnMultiplication = document.getElementById('btn-multiplication');

let btnEqual = document.getElementById('btn-equal');

let btnClear = document.getElementById('btn-clear');

let visor = document.getElementById('visor');

let firstNumber;
let secondNumber;
let aux = false;


	btn1.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 1;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 1;
		}	
	});

	btn2.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 2;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 2;
		}	
	});

	btn3.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 3;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 3;
		}	
	});

	btn4.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 4;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 4;
		}	
	});

	btn5.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 5;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 5;
		}	
	});

	btn6.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 6;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 6;
		}	
	});

	btn7.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 7;
		} else {
			visor.innerHTML = '';
			visor.innerHTML += 7;
		}	
	});

	btn8.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 8;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 8;
		}	
	});

	btn9.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 9;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 9;
		}	
	});

	btn0.addEventListener('click', function() {
		if(aux == false) {
			visor.innerHTML += 0;
		} else {
			aux = false;
			visor.innerHTML = '';
			visor.innerHTML += 0;
		}	
	});

	btnAdd.addEventListener('click', function() {
		firstNumber = parseInt(visor.innerHTML);
		visor.innerHTML += ' + ';
	});

	btnSubs.addEventListener('click', function() {
		firstNumber = parseInt(visor.innerHTML);
		visor.innerHTML += ' - ';
	});

	btnMultiplication.addEventListener('click', function() {
		firstNumber = parseInt(visor.innerHTML);
		visor.innerHTML += ' x ';
	});

	btnDivision.addEventListener('click', function() {
		firstNumber = parseInt(visor.innerHTML);
		visor.innerHTML += ' % ';
	});

	btnEqual.addEventListener('click', function() {
		if( visor.innerHTML.includes(' + ')) {
			visor.innerHTML.indexOf(' + ');
			secondNumber = parseInt(visor.innerHTML.slice(visor.innerHTML.indexOf(' + ') + 3));
			visor.innerHTML = firstNumber + secondNumber;
		} else if ( visor.innerHTML.includes(' - ') ) {
			visor.innerHTML.indexOf(' - ');
			secondNumber = parseInt(visor.innerHTML.slice(visor.innerHTML.indexOf(' - ') + 3));
			visor.innerHTML = firstNumber - secondNumber;
		} else if ( visor.innerHTML.includes(' x ') ) {
			visor.innerHTML.indexOf(' x ');
			secondNumber = parseInt(visor.innerHTML.slice(visor.innerHTML.indexOf(' x ') + 3));
			visor.innerHTML = firstNumber * secondNumber;
		} else if ( visor.innerHTML.includes(' % ') ) {
			visor.innerHTML.indexOf(' x ');
			secondNumber = parseInt(visor.innerHTML.slice(visor.innerHTML.indexOf(' % ') + 3));
			visor.innerHTML = firstNumber / secondNumber;
		} else {
			visor.innerHTML = 'Esta no es una operación válida';
		}
		
		aux = true;
	});

	btnClear.addEventListener('click', function() {
		visor.innerHTML = '';

	});	



