const shareButton = document.querySelector('#share')
const sharePopup = document.querySelector('.share-popup')

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('share-button-active')
  sharePopup.classList.toggle('opened')
})
