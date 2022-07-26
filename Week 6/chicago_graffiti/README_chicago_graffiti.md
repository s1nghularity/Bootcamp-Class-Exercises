## Callbacks - Using *.filter* and *for each* to Showcase Graffiti Reports in Chicago by Zip Code.
:beginner: Building on a previous *.filter* exercise, we were asked to identify the correct index position of the zip code field in the graffiti_july_2015.js file.<br>

:heavy_check_mark:Used the console to identify seventeenth position as the zip code field and returned the total number of reports within a zip code within the callback function.<br>

:heavy_check_mark: Additional code within the callback function included the creation of an object with two keys, zip and reports. That object was then pushed to an array *graffiti*, holding the total number of reports per zip code.<br> 

:heavy_check_mark:The callback function *graffitiReports* on line 31 was then used to run through all zip codes listed in the zipCodes.js file.<br> 

:heavy_check_mark:Finally on line 35 and 36 the data is generated in a Google chart via the array *graffiti*.<br>

:heavy_check_mark:Starting on line 39 the report[16]===zip; was tested out using a specific zip, returning the number of reports within the console.<br>

<br>   

:rocket: *All code referenced in this repository is property of MIT* :rocket: