import './assets/styles.scss'

// const teamSectionTemplate = require('./assets/team-section/team-section.handlebars')
const navbarTemplate = require('./assets/navbar/navbar.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    // Team Section component start
    // const teamSection = document.createElement('section')
    // teamSection.innerHTML = teamSectionTemplate({
    //     title: 'Meet Our Team',
    //     description:
    //         'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
    //     team: [
    //         { name: 'Avie Beaton', position: 'CO Founder' },
    //         { name: 'Ben Jonson', position: 'Consultant' },
    //         { name: 'Ashley Fletcher', position: 'CEO' },
    //     ],
    // })
    // teamSection.classList.add('team-section')
    // // Team Section component end

    // document.body.appendChild(teamSection)

    const navbar = document.createElement('nav')

    navbar.innerHTML = navbarTemplate({
        'navbar-links': {
            searchIconPath: './assets/img/search-icon.svg',
            cardIconPath: './assets/img/card-icon.svg',
        },
    })
    navbar.classList.add('navbar')
    document.body.appendChild(navbar)
})
