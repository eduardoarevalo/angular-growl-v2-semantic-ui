# angular-growl-v2-semantic-ui


1. En el modulo principal agregar, notificaciones.

Por ejemplo:

angular.module('filePortal', ['notificaciones'])


2. Incorporar la directiva growl en el modulo vista principal

Por ejemplo:

main.html

<div class="main container">
    <div growl></div>
    ....
</div>

3. Incorporar el grown en los controladores que van a utilizar notificaciones

Por ejemplo:

nombreModulo.controller('nombreControlador', ['$scope', 'growl', function ($scope, growl) {
  growl.error("Mensaje de la notificación de error", {title : 'Titulo de la notificación de error'});
  growl.success("Mensaje de la notificación de exito", {title : 'Titulo de la notificación de exito'});       
  growl.info("Mensaje de la notificación de información", {title : 'Titulo de la notificación de información'});
  growl.warning("Mensaje de la notificación de advertencia", {title : 'Titulo de la notificación de advertencia'});   
  // No necesariamente necesitan tener titulo por ejemplo
  growl.error("Mensaje de la notificación de error");
  growl.success("Mensaje de la notificación de exito");       
  growl.info("Mensaje de la notificación de información");
  growl.warning("Mensaje de la notificación de advertencia");
  
}]);
