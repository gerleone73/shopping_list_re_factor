/*---------------------------------------------------------------------------------
----------------------------------------------------------------------------------*/

$(document).ready(function(){

//var doCount = 4;
//	var doneCount = 0;
	//updateCount();

/*	var doCount = 4;
	var doneCount = 0;
	updateCount();
*/

	//$("#clip").on('hover','#clip',point);

	$("#clip").hover(function(){
	 	$(this).addClass('point');
	 });

	$("#clip").click(function(){
	 	window.location.reload();
	 });
	//

	/*
	Trevor Nowalk - 2015-02-16
	The reason the double click to remove only works the first time is because you
	are binding the dblclick to a li that has an ID of gotit.  This only exists on
	page load, once you empty the list that li no longer exists and this listener
	will never be executed again.  Perhaps you could do a doubleclick listener on
	the #wrapper (I tested and that worked)
	*/
	 $("#gotit").dblclick(function() {
	 		 /*
	 		 Trevor Nowalk - 2015-02-16
	 		 Here, you are removing the .items which are the spans.  You need to remove
	 		 the whole li, you can either do $('#list').empty() or $('#listitem').remove();
	 		 Doing so will solve the funky click behavior after emptying the list
	 		 */
	 		 $('#list').empty();
       /*$('.item').remove();*/
        newlist();

    });

	 function newlist(){
	 	itemCount =0;
	 	doCount = 0;
		 doneCount = 0;
		updateCount();

		console.log(doCount);
		console.log(doneCount);
		console.log(itemCount)
	 }


	// shopping();

newlist();
 //function shopping(){

	var doCount = 4;
	var doneCount = 0;
	var itemCount = 4;
	updateCount();

	//shopping();


removal();

	setFocus();

$('#list').sortable();

function removal(){


  var removeIntent = false;
        $('#list').sortable({
            over: function () {
                removeIntent = false;
            },
            out: function () {
                removeIntent = true;
            },
            beforeStop: function (event, ui) {
            	
               if(removeIntent == true) {
                  		ui.item.remove();
                  		itemCount--;
                  		doCount--;
                  		updateCount();
                  }
/*
                 if($(this).hasClass("checked")) {

						console.debug($(this));
					
						doneCount == doneCount;
						itemCount--
						updateCount();

					} else {

						console.debug($(this));
						doneCount == doneCount;
						doCount--;
						updateCount();
					}
		*/				
           
    }
            
        
 });
 }

	$("form").submit(function(event){

		event.preventDefault();

		var newItem = $.trim($('#newItem').val());
		if (newItem == '') {
			setFocus();
		} else{
			addItem(newItem); // when + was + item rather than = newItem it worked??
		};

	});



	/*--- Check off the items ---*/




	$('#list').on('click', 'li.listitem', checkoff);




	/*--- Check off Function ---*/
	function checkoff(){
		

		console.log("Checking Off...");
		if($(this).hasClass("checked")) {
			
			
			console.debug($(this));
			doCount++;
			doneCount--;
			updateCount();


		} else {

			console.debug($(this));
			doneCount++;
			doCount--;
			updateCount();
		}
		$(this).toggleClass("checked");

	}

/*	function removeItem(){
		console.log("Removing item...");
		$(this).remove();
			console.debug($(this));
	}* Doesn't work
	/*--- Add the new item to the list and increase the count ---*/
	function addItem(newItem) {
		doCount++;
		updateCount();
		$('<li class="listitem"><span class="item">' + newItem + '</span></li>').prependTo('#list');//BEFORE APPEND CAME $("#list").hide()....slideDown('slow');
		console.log("You have now added " + newItem); // note this was simply item!!
		setFocus();
	}

/*	$(".item").hover(function() {
    $(this).addClass("hover");
}, function() {
    $(this).removeClass("hover");
});
*/

//	if ($('span').hasClass('item') || $('span').hasClass('newItem') ) {
 /*
$(".item").hover(function() {
      $(this).addClass("hover");
}, function() {
    $(this).removeClass("hover");
});
//}*/




	/*--- Clear and Set focus to the inputbox ---*/
	function setFocus() {
		$('#newItem').val('');
		$("#newItem").focus();
	}

	/*--- Update the DO, DONE  counts ---*/
	function updateCount() {
		$('#do').text(doCount);
		$('#done').text(doneCount);
		$('#itemcount').text(itemCount);
		/* Trevor - Don't need this any more */
		/*if(doCount == 17){
	$('#wrapper').css('height', '1500');
}*/
	}

 //shopping


//shopping();


   //shopping();

	 	//	if($('.item').hasClass('new')) {


	 	//$(".new").parent().remove(); /// parent worked!!!

  // }
  //		shopping();


// });

});
