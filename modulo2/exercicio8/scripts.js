const listAnimals = document.querySelectorAll('.js-tabmenu li')
const sectionAnimals = document.querySelectorAll('.js-tabcontent section')
if(sectionAnimals.length && listAnimals.length) {
    sectionAnimals[0].classList.add('ativo')

    listAnimals.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index)
        })
    })
    function activeTab(index) {
        sectionAnimals.forEach((section) => {
            section.classList.remove('ativo')
        })
        sectionAnimals[index].classList.add('ativo')
    }
}