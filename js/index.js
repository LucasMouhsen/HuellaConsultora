window.addEventListener('load', () => {
    ScrollReveal({ reset: true }),
        ScrollReveal().reveal(".reveal"),

        /* Cambia color de header al scrollear */

        headerScroll = () => {
            const header = document.getElementById('header')
            const logo = document.getElementById('logo')
            const aHeader = document.getElementsByClassName('aHeader'),
                headerHeight = header.offsetHeight
            window.addEventListener('scroll', () => {
                if (window.scrollY > headerHeight) {
                    header.classList.add('header-white')
                    logo.classList.add('logo-active')
                    for (let i = 0; i < aHeader.length; i++) {
                        aHeader[i].classList.add('aHeader-active')
                    }
                } else {
                    header.classList.remove('header-white')
                    logo.classList.remove('logo-active')
                }
            })
        },

        headerScroll(),

        /* Mostrar menu al tocar burger-icon */
        showMenu = (headerToggle, navbarId) => {
            const toggleBtn = document.getElementById(headerToggle),
                nav = document.getElementById(navbarId)
            const iToggle = document.getElementById('i-toggle')
            toggleBtn.addEventListener('click', () => {
                nav.classList.toggle('show-menu')
                nav.classList.add('reveal')
                iToggle.classList.toggle('i-active')
                
            })

        }
    showMenu('header-toggle', 'header')
})
