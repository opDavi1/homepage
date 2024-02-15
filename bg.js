const bg_list = 
    [
        'dark-souls.jpg',
        'highway_nighttime.png',
        'Nerv.png',
        'nighttime-anime-girl',
        'rei.png',
        'rip-brian.jpg',
        'saturn.png',
        'smoking-anime-girl.jpg',
        'space-cowboy.jpg',
        'spring-path.jpg',
        'sunset-train-station.jpg'
    ];
let index = Math.floor(Math.random() * bg_list.length);
document.body.style.backgroundImage = `url(./bg/${bg_list[index]})`;
