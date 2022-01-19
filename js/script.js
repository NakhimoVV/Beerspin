"use strict"

const userDataName = document.querySelector('.box-user__username');
// const userDataAvatar = document.querySelector('.box-user__useravatar');

const beerDataName = document.querySelector('.card-beer__name');
const beerDataBrand = document.querySelector('.card-beer__brand');
const beerDataStyle = document.querySelector('.card-beer__style');
const beerDataHop = document.querySelector('.card-beer__hop');
const beerDataMalts = document.querySelector('.card-beer__malts');
const beerDataAlcohol = document.querySelector('.card-beer__alcohol');
const beerDataIbu = document.querySelector('.card-beer__ibu');

let tempBeer = {};
let historyBeer = [];

const url1 = 'https://random-data-api.com/api/users/random_user';
const url2 = 'https://random-data-api.com/api/beer/random_beer';

function changeUser() {
    fetch(url1)
        .then((resp) => resp.json())
        .then(users => {
            userDataName.innerHTML = `${users.username}`;
            // userDataAvatar.innerHTML = `${users.avatar}`;
        })
        .catch(function (error) {
            alert(error);
        });
}
function clickSpin() {
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
                setTimeout
                beerDataName.innerHTML = `${tempBeer.name}`;
                beerDataBrand.innerHTML = `${tempBeer.brand}`;
                beerDataStyle.innerHTML = `${tempBeer.style}`;
                beerDataHop.innerHTML = `${tempBeer.hop}`;
                beerDataMalts.innerHTML = `${tempBeer.malts}`;
                beerDataAlcohol.innerHTML = `${tempBeer.alcohol}`;
                beerDataIbu.innerHTML = `${tempBeer.ibu}`;
            })
            .catch(function (error) {
                alert(error);
            });
    }, 1000);
}
function clickAccept() {
    let clone = Object.assign({}, tempBeer);
    //нужна проверка на равенство такого же объекта (2 x Accept)
    // if (clone == historyBeer[historyBeer.length - 1]) break;
    historyBeer.push(clone);
    console.log(historyBeer);
    console.log(clone);
}

userChange.onclick = changeUser;
spin.onclick = clickSpin;
accept.onclick = clickAccept;

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};

// for (let i = 0; i <= 4; i++) {
//     obj[keys[i]] = values[i];
// }

// console.log(obj);