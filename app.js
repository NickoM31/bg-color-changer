(function(){
	"use strict";
	var app = {
		redColor: null,
		greenColor : null,
		blueColor : null,
		alphaColor : null,
		init:function(){
			app.listeners();
			// let's go
		},
		listeners:function(){
			$('#red').on('change input', function(){
				console.log("progress");			
			});
			$('#green').on('change input', function(){
				console.log("progress");	
			});
			$('#blue').on('change input', function(){
				console.log("progress");
			});
			$('#alpha').on('change input', function(){
				console.log("progress");
			});
		},
		
		

	};


	$(document).ready(function(){
		app.init();
	});
})();