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

function loadContent(url) {
    var contentArea = document.getElementById('contentArea');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o conteúdo da URL: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            contentArea.innerHTML = data;
            closeSideMenu();
        })
        .catch(error => {
            console.error(error);
        });
}


function abreFichaModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function fechaFichaModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
    

