function scrollPage (){
    const menuButtons = document.querySelectorAll('.menu-link');
    for(let i=0; i<menuButtons.length; i++) {
        menuButtons[i].addEventListener('click', (e)=>{
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substr(1);
            const scrollTarget = document.getElementById(sectionId);
            scrollTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            console.log(scrollTarget);
        })
        
    }
}

// scrollPage ();
// $('.menu-item a').on('click', function() {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 570,   // по умолчанию «400» 
//         easing: "linear" // по умолчанию «swing» 
//     });

//     return false;
// });

// $('.arrow a').on('click', function() {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 570,   // по умолчанию «400» 
//         easing: "swing" // по умолчанию «swing» 
//     });

//     return false;
// });

// открытие меню

function toggleMenu () {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        console.log(menuItem);
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger-active');
            menu.classList.remove('menu-active');
        })
    })
}

toggleMenu();


// modal

$('[data-modal=order]').on('click', function(e){
    e.preventDefault();
    $('.overlay, #order').fadeIn()
});
$('[data-modal=request]').on('click', function(){
    $('.overlay, #request').fadeIn()
});
$('#top-request').on('click', function(){
    $('.overlay, #order').fadeIn()
});

$('.modal-close').on('click', function(){
    $('.overlay, #order').fadeOut();
    $('.overlay, #request').fadeOut();
    $('.overlay, #thanks').fadeOut();
});


