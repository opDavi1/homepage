const RANDOM_BG_ENABLED = true;
const DEFAULT_BG = 10;
const BG_DIR = './bg' //relative or absolute path to the folder with the bg images in it NO '/' AT THE END OF THE PATH

/////////////////////////////////////////////

const bg_list = 
    [
        'highway_nighttime.png',
        'Nerv.png',
        'nighttime-anime-girl.jpg',
        'rei.png',
        'rip-brian.jpg',
        'saturn.png',
        'smoking-anime-girl.jpg',
        'space-cowboy.jpg',
        'spring-path.jpg',
        'sunset-train-station.jpg',
        'girls-last-tour.jpg',
        'femboys.png'
    ];

function setBg(i) {
    document.body.style.backgroundImage = `url(${BG_DIR}/${bg_list[i]})`;
}

if(RANDOM_BG_ENABLED) {
    let index = Math.floor(Math.random() * bg_list.length);
    setBg(index);
} else {
    setBg(DEFAULT_BG);
}

