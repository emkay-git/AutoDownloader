function click(e) {
	console.log("Its here "+e.target.id);
  chrome.runtime.sendMessage({"clicked":e.target.id});
  
}


document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  // console.log("Welcome");
  for (var i = 0; i < divs.length; i++) {
 	// console.log(divs);
    divs[i].addEventListener('click', click);
  }
});
