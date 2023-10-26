
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

function salvaFicha() {
    // Add an event listener to the form submission
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
       
      // Here, you can gather form data and send it to your server or perform other actions
      const formData = new FormData(this);
  
      // Example: Send form data to the server using fetch
      fetch('/submit', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // The form data was successfully sent to the server
            console.log('Form data sent successfully.');
          } else {
            // Handle errors
            console.error('Error sending form data to the server.');
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    });
  }
