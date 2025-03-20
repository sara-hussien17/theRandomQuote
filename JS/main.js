var quote=[{
    'quote':"“A friend is someone who knows all about you and still loves you.”"
   , 'author':"― Elbert Hubbard"
},

{'quote':"“To live is the rarest thing in the world. Most people exist, that is all.”"
   , 'author':"― Oscar Wilde"
},
{'quote':"“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
   , 'author':"― Mahatma Gandhi"
},
{'quote':"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"
   , 'author':"― Ralph Waldo Emerson"
},
{'quote':"“Insanity is doing the same thing, over and over again, but expecting different results.”"
   , 'author':"― Narcotics Anonymous"
},

]


function displayQuotes(){
var lastNum;
    var quoteNum= Math.floor(Math.random()* quote.length);
    while(lastNum == quoteNum){
      quoteNum= Math.floor(Math.random()* quote.length);
     }
      console.log( quoteNum)
      document.getElementById("Quote").innerHTML=quote[quoteNum].quote;
      document.getElementById("auther").innerHTML=quote[quoteNum].author;
    
    lastNum=quoteNum;
   
}
  