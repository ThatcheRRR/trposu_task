window.onload = () => {
    hide();
    flight.style.display = 'none';
    footer.classList.add('hidden');
}

class User {
    constructor(options) {
        this.name = options.name;
        this.seatsCount = options.seats;
        this.id = options.id;
    }

}

class Flight {
    constructor(options) {
        this.arrivalCity = options.arrivalCity;
        this.arrivalTime = options.arrivalTime;
        this.departureCity = options.departureCity;
        this.departureTime = options.departureTime;
        this.econom = options.econom;
        this.business = options.business;
    }

    buying() {
        if (seatPicker === 'econom') {

        } else if (seatPicker === 'business') {

        }
    }

    refund() {
        if (seatPicker === 'econom') {

        } else if (seatPicker === 'business') {

        }
    }



}

let date = new Date();
let hours = 0;
let minutes = 0;

if (date.getHours() < 10) {
    hours = '0' + date.getHours();
} else {
    hours = date.getHours();
}
if (date.getMinutes() < 10) {
    minutes = '0' + date.getMinutes();
} else {
    minutes = date.getMinutes();
}

const dateField = document.querySelector('#departureDate');
const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + 'T' + hours + ':' + minutes;
const loginButton = document.querySelector('.loginBut');
const authBlock = document.querySelector('.auth__block');
const cabinet = document.querySelector('.current-user');
const container = document.querySelector('.container');
const flight = document.querySelector('.flight');
const findTickets = document.querySelector('.button-block');
const departurePlace = document.querySelector('#departurePlace');
const arrivalPlace = document.querySelector('#arrivalPlace');
const footer = document.querySelector('footer');
const logs = document.querySelector('.logs');
const enterCode = 13;
const buyForm = document.querySelector('.buy-form');
const user = {};
const travel = {};
const currentTime = currentDate.slice(-5);
const travelArr = [
    {econom: 50, business: 10, departureTime: '05:24', arrivalTime: '08:19'},
    {econom: 60, business: 15, departureTime: '13:37', arrivalTime: '17:51'},
    {econom: 90, business: 30, departureTime: '19:17', arrivalTime: '23:42'},
]

dateField.min = currentDate;
dateField.value = currentDate;

let userName;
let property;
let seatPicker;
let addTicket;
let removeTicket;
let showButton;
let buySeats;
let departureCity;
let arrivalCity;
let purchase;
let buyTicket;
let notAvailable;
let available;
let economAll;
let businessAll;
let section;
let economButton;
let businessButton;
let password;
let client;

flight.style.height = `${document.body.offsetHeight}px`;

container.style.height = `${document.body.offsetHeight}px`;

function opacity() {
    authBlock.style.opacity = '1';
}

cabinet.addEventListener('click', () => {
    authBlock.style.display = 'flex';
    setTimeout(opacity, 300);
});

function hide() {
    authBlock.style.display = 'none';
    buyForm.style.display = 'none';
}

function loggedIn(e) {
    if (e.keyCode === enterCode) {
        userName = document.querySelector('#name').value.toLowerCase();
        authBlock.style.opacity = '0';
        setTimeout(hide, 300);
        cabinet.innerText = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
    }
}

authBlock.addEventListener('keydown', loggedIn);

loginButton.addEventListener('click', () => {
    userName = document.querySelector('#name').value.toLowerCase();
    password = document.querySelector('#pass').value;
    authBlock.style.opacity = '0';
    setTimeout(hide, 300);
    cabinet.innerText = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
    user.name = cabinet.innerText;
    user.id = password;
});

findTickets.addEventListener('click', () => {
    flight.style.display = 'flex';
    available = document.querySelector('.tickets__available');
    notAvailable = document.querySelector('.arrived__container');
    let arrival_city = arrivalPlace.value.toLowerCase();
    let departure_city = departurePlace.value.toLowerCase();
    if (available.innerText === 'Доступные рейсы' && notAvailable.innerText === '') {
        for (let i = 0; i < travelArr.length; i++) {
            let flightHours = `${Math.abs(travelArr[i].arrivalTime.slice(0, 2) - travelArr[i].departureTime.slice(0, 2))}ч`;
            let flightMinutes = `${Math.abs(travelArr[i].departureTime.slice(3, 5) - travelArr[i].arrivalTime.slice(3, 5))}м`;
            travelArr[i].arrivalCity = arrival_city[0].toUpperCase() + arrival_city.substring(1).toLowerCase();
            travelArr[i].departureCity = departure_city[0].toUpperCase() + departure_city.substring(1).toLowerCase();
            section = `<div class = 'tickets__buy'>
                <div class = 'buy__container'>
                    <div class = 'tickets__buy_block'>
                        <div class = 'tickets__buy_block departure'>
                            <div class = 'departure__time'>
                                ${travelArr[i].departureTime}
                            </div>
                            <div class = 'departure__city'>
                                ${travelArr[i].departureCity}
                            </div>
                        </div>
                        <div class = 'tickets__buy_block overall-time'>
                            <div class = 'departure-plane'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#A0B0B9" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17 13H14C12.4577 11.5739 10.1159 9.82474 8.16374 8.01001L6.84295 8C7.60515 9.49106 8.69945 11.4376 9.5 13H6.5C5.54148 12.2794 4.45139 11.6727 3.69008 11.1028C3.27567 10.7932 2.80644 11.0649 3.08297 11.6043C4.38443 14.1509 4.90267 15.176 4.90267 15.176C5.12943 15.6181 5.48619 15.9964 6 16H19.7317C20.7473 15.9659 20.9885 15.3663 21 14.7944C21 13.5 19.5675 13.0196 17 13Z"></path> </svg>
                            </div>
                            <span class = 'travel-time'>
                                В пути: ${flightHours + ' ' + flightMinutes}
                            </span>
                            <div class = 'arrival-plane'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#A0B0B9" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17 13H14C12.4577 11.5739 10.1159 9.82474 8.16374 8.01001L6.84295 8C7.60515 9.49106 8.69945 11.4376 9.5 13H6.5C5.54148 12.2794 4.45139 11.6727 3.69008 11.1028C3.27567 10.7932 2.80644 11.0649 3.08297 11.6043C4.38443 14.1509 4.90267 15.176 4.90267 15.176C5.12943 15.6181 5.48619 15.9964 6 16H19.7317C20.7473 15.9659 20.9885 15.3663 21 14.7944C21 13.5 19.5675 13.0196 17 13Z"></path> </svg>
                            </div>
                        </div>
                        <div class = 'tickets__buy_block arrival'>
                            <div class = 'arrival__time'>
                                ${travelArr[i].arrivalTime}
                            </div>
                            <div class = 'arrival__city'>
                                ${travelArr[i].arrivalCity}
                            </div>
                        </div>
                    </div>
                    <div class = 'tickets__buy_price bron${i}'>
                        Забронировать
                    </div>
                    <div class = 'tickets__buy_button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                    </div>
                </div>
                <div class = 'tickets__buy_property hidden'>
                    <div class = 'tickets__buy_property_info purchase'>
                        <div class = 'purchase__amount'>
                            <div class = 'purchase__amount_label'>Количество билетов</div>
                            <div class = 'purchase__amount_minus'>
                                <svg width="8" height="2" viewBox="0 0 8 2" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h8v2H0z" fill="#FFF" fill-rule="evenodd"></path></svg>
                            </div>
                            <div class = 'purchase__amount_current-amount'>1</div>
                            <div class = 'purchase__amount_plus'>
                                <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M5 3h3v2H5v3H3V5H0V3h3V0h2v3z" fill="#FFF" fill-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div class = 'purchase__type'>
                            <input type = 'radio' id = 'econom${i}' name = 'ticket-class'>
                            <label for = 'econom${i}' class = 'econom'>Эконом</label>
                        </div>
                        <div class = 'purchase__type'>
                            <input type = 'radio' id = 'business${i}' name = 'ticket-class'>
                            <label for = 'business${i}' class = 'business'>Бизнес</label>
                        </div>
                    </div>
                    <div class = 'tickets__buy_property_amount availableSeats'>
                        <p class = 'availableSeats__header'>Количество свободных мест</p>
                        <div class = 'availableSeats__classes'>
                            <div class = 'availableSeats__classes_econom'>
                                Эконом
                                <span>
                                    ${travelArr[i].econom}
                                </span>
                            </div>
                            <div class = 'availableSeats__classes_business'>
                                Бизнес
                                <span>
                                    ${travelArr[i].business}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`;
            if (currentTime >= travelArr[i].departureTime) {
                notAvailable.insertAdjacentHTML('beforeend', section);
            } else {
                available.insertAdjacentHTML('beforeend', section);
            }
        }
    }
    buyTicket = document.querySelectorAll('.tickets__buy_price');
    economButton = document.querySelectorAll('.econom');
    businessButton = document.querySelectorAll('.business');
    property = document.querySelectorAll('.tickets__buy_property');
    economAll = document.querySelectorAll('.availableSeats__classes_econom > span');
    businessAll = document.querySelectorAll('.availableSeats__classes_business > span');
    addTicket = document.querySelectorAll(".purchase__amount_plus");
    removeTicket = document.querySelectorAll(".purchase__amount_minus");
    showButton = document.querySelectorAll(".tickets__buy_button > svg");
    buySeats = document.querySelectorAll(".purchase__amount_current-amount");
    departureCity = document.querySelectorAll('.departure__city');
    arrivalCity = document.querySelectorAll('.arrival__city');
    purchase = document.querySelectorAll('.purchase__type');
    for (let i = 0; i < arrivalCity.length; i++) {
        arrivalCity[i].innerText = arrival_city[0].toUpperCase() + arrival_city.substring(1).toLowerCase();
        departureCity[i].innerText = departure_city[0].toUpperCase() + departure_city.substring(1).toLowerCase();
    }
    for (let i = 0; i < showButton.length; i++) {
        showButton[i].addEventListener('click', (e) => {
            let elem = getComputedStyle(e.currentTarget);
            let check = elem.transform;
            if (check !== 'none') {
                e.currentTarget.style.transform = '';
            } else {
                e.currentTarget.style.transform = 'rotate(180deg)';
            }
            property[i].classList.toggle('hidden');
        });
    }
    footer.classList.remove('hidden');
    for (let i = 0; i < economButton.length; i++) {
        economButton[i].addEventListener('click', () => {
            seatPicker = 'econom';
        });
        businessButton[i].addEventListener('click', () => {
            seatPicker = 'business';
        });
    }
    for (let i = 0; i < addTicket.length; i++) {
        let count = Number(buySeats[i].innerText);
        addTicket[i].onclick = () => {
            if (count >= 9) {
                buySeats[i].innerText = '9';
            } else {
                buySeats[i].innerText = `${++count}`;
            }
        }
        removeTicket[i].onclick = () => {
            if (count <= 1) {
                buySeats[i].innerText = '1';
            } else {
                buySeats[i].innerText = `${--count}`;
            }
        }
    }
    for (let i = 0; i < buyTicket.length; i++) {
    }
});
