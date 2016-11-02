function removeCommas(num) {
    var result = num.replace(/,/g, "");
    //used RegEx above to mean /,/g = ","
    return result;
}

$(document).ready(function() {
    $(".listing-item .row").each(function(i, element) {
        var sqft = $(element).find(".sqft").text();
        var price = $(element).find(".price").text();
        var formattedPrice = removeCommas(price);
        var ppsq = formattedPrice / sqft;
        $(element).find(".ppsq").text(ppsq.toFixed(2));
    });
});

