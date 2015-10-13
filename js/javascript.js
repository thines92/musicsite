
var myForm = document.myForm;

function searchForSong() {
  var textBox = myForm.textBox;
  var songName = textBox.value.toLowerCase();

  window.location.href = "../music/" + songName + ".html";
  // if (textBox.value == "testfile") {
  //   window.location.href = "../music/testfile.html";
  // }
}

$("form input[name='clickButton']").click(function() {
  searchForSong();
});

$("form").on('submit', function(e){
    e.preventDefault();
    searchForSong();
});