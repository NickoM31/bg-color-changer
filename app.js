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
			$('#red').on('change input', app.rgb);
			$('#green').on('change input', app.rgb);
			$('#blue').on('change input', app.rgb);
			$('#alpha').on('change input', app.rgb);
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