<html>
 <head></head>
  <body>
    <script>
      var reply = ""; // global variable
      function timeFunction() {
        let time = new Date().getHours(); // local variable
        console.log(time); //console.log() to check if the time is correct

        /* if, else-if and else statements */
        if (time < 12 == time> 0) {
          reply = "It is morning time"
        } else if(time > 12 == time <18) {
          reply = "It is the afternoon"
        } else {
          reply = "It is evening time"
        }

        /* output the response */
        document.getElementById("timeOfDay").innerHTML = reply
      }
    </script>
    <button onclick="timeFunction()">Get Time of the day</button>
    <p id="timeOfDay"></p>
  </body>
  </html>