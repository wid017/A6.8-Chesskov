 let i ="";


function init() {
	i = 0;
	$('#button-1protsent').click(increaseProgressBy1protsent);
	$('#button-3protsent').click(increaseProgressBy3protsent);
	$('#button-7protsent').click(increaseProgressBy7protsent);
}
	
function increaseProgressBy1protsent() {
	i = i + 1 ;
	$('#my-progress-bar').width(i +'%');
	$("#my-progress-bar").html(i +'%');
	checking ();
	 // console.log(i);
	
}

function increaseProgressBy3protsent() {
	i = i + 3;
	$('#my-progress-bar').width(i +'%');
	$("#my-progress-bar").html(i +'%');
	checking ();
	 // console.log(i);
	
}

function increaseProgressBy7protsent() {
	i = i + 7;
	$('#my-progress-bar').width(i +'%');
	$("#my-progress-bar").html(i +'%');
	 checking ();
	 // console.log(i);
	
}

function checking() {
if (i >= 100 ) {
		$('#my-progress-bar').width('100%');
		discard();
	  			// console.log(i);
	} 
	
}

function discard (){ 
	if (confirm('Достигнуто 100%. Начать с начала?')) {
		location.reload();
		// console.log(i);
	} else {
		alert('Вы удачно накачали мой progress-bar');
		// console.log(i);
	}
	// console.log(i);

}

$(document).ready(init);