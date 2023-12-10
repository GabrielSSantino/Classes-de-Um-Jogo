//Class definindo uma bsae para o heroi
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

}
//Class definindo uma bsae para o Monstro
class Monstro {
    constructor(nomeMonstro, tipoM, vidaM) {
        this.nomeMonstro = nomeMonstro;
        this.tipoM = tipoM;
        this.vidaM = vidaM;
    }
}

//Definindo o que ele é
let heroiPlayer = new Hero("Carlin", 30, "Mago");
let monstroAtaca = new Monstro("Claudão", "Variavel", 1);

//A menssagem que dara no fnal dependo do tipo
function menssagem() {
    if (heroiPlayer.tipo === "Guerreiro") {
        console.log('Guerreiro atacou usando Espada');
    } else if (heroiPlayer.tipo === "Mago") {
        console.log('Mago atacou usando Magia');
    } else if (heroiPlayer.tipo === "Monge") {
        console.log('Monge atacou usando artes marciais');
    } else if (heroiPlayer.tipo === "Ninja") {
        console.log('Ninja atacou usando shuriken');
    }
}

//Definindo o combate
function comabte() {
    //Enquanto a vida do monstro for maior que 0
    while (monstroAtaca.vidaM > 0) {
        console.log(`${monstroAtaca.nomeMonstro} é uma ${monstroAtaca.tipoM}`);
        menssagem();
        monstroAtaca.vidaM--;
    }
}

comabte();