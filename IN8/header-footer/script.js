let contadorUsuarios = 0;


let usuarios = [];


function adicionarUsuario(nome, email) {
    contadorUsuarios++;
    usuarios.push({ id: contadorUsuarios, nome: nome, email: email });

   
    document.querySelector('#listaCadastro tbody').innerHTML = '';

  
    usuarios.forEach(usuario => {
        let row = `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.email}</td>
                    </tr>`;
        document.querySelector('#listaCadastro tbody').innerHTML += row;
    });
}


document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    adicionarUsuario(nome, email);

  
    document.getElementById("nome").value = '';
    document.getElementById("email").value = '';
    document.getElementById("senha").value = '';
});


document.querySelector('.menu-icon').addEventListener('click', function() {
    
    let menu = document.querySelector('.menu');

   
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
