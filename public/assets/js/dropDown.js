  
$(function () {
      $('.pr-price').hide();
      $('.d1').show();
      $('#selectResults').change(function (event) {
        $('.pr-price').hide();
        $('.d'+$(this).val()).show();
      }).val(1); // reflect the div shown 
    });