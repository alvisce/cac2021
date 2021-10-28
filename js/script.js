const PRECIO_TICKET = 200;

let alerta = new bootstrap.Modal(document.getElementById('modal-alerta')), 
	descripcion = document.getElementById('modal-alerta-desc');

let resumen = document.getElementById('resumen'), 
	data = document.getElementsByClassName('form-data'), 
	boton = document.getElementsByClassName('form-boton');

boton['borrar'].addEventListener('click', 
	function (argument) {
		for (let i = 0; i < data.length; i++) {
			data[i].value = (data[i].name == 'categoria' ? 0 : '');
		}
		resumen.innerHTML = 'Total a pagar: $';
	}
);

boton['resumen'].addEventListener('click', 
	function (argument) {
		let i = 0, 
			esValido = true;

		while (i < data.length) {
			if (data[i].required && data[i].value == '') {
				esValido = false;
				break;
			}
			i++;
		}

		if (!esValido) {
			descripcion.innerHTML = 'El campo ' + data[i].name + ' es obligatorio.';
			alerta.show();
		} else {
			let precio = PRECIO_TICKET, 
				descuento = precio * data['categoria'].value / 100;
			precio -= descuento;
			precio *= data['cantidad'].value;
			resumen.innerHTML = 'Total a pagar: $' + precio;
		}
	}
);
