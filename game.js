var nomeJogador1 = localStorage.getItem("nomeJogador1");
var nomeJogador2 = localStorage.getItem("nomeJogador2");

var pontosJogador1 = 0;
var pontosJogador2 = 0;

document.getElementById("nomeJogador1").innerHTML = nomeJogador1  + ":";
document.getElementById("nomeJogador2").innerHTML = nomeJogador2  + ":";

document.getElementById("pontosJogador1"). innerHTML = pontosJogador1;
document.getElementById("pontosJogador2"). innerHTML = pontosJogador2;

document.getElementById("jogadorPerguntando").innerHTML = "Turno de pergunta - " + nomeJogador1; 
document.getElementById("jogadorRespondendo").innerHTML = "Turno de resposta - " + nomeJogador2; 

//criar a função send() Dani
function send (){
    pegarPalavra = document.getElementById("palavra").value;
    palavra = pegarPalavra.toLowerCase();
    caracter1 = palavra.charAt(1);

    comprimentodivididopor2 = Math.floor(palavra.lenght/2);
    caracter2 = palavra.charAt(comprimentodivididopor2);

    comprimentomenos1 = palavra.lenght-1;
    caracter3 = palavra.charAt(comprimentomenos1);

    removercaracter1 = palavra.replace(caracter1, "_")
    removercaracter2 = removercaracter1.replace(caracter2, "_");
    removercaracter3 = removercaracter2.replace(caracter3, "_");

questao = "<h4>" + removercaracter3 + "</h4>";
caixaTexto = "<br>Resposta:<input type= 'text' id='inputTextBox'>"
botao = "<br><br><button onclick='check()'Checar</button>"; 
linha = questao+caixaTexto+botao;
document.getElementById("output").innerHTML = linha;
document.getElementById("palavra").value = "";

}
//variáveis 
questionTurn="nomeJogador1";
answerTurn="nomeJogador2";



//função para checar a resposta do usuário e trocar os turnos
function check(){
    getAnswer = document.getElementById("inputTextBox").value;
    answer = getAnswer.toLowerCase();

    if(answer==palavra){
        if(answerTurn=="nomeJogador1"){
            pontosJogador1 = pontosJogador1 + 1;
            document.getElementById("pontosJogador1").innerHTML=pontosJogador1;
        }
        else{
            pontosJogador2 = pontosJogador2 + 1;
            document.getElementById("pontosJogador2").innerHTML=pontosJogador2;
        }
    }

    if(questionTurn=="nomeJogador1"){
        questionTurn="nomeJogador2";
        document.getElementById("jogadorPerguntando").innerHTML="Turno de Pergunta - " + nomeJogador2;
    }
    else{
        questionTurn="nomeJogador1";
        document.getElementById("jogadorPerguntando").innerHTML="Turno de Pergunta - " + nomeJogador1;
    }

    if(answerTurn=="nomeJogador1"){
        answerTurn="nomeJogador2";
        document.getElementById("jogadorRespondendo").innerHTML="Turno de Resposta - " + nomeJogador2;
    }
    else{
        answerTurn="nomeJogador1";
        document.getElementById("jogadorRespondendo").innerHTML="Turno de Resposta - " + nomeJogador1;
    }
    document.getElementById("output").innerHTML="";
}   