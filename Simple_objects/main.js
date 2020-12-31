
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

for (let i = 0; i < numberOfFilms; i++){
    let filmName = prompt('Один из последних просмотренных фильмов?', '');
    let score = prompt('На сколько вы его оцениваете?', '');
    personalMobieDB.movies[filmName] = score;
}

console.log(personalMobieDB);