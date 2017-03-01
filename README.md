# Práctica: Primeros pasos en NodeJS

Enlace a la [descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/practicas/practicatareasiniciales2.html)

# Desarrollo de Sistemas Informáticos

Enlace al [campus virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1136)

# Versión en IAAS

El concepto de Infraestructura como Servicio (IaaS, Infrastructure as a Service) es uno de los tres modelos fundamentales en el campo del cloud computing, junto con el de Plataforma como Servicio (PaaS, Platform as a Service) y el de Software como Servicio (SaaS, Software as a Service).

Enlace al gitbook desplegado en el [IAAS de la ULL (Aitor)](http://10.6.128.132:8080/)

Enlace al gitbook desplegado en el [IAAS de la ULL (Néstor)](http://10.6.128.125:8080/)

Enlace al gitbook desplegado en el [IAAS de la ULL (Omar)](http://10.6.128.26:8080/)

# Versión HEROKU

[Heroku](https://devcenter.heroku.com/categories/learning) es una plataforma como servicio de computación en la Nube que soporta distintos lenguajes de programación.

Enlace al gitbook desplegdo en [Heroku](http://dsipractica2.herokuapp.com/)

# Funciones de los scripts JS

Hemos hecho un port de los scripts realizados en Shell a JavaScript, con el fin de tener unos scripts más sencillos de comprender y universales.

## contributors.js
Script que tiene como función principal recopilar los contribuyentes (commits) a través de un archivo JSON previamente creado mediante otro script (git-log.js)

```javascript
let exec = require('child_process').exec
let mod = require('fs')
```
Hacemos uso de dos módulos, [child process](https://nodejs.org/api/child_process.html) y [fs](https://nodejs.org/api/fs.html), para conseguir recoger la ejecución del comando **git log** por shell, (*inicializado en el script git-log.js*), además de usar operaciones varías con ficheros.

```javascript
child =exec ('node git-log.js',(error,stdout,stderr) => {
```
Se realiza la ejecución del script **git-log.js**, el cual realiza la ejecución del comando *git log* en shell, tomando todos los commit de los usuarios contribuyentes en el proyecto.

```javascript
let content = mod.readFileSync("contributors.json");
```
Se accede al fichero **contributors.json*, donde se aloja toda la información de los commit, para más tarde alojar esta información en el archivo MAINTAINERS (si no está creado, lo crea automáticamente) con un *append*

```javascript
mod.appendFile("../MAINTAINERS","<Autor: "+jsonContent[i].author+">\n"+"Last Commit: "+jsonContent[i].date+" ("+jsonContent[i].message+")"+"\n"+" "+"\n",(err) => {
```

## deploy-gitbook.js
Script que tiene como función, como su nombre indica, desplegar un libro en gh-pages, formado por los archivos *.html* alojados en la carpeta [txt](https://github.com/ozzrocker95/primeros-pasos-en-nodejs-aitor-nestor-omar-35l2/tree/master/txt)

```javascript
let path = require('path')
let ghpages = require('gh-pages')
```
En este script necesitamos utilizar dos módulos, [path](https://nodejs.org/api/path.html) y [gh-pages](https://www.npmjs.com/package/gh-pages)

```javascript
ghpages.publish(path.join(__dirname,'../_book'),(err) => {
```
Este script lo único que realiza es hacer un *publish* del contenido del directorio **_book**, alojado en la rama de *gh-pages*

## deploy-wiki.js
Script para desplegar la wiki de manera automatizada, las wikis proporcionan un lugar en el repositorio para establecer juntos el mapa de ruta del proyecto, mostrar el estado actual y documentar mejor el software.

```javascript
require('shells/global');
```
Usamos el módulo [shelljs](https://github.com/shelljs/shelljs) que es una implementación portátil (Windows / Linux / OS X) de comandos de shell de Unix en la parte de NodeJS
Como por ejemplo:

```javascript
 rm('-rf','.git');
```
Creamos una variable 'REPO' para acceder a la wiki del repositorio, a través del __package.json__.
Desplegamos la wiki a través de git


## generate-gitbook.js
Script que realiza un *build* en GitBook, es decir, crea el website estático para un libro en GitBook.

```javascript
let exec = require('child_process').exec
let child
```
En este caso, solo hacemos uso del módulo [child process](https://nodejs.org/api/child_process.html) para poder recoger el resultado de la ejecución del comando por shell **gitbook build**

```javascript
child =exec ("../node_modules/.bin/gitbook build ../txt ../_book",(error,stdout,stderr)
```
Se realiza la ejecución del comando **gitbook build** de todos los archivos *.html de la carpeta **_book**

## generate-wiki.js
Script que crea (en el caso de que no esté creada) la wiki del repositorio, donde se mostrará de forma más detallada la documentación del software en cuestión.

```javascript
var path = require('path');

var fs = require('fs-extra');
var async = require('async');
```
Se hace uso de los módulos [path](https://nodejs.org/api/path.html), [fs-extra](https://www.npmjs.com/package/node-fs-extra) y [async](https://www.npmjs.com/package/async)

```javascript
fs.mkdir(output, function() {
        // if it dir exists already, just override content
        generateWiki(input, output, function(err) {
            if(err) {
                return console.error(err);
            }

            console.log('generated wiki');
```
Básicamente, lo que realiza es comprobar que la wiki no está creada, y si no, la crea.

```javascript
function generateWiki(input, output, cb) {
```
Esta función crea los elementos que forman la wiki *(Ej. README.md, SUMMARY.md)*

## version.js
Script que trabaja con el número de versión en el *package.json*, es decir, puede aceptar la modificación de la versión en el mismo o simplemente mostrar el número de versión actual.

```javascript
let mod = require('fs')
const readline = require('readline');
let jsonfile = require('jsonfile')
```
Para este script, hacemos uso de los módulos [fs](https://nodejs.org/api/fs.html), [readline](https://nodejs.org/api/readline.html) y [jsonfile](https://www.npmjs.com/package/jsonfile), los cuales nos permiten estar trabajando con diversos archivos *(package.json)*

```javascript
case 'm':
            rl.question('Introduzca la version ', (answer) => {
                let content = mod.readFileSync("../package.json");
                let jsonContent = JSON.parse(content);
                console.log("Version actual: "+jsonContent.version)
                console.log("La version introducida es: "+answer);
```
La primera opción permite al usuario poder modificar la versión en el *package.json*, así como posteriormente mostrarle la versión modificada.

```javascript
case 'v':

          const jsonContent = require('../package.json')
          console.log("Version actual: " + jsonContent.version)
```
La segunda opción del script sería mostrar al usuario la versión actual incluida en el *package.json*

## git-log.js
Script que realiza la ejecución del comando por shell **git log**, con el fin de recopilar y mostrar los commit de los contribuyentes del proyecto, para posteriormente pasar su resultado al script **contributors.js**

```javascript
let exec = require('child_process').exec
```
Como concretamos anteriormente, se hace uso del módulo [child process](https://nodejs.org/api/child_process.html) para permitir la ejecución de comandos por shell.

```javascript
child =exec ('git log --pretty=format:\'{%n  \"commit\": \"%H\",%n  \"author\": \"%aN <%aE>\",%n  \"date\": \"%ad\",%n  \"message\": \"%f\"%n},\' $@ | perl -pe \'BEGIN{print \"[\"}; END{print \"]\n\"}\' | perl -pe \'s/},]/}]/\n\'' ,(error,stdout,stderr) => {
```
Se realiza un **exec** con la ejecución del comando *git log*, con el formato que se desea mostrar el resultado de la ejecución.


# Autores
* [Aitor Bernal Falcón](https://chinegua.github.io/)
* [Néstor García Moreno](https://nestor-gm.github.io/)
* [Omar Mendo Mesa](https://ozzrocker95.github.io/)
