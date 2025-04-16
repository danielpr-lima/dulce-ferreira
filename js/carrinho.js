
const botoes = document.querySelectorAll(".btn-add");
const menuLateral = document.getElementById("menu-lateral");
const fecharMenu = document.getElementById("fechar-menu");
const listaCarrinho = document.getElementById("itens-carrinho");

const iconeCarrinho = document.getElementById("icone-carrinho");
const contadorCarrinho = document.getElementById("contador-carrinho");
let quantidade = 0;

function abrirMenu() {
    menuLateral.style.right = '0';
}

fecharMenu.addEventListener("click", () => {
    menuLateral.style.right = '-300px';
});

iconeCarrinho.addEventListener("click", abrirMenu);


botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const nome = botao.getAttribute("data-name") || botao.previousElementSibling.previousElementSibling.textContent;

        // Verifica se o item já está no carrinho
        const itens = Array.from(listaCarrinho.children).map(li => li.firstChild.textContent.trim());
        if (itens.includes(nome)) {
            alert("Esse item já está no carrinho!");
            return;
        }

        // Criar <li>
        const item = document.createElement("li");
        item.textContent = nome;

        // Criar botão de remover
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("btn-remover");

        // Adicionar botão ao item
        item.appendChild(btnRemover);
        listaCarrinho.appendChild(item);

        // Atualizar contador
        quantidade++;
        contadorCarrinho.textContent = quantidade;
        contadorCarrinho.style.display = "inline-block";

        // Remoção do item
        btnRemover.addEventListener("click", () => {
            listaCarrinho.removeChild(item);
            quantidade--;
            if (quantidade === 0) {
                contadorCarrinho.style.display = "none";
            } else {
                contadorCarrinho.textContent = quantidade;
            }
        });

        abrirMenu();
    });
});


