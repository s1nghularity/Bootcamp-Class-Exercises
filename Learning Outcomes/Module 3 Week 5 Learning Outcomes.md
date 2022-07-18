
## STRING TEMPLATE LITERALS

**SPLICE** changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (:boom:destructive). 

:heavy_check_mark:For eg. If you have a box of 10 crayons and want to pick the replace the fourth color, Green, with Aquamarine, then you would call *crayon.splice(1, 3, 'aquamarine');* 
<br />    
<br />    
**SLICE** returns selected elements in an array as a new array (not destructive). 

:heavy_check_mark:For eg. If have a box of 10 crayons and want to pick the third and eighth crayon you would call *crayons.slice(2, 7);*  
<br />    
<br />    
**SPLIT** splits a string in a new array of substrings (not destructive). Use " " as a separator to split up words (considered a default separator). 

:heavy_check_mark:For eg. If you have a box of 10 crayons and want to share with your 10 friends, you would call *crayons.split(" , ");* because the crayons in your boxes are 'separated' by commas and would return ['Blue', 'Red', 'Yellow', 'Aquamarine', etcetc…]  
<br />    
<br />    
**JOIN** changes elements of array into a string and is often used to put back together strings that have been SPLIT in a new way. It does this by creating and returning a new string by concatenating all of the elements in an array/array-like object, separated by commas or a specified separator string (:boom:destructive). (source: MDN) 

:heavy_check_mark:For eg. Let's say you've changed your mind after you've taken your beautiful crayons out of your box and don't want to share, now you want to put them back but instead of just a comma separating your crayons you want to glue them together.   
It would look like *crayons.spit(" , ").join("glue");*

        ['Blue'glue'Red'glue'Yellow'glue'Aquamarine'glue etcetc…]  
<br />    
<br />    
**PUSH** adds one or more elements to the end of an array and returns the new length of the array (:boom:destructive). 

:heavy_check_mark:For eg. If you want to add 2 more crayons to your box then you would call *crayons.push("Treebeard Green", "Mandalorian Gray")
>> **UNSHIFT** adds elements to the beginning of an array (:boom:destructive).   
<br />    
<br />    
**POP** removes the last element from an array and returns that element(:boom:destructive).

:heavy_check_mark:For eg. If you want to give you the last crayon in your box you would call *pop.crayon();*
>> **SHIFT** removes an element from the beginning of an array (:boom: destructive).
<br />    
<br />    
**INDEXOF** returns the position/index of the first instance of a value in a string, otherwise *returns -1 if value not found* (not destructive).

:heavy_check_mark:For eg. If you wanted to find out where the yellow crayon is in your box you would call crayons.indexOf('Yellow') to return a value 2 as it's the third crayon in your box. 