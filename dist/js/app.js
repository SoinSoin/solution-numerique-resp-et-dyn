$(document).ready(function () {

    //fonction permettant l'utilisation de fullpage

    $('#fullpage').fullpage({
        scrollBar: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });
//plugin de la date
    moment.locale('fr');
    $("#date").text(moment().format('LL'));


    //la c'est le bouton qui enclenche l'ajax
    $(".waves-light").on("touchstart click", function () {
        var city = $("#icon_prefix").val();
        if (city != ' ') {
            //ajax qui s'execute avec une condition du champs vide
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=1589f92cc7f59b3d3132a9cff49a2286",
                type: "POST",
                dataType: "json",
                success: function (data) {
                    $("#test").text("check").css("color","rgb(142, 206, 45)").show();
                    var toto = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=fr&APPID=1589f92cc7f59b3d3132a9cff49a2286";
                    var long = data.coord.lon;
                    var lat = data.coord.lat;

                    $("#temp").text(parseInt(data.main.temp)+ '°' );

                    $("#tmax").text(data.main.temp_max+ '°');

                    $("#tmin").text(data.main.temp_min+ '°');

                    $("#atm").text(data.main.pressure );

                    $("#humid").text(data.main.humidity+ '%');

                    $("#vdt").text(data.wind.speed + ' km/h');

                    $("#ilong,#rlong").text(data.coord.lon);

                    $("#ilat,#rlat").text(data.coord.lat);

                    var gmap = "<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD-IlL_WgfCBymed2DbYWTivev3WaBHhZQ&q=" + lat + "," + long + "&zoom=16 &maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>";
                    $("#imap,#rmap").html(gmap);

                },
                //en cas d'erreur
                error: function(){
                    $("#test").text("clear").css("color","rgb(189, 53, 53)").show();
                    $("#atm,#rlong,#rlat,#ilat,#ilong").text("0");
                    $("#humid").text("0%");
                    $("#vdt").text("0km/h");
                    $("#temp,#tmin,#tmax").text("0°");
                    $("#imap,#rmap").html("Erreur");
                }

            });

        }
    


    });


});