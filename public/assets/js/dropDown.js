  



  $(function () {
      $('.pr-price').hide();
      $('.d2').show();
      $('#selectResults').change(function (event) {
        $('.pr-price').hide();
        $('.d'+$(this).val()).show();
      }).val(2); // reflect the div shown 
    });