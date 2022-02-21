//burger-menu
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.header_nav'),
          navItems = document.querySelectorAll('.header_nav_item')
          burgerBtn = document.querySelector('.burger_btn')

          burgerBtn.addEventListener('click', () => {
              burgerBtn.classList.toggle('burger_btn_active')
              nav.classList.toggle('active')
          });

          navItems.forEach(item => {
              item.addEventListener('click', () => {
                burgerBtn.classList.toggle('burger_btn_active')
                nav.classList.toggle('active')
              })
          })
})
