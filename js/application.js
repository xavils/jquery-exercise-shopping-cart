$(document).ready(function() {
	
	$('input').keyup(function() {
		cart();
	});

	function cart() {

    var prices = $('.item-price');
    var units = $('.quantity');
    var sum = 0;

    for (var i = 0; i < units.length; i++) {
		  var unit = units[i];
		  var price = prices[i];
		  sum += (Number($(unit).val()) * Number($(price).text().replace('$', '')));
    }

    $('#total-price').text("$" + sum);

  }

  $('.glyphicon-remove').on("click", function() {
		$(this).parent().parent().fadeOut(300).remove();
		cart();
	});	

	$('#create').on("click", function() {
			$('.item-name:last').parent().after('<div class="row"> \
				<div class="item-name col-xs-6"></div> \
				<div class="item-price col-xs-3"></div> \
				<div class="item-qty col-xs-3"> \
					<label>QTY</label> \
					<input class="quantity"> \
					<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> \
				</div></div>');

			var newItem = $('.newItem').val();
			$('.item-name:last').text(newItem);

			var itemPrice = $('.itemPrice').val();
			$('.item-price:last').text("$" + itemPrice);

			$('.glyphicon-remove').on("click", function() {
				$(this).parent().parent().fadeOut(300).remove();
				cart();
			});

			$('input').keyup(function() {
				cart();
			});

	});
		
});