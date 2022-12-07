'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  Documento: {
    type: String,
    required: 'Please enter a Documento'
  },
  NombreCompleto: {
    type: String,
    required: 'Please enter a NombreCompleto'
  },
  Telefóno: {
    type: String,
    required: 'Please enter a Telefóno'
  },
  Email: {
    type: String,
    required: 'Please enter a Email'
  },
  TituloLibro: {
    type: String,
    required: 'Please enter a TituloLibro'
  },
  CódigoISBN: {
    type: String,
    required: 'Please enter a CódigoISBN'
  },
  Cantidad: {
    type: String,
    required: 'Please enter a Cantidad'
  },
  FechaEntrega: {
    type: String,
    required: 'Please enter a FechaEntrega'
  }
});

module.exports = mongoose.model('book', bookSchema);