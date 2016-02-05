// Add item to the list
var Hotel = require('../../models/hotel.js')

$(document).ready(function() {
	add();
})

function addItem(this_element, appendToEl) {
	var $newElement = $('<span class="title">'+ this_element.val() +'</span>')
	var $newbtn = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    $newElement.appendTo($(appendToEl));
    $newbtn.appendTo($(appendToEl));

    Hotel.find({name: this_element.val()})
    .then(function(hotelPage) {
    	console.log(hotelPage.place);
    	return hotelPage.place;
    })
    



}

var dataStorage = {
	// 1: {
	// 	hotel_list: ['','']
	// 	restaurant_list:
	// 	activity_list:
	// }
	// 2: {

	// }
};

var $currentDayButton = null;


// Remove item from the list
function removeItem(this_element){
	this_element.hide();
	this_element.prev().hide();
}


function storeData(category, $this) {
	if(!dataStorage[$currentDayButton])  {
		dataStorage[$currentDayButton] = {
			hotel_list: [],
			restaurant_list: [],
			activity_list: []
		};
	}
	// if(!dataStorage[$currentDayButton][category]) {
	// 	dataStorage[$currentDayButton][category] = [$this.prev().val()]
	// } else {
		dataStorage[$currentDayButton][category].push($this.prev().val())
	// }
}



$("#restaurant_btn").on('click', function(){
	addItem($(this).prev(), $('#restaurant_list'));
	storeData('restaurant_list', $(this))
	// add a marker on a map
})

$("#activity_btn").on('click', function(){
	addItem($(this).prev(), $('#activity_list'));
	storeData('activity_list', $(this))
	// add a marker on a map
})
$("#hotel_list").on('click', '.remove', function(){
	removeItem($(this));
})


$("#restaurant_list").on('click', '.remove', function(){
	removeItem($(this));
})


$("#activity_list").on('click', '.remove', function(){
	removeItem($(this));
})

// Controlling day buttons

$('#add_day_btn').on('click', function() {
	add();
})

$('.day-buttons').on('click', '.day-btn', function() {
	console.log(dataStorage)
	changeDayTitle($(this));
	$currentDayButton = $(this).text();
		
	if($currentDayButton !== '+') {
		$('#hotel_list').children().remove();
		$('#restaurant_list').children().remove();
		$('#activity_list').children().remove();
	}

	if(dataStorage[$currentDayButton]){		
		displayItinerary($(this), 'hotel_list');
		displayItinerary($(this), 'restaurant_list');
		displayItinerary($(this), 'activity_list')
	}
})

function displayItinerary($this, category) {

	propName = $this.text();
	//console.log(propName);

	if(propName !== '+') {
		for(var i = 0; i < dataStorage[propName][category].length; i++) {
		 	var $newVal = dataStorage[propName][category][i];
			var $newElement = $('<span class="title">'+ $newVal +'</span>')
			var $newbtn = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
	    	$newElement.appendTo($('#' + category));
	    	$newbtn.appendTo($('#' + category));

		}
	}

}

$("#hotel_btn").on('click', function(){
	addItem($(this).prev(), $('#hotel_list'));
	storeData('hotel_list', $(this))

})

var count = 1;

function add() {
	var $newDayBtn = $('<button class="btn btn-circle day-btn">' + count + '</button>');
	$newDayBtn.attr('id', count.toString());
	$newDayBtn.appendTo($('.day-buttons'));
	count++;
}


function changeDayTitle($this) {
		$dayCount = $this.text()
		if($dayCount == '+') {
			$('#day-title').children('span').first().text('Added day ' + (count-1))
		} else{
		$('#day-title').children('span').first().text('Day ' + $dayCount)}
}


function removeDayButtons($this) {

		var currentId = $this.prev().text().slice(-1)
		$('#' + currentId).remove();	
		for(var i = parseInt(currentId)+1; i <= count; i++ ) {
			$('#'+i).attr('id', (i-1).toString()).text((i-1).toString());
		}
		count--;
		$('#day-title').children('span').first().text('Pick a day');
}

$('#day-title .remove').on('click', function() {
	removeDayButtons($(this));
})
