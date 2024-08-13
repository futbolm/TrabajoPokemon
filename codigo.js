/*axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(async res=>{
        //console.log(res)
        let data = await res.json(); 
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })

    */

//

const pokemonInput=document.querySelector(".pokemonInput"); 
const btn=document.querySelector(".btn"); 


async function obtenerJason(pokemon){
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); 
        //console.log(res.data);
        return res.data;  
    }catch(error){
        console.log(error)
       // mostrarError(); 
        //console.log(error)
        
    }
}

const  ImprimirData = async () =>{
    const pokemon=pokemonInput.value; 
    const res= await obtenerJason(pokemon);


    console.log(res);
    if(res === '' || res === undefined) {
        console.log('no hay data');
        mostrarError()
    } else {
        const AgregarImagenYnombre=document.querySelector("#pokemonNyI"); 
    const AgregarInformacion=document.querySelector(".pokemonInfo"); 

    
    AgregarImagenYnombre.innerHTML=`
        <h2 class="pk-name">${res.name.toUpperCase()}</h2>
        <img class="pk-img" src="${res.sprites.other['official-artwork'].front_default}">
    
    `
    AgregarInformacion.innerHTML=`

        <h1 class='info'>INFORMACIÓN DE ${res.name.toUpperCase()}</h1>
        <p class="p"><b>Número:</b> ${res.id}</p>
        <p class="p"><b>Peso:</b> ${res.weight/10}kg</p>
        <p class="p"><b>Altura:</b> ${res.height/10}m</p>
        <p class="p"><b>Tipo:</b> ${res.types["0"]["type"].name}</p>
        <p class='p'><b>Habilidad:</b> ${res.abilities["0"]["ability"].name}
        <div class='Contenedor-lista'>
            <ul>
                <h3>Movimientos:</h3>
                <li class='li'>${res.moves[0]["move"].name}</li>
                <li class='li'>${res.moves[1]["move"].name}</li>
                <li class='li'>${res.moves[2]["move"].name}</li>
                <li class='li'>${res.moves[3]["move"].name}</li>
                
            </ul>
        </div>

    `
    pokemonInput.value=""; 
    }
    
}


btn.addEventListener("click",()=>{
    ImprimirData(); 
    
   // obtenerJason(); 
})
//obtenerJason()

function mostrarError(){
    const AgregarImagenYnombre=document.querySelector("#pokemonNyI"); 
    AgregarImagenYnombre.innerHTML= `<p class="msj-error">Pokemon no encontrado <br>!Ingrese de nuevo el número o nombre del pokemon!</p>`; 

    const AgregarInformacion=document.querySelector(".pokemonInfo"); 
    AgregarInformacion.innerHTML='';

    pokemonInput.value=""; 
}