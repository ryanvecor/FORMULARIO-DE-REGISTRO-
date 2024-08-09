Este es un ejercicio de hacer un formulario

Se debe realizar validaciones a cada campo del formulario

Crear el archivo en un repositorio

Usar GIT

COMANDOS:

git init -> inicializar el repositorio

git status

git log

git add archivo.ext

git add .

git commit -m "mensaje"

# Pequeña lista de comandos Git (usando Markdown 🙃)

En este documento Markdown voy a enumerar algunos comandos de Git.

## Pasos para crear un repositorio de [Git]

![Imagen de git](https://git-scm.com/images/logo@2x.png)

* **git init**
* **git add .** (o git add archivo.txt)
* **git commit m- 'Agregar un mensaje sobre el commit'**
* **git config --list**: muestra la configuración del repositorio.
* **git show archivo.txt**: muestra los cambios de un archivo, y hace una comparación entre los cambios.
* **git diff 'codigo viejo 'codigo reciente'**: hace una camparativa entre esos 2 commits, los cambios entre cada uno.
* **git diff**: es para ver todos los cambios, trae los 'trae los codigo hexadecimales de los cambios'
* **git reset 'codigo hexadecimal' -hard/soft**: para volver a una versión anterior. Con -hard se pierden todos los commits hechos hasta ese punto. Con -soft se mantienen los cambios en el staging, se les pueden volver a hacer commit.
* **git checkout 'codigo hexadecimal' 'archivo.txt'**: trae una version vieja a la versión actual.
* **git checkout master 'archivo.txt'**: trae el master.

*Esta lista la tomé de referencia de los apuntes del amigo Roberto Ocando Morales.*


[Git]:https://git-scm.com/


Algunos comandos que pueden ayudar cuando colaboren con proyectos muy grandes de github:

    git log --oneline - Te muestra el id commit y el título del commit.
    git log --decorate - Te muestra donde se encuentra el head point en el log.
    git log --stat - Explica el número de líneas que se cambiaron brevemente.
    git log -p- Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
    git shortlog - Indica que commits ha realizado un usuario, mostrando el usuario y el titulo de sus commits.
    git log --graph --oneline --decorate y
    git log --pretty=format:"%cn hizo un commit %h el dia %cd" - Muestra mensajes personalizados de los commits.
    git log -3 - Limitamos el número de commits.
    git log --after=“2018-1-2” ,
    git log --after=“today” y
    git log --after=“2018-1-2” --before=“today” - Commits para localizar por fechas.
    git log --author=“Name Author” - Commits realizados por autor que cumplan exactamente con el nombre.
    git log --grep=“INVIE” - Busca los commits que cumplan tal cual está escrito entre las comillas.
    git log --grep=“INVIE” –i- Busca los commits que cumplan sin importar mayúsculas o minúsculas.
    git log – index.html- Busca los commits en un archivo en específico.
    git log -S “Por contenido”- Buscar los commits con el contenido dentro del archivo.
    git log > log.txt - guardar los logs en un archivo txt



¿Cómo funciona Git Reset en tu flujo de trabajo?

git reset permite moverte entre diferentes commits para deshacer o rehacer cambios. Git guarda todos lo nuevo del repositorio como commits, que son instantáneas del estado del código en un momento dado y existen variaciones de este comando.
Variaciones de Git Reset

    git reset --soft: Borra el historial y los registros de Git de commits anteriores, pero guarda los cambios en Staging para aplicar las últimas actualizaciones a un nuevo commit.
    git reset --hard: Deshace todo, absolutamente todo. Toda la información de los commits y del área de staging se elimina del historial.
    git reset --mixed: Borra todo, exactamente todo. Toda la información de los commits y del área de staging se elimina del historial.
    git reset HEAD: El comando git reset saca archivos del área de staging sin borrarlos ni realizar otras acciones. Esto impide que los últimos cambios en estos archivos se envíen al último commit. Podemos incluirlos de nuevo en staging con git add si cambiamos de opinión.

Ten en cuenta que, si deshaces commits en un repositorio compartido en GitHub, estarás cambiando su historia y esto puede causar problemas de sincronización con otros colaboradores.
¿Qué es git reset HEAD?

git reset HEAD es un comando que te permite revertir los cambios que ya habías preparado para subir, y moverlos de vuelta a tu proyecto. Con este comando puedes cancelar los cambios que ya habías agregado, para que puedas revisarlos, modificarlos o deshacerlos antes de confirmarlos con un commit.
Git rm

Por otro lado, git rm es un comando que nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Para recuperar el archivo eliminado, necesitamos retroceder en la historia del proyecto, recuperar el último commit y obtener la última confirmación antes de la eliminación del archivo.

Es importante tener en cuenta que git rm no puede usarse sin evaluarlo antes. Debemos usar uno de los flags siguientes para indicarle a Git cómo eliminar los archivos que ya no necesitamos en la última versión del proyecto.
Variaciones de Git rm

    git rm --cached: Elimina archivos del repositorio local y del área de staging, pero los mantiene en el disco duro. Deja de trackear el historial de cambios de estos archivos, por lo que quedan en estado untracked.
    git rm --force: Elimina los archivos de Git y del disco duro. Git guarda todo, por lo que podemos recuperar archivos eliminados si es necesario (empleando comandos avanzados).

¡Al usar git rm lo que haremos será eliminar este archivo completamente de git!
¿Cuál es la diferencia entre git rm y git reset Head?

La diferencia principal entre git rm y git reset HEAD radica en que git rm elimina archivos del repositorio y de la historia del proyecto, mientras que git reset saca los cambios del área de preparación y los mueve del espacio de trabajo, sin afectar la historia del repositorio.


