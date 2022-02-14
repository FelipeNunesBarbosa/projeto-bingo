let cartelas = [
    document.getElementById('n1'),
    document.getElementById('n2'),
    document.getElementById('n3'),
    document.getElementById('n4'),
    document.getElementById('n5'),
    document.getElementById('n6'),
    document.getElementById('n7'),
    document.getElementById('n8'),
    document.getElementById('n9'),
    document.getElementById('n10'),
    document.getElementById('n11'),
    document.getElementById('n12'),
    document.getElementById('n13'),
    document.getElementById('n14'),
    document.getElementById('n15'),
    document.getElementById('n16'),
    document.getElementById('n17'),
    document.getElementById('n18'),
    document.getElementById('n19'),
    document.getElementById('n20'),
    document.getElementById('n21'),
    document.getElementById('n22'),
    document.getElementById('n23'),
    document.getElementById('n24')
]
let res = document.getElementById('res')
let numerosSorteados = document.getElementById('sorteados')
let nome = document.getElementById('nome')
let num = []
let contador = []  //Armazena 24 números aleatórios sem repetição
let n = window.prompt('Qual o seu nome?')
nome.innerHTML = n
for(z = 0; z < 24; z++){ //Gera 24 numeros aleatorios
    contador[z] = Math.floor(Math.random() * 24)
}
for(z = 0; z < 24; z++) //Remove numeros repetidos e gera um novo
{
    for(j = 0; j < 24; j++)
    {   
        if(z != j)
        {
            if(contador[z] == contador[j])
            {
                contador[j] = Math.floor(Math.random() * 24)
                j = 0
                z = 0
            }
        }
    }
}

let p = 0
let p2 = 0
function começar()
{ 
    if(p2 == 0)
    {
        
        for(i = 0; i <= 23; i++)
        {
            num[i] = Math.floor(Math.random() * 24)
        }
        for(i = 0; i <=23; i++)
        {
            for(j = 0; j <= 23; j++)
            {   
                if(i != j)
                {
                    if(num[i] == num[j])
                    {
                        num[j] = Math.floor(Math.random() * 24)
                        j = 0
                        i = 0
                    }
                }
            }
        }
        
        for(a = 0; a <= 23; a++)
        {
            cartelas[a].innerHTML = num[a]
        }
    }
    p2++
}
function girar()
{
    pos = num.indexOf(contador[p])
    cartelas[pos].style.background = 'green' // pinta posição do numero

    res.innerHTML = contador[p]
    if(contador[p] < 10){
        numerosSorteados.innerHTML += `|0${contador[p]}| `
    }
    else{
        numerosSorteados.innerHTML += `|${contador[p]}| `
    }
    
    p++
}
function reiniciar()
{
    location.reload()
}