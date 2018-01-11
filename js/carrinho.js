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
        cor: 'purple',
        preco: 72,
        qtd: 3,
        size:'XXL'
    },
    {
        codigo: 02,
        img:{
            src: './img/nike-shoes.jpg',
            alt: "Shoes",
            title: "Shoes"
        },
        descricao: "Nike Men's Running Shoes",
        cor: 'orange',
        preco: 129,
        qtd: 1,
        size: '43'
    },
    {
        codigo:03,
        img:{
            src: './img/kevin.png',
            alt: "Jacket",
            title: "Jacket"
        },
        descricao: "DC Men's Axis Snowboard Jacket",
        cor: 'blue',
        preco: 89,
        qtd: 2,
        size:'S'
    }
];

function listarProdutos(){
    // Gerar o templete atraves do array do objeto
 var templete = "";

 for(var i=0; i<produtos.length;i++){
    templete +='tr class="produtos">'
    templete += '<div class="table-details">';
    templete += '<button class="button-x">X</button>';
    templete +='<img  class="shopping-img"src="./img/purpleT-shirt.jpeg" alt="t-shirt">';
    templete +='<div class="detalhe-box">';
    templete +='<p class="shopping-table-details"><b></b></p>';
    templete +='<br>';
    templete +='color:';
    templete +='<input type="color"/>';
    templete +='Size:<select>';
    templete +='<option value="">S</option>';
    templete +='</select>'
    templete +='</div>';
    templete +='</div>';
    templete +='</td>';
    templete +='<td>';
    templete +='<p>$<b></b></p>';
    templete +='</td>';
    templete +='<td>';
    templete +='<button>+</button>';
    templete +='<input type="number" value="quantity">';
    templete +='<button>-</button>';
    templete +='</td>';
    templete +='<td><p>$<b></b></p></td>';
    templete +='</tr>';

 }
    document.getElementById("produtos").innerHTML = templete;
}



