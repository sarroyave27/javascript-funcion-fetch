/*fetch('1.txt')//donde esta la informacion
.then(function(response){
    return response.text();
})//que clase de informacion estoy pidiendo
 
.then(function (data){
    console.log(data);
})//extrae los datos de busqueda-consumo

.catch(function(error){
    console.log(`hemos tenido un error: ${error}`);
})
fetch('datos.txt')
.then((response)=>{return response.text()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(`hemos tenido un error: ${error}`)})

let url = 'datos.txt';
fetch(url)
.then(response=>response.text())
.then(data=>{
    let inf = document.getElementById('data');
    inf.innerHTML = data;
})
.catch(error=>console.log(`hemos tenido un error: ${error}`))*/

let url = "datos.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let imp = document.getElementById("data");
    //imp.innerHTML = (`${data[0].nombre} ${data[0].apellido} y ${data[1].nombre} ${data[1].apellido} `)

    let mensaje = "";

    for (let index = 0; index < data.length; index++) {
      mensaje = (`${mensaje} ${data[index].nombre} ${data[index].apellido}`);
    }
    imp.innerHTML = mensaje;
  })
.catch(error=>console.log(`hemos tenido un error ${error}`));
