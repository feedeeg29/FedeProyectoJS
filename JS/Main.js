
var total= 0

const articulo = [];
    articulo.push("OFERTAUNO");
    articulo.push("OFERTADOS");
    articulo.push("OFERTATRES");
    articulo.push("OFERTACUATRO");
    articulo.push("OFERTACINCO");
    articulo.push("OFERTASEIS");
    articulo.push("OFERTASIETE");
    articulo.push("OFERTAOCHO");
    articulo.push("OFERTANUEVE");
    articulo.push("OFERTADIEZ");
    articulo.push("OFERTAONCE");
    articulo.push("OFERTADOCE");
    articulo.push("OFERTATRECE");
    articulo.push("OFERTACATORCE");
    articulo.push("OFERTAQUINCE");
    articulo.push("VERANOUNO");
    articulo.push("VERANODOS");
    articulo.push("VERANOTRES");
    articulo.push("VERANOCUATRO");
    articulo.push("VERANOCINCO");
    articulo.push("VERANOSEIS");
    articulo.push("VERANOSIETE");
    articulo.push("VERANOOCHO");
    articulo.push("VERANONUEVE");
    articulo.push("VERANODIEZ");
    articulo.push("VERANOONCE");
    articulo.push("VERANODOCE");
    articulo.push("VERANOTRECE");
    articulo.push("VERANOCATORCE");
    articulo.push("VERANOQUINCE");
    articulo.push("CALZADOUNO");
    articulo.push("CALZADODOS");
    articulo.push("CALZADOTRES");
    articulo.push("CALZADOCUATRO");
    articulo.push("CALZADOCINCO");
    articulo.push("CALZADOSEIS");
    articulo.push("CALZADOSIETE");
    articulo.push("CALZADOOCHO");
    articulo.push("CALZADONUEVE");
    articulo.push("CALZADODIEZ");
    articulo.push("CALZADOONCE");
    articulo.push("CALZADODOCE");
    articulo.push("CALZADOTRECE");
    articulo.push("CALZADOCATORCE");
    articulo.push("CALZADOQUINCE");

const precio = [];
    precio.push(1500);
    precio.push(1000);
    precio.push(900);
    precio.push(20000);
    precio.push(300);
    precio.push(1200);
    precio.push(1300);
    precio.push(1290);
    precio.push(955);
    precio.push(800);
    precio.push(2200);
    precio.push(1750);
    precio.push(2000);
    precio.push(950);
    precio.push(1825);//Ofertas
    precio.push(3250);
    precio.push(925);
    precio.push(2800);
    precio.push(1500);
    precio.push(2100);
    precio.push(1850);
    precio.push(935);
    precio.push(900);
    precio.push(1300);
    precio.push(1299);
    precio.push(1650);
    precio.push(2920);
    precio.push(1950);
    precio.push(2300);
    precio.push(1900);//Verano2021
    precio.push(15000);
    precio.push(12500);
    precio.push(21000);
    precio.push(19500);
    precio.push(18200);
    precio.push(17250);
    precio.push(25000);
    precio.push(32000);
    precio.push(11100);
    precio.push(22000);
    precio.push(14000);
    precio.push(15750);
    precio.push(29232);
    precio.push(16540);
    precio.push(15412);

const seccion = [];
    seccion.push("ofertas");
    seccion.push("verano2021");
    seccion.push("calzado");

class Producto{
    constructor (id, articulo, precio, seccion){
        this.id = parseInt(id);
        this.articulo = articulo;
        this.precio = parseInt(precio);
        this.seccion = seccion;}}

const productos = [];
    productos.push (new Producto("001", articulo[0], precio[0], seccion[0]));
    productos.push (new Producto("002", articulo[1], precio[1], seccion[0]));
    productos.push (new Producto("003", articulo[2], precio[2], seccion[0]));
    productos.push (new Producto("004", articulo[3], precio[3], seccion[0]));
    productos.push (new Producto("005", articulo[4], precio[4], seccion[0]));
    productos.push (new Producto("006", articulo[5], precio[5], seccion[0]));
    productos.push (new Producto("007", articulo[6], precio[6], seccion[0]));
    productos.push (new Producto("008", articulo[7], precio[7], seccion[0]));
    productos.push (new Producto("009", articulo[8], precio[8], seccion[0]));
    productos.push (new Producto("010", articulo[9], precio[9], seccion[0]));
    productos.push (new Producto("011", articulo[10], precio[10], seccion[0]));
    productos.push (new Producto("012", articulo[11], precio[11], seccion[0]));
    productos.push (new Producto("013", articulo[12], precio[12], seccion[0]));
    productos.push (new Producto("014", articulo[13], precio[13], seccion[0]));
    productos.push (new Producto("015", articulo[14], precio[14], seccion[0]));
    productos.push (new Producto("016", articulo[15], precio[15], seccion[1]));
    productos.push (new Producto("017", articulo[16], precio[16], seccion[1]));
    productos.push (new Producto("018", articulo[17], precio[17], seccion[1]));
    productos.push (new Producto("019", articulo[18], precio[18], seccion[1]));
    productos.push (new Producto("020", articulo[19], precio[19], seccion[1]));
    productos.push (new Producto("021", articulo[20], precio[20], seccion[1]));
    productos.push (new Producto("022", articulo[21], precio[21], seccion[1]));
    productos.push (new Producto("023", articulo[22], precio[22], seccion[1]));
    productos.push (new Producto("024", articulo[23], precio[23], seccion[1]));
    productos.push (new Producto("025", articulo[24], precio[24], seccion[1]));
    productos.push (new Producto("026", articulo[25], precio[25], seccion[1]));
    productos.push (new Producto("027", articulo[26], precio[26], seccion[1]));
    productos.push (new Producto("028", articulo[27], precio[27], seccion[1]));
    productos.push (new Producto("029", articulo[28], precio[28], seccion[1]));
    productos.push (new Producto("030", articulo[29], precio[29], seccion[1]));
    productos.push (new Producto("031", articulo[30], precio[30], seccion[2]));
    productos.push (new Producto("032", articulo[31], precio[31], seccion[2]));
    productos.push (new Producto("033", articulo[32], precio[32], seccion[2]));
    productos.push (new Producto("034", articulo[33], precio[33], seccion[2]));
    productos.push (new Producto("035", articulo[34], precio[34], seccion[2]));
    productos.push (new Producto("036", articulo[35], precio[35], seccion[2]));
    productos.push (new Producto("037", articulo[36], precio[36], seccion[2]));
    productos.push (new Producto("038", articulo[37], precio[37], seccion[2]));
    productos.push (new Producto("039", articulo[38], precio[38], seccion[2]));
    productos.push (new Producto("040", articulo[39], precio[39], seccion[2]));
    productos.push (new Producto("041", articulo[40], precio[40], seccion[2]));
    productos.push (new Producto("042", articulo[41], precio[41], seccion[2]));
    productos.push (new Producto("043", articulo[42], precio[42], seccion[2]));
    productos.push (new Producto("044", articulo[43], precio[43], seccion[2]));
    productos.push (new Producto("045", articulo[44], precio[44], seccion[2]));


function conIva(iva) {
    return (precio) => precio * iva;}
const subTotal= conIva(1.21);

// inicio del código del carrito
$: productoEntrada = prompt("Ingrese el articulo solicitado o presione ENTER para finalizar");
$: existeArticulo = articulo.includes(productoEntrada.toUpperCase());
$: indexArticulo = articulo.indexOf(productoEntrada.toUpperCase());
function calculo (){
    let valor= precio[indexArticulo];
    total= total + 0 + valor * 1.21;}
    while (productoEntrada != ''){
        if (existeArticulo){
                if (productoEntrada = articulo[indexArticulo]){
                    alert ("El articulo "  + articulo[indexArticulo] + " Con el precio $" + precio[indexArticulo] + " Mas IVA subtotal $" + subTotal(precio[indexArticulo]));
                    console.log("El articulo "  + articulo[indexArticulo] + " Con el precio $" + precio[indexArticulo] + " Mas IVA. subtotal $" + subTotal(precio[indexArticulo]));}
                if (productoEntrada != articulo[indexArticulo]){
                        console.log("Articulo Sin Stock");
                        alert("Articulo sin Stock");}}
    $: productoEntrada = prompt("Ingrese el articulo solicitado o presione ENTER para finalizar");
    console.log(precio[indexArticulo]);
        calculo();}
    alert( 'Tu Total es de ' + total);
    console.log('Tu Total es de ' + total);

let botonEjemplo= document.querySelectorAll("button");
console.log(botonEjemplo);

function respuestaClick(){
    console.log('Hola Lindo');
for(const boton of botonEjemplo){
botonEjemplo.addEventListener('click',respuestaClick);
console.log(botonEjemplo.addEventListener);
}}
// Fin del código del carrito
// esta parte del código esta comentada debido a que no resulta relevante para la funcionalidad del mismo.
    
    let idPrompt=prompt("Ingrese el Id del articulo solicitado")
    const encontrado= productos.find(producto => producto.id== idPrompt)
    console.log(encontrado);
    if(encontrado){
        console.log(encontrado.articulo);
    }else{
        console.log("El articulo no se ha encontrado");
    }
    let valorPrompt = prompt('Ingrese el precio maximo deseado');
    const baratos = productos.filter(producto => producto.precio <=  valorPrompt );

    if(baratos){
        console.log(baratos);
    } else{
        console.log("No hay productos con ese precio");
        alert("no hay productos con ese precio")
    }
/*let divProd = document.getElementById("divSaludo")
let saludo = document.createElement("h1");
let explicacion = document.createElement("p")
saludo.innerHTML = "<h2 id='letras'> Hola Luis!</h2>" ;
divProd.append(saludo);
let miSelect = document.getElementById("selectPrueba");
for (const productos of articulo) {
miSelect.innerHTML +="<option>" + productos+"</option>";}
let productis = { id: '007', nombre: 'Bond, James', precio: 'impagable'};
let productoss = document.createElement("p");
let contenedor = document.createElement("div");
contenedor.innerHTML = `<hr id= 'barra'>
                        <h2 id='letras'> id: ${productis.id} </h2>
                        <hr id= 'barra'>
                        <p id='letras'> Producto: ${productis.nombre} </p>
                        <hr id= 'barra'>
                        <b id= 'letras'> $ ${productis.precio} </b>`;
divProd.append(contenedor);*/
