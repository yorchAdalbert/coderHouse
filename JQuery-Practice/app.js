let isDark = 'false';

$(document).ready(function() {
    $('.boton').click(function() {
        if (isDark == 'false') {
            $('.background').css('background-color', 'black');
            $('.title').css('color', 'white');
            $('.boton').text('Cambiar a modo Normal');
            isDark = 'true';
        } else {
            $('.background').css('background-color', 'white');
            $('.title').css('color', 'black');
            $('.boton').text('Cambiar a modo Dark');
            isDark = 'false';
        }
    })
})