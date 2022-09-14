import dimsum0 from "./assets/dimsum0.jpeg"
import dimsum1 from "./assets/dimsum1.jpeg"
import dimsum2 from "./assets/dimsum2.jpeg"
import dimsum3 from "./assets/dimsum3.jpeg"
import dimsum4 from "./assets/dimsum4.jpeg"
import dimsum5 from "./assets/dimsum5.jpeg"
import dimsum6 from "./assets/dimsum6.jpeg"
import dimsum7 from "./assets/dimsum7.jpeg"

const dimsumName = ["Rice Cake", "Egg Yolk Bun","Fish Dumplings","Spring Rolls","Chicken Paws","Pork Buns","Red Rice Puddings","Beef Ball"]

const dimsumImage = new Array(8);
dimsumImage[0] = dimsum0;
dimsumImage[1] = dimsum1;
dimsumImage[2] = dimsum2;
dimsumImage[3] = dimsum3;
dimsumImage[4] = dimsum4;
dimsumImage[5] = dimsum5;
dimsumImage[6] = dimsum6;
dimsumImage[7] = dimsum7;

const loadMenu = () => {
    const tabContainer = document.querySelector('.tabcontainer')
    tabContainer.innerHTML = ""

    const menuContainer = document.createElement('div')
    menuContainer.classList.add("menucontainer")

    const heading = document.createElement('h2')
    heading.classList.add("heading")
    heading.textContent = "Menu"

    const tabcontent = document.createElement("div")
    tabcontent.classList.add("tabcontent")

    const foodcontainer = document.createElement('div')
    foodcontainer.classList.add("foodcontainer")
    
    for (let i = 0; i < 8; i++){
        const card = document.createElement('div')
        const title = document.createElement('h3')
        const dimsum = new Image()

        dimsum.src = dimsumImage[i]
        dimsum.classList.add("dimsumImage")
        card.classList.add("dimsumcard")
        title.classList.add("dimsumName")
        title.textContent = dimsumName[i]
        card.appendChild(dimsum)
        card.appendChild(title)

        foodcontainer.appendChild(card)    
    }

    tabcontent.appendChild(foodcontainer)
    menuContainer.appendChild(heading)
    menuContainer.appendChild(tabcontent)

    tabContainer.appendChild(menuContainer)
}

export default loadMenu;