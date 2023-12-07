var menuOpen = false;

function toggleSideMenu() {
    var sideMenu = document.getElementById('sideMenu');
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';


    } else {
        sideMenu.style.left = '0px';
        menuOpen === true;
    }
}

function closeSideMenu() {
    var sideMenu = document.getElementById('sideMenu');
    sideMenu.style.left = '-250px';
    
}

window.addEventListener('dblclick', closeSideMenu);


function loadContent(content) {
    var contentArea = document.getElementById('contentArea');
   
    if (content === 'fichas')
        contentArea.innerHTML = `<div class="fichas-area">
    <h1>Suas Fichas</h1>
    <div>
        <p>Crie sua nova ficha</p>
        <button onclick="abreFichaModal()">+</button>
    </div>
</div>`;
    else if (content === 'notes')
        contentArea.innerHTML = `<section>
<div class="anotacoes" id="anotacoes">
    <label for="anotacoes"> Anotações</label>
    <textarea name="anotacoes" id="" cols="30" rows="10">

    </textarea>
</div>
</section>`;
    else if (content === 'maps')
    contentArea.innerHTML = `<img style="width:50%;" src="../imagens/bokislad 2.0 (1).jpg">`


}


function abreFichaModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    closeSideMenu() 
}

function fechaFichaModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.onclick = function (event) {
    
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}