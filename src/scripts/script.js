/* > Utilizando JavaScript utilize o projeto criado utilizando no módulo de HTML e CSS 
e adicione interação no formulário de cadastro de produtos.
   > Os dados digitados nos inputs do formulário devem aparecer na tabela. 
Para isso, você pode utilizar o getElementById para pegar os dados digitados 
(junto com a função onClick) e usar o innerHTML para adicionar os dados na tabela.
 */

addProduct = () => {
  let nome = document.getElementById("nome").value;
  let valor = document.getElementById("valor").value;

  if (nome === "" || valor === "") {
    alert("Preencha os campos vazios!");
    return;
  }

  let tabela = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  let newRow = tabela.insertRow();
  let nameCell = newRow.insertCell(0);
  let valueCell = newRow.insertCell(1);

  nameCell.innerHTML = nome;
  valueCell.innerHTML = "R$ " + parseFloat(valor).toFixed(2);

  //clean input
  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
};

document.getElementById("btn").addEventListener("click", addProduct);
