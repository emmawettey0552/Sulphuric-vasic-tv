const wrapper = document.querySelector('wrapper');
const LoginLink = document.querySelector('loginlink');
const RegisterLink = document.querySelector('registerlink');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.icon-close')

registerLink.addEventListener('click',()=> {
    wrapper.classlist.add('active')
})

loginLink.addEventListener('click',()=> {
    wrapper.classlist.remove('active')
})

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click',()=> {
    wrapper.addEventListener.remove('active-popup')
})