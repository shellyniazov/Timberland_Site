// פופ אפ אוטומטי נפתח

function PopUp(hideOrshow) {
	if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
	else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
	setTimeout(function () { //אחרי 5 שניות הפופ אפ האוטומטי נפתח לבד
		PopUp('show');
	}, 5000);
}

function out(e) { // פונקציה האחראית על יציאה מהפופ אפ על ידי לחיצה על הרקע החיצוני
	if (e.target == document.getElementById('ac-wrapper')) {
		document.getElementById('ac-wrapper').style.display = 'none';
	}
}

window.addEventListener( //לסגור ברקע
	'click', out
);



////////////////////////////////////////////////////////////////////////////



// Sign in 

document.getElementById('buttonSignIn').addEventListener("click", function () {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.closeSignIn').addEventListener("click", function () {
	document.querySelector('.bg-modal').style.display = "none";
});


let alertRedInput = "#8C1010";
let defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
	let username = document.getElementById("username");
	let issueArr = [];

	//בדיקות קליטת נתונים בשדה הקליטה
	if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
		issueArr.push("No special characters!");
	}
	if (issueArr.length > 0) {
		username.setCustomValidity(issueArr);
		username.style.borderColor = alertRedInput;
	} else {
		username.setCustomValidity("");
		username.style.borderColor = defaultInput;
	}
}

function passwordValidation(passwordInput) {
	let password = document.getElementById("password");
	let issueArr = [];
	if (!/^.{7,15}$/.test(passwordInput)) {
		issueArr.push("Password must be between 7-15 characters.");
	}
	if (!/\d/.test(passwordInput)) {
		issueArr.push("Must contain at least one number.");
	}
	if (!/[a-z]/.test(passwordInput)) {
		issueArr.push("Must contain a lowercase letter.");
	}
	if (!/[A-Z]/.test(passwordInput)) {
		issueArr.push("Must contain an uppercase letter.");
	}
	if (issueArr.length > 0) {
		password.setCustomValidity(issueArr.join("\n"));
		password.style.borderColor = alertRedInput;
	} else {
		password.setCustomValidity("");
		password.style.borderColor = defaultInput;
	}
}

function out1(e) { // פונקציה האחראית על יציאה מהפופ אפ על ידי לחיצה על הרקע החיצוני
	if (e.target == document.querySelector('.bg-modal')) {
		document.querySelector('.bg-modal').style.display = 'none';
	}
}

window.addEventListener( //לסגור ברקע
	'click', out1
);



////////////////////////////////////////////////////////////////////////////




// menu תפריט

function openNav() {
	document.getElementById("mobile__menu").style.width = "100%";
}

function closeNav() {
	document.getElementById("mobile__menu").style.width = "0";
}




////////////////////////////////////////////////////////////////////////////



///אייקון חיפוש

document.querySelector('.hideBtn').addEventListener(
	'click',
	hideSearch);

document.querySelector('.showBtn').addEventListener(
	'click',
	showSearch);



function showSearch() { //פתיחת פופאפ
	document.querySelector('.overlaySearch').style.display = "block";
}

function hideSearch() { //סגירה פופאפ  
	document.querySelector('.overlaySearch').style.display = "none";
}



////////////////////////////////////////////////////////////////////////////



// תמונות מתחלפות דף ראשי

let slides = document.querySelector(".slider").children;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;



//לחיצות על החצים בקרוסלה והפעלת פונקציות בפנים

prev.addEventListener("click", function () {
	prevSlide();
	resetTimer();
})

next.addEventListener("click", function () {
	nextSlide();
	resetTimer();
})


function prevSlide() { //לחיצה על חץ הימני כדאי להעביר את הקרוסלה
	if (index == 0) {
		index = slides.length - 1;
	} else {
		index--;
	}
	changeSlide();
}

function nextSlide() {
	if (index == slides.length - 1) {
		index = 0;
	} else {
		index++;
	}
	changeSlide();
}

function changeSlide() { //פונקציה אחראית על העברת תמונות בקרוסלה לפי לולאה ומערך לפי כמות התמונות
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active"); //להסיר את התמונה
	}
	slides[index].classList.add("active"); //להוסיף תמונה
}


function autoPlay() {
	nextSlide(); //להפעיל את הפונקציה הזאת כדאי שהתמונות יועברו אוטומטי קדימה
}

let timer = setInterval(autoPlay, 4000); //העברה אוטומטית תמונות כל 4 שניות







////////////////////////////////////////////////////////////////////////////




// קרוסלה של מוצרים

let carousel = document.getElementById("carousel"),
	content = document.getElementById("content"),
	next11 = document.getElementById("next11"),
	prev11 = document.getElementById("prev11");

let width = carousel.offsetWidth; //רוחב של הקרוסלה


next11.addEventListener("click", function () { //לחיצה על החץ הימני כדאי להעביר

	carousel.scrollBy(width, 0); //לפי רוחב הקרוסלה לקדימה

	if (carousel.scrollWidth !== 0) { //להציג את החץ השמאלי כדי שנוכל ללחוץ עליו
		prev11.style.display = "flex";
	}
	if (content.scrollWidth - width <= carousel.scrollLeft + width) { //אם אין יותר פריטים להעביר ימינה אל תציג את החץ
		next11.style.display = "none";
	}
});


prev11.addEventListener("click", function () { //לחיצה על החץ השמאלי כדי לחזור חזרה

	carousel.scrollBy(-width, 0); //לפי רוחב הקרוסלה אחורה


	//אותו דבר כמו בפונקציה למעלה רק הפוך
	if (carousel.scrollLeft - width <= 0) {
		prev11.style.display = "none";
	}
	if (!content.scrollWidth - width <= carousel.scrollLeft + width) {
		next11.style.display = "flex";
	}
});

window.addEventListener("resize", e => (width = carousel.offsetWidth));












////////////////////////////////////////////////////////////////////////////




// מועדפים

window.onload = function () {

	let iconShoppingZ = document.querySelector('.iconShopping159');
	let cartCloseBtnZ = document.querySelector('.ixs');
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
					nameZ: e.target.parentElement.children[1].textContent,
					priceZ: e.target.parentElement.children[2].textContent,
					noZ: document.getElementById('number').value
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


	let cardBoxTableZ = cartBoxZ.querySelector('.AddItems');
	let tableDataZ = '';


	JSON.parse(localStorage.getItem('itemsZ')).map(data => {
		tableDataZ += '<h6>' + data.idZ + '</h6><h5>' + data.nameZ + '</h5><h5>' + 'quantity:' + ' ' + data.noZ + '</h5><h5>' + 'Price:' + ' ' + data.priceZ + '</h5><h5>' + '<a href="#" <i class="far fa-trash-alt" onclick=DeleteZX(this);></i></a></h5>' + '_________________________';
	});

	cardBoxTableZ.innerHTML = tableDataZ;
}


///////////////////////////////////////////////////////////////////////////////







let iconShopping = document.querySelector('.iconShopping');
let cartCloseBtn = document.querySelector('.ski');
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
				id: i + 705,
				name: e.target.parentElement.children[1].textContent,
				price: e.target.parentElement.children[2].children[0].textContent,
				no: document.getElementById('number').value
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


let cardBoxTable = cartBox.querySelector('.AddItems');
let tableData = '';


JSON.parse(localStorage.getItem('items')).map(data => {
	tableData += '<h6>' + data.id + '</h6><h5>' + data.name + '</h5><h5>' + 'quantity:' + ' ' + data.no + '</h5><h5>' + 'Price:' + ' ' + data.price + '</h5><h5>' + '<a href="#" <i class="far fa-trash-alt" onclick=Delete(this);></i></a></h5>' + '_________________________';
});

cardBoxTable.innerHTML = tableData;







////////////////////////////////////////////////////////////////////////////









// צ'אט עמוד ראשי

let popup = document.querySelector('.chat-popup');
let chatBtn = document.querySelector('.chat-btn');
let submitBtn = document.querySelector('.submit');
let chatArea = document.querySelector('.chat-area');
let inputElm = document.querySelector('input');

//  לחיצה על האייקון צ אט ומופיעה

chatBtn.addEventListener('click', function () {
  popup.classList.toggle('show');
})

// שליחת הודעה והדפסה של ההודעה שנשלחה
submitBtn.addEventListener('click', function () {
  let userInput = inputElm.value;

  let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="images/person.jpg" class="avatar">
    </div>`;

  chatArea.insertAdjacentHTML("beforeend", temp); //הצגת הודעה בצ אט
  inputElm.value = '';
})