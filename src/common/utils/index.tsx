export const scrollToTarget = (targetId: string, fromTopPad = 0) => {
  const targetElement = document.getElementById(targetId)
  // console.log('targetElement', targetElement)
  if (targetElement) {
    const fromTop = targetElement.getBoundingClientRect().y + window.scrollY
    // console.log('fromTop', fromTop)
    window.scrollTo({
      top: fromTop - fromTopPad,
      behavior: 'smooth',
    })
  }
}

const cloudinary_root = 'https://res.cloudinary.com/monads/image/upload/'
export const transformCloudinaryImgUrl = (url: string, customs: string) => {
  if (url.includes('upload/v')) {
    return url.replace(cloudinary_root, cloudinary_root + customs)
  } else if (url.includes('upload/f_auto')) {
    return url.replace(cloudinary_root + 'f_auto/', cloudinary_root + customs)
  }
}

export const EMAIL_REGEX = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
