$( document ).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault()
        
        $.ajax({
            url: "//formspree.io/mike.kane@students.makeschool.com", 
            method: "POST",
            data: {
                    email: $('js-email').val(),
                    message: $('js-message').val()
                },
            dataType: "json"
        }).error(function(jqXHR, status, error){
            alert('Problem! Email didn\'t send!');
        }).success(function(data, status, jqXHR) {
            alert('Thank you for your message! I\'ll get gack to you shortly!');
            $('form').find('#js-email, #js-message').val('');
        }); 
    });
});