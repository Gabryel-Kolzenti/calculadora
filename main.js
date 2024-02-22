
                        //para buscar um elemento la do HTML
const display = document.querySelector('#display') //sem nada elemento-- . class -- # id
const buttons = document.querySelectorAll('#calculator button') //querySelectorAll --> para buscar todos os elementos

//forEach() --> Para cada...            => para atribuir algo a uma função
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {//adicionando/realizando um evento/ação ao clicar em algo
        if (btn.id === "=") {display.value = eval(display.value);}
        //=== Compara o tipo e valor
        //eval --> irá analisar o valor do display como se fosse JS --> ou seja realizar os cálculos inseridos lá     
        else if (btn.id === "ac") {display.value = '';}
        else if (btn.id === "de") {display.value = display.value.slice(0, -1)} 
        //slice(x, -y) --> x é onde comeca a contagem do intervalo de elementos que podem ser apagados, -y é a partir de qual elemento (da direita para esquerda) seja apagado --> -1 = ultimo elemento. 
        else {display.value += btn.id};
        // += para acumular os elementos, não apenas somar ou subtituir
    })            
})

function alteraTema() {
    const button = document.querySelector('header button');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const buttons = document.querySelectorAll('.operator')
    imagemBotaoTrocaDeTema = document.querySelector('#alteraTema')
    iconCalculator = document.querySelector('#iconCalculator')
    const h1 = document.querySelector('h1')
    const calculadora = document.querySelector('#calculator')


    button.addEventListener('click', () => {
        if (header !== document.querySelector('.bodyEscuro')) {
            header.classList.add('bodyEscuro');
            main.classList.add('bodyEscuro');
            display.classList.add('displayEscuro')
            h1.classList.add('modoEscuro')
            imagemBotaoTrocaDeTema.setAttribute("src", "imagens/moon.png");
            iconCalculator.setAttribute("src", "imagens/calculadora escuro.png");
            calculadora.classList.add('calculatorEscuro');
            buttons.forEach(btn => btn.classList.add('modoEscuro'));
            
        } else if (header === document.querySelector('.bodyEscuro')) {
            header.classList.remove('bodyEscuro');
            main.classList.remove('bodyEscuro');
            calculadora.classList.remove('calculatorEscuro');
            h1.classList.remove('modoEscuro')
            imagemBotaoTrocaDeTema.setAttribute("src", "imagens/sun.png");
            iconCalculator.setAttribute("src", "imagens/calculadora claro.png");
            display.classList.remove('displayEscuro')
            buttons.forEach(btn => btn.classList.remove('modoEscuro'));
        }
    });
}
alteraTema();
