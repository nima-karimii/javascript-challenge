# JavaScript Homework - JavaScript and DOM Manipulation

### The web page can be viewed from [https://nima-karimii.github.io/javascript-challenge/]

## Background

WAKE UP NIMA! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why I am here. I am writing code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). I also allow our users to filter the table data for specific values. There's a catch though... I only use pure JavaScript, HTML, and CSS, and D3.js on my web pages. They are the only coding languages which can be trusted.

The planet Earth needs to know what we have found!

![Home page](https://raw.githubusercontent.com/nima-karimii/javascript-challenge/master/home.PNG)

## My Task

### Level 1: Automatic Table and Date Search 
![Home page](https://raw.githubusercontent.com/nima-karimii/javascript-challenge/master/UFO-level-1/static/images/Home.PNG)

* I created a basic HTML web page [index.html](UFO-level-1/index.html) 

* I used the UFO dataset provided in the form of an array of JavaScript objects, wrote code that appends a table to web page and then adds new rows of data for each UFO sighting.

* I used a date form in HTML document and wrote JavaScript code that listens for events and search through the `date/time` column to find rows that match user input.

![Home page](https://raw.githubusercontent.com/nima-karimii/javascript-challenge/master/UFO-level-1/static/images/Report.PNG)


### Level 2: Multiple Search Categories 
![Home page](https://raw.githubusercontent.com/nima-karimii/javascript-challenge/master/UFO-level-2/static/images/home.PNG)

* I used multiple `input` tags and/or select dropdowns, wrote JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. From , To `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

  ![Home page](https://raw.githubusercontent.com/nima-karimii/javascript-challenge/master/UFO-level-2/static/images/report.PNG)


### Level 3: Multiple Search Categories with relevant dropbox option
![Home page](https://raw.githubusercontent.com/nima-karimii/javascript-challenge/master/UFO-level-3/static/images/home.PNG)

* After finishing Level 2, there was a problem for user to select the right filters to get the results so I made level 3 challenge. 
* In this challenge after selecting the dates when user pick up a country name, just relevant options come up in other filter so for State and City.

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)


### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
