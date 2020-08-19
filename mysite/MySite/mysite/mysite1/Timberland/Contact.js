// Contact us - יצירת קשר 

let checkbox = document.querySelector('.my-form input[type="checkbox"]');
let btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function () {
  let checked = this.checked;
  for (let btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});


/////////////////////////////////////////////////////////////////////////////////


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


/////////////////////////////////////////////////////////////////////////////////




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

function hideSearch() { //סגירה פופאפ של סגירה
  document.querySelector('.overlaySearch').style.display = "none";
}






////////////// הוספה לסל

//לחיצה

let iconShopping = document.querySelector('.iconCart');
let cartCloseBtn = document.querySelector('.fa-times');
let cartBox = document.querySelector('.cartBox');
iconShopping.addEventListener("click", function () {
  cartBox.classList.add('active');
});
cartCloseBtn.addEventListener("click", function () {
  cartBox.classList.remove('active');
});


// הוספת נתונים למאגר נתונים של האתר

let attToCartBtn = document.getElementsByClassName('buy attToCart'); // לחיצה על הכפתור של הוספה לסל

let items = []; // מערך שיקבל נתונים של הפריט

for (let i = 0; i < attToCartBtn.length; i++) { // לולאה שעוברת על מספר פעמים של לחיצה הוספה לסל

  attToCartBtn[i].addEventListener("click", function (e) {

    if (typeof (Storage) !== 'undefined') {
      let item = { // נתונים נכנסים למערך
        name: e.target.parentElement.children[0].textContent,
        no: 1,
        price: e.target.parentElement.children[1].children[0].textContent,
        id: i + 40,
      };

      if (JSON.parse(localStorage.getItem('items')) === null) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      } else {
        let localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {
          if (item.id == data.id) { //עם מספר המקט שווה תוסיף לאותו מקט את את הכמות של הפריט
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


// הוספה כמות פריטים לאייקון של הוספת לסל
let iconShoppingP = document.querySelector('.iconShopping p');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
  no = no + data.no;
});
iconShoppingP.innerHTML = no;


//הצגת פריטים בתוך סל הקניות
let cardBoxTable = cartBox.querySelector('.AddItems');
let tableData = '';

JSON.parse(localStorage.getItem('items')).map(data => { //לקחת מהמאגר נתונים של האתר ולהציג אותו בסל הקניות
  tableData += '<h6>' + data.id + '</h6><h5>' + data.name + '</h5><h5>' + 'quantity:' + ' ' + data.no + '</h5><h5>' + 'Price:' + ' ' + data.price + '</h5><h5>' + '<a href="#" <i class="far fa-trash-alt" onclick=Delete(this);></i></a></h5>' + '_________________________';
});


cardBoxTable.innerHTML = tableData;





//////////////////////////////////////////////////////////////////////////////////////////////////





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
    <img src="images/peopleChat.jpg" class="avatar">
    </div>`;

  chatArea.insertAdjacentHTML("beforeend", temp); //הצגת הודעה בצ אט
  inputElm.value = '';
})