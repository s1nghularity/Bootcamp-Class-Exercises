
## STRING TEMPLATE LITERALS

:beginner:**SPLICE** changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (:boom:destructive). 

:heavy_check_mark:For eg. If you have a box of 10 crayons and want to pick the replace the fourth color, Green, with Aquamarine, then you would call *crayon.splice(1, 3, 'aquamarine');*    
<br />

:beginner:**SLICE** returns selected elements in an array as a new array (:negative_squared_cross_mark:not destructive). 

:heavy_check_mark:For eg. If have a box of 10 crayons and want to pick the third and eighth crayon you would call *crayons.slice(2, 7);*    
<br />    

:beginner:**SPLIT** splits a string in a new array of substrings (:negative_squared_cross_mark:not destructive). Use " " as a separator to split up words (considered a default separator). 

:heavy_check_mark:For eg. If you have a box of 10 crayons and want to share with your 10 friends, you would call *crayons.split(" , ");* because the crayons in your boxes are 'separated' by commas and would return

    ['Blue', 'Red', 'Yellow', 'Aquamarine', etcetc…]     
<br />    

:beginner:**JOIN** changes elements of array into a string and is often used to put back together strings that have been SPLIT in a new way. It does this by creating and returning a new string by concatenating all of the elements in an array/array-like object, separated by commas or a specified separator string (:boom:destructive). (source: MDN) 

:heavy_check_mark:For eg. Let's say you've changed your mind after you've taken your beautiful crayons out of your box and don't want to share, now you want to put them back but instead of just a comma separating your crayons you want to glue them together.   
It would look like *crayons.spit(" , ").join("glue");*

        ['Blue'glue'Red'glue'Yellow'glue'Aquamarine'glue etcetc…]    
<br />    

:beginner:**PUSH** adds one or more elements to the end of an array and returns the new length of the array (:boom:destructive). 

:heavy_check_mark:For eg. If you want to add 2 more crayons to your box then you would call *crayons.push("Treebeard Green", "Mandalorian Gray")
>**UNSHIFT** adds elements to the beginning of an array (:boom:destructive).     
<br />    

:beginner:**POP** removes the last element from an array and returns that element(:boom:destructive).

:heavy_check_mark:For eg. If you want to give you the last crayon in your box you would call *pop.crayon();*
> **SHIFT** removes an element from the beginning of an array (:boom: destructive).  
<br />    

:beginner:**INDEXOF** returns the position/index of the first instance of a value in a string, otherwise *returns -1 if value not found* (:negative_squared_cross_mark:not destructive).

:heavy_check_mark:For eg. If you wanted to find out where the yellow crayon is in your box you would call crayons.indexOf('Yellow') to return a value 2 as it's the third crayon in your box. 

## CALLBACK FUNCTIONS VS REGULAR FUNCTIONS

:beginner:A callback function i a function that is passed to another function as a parameter. A regular function expression executes code based on the arguments(parameters) provided. 

:heavy_check_mark:Callback functions operate by passing another function as a parameter. For example...

```
function greeting(name) {alert('Hello ' + name);}

function processUserInput(callback) {>
    var name = prompt('Please enter your name.');
    callback(name);
  }  
processUserInput(greeting);
```

:beginner:Functions that accepts other functions as arguments are called *higher-order functions* and they contain the logic for *when* the callback function is executed.   

## CALLBACKS & ASYNCHRONOUS POGRAMMING

:beginner:Referring to the code above, the callback is triggered by the final function (or outer function) invocation which uses the *greeting* function, as a parameter. The value *name* is nested within the callback function *processUserInput*. The callback function specifies the parameters your want to use in the outer function.

:one:Define function with callback as parameter<br>
:two:Define what the callback does using a secondary function, with the action in the function assigned the name of the callback parameter.<br>
:three:Invoke secondary function using first function as parameter.<br><br> 


:eight_pointed_black_star:Asynchronous programming presents a challenge when using multiple callback functions to accodomate multiple asynchronous actions. To take the example code further...