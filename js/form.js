var dadosCliente = {
    endereco: {

    },
    contato: {

    }
};

function validaFormulario() {
    event.preventDefault();
    // gerar objeto endereco
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

    objContato = {
        nome:
            document.getElementById('first_name').value,
        ultimo_nome: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        radio_dez: document.getElementById('radio_10').value,
        radio_vinte: document.getElementById('radio_20').value,



    }

    dadosCliente.endereco = objEndereco;
    dadosCliente.contato = objContato;
    console.log(objEndereco);

    //  gerar objeto contato
}

function validaEndereco(_objEndereco) {

}

function validaContato(_objContato) {

}