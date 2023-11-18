const data = [
      {
      nome: 'Roger Medeiros',
      sexo: 'M',
      salario: 3250,
      },
      {
      nome: 'Carolina Silva',
      sexo: 'F',
      salario: 1200,
      },
      {
      nome: 'Cristina Avila',
      sexo: 'F',
      salario: 8100,
      },
      {
      nome: 'Gustavo Hoffman',
      sexo: 'M',
      salario: 5200.35,
      },
      {
      nome: 'Eva Trindade',
      sexo: 'F',
      salario: 2501,
      },
      {
      nome: 'Andre Mathias',
      sexo: 'M',
      salario: 1750,
      },
      {
      nome: 'Joice Castro da Silva',
      
      sexo: 'F',
      salario: 3350.25,
      },
      ];
      
      /* 1. Imprima no console a quantidade de pessoas Total.  */
      function atividade1(){
            console.log(data.length);
      }
      
      /* 2. Imprima no console a quantidade de pessoas pessoas do sexo
      Feminino. */
      function atividade2(){
            const listaF = data.filter((valor) => valor.sexo === "F");
            console.log(`As pessoas do sexo feminino é ${listaF.length}`)
      }
      
      /* 3. Imprima no console a soma do salário de todas as pessoas. */
      function atividade3(){
            const somaReduce = data.reduce((acc, pessoa)=> (acc += pessoa.salario),0)
            console.log(`A soma de todos os salarios é ${somaReduce.toFixed(2)}`);
      }
      
      /* 4. Imprima no console a média do salário de todas as pessoas. */
      function atividade4() {
            const mediaReduce = data.reduce((acc, pessoa)=> (acc = acc + pessoa.salario),0)
            const mediaSalarios = mediaReduce / data.length
            console.log(`A  media de todos os salarios é ${mediaSalarios.toFixed(2)}`);
        }
      /* 5. Imprima no console a soma do salário de todos as pessoas do sexo
      Masculino */
      function atividade5() {
            const somaM = data.reduce((memo, pessoa) => {
                if (pessoa.sexo === "M") {
                    return (memo += pessoa.salario);
                }
                return memo;
            }, 0);
            console.log(`A soma de todos os salarios Masculinos é ${somaM.toFixed(2)}`);
        }
      /* 6. Imprima no console a média do salário de todas as pessoas do sexo
      Masculino */
      function atividade6() {
            const listaM = data.filter(pessoa => pessoa.sexo === 'M')
            const somaM = data.reduce((acc, pessoa) => {
                if (pessoa.sexo === "M") {
                    return (acc += pessoa.salario);
                }
                return acc;
            }, 0);
            const mediaM = somaM / listaM.length
            console.log(`A media de todos os salarios Masculinos é ${mediaM.toFixed(2)}`);
        }
      /* 7. Utilize a função Some, para descobrir se existe algum salário
      superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
      contrário falso. */
      function atividade7() {
            const existe = data.some((pessoa) => pessoa.salario > 7000);
            console.log(existe ? "verdadeiro" : "falso");
        }
      /* 8. Utilize a função findIndex, para descobrir a posição da pessoa de
      nome 'Eva Trindade'. */
      function atividade8() {
            const indiceEncontrado = data.findIndex(
                (pessoa) => pessoa.nome === "Eva Trindade"
            );
            console.log(
                `O indice que a Eva Trindade se encontra é ${indiceEncontrado}`
            );
        }
      /* 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
      sobrenome "Silva". */
      function atividade9() {
            const encontraSilva = data.filter(
                (valor) => valor.nome.indexOf("Silva") !== -1
            );
            console.log(encontraSilva);
        }
      /* 10. Imprima os nomes utilizando o MAP */
      function atividade10() {
            const nomes = data.map((valor) => valor.nome);
            console.log(nomes);
        }