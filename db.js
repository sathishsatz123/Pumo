function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
    },
    "google_translate_element"
  );
}

jQuery(".lang-select").click(function () {
  var theLang = jQuery(this).attr("data-lang");
  jQuery(".goog-te-combo").val(theLang);

  //alert(jQuery(this).attr("href"));
  window.location = jQuery(this).attr("href");
  location.reload();
});
