$("#hotel_btn").on('click', function(){
	var $currenHotel = $("#current_hotel").val();
	//console.log($currenHotel);
	var $newhotel = $('<span class="title">'+ $currenHotel+'</span>')
	var $newbtn = $('<button id="remove_hotel" class="btn btn-xs btn-danger remove btn-circle">x</button>');
    $newhotel.appendTo($("#hotel_list"));
    $newbtn.appendTo($("#hotel_list"));
})


function removeItem(this_element){
	console.log($this);
	$this.hide();
	$this.prev().hide();

}

$("#hotel_list").on('click', '.remove', function(){
	var $this = $(this);
	removeItem(this_element);

})
// $("#remove_hotel").on('click', function(){
// 	console.log($(this));
// 	$(this).hide();
// 	$(this).prev().hide();

// })








//elementToAppend.append(whereTOAppend).text($currentVal)