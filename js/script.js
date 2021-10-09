'use strict'
let year;
let age;
let city;
let sport;
let country;
let champion;


year = prompt('Введите Ваш год рождения');
if (year === null) {
    age = 'Жаль, что Вы не захотели ввести свой возвраст :('
} else {
    age = `Ваш возвраст ${2021 - year}`;
}

city = prompt('В каком городе Вы живете?');
if (city === null) {
    country = 'Жаль, что Вы не захотели назвать свой город :('
} else {

    switch (city) {
        case 'Киев':
            country = 'Ты живешь в столице Украины';
            break;
        case 'Москва':
            country = 'Ты живешь в столице России';
            break;
        case 'Минск':
            country = 'Ты живешь в столице Беларуси';
            break;
    }
}

sport = prompt('Какой Ваш любимый вид спорта?');
if (sport === null) {
    champion = 'Жаль, что Вы не захотели ввести Ваш любимый вид спорта :('
} else {

    switch (sport) {
        case 'Бокс':
            champion = 'Круто! Хочешь стать Александр Усик?';
            break;
        case 'Баскетбол':
            champion = 'Круто! Хочешь стать Майкл Джордан?';
            break;
        case 'Футбол':
            champion = 'Круто! Хочешь стать Дэвид Бекхэм ?';
            break;
    }
}

alert(`${age}, ${country}, ${champion}`);