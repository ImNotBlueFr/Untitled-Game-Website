var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'idlebreakout',
    title: 'Idle Breakout',
    url: 'https://assets.3kh0.net/idle-breakout/index.html/',
    image: 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  {
    id: 'eggycar',
    title: 'Eggy Car',
    url: 'https://assets.3kh0.net/eggycar/index.html',
    image: 'https://assets.3kh0.net/eggycar/eggy-car.png'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/Rocket-League/index.html',
    image: 'https://www.softgozar.com/Image/Softwares/Thumbnail/Rocket_League_Anniversary_SoftGozar.com.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'jacksmith',
    title: 'Jacksmith',
    url: 'https://art-class.github.io/assets/jacksmith',
    image: 'https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://738501629-461082748261058427.preview.editmysite.com/uploads/b/139890129-817510652323129407/files/drbo.xml'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'A web version of osu!',
    url: 'https://web-osu.github.io/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png',
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://coolmathgames.com/0-run-3/play',
    image: 'https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U',
    description: 'Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run1',
    title: 'Run 1',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/run/index.html',
    image: 'https://trefoilkingdom.com/uploads/games/21624/Run-1.jpg',
    description: 'Run 1 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run2',
    title: 'Run 2',
    url: 'https://cdn.primarygames.com/ruffle_noTouchSupport/run2/',
    image: 'https://i.pinimg.com/280x280_RS/b6/2f/e8/b62fe8c6a9ceb9fd7e5257ad25f6897d.jpg',
    description: 'Run 2 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://assets.3kh0.net/sm64/index.html',
    image: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'minecraft',
    title: 'Minecraft Classic',
    url: 'https://assets.3kh0.net/minecraft-classic/index.html',
    image: 'https://cdn.iconscout.com/icon/free/png-256/minecraft-2752120-2284937.png'
  },
  {
    id: 'smashkarts',
    title: 'Smash Karts',
    url: 'https://assets.3kh0.net/smashkarts/index.html',
    image: 'https://geometry-dash.co/upload/imgs/smash-karts-logo.png'
  },
  {
    id: 'tunnelrush',
    title: 'Tunnel Rush',
    url: 'https://assets.3kh0.net/tunnel-rush/index.html',
    image: 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg',
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://assets.3kh0.net/escapingtheprison/index.html',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://mathadventure1.github.io/slope/slope/index.html',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://games.crazygames.com/en_US/1v1-lol/index.html?skipPrerollFirstSessionExp25=&v=1.329',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://assets.3kh0.net/subway-surfers/index.html',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'slither',
    title: 'slither.io',
    url: 'https://slither.io',
    image: 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://assets.3kh0.net/Rocket-League/index.html',
    image: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://slopegame.io/curve-.embed',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://assets.3kh0.net/bitlife/index.html',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://now.gg/play/roblox-corporation/5349/roblox',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'funnyshooter2',
    title: 'Funny Shooter 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/1/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df.jpg',
    description: 'This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/b0687b5099af0b76aedf37743f2d03cbeef26467/2/5cf218d2-f550-420c-8e55-7029efc5b4db/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/5cf218d2-f550-420c-8e55-7029efc5b4db.jpg'
  },
  {
    id: 'sandboxels',
    title: 'SandBoxels',
    url: 'https://sandboxels.r74n.com',
    image: 'https://sandboxels.r74n.com/icons/icon.png'
  },
    {
    id: 'sandboxelmods',
    title: 'SandBoxel Mods',
    url: 'https://sandboxels.r74n.com/mod-list',
    image: 'https://sandboxels.r74n.com/icons/icon.png'
  },
  {
  id: 'houseofhazards',
  title: 'House Of Hazards',
  url: 'https://kdata1.com/2020/10/House_of_Hazards/',
  image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/0609b0ba2889859b21cf47ca205818fe.png'
  },

  {
  id: 'nealfun',
  title: 'Neal.Fun',
  url: 'https://neal.fun',
  image: 'https://img.utdstc.com/icon/481/deb/481debbf466dfb5a780726cfa7a4283b07ce37ee4841e87d9df04be953efba35:200'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
