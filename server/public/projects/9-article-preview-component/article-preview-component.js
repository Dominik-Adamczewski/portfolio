const shareIcon = document.querySelector('.avatar-container .share-icon');
const socialContainerShareIcon = document.querySelector('.social-icons-container .share-icon');
const shareIcons = [shareIcon, socialContainerShareIcon];
const avatarContainer = document.querySelector('.avatar-container');
const socialIconsContainer = document.querySelector('.social-icons-container');
let currentWindowWidth = window.innerWidth;

function toggleSocialIconsMobile() {
  avatarContainer.classList.toggle('mobile-not-active');
  socialIconsContainer.classList.toggle('mobile-not-active');
};

function toggleSocialIconsDesktop() {
  socialIconsContainer.classList.toggle('tooltip');
  socialIconsContainer.classList.toggle('mobile-not-active');
  socialContainerShareIcon.classList.toggle('mobile-not-active');
}

function addDesktopListeners() {
  shareIcon.addEventListener('click', toggleSocialIconsDesktop);
}

function removeDesktopListeners() {
  shareIcon.removeEventListener('click', toggleSocialIconsDesktop);
}

function addMobileListeners() {
  shareIcons.forEach(icon => {
    icon.addEventListener('click', toggleSocialIconsMobile);
  });
}

function removeMobileListeners() {
  shareIcons.forEach(icon => {
    icon.removeEventListener('click', toggleSocialIconsMobile);
  });
}

function handleResize() {
  const currentWindowWidth = window.innerWidth;

  if (currentWindowWidth > 1025) {
    removeMobileListeners();
    addDesktopListeners();
  } else {
    removeDesktopListeners();
    addMobileListeners();
  }
}

handleResize();

window.addEventListener('resize', handleResize);