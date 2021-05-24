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
console.log(footer.clientHeight);
function scrollToTop(){
    let scrollY = window.pageYOffset;
    if(scrollY > (heightSlider - heightHeader)){
        backToTop.classList.add('active');
    }else if(scrollY >= (document.innerHeight - footer.clientHeight)){
        backToTop.classList.remove('active'); 
    }
    console.log(document.innerHeight)
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
