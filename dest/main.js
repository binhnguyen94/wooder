// Xử lý button Menu
let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');

btnmenu.onclick = function(){
    nav.classList.toggle('active');
    this.classList.toggle('clicked');
}

// Xử lý Button Language
let lang = document.querySelector('.lang');
let langCurrrent = document.querySelector('.lang .lang__current span');
let langOpt = document.querySelector('.lang .lang__option');
let langItem = document.querySelectorAll('.lang .lang__option a')

lang.addEventListener('click', function(e){
    e.stopPropagation();
    langOpt.classList.toggle('clicked');
});

langItem.forEach(function (item){
    item.addEventListener('click', function(){
        let langText = this.textContent;
        let langSpan = langCurrrent.textContent;
        langCurrrent.innerHTML = langText;
        this.innerHTML = langSpan;
    });
});

document.addEventListener('click', function(){
    langOpt.classList.remove('clicked');
});

// Show background Header when scroll
let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;

function showBg(){
    let scrollY = window.pageYOffset;
    // console.log(heightSlider);
    if(scrollY > (heightSlider - heightHeader)){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

// Scroll Back To Top
let backToTop = document.querySelector('.totop');
let footer = document.querySelector('footer');
function scrollToTop(){
    let scrollY = window.pageYOffset;
    if(scrollY < (heightSlider - heightHeader)){
        backToTop.classList.remove('active');
    }else if(scrollY >= (document.body.clientHeight - window.innerHeight)){
        backToTop.classList.remove('active'); 
    } else{
        backToTop.classList.add('active'); 
    }
}

backToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0
    })
})

document.addEventListener('scroll', function(){
    showBg();
    scrollToTop();
})

// Select Menu scroll 
let menu = document.querySelectorAll('header .menu a');
let sections = [];
// Tạo Function remove class active để tái sử dụng
function removeActiveMenu(){
    menu.forEach(function(element_menu, index_menu){
        element_menu.classList.remove('active');
    });
};

// Thực hiện click menu scroll tới section cần thiết
menu.forEach(function(element, index){
    let menuName = element.getAttribute('href').replace('#', '');
    let section = document.querySelector('.' + menuName);
    sections.push(section);
    element.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: section.offsetTop - heightHeader + 1
        });
        removeActiveMenu();
        element.classList.add('active');
    });
});

// Chức năng thực hiện scroll tới đâu thì active menu tới đó
window.addEventListener('scroll', function(e){
    let positionScroll = window.pageYOffset;

    sections.forEach(function(section, index){
        if(positionScroll > (section.offsetTop - heightHeader) && positionScroll < (section.offsetTop + section.offsetHeight)){
            removeActiveMenu();
            menu[index].classList.add('active');
        } else {
            menu[index].classList.remove('active');
        };
    });
});


// Thực hiện chuyển trang trên silder
