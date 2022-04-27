# Advanced-JavaScript-HW

# HW: OOP JavaScript 

## Exercise 1: The Movie Database

* Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

* Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


## Exercise 2: Animals

* Create a file Animals.js.
* create class name animal (this will be the parent class) it should have:
    * constructor with the animal name, age, image, and sound 
    * create method called `eats` that will return for example `"animal eats food"` where `animal` is the property `name`. 

* create cat class (this will be child class) it shoud have:
    * extend the parent constructor and add to it `owner` property. 
    * override the `eats` method and make it return `"cats eats mouse"`. 
    * override the `Animalsound` method and make it return `"cat sounds is meow"`. 

* create dog class (this will be child class) it shoud have:
    * extend the parent constructor and add to it `owner` property. 
    * override the `eats` method and make it return `"dogs eats chicken"`. 
    * override the `Animalsound` method and make it return `"dogs sounds is woof"`. 

* create fish class (this will be child class) it shoud have:
    * extend the parent constructor and add to it `color` property. 
    * override the `eats` method and make it return `"fish eats flakes"`. 

* create object for dog, cat and fish classes and excute all the methods in the classes.  

* create HTML file and print the images of each object. 
* when clicking on the image the details of the animal should show up in a list. 
