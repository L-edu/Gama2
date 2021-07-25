const form = document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // alert('ola');
   let nome = document.getElementById('name').value;
   let descricao = document.getElementById('descricao').value;
   let preco = document.getElementById('preco').value;
   let qnt = document.getElementById('qnt').value;
   
   let data = {
       nome,
       descricao,
       preco,
       qnt,
   }
   let convertData = JSON.stringify(data);
   localStorage.setItem('container', convertData)
   alert('Cadastrado')
})