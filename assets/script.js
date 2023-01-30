/*============== SHOW SIDEBAR ================*/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===============SIDEBAR SHOW================= */
/*Validate if constant Exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

/*===============SIDEBAR HIDDEN================= */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*===============SKILLS TAB================= */

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)
            
            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
    })
})

/*===============SCROLL SECTION ACTIVE LINK================= */

//esto hace que el bullet de la barra de navegacion lateral vaya acorde con la seccion de la pagina donde se encuentre el usuario
//se va a ir corriendo sola generando un "active", en cada seccion a la que se vaya accediendo


//get all sections that have an id dwefined
const sections = document.querySelectorAll("section[id]");
//add en event listener listening for scroll

window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    //get current scroll position
    let scrollY = window.pageYOffset;
    //now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");
        /* - if our currrent scroll position enters the space where current secion on screen is, add .active class to corresponding
        navigation link, eslse remove it.
        - to know which link needs an active class, we use sectionID variable we are getting while looping through
        sections as an selector*/
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
/*===============SIDEBARSHOW=================*/