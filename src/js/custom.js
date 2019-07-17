$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        
        $('#sidebar').toggleClass('active');

        
        var content = $('#sidebar')[0].clientWidth;

        console.log(content)

        if(content == 250)
        {
            $('#content').removeClass('content').addClass('content-toggle')
            $('#nameUser').hide();
        }
        if(content < 100){
            $('#content').removeClass('content').addClass('content-toggle')
            $('#nameUser').hide();
        }
        if(content == 100 ){
            $('#content').removeClass('content-toggle').addClass('content')
            $('#nameUser').show();
        }
    });




});