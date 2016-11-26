var micStatus="On";
console.log("Script is Running!");
chrome.runtime.sendMessage({greeting: "hello"});
var recognition = new webkitSpeechRecognition();

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){

      micStatus=request.micStatus;
			if(request.message==="playMic")
			{
        
        if(micStatus==="On")
          {
            console.log("Mic is on! Say \"Download\" to download the video");	
            speech();
          }
          else
          {
            console.log("Mic is off! Click on \"Download\" to download the video");
            recognition.abort();

          }
			}

      // if(request.message==="micOff")
      // {
      //   micStatus="Off";
      //   console.log("Switching off the mic");
      //   recognition.abort();
      // }
	
	});


function speech()
{
    
  recognition.lang = "en-IN";
  
  recognition.start();
  recognition.continuous = true;
  recognition.interimResults = true;
  
}
  
  recognition.onerror = function(event) { 
  	 recognition.stop();     
     console.log("Error Occurred: "+event.error);
   }
 
 recognition.onend = function(event) {
      
     // console.log(micStatus);
     if(micStatus==="Off")
     {
      recognition.stop();
     }
     else
     {
       recognition.lang = "en-IN";
       recognition.stop();
       recognition.start(); 
     }
     
   
  };
  
  recognition.onresult = function(event) {
      
      if(event.results[event.results.length-1].isFinal)
      {
    	var output=event.results[event.results.length-1][0].transcript;
    	output=output.trim();
      console.log("You said "+output);
    	if(output==="download")
    	chrome.runtime.sendMessage({greeting: output});
  	}	
  };
  
 