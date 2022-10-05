
const headerScroll = () => {
    const header = document.getElementById('header'),
        headerHeight = header.offsetHeight
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('header-white')
        } else {
            header.classList.remove('header-white')
        }
    })
}

headerScroll()