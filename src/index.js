import './style.css';
import background from "./assets/background.jpg";
import loadAbout from "./about.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"

window.addEventListener('DOMContentLoaded', () => {
    loadTemplate()
})

const loadTemplate = () => {
    const content = document.querySelector('#content');
    const bgContainer = document.createElement("div")
    const tabContainer = document.createElement("div")
    
    tabContainer.classList.add("tabcontainer")
    bgContainer.classList.add("background")
    
    content.appendChild(bgContainer)
    content.appendChild(tabContainer)
    
    createBackground(bgContainer);
    loadAbout();
}

const createBackground = (container) => {
    const restro_name = document.createElement("h2")
    const img = new Image()
    const navbar = document.createElement('nav')

    restro_name.classList.add("restro-name")
    restro_name.textContent = "Cloud Nine Dim Sum"
    img.src = background;
    img.classList.add("bg-img")
    navbar.classList.add("navbar")

    container.appendChild(restro_name);
    container.appendChild(img)
    
    const aboutBtn = document.createElement('button')
    aboutBtn.textContent = "About"
    const menuBtn = document.createElement('button')
    menuBtn.textContent = "Menu"
    const contactBtn = document.createElement('button')
    contactBtn.textContent = "Contact"
    
    aboutBtn.addEventListener('click', loadAbout);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
    
    navbar.appendChild(aboutBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);
    container.appendChild(navbar)

}

    