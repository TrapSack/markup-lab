import './assets/styles.scss'

const navbarTemplate = require('./assets/navbar/navbar.handlebars')
const appointmentSectionTemplate = require('./assets/appointment-section/appointment-section.handlebars')
const mobileNavbarTemplate = require('./assets/navbar/navbar-mobile.handlebars')
const clientSignificanceTemplate = require('./assets/client-significance/client-significance.handlebars')

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
        'search-modal-mobile': {},
    })

    putTemplateToDOM(
        appointmentSectionTemplate,
        'section',
        'appointment-section',
        {}
    )
    putTemplateToDOM(
        clientSignificanceTemplate,
        'section',
        'client-significance-section',
        {
            'benefitCardArray': [
                {
                    'backgroundURL':'img/environmental-benefit-logo.svg',
                    'headerTitle':'Environmental',
                    'benefits':[
                        '- The best products start with Figma',
                        '- Design with real data',
                        '- Lightning fast prototyping',
                        '- Fastest way to organize',
                        '- Work at the speed of thought.'
                    ],
                    'hrefURL':'#',
            }
            ]
        }
    )
    window.onscroll = function navBackgroundOnScroll() {
        const nav = document.querySelector('.navbar')
        if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
            nav.classList.add('nav-colored')
        } else {
            nav.classList.remove('nav-colored')
        }
    }

    function toggleModal() {
        document.getElementById('search-modal').classList.toggle('show')
    }
    function toggleModalMobile() {
        document.getElementById('search-modal-mobile').classList.toggle('show')
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
    document
        .getElementById('search-btn-mbl')
        .addEventListener('click', toggleModalMobile)
    document
        .getElementById('close-modal-btn-mobile')
        .addEventListener('click', toggleModalMobile)
})
