const form = document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // alert('ola');
   let nome = document.getElementById('nome').value;
   let email = document.getElementById('email').value;
   let endereco = document.getElementById('endereco').value;
   let tel = document.getElementById('tel').value;
   
   let data = {
       nome,
       email,
       endereco,
       tel,
   }
   let convertData = JSON.stringify(data);
   localStorage.setItem('container', convertData)
   alert('Cadastrado')
})