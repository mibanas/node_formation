const generator_password = require('generate-password')


function password() {
    let password = generator_password.generate({
        length : 10,
        numbers : true,
        symbols : true
    })

    return console.log(password)
}

password()