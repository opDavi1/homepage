const SPLASH_ENABLED = true; //set to false to disable random splash text.
const splash = document.getElementById('splash');
const quotes = [
    'Thanks for stopping by',
    'SINGLE PLAYER TARKOV 3.0 FINALLY CAME OUT LETS GO',
    'Now let\'s see opDavi1 in shorts',
    'thigh highs are so comfy',
    ':3c',
    '>:3',
    'Joe mom',
    '/b/ sucks today',
    'God bless our troops, God bless America, AND GENTLEMEN... START... YOUR... ENGINES!!!',
    'Red pilled since 1987',
    'Looksmaxxing pilled since 2024, never mogging, shooting ohio on site',
    'Currently jelqing',
    'Aye wassup dude.',
    'you smell nice Owu',
    'x3 *nuzzles* *pounces on you* UwU you\'re so warm ',
    'you will get all the robux',
    'It\'s 106 miles to Chicago, we\'ve got a full tank of gas, half a pack of cigarettes, it\'s dark out, and we\'re wearing sunglasses. Hit it.',
    'I\'ll have 4 fried chickens and a coke',
    'We\'re on a mission from God.',
    'Dies ist die Bluntsmoken-Höhle',
    'アストルフォーくんは大好きです',
    'White people love clapping when the plane lands',
    'Cwcville is an awesome place to visit',
    'What a mood recovery... Kind of a Goku-get-\'em attitude. :)',
    'SANS UNDERTALE',
    'Terraria 5.0 when?',
    'TF3 When?',
    'Portal 3 when?',
    'Shut up idiot Shinji',
    'ザーワルド！！！',
    'ドドドドドドドド',
    'こんにちは',
	'お兄ちゃん、おはよう',
    'Oi, Josuke',
    'Caesar!!!!!!!!!!!!',
    'uwO what\'s this',
    'Don\'t give a furry a pizza',
    'Dog backwards is God',
    '"I am God" - Kanye West',
    'Cherry bomb the greatest fucking album since the days of sound',
    'I hate being bi-polar it\'s awesome',
    'I\'m gonna beat Citadel real quick',
    'Tower of Deep Darkness is the greatest tower since the days of roblox',
    'No memes in #general',
    'Keep it in #politics please',
    'Click to add subtitle',
    'Joseph Milroy is a cool dude',
    'I\'m the biggest hypocrite of 2015',
    'The sun beamin',
    'R.I.P Radioshack',
    'Money trees are the perfect place for shade, and that\'s just how I feel',
    'XXXTentacion should have just not been at the store that day',
    'I don\'t mind I know they\'ll never respect the good kid, m.A.A.d city.',
    'Find out next time on Total... Drama.. Island!!!',
    'Brett, it\'s me, David Bowie from the movie Labyrinth',
    'Brett, it\'s me, David Bowie from the Ziggy Stardust tour',
    'The anonymous hacker known as 4chan',
    'DD form 214',
    'I Cannot Fucking Wait Til Morrissey Dies',
    'WHAT KIND OF RAPPIN\' IS THIS?',
    '.JPEG > .PNG',
    'while(!(succeed = try()));',
    'mm so hungry need to find my wife and head to PF Chang\'s',
    'Memory leak? Why don\'t the users just download more RAM?',
    'Weird Fishes',
    'Machine Girl - うずまき',
    'Yeah but do you know advanced F2L?',
    'Just got a PLL skip',
    'What the hell is a "bustle in your hedgerow" anyways?',
    'Hardcore Henry is my 2nd favorite movie',
    'Steam summer sale is a wallet vacuum',
    'Part 2 is underrated and better than part 3 tbh',
    'osu! gave me covid :(',
    'I never could\'ve thought that feelings could get thrown in the air',
    'That\'s why they call me opDavi, I\'m back, I\'m back',
    'Written in 99% assembly!',
    'Written in FORTRAN',
    'Written in Holy C',
    'Runs on Temple OS!',
    'R.I.P Terry Davis',
    '1.7.10 - 1.12 is peak minecraft',
    'My headphones plugged out!',
    'I never said that I was sad, but I remember it all',
    'I Miss The Rage',
    'When you see "seeding" just click stop',
    'p2p ft ftw ',
    'Cake at steak!',
    'Hey guys, what\'s da update?',
    "You know, I know this steak doesn't exist. I know that when I put it in my mouth, the Matrix is telling my brain that it is juicy and delicious. After nine years, you know what I realize? Ignorance is bliss.",
    "Throughout human history, we have been dependent on machines to survive. Fate, it seems, is not without a sense of irony.",
    "If there's anything more important than my ego around, I want it caught and shot now.",
    "Lamp oil, rope, bombs, you want it? It's yours, my friend, as long as you have enough rupees. Sorry Link, I can't give credit. Come back when you're a little... hmm richer!",
    "She blinded me with science!",
    "He buggin' he don't know that I'm thuggin",
    "I'm a freak just lmk",
    "I'm way past flexing",
    "We're so sorry, Uncle Abert",
    "Fuck a beat, I was tryna beat a case",
    "You're the only power that can-",
    "Harder, Better, Faster, Stronger",
    "She a superstar girl, ah, from the valley",
    "Did you realize, that you were a champion in their eyes?",
    "I can't stand to see you cry",
    "Yo Pi'erre, you wanna come out here?",
    "If young metro don't trust you I'm gon' shoot you",
    "WHO WOULD WIN? Shy soft femboy or THE NORTHERN PIKE",
    "It's all in your mental",
    "For real, for real, for real this time",
    "Vrei sǎ pleci Dar nu mǎ, nu mǎ iei",
    "Time: The Donut of the Heart",
    "I don't think it's ironic anymore guys",
    "I LOVE FEMBOYS SO MUCH HOLY SHIT",
	"This has been willed where what is willed must be, and is not yours to question. Say no more.",
	"Abondon all hope, Ye who enter in!",
	"Jump in darling, the water is sublime",
	"I can see my house from here!",
	"Life's better with gold on your balls",
	"Time is an illusion, Lunchtime doubly so.",
	"Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
	"Ford... you're turning into a penguin. Stop it.",
	"So long, and thanks for all the fish",
	"This must be thursday ... I could never get the hang od Thursdays",
	"NO ANON!!! DON'T GO ON /TTTT/ YOU'LL NEVER COME OUT ALIVE!!!"
]

function setSplash() {
    splash.innerHTML = quotes[quotes.length * Math.random() | 0];
}

if(SPLASH_ENABLED) {
	setSplash();
} else {
    splash.remove();
}



