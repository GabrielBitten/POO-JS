//1- métodos
const animal = {
    nome: "Thor",
    latir: function(){
        console.log("Au Au")
    }
}
console.log(animal.nome)
console.log(animal.latir())

//2- Aprofundando em métodos
const pessoa = {
    nome:"João",

    getnome: function () {
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
}
console.log(pessoa.nome)

console.log(pessoa.getnome())

pessoa.setNome("Armando")

console.log(pessoa.getnome())


//3- Prototype(espécie de herança)
const text = "Texto"

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(Object.getPrototypeOf(arr))

//4- mais sobre prototype
const myObject ={
    a:"b"
}
console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

//5- Classes básicas
const cachorro = {
    raca:null,
    patas:4,
}

const Shitzu = Object.create(cachorro)

Shitzu.raca = "Shitzu"
console.log(Shitzu)
console.log(Shitzu.patas)

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog"
console.log(bulldog)

//6- Funções e classes
function criarCachorro(nome,raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const Pandora = criarCachorro("Pandora", "Vira-lata");

console.log(Pandora);


const Tereza = criarCachorro("Tereza", "Shitzu");

console.log(Tereza);

//7- Funções construtoras
function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy","Husky");

console.log(husky)

//8- métodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("AUUUUuuu")
}

console.log(Cachorro.prototype)

husky.uivar();


//9- Classes ES6("Novo")
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const bob = new CachorroClasse("BOB","Labrador")
console.log(bob)

console.log(Object.getPrototypeOf(bob))


//10- mais sobre classes
class Caminhao {
    constructor(eixos, cor, modelo) {
        this.eixos = eixos;
        this.cor = cor;
        this.modelo = modelo;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos, é da cor ${this.cor}, e é do modelo ${this.modelo}`);
    }
}

const scania = new Caminhao(6, "Vermelha", "R500"); 

console.log(scania);

scania.descreverCaminhao();


//11- override
class Humano{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}
const matheus = new Humano("Mathes",19)

console.log(matheus)

Humano.prototype.idade = "Não definida";

console.log(matheus.idade)

console.log(Humano.prototype.idade)


//12- Symbols em Classes
class Aviao{
    constructor(marca,turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing",10)

console.log(boeing)

console.log(boeing[asas])
console.log(boeing[pilotos])

//13- getters e setters
class Post{
    constructor(titulo,descricao,tags){
    this.titulo = titulo
    this.descricao = descricao
    this.tags = tags
}

  get exibirtitulo(){
    return `Voce esta lendo ${this.titulo}`
  }

  set adicionarTags(tags){
    const tagsArr = tags.split(", ")
    this.tags = tagsArr
  }
}
const myPost = new Post("Algum post", "é sobre programação")

console.log(myPost)


console.log(myPost.exibirtitulo);

myPost.adicionarTags = "programaçao , javascript ,js";
console.log(myPost)


//14- herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);
console.log(shark.patas);


//15- instanceof
console.log(shark instanceof Lobo)
console.log(Lobo instanceof Mamifero)