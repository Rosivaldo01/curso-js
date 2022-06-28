const pessoa1 = {
    nome: 'Rosivaldo',
    sobrenome: 'Correia',
    idade: 49,
    fala() {
        console.log(`A minha idade atual é ${this.idade} `);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessaoa(nome, sobrenome, idade){
// return{nome, sobrenome, idade};
// }
// const pessoa1 = criaPessaoa('Rosivaldo', 'Correia', 49);
// const pessoa2 = criaPessaoa('Denize', 'Sanches', 55);
// const pessoa3 = criaPessaoa('Lucas', 'Sanches', 34);

// console.log(pessoa1.nome, pessoa1.sobrenome);

// const arrys = [1, 2, 3];
// arrys.push(4); // adicionando um novo elemento.
// arrys [0] = 'Rosivaldo';// o primeiro índice será substituído pela string
// console.log(arrys);