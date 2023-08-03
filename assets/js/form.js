var $form = $(".form");

$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});

$form.each(function(){
    var Mainform = $(this);
    var formAt = Mainform.attr('data-form');
    var submitbtn = Mainform.find('button[type=submit]');
    $form.validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
          letters: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true
        },
      },
      messages: {
        name: "Please specify your name (only letters and spaces are allowed)",
        email: "Please specify a valid email address"
      },
      submitHandler: function() {
        var data = Mainform.serialize()
        $.ajax({
            type: "post",
            url: site_url+formAt,
            data: data,
            contentType: 'json',
            beforeSend: function(){
                submitbtn.addClass('loading');
                submitbtn.prop('disabled', true);
            },
            success: function(res){
                submitbtn.removeClass('loading');
                submitbtn.prop('disabled', false);
                renderSuccess(submitbtn, res, "success");
            },
            error: function(res){

            }
        })
      }
    });
})

function renderSuccess(btn, res, type){
    var st = `
    <div class="${type=="success"?"success-bar":"error-bar"} state-bar">${res}</div>
    `;
    btn.parent().append(st)
    setTimeout(() => {
        btn.parent().find('.state-bar').fadeOut('slow', function(){
            btn.parent().find('.state-bar').remove()
        })
    }, 1500);
}