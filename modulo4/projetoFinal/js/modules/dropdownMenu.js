export default function initDropdownMenu() {
    const listaDrop = document.querySelector('[data-dropdown]')
    listaDrop.addEventListener('click', HTMLHeadingElement)
    listaDrop.addEventListener('touchstart', HTMLHeadingElement)

    function HTMLHeadingElement(event) {
        event.preventDefault()
        this.classList.toggle('active')
    }
}