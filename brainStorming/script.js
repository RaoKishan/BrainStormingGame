let cardsArray = [
  {
    name: "CSS",
    img: "./img/css.png",
  },
  {
    name: "HTML",
    img: "./img/html.png",
  },
  {
    name: "jQuery",
    img: "./img/jquery.png",
  },
  {
    name: "JS",
    img: "./img/js.png",
  },
  {
    name: "Node",
    img: "./img/node.png",
  },
  {
    name: "Python",
    img: "./img/python.png",
  },
];

const gameCard = cardsArray.concat(cardsArray);
// console.log(gameCard)

const parentDiv = document.querySelector("#card-section");


const myNumbers = (array)=>{

    for(let i = array.length-1; i>0; i--){
        let j = Math.floor(Math.random()*(i+1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp;
    }

    return array

}


let clickCount = 0
let firstCard = ""
let secCard = ""

const card_matches = ()=>{
    let card_selected = document.querySelectorAll(".card_selected")

    card_selected.forEach((curElem)=>{
        curElem.classList.add("card_match")
    })
}


const resetGame=()=>{
    firstCard = ""
    secCard = ""
    clickCount = 0

    let card_selected = document.querySelectorAll(".card_selected")

    card_selected.forEach((curElem) => {
        curElem.classList.remove("card_selected")
    })
}

const suffledChild = myNumbers(gameCard)

parentDiv.addEventListener("click", ()=>{
    let curCard = event.target

    clickCount++
    if(clickCount<3){
        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name
            curCard.parentNode.classList.add("card_selected")
        }else{
            secCard = curCard.parentNode.dataset.name
            curCard.parentNode.classList.add("card_selected")
        }

        if(firstCard !== "" && secCard !== ""){
            if(firstCard === secCard){
                // curCard.classList.add("card_match")

                setTimeout(()=>{
                    card_matches()
                    resetGame()

                }, 1000)

            }else{
                resetGame()
                setTimeout(()=>{
                    resetGame()

                }, 1000)
            }
        }
    }

    if(curCard.id === "card-section"){
        return false
    }


})


for (let i = 0; i < suffledChild.length; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("card");

     childDiv.dataset.name = suffledChild[i].name;
//   childDiv.style.backgroundImage = `url(${suffledChild[i].img})`;

    const front_div = document.createElement("div")
    front_div.classList.add("front-card")

    const back_div = document.createElement("div")
    back_div.classList.add("back-card")

      back_div.style.backgroundImage = `url(${suffledChild[i].img})`;


    parentDiv.appendChild(childDiv);


    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}
