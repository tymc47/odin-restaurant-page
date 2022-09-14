const loadAbout = () => {
    const tabContainer = document.querySelector('.tabcontainer')
    tabContainer.innerHTML = ""

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add("aboutcontainer")

    const heading = document.createElement('h2')
    heading.classList.add("heading")
    heading.textContent = "About"

    const tabcontent = document.createElement("div")
    tabcontent.classList.add("tabcontent")

    const intro = document.createElement('p')
    intro.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat sem sem, nec pretium magna rhoncus vel. Etiam varius ullamcorper sagittis. Duis et lacus eget arcu imperdiet malesuada. Aliquam et auctor ligula, sed ornare quam. Nam eget eros luctus, consectetur nisi nec, porttitor eros. Duis consequat dictum maximus. Sed semper rutrum lorem. Nulla mauris dui, ullamcorper in enim eget, hendrerit volutpat elit. Morbi cursus ipsum non lacus dapibus sagittis. Proin placerat ligula a nunc finibus, in dapibus sapien pretium. Morbi ac leo auctor, commodo lacus vel, lobortis dolor."

    const hours = document.createElement('div')
    hours.classList.add("hours")

    const hourHeading = document.createElement("h3")
    hourHeading.textContent = "Opening Hours"
    const hour1 = document.createElement("p")
    const hour2 = document.createElement("p")
    hour1.textContent = "Mon - Sat: 12:00 ~ 22:00"
    hour2.textContent = "Sun: 09:00 ~ 21:00"

    hours.appendChild(hourHeading)
    hours.appendChild(hour1)
    hours.appendChild(hour2)

    tabcontent.appendChild(intro)
    tabcontent.appendChild(hours)
    aboutContainer.appendChild(heading)
    aboutContainer.appendChild(tabcontent)

    tabContainer.appendChild(aboutContainer)
}

export default loadAbout;