import './styles.scss'
// eslint-disable-next-line no-unused-vars
import videojs from 'video.js'

const environmentalBenefitLogo = require('./components/img/client-significance/environmental-benefit-logo.svg')
const saveMoneyLogo = require('./components/img/client-significance/save-money.svg')
const travelAndAviationLogo = require('./components/img/client-significance/travel.svg')
const reviewerPhoto1 = require('./components/img/review-section/reviewer1.webp')
const workerPhoto1 = require('./components/img/our-team/worker-photo1.webp')
const workerPhoto2 = require('./components/img/our-team/worker-photo2.webp')
const workerPhoto3 = require('./components/img/our-team/worker-photo3.webp')

const headerTemplate = require('./components/navbar/header.handlebars')
const appointmentSectionTemplate = require('./components/appointment-section/appointment-section.handlebars')
const clientSignificanceSectionTemplate = require('./components/client-significance/client-significance.handlebars')
const aboutUsSectionTemplate = require('./components/about-us/about-us-section.handlebars')
const reviewsSectionTemplate = require('./components/reviews/reviews-section.handlebars')
const ourTeamSectionTemplate = require('./components/our-team/our-team-section.handlebars')
const contactUsTemplate = require('./components/contact-us/contact-us-section.handlebars')
const footerSectionTemplate = require('./components/footer/footer-section.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    function putTemplateInDOM(template, tag, className, options = {}) {
        const temp = document.createElement(tag)
        temp.innerHTML = template(options)
        temp.classList.add(className)
        document.body.appendChild(temp)
    }

    putTemplateInDOM(headerTemplate, 'header', 'header-section', {
        'navbar-links': {},
        'search-modal': {},
    })

    putTemplateInDOM(
        appointmentSectionTemplate,
        'section',
        'appointment-section',
        {
            'appointment-booking-form': {},
        }
    )
    putTemplateInDOM(
        clientSignificanceSectionTemplate,
        'section',
        'client-significance-section',
        {
            benefitCardArray: [
                {
                    backgroundURL: environmentalBenefitLogo,
                    headerTitle: 'Environmental',
                    benefits: [
                        'The best products start with Figma',
                        'Design with real data',
                        'Lightning fast prototyping',
                        'Fastest way to organize',
                        'Work at the speed of thought.',
                    ],
                    hrefURL: '#',
                },
                {
                    backgroundURL: saveMoneyLogo,
                    headerTitle: 'Save Money And Time',
                    benefits: [
                        'The best products start with Figma',
                        'Design with real data',
                        'Lightning fast prototyping',
                        'Fastest way to organize',
                        'Work at the speed of thought.',
                    ],
                    hrefURL: '#',
                },
                {
                    backgroundURL: travelAndAviationLogo,
                    headerTitle: 'Save Money And Time',
                    benefits: [
                        'The best products start with Figma',
                        'Design with real data',
                        'Lightning fast prototyping',
                        'Fastest way to organize',
                        'Work at the speed of thought.',
                    ],
                    hrefURL: '#',
                },
            ],
        }
    )

    putTemplateInDOM(aboutUsSectionTemplate, 'section', 'about-us-section', {
        'about-us-video': {},
    })

    putTemplateInDOM(reviewsSectionTemplate, 'section', 'reviews-section', {
        reviews: [
            {
                reviewText:
                    'Slate helps you see how many  more days you need to work to reach your financial goal',
                reviewer: {
                    profileURL: reviewerPhoto1,
                    name: 'Regina Miles',
                    profession: 'Designer',
                },
            },
            {
                reviewText:
                    'Slate helps you see how many  more days you need to work to reach your financial goal',
                reviewer: {
                    profileURL: reviewerPhoto1,
                    name: 'Regina Miles',
                    profession: 'Designer',
                },
            },
            {
                reviewText:
                    'Slate helps you see how many  more days you need to work to reach your financial goal',
                reviewer: {
                    profileURL: reviewerPhoto1,
                    name: 'Regina Miles',
                    profession: 'Designer',
                },
            },
        ],
    })

    putTemplateInDOM(ourTeamSectionTemplate, 'section', 'our-team-section', {
        workers: [
            {
                photoURL: workerPhoto1,
                name: 'Avie Beaton',
                position: 'CO Founder',
            },
            {
                photoURL: workerPhoto2,
                name: 'Ben Jonson',
                position: 'Consultant',
            },
            {
                photoURL: workerPhoto3,
                name: 'Ashley Fletcher',
                position: 'CEO',
            },
        ],
    })

    putTemplateInDOM(contactUsTemplate, 'section', 'contact-us-section', {
        'contact-form': '',
    })

    putTemplateInDOM(footerSectionTemplate, 'footer', 'footer-section', {
        linkColArray: [
            {
                colName: 'Company Info',
                linkElements: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
            },
            {
                colName: 'Legal',
                linkElements: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
            },
            {
                colName: 'Features',
                linkElements: [
                    'Business Marketing',
                    'User Analytic',
                    'Live Chat',
                    'Unlimited Support',
                ],
            },
            {
                colName: 'Resources',
                linkElements: [
                    'IOS & Android',
                    'Watch a Demo',
                    'Customers',
                    'API',
                ],
            },
        ],
    })

    window.onscroll = function navBackgroundOnScroll() {
        const nav = document.querySelector('.header-section')
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            nav.classList.add('header-colored')
            nav.classList.remove('header-transparent')
        } else {
            nav.classList.add('header-transparent')
            nav.classList.remove('header-colored')
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
