var tabsId = [];
var runningTab= 0 ;

function downloadVideo(url)
{
	
	$.ajax({
	type:"GET",
   	url: "http://localhost:5000/",
   	data: url,
	});
	return;
}

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	
	if(request.greeting==="download")
	{
		 chrome.tabs.query({audible:true },function(tabs){
			if(tabs.length==1)
			{
				console.log("Song to be downloaded "+tabs[0].url+"   "+tabs[0].title);
				downloadVideo(tabs[0].url);
			}	
	
		});
	}
	
	else if(request.greeting==="hello")
	{
		tabsId.push(sender.tab.id);
		console.log("I am in "+sender.tab.id);	
	}

	

	if(runningTab==0)
	{
		//console.log("Its 0 ");
		runningTab=tabsId[0];
	  	chrome.tabs.sendMessage(tabsId[0],{"message":"playMic"});
	}
	else
	{
		//console.log("running tab is "+runningTab);
	}




	// for(var i =0 ;i< tabsId.length;i++)
	// {
	// 	console.log("tab number "+tabsId[i]+"\n");
	// }	
		
});

if(tabsId.length>0&&runningTab==0)
{
	console.log("I am outside ");
	runningTab=tabsId[0];
	chrome.tabs.sendMessage(tabsId[0],{"message":"playMic"});
}

chrome.tabs.onRemoved.addListener(function(tabId){
	console.log(tabId);
	var index= tabsId.indexOf(tabId);
	if(index>-1)
	{
		tabsId.splice(index,1);
	
		if(runningTab==tabId)
		{
			if(tabsId.length>0)
			{
				chrome.tabs.sendMessage(tabsId[0],{"message":"playMic"});
				runningTab=tabsId[0];
			}
			else runningTab=0;
		}
	}
	
	// console.log("after deletion");
	// for(var i =0 ;i< tabsId.length;i++)
	// {
	// 	console.log("tab number "+tabsId[i]+"\n");
	// }	

	
});

