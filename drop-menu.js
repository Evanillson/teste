const promotion = document.querySelector('.promotion-letter');
const a_promotion = document.querySelector(".a_promotion");



const li_lancamento = document.querySelector('.li-lancamento');
const menu_drop_nav_lancamento = document.querySelector('.menu-drop-nav-lancamento');

const li_presente = document.querySelector('.li-presente');
const menu_drop_nav_presente = document.querySelector('.menu-drop-nav-presente')

const li_masculino = document.querySelector('.li-masculino');
const menu_drop_nav_masculino = document.querySelector('.menu-drop-nav-masculino')

const li_feminino = document.querySelector('.li-feminino');
const menu_drop_nav_feminino = document.querySelector('.menu-drop-nav-feminino')

const li_infantil = document.querySelector('.li-infantil');
const menu_drop_nav_infantil = document.querySelector('.menu-drop-nav-infantil')

const li_ofertas = document.querySelector('.li-ofertas');
const menu_drop_nav_ofertas = document.querySelector('.menu-drop-nav-ofertas')






li_lancamento.addEventListener('mouseover', drop_menu_nav_show_lancamento);
li_lancamento.addEventListener('mouseout', drop_menu_nav_Remove_lancamento);

li_presente.addEventListener('mouseover', drop_menu_nav_show_presente);
li_presente.addEventListener('mouseout', drop_menu_nav_Remove_presente);

li_masculino.addEventListener('mouseover', drop_menu_nav_show_masculino);
li_masculino.addEventListener('mouseout', drop_menu_nav_Remove_masculino);

li_feminino.addEventListener('mouseover', drop_menu_nav_show_feminino);
li_feminino.addEventListener('mouseout', drop_menu_nav_Remove_feminino);

li_infantil.addEventListener('mouseover', drop_menu_nav_show_infantil);
li_infantil.addEventListener('mouseout', drop_menu_nav_Remove_infantil);

li_ofertas.addEventListener('mouseover', drop_menu_nav_show_ofertas);
li_ofertas.addEventListener('mouseout', drop_menu_nav_Remove_ofertas);







function drop_menu_nav_show_lancamento (){
    menu_drop_nav_lancamento.classList.add("active")

}
function drop_menu_nav_Remove_lancamento (){
    menu_drop_nav_lancamento.classList.remove("active")
}



function drop_menu_nav_show_presente(){
    menu_drop_nav_presente.classList.add("active")
    
}

function drop_menu_nav_Remove_presente(){
    menu_drop_nav_presente.classList.remove("active")
}



function drop_menu_nav_show_masculino(){
    menu_drop_nav_masculino.classList.add("active")
    
}

function drop_menu_nav_Remove_masculino(){
    menu_drop_nav_masculino.classList.remove("active")
}



function drop_menu_nav_show_feminino(){
    menu_drop_nav_feminino.classList.add("active")
    
}

function drop_menu_nav_Remove_feminino(){
    menu_drop_nav_feminino.classList.remove("active")
}



function drop_menu_nav_show_infantil(){
    menu_drop_nav_infantil.classList.add("active")
    
}

function drop_menu_nav_Remove_infantil(){
    menu_drop_nav_infantil.classList.remove("active")
}



function drop_menu_nav_show_ofertas(){
    menu_drop_nav_masculino.classList.add("active")
    
}

function drop_menu_nav_Remove_ofertas(){
    menu_drop_nav_ofertas.classList.remove("active")
}




