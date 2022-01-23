"use strict"

const userDataName = document.querySelector('.box-user__username');

const beerDataName = document.querySelector('.card-beer__name');
const beerDataBrand = document.querySelector('.card-beer__brand');
const beerDataStyle = document.querySelector('.card-beer__style');
const beerDataHop = document.querySelector('.card-beer__hop');
const beerDataMalts = document.querySelector('.card-beer__malts');
const beerDataAlcohol = document.querySelector('.card-beer__alcohol');
const beerDataIbu = document.querySelector('.card-beer__ibu');

const beerDataHistory = document.querySelectorAll('.user-history__border');
const beerImage = document.querySelector('.page-beer__img').firstElementChild;
const borderHistory = document.querySelector('.user-history');

const cleanHistoryToggle = document.querySelectorAll('.cleanhistory');
const cleanHistoryTog = document.querySelector('.cleanhistory');

let tempBeer = {};
let historyBeer = [];
let clone;

const url1 = 'https://random-data-api.com/api/users/random_user';
const url2 = 'https://random-data-api.com/api/beer/random_beer';

function changeUser() {
    fetch(url1)
        .then((resp) => resp.json())
        .then(users => {
            userDataName.innerHTML = `${users.username}`;
        })
        .catch(function (error) {
            alert(error);
        });
}
function clickSpin() {
    beerImage.classList.add('shaking');
    setTimeout(() => {
        fetch(url2)
            .then((resp) => resp.json())
            .then(beers => {
                for (let key in beers) {
                    switch (key) {
                        case 'name':
                        case 'brand':
                        case 'style':
                        case 'hop':
                        case 'malts':
                        case 'alcohol':
                        case 'ibu':
                            tempBeer[key] = beers[key];
                        default:
                            break;
                    }
                }
                beerDataName.innerHTML = `${tempBeer.name}`;
                beerDataBrand.innerHTML = `${tempBeer.brand}`;
                beerDataStyle.innerHTML = `${tempBeer.style}`;
                beerDataHop.innerHTML = `${tempBeer.hop}`;
                beerDataMalts.innerHTML = `${tempBeer.malts}`;
                beerDataAlcohol.innerHTML = `${tempBeer.alcohol}`;
                beerDataIbu.innerHTML = `${tempBeer.ibu}`;
                clone = Object.assign({}, tempBeer);

            })
            .catch(function (error) {
                alert(error);
            });
        beerImage.classList.remove('shaking');
        beerImage.classList.add('showingbeer');
        beerImage.setAttribute('src', '/img/beerspin-c.png');
    }, 2500);
    beerImage.setAttribute('src', '/img/barrel.png');
    beerImage.classList.remove('showingbeer');
}
function clickAccept() {
    if (clone === historyBeer[historyBeer.length - 1]) {
        alert('Уже выпито!');
    } else {
        historyBeer.push(clone);
        for (let inner of beerDataHistory) {
            inner.innerHTML = `
            <div class="user-history__row">
                <div class="beer__brand">${historyBeer[historyBeer.length - 1].brand}</div>
                <div class="beer__name">${historyBeer[historyBeer.length - 1].name}</div>
                <div class="beer__ibu">${historyBeer[historyBeer.length - 1].ibu}</div>
                <div class="beer__alcohol">${historyBeer[historyBeer.length - 1].alcohol}</div>
            </div>
            ${inner.innerHTML}
            `;
        };
    }
    if (historyBeer.length > 0) {
        borderHistory.classList.add('showinghistory');
        cleanHistoryTog.classList.add('showclean');
    } else {
        borderHistory.classList.remove('showinghistory');
        cleanHistoryTog.classList.remove('showclean');
    }
}

userChange.onclick = changeUser;
spin.onclick = clickSpin;
accept.onclick = clickAccept;

//delete historyBeer=======================================================================
for (let v of cleanHistoryToggle) {
    v.addEventListener("click", function (e) {
        if (historyBeer) {
            historyBeer = [];
            for (let inner of beerDataHistory) {
                inner.innerHTML = '';
            };
        }
    });
};

//for .showhistory=======================================================================
const mobileHistory = document.querySelector('.box-user__showhistory');
if (mobileHistory) {
    const mobileBodyHistory = document.querySelector('.page-user__showmobile');
    mobileHistory.addEventListener("click", function (e) {
        mobileBodyHistory.classList.toggle('active');
    });
}