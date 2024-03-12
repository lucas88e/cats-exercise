const enunciado = document.createElement("h1")
const boton = document.getElementById("button")
const contenedor = document.createElement("div")
const body = document.body;
body.appendChild(enunciado)
boton.innerHTML = "ENVIARSE"
body.appendChild(boton)
body.appendChild(contenedor)
console.log(document.body)
let contador = 0
boton.addEventListener("click", () => {
    api()
})

function api() { fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((response) => {
    console.log(response)
    if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
})
.then((data) => {
   contenedor.innerHTML=`<img src =${(data[0].url)}>`
}
)
.catch ((error)=> {
    console.log('Error al obtener los datos', error);
  });
}


// const apiCat = async () => {
//     try {
//       const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
//       if (!response.ok) {
//         throw new Error('Ha surgido un error', response.status);
//       }
//       const data = await response.json();
//       console.log(data[0].url); // PROBAR
//     } catch (error) {
//       console.log('Error al obtener los datos', error);
//     }
//   };
//   const template = (url, cat) => {
//     users.forEach((user) => {
//      console.log(cat.url);
//     });
//   };

//   apiCat.then((data)=>template("img", data))