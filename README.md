# UFOs

## Overview

Creating a webpage of UFO sightings that allows visitors to sort through the variously reported events by multiple criteria, such as by date, city, state, country, and the shape of the UFO.

## UFOs Results

The Filter Search (shown below) section of the webpage makes it easy for users to find exactly what they're looking for, with regards to the data that is available on this page. A user simply searches on the left-hand side of the page under the "Filter Search" words and following exactly as indicated by the filters (e.g., 'Enter Date', 'Enter City', etc.) by inputting the desired results as suggested by those filters.

![UFO CA](/RMimages/index_start.png)

So, if one would want to search for a sighting in the state of California, for instance, the user would input 'ca' into the 'Enter State' search field, and by either hitting enter or simply clicking out of the search field, it will bring up the data with all sightings that were reported in the state of California (see below). 

![UFO CA](/RMimages/search_ca.png)

Similarly, users can use multiple data points to receive a more refined search result. A user can specify not only the state but may choose to enter a city as well; if the user adds 'fresno' to the 'ca' search above, they will get a specific result, as shown below.

![UFO Fresno CA](/RMimages/search_fresno_ca.png)

Using different search terms or dates, together or separately, can bring varied results.


## UFOs Summary

One drawback of this new design is that the search only recognizes the entered search terms as it is listed in the data (all search field data is in lower case). So, if a user were to enter 'CA' instead of 'ca,' as was searched above, there will be no results listed from that search (see below). Capitalization affects what results will display.

![UFO CA None](/RMimages/search_CA_none.png)

The first recommendation I would make for further development would be to adjust for upper-cased search terms. As said above, if a user enters 'CA' as a search instead of 'ca' they won't get any results. Adjusting the code to have it read the search and return the desired results could help with user searches.

The second recommendation I would make for further development would be to include another search field to filter the data by. There are comments included in the data and having a user search by what the UFO sighting was described as, using keywords, may help them to find exactly what they're looking for even faster.

## Resources
- Data Source: [UFO Data](static/js/data.js),
- Software: JavaScript, 3.7.6, [Visual Studio Code](https://code.visualstudio.com/), 1.65.2