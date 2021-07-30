const accordionList = document.querySelectorAll('.js-accordion dt')
accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')

function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})



// Desafio do exercicio 8 -> TabMENU
function initTabNav() {
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
}
initTabNav()