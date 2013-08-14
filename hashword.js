var renderHash = function(text, before) {
	var sha = before?text:SHA1(text);
	var hexes = sha.split(/(.{6})/g).filter(function(val) {
		return val != "";
	}).map(function(val) {
		return "#" + (val.length == 6 ? val : val+"00");
	});	
	
	var css = [
		"background-image: -webkit-gradient(",
		"	linear,",
		"	left top,",
		"	right top,",
		"	color-stop(0, "+hexes[0]+"),",
		"	color-stop(0.166, "+hexes[1]+"),",
		"	color-stop(0.332, "+hexes[2]+"),",
		"	color-stop(0.498, "+hexes[3]+"),",
		"	color-stop(0.664, "+hexes[4]+"),",
		"	color-stop(0.83, "+hexes[5]+"),",
		"	color-stop(1, "+hexes[6]+")",
		");"
	].join("\n");
	css = (before ? ".password:before {" : ".password:after {") + css + "}";
	$(before ? "#auto_style1" : "#auto_style2").text(css);
};
$.fn.hashword = function(password, fetch) {
	$(this).change(function() {
		$('<style id="auto_style1"></style>').appendTo("head");
		$('<style id="auto_style2"></style>').appendTo("head");
		
		var user = $(this).val();		
		fetch(user, function(sha) {
			renderHash(sha, true);
		});						
	});				
	$(password).keyup(function() {
		renderHash($(this).val());
	});
};