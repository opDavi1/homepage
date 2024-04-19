const RANDOM_BG_ENABLED = true; //set to false if you do not want a random bg. DEFAULT_BG is the index of the bg to display when false.
const DEFAULT_BG = 10; //index starts at 0
const BG_DIR = '/home/opdavi1/Desktop/Wallpapers' //relative or absolute path to the folder with the bg images in it; NO '/' AT THE END OF THE PATH
const bg_list = 
    [
        'highway_nighttime.png',
        'rei.png',
        'saturn.png',
        'smoking-anime-girl.jpg',
        'spring-path.jpg',
        'sunset-train-station.jpg',
        'girls-last-tour.jpg',
        'ca-sunset.jpeg',
        'rooftops.jpg',
        'ebic.jpg',
        'berry-bush.jpg',
        'concrete-building.jpg',
        'building.jpg',
        '49.jpg',
        'winter-bridge.jpg',
        'hearst-castle-type-beat.jpg',
        'imperator.jpg',
        'cherry-blossoms.jpg',
        'lake.jpg',
        'spaceship.jpg',
        'epcot-type-beat.jpg'
    ];

//////// DO NOT EDIT BELOW LINE (unless you want to, of course) ///////////
///////////////////////////////////////////////////////////////////////////

function setBg(i) {
    document.body.style.backgroundImage = `url(${BG_DIR}/${bg_list[i]})`;
}

if(RANDOM_BG_ENABLED) {
    let index = Math.floor(Math.random() * bg_list.length);
    setBg(index);
} else {
    setBg(DEFAULT_BG);
}

