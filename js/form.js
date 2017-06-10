$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/natalia9rokicka@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                message: $('#message').val(),
            },
            dataType: "json"
        })
        .done(function(data){
            $('#commentForm').html('<h1>Thank you!</h1>' 
              + '<p> Additional info: ' + JSON.stringify(data) + '</p>');
        });
    });
});


