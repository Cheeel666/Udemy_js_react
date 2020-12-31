const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const filmName = prompt('Один из последних просмотренных фильмов?', '');
const score = prompt('На сколько вы его оцениваете?', '');
const filmName1 = prompt('Один из последних просмотренных фильмов?', '');
const score1 = prompt('На сколько вы его оцениваете?', '');
personalMobieDB.movies[filmName] = score;
personalMobieDB.movies[filmName1] = score1;

console.log(personalMobieDB);