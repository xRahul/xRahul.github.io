---
title: Object-Oriented Vanilla Javascript - Part 1
description: This article explains what scopes, context, this keyword, closures, constructors and prototype chains are in vanilla javascript.
tags: [javascript, code]
og_image: "posts/object-oriented-vanilla-javascript/og-image.png"
image: "posts/object-oriented-vanilla-javascript/og-image.png"
---

{:.reveal}
{% include image.html path="posts/object-oriented-vanilla-javascript/og-image.png" path-detail="posts/object-oriented-vanilla-javascript/og-image@2x.png" alt="Object Oriented Javascript" %}

{:.reveal}
As web developers, we use Javascript in our daily life but rarely do we take out the time and learn intricacies of the language. We accept many things at face value as they do not impact the work we need to do and make assumptions about other things that are mostly correct.

{:.reveal}
But once you know you will be working on something for a long time, it's time to put the foot down and start learn things properly to qualify from development to engineering.

{:.reveal}
Below are some topics that will help you get an overview of the Whats and the Hows:

{:.reveal}
* ### Scopes
    - Scope determines the visibility of variables, functions, and objects in some particular part of your code during runtime.
    - Also called _Execution Context_ (Not to be confused with _Context_ below)
    - Types of Scopes:
        + _Local_ - Variables defined inside a function are not available outside that function
        + _Global_ - Variables defined outside any scope and can be accessed anywhere in the code
        + _Lexical_ - Variables from parent scope are available inside the nested scopes.
            * Scope Chain: When accessing a variable, JS will start searching from the current scope, and keep jumping up in nested scopes to find it. 
{:.reveal}
{% highlight js %}
var bike = {wheels: 2}; // bike variable is in global scope
var ride = function() {
    var speed = 32; // speed variable is in local scope of ride function
};
{% endhighlight %}

{:.reveal}
* ### Context & `this` keyword
    - Developers generally get confused between scope and context. Context is used to refer to the value of `this` variable in some place in the code.
    - Generally, `this` keyword in a context refers to the object it was called against, i.e. the variable left of the dot in a function call. 
{:.reveal}
{% highlight js %}
var fn_ride = function() {
    console.log(this);
}
var bike = {wheels: 2}; // bike variable is in global scope
bike.ride = fn_ride;

bike.ride(); // `ride()` points to `fn_ride()` in which `bike` will be logged
// `ride()` function was called in context of `bike`.
// So, `this` will point to `bike` inside fn_ride function
// during the `bike.ride()` call.

bike.ride.call(car); // here you're changing the context from `bike` to `car`
{% endhighlight %}

{:.reveal}
* ### Closures
    - It is created when an inner function tries to access the variables defined in and arguments passed into the outer function.
    - Even when the inner function is called outside the outer function, those variables will be available to the closure.
{:.reveal}
{% highlight js %}
var CarOf = function(driver) {
    return function() {
        console.log(driver + " is driving");
    };
}
var drivingMyCar = CarOf("Mike");
drivingMyCar(); // This will log "Mike is driving"
// Here the value of driver argument is preserved.
{% endhighlight %}

{:.reveal}
* ### Constructors
    - These are the functions to the right of class definition.
    - The constructor function is nothing more than a normal function.
{:.reveal}
{% highlight js %}
var Car = function(driver) { // Constructor function
    var wheels = 2;
    var driverName = driver;
};

var myCar = new Car("Rahul");
{% endhighlight %}

{:.reveal}
* ### Prototype
    - This is a default attribute in every javascript function.
    - It points to an object in which properties and functions of a class can be assigned that should be usable by every object of that class(object of the constructor function).
    - Every object has a prototype that can be modified through the constructor's prototype.
    - If the current scope doesn't have the accessed attribute, the prototype of that function is checked before going to outer nesting.
    - Every prototype has a `constructor` property that points to the class(Constructor function) of that prototype.
{:.reveal}
{% highlight js %}
var Car = function(driver) {
    // new anonymous function created with every new object of Car class
    var driving = function(){
        console.log(driver + " is driving");
    };
};

// Only one anonymous function created for every object of Car class
Car.prototype.driving = function(){
    console.log(driver + " is driving");
}

console.log(Car.prototype.constructor); // logs `Car`
{% endhighlight %}

{:.reveal}
* ### Prototype Chain
    - Every object has a prototype which has been chained all the way upto `Object` variable.
{:.reveal}
{% highlight js %}
var Vehicle = function() {
    // ...
}
var Car = function() {
    // ...
}
Car.prototype = Object.create(Vehicle.prototype);
// Here, we are creating link between Car's prototype and Vehicle's prototype.
// Any method not found in `Car.prototype` will be searched in `Vehicle.prototype`
{% endhighlight %}



---
<br>
{:.reveal}
##### References
[Object-Oriented JavaScript - Udacity](https://www.udacity.com/course/object-oriented-javascript--ud015){:target="_blank"}
<br>
[Understanding Scope in JavaScript - Scotch.io](https://scotch.io/tutorials/understanding-scope-in-javascript){:target="_blank"}
<br>
[Understanding the JavaScript Prototype Chain & Inheritance - RisingStack](https://community.risingstack.com/javascript-prototype-chain-inheritance/){:target="_blank"}