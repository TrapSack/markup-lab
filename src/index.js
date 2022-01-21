import './assets/styles.scss'

const navbarTemplate = require('./assets/navbar/navbar.handlebars')
const appointmentSectionTemplate = require('./assets/appointment-section/appointment-section.handlebars')
const mobileNavbarTemplate = require('./assets/navbar/navbar-mobile.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.createElement('nav')
    navbar.innerHTML = navbarTemplate({
        'navbar-links': {},
        'search-modal': {},
    })
    navbar.classList.add('navbar')
    document.body.appendChild(navbar)

    const mobileNavbar = document.createElement('nav')
    mobileNavbar.innerHTML = mobileNavbarTemplate({
        'navbar-links': {},
    })
    mobileNavbar.classList.add('navbar-mobile')
    document.body.appendChild(mobileNavbar)

    const appointmentSection = document.createElement('section')
    appointmentSection.innerHTML = appointmentSectionTemplate({})
    appointmentSection.classList.add('appointment-section')
    document.body.appendChild(appointmentSection)

    function toggleModal() {
        document.getElementById('search-modal').classList.toggle('show')
    }
    function toggleMobileMenu() {
        document.getElementById('link-container').classList.toggle('show')
    }

    document.getElementById('search-btn').addEventListener('click', toggleModal)
    document
        .getElementById('search-submit')
        .addEventListener('click', toggleModal)
    document
        .getElementById('close-modal-btn')
        .addEventListener('click', toggleModal)

    document
        .getElementById('menu-btn')
        .addEventListener('click', toggleMobileMenu)
})
