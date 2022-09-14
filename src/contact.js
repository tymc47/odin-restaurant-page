import mapImage from "./assets/map.png"

const loadContact = () => {
    const tabContainer = document.querySelector('.tabcontainer')
    tabContainer.innerHTML = ""

    const contactContainer = document.createElement('div')
    contactContainer.classList.add("contactcontainer")

    const heading = document.createElement('h2')
    heading.classList.add("heading")
    heading.textContent = "Contact"

    const tabcontent = document.createElement("div")
    tabcontent.classList.add("tabcontent")
    const telephone = document.createElement('h3')
    telephone.textContent = "+852 2394-3943"
    telephone.classList.add("telephone")

    const address = document.createElement('h3')
    address.textContent = "1 Finance Street, Central, Hong Kong"
    address.classList.add("address") 

    const map = new Image();
    map.src = mapImage;
    map.classList.add("map")

    tabcontent.appendChild(telephone)
    tabcontent.appendChild(address)
    tabcontent.appendChild(map)



    contactContainer.appendChild(heading)
    contactContainer.appendChild(tabcontent)

    tabContainer.appendChild(contactContainer)
}

export default loadContact;