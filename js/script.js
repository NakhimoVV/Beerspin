"use strict"

const beerDataName = document.querySelector('.card-beer__name');
const beerDataBrand = document.querySelector('.card-beer__brand');
const beerDataStyle = document.querySelector('.card-beer__style');
const beerDataHop = document.querySelector('.card-beer__hop');
const beerDataMalts = document.querySelector('.card-beer__malts');
const beerDataAlcohol = document.querySelector('.card-beer__alcohol');
const beerDataIbu = document.querySelector('.card-beer__ibu');

const url = 'https://random-data-api.com/api/beer/random_beer';

fetch(url)
    .then((resp) => resp.json())
    .then(beers => {
        beerDataName.innerHTML = `${beers.name}`;
        beerDataBrand.innerHTML = `${beers.brand}`;
        beerDataStyle.innerHTML = `${beers.style}`;
        beerDataHop.innerHTML = `${beers.hop}`;
        beerDataMalts.innerHTML = `${beers.malts}`;
        beerDataAlcohol.innerHTML = `${beers.alcohol}`;
        beerDataIbu.innerHTML = `${beers.ibu}`;
    })
    .catch(function (error) {
        alert(error);
    });