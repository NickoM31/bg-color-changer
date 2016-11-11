(function(){
	"use strict";
	var app = {
		rc:null,
		gc:null,
		bc:null,
		ac:null,
		init:function(){
			app.listeners();
		},
		listeners:function(){
			$('#red').on('change input', app.redColor);
			$('#green').on('change input', app.greenColor);
			$('#blue').on('change input', app.blueColor);
			$('#alpha').on('change input', app.alphaColor);
		},
		redColor : function(){
			app.rgb();
		},
		greenColor : function(){
			app.rgb();
		},
		blueColor : function(){
			app.rgb();
		},
		alphaColor : function(){
			app.rgb();
		},

		rgb :function(){
			var rc = $('#red').val();
			var gc = $('#green').val();
			var bc = $('#blue').val();
			var ac = $('#alpha').val();
			$('body').css('background-color', "rgba("+rc+","+gc+","+bc+","+ac+")");
		},

	};
	$(document).ready(function(){
		app.init();
	});
})();