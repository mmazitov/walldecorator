// города с оплатой курьеру наличными
var towns_courier = ['Санкт-Петербург','Москва'];

// авторы
var authors = [
	{
		id:1,
		desc:'Автор работ: Альберт Розентроп. Потомственный дворянин, да прекрасный семянин. Учился там-то. Год 1888'
	},
	{
		id:2,
		desc:'2 Автор работ: Альберт Розентроп. Потомственный дворянин, да прекрасный семянин. Учился там-то. Год 1888'
	},
	{
		id:3,
		desc:'3 Автор работ: Альберт Розентроп. Потомственный дворянин, да прекрасный семянин. Учился там-то. Год 1888'
	},
	{
		id:4,
		desc:'4 Автор работ: Альберт Розентроп. Потомственный дворянин, да прекрасный семянин. Учился там-то. Год 1888'
	},
	{
		id:5,
		desc:'5 Автор работ: Альберт Розентроп. Потомственный дворянин, да прекрасный семянин. Учился там-то. Год 1888'
	}
];

/* autoFooter */
function autoFooter() {
	var footer_spacer = $('.footer-spacer');
	var footer = $('.footer');
	var footer_height = footer.outerHeight();
	footer.css('margin-top',-footer_height);
	footer_spacer.css('height',footer_height);
}
/* autoFooter end */

/* sliders */
function sliders() {
	// top-slider
	if ( $('.top-slider').length ) {
		$('.top-slider .slider-list').bxSlider({
			pager:false,
			controls:false,
			useCSS:false,
			adaptiveHeight:true,
			auto: true,
			pause: 3000, // задержка в мс
			onSliderLoad:function(){
				$('.top-slider').removeClass('overflow');
			}
		});
	}
	
	// images-slider
	if ( $('.images-slider').length ) {
		$('.images-slider .slider-list').bxSlider({
			pager:false,
			controls:false,
			useCSS:false,
			adaptiveHeight:true,
			auto: true,
			pause: 3000, // задержка в мс
			onSliderLoad:function(){
				$('.images-slider').removeClass('overflow');
			}
		});
	}
}
/* sliders end */
function mobileMenu() {
	if($('.mobile-nav-open').length) {
		$('.mobile-nav-open').on('click', function() {
			$('.navigation').slideToggle();
		})
	}
}

/* placeholder */
function placeholder(objInputs){
	if (objInputs.length) objInputs.placeholder();
}
/* placeholder end */

/* fancybox */
function fancybox(){
	// popup
	if ( $('.popup-link').length ) {
		if ( $(window).width() > 999 )
			var margin = 20;
		else
			var margin = 0;
		$('.popup-link').fancybox({
			margin: margin,
			wrapCSS		: 'fancybox-popup',
			padding: ['0','0','0','0'],
			closeBtn: false
		});
	}
	
	// image
	if ( $('.image-link').length ) {
		$('.image-link').fancybox({
			wrapCSS		: 'fancy-image'
		});
	}
	
	// close
	$('.popup-close').on('click',function(e){
		$.fancybox.close();
		e.preventDefault();
	});
}
/* fancybox end */

// addPositionClass
function addPositionClass(position, feedback, obj){
	removePositionClass(obj);
	obj.css(position).addClass(feedback.vertical).addClass(feedback.horizontal);
}

// removePositionClass
function removePositionClass(obj){
	obj.removeClass('top bottom center left right');
}

/* courierPayment */
function courierPayment(text){
	if ( $('.payment-courier') ) {
		var block = $('.payment-courier');
		var flag = false;
		$.each(towns_courier,function(i){
			if ( text == towns_courier[i] ) {
				flag = true;
				return false;
			}
		});
		if ( flag )
			block.fadeIn();
		else
			block.fadeOut();
	}
}
/* courierPayment end */

/* author */
function author(value){
	if ( $('.author').length ) {
		var block = $('.author');
		$.each(authors,function(i){
			if ( value == authors[i].id ) {
				block.html(authors[i].desc);
				return false;
			}
		});
	}
}
/* author end */

/* UI MULTISELECT */
/* default select */
defaultSelect = {	
	header: false,
	height: 'auto',
	minWidth:  'auto',	
	classes: 'select',
	noneSelectedText: 'select options',
	selectedList: 1,
	multiple: false,
	position: {
		my: 'left top',
		at: 'left bottom',
		collision: 'flip flip',
		using: function(position, feedback) {
			addPositionClass(position, feedback, $(this));
		}
	},
	arrow: true,
	divider: false,
	corner: false,
	icon: false,
	jscrollpane: false,
	filter: false,
	filterOptions: {},
	dataImg: false	/*<option value="1" data-img="pic/lang/ua.png">value 1</option>*/		
}
/* default select end */

/* large select */
largeSelect = {	
	header: false,
	height: 'auto',
	minWidth:  'auto',	
	classes: 'select large-select',
	noneSelectedText: 'select options',
	selectedList: 1,
	multiple: false,
	position: {
		my: 'left top',
		at: 'left bottom',
		collision: 'flip flip',
		using: function(position, feedback) {
			addPositionClass(position, feedback, $(this));
		}
	},
	arrow: true,
	divider: false,
	corner: false,
	icon: false,
	jscrollpane: false,
	filter: false,
	filterOptions: {},
	dataImg: false	/*<option value="1" data-img="pic/lang/ua.png">value 1</option>*/		
}
/* large select end */

/* default select */
smallSelect = {	
	header: false,
	height: 'auto',
	minWidth:  'auto',	
	classes: 'select small-select',
	noneSelectedText: 'select options',
	selectedList: 1,
	multiple: false,
	position: {
		my: 'left top',
		at: 'left bottom',
		collision: 'flip flip',
		using: function(position, feedback) {
			addPositionClass(position, feedback, $(this));
		}
	},
	arrow: true,
	divider: false,
	corner: false,
	icon: false,
	jscrollpane: false,
	filter: false,
	filterOptions: {},
	dataImg: false	/*<option value="1" data-img="pic/lang/ua.png">value 1</option>*/		
}
/* default select end */

/* customSelect */
function customSelect(objSelName, arrConfig){
	if (objSelName.length){
		objSelName.each(function(){
			var self = $(this);
			var curClass = '';
			if (self.is('[class]'))
				curClass = self.attr('class');
			var placeholderFlag, noneSelectedText;
			if (self.is('[data-placeholder]'))
				noneSelectedText = self.attr('data-placeholder');
			else
				noneSelectedText = arrConfig.noneSelectedText;
			if(self.find('option').is('[selected]'))
				placeholderFlag = false;
			else
				placeholderFlag = true;
			self.multiselect({
				header: arrConfig.header,
				height: arrConfig.height,
				minWidth: arrConfig.minWidth,
				classes: arrConfig.classes + ' ' + curClass,
				checkAllText: arrConfig.checkAllText,
				uncheckAllText: arrConfig.uncheckAllText,
				noneSelectedText: noneSelectedText,
				selectedText: arrConfig.selectedText,
				selectedList: arrConfig.selectedList,
				show: arrConfig.show,
				hide: arrConfig.hide,
				autoOpen: arrConfig.autoOpen,
				multiple: arrConfig.multiple,
				position: arrConfig.position,
				appendTo: arrConfig.appendTo,
				create: function(event, ui){
					var 
						btn = $(this).multiselect('getButton'),
						btnIcon = btn.find('.ui-icon'),
						widg = $(this).multiselect('widget');
					if (placeholderFlag){
						$(this).multiselect("uncheckAll");
						btn.addClass('ui-state-placeholder');
					}
					btn.find('span').not('[class]').addClass('ui-multiselect-value');
					
					// button divider
					if (arrConfig.divider === true)
						btn.append('<span class="ui-multiselect-divider"></span>');
					
					// button arrow
					if (arrConfig.arrow === true)
						btn.append('<span class="ui-multiselect-arrow"></span>');
					
					// button icon
					if (arrConfig.icon !== true)
						btnIcon.remove();
					else
						btnIcon.removeClass('ui-icon ui-icon-triangle-2-n-s').addClass('ui-multiselect-icon');
					btn.children().wrapAll('<span class="ui-multiselect-inner"></span>');
					widg.children().wrapAll('<div class="ui-multiselect-menu-inner"></div>');
					
					// widget scrollpane
					if (arrConfig.jscrollpane === true)
						widg.find('.ui-multiselect-checkboxes').wrap('<div class="ui-multiselect-wrap-scrollpane"><div class="ui-multiselect-scrollpane"></div></div>');

					// widget corner
					if (arrConfig.corner === true)
						widg.append('<div class="ui-multiselect-corner"></div>');
					
					// button image
					if (arrConfig.dataImg === true){
						var 
							listOptions = $(this).find('option'),
							list = widg.find('.ui-multiselect-checkboxes li span');
						list.each(function(i){
							$(this).html('<img src="'+listOptions.eq(i).attr('data-img')+'" />');
							if(listOptions.eq(i).is(':selected')){
								btn.find('.ui-multiselect-value').html('<img src="'+listOptions.eq(i).attr('data-img')+'" />');
							}
						});
						/*ie7-8 image click bug*/
						list.on('click', function(){
							$(this).parents('li').find('input').trigger('click');
						});		
					}					
							
					// check all
					widg.on('click', '.ui-multiselect-all', function(){
						btn.removeClass('ui-state-placeholder');
					});
					
					// uncheck all
					widg.on('click', '.ui-multiselect-none', function(){
						btn.addClass('ui-state-placeholder');
					});
				},
				open: function(event, ui){
					var widg = $(this).multiselect('widget');
					
					// adding to the last item class 'first'
					widg.find('.ui-multiselect-checkboxes li:eq(1)')
						.addClass('first')
						.siblings().removeClass('first');

					// adding to the last item class 'last'
					widg.find('.ui-multiselect-checkboxes li:last')
						.addClass('last')
						.siblings().removeClass('last');

					// fix scroll drop list
					var list = widg.find('.ui-multiselect-checkboxes');
					var maxH = parseInt(list.css('max-height'));
					if(maxH > parseInt(list.height()))
						list.removeClass('list-fix-scroll');
					else
						list.addClass('list-fix-scroll');

					// jscrollpane run handler
					if (arrConfig.jscrollpane === true){
						scrollbarVertical(widg.find('.ui-multiselect-scrollpane'));
						scrollpaneFix(widg.find('.jspScrollable'));
					}
				},
				click: function(event, ui){
					var 
						btn = $(this).multiselect('getButton'),
						widg = $(this).multiselect('widget'),
						flagCheck = false;
					// placeholder
					if (ui.checked)
						btn.removeClass('ui-state-placeholder');
					else {
						if ($(this).multiselect("option").multiple)
						widg.find(':checkbox').each(function(){
						  if ($(this).is(':checked')) flagCheck = true;
						});	
						if (flagCheck){
							btn.removeClass('ui-state-placeholder');
						} else {
							btn.addClass('ui-state-placeholder');
						}
					}
					
					// town
					if ( btn.hasClass('select-town') ) {
						var cur_text = ui.text;
						courierPayment(cur_text);
					}
					
					// author
					if ( btn.hasClass('select-author') ) {
						var cur_value = ui.value;
						author(cur_value);
					}
				},
				beforeclose: function(event, ui){
					var widg = $(this).multiselect('widget');
					removePositionClass(widg);
					/* jscrollpane destroy handler */
					if (arrConfig.jscrollpane === true){
						var jscrollpane = widg.find('.ui-multiselect-scrollpane').data('jsp');
						if (jscrollpane){
							jscrollpane.destroy();
						}
						$(document).unbind('mousewheel.false');
					}
				}
			});			
			/* filter options */
			if (arrConfig.filter === true){
				self.multiselectfilter(arrConfig.filterOptions);
			}
			/* filter options end */
		});
	}	
}
/* customSelect end */

// customSelectRefresh
function customSelectRefresh(objSelect){
	if (objSelect.length){	
		objSelect.each(function(){
			var self = $(this);
			if (self.next('button.ui-multiselect').length)
			self.multiselect('refresh');
		});
	}
}
/* UI MULTISELECT END */

/* initCheckbox */
var cRadio = {          
	name: '.radio',
	initClass: 'radiobox'
};
function initCheckbox(name, initClass){
	if ( $(name).length )
		$(name).checkbox({cls:initClass});
}
/* initCheckbox end */

/* counter */
function counter(){
	if ( $('.counter').length ) {
		// minus
		$('.counter-minus').on('click',function(){
			var cur = $(this);
			var parent = cur.parents('.counter');
			var text = parent.find('.counter-value');
			var value = parseInt(text.text());
			if ( value-1 < 1 )
				text.html('1');
			else
				text.html(value-1);
			cartTotal();
		});
		
		// minus
		$('.counter-plus').on('click',function(){
			var cur = $(this);
			var parent = cur.parents('.counter');
			var text = parent.find('.counter-value');
			var value = parseInt(text.text());
			text.html(value+1);
			cartTotal();
		});
	}
}
/* counter end */

/* cartTotal */
function cartTotal(){
	var cart = $('.cart-table tbody');
	var total_block = $('.cart-total');
	var pretotal = total_block.find('.cart-pretotal-value');
	var total = total_block.find('.cart-total-value');
	var delivery_value = 0;
	if ( $('.cart-delivery-value').length )
		delivery_value = parseInt(num_length_val($('.cart-delivery-value').text()));
	var pretotal_value = 0;
	var total_value = 0;
	cart.find('tr').each(function(){
		var cur = $(this);
		var price = parseInt(num_length_val(cur.find('.price-value').text()));
		var count = parseInt(cur.find('.counter-value').text());
		var sum_value = price*count; 
		pretotal_value+=sum_value;
	});
	pretotal.html(val_space(pretotal_value));
	total.html(val_space(pretotal_value+delivery_value));
}
/* cartTotal end */

// delete space in numbers
function num_length_val(num_val){
	var str = ''
	num_val = num_val + ' ';
	str = num_val.replace(/\s+/g,'');
	return str;
}
// add space in numbers
function val_space(n) {
	var str = '';
	n = n + ' ';
	str = n.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return str;
}

/* deleteRow */
function deleteRow(e) {
	$('.delete-row').on('click', function(e) {
		var cur = $(this);
		cur.parents('tr').fadeOut(function(){
			$(this).remove();
		});
		e.preventDefault();
	});
}
/* deleteRow End */

/* frames */
function frames(){
	if ( $('.frame-upload-link').length ){
		// frame-upload-link change
		$('.frame-upload-link input[type="file"]').on('change',function(){
			var cur = $(this);
			$('.frame-uploaded-image > *').fadeIn();
		});
	}
	
	if ( $('.popup-frames').length ){
		// change in popup
		$('.popup-frame-item input[type="file"]').on('change',function(){
			var cur = $(this);
			cur.parents('.popup-frame-item').addClass('active');
		});
		
		// close
		$('.popup-frame-item-close').on('click',function(e){
			var cur = $(this);
			cur.parents('.popup-frame-item').removeClass('active');
			e.preventDefault();
		});
	}
}
/* frames end */

/* mobileTransforms */
function mobileTransforms(){
	// prev-holder
	if ( $('.prev-holder').length ){
		if ( $(window).width() <= 999 )
			$('.prev-holder').insertAfter($('.product-full-right .buttons'));
		else
			$('.prev-holder').appendTo($('.preview-holder'));
	}
	
	// connect
	if ( $('.connect').length) {
		if ( $(window).width() <= 999 )
			$('.room-select .connect').insertAfter($('.room-select .advice p'));
		else
			$('.room-select .connect').insertAfter($('.room-select .advice'));
	}
	
	// section-inner
	if ( $('.section-inner').length) {
		if ( $(window).width() <= 999 )
			$('.section-inner a').appendTo($('.section-inner p'));
		else
			$('.section-inner a').insertAfter($('.section-inner p'));
	}
}
/* mobileTransforms end */

$(document).ready( function(){
	mobileTransforms();
	placeholder($('input[placeholder], textarea[placeholder]'));
	sliders();
	counter();
	cartTotal();
	deleteRow();
	initCheckbox(cRadio.name, cRadio.initClass);
	fancybox();
	courierPayment($('select.select-town option:selected').text());
	author($('select.select-author option:selected').val());
	frames();
	mobileMenu() 
});
$(window).load( function(){
	customSelect($('.wrap-select select'), defaultSelect);
	customSelect($('.wrap-select-large select'), largeSelect);
	customSelect($('.wrap-select-small select'), smallSelect);
	autoFooter();
});
$(window).resize(function(){
	mobileTransforms();
	customSelectRefresh($('select'));
	autoFooter();
});