export const products = [
  {
    id: 1,
    imgs: [
      "https://i.postimg.cc/Y0LzBDrH/highlight.gif",
      "https://i.postimg.cc/L8ZvgM1D/Captura-de-tela-2024-05-10-133739.png",
      "https://i.postimg.cc/05df7frg/Captura-de-tela-2024-05-11-225626.png",
      "https://i.postimg.cc/Y0LzBDrH/highlight.gif",
    ],
    title: "Unity Asset tool",
    desc: [
      "I aim to make this tool available on the Unity Store very soon, and it will likely help other game developers create open worlds more quickly.",
      "What the tool can do right now: Create vertices for terrain; Generate terrain shapes procedurally; Spawn tree prefabs around the terrain procedurally.",
      "What I want to implement: Change the border of the terrain, make rounded; Add water around the island (I need to conduct some research to determine whether I should use another asset pack for water shaders or if I'll need to create them myself); Implement pathfinding for rivers inside the terrain; Check Optimizing; Create intuitive GUI layout to handle inside the editor.",
      "I'm still working on my asset tool for unity, striving to enhance performance by reducing the number of materials and draw calls. I'm not entirely certain if it's satisfactory yet, but for now, it's acceptable.",
    ],
    link: "",
  },
  {
    id: 2,
    imgs: [
      "https://i.postimg.cc/HLwhM0YJ/Banner-Merlin.png",
      "https://i.postimg.cc/FsCH6M1j/Captura-de-tela-2024-05-01-010028.png",
      "https://i.postimg.cc/cHL7sqMd/Captura-de-tela-2024-04-17-123659.png",
      "https://i.postimg.cc/x1qcT0Bx/Captura-de-tela-2024-05-03-114954.png",
      "https://i.postimg.cc/jdcs7Gyp/Merlin.png",
    ],
    title: "(Multiplayer) Merlin: Arcane Warfare",
    desc: [
      "I've made a new project to implement multiplayer functionality using Unity for my small FPS game called Merlin: Arcane Warfare.",
      " I was really surprised at how quickly I set up using Netcode, lobby, and relay packages. I've synchronized the animations between the client and server sides, as well as the movement of the player, the projectiles you can shoot, and the environment.",
      "Since I create the server and the way to connect locally, I start to search at unity docs how to handle to use a P2P way to connect at any computer.",
      "In the finals I got a code to join in the host session and the players can share to others join the room, it's amazing multiplayer setup!",
    ],
    link: "https://tempestdeveloper.itch.io/merlin",
  },
  {
    id: 3,
    imgs: [
      "https://i.postimg.cc/bJ1Hdqwr/Port-cookhell.png",
      "https://i.postimg.cc/C5SCj6Ff/print-Cook-Hell.png",
      "https://i.postimg.cc/1XhmTpkP/CookHell.png",
      "https://i.postimg.cc/N0Cxvx73/print2-Over.png",
      "https://i.postimg.cc/0y0BtsVf/Cook-Hell-Itch-Page.gif",
    ],
    title: "CookHell",
    desc: [
      "I started this project with the idea of creating a 3D game in Unity, aiming to develop a full demo similar to the commercial cooking game Overcooked.",
      "After six months of learning how to handle objects, instantiate them, and transfer them between game objects (like catching ingredients, placing them on tables or plates, and changing the state of the food), I began to encounter problems with my code.",
      "When I realized I couldn't continue with my existing code, I started researching design patterns and discovered events and delegates in C#. This significantly improved my code. By using scriptable objects to manage data, I was able to finish the project."
    ],

    link: "https://tempestdeveloper.itch.io/cook-hell",
  },
  {
    id: 4,
    imgs: [
      "https://i.postimg.cc/QdLDt9nV/buble4.png",
      "https://i.postimg.cc/hjk2Fj4V/Bubble-Guy.gif",
      "https://i.postimg.cc/DfGGj69W/Bubble-Guy-bubblestages.gif",
      "https://i.postimg.cc/vmK2GXHR/Bubble-Guy-bubblejump.gif",
      "https://i.postimg.cc/9MxdckQC/Bubble-Guy-bubbledash.gif",
    ],
    title: "The Legend of Bubble Guy",
    desc: [
      "This game is completely inspired by Celeste developed using Unity. The Legend of Bubble Guy was made for 99Jam in 10 days. With the theme of \"Take a Deep Breath,\" we started to think about how the character could gain new mechanics around this concept.",
      "In this game, the player is able to inflate their bubble to stage 1 and utilize the \"Jump\" bubble to navigate by jumping from one bubble to another.",
      "Progress further by inflating your bubble from stage 1 to stage 2, unlocking the ability to use the \"Dash\" bubble, which allows you to enter other bubbles.",
    ],
    link: "https://tempestdeveloper.itch.io/bubbleguy",
  },
  {
    id: 5,
    imgs: [
      "https://i.postimg.cc/6q97FbCJ/zombie-Cover-Banner.png",
      "https://i.postimg.cc/9f9NbKjx/screen1-2.png",
      "https://i.postimg.cc/y88DFC0H/Screen2.png",
      "https://i.postimg.cc/L6ndfyhW/Screen3.png",
    ],
    title: "Zombie Apocalypse.",
    desc: [
      "Welcome to world of Zombie Apocalypse, an immersive 3D survival game developed using Unity. This game delivers a experience as you fight hordes of relentless zombies to stay alive!",
      "Here I utilize the classic keyboard controls (WASD) for smooth movement, allowing you to navigate your way through treacherous environments with ease.",
      "To Aim wield your weapon with precision using the mouse, allowing for accurate targeting and shoots against zombies, possibily all monsters have a chance to spawn a med kit to hell your life.",
      "At the certain point will respawn a boss, and the difficulty is increased."
    ],
    link: "https://tempestdeveloper.itch.io/apocalipse-zombie-v120",
  },
  {
    id: 6,
    imgs: [
      "https://i.postimg.cc/KYGnCsBy/prototype2.png",
      "https://i.postimg.cc/Hk3CrX1d/Unity-Components1.gif",
      "https://i.postimg.cc/gkd53jDJ/Unity-Components2.gif",
      "https://i.postimg.cc/SsgXVJ9h/Unity-Components3.gif",
      "https://i.postimg.cc/YCxmjnS0/Unity-Components4.gif",
    ],
    title: "Unity Components. 8 Mini Games inside of one Project.",
    desc: [
      "This prototype provide a experience of 8 mini games each scene with some components of unity.",
      "You will find all these components respectively: Video player, post processing, prefabs, probuilder, render texture, shader graph, trail renderer and Visual script."      
    ],
    link: "https://tempestdeveloper.itch.io/unity-components",
  },
  {
    id: 7,
    imgs: [
      "https://i.postimg.cc/prt7vzdt/first-Cover-Img.png",
      "https://i.postimg.cc/L61pwCR1/s1.jpg",
      "https://i.postimg.cc/VNGsmJhr/s2.jpg",
      "https://i.postimg.cc/jjFTBGWy/s3.jpg",
      "https://i.postimg.cc/NfpzNR2H/s4.jpg",
    ],
    title: "First one, platform 2D game.",
    desc: [
      "This platformer game was developed in Unity to master handling obstacles, collectibles, and scene transitions.", 
      "The project aimed to enhance skills in game design and programming, providing a comprehensive learning experience in creating engaging and dynamic gameplay elements.",
      "Through this development process, key techniques in collision detection, object interaction, and level design were explored and implemented."
    ],
    link: "https://tempestdeveloper.itch.io/first-one",
  },
];

export const awards = [
  {
    id: 1,
    title: "Unity 2D part 1: Creating a 2D game",
    img: "https://i.postimg.cc/2ytmz70y/cert1.png",
    desc: "Throughout this course, I acquired the skills to craft my very own 2D game using Unity.",
    link: "https://cursos.alura.com.br/certificate/5587efc6-6e9e-4be3-9f64-70ebfcbf80c2",
  },
  {
    id: 2,
    title: "Unity part 1: create of a survival zombie game for Web",
    img: "https://i.postimg.cc/44cTtV26/cert1.png",
    desc: "Alura courses offer an immersive learning experience in which you can harness the power of Unity and C# to master the art of creating your own survival game.",
    link: "https://cursos.alura.com.br/certificate/47e0eb66-4d2b-44d3-9ea1-ac1307861297",
  },
  {
    id: 3,
    title: "Unity part 2: Illumination, interface and good practices",
    img: "https://i.postimg.cc/kX13Ps2d/cert1.png",
    desc: "In this course, I focused on improving visual elements, refining user interfaces, and mastering essential game development practices within Unity.",
    link: "https://cursos.alura.com.br/certificate/54b66172-8ee9-4b58-a2c0-0ef4e4afbfbf",
  },
  {
    id: 4,
    title: "Unity part 3: Creating a boss and polishing the game",
    img: "https://i.postimg.cc/nr1sh562/cert1.png",
    desc: "This course provide to me a good knowledge, learning how to create challenging boss battles and fine-tune my game for a polished finish.",
    link: "https://cursos.alura.com.br/certificate/0a40a400-cec4-4e99-a049-003fcfc2d368",
  },
  {
    id: 5,
    title: "Javascript ES6 essentials",
    img: "https://i.postimg.cc/nzfhnvJg/award.jpg",
    desc: "JavaScript ES6 essential is a free online course for beginners learn JavaScript basics for web.",
    link: "https://www.dio.me/certificate/9A6EAF56",
  },
  {
    id: 6,
    title: "Introduction to Git and GitHub",
    img: "https://i.postimg.cc/Nj0SyMGZ/git.jpg",
    desc: "Introduction to Git and GitHub is a free online course to learn Git and GitHub code version control.",
    link: "https://www.dio.me/certificate/97E7F74F",
  },
  {
    id: 7,
    title: "Introduction to make websites with HTML5 and CSS3",
    img: "https://i.postimg.cc/Px6dwcsM/html5-css3.jpg",
    desc: "Introduction to make websites with HTML5 and CSS3 is a free online course to learn how to make websites.",
    link: "https://www.dio.me/certificate/9FD15C79",
  },
  {
    id: 8,
    title: "JavaScript Certified",
    img: "https://i.postimg.cc/t4015xPK/Certificado-Java-Script.jpg",
    desc: "JavaScript Certified is a free online course to learn how to use javascript for web.",
    link: "https://programacaoweb.com.br",
  },
  {
    id: 9,
    title: "PHP Certified",
    img: "https://i.postimg.cc/BQPLHg85/Certificado-PHP.jpg",
    desc: "PHP basic course is a free online course to learn PHP basics for web.",
    link: "https://programacaoweb.com.br",
  },
  {
    id: 10,
    title: "HTML Certified",
    img: "https://i.postimg.cc/CxjR6xsz/Certificado-HTML.jpg",
    desc: "HTML basics course is a free online course to learn make structure pages for web.",
    link: "https://programacaoweb.com.br",
  },
  {
    id: 11,
    title: "CSS Certified",
    img: "https://i.postimg.cc/vTk4C1K6/Certificado-CSS.jpg",
    desc: "CSS is a free online course to learn change style in pages for web.",
    link: "https://programacaoweb.com.br",
  },
  {
    id: 12,
    title: "Bootstrap 5 Certified",
    img: "https://i.postimg.cc/gjnwMygW/Certificado-Bootstrap-5.jpg",
    desc: "Bootstrap 5 is a free online course, to learn how to use bootstrap, css framework.",
    link: "https://programacaoweb.com.br",
  },
  {
    id: 13,
    title: "Jquery Certified",
    img: "https://i.postimg.cc/9XnwDSfF/Certificado-j-Query.jpg",
    desc: "Jquery certified is a free online course to learn Jquery library of javascript.",
    link: "https://programacaoweb.com.br",
  },
];
