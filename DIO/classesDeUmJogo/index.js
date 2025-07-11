// Exemplo de código para uma classe de um jogo
// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;;
        this.vida = 100;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "mago":
                ataque = "usou magia";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shurikens";
                break;
            default:
                ataque = "atacou com arma desconhecida";
        }
        console.log(`O herói ${this.tipo} atacou usando ${ataque}!`);
    }
}    