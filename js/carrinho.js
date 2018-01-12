// Carrinho
var produtos = [
    {
        codigo: 01,
        img:{
            src: './img/purpleT-shirt.jpeg',
            alt: "Text alternativo",
            title: "título da imagem"
        },
        descricao: "Puma Golf Reglan Tech Polo Tee",
        cor: "#2E0854",
        preco: 72,
        qtd: 3,
        size:'XXL',
        atualizarPreco: function(preco){
            this.preco = preco
        }
    },
    {
        codigo: 02,
        img:{
            src: './img/nike-shoes.jpg',
            alt: "Shoes",
            title: "Shoes"
        },
        descricao: "Nike Men's Running Shoes",
        cor: "#FFA500",
        preco: 129,
        qtd: 1,
        size: '43'
    },
    {
        codigo:03,
        img:{
            src: './img/kevin.jpg',
            alt: "Jacket",
            title: "Jacket"
        },
        descricao: "DC Men's Axis Snowboard Jacket",
        cor: "#0000FF",
        preco: 89,
        qtd: 2,
        size:'S'
    }
];

function listarProdutos(){
    // Gerar o templete atraves do array do objeto
 var templete = "";
 for(var i=0; i < produtos.length; i++){
     templete +='<tr>'
     templete += '<div class="table-details">';
     templete += '<button class="button-x">X</button>';
     templete +='<img class="shopping-img"src='+produtos[i].img.src+' alt='+produtos[i].img.alt+'>';
     templete +='<div class="detalhe-box">';
     templete +='<p class="shopping-table-details">'+produtos[i].descricao+'<b></b></p>';
     templete +='<br>';
     templete +='color:';
     templete +='<input type="color" value='+produtos[i].cor+'/>';
     templete +='Size:<select>';
     templete +='<option value='+produtos[i].size+'></option>';
     templete +='</select>'
     templete +='</div>';
     templete +='</div>';
     templete +='</td>';
     templete +='<td>';
     templete +='<p>$<b>'+produtos[i].preco+'</b></p>';
     templete +='</td>';
     templete +='<td>';
     templete +='<button>+</button>';
     templete +='<input id='+produtos[i].codigo+'  onChange="atualizarQunatidade(this.id, this.value)" type="number" value='+produtos[i].qtd+'>';
     templete +='<button>-</button>';
     templete +='</td>';
     templete +='<td><p>$<b>'+(produtos[i].preco*produtos[i].qtd)+'</b></p></td>';
     templete +='</tr>';
     
    }

    document.getElementById("produtos").innerHTML = templete;

    var total="";
    var resultado =0;
    
    for(var i=0; i < produtos.length; i++){
        resultado += produtos[i].preco*produtos[i].qtd
    }
    total +='<span>Subtotal $ <b>'+resultado+'</b></span>';
    document.getElementById("total").innerHTML = total
}


function validaSexo(_id){
    alert(_id)
}

function atualizarQuantidade(_codigo, _qtd){
     for(var index = 0; index < produtos.length; index++){
        if(produtos[index] == _codigo){
        //    Atualizar as quantidades
            produtos[index].qtd = _qtd;

            // atualizar o total do produto
            var totalProduto = produtos[index].preco * produtos[index].qtd
            var codPro = 'total-'+produtos[index].codigo
            document.getElementById(codPro)(+produtos[index].codigo)

            // atualizar o total geral
            console.log()
         
            break;
        }
    }
}