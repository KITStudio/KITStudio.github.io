$(function() {

	// Custom JS

});


// $("#example_id").ionRangeSlider();

$('.nstSlider').nstSlider({
		"rounding": {
        "500": "5000",
        "5000": "50000",
        "50000": "500000",
        "50000 ":"5000000",
    },
    "crossable_handles": false,
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
        $(".left-input").val(leftValue.toLocaleString() + ' руб');
        $(".right-input").val(rightValue.toLocaleString() + ' руб');
    }
});