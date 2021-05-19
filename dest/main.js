let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');

btnmenu.onclick = function(){
    nav.classList.toggle('active');
    this.classList.toggle('clicked');
}


let langOption = document.querySelector('.lang__option');
let langCurrrent = document.querySelector('.lang__current');

langCurrrent.onclick = function(){
    langOption.classList.toggle('clicked');
}
