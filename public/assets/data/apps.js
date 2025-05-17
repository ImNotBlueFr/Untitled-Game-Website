var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
    {
      'id': 'xboxcloudgaming',
      'title': 'Xbox Cloud Gaming',
      'url': 'https://www.xbox.com/en-us/play',
      'image': 'https://cdn-1.webcatalog.io/catalog/xbox-cloud-gaming/xbox-cloud-gaming-icon-filled-256.png?v=1714776527567'
    },
     {
      'id': 'facebook',
      'title': 'FaceBook',
      'url': 'https:///www.facebook.com',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLcBrDHgOj0B_qrNTygXlcjOPlRfGOBqZrw&s'
    },
    {
      'id': 'instagram',
      'title': 'Instagram',
      'url': 'https://www.instagram.com',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
    },
     {
      'id': 'chatgpt',
      'title': 'ChatGPT',
      'url': 'https://chatgpt.com',
      'image': 'https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg'
    },
    {
      'id': 'snapchat',
      'title': 'Snapchat',
      'url': 'https://www.snapchat.com/?utm_source=GoogleSEM&utm_medium=PAIDUA&utm_campaign=Brand_SnapforWeb_US&utm_term=Web_Desktop&utm_content=RSA&gad_source=1&gclid=Cj0KCQjwlMfABhCWARIsADGXdy9qFlCnkSoVoNoYPTYaMAcc3CmjUYEK8M1cG4jst2AsoPA7H3YoHdkaAucrEALw_wcB&original_referrer=www.google.com',
      'image': 'https://cdn-icons-png.freepik.com/256/15707/15707923.png?semt=ais_hybrid'
    },
    {
      'id': 'gauthai',
      'title': 'Gauth AI',
      'url': 'https://www.gauthmath.com/?utm_source=google&utm_medium=cpa_home&utm_campaign=22100242799&utm_term=math%20ai&utm_content=728344988825&gad_source=1&gclid=Cj0KCQjw8cHABhC-ARIsAJnY12ydKoJVtk6g3P6t2pHez_E9dad4JYQYtVMjmrK_DLPLMsRz2pJDmrMaApmBEALw_wcB',
      'image': 'https://play-lh.googleusercontent.com/1CnI8ztueH5zyg2PLN1qEcPaL_j56Y48gEr2OKcD31ce799Qw91_U0QneDLmwYlCo3w'
    },
    {
      'id': 'characterai',
      'title': 'Character AI',
      'url': 'character.ai',
      'image': 'https://media.licdn.com/dms/image/v2/C560BAQFnYb3w5mQMKQ/company-logo_200_200/company-logo_200_200/0/1679554051094/character_ai_logo?e=2147483647&v=beta&t=CrD2N3TToQOyeAI6JSoHIqeA1NlgVA22iIWMTmQcdWc'
    },
    {
      'id': 'rocketleague',
      'title': 'Rocket League Website',
      'url': 'https://www.rocketleague.com/en',
      'image': 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
    },
    {
      'id': 'netlfix',
      'title': 'Netflix',
      'url': 'https://www.netflix.com',
      'image': 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'
    },
     {
      'id': 'monkeytype',
      'title': 'MonkeyType',
      'url': 'https://www.monkeytype.com',
      'image': 'https://images.sftcdn.net/images/t_app-icon-m/p/8d9031a7-6ae1-43e3-9353-3dbc7ee10bc9/4060554368/monkeytype-enhancer-logo'
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
