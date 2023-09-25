# PruebaCotizacionAndresCarrasquero
RESPONDIENDO LAS PREGUNTAS REALIZADAS:

# ¿Qué medidas tomaría para asegurar la seguridad y la validación de datos en su aplicación?
normalmente lo que utilizo son funciones validadoras, al momento de enviar datos desde el front, al back, y tambien validar los datos 1 por 1 cuando llegan al backend antes de guardarlos en la base de datos, en caso de dar error, retonar al usuario algun mensaje, ademas utilizar typescript para mejorar la mantenibilidad del codigo


# Explique la diferencia entre una base de datos relacional y una base de datos NoSQL. ¿Cuándo usaría uno u otro?
las bases de datos relacionales se estructuran en tablas con columnas y filas, los datos se estructuran antes de guardarse, se usan en apps en las cuales las estructuras de datos son menos variables, o no tienden a cambiar con el tiempo, por otro lado las bd noSql permiten flexibilizar de una manera mas rapida los datos, y sirven para apps que sus estructuras de datos y tablas varian constantemente


# ¿Qué patrones de diseño conoce, mencione y explique brevemente los que conoce?
No la verdad no conozco, pero si se algunas tecnicas o practicas que se utilizan al escribir el codigo, estructurar los archivos y carpetas entre otros.

# ¿Cuáles son los métodos usados en la interfaz RESTful y explique cada uno?
los mas usados son:

GET = sirve para hacer peticiones de datos solamente, en ella se pueden pasar parametros de busqueda que se llaman query
PUT = put permite actualizar datos, este recibe un body con parametros que pueden ser mucho mas pesados que los querys de los GET
POST = POST sirve para crear datos, y funciona igual que put
DELETE = DELETE sirve para eliminar datos, en este caso pueden recibir ids en la url con el objeto params
