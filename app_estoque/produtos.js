let produtos = Array();

function criar_produto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd,
    };
}

function list_produtos(){
    return produtos;
}

function add_produtos(p){
    produtos.push(p); 
}

function editar_produto(id, qtd_atual){
    let pEditado;
    produtos.forEach(p => {
        if(p.id == id){
            p.qtd = qtd_atual;
        }
        pEditado = p;
    });
    return pEditado;
}




function remover_produto(id){
    let pRemovido;
    produtos.forEach(p => {
        if(p.id == id){
            pRemovido = p;
        }
    });
    produtos.slice(pRemovido);
    return pRemovido
}
module.exports = {
    criar_produto,
    list_produtos,
    add_produtos,
    remover_produto,
    editar_produto
}
