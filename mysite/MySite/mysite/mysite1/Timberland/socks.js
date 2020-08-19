// menu תפריט
function openNav() {
  document.getElementById("mobile__menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile__menu").style.width = "0";
}




/////////////////////////////////////////////////////////////////////////////////////////////


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

  //בדיקות הקלטת נתונים בשדה הקליטה

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


/////////////////////////////////////////////////////////////////////////////////////////////




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





/////////////////////////////////////////////////////////////////////////////////////////////




// קוד של דף מוצר סניקרס 3 סוגים
let sizes = document.querySelectorAll('.size');
let colors = document.querySelectorAll('.color');
let shoes = document.querySelectorAll('.shoe');
let gradients = document.querySelectorAll('.gradient');
let shoeBg = document.querySelector('.shoeBackground');

let prevColor = "blue";
let animationEnd = true;

function changeSize() { //אפשרות להזיז את המידות שיש למוצר
  sizes.forEach(size => size.classList.remove('active'));
  this.classList.add('active');
}
sizes.forEach(size => size.addEventListener('click', changeSize));



colors.forEach(c => c.addEventListener('click', changeColor));

function changeColor() { //אנימציה של העברת צבעים של המוצר
  if (!animationEnd) return;
  let primary = this.getAttribute('primary');
  let color = this.getAttribute('color');
  let shoe = document.querySelector(`.shoe[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

  if (color == prevColor) return;

  colors.forEach(c => c.classList.remove('active'));
  this.classList.add('active');

  document.documentElement.style.setProperty('--primary', primary);

  shoes.forEach(s => s.classList.remove('show'));
  shoe.classList.add('show');

  gradients.forEach(g => g.classList.remove('first', 'second'));
  gradient.classList.add('first');
  prevGradient.classList.add('second');

  prevColor = color;
  animationEnd = false;

  gradient.addEventListener('animationend', () => {
    animationEnd = true;
  })
}



// יכולת להזיז את הכמות של אותו מוצר

function increaseValue() { //אופציה להוסיף כמות
  let value = parseInt(document.getElementById('number').value);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() { //אופציה להחסיר את הכמות
  let value = parseInt(document.getElementById('number').value);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}






/////////////////////////////////////////////////////////////////////////////////////////////






// תגובות

var likeIcon = document.getElementById("like"),
  likeCounter = likeIcon.nextElementSibling,
  loveIcon = document.getElementById("love"),
  loveCounter = loveIcon.nextElementSibling,
  comment = document.getElementById("commentName"),
  comment = document.getElementById("comment"),
  addComment = comment.nextElementSibling,
  commentsContainer = document.getElementById("comments-commet"),
  commentCounter = document.getElementById("comment-counter");


//לחיצה על אייקון לייק

likeIcon.addEventListener("click", function () {
  this.classList.toggle("like");
  let numberOfLikes = Number(likeCounter.textContent);
  if (this.classList.contains("like")) {
    numberOfLikes++;
    likeCounter.textContent = numberOfLikes;
  }
});


//לחיצה על אייקון לב אהבתי

loveIcon.addEventListener("click", function () {
  this.classList.toggle("love");
  let numberOfLoves = Number(loveCounter.textContent);
  if (this.classList.contains("love")) {
    numberOfLoves++;
    loveCounter.textContent = numberOfLoves;
  }
});


//הוספת תגובות

addComment.addEventListener("click", function () {
  let numberOfComments = Number(commentCounter.textContent),
    date = new Date(); //זמן שליחת ההודעה
  numberOfComments++;
  commentCounter.textContent = numberOfComments;
  commentsContainer.style.display = "block";

  //להוסיף לתגובה מה שנרצה
  commentsContainer.innerHTML +=

    `<div><h5>${commentName.value}</h5>  
          <h4>${comment.value}</h4>  
            <span>${date.toLocaleTimeString()} - ${date.toLocaleDateString()}</span> 
            <i class="fa fa-trash"></i>
         </div>`;

  commentName.value = "";
  comment.value = "";


  //מחיקת תגובות אם נרצה

  let deleteIcons = document.querySelectorAll(".commet .comments div i");
  for (let i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener("click", function () {
      this.parentElement.style.display = "none";
      numberOfComments--;
      commentCounter.textContent = numberOfComments;
    });
  }
});







/////////////////////////////////////////////////////////////////////////////////////////////







// המוצרים האהובים בדף מוצר

function responsiveSlider() {
  let slider = document.querySelector('.loveAlso');
  let sliderWidth = slider.offsetWidth / 7;
  let sliderList = document.querySelector('.loveAlso ul');
  let items = sliderList.querySelectorAll('.loveAlso li').length - 7;
  let count = 1;

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth;
  });


  function nextSlide() {
    if (count < items) {
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;

    } else if (count == items) {
      sliderList.style.left = '0px';
      count = 1;
    }
  }

  setInterval(function () { //מהירות העברת של הקרוסלה אוטומטית
    nextSlide();
  }, 1500);
}
responsiveSlider();







/////////////////////////////////////////////////////////////////////////////////////////////




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
        no: document.getElementById('number').value,
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
let no1 = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
  no1 += Number(data.no);
});
iconShoppingP.innerHTML = no1;


//הצגת פריטים בתוך סל הקניות
let cardBoxTable = cartBox.querySelector('.AddItems');
let tableData = '';

JSON.parse(localStorage.getItem('items')).map(data => { //לקחת מהמאגר נתונים של האתר ולהציג אותו בסל הקניות
  tableData += '<h6>' + data.id + '</h6><h5>' + data.name + '</h5><h5>' + 'quantity:' + ' ' + data.no + '</h5><h5>' + 'Price:' + ' ' + data.price + '</h5><h5>' +  '<a href="#" <i class="far fa-trash-alt" onclick=Delete(this);></i></a></h5>' + '_________________________';
});


cardBoxTable.innerHTML = tableData;







/////////////////////////////////////////////////////////////////////////////////////////////




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