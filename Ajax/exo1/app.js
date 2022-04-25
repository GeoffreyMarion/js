$.ajax({
  url:'accueil.html',
  dataType: 'text',
  success : function (data) {
    $(".container").html(data);
  },
  error:function (xhr) {
    console.log(xhr);
  }
});
$("#acc").click( () => {
    $.ajax({
      url:'accueil.html',
      dataType: 'text',
      success : function (data) {
        $(".container").html(data);
      },
      error:function (xhr) {
        console.log(xhr);
      }
    });
  });

 $("#pro").click( () => {
    $.ajax({
      url:'apropos.html',
      dataType: 'text',
      success : function (data) {
        $(".container").html(data);
      },
      error:function (xhr) {
        console.log(xhr);
      }
    });
  });

  $("#con").click( () => {
    $.ajax({
      url:'contact.html',
      dataType: 'text',
      success : function (data) {
        $(".container").html(data);
      },
      error:function (xhr) {
        console.log(xhr);
      }
    });
  });

  $("#equ").click( () => {
    $.ajax({
      url:'equipe.html',
      dataType: 'text',
      success : function (data) {
        $(".container").html(data);
      },
      error:function (xhr) {
        console.log(xhr);
      }
    });
  });