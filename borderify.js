let markup = document.documentElement.outerHTML;
console.log(markup);

if(markup.match(/wp-content/i)){
	document.body.style.borderLeft = "5px solid blue";
}else{
	document.body.style.borderLeft = "5px solid red";
}