export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    const secaoModal = document.querySelector('[data-modal="container"]')
    
    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)

    function toggleModal(event) {
        event.preventDefault()
        secaoModal.classList.toggle('ativo')
    }

    secaoModal.addEventListener('click', fecharForaModal)
    
    function fecharForaModal(event) {
        if(event.target === this) {
            toggleModal(event)
        }
    }
}