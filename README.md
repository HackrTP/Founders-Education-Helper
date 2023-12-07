# Founders-Education-Helper
Don't want to spend hours working on a summer school course? Use this to do it way quicker! You can finish a whole course in just a couple hours!


## **Prerequisites** 
 1. Login, go to lessons, click your lesson that has the quiz you have to take, and open the quiz
 2. Now, this is the easier method, open a new tab and go to this url: "https://founders.edtell.com/samigo-app/jsf/delivery/beginTakingAssessment.faces" or you can right-click on the quiz iframe (_The box that displays the quiz, you should see something like "Begin Assessment" or "Continue Assessment"_) and click "View Frame Source"
 4. Remove "view-source:" from the beginning of the url so it is https://founders.edtell.com/samigo-app/jsf/delivery/beginTakingAssessment.faces
 5. Press enter and before doing anything else, switch to the previous tab and go back to "Lessons"
 6. Now switch back to the new tab and open developer tools, click "Application" at the top next to "Elements" or "Console" (_If you don't see it as one of the options, click the >> at the top of developer tools and select Application_)
 7. Under "Local Storage" click on "https://founders.edtell.com"
 8. Click the blue button (_Begin Assessment or Continue Assessment_)
 9. Wait for it to finish
 10. You will know when it is finished when the "Value" of "questionCount" is 11 (_It is under "https://founders.edtell.com"_)


## **Instructions**

1. To get the Questions and Answers, open the developer console in your browser and navigate to the “Application” tab
2. From there, under Storage, click the little dropdown arrow next to “Local Storage”
3. You should see "Key" and "Value", under "Key" there should be a file named "ExtractedData", click it
4. Click inside the text box that has now appeared at the bottom of the deveoper tools and press CONTROL+A then CONTROL+C
5. Use you preferred AI Chatboot/Tool to answer the questions
6. Now, click the correct answer that the AI gave you, and click enter, and continue until you've selected all the correct answers
7. Click next so you are now on question 2, then click Question Progress on the side of your screen, and click questions 10 (_You do this because most of the time it will just load a blank screen if you try to go to question 10 from question 1_)
8. Submit it, now you have to right click on "https://founders.edtell.com" and click "Clear" (_It is under "Local Storage" in "Application"_)
9. Finally, switch back to the tab we started off at, refresh it, click the next Lesson you want to do, skip the study, click the quiz, go back to "Lessons", then go to the other tab where we extracted the questions and answers, remove "deliverAssessment.faces" from the end of the url and put "beginTakingAssessment.faces" instead
10. Press enter and you will see its the same page we were on earlier when we started
11. Now just redo the proccess!


# **Extras/Tips and Tricks**
**Skip Study**
  1. To skip the Study (_The first thing you have to complete before taking a Quiz_) just click it
  2. Then above the study iframe, there should be Lessons  >  "_Current Lesson_"  >  "_Current Study_" Click the second option, your current lesson
  3. Now you can go straight to the quiz without doing the study!
**Remove Limit**
Drag and drop this [Bookmarklet](javascript:(function(){var s=document.createElement('script');s.type='text/javascript';s.src='https://raw.githubusercontent.com/HackrTP/Founders-Education-Helper/main/BingAIRemoveLimit.js';document.getElementsByTagName('head')[0].appendChild(s);}());)

**AI Commands**
  
  When giving Bing AI the list of questions and answers, you can use the prompt, found [here](https://github.com/HackrTP/Founders-Education-Helper/blob/main/BingAIPrompt), to get a reponse that looks like this:
  ```
  Question 1: Which of the following refers to a set of processes that makes the hard drive perform tasks?
  A. Ultra-ware
  B. Hardware
  C. Spyware
  D. Software
  Question 2: Which of the following is NOT an output device?
  
  A. Speaker
  B. Monitor
  C. Keyboard
  D. Printer
  Question 3: Fill in the missing information.  An input device sends information to a/an ______________ for processing and an output device ________________ the result of that processing.
  
  A. Computer, displays
  B. Computer, inputs
  C. Webcam, processes
  D. Scanner, interprets
  ```
  
