 
    var SecuenciaID = null
    var imagen = 0
    var duracion = 1000
    
    {imagenes = new CreaArray(4)
    imagenes[1].src = "imagenes/alco.png" 
    imagenes[2].src = "imagenes/masca.png"
    imagenes[3].src = "imagenes/guan.png"
    imagenes[4].src = "imagenes/cie.jpg"
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
    