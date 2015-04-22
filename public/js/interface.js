// Function to control the relay
function buttonClick(clicked_id){

  if (clicked_id == "1"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'ona'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  } 

  if (clicked_id == "2"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'offa'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  }
  
    if (clicked_id == "3"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'onb'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  } 

  if (clicked_id == "4"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'offb'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  }
  
    if (clicked_id == "5"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'onc'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  } 

  if (clicked_id == "6"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'offc'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  }
  
}
