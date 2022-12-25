const futurama = [
  {
    fullName: "Phillip J. Fry",
    nickName: "Fry",
    specie: "human",
    gender: "male",
    born: 1974,
    isAlive: true,
    weight: 70,
    img: "https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png",
    quote: "El espacio parece extenderse sin límites. Hasta que llegas al final y aparece un mono lanzándote barriles.",
    occupation: "Delivery Boy",
  },
  {
    fullName: "Turanga Leela",
    nickName: "Leela",
    specie: "mutant/human cyclop",
    gender: "female",
    born: 2975,
    isAlive: true,
    weight: 58,
    img: "https://upload.wikimedia.org/wikipedia/en/d/d4/Turanga_Leela.png",
    quote: "Bueno, perdimos contra todos nuestros oponentes. Incluso ese equipo que resultó ser nosotros en el espejo",
    occupation: "Captain of the Planet Express Ship",
  },
  {
    fullName: "Hubert J. Farnsworth",
    nickName: "Professor",
    specie: "human",
    gender: "male",
    born: undefined,
    isAlive: true,
    weight: 62,
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/FuturamaProfessorFarnsworth.png",
    quote: "¡Odio a estos nerds! ¡Solo porque soy más estúpido que ellos, piensan que son más listos que yo!",
    occupation: "CEO/Owner of Planet Express, Lecturer at Mars University",
  },
  {
    fullName: "Bender Doblador Rodríguez",
    nickName: "Bender",
    specie: "robot",
    gender: "male",
    born: "not born, created not defined",
    isAlive: false,
    weight: 200,
    img: "https://i.pinimg.com/originals/5d/b2/63/5db263b183c85dbec594dfb5d66a8260.png",
    quote: "¡Voy a construir mi propio parque temático! Con Blackjack! ¡Y prostitutas!",
    occupation: "Assistant Manager of Sales & Chef at Planet Express",
  },
  {
    fullName: "John A. Zoidberg",
    nickName: "Zoidberg",
    specie: "decapodian",
    gender: "male",
    born: undefined,
    isAlive: true,
    weight: 105,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png",
    quote: "¡Ah, no hay nada como la primera taza de jugo de basura en la mañana!",
    occupation: "Staff doctor at the Planet Express delivery company",
  },
  {
    fullName: "Amy Wong",
    nickName: "Amy",
    specie: "human martian",
    gender: "female",
    born: undefined,
    isAlive: true,
    weight: 54,
    img: "https://static.simpsonswiki.com/images/thumb/a/a1/Amy_Wong.png/150px-Amy_Wong.png",
    quote: "¡Guau! ¡Carrito deportivo, Leela! Tan moderno y sexy. No como tú en absoluto.",
    occupation: "Physicist intern to Professor Hubert J. Farnsworth",
  },
];

//* creamos el título dinámico

const title$$ = document.createElement("h1");
title$$.setAttribute("class","title")
title$$.textContent = "The Futurama Planet Express Staff"
document.body.appendChild(title$$);

//* mostramos el álbum en el HTML

const album$$ = document.querySelector(".album");
document.body.appendChild(album$$);

//* creamos y insertamos las cartas con un FOR

for (let i = 0; i < futurama.length ; i++) {
  const card$$ = document.createElement("div");
  card$$.setAttribute("class", "card");
  card$$.setAttribute("id","card"+i)

  const nickName$$ = document.createElement("h1");
  const imgDiv$$ = document.createElement("div");
    imgDiv$$.setAttribute("class", "image");
  const img$$ = document.createElement("img");
  const fullName$$ = document.createElement("h2");
  const gender$$ = document.createElement("p");
  const specie$$ = document.createElement("p");
  const occupation$$ = document.createElement("p");

  nickName$$.textContent = futurama[i].nickName;
  img$$.src = futurama[i].img;
  fullName$$.textContent = futurama[i].fullName;
  gender$$.textContent = futurama[i].gender;
  specie$$.textContent = futurama[i].specie;
  occupation$$.textContent = futurama[i].occupation;

  album$$.appendChild(card$$);
  card$$.appendChild(nickName$$);
  card$$.appendChild(imgDiv$$);
  imgDiv$$.appendChild(img$$);
  card$$.appendChild(fullName$$);
  card$$.appendChild(gender$$);
  card$$.appendChild(specie$$);
  card$$.appendChild(occupation$$);


  //* creamos el BUBBLETEXT

  const chatBubble$$ = document.createElement("div");
  const chatText$$ = document.createElement("p");

  //* Añado la classe BUBBLE y HIDE al BUBBLETEXT
  chatBubble$$.setAttribute("class","bubbleBox hide");
  chatText$$.setAttribute("class","bubbleText");

  chatText$$.textContent = futurama[i].quote;
  
  //* insertamos BUBBLE y BUBBLETEXT a cada carta
  card$$.appendChild(chatBubble$$);
  chatBubble$$.appendChild(chatText$$);

  //* función que al clicar la carta enseñe BUBBLE y la amague en 5 segundos
  function showHide(event) {
    const selectedBubble$$ = document.querySelectorAll(".card");
    
    const test = event.composedPath()[2]; 
    const test2= test.getElementsByClassName("bubbleBox hide")[0];

    if (test2.className == "bubbleBox hide"){
      test2.setAttribute("class","bubbleBox");
      setTimeout(() => {
        test2.setAttribute("class","bubbleBox hide");
      }, 7000);      
    } 
  };

  //* función que al clicar la carta enseñe o amague la BUBBLE
  //   function showHide(event) {
  //     const selectedBubble$$ = document.querySelectorAll(".card");
      
  //     const test = event.composedPath()[2]; 
  //     const test2= test.getElementsByClassName("bubbleBox")[0];

  //     if (test2.className == "bubbleBox"){
  //       test2.setAttribute("class","bubbleBox hide");
  //     } else {
  //       test2.setAttribute("class","bubbleBox");
  //     }

      
  //   };

  card$$.addEventListener("click", showHide);

};

const cardsSelect$$ = document.querySelectorAll(".card");
// console.log(cardsSelect$$);

