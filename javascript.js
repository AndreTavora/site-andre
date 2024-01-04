
    // Adicione a classe 'navbar-scrolled' ao fazer scroll
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  
    //Adicionando valida�ao do Form de Login e Senha 
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}
