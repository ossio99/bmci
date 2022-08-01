$(document).ready(function() {
    var navpos = $('#mainNav').offset();
    $('#logoNavbar').hide();
    $('#titleNavbar').show();
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
            $('#mainNav').addClass('navbar-fixed-top');
            $('#mainNav').removeClass('navbar-static-top');
            $('#logoNavbar').show();
            $('#titleNavbar').hide();
        }
        else {
            $('#mainNav').removeClass('navbar-fixed-top');
            $('#mainNav').addClass('navbar-static-top');
            $('#logoNavbar').hide();
            $('#titleNavbar').show();
        }
    });

    //Cargado de paginas parciales
    $('#Principal').load('Pages/principal.html');
    $('#QuienesSomos').load('Pages/quienesSomos.html');
    $('#DondeEstamos').load('Pages/dondeEstamos.html');
    $('#Contacto').load('Pages/contacto.html');
    $('#BMCIdefinicion').load('Pages/BMCIdefinicion.html');
    $('#BMCIexhorto').load('Pages/BMCIexhorto.html');
    $('#BMCIintroduccion').load('Pages/BMCIintroduccion.html');
    $('#BMCIpresentacion').load('Pages/BMCIpresentacion.html');
    $('#BMCIquehace').load('Pages/BMCIquehace.html');
    $('#BMCIquenohace').load('Pages/BMCIquenohace.html');
    $('#Tratamiento').load('Pages/Tratamiento.html');
    $('#Enfermedades').load('Pages/Enfermedades.html');

    //rutas
    var root = document.location.origin+'/BMCI';
    //var indexUrl = root+'/index.html';
    var indexUrl = '#/Principal';

    $('#logoNavbar').attr("href", indexUrl);
    $('#titleNavbar').attr("href", indexUrl);
    $('#logo').attr("href", indexUrl);
    $('#linkQuienesSomos').attr("href", "#/QuienesSomos");
    $('#linkDondeEstamos').attr("href", "#/DondeEstamos");
    $('#linkContacto').attr("href", "#/Contacto");
    $('#linkBMCIDefinicion').attr("href", "#/BMCIDefinicion");
    $('#linkBMCIExhorto').attr("href", "#/BMCIExhorto");
    $('#linkBMCIIntroduccion').attr("href", "#/BMCIIntroduccion");
    $('#linkBMCIPresentacion').attr("href", "#/BMCIPresentacion");
    $('#linkBMCIQueHace').attr("href", "#/BMCIQueHace");
    $('#linkBMCIQueNoHace').attr("href", "#/BMCIQueNoHace");
    $('#linkTratamiento').attr("href", "#/Tratamiento");
    $('#linkEnfermedades').attr("href", "#/Enfermedades");

    //routing
    var sammyBMCI= $.sammy(function () {
        this.get('#/Principal', function (context) {
            $(".partialView").hide();
            $("#Principal").show();
        });

        this.get('#/QuienesSomos', function (context) {
            $(".partialView").hide();
            $("#QuienesSomos").show();
        });

        this.get('#/DondeEstamos', function (context) {
            $(".partialView").hide();
            $("#DondeEstamos").show();
        });

        this.get('#/Contacto', function (context) {
            $(".partialView").hide();
            $("#Contacto").show();
        });

        this.get('#/BMCIExhorto', function (context) {
            $(".partialView").hide();
            $("#BMCIexhorto").show();
        });

        this.get('#/BMCIDefinicion', function (context) {
            $(".partialView").hide();
            $("#BMCIdefinicion").show();
        });

        this.get('#/BMCIIntroduccion', function (context) {
            $(".partialView").hide();
            $("#BMCIintroduccion").show();
        });

        this.get('#/BMCIPresentacion', function (context) {
            $(".partialView").hide();
            $("#BMCIpresentacion").show();
        });

        this.get('#/BMCIQueHace', function (context) {
            $(".partialView").hide();
            $("#BMCIquehace").show();
        });

        this.get('#/BMCIQueNoHace', function (context) {
            $(".partialView").hide();
            $("#BMCIquenohace").show();
        });

        this.get('#/Tratamiento', function (context) {
            $(".partialView").hide();
            $("#Tratamiento").show();
        });

        this.get('#/Enfermedades', function (context) {
            $(".partialView").hide();
            $("#Enfermedades").show();
        });

    });

    $(function () {
        sammyBMCI.run("#/Principal");
    });
});
