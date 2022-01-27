import './styles.scss'
// eslint-disable-next-line no-unused-vars
import videojs from 'video.js'

const environmentalBenefitLogo = require('./img/client-significance/environmental-benefit-logo.svg')
const saveMoneyLogo = require('./img/client-significance/save-money.svg')
const travelAndAviationLogo = require('./img/client-significance/travel.svg')
const reviewerPhoto1 = require('./img/review-section/reviewer1.webp')
const workerPhoto1 = require('./img/our-team/worker-photo1.webp')
const workerPhoto2 = require('./img/our-team/worker-photo2.webp')
const workerPhoto3 = require('./img/our-team/worker-photo3.webp')

const headerTemplate = require('./components/navbar/header.handlebars')
const appointmentSectionTemplate = require('./components/appointment-section/appointment-section.handlebars')
const clientSignificanceSectionTemplate = require('./components/client-significance/client-significance.handlebars')
const aboutUsSectionTemplate = require('./components/about-us/about-us-section.handlebars')
const reviewsSectionTemplate = require('./components/reviews/reviews-section.handlebars')
const ourTeamSectionTemplate = require('./components/our-team/our-team-section.handlebars')
const contactUsTemplate = require('./components/contact-us/contact-us-section.handlebars')
const footerSectionTemplate = require('./components/footer/footer.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    function putTemplateInDOM(template, tag, className, options = {}) {
        const temp = document.createElement(tag)
        temp.innerHTML = template(options)
        temp.classList.add(className)
        document.body.appendChild(temp)
    }

    putTemplateInDOM(headerTemplate, 'header', 'header', {})

    putTemplateInDOM(appointmentSectionTemplate, 'section', 'appointment', {
        'appointment-booking-form': {},
    })
    putTemplateInDOM(
        clientSignificanceSectionTemplate,
        'section',
        'client-significance',
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

    putTemplateInDOM(aboutUsSectionTemplate, 'section', 'about-us', {
        'about-us-video': {},
    })

    putTemplateInDOM(reviewsSectionTemplate, 'section', 'reviews', {
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

    putTemplateInDOM(ourTeamSectionTemplate, 'section', 'our-team', {
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

    putTemplateInDOM(contactUsTemplate, 'section', 'contact-us', {
        'contact-form': '',
    })

    putTemplateInDOM(footerSectionTemplate, 'footer', 'footer', {
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
        const nav = document.querySelector('.header')
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            nav.classList.add('header_colored')
            nav.classList.remove('header_transparent')
        } else {
            nav.classList.add('header_transparent')
            nav.classList.remove('header_colored')
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
