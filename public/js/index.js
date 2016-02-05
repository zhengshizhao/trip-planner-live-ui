$("#hotel_btn").on('click', function(){
	addItem($(this).prev(), $('#hotel_list'));
})

$("#restaurant_btn").on('click', function(){
	addItem($(this).prev(), $('#restaurant_list'));
})

$("#activity_btn").on('click', function(){
	addItem($(this).prev(), $('#activity_list'));
})

// $('.add').on('click', function() {
// 	var list = $(this).parent().val()
// 	list = list + "_list";
// 	addItem($(this).prev(), $(list));
// })

function addItem(this_element, appendToEl) {
	var $newElement = $('<span class="title">'+ this_element.val() +'</span>')
	var $newbtn = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    $newElement.appendTo($(appendToEl));
    $newbtn.appendTo($(appendToEl));
    //save this item in that day in that 
}

function removeItem(this_element){
	this_element.hide();
	this_element.prev().hide();
}

$("#hotel_list").on('click', '.remove', function(){
	removeItem($(this));
})


$("#restaurant_list").on('click', '.remove', function(){
	removeItem($(this));
})

$("#activity_list").on('click', '.remove', function(){
	removeItem($(this));
})



//method that will look at the state of things at the dom, analyze and update





//elementToAppend.append(whereTOAppend).text($currentVal)