/* eslint-disable no-undef */
$(document).ready(function () {
  $('#carousel-imagens').slick({
      autoplay: true
  });
  
  $('.menu-hamburguer').click(function () {
      $('nav').slideToggle();
  });

  $('#telefone').mask('(00) 00000-0000', {
      placeholder: '(__) _____-____'
  });

  $('form').validate({
      rules: {
          nome: {
              required: true
          },
          telefone: {
              required: true
          },
          email: {
              required: true,
              email: true
          },
          veiculoInteresse: {
              required: false
          },
          mensagem: {
              required: false
          }
      },
      messages: {
          nome: {
              required: 'O campo nome é obrigatório'
          },
          telefone: {
              required: 'O campo telefone é obrigatório'
          },
          email: {
              required: 'O campo email é obrigatório',
              email: 'Digite um email válido'
          },
          mensagem: {
              required: true
          },
          veiculoDeInteresse: {
              required: true
          }
      },
      submitHandler: function (form) {
          console.log(form);
      },
      invalidHandler: function (event, validator) {
          let camposErrados = validator.numberOfInvalids();
          if (camposErrados) {
              alert('Existem campos inválidos');
          }
      }
  });
});