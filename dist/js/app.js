$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollBar: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });

    moment.locale('fr');
    $("#date").text(moment().format('LL'));


    $(".waves-light").on("click",function () {
        var city = $("#icon_prefix").val();
        if (city != ' ') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=1589f92cc7f59b3d3132a9cff49a2286",
                type: "Get",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    var toto = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=fr&APPID=1589f92cc7f59b3d3132a9cff49a2286";
                    var long = data.coord.lon;
                    var lat = data.coord.lat;

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#temp").text(parseInt(reponseJson.main.temp) + "°"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#tmax").text(reponseJson.main.temp_max + "°"))



                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#tmin").text(reponseJson.main.temp_min + "°"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#atm").text(reponseJson.main.pressure))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#vdt").text(reponseJson.wind.speed + "km/h"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#humid").text(reponseJson.main.humidity + "%"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#ilong,#rlong").text(reponseJson.coord.lon))



                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#ilat,#rlat").text(reponseJson.coord.lat))

                    var gmap = "<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD-IlL_WgfCBymed2DbYWTivev3WaBHhZQ&q=" + lat + "," + long + "&zoom=16 &maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>";
                    console.log(gmap);
                    $("#imap,#rmap").html(gmap);

                }

            });

        }


    });


});