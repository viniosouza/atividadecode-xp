var dadosCliente = {
  endereco: {

  },
  contato: {

  }
};

function validaFormulario() {

  event.preventDefault();

  console.log(validaEndereco())
  var returno = true;
  // gerar objeto endereco baseado mo dados do formulario
  if (validaContato() && validaEndereco()) {
    console.log('Ok')
  } else {
    console.log('Não Ok')
  }

  validaEndereco()
  validaContato()


  // Valida Endereco



  dadosCliente.contato = objContato;
  console.log(objEndereco);

  //  gerar objeto contato


  function validaEndereco(_objEndereco) {
    var returno = true;
    objEndereco = {
      pais:
        document.getElementById('selection_country').value,
      cidade:
        document.getElementById('selection_city').value,
      estado:
        document.getElementById('estate').value,
      code:
        document.getElementById('code').value,
      address1:
        document.getElementById('address1').value,
      address1:
        document.getElementById('address2').value,
    };
    console.log(objEndereco);
    if (objEndereco.pais === 0) {
      returno = false
    } else if (objEndereco.estado.trim().lenght == 0) {
      return false;
    } else if (objEndereco.cidade == 0) {
      return false;
    } else if (objEndereco.code.trim().lenght == 0) {
      return false
    } else if (objEndereco.address1.trim().lenght == 0) {
      return false;
    } else if (objEndereco.address2.trim().lenght == 0) {
      return false;
    } else {   //Validacao ok
      // grava o objeto endereço no objeto dadosCliente
      dadosCliente.endereco = objEndereco;
      return true;
    }


  }

  function validaContato(objContato) {
    cosnole.log()
    objContato = {
      nome: document.getElementById('first_name').value,
      ultimo_nome: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      radio_dez: document.getElementById('radio_10').value,
      radio_vinte: document.getElementById('radio_20').value,

    }


    if (objContato.nome.trim().lenght == 0) {
      return false;
    } else if (objContato.ultimo_nome.trim().lenght == 0) {
      return false
    } else if (objContato.email.trim().lenght == 0) {
      return false;
    } else if (objContato.phone.trim().lenght == 0) {
      return false;
    } else if (document.getElementById('radio_10').checked) {
      var pacote = document.getElementById('radio_10').value;
    } else if (document.getElementById('radio_20').checked) {
      var pacote = document.getElementById('radio_20').value
    } else {   //Validacao ok
      // grava o objeto endereço no objeto dadosCliente
      dadosCliente.contato = objContato;
      return true;

    }
  }
}