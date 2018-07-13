const except = require( 'chai' ) .expect,
      platzom = require( '../dist/src/platzom.js' ) .default;           // Lo buscamos en la ruta de distribución

describe( '#platzom', function() {
    // Para correr un test debe describirse
    it( 'Regla 1: Si la palabra termina en \'ar\', se le quitan estos dos caracteres', function() {
        const translation = platzom( 'Programar' );         // Entrada del test
        except( translation ) .to .equal( 'Program' );      // Salida del test
    });
    it( 'Regla 2: Si la palabra inicia con Z, sele añade \'pe\' al final', function() {
        const translation = platzom( 'Zorro' ),             // Entrada del test
              translation2 = platzom( 'Zarar' );           // Entrada del test

        except( translation ) .to .equal( 'Zorrope' );       // Salida del test
        except( translation2 ) .to .equal( 'Zarppe' );       // Salida del test
    });
    it( 'Regla 3: Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión', function() {
        const translation = platzom( 'abecedario' );        // Entrada del test
        except( translation ) .to .equal( 'abece-dario' );  // Salida del test
    });
    it( 'Regla 4: Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra  intercalando mayúsculas y minúsculas', function() {
        const translation = platzom( 'sometemos' );         // Entrada del test
        except( translation ) .to .equal( 'SoMeTeMoS' );    // Salida del test
    });
});
