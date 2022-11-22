const { model } = require("mongoose")

const mongoose = require('mongoose')

// Esquema de la base de datos 
const productoSchema = mongoose.Schema({

    nombre:{
        type:String,
        required: [true,'Por favor registra el nombre del producto'],
        trim: true, // elimina espacios en blanco
        maxLength:[120,'El nombre del producto debe tener 120 caracteres o menos']
    },
    precio:{
        type:Number,
        required: [true,'Por favor registra el precio del producto'],
        maxLength:[8,'Precio esta  fuera de rango: Hasta $99.999.999'],
        default:0.0
    },
    descripcion:{
        type:String,
        required: [true,'Por favor ingrese una descripcion del producto'],
        trim: true, // elimina espacios en blanco
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,'Por favor seleccione una categoria del producto'],
        enum:{
            values:[
                'Alimento Seco',
                'Alimento Humedo',
                'Accesorios',
                'Medicamentos',
                'Snacks',
                'Juguetes'
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,'Por favor registre el vendedor del producto']
    },
    inventario:{
        type:Number,
        required:[true,'Registre el Stock del producto'],
        maxLength:[5,'Cantidad maxima del producto es 99999 unidades']
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('productos',productoSchema)