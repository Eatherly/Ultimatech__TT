function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val("WITCHER").select();
  document.execCommand("copy");
  $temp.remove();
}

$(".promocode__copy").on("click", function () {
  copyToClipboard("#coupon-field");
  $(this).html("COPIED");
  $(this).css("color", "#00CC66");
});
