editing = false;
cancelled = false;

$('.editable').mouseover(function(){
	if (editing == false) {
		$(this).addClass('hover');
	}
});

$('.editable').mouseout(function(){

	$(this).removeClass('hover');

	if (cancelled == true) {
		editing = false;
		cancelled = false;
	}

});

$('.editable').click(function(){

	if (editing == false) {
		theID = $(this).attr('id');

		oContent = $(this).html();

		var formContent = '<input type="text" value="' + oContent + '" name="text-' + theID + '" id="text-' + theID + '" /><button id="save" onclick="saveEdit()">Save</button><button id="cancel" onclick="cancelEdit()">Cancel</button>';
		editing = true;

		$(this).html(formContent);
		$('#text-' + theID).focus();
	}
});

function cancelEdit() {

	$('#' + theID).html(oContent);
	cancelled = true;
}

function saveEdit() {

	$('#' + theID).html($('#text-' + theID).val());
	cancelled = true;

			}