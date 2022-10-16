ScrollReveal({ reset: true });
ScrollReveal().reveal(".reveal");

const headerScroll = () => {
    const header = document.getElementById('header')
    const logo = document.getElementById('logo'),
        headerHeight = header.offsetHeight
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('header-white')
            logo.classList.add('logo-active')
        } else {
            header.classList.remove('header-white')
            logo.classList.remove('logo-active')
        }
    })
}

headerScroll()



/* const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('activo'))
    this.classList.add('activo')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
 */