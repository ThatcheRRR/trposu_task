window.onload = () => {
    hide();
    // flight.style.display = 'none';
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

const dateField = document.querySelector('#departureDate');

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

const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + 'T' + hours + ':' + minutes;
const loginButton = document.querySelector('.loginBut');
const authBlock = document.querySelector('.auth__block');
const cabinet = document.querySelector('.current-user');
const container = document.querySelector('.container');
const flight = document.querySelector('.flight');
const findTickets = document.querySelector('.button-block');
const enterCode = 13;

dateField.min = currentDate;
dateField.value = currentDate;

let userName = '';
let currentID = 0;

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
        return user = new User(userName, 20, 4);
    }
}

authBlock.addEventListener('keydown', loggedIn);
loginButton.addEventListener('click', () => {
    userName = document.querySelector('#name').value.toLowerCase();
    authBlock.style.opacity = '0';
    setTimeout(hide, 300);
    cabinet.textContent = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
    return user = new User(userName, 20, 4);
});

findTickets.addEventListener('click', () => {
    flight.style.display = 'flex';
});