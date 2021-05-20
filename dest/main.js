let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');

btnmenu.onclick = function(){
    nav.classList.toggle('active');
    this.classList.toggle('clicked');
}


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
})

document.addEventListener('click', function(){
    langOpt.classList.remove('clicked');
})