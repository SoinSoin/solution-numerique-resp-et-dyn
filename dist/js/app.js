$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollBar: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });

    moment.locale('fr');
    $("#date").text(moment().format('LL'));

    $(".waves-light").on("click", function () {

        var city = $("#icon_prefix").val();
        if (city != ' ') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=1589f92cc7f59b3d3132a9cff49a2286",
                type: "POST",
                dataType: "json",
                success: function (data) {
                    var toto = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=fr&APPID=1589f92cc7f59b3d3132a9cff49a2286";
                    var long = data.coord.lon;
                    var lat = data.coord.lat;

                    $("#temp").text(parseInt(data.main.temp) + '°');

                    $("#tmax").text(data.main.temp_max);

                    $("#tmin").text(data.main.temp_min);

                    $("#atm").text(data.main.pressure + ' Pa');

                    $("#humid").text(data.main.humidity);

                    $("#vdt").text(data.wind.speed + ' km/h');

                    $("#ilong,#rlong").text(data.coord.lon);

                    $("#ilat,#rlat").text(data.coord.lat);

                    var gmap = "<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD-IlL_WgfCBymed2DbYWTivev3WaBHhZQ&q=" + lat + "," + long + "&zoom=16 &maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>";
                    $("#imap,#rmap").html(gmap);

                }

            });

        }


    });


});