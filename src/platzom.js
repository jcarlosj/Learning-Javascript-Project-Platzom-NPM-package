export default function platzom( str ) {

   let translation = str;

   // Regla 1: Si la palabra termina en 'ar', se le quitan estos dos caracteres
   if( str .toLowerCase() .endsWith( 'ar' ) ) {
      translation = str .slice( 0, -2 ); // Desde el inicio y dos caracteres antes del final
   }

   // Regla 2: Si la palabra inicia con Z, sele añade 'pe' al final
   if( str .toLowerCase() .startsWith( 'z' ) ) {
      translation += 'pe';
   }

   // Regla 3: Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión
   if( translation .length >= 10 ) {
      const firtsHalf = translation .slice( 0, Math .round( translation .length / 2 ) ),
            secondHalf = translation .slice( Math .round( translation .length / 2 ) ); // Si no se le envia segundo parámetro es hasta el final

      translation = `${ firtsHalf }-${ secondHalf }`;
   }

   // Regla 4: Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra  intercalando mayúsculas y minúsculas
      const reverse = (str) => str .split( '' ) .reverse() .join( '' ); // Convierte la palabra en un array
      const intercalateLowerCase = function( str ) {
         const length = str .length;
         let translation = '',
         capitalize = true;

         for( let i = 0; i < length; i++ ) {
            const char = str .charAt( i ); // Extrae el caracter del índice indicado a la palabra

            translation += capitalize ? char .toUpperCase() : char .toLowerCase();
            capitalize = !capitalize; // Cambia el valor de true a false
         }

         return translation;
      }

   // Valida si es un palíndromo
   if( str == reverse( str ) ) {
      return intercalateLowerCase( str );
   }

   return translation;
}
