var data = []
var token = ""

jQuery(document).ready(function () {
    $('#input_text').on('keyup', function (e) {
        if (e.key == ' ') {
            $.ajax({
                
                url: '/get_end_compressions',
                type: "post",
                contentType: "application/json",
                dataType: "json",

                data: JSON.stringify({
                    "input_text": $('#input_text').val(),
                }),

                beforeSend: function () {
                    $('.overlay').show()
                },

                complete: function () {
                    $('.overlay').hide()
                }

            }).done(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)

                $('#tmp__1').val(jsondata['tmp__1'])
                $('#tmp_07').val(jsondata['tmp_07'])
                $('#tmp_04').val(jsondata['tmp_04'])
                $('#tmp__1_lenght').text(jsondata['tmp__1_lenght'])
                $('#tmp_07_lenght').text(jsondata['tmp_07_lenght'])
                $('#tmp_04_lenght').text(jsondata['tmp_04_lenght'])


            }).fail(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
            });

        }
    })
})