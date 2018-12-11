var x = document.getElementsByTagName("script");
var found = '';

for (var i = 0 ; i < x.length; i++){
  var item = x[i].getAttribute("src"); 
  
  if(item.match(/wp-content/i) != 'null'){
    document.body.style.border = "5px solid blue";

	}
	
}



