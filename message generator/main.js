let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
     [
       ' "What a way to start the day."',
       ' "What a year it has been."',
       ' "That is awesome!"',
       ' "Wow fantastic!"."',
       ' "Are you sure."',
       ' "Nothing else matters."',
       ' "meditation is good for the mind!."',
      ]

      btn.addEventListener('click', function(){
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        output.innerHTML = randomQuote;
    })
      

