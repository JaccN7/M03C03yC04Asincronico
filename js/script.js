//Parte 3: JavaScript
$(document).ready(function () {

    //deberá llamar a la Función getJSON. Para eso, le pasará la URL de la API como primer argumento y, como segundo, una Función Anónima.
    $.getJSON("https://api.chucknorris.io/jokes/random", function (data) {
        $(".chiste").text(data.value);  
    });

    //Luego, deberá aplicar un evento para que cada vez que se haga click en el botón "Actualizar", se presente un nuevo chiste dentro del <h2>.
    $(".button").click(function () {
        location.reload(true);
    });
    
}
);