function custom_execcommand(editor_id, elm, command, user_interface, value) {
	inst = tinyMCE.getInstanceById(editor_id);
	switch (command) {
		case "mceLink":
			a = tinyMCE.getParentElement(inst.selection.getFocusElement(), "a");
			href = tinyMCE.getAttrib(a, "mce_href");
			title = tinyMCE.getAttrib(a, "title");
			target = tinyMCE.getAttrib(a, "target");
			$("link_href").value = href;
			$("link_title").value = title;
			$("link_target").value = target;
			$("link_editor").style.display="";
			return true;	
		case "mceImage":
			insertMediaElement();
			//new ajax ('../util/media.php', { update: $('media_editor'), onComplete: media_show });
			return true;			
		case "mceInsertTable":
			var html = "<table><tr><td></td><td></td></tr></table>";
			inst.execCommand("mceBeginUndoLevel");
			inst.execCommand("mceInsertContent", false, html);
			tinyMCE.handleVisualAid(inst.getBody(), true, tinyMCE.settings["visual"]);
			inst.execCommand("mceEndUndoLevel");
			return true;
		case "mceCodeEditor":
			var code = tinyMCE.getContent(editor_id);
			try {
				source_html.setCode(code);
			} catch(e) {
				$("source_html").value = code;
			}
			$("source_editor").style.display="";
			return true;
	}
	return false;
}

function custom_urlconverter(url, node, on_save) {
	if (url.indexOf("/index.php/") > 0 || url.indexOf("http://") == -1) {
		for(var i=0;i<10;i++) {
			url = url.replace(" ", "_");
			url = url.replace("%20", "_");
		}
	}
	return url;
}

if (navigator.userAgent.indexOf("Safari") < 0) {
	tinyMCE.init({
		mode : "specific_textareas",
		execcommand_callback : "custom_execcommand",
		urlconverter_callback : "custom_urlconverter",
		plugins : "table",
		popups_css : "../css/default.css",
		content_css : "../css/default.css",
		theme : "advanced",
		theme_advanced_toolbar_location : "bottom",
		theme_advanced_toolbar_align : "left",
		theme_advanced_buttons1 : "styleselect,formatselect,bold,italic,,underline,separator,bullist,numlist,separator,image,link,unlink,anchor,hr,separator,undo,redo",
		theme_advanced_buttons2 : "table,separator,row_before,row_after,delete_row,separator,col_before,col_after,delete_col,separator,merge_cells,separator,code",
		theme_advanced_buttons3 : "",
		theme_advanced_blockformats : "p,h1,h2,pre",
		theme_advanced_styles : "Pink Box=pink_box;Pink Text=pink_text;Big Text=big_text;Small Text=small_text;Header Image=header_image;Image Border=image_border;Weak Link=weak_link",
		extended_valid_elements : "embed[src|controller|width|height|loop|autoplay]",
		valid_elements : "*[*]"
	});
}