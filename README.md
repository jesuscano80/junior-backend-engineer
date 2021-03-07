#Forest and Fire


Hola,

  Realice dos versiones de las funciones, y he adjuntado los dos ficheros en el proyecto:
  
  **V1** => En la primera versión fui directo a que funcionara,
  y cree unos For anidados para crear la matriz, y posteriormente más bucles anidados que verificaban si había fuegos y tenían al lado árboles. 
  Funcionaba perfecto para mis pruebas visuales en matrices pequeñas, pero claro al generar mátrices grandes ya me podía ir a tomar un café, 
  para que procesara todos los datos, por eso intenté pensarlo de otra manera.
  
  **V2**=> Medidas para mejorar velocidad:
  A la hora de generar los datos de la matriz, ya se guardan los árboles y los fuegos en dos arrays de objetos.
  Así se evita tener que recorrer todo y solo se comprueba que esos fuegos tengan arboles al lado.
  En las comprobaciones se van disminuyendo los arrays, van quedando menos árboles porque se queman. Y los fuegos del siguiente turno pasan a ser
  solo los árboles que se acaban de quemar, porque los fuegos anteriores o ya han quemado, o no quemaban nada. 
  
  Si necesitan alguna aclaración no duden en escribirme!
  
