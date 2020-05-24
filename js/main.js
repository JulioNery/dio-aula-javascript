function load(){
    console.log("Página carregada!");
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Clicado");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //Abre em uma nova aba
    // window.location.href = "https://digitalinnovation.one/"; //Redireciona na página atual
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}

function funcaoChange(elemento){
    console.log(elemento.value);
    document.getElementById("valorSelecionado").innerHTML = "Valor selecionado: " + elemento.value;
}


//****************************************************//

/* 
    //FUNÇÕES

    function soma(n1, n2){
        return n1 + n2;
    }

    //alert(soma(5, 10));

    var validar = 0; //GLOBAL
    function validaIdade(idade){
        var validar = true; //LOCAL
        if(idade >= 18 ){
            validar  = true;
        }else{
            validar = false;
        }
        return validar;
    }

    var idade =  prompt("Qual a sua idade?");
    if(validaIdade(idade)){
        console.log("Maior de idade.");
    }else{
        console.log("Menor de idade.");
    }

*/


/* 
    //DATAS

    var d = new Date();
    console.log(d);
    console.log("Ano: " + d.getFullYear());
    console.log("Mês: " + d.getMonth() + 1);
    console.log("Dia: " + d.getDate());
    console.log("Horas: " + d.getHours());
    console.log("Minutos: " + d.getMinutes());
    console.log("Segundos: " + d.getSeconds());

*/

/* 
    //LAÇOS DE REPETIÇÃO

    var count = 0;
    while (count <= 5) {
        console.log(count);
        // alert(count);
        count++;
    }

    var count2;
    for (count2 = 1; count2 <= 5 ; count2++) {
        console.log(count2);
    }

*/

/* 
    //CONDICIONAIS

    var idade = prompt("Qual a sua idade?");
    if(idade >= 18){
        alert("Maior de idade");
    }else{
        alert("Menor de idade");
    }

*/

/* 
    //LISTA DE DICIONÁRIOS

    var frutas = [
        {
            nome: "Maça",
            cor: "Vermelha"
        },
        {
            nome: "Uva",
            cor: "Roxa"
        }
    ]

    console.log(frutas)
    console.log(frutas.length)
    console.log(frutas[0].nome)
    console.log(frutas[1].nome)

*/

/* 
    //DICIONÁRIO

    var fruta = {
        nome: "Maça",
        cor: "Vermelha"
    }

    console.log(fruta)
    console.log(fruta.nome)
    console.log(fruta.cor)

*/

/*
    //ARRAYS

    var lista = ["Maça", "Pêra", "Laranja"];
    lista.push("Uva")
    // console.log(lista);
    // lista.pop();
    console.log(lista);
    console.log(lista.length);
    console.log(lista.reverse());
    console.log(lista.toString());
    console.log(lista.join(" - "));
    console.log(lista.sort());
    // console.log(lista[0]);
    // console.log(lista.toString()[0]);

*/

/*
    //VARIAVEIS

    var nome = "Júlio Nery"
    var n1 = 2;
    var n2 = 10;
    var frase = "Japão é a melhor seleção do mundo."
    //alert(nome + " tem " + idade + " anos.");
    //alert(idade + idade2);

    console.log(nome)
    console.log(n1 + n2)
    console.log(n1 * n2)
    console.log(frase)
    // alert(frase.replace("Japão", "Brasil"));
    frase = frase.replace("Japão", "Brasil");
    console.log(frase)
    console.log(frase.toLowerCase())
    console.log(frase.toUpperCase())
    
*/