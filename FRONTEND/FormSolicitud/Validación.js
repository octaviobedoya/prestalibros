/**
 * "If the user has not entered a value in the Name field, or if the user has entered less than 6
 * characters in the Price or Inventory fields, then display an alert message and stop the form from
 * being submitted."</code>
 * 
 * 
 * 
 * 
 * 
 * A:
 * 
 * You can use <code>required</code> attribute in your input fields.
 * <code>&lt;input type="text" name="Name" id="Name" required&gt;
 * </code>
 * @param evento - the event object
 * @returns the value of the input field.
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hizoClick").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var Documento = document.getElementById('Documento').value;
    if(Documento.length < 6) {
      alert('Completa este campo');
      return;
    }
    var NombreCompleto = document.getElementById('NombreCompleto:').value;
    if (NombreCompleto.length == 0) {
      alert('Completa este campo');
      return;
    }
    var Telefóno = document.getElementById('Telefóno:').value;
    if (Telefóno.length < 6) {
      alert('Completa este campo');
      return;
    }
    var Email = document.getElementById('Email:').value;
    if (Email.length == 0) {
      alert('Completa este campo');
      return;
    }
    var TituloLibro = document.getElementById('TituloLibro:').value;
    if (TituloLibro.length == 0) {
      alert('Completa este campo');
      return;
    }
    var CódigoISBN = document.getElementById('CódigoISBN:').value;
    if (CódigoISBN.length < 6) {
      alert('Completa este campo');
      return;
    }
    var Cantidad = document.getElementById('Cantidad:').value;
    if (Cantidad.length < 6) {
      alert('Completa este campo');
      return;
    }
    var FechaEntrega = document.getElementById('FechaEntrega:').value;
    if (FechaEntrega.length < 6) {
      alert('Completa este campo');
      return;
    }
    this.submit();
  }