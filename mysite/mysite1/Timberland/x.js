//////////////////////////////////////////תפריט


let navLinks = document.querySelector(".links");
let links = document.querySelectorAll(".links li");

let hamburger = document.querySelector(".hamburger").addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("open"); //פותח את התפריא במסך טלפון

        for (let i = 0; i < links.length; i++) {
            links[i].classList.toggle("fade") //לפי  מציג את הנתון
        }
    })




/////////////////הפעלת פןפ אפ של אייקונים שיש ךמעלה


let button = document.getElementById('ButtonLogin1'); //משתמש
let buttonZ = document.getElementById('ButtonContact2'); //קשר
let buttonX = document.getElementById('ButtonTerms3'); //הובלות
let buttonB = document.getElementById('ButtonMap4'); //הובלות


let openLogin = function () { //לחיצה על אייקון כדאי שיכנס
    button.className = 'active';
};
let openContact = function () { //
    buttonZ.className = 'active';
};
let openTerms = function () { //
    buttonX.className = 'active';
};
let openMap = function () { //
    buttonB.className = 'active';
};


let checkInput = function (input) { //לכתוב טקסט בתוך תבנית
    if (input.value.length > 0) {
        input.className = 'active';
    } else {
        input.className = '';
    }
};

let closeForm = function () { //על כפתור או על האיקס סגירה
    button.className = '';
};
let closeFormZ = function () {
    buttonZ.className = '';
};
let closeFormX = function () {
    buttonX.className = '';
};
let closeFormB = function () {
    buttonB.className = '';
};





/////////////מפה אייקון של מציאת חנות
function initMap() {
    let myLatLng = {
        lat: 40.7127837,
        lng: -74.00594130000002
    };

    let map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 16
    });

    let marker = new google.maps.Marker({
        map: map,
        position: myLatLng
    });
}
























//סל


    let iconShoppingZ = document.querySelector('.iconShopping159');
    let cartCloseBtnZ = document.querySelector('.fa-close');
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
        tableDataZ += '<tr class="BoxIt"><th>' + data.idZ + '</th><th class="vv">' + 'name: ' + data.nameZ + ' | ' + '</th><th class="ss">' + 'Amount: ' + data.noZ + ' | ' + '</th><th class="xx">' + 'price : ' + data.priceZ + ' | ' + '</th><th><a href="#" onclick=DeleteZ(this);>DeleteZ</a></th></tr>';
    });

    cardBoxTableZ.innerHTML = tableDataZ;

