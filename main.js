function ppsq(price, sqft) {
    return price / sqft;
}

$(document).ready(function() {
    $(".listing-item .row").each(function(e) {
        console.log(e);
        console.log($(this));
    });
});

