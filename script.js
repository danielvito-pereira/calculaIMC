
const calcular = document.getElementById('calcular');


function imc() {
    const nome =document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !=='' && altura !=='' && peso !=='') {
        const valorIMC = (peso / (altura*altura)).toFixed(1);


        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'No peso ideal, parabéns';
        } else if(valorIMC< 30) {
            classificacao = 'Acima do peso, cuidado';    
        }else if(valorIMC< 35) {
            classificacao = 'obesidade grau I, cuidado';    
        }else if(valorIMC< 40) {
            classificacao = 'obesidade grau II, cuidado';    
        } else {
            classificacao = 'obesidade grau III, cuidado'; 
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos para continuar !'
    }

}

calcular.addEventListener('click', imc);
