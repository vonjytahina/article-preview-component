const share = document.querySelector('.details-right .share')
const share_mobile = document.querySelector('.details-right-mobile .share')
const share_button = document.querySelector('.details-right')
const share_mobile_button = document.querySelector('.details-right-mobile')

share_button.onclick = () => {
  if(!share.classList.contains('show')) {
    share.classList.add('show')
  } else {
    share.classList.remove('show')
  }
}

share_mobile_button.onclick = () => {
  if(!share_mobile.classList.contains('show-mobile')) {
    share_mobile.classList.add('show-mobile')
  } else {
    share_mobile.classList.remove('show-mobile')
  }
}