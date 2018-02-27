$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollBar: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });

    moment.locale('fr');
    $("#date").text(moment().format('LL'));


    $(".waves-light").click(function () {
        var city = $("#icon_prefix").val();
        if (city != ' ') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=1589f92cc7f59b3d3132a9cff49a2286",
                type: "Get",
                dataType: "jsonp",
                success: function (data) {
                    var toto = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=fr&APPID=1589f92cc7f59b3d3132a9cff49a2286";
                    
                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#temp").text(reponseJson.main.temp+"°"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#tmax").text(reponseJson.main.temp_max+"°"))



                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#tmin").text(reponseJson.main.temp_min+"°"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#atm").text(reponseJson.main.pressure))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#vdt").text(reponseJson.wind.speed+"km/h"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#humid").text(reponseJson.main.humidity+"%"))

                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#longitude").text(reponseJson.coord.lon))



                    window.fetch(toto)

                        .then(reponse => reponse.json())

                        .then(reponseJson => $("#latitude").text(reponseJson.coord.lat))
                        
                }
                
            });
        }


    });


});