const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal2.active')
  modals.forEach(modal2 => {
    closeModal(modal2)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal(modal2)
  })
})

function openModal(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay.classList.remove('active')
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = document.querySelector(button.dataset.modalTarget)
    openModal(modal4)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal4.active')
  modals.forEach(modal4 => {
    closeModal(modal4)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = button.closest('.modal4')
    closeModal(modal4)
  })
})

function openModal(modal3) {
  if (modal4 == null) return
  modal4.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal4) {
  if (moda4 == null) return
  modal4.classList.remove('active')
  overlay.classList.remove('active')
}





openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = document.querySelector(button.dataset.modalTarget)
    openModal(modal3)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal3.active')
  modals.forEach(modal3 => {
    closeModal(modal3)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = button.closest('.modal3')
    closeModal(modal3)
  })
})

function openModal(modal3) {
  if (modal3 == null) return
  modal3.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal3) {
  if (modal3 == null) return
  modal3.classList.remove('active')
  overlay.classList.remove('active')
}
