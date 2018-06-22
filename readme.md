BASIC DOCUMENTATION

Open Weather Map API Application Using Angular 1.7.x

This is a simple Angular 1.7.x that gets local weather information from the Open Weather Map API and displays it to the user in terms of a 5 day forecast.  

Upon launching in the browser, the application asks the user for permission to use her location.  If she grants the request, the application calls the Open Weather Map API using the latitude and longitude provided by the Geolocation API to request local weather statistics.  If she denies the request, the application defaults to request information for the zip code of Rocketmiles, a Chicago travel company.

The application then processes the data into 24 hours chunks (days) and displays results to the user in a friendly and informative manner.

LAUNCHING THE APP

Make sure to install all files listed in the package.json using "npm install."

Package.json specifies a script for "npm start," which starts a server for the application on localhost://8080 (or else check -- the address will display in the console).

TESTING THE APP

The app contains a few (unfortunately trivial) tests via Karma and Protractor, located in index.spec.js and protractorSpec.js, respectively. To launch the protractor test, run the following commands: 

    (1) Start the server using "npm start". This ensures protractor will be able to access the website for testing.
    (2) Run the command "protractor protractorConf.js." This executes the actual test (check that the title of the website matches the HTML definition!)

Karma tests check that the main controller's scope recognizes variables assigned to it...to run the Karma tests, enter the command "karma start".

REFLECTIONS

Angular 1.7.x is quite different from Angular 2+.  I believe that studying the framework more deeply would help a developer to make more sense of the beast that is modern Angular, as all the features that make that framework so formidable exist here in nuce (controllers, services, dependency injection), whereas scope seems to serve as a kind of rudimentary model. It is also interesting to compare components of Angular 1.7.x and React -- at least, React's state and Angular's scope seem like two different solutions to similar problems. It makes you wonder what React will look like in two or three years...

The hardest part of building the application was the tests. My major hangup, both in terms of end-to-end testing and unit testing with Karma, is that the controller doesn't really do anything until the user accepts or rejects the request for geolocation data. I spent a few hours researching spies, but I was not able to figure out how to get the API request to run automatically. Failing that, I had no way to check several important points:

    A. Did the scope contain a city and country name?
    B. Did the processData function correctly reduce the data from the API call to a list of 5 consecutive days?
    C. Did the scope's forecasts variable contain an object with a list of days inside it (correctly formatted as 3 letter abbreviations).

Other challenges: I would have liked to use a pipe method to process the Open Weather Map API's date information instead of doing it in the controller, but the data provided all came out as the same day in 1970.  I could have spent longer figuring out why this was the case.

The API gives data for the 5 day forecast in 3 hours chunks. There is an API call that gives a 16 day forecast in daily chunks, but it's hidden behind a paywall. The method I used to process this data was somewhat artificial and produces certain artifacts (weather icons that display a night-time image, presumably because the time they are indexed to is at night).

Finally, it would have been nice to give the user the option to switch from Celsius to Fahrenheit.

CONCLUSION

This apparently simple assignment has hidden depths. I need to learn more about tests and spy functions in Karma and probably refactor my code so that it is more test friendly.  Old technologies provide a useful perspective on their more modern, "hipper" counterparts.