<html>
<body>
<h2>JavaScript Prompt</h2>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
 var txt;
 var person = prompt("Please enter your name:", "Harry Potter");
 if (person == null || person == "") {
document.write( "User cancelled the prompt.");
 } else {
 document.write( "Hello " + person + "! How are you today?");
 }
}
</script>
</body>
</html>
