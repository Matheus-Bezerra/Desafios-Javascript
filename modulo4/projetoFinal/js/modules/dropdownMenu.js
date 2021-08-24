export default function initDropdownMenu() {
    const dropdownMenu = document.querySelectorAll('[data-dropdown]')
    console.log(dropdownMenu)
    
    dropdownMenu.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })
    
    function handleClick(event) {
        event.preventDefault()
        this.classList.toggle('active')
        outsideClick(this, () => {
            this.classList.remove('active')
        })
    }
    function outsideClick(element, callback) {
        const hmtl = document.documentElement
        const outside = 'data-outside'
    
    
        if(!element.hasAttribute(outside)) {
            hmtl.addEventListener('click', handleOutsideClcik)
            element.setAttribute(outside, '')
        }
        function handleOutsideClcik(event) {
            if(!element.contains(event.target)) {
                element.removeAttribute(outside)
    
                hmtl.removeEventListener('click', handleOutsideClcik)
                callback()
            }
        }
    }
}

