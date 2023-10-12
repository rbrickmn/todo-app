# Introduction

This is a simple to-do list application based off of the tutorial from GreatStack on YouTube! (https://www.youtube.com/watch?v=G0jO8kUrg-I)

![](./images/screenshot.png)

# The process

This project is super simple and is very easy to complete/use! While I would work off his video, I decided that I also wanted an extra bit of functionality. So, I added the ability to listen for the Enter key when inside of the text box, allowing the user to quickly add tasks while never picking up the mouse!

The code used for that functionality is here, found on StackOverflow:

// Runs the function addTask() when the user presses the Enter key in inputBox.
inputBox.addEventListener("keyup", (value) => {
  if (value.keyCode === 13) {
    addTask();
  }
});