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

//slider
if (window.matchMedia("(max-width: 768px)").matches) {

    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        const logos = document.getElementsByClassName('slider_logo');
        for (let i = 0; i < logos.length; i++){
            logos[i].classList.add('mobile_hidden');
        }
        slideIndex++;
        if (slideIndex > logos.length) {slideIndex = 1};
        logos[slideIndex-1].classList.remove("mobile_hidden"); 
        logos[slideIndex-1].classList.remove("tablet_hidden"); 

        setTimeout(showSlides, 2000); // Change image every 2 seconds  
    }
    
} else if(window.matchMedia("(max-width: 1024px)").matches) {
    let tabletHiddenLogos = document.querySelectorAll('#tablet_hidden');
    for (let i = 0; i < tabletHiddenLogos.length; i++){
        tabletHiddenLogos[i].classList.add('tablet_hidden');
    }
}

//anti-spam
const fbtns = document.querySelectorAll('.fbtns')
const spam = document.querySelectorAll('.spam')
const form = document.getElementsByTagName('form')
const inputs = document.querySelectorAll('.page__form-input')
for (let i = 0; i < fbtns.length; i++) {
    fbtns[i].addEventListener('click', (e) => {
    for (let y = 0; y < inputs.length; y++) {    
        if (inputs[y].validity.valueMissing) {
          inputs[y].style.borderColor = '#ff0000';
          inputs[y].value = 'The field is required'
          next = false
          return;
        } else if (inputs[0].validity.patternMismatch) {      
            inputs[0].placeholder = 'The name is incorrect'
            next = false
            return;      
        } else if (inputs[1].validity.typeMismatch) {      
            inputs[1].placeholder = 'The email is incorrect'
            next = false
            return;      
        } else if (inputs[2].validity.typeMismatch) {      
            inputs[2].placeholder = 'The phone is incorrect'
            next = false
            return;      
        } else if (inputs[3].validity.patternMismatch) {      
            inputs[3].placeholder = 'The name is incorrect'
            next = false
            return;      
        } if (next) {
                e.preventDefault()
                console.log(form[i])
                spam[i].value = "no-spam"
                form[i].submit()
            }
        }
    })
}

//phone digits correcting
const ph = document.getElementById('phone')
      ph.addEventListener("keydown", (e) => {
        if(e.key === "Backspace" || e.key === "Delete"){
          return;
        }
        if(e.target.value.length === 3) {
          ph.value = ph.value + "-";
        }
        if(e.target.value.length === 7) {
          ph.value = ph.value + "-";
        }
      })

//utms
window.onload = function() {                  
    function getParameterByName(name) {
      let name1 = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      let results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }                  
    let source = getParameterByName('utm_source');
    let medium = getParameterByName('utm_medium');
    let campaign = getParameterByName('utm_campaign');
    let term = getParameterByName('utm_term');
    let content = getParameterByName('utm_content');

    let utm1 = document.getElementById("utm_source").value = source;
    let utm2 = document.getElementById("utm_medium").value = medium;
    let utm3 = document.getElementById("utm_campaign").value = campaign;
    let utm4 = document.getElementById("utm_term").value = term;
    let utm5 = document.getElementById("utm_content").value = content;
}