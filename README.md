# Crud_Usuarios_Node

El proyecto consiste en el  desarrollo de una Api REST con un Crud de Usuarios, el cual uso como servidor Node Js
*  Para cada verbo REST se tendrá un endpoint
*  Al momento de persistir la informacion se utiliza como motor de base de datos MySql.
*  Cada verbo REST tiene implementado status code.

Configuración de la base de datos:
* Dentro de la carpeta del proyecto ubicado en la siguiente ruta
> src/sql/database.sql
* Se encuentra el código en sql para crear la base de datos.

Configuración de la conexión
* Dentro de la carpeta del proyecto ubicado en la siguiente ruta
> src/config/dbConnect.js
* Se debe cambiar el usuario y password por el cual tengan en sus servidores locales.

Ejecutar la aplicación:
* Luego de obtener el repositorio, se debe ejecutar la terminal o consola y se ejecuta el comando
> npm start
* El cual retorna el siguiente mensaje 
> Servidor Funcionando En el Puerto:  3000
* Posteriormente se abre el navegador y se escribe
> localhost:3000 o el numero de puerto que salga en la consola

Visualizando la aplicación:
* Cuando la aplicación se este ejecutando se podra visualizar la sigiuente interfaz

* Vista de crear usuario
![alt text](https://i.imgur.com/FTQuzxO.png "User/create")

* Vista de consultar usuario
![alt text](https://i.imgur.com/C2UdXH3.png "User/read")
