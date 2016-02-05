// Add item to the list
function addItem(this_element, appendToEl) {
	var $newElement = $('<span class="title">'+ this_element.val() +'</span>')
	var $newbtn = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    $newElement.appendTo($(appendToEl));
    $newbtn.appendTo($(appendToEl));
    //save this item in that day in that 
}

$("#hotel_btn").on('click', function(){
	addItem($(this).prev(), $('#hotel_list'));
	// add a marker on a map
})

$("#restaurant_btn").on('click', function(){
	addItem($(this).prev(), $('#restaurant_list'));
	// add a marker on a map
})

$("#activity_btn").on('click', function(){
	addItem($(this).prev(), $('#activity_list'));
	// add a marker on a map
})

// $('.add').on('click', function() {
// 	var list = $(this).parent().val()
// 	list = list + "_list";
// 	addItem($(this).prev(), $(list));
// })

// Remove item from the list
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

// Add days
$('#add_day_btn').on('click', function() {
	add();
})

var count = 1;
function add() {
	var $newDayBtn = $('<button class="btn btn-circle day-btn">' + count + '</button>');
	$newDayBtn.attr('id', count.toString());
	$newDayBtn.appendTo($('.day-buttons'));
	count++;
}

// loop through all day buttons
	// if we click on one botton
		//change day-title.text() to "Day" + i
		//diplay itinerary for day i
	$('.day-buttons').on('click', '.day-btn', function() {
		$dayCount = $(this).text()
		if($dayCount == '+') {$('#day-title').children('span').first().text('Added day ' + (count-1))}
		else{
		$('#day-title').children('span').first().text('Day ' + $dayCount)}
	})

	$('#day-title .remove').on('click', function() {
		var currentId = $(this).prev().text().slice(-1)
		$('#' + currentId).remove();	
		for(var i = parseInt(currentId)+1; i <= count; i++ ) {
			// i is an id and also the value
			$('#'+i).attr('id', (i-1).toString()).text((i-1).toString());
		}
		count--;
	})


// Dynamically change the number on buttons
// When button is ckicked, show the itinerary for that day
// Remove day button

//method that will look at the state of things at the dom, analyze and update

