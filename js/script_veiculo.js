
//PEGANDO ELEMENTOS DOS DOM
const formVeiculos = document.querySelector('#form-veiculos')
const divListaVeiculos = document.querySelector('#div-lista-veiculos')

//CRIANDO ARRAY veiculos
const veiculos = []

formVeiculos.addEventListener('submit', (evt)=>{

    evt.preventDefault()

    const dadosFormVeiculos = new FormData(formVeiculos)

    const veiculo ={
        modelo: dadosFormVeiculos.get('modelo'),
        marca: dadosFormVeiculos.get('marca'),
        placa: dadosFormVeiculos.get('placa'),
        ano: dadosFormVeiculos.get('ano')
    }

    //CHAMAR A FUNÇÃO addVeiculo
    addVeiculo(veiculo)

    formVeiculos.reset()
})

//FUNÇÃO ADICIONAR CARROS
const addVeiculo = (objVeiculo) =>{
    veiculos.push(objVeiculo)

    listVeiculos()
    
}

const listVeiculos = ()=>{
    divListaVeiculos.innerHTML = ''

    veiculos.forEach((elem, i)=>{
        divListaVeiculos.innerHTML += `${i+1} - ${elem.modelo} - ${elem.marca} - ${elem.placa} - ${elem.ano}`
    })
}




