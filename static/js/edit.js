function openWindow(url, name, params) {
	newWindow = window.open('', name, params);
	newWindow.focus();
	if (newWindow.opener == null) newWindow.opener = self;
	newWindow.location.href=url;
}

function insertMediaElement() {
    openWindow('../util/media.php', '_uw_util', 'width=520,height=440,scrollbars=no')
}

function insertStyleElement() {
    openWindow('../util/styles.php', '_uw_util', 'width=750,height=650,scrollbars=yes')
}

function insertGhostElement() {
    openWindow('../util/ghost.php', '_uw_auto', 'width=520,height=400,scrollbars=yes')
}


function storeCaret(area) {
    if (area.createTextRange) {
        area.caretPos = document.selection.createRange().duplicate();
    }
}

function selectMedia(fname) {
	editor_id = "mce_editor_0";
	inst = tinyMCE.getInstanceById(editor_id);
	if (inst) {
		// TinyMCE editor
		ext = fname.substr(fname.length-3, 3);
		if (ext == "gif" || ext == "jpg" || ext == "png") {
			html = "<img src=\"/static/media/"+fname+"\" alt=\""+fname.substr(0, fname.length-4)+"\" />";
		}
		if (ext == "zip" || ext == "pdf" || ext == "mp3") {
			html = "<a class=\""+ext+"\" href=\"/static/media/"+fname+"\" />"+fname+"</a>";
		}
		if (ext == "mov") {
			html = "<embed src=\"/static/media/"+fname+"\" width=\"320\" height=\"256\" controller=\"true\"></embed>";
			
		}
		inst.execCommand("mceBeginUndoLevel");
		inst.execCommand("mceInsertContent", false, html);
		tinyMCE.handleVisualAid(inst.getBody(), true, tinyMCE.settings["visual"]);
		inst.execCommand("mceEndUndoLevel");
	} else {
		var area = document.getElementById('text');
		//var media = '!' + fname + '!';
		var media = "<img src=\"/static/media/"+fname+"\" alt=\""+fname.substr(0, fname.length-4)+"\" />";
		var txt = area.value;
		if (area.createTextRange && area.caretPos) { // Code for IE
			var caretPos = area.caretPos;
			caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? media + ' ' : media;
		} else if (area.selectionStart) { // Code for Gecko
			txt = txt.substring(0,area.selectionStart) + media + txt.substring(area.selectionStart);
			area.value = txt;
		} else { // For everything else
			txt += media;
			area.value = txt;
		}
	}
	media_hide();
}

function link_hide() {
	document.getElementById("link_editor").style.display="none";
}

function link_insert() {
	editor_id = "mce_editor_0";
	inst = tinyMCE.getInstanceById(editor_id);
	if (inst) {
		href = document.getElementById("link_href").value;
		title = document.getElementById("link_title").value;
		target = document.getElementById("link_target").value;
		tinyMCE.themes['advanced']._insertLink(href, target, title, "", "");
	}
	link_hide() ;
}

function media_show() {
	document.getElementById("media_editor").style.display="";
}

function media_hide() {
	document.getElementById("media_editor").style.display="none";
}

function source_hide() {
	document.getElementById("source_editor").style.display="none";
}

function source_insert() {
	tinyMCE.setContent(document.getElementById('source_html').value);
	source_hide() ;
}