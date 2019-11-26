window.onload = () => {
    hide();
    flight.style.display = 'none';
    footer.classList.add('hidden');
}

class User {
    constructor(name, seats, id) {
        this.name = name;
        this.seatsCount = seats;
        this.id = id;
    }

}

class Flight {
    constructor(seats, econom, business, date, arrive, departure) {
        this.seats = seats;
        this.econom = econom;
        this.business = business;
        this.date = date;
        this.arrive = arrive;
        this.departure = departure;
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
const enterCode = 13;
const user = {};
const travel = {};

dateField.min = currentDate;
dateField.value = currentDate;

let userName = '';
let currentID = 0;
let property = '';
let count = 0;

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
}

function loggedIn(e) {
    if (e.keyCode === enterCode) {
        userName = document.querySelector('#name').value.toLowerCase();
        authBlock.style.opacity = '0';
        setTimeout(hide, 300);
        cabinet.textContent = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
    }
}

authBlock.addEventListener('keydown', loggedIn);

loginButton.addEventListener('click', () => {
    userName = document.querySelector('#name').value.toLowerCase();
    authBlock.style.opacity = '0';
    setTimeout(hide, 300);
    cabinet.textContent = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
});

findTickets.addEventListener('click', () => {
    flight.style.display = 'flex';
    section = '';
    const addTicket = document.querySelector(".purchase__amount_plus");
    const removeTicket = document.querySelector(".purchase__amount_minus");
    const showButton = document.querySelector(".tickets__buy_button > svg");
    const buySeats = document.querySelector(".purchase__amount_current-amount");
    const departureCity = document.querySelector('.departure__city');
    const arrivalCity = document.querySelector('.arrival__city');
    const purchase = document.querySelector('.purchase__type');
    const buyTicket = document.querySelectorAll('.tickets__buy_price');
    const economAmount = document.querySelector('.availableSeats__classes_econom');
    const businessAmount = document.querySelector('.availableSeats__classes_business');
    let economAll = +document.querySelector('.availableSeats__classes_econom > span').textContent;
    let businessAll = +document.querySelector('.availableSeats__classes_business > span').textContent;
    count = Number(buySeats.innerText);
    property = document.querySelector('.tickets__buy_property');
    property.classList.add('hidden');
    // let arrival_city = arrivalPlace.value.toLowerCase();
    // let departure_city = departurePlace.value.toLowerCase();
    // arrivalCity.textContent = arrival_city[0].toUpperCase() + arrival_city.substring(1).toLowerCase();
    // departureCity.textContent = departure_city[0].toUpperCase() + departure_city.substring(1).toLowerCase();
    showButton.addEventListener('click', showDescrInfo);
    footer.classList.remove('hidden');
    purchase.children[1].addEventListener('click', (e) => {
        if (e.currentTarget.innerText === 'Эконом') {
            alert('kok');
        } else if (e.currentTarget.innerText === 'Бизнес') {
            alert('kek');
        }
    });
    addTicket.onclick = () => {
        if (count >= 9) {
            buySeats.innerText = '9';
        } else {
            buySeats.innerText = `${++count}`;
        }
    }
    removeTicket.onclick = () => {
        if (count <= 1) {
            buySeats.innerText = '1';
        } else {
            buySeats.innerText = `${--count}`;
        }
    }
});

function showDescrInfo(e) {
    let elem = getComputedStyle(e.currentTarget);
    let check = elem.transform;
    if (check !== 'none') {
        e.currentTarget.style.transform = '';
    } else {
        e.currentTarget.style.transform = 'rotate(180deg)';
    }
    property.classList.toggle('hidden');
}
