import './assets/styles.scss'

const navbarTemplate = require('./assets/navbar/navbar.handlebars')
const appointmentSectionTemplate = require('./assets/appointment-section/appointment-section.handlebars')
const mobileNavbarTemplate = require('./assets/navbar/navbar-mobile.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    function putTemplateToDOM(template, tag, className, options = {}) {
        const temp = document.createElement(tag)
        temp.innerHTML = template(options)
        temp.classList.add(className)
        document.body.appendChild(temp)
    }

    putTemplateToDOM(navbarTemplate, 'nav', 'navbar', {
        'navbar-links': {},
        'search-modal': {},
    })

    putTemplateToDOM(mobileNavbarTemplate, 'nav', 'navbar-mobile', {
        'navbar-links': {},
    })

    putTemplateToDOM(
        appointmentSectionTemplate,
        'section',
        'appointment-section',
        {}
    )

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
