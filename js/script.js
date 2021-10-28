function ejercicio1(argument) {
	let variable_a = 33, 
		variable_b = 77, 
		variable_resultado = variable_b + variable_a;
	console.log('Resultado ' + variable_resultado);
}

function ejercicio2(argument) {
	let a = Number.parseFloat(prompt('1. Ingrese un n\u00famero')), 
		b = Number.parseFloat(prompt('2. Ingrese otro n\u00famero')), 
		c = Number.parseFloat(prompt('3. Ingrese otro n\u00famero')), 
		d = Number.parseFloat(prompt('4. Ingrese otro n\u00famero')), 
		e = Number.parseFloat(prompt('5. Ingrese el \u00faltimo n\u00famero')), 
		promedio;

	if (Number.isNaN(val)) {
		console.log('El valor no es n\u00fameros.');
	} else {
		promedio = (a + b + c + d + e)/5;
		console.log('El promedio es ' + promedio);
	}
}

function ejercicio3(argument) {
	let nota1 = Number.parseFloat(prompt('Ingrese una nota')), 
		nota2 = Number.parseFloat(prompt('Ingrese otro nota'));

	if (Number.isNaN(nota1) || Number.isNaN(nota2) || nota1 > 10 || nota1 < 1 || nota2 > 10 || nota2 < 1) {
		console.log('Algunos valores no corresponden. No se puede dar un resultado.');
	} else {
		if (nota1 > nota2) {
			console.log('nota1 es mayor');
		} else if (nota2 > nota1) {
			console.log('nota2 es mayor');
		} else {
			console.log('nota1 y nota2 son iguales');
		}
	}
}

function ejercicio4(argument) {
	const DESC = 0.85;

	let monto = Number.parseFloat(prompt('Ingrese el monto'));

	if (Number.isNaN(monto) || monto < 0) {
		console.log('El monto no correponde.');
	} else {
		console.log('Debe abonar ' + (monto * (monto > 100 ? DESC : 1)));
	}
}

function ejercicio5(argument) {
	const VAL_ENTRADA = 1.5, 
		VAL_ENTRADA_DESC = 0.5;

	let cant = Number.parseInt(prompt('Ingrese una cantidad'));

	if (Number.isInteger(cant) && cant > 0) {
		console.log('El monto total es ' + (cant * (cant < 8 ? VAL_ENTRADA : VAL_ENTRADA_DESC)));
	} else {
		console.log('El valor no corresponde a una cantidad');
	}
}

function ejercicio6(argument) {
	// fixme: consultar que hay que hacer
	ejercicio3();
}

function ejercicio7(argument) {
	const CLASF_MALA = 0, 
		CLASF_REGULAR = 1, 
		CLASF_BUENA = 2, 
		CLASF_MUYBUENA = 3, 
		CLASF_EXCELENTE = 4;

	let val = Number.parseInt(prompt('Ingrese un valor de 0 a 4'));

	switch (val) {
		case CLASF_MALA: {
			console.log('Mala');
			break;
		}
		case CLASF_REGULAR: {
			console.log('Regular');
			break;
		}
		case CLASF_BUENA: {
			console.log('Buena');
			break;
		}
		case CLASF_MUYBUENA: {
			console.log('Muy buena');
			break;
		}
		case CLASF_EXCELENTE: {
			console.log('Excelente');
			break;
		}
		default: {
			console.log('El valor no corresponde.');
			break;
		}
	}
}

function ejercicio8(argument) {
	let i = 60;

	while (i > 0) {
		console.log(--i);
	}
}

function ejercicio9(argument) {
	for (let i = 0; i <= 100; i+=2) {
		console.log(i);
	}
}

function ejercicio10(argument) {
	for (let i = 100; i >= 0; i--) {
		console.log(i);
	}
}

function ejercicio11(argument) {
	const nums = [];

	let cant = 0, 
		val = Number.parseFloat(prompt('Ingrese un n\u00famero (-1 para terminar)'));

	while (val != -1) {
		if (!Number.isNaN(val)) {
			cant = nums.push(val)
		}
		val = Number.parseFloat(prompt('Ingrese un n\u00famero (-1 para terminar)'));
	}

	console.log(cant + ' n\u00famero(s) ingresado(s).');

	for (let i = 0; i < cant; i++) {
		console.log(i + ' => ' + nums[i]);
	}
}

function ejercicio12(argument) {
	let n = 0, 
		sum = 0, 
		num = Number.parseFloat(prompt('Ingrese un n\u00famero (-1 para terminar)'));

	while (num != -1) {
		sum += (Number.isNaN(num) ? 0 : num);
		num = Number.parseFloat(prompt('Ingrese un n\u00famera (-1 para terminar)'));
		n++;
	}

	console.log('El promedio es ' + (sum / n) + '.');
}

function ejercicio13(argument) {
	const CANT = 5;
	let sum = 0, 
		nom = prompt('Ingrese su nombre');

	for (let i = 0; i < CANT; i++) {
		let val = 0;
		do {
			if (Number.isNaN(val) || val < 0) {
				alert('El valor no corresponde a un precio.')
			}
			val = Number.parseFloat(prompt('Ingrese un precio'))
		} while (Number.isNaN(val) || val < 0);
		sum += val
	}

	console.log('Nombre: ' + nom);
	console.log('Monto total: ' + sum);
}

function ejercicio14(argument) {
	let n = 0, 
		sum = 0, 
		val = Number.parseFloat(prompt('Ingrese una altura en mts (0 para terminar)'));

	while (val != 0) {
		if (Number.isNaN(val) || val < 0) {
			alert('El valor no corresponde a una altura.');
		} else {
			sum += val;
			n++;
		}
		val = Number.parseFloat(prompt('Ingrese una altura en mts (0 para terminar)'));
	}

	console.log('La altura promedio es ' + (n > 0 ? sum / n : 0));
}

function ejercicio15(argument) {
	const SIGN_NUMS = [
		'Huevos', 'Agua', 'Ni\u00f1o', 'San Cono', 'La cama', 
		'Gato', 'Perro', 'Revolver', 'Incendio', 'Arroyo', 
		'La leche', 'Minero', 'Soldado', 'La yeta', 'Borracho', 
		'Ni\u00f1a bonita', 'Anillo', 'Desgracia', 'Sangre', 'Pescado', 
		'La fiesta', 'Mujer', 'Loco', 'Cocinero', 'Caballo', 'Gallina'
	];

	let val = Number.parseInt(prompt('Ingrese un n\u00famero de 0 a 25 (-1 para terminar)'));

	while (val != -1) {
		if (Number.isInteger(val) && val >= 0 && val <= 25) {
			alert(val + ': ' + SIGN_NUMS[val]);
		} else {
			alert('El valor no corresponde.');
		}
		val = Number.parseInt(prompt('Ingrese un n\u00famero de 0 a 25 (-1 para terminar)'));
	}
}

function ejercicio16(argument) {
	// 10 nombres y apellidos de las personas del curso
	const nombres = new Array(10),
		apellidos = new Array(10);
}

function main(argument) {
	// ejercicio1();
	// ejercicio2();
	// ejercicio3();
	// ejercicio4();
	// ejercicio5();
	// ejercicio6();
	// ejercicio7();
	// ejercicio8();
	// ejercicio9();
	// ejercicio10();
	// ejercicio11();
	// ejercicio12();
	// ejercicio13();
	// ejercicio14();
	// ejercicio15();
	// ejercicio16();
}

main();
