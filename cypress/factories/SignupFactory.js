
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var data = {
            name: 'Débora Valério',
            cpf: cpf.generate(),
            email: 'de-valerio@hotmail.com',
            whatsapp: '66996964299',
            address: {
                postalcode: '78714303',
                street: 'Rua dos Radialistas',
                number: '868',
                details: 'Casa vermelha de esquina',
                district: 'Jardim Ipê',
                city_state: 'Rondonópolis/MT'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
    
}

