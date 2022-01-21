import './assets/styles.scss'

const navbarTemplate = require('./assets/navbar/navbar.handlebars')
const appointmentSectionTemplate = require('./assets/appointment-section/appointment-section.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.createElement('nav')
    navbar.innerHTML = navbarTemplate({
        'navbar-links': {},
        'search-modal': {},
    })
    navbar.classList.add('navbar')
    document.body.appendChild(navbar)
    const appointmentSection = document.createElement('section')
    appointmentSection.innerHTML = appointmentSectionTemplate({})
    appointmentSection.classList.add('appointment-section')
    document.body.appendChild(appointmentSection)

    function showModal() {
        document.getElementById('search-modal').classList.toggle('show')
    }

    document.getElementById('search-btn').addEventListener('click', showModal)
    document
        .getElementById('search-submit')
        .addEventListener('click', showModal)
    document
        .getElementById('close-modal-btn')
        .addEventListener('click', showModal)
})
