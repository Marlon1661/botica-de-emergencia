  
    var SecuenciaID = null
    var imagen = 0
    var duracion = 1000
    
    {imagenes = new CreaArray(4)
    imagenes[1].src = "imagenes/alco.png" 
    imagenes[2].src = "imagenes/masca.png"
    imagenes[3].src = "imagenes/guan.png"
    imagenes[4].src = "imagenes/cie.png"
    }
    
    function CreaArray(n) {
      this.length = n
      for (var i = 1; i<=n; i++) {
        this[i] = new Image()
      }
      return this
    }

    function MostrarSecuencia() {
      {
        document.images["secuencia"].src = imagenes[imagen].src
        imagen++
        if ( imagen == 5 )
          imagen = 1
      }
      SecuenciaID = setTimeout("MostrarSecuencia()", duracion)
      SecuenciaEjecutandose = true
    }
    
    function IniciarSecuencia() {
      imagen = 1
      MostrarSecuencia()
    }
    //Escuchamos el evento load del window y disparamos la funcion que le pasamos como callback (precargaImagenes).
window.addEventListener('load', precargaImagenes);

function precargaImagenes(){

  var img1 = new Image();
  img1.src = 'img/foto-secundaria-.jpg';

  var img2 = new Image();
  img2.src = 'img/foto-secundaria-2.jpg';

  var img3 = new Image();
  img3.src = 'img/foto-secundaria-3.jpg';


  //Cuando se terminan de cargar las imágenes se le agrega la clase "close" a #wrap-preload.
  var preload = document.getElementById('wrap-preload');

  preload.classList.add('close');

  console.log('Sitio cargado!');

}