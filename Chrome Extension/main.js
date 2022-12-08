/**
 * File: /home/adamo/Adam/Coding/NEA/Chrome Extension/main.js
 * Project: /home/adamo/Adam/Coding/NEA/Chrome Extension
 * Created Date: Tuesday, November 29th 2022, 9:38:42 am
 * Author: Adam O'Neill
 * -----
 * Last Modified: Fri Dec 02 2022
 * Modified By: Adam O'Neill
 * -----
 * Copyright (c) 2022 Adam O'Neill
 * ------------------------------------
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

 function getTimeLine() {
    /* Function for getting the tweet data on screen */
  
    // Creates list of nodes wof tweets
    const tweetsNodeList = document.querySelectorAll('[data-testid="tweetText"]');
  
    // For every node in the static node list collected
    for (let i=0; i < tweetsNodeList.length; i++){
      // Check if already analysed and skip this iteration
      if (analysedTweets.includes(tweetsNodeList[i])) {
        continue;
      }
  
      // If statement used to avoid nesting, 
      // else:
      analysedTweets.push(tweetsNodeList[i])
  
      // get tweet text
      currenttext = tweetsNodeList[i].textContent
  
      // Cleanse the text
      // input to model
  
      const sentimentDiv = document.createElement('div');
      sentimentDiv.classList.add('dot');
      
      // Place holder value
      var sentiment = 2
      // Dependant on sentiment returned
      if (sentiment == 0){
        sentimentDiv.classList.add('negative');  
      } else if (sentiment == 1){
        sentimentDiv.classList.add('neutral'); 
      } else if (sentiment == 2){
        sentimentDiv.classList.add('positive'); 
      }
  
      // add relevenat subchild dot 
      tweetsNodeList[i].appendChild(sentimentDiv)   
    };
  
    // get the tweet text from each, cleanse the data, parse through model, add relevant div with class to tweet
  };
  
  // Global dynamic list to keep track of what element has been already analysed
  var analysedTweets = [];
  
  // As the user scrolls, the tweets data is fetched
  window.onscroll = function(){
    getTimeLine();
  };
