# Platzom

Platzom es un idioma inventado que fue creado para el [Curso de fundamentos de JavaScript](https://platzi.com/js) de Platzi.
Este es un ejercicio propuesto en el curso y que se usa para la creación de paquetes en NPM

## Descripción del idioma

 - Regla 1: Si la palabra termina en 'ar', se le quitan estos dos caracteres
 - Regla 2: Si la palabra inicia con Z, sele añade 'pe' al final
 - Regla 3: Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión
 - Regla 4: Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra  intercalando mayúsculas y minúsculas

 ## Instrucciones de Instalación

```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

platzom( 'Programar' )   // Program
platzom( 'Zorro' )       // Zorrope
platzom( 'Zarpar' )      // Zarppe
platzom( 'abecedario' )  // abece-dario
platzom( 'sometemos' )   // SoMeTeMoS
```

## Créditos
 - [Sacha Lifszyc](https://twitter.com/@lifszyc)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
