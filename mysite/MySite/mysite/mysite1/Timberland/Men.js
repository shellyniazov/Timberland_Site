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



///////////////////////////////////////////////////////////////////////////

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



function showSearch() {
    document.querySelector('.overlaySearch').style.display = "block";
}

function hideSearch() {
    document.querySelector('.overlaySearch').style.display = "none";
}




////////////////////////////////////////////////////////////////////////////




////////////// הוספה לסל

//cart box
const iconShopping = document.querySelector('.iconCart');
const cartCloseBtn = document.querySelector('.fa-times');
const cartBox = document.querySelector('.cartBox');
iconShopping.addEventListener("click", function () {
    cartBox.classList.add('active');
});
cartCloseBtn.addEventListener("click", function () {
    cartBox.classList.remove('active');
});


// adding data to localstorage
const attToCartBtn = document.getElementsByClassName('buy attToCart');
let items = [];
for (let i = 0; i < attToCartBtn.length; i++) {
    attToCartBtn[i].addEventListener("click", function (e) {
        if (typeof (Storage) !== 'undefined') {
            let item = {
                name: e.target.parentElement.children[1].textContent,
                no: 1,
                price: e.target.parentElement.children[2].textContent,
                id: i + 50,
            };
            if (JSON.parse(localStorage.getItem('items')) === null) {
                items.push(item);
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
            } else {
                const localItems = JSON.parse(localStorage.getItem("items"));
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
        } else {
            alert('local storage is not working on your browser');
        }
    });
}
// adding data to shopping cart 
const iconShoppingP = document.querySelector('.iconShopping p');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
    no = no + data.no;
});
iconShoppingP.innerHTML = no;


//adding cartbox data in table
const cardBoxTable = cartBox.querySelector('.AddItems');
let tableData = '';
if (JSON.parse(localStorage.getItem('items'))[0] === null) {
    tableData += '<tr><td colspan="5">No items found</td></tr>'
} else {
    JSON.parse(localStorage.getItem('items')).map(data => {
        tableData += '<h6>' + data.id + '</h6><h5>' + data.name + '</h5><h5>' + 'quantity:' + ' ' + data.no + '</h5><h5>' + 'Price:' + ' ' + data.price + '</h5><h5>' +  '<a href="#" <i class="far fa-trash-alt" onclick=Delete(this);></i></a></h5>' + '_________________________';
    });
}

cardBoxTable.innerHTML = tableData;



////////////////////////////////////////////////////////////////////////////




// צ'אט עמוד ראשי

const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');





////////////////////////////////////////////////////////////////////////////



//   chat button toggler 

chatBtn.addEventListener('click', () => {
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', () => {
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="images/peopleChat.jpg" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})






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


