


//סל


let iconShoppingZ = document.querySelector('.iconShopping159');
let cartCloseBtnZ = document.querySelector('.closeZ');
let cartBoxZ = document.querySelector('.cartBoxXX');
iconShoppingZ.addEventListener("click", function () {
	cartBoxZ.classList.add('active');
});
cartCloseBtnZ.addEventListener("click", function () {
	cartBoxZ.classList.remove('active');
});


let attToCartBtnZ = document.getElementsByClassName('attToCart12');
let itemsZ = [];
for (let i = 0; i < attToCartBtnZ.length; i++) {
	attToCartBtnZ[i].addEventListener("click", function (e) {
		if (typeof (Storage) !== 'undefined') {
			let itemZ = {
				idZ: i + 700,
				nameZ: e.target.parentElement.children[0].textContent,
				priceZ: e.target.parentElement.children[1].children[0].textContent,
				noZ: 1
			};
			if (JSON.parse(localStorage.getItem('itemsZ')) === null) {
				itemsZ.push(itemZ);
				localStorage.setItem("itemsZ", JSON.stringify(itemsZ));
				window.location.reload();
			} else {
				let localItemsZ = JSON.parse(localStorage.getItem("itemsZ"));
				localItemsZ.map(data => {
					if (itemZ.idZ == data.idZ) {
						itemZ.noZ = data.noZ + 1;
					} else {
						itemsZ.push(data);
					}
				});
				itemsZ.push(itemZ);
				localStorage.setItem('itemsZ', JSON.stringify(itemsZ));
				window.location.reload();
			}
		}
	});
}

let iconShoppingPZ = document.querySelector('.iconShopping159 p');
let no1Z = 0;
JSON.parse(localStorage.getItem('itemsZ')).map(data => {
	no1Z += Number(data.noZ);
});
iconShoppingPZ.innerHTML = no1Z;


let cardBoxTableZ = cartBoxZ.querySelector('table');
let tableDataZ = '';


JSON.parse(localStorage.getItem('itemsZ')).map(data => {
	tableDataZ += '<tr class="BoxIt"><th>' + data.idZ + '</th><th class="vv">' + 'name: ' + data.nameZ + ' | ' + '</th><th class="ss">' + 'Amount: ' + data.noZ + ' | ' + '</th><th class="xx">' + 'price : ' + data.priceZ + ' | ' + '</th><th><a href="#" onclick=DeleteZX(this);>DeleteZX</a></th></tr>';
});

cardBoxTableZ.innerHTML = tableDataZ;




//סל

window.onload = function () {
	let iconShopping = document.querySelector('.iconShopping');
	let cartCloseBtn = document.querySelector('.fa-close');
	let cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click", function () {
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click", function () {
		cartBox.classList.remove('active');
	});


	let attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for (let i = 0; i < attToCartBtn.length; i++) {
		attToCartBtn[i].addEventListener("click", function (e) {
			if (typeof (Storage) !== 'undefined') {
				let item = {
					id: i + 600,
					name: e.target.parentElement.children[0].textContent,
					price: e.target.parentElement.children[1].children[0].textContent,
					no: 1
				};
				if (JSON.parse(localStorage.getItem('items')) === null) {
					items.push(item);
					localStorage.setItem("items", JSON.stringify(items));
					window.location.reload();
				} else {
					let localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data => {
						if (item.id == data.id) {
							item.no = data.no + 1;
						} else {
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items', JSON.stringify(items));
					window.location.reload();
				}
			}
		});
	}

	let iconShoppingP = document.querySelector('.iconShopping p');
	let no1 = 0;
	JSON.parse(localStorage.getItem('items')).map(data => {
		no1 += Number(data.no);
	});
	iconShoppingP.innerHTML = no1;


	let cardBoxTable = cartBox.querySelector('table');
	let tableData = '';

	JSON.parse(localStorage.getItem('items')).map(data => {
		tableData += '<tr class="BoxIt"><th>' + data.id + '</th><th class="vv">' + 'name: ' + data.name + ' | ' + '</th><th class="ss">' + 'Amount: ' + data.no + ' | ' + '</th><th class="xx">' + 'price : ' + data.price + ' | ' + '</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
	});

	cardBoxTable.innerHTML = tableData;
}