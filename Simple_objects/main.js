
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
    
    if (filmName != Null && score != null && filmName != "" && score != ""
                            && filmName.length < 55 && score.length < 50){
        personalMobieDB.movies[filmName] = score;
        console.log("Ok");
    } else {
        console.log("Error");
        i--;
    }
}

if (personalMobieDB.count < 10){
    console.log("Мало фильмов");
}else if (personalMobieDB.count > 30) {
    console.log("Много фильмов");
} else {
    console.log("Ok");
}
