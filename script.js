$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
            },
            sname:{
                required:true,
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
            },
            sname:{
                required:"Enter last name"
            },
            emailAddress:{
                required:"Enter your email address"
            },
            password:{
                required:"Enter your password"
            }
        }
    })
})