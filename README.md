# Eatalog

An application for creating a catalog of restaurants.

## Inspiration
I wanted to develop Eatalog because I like tracking what restaurants I want to
visit when I travel. Below is a screenshot of how I track restaurants in Google
Sheets and was the inpsiration for my application.

![alt text](http://i.imgur.com/xfNJJfF.png)

## Wireframes

-   [imgur](http://i.imgur.com/1sbWEer.jpg)

## User Stories

As a user, I want to be able to:

-   Create an account so I can make a list of restaurants
-   Sign in to my account
-   Change my account password
-   Sign out of my account
-   Create a restaurant entry so I can track what restaurants I want to dine at
-   Edit restaurant entries so I can keep it up-to-date
-   Delete restaurant entries so it no longer appears in my restaurant list

## Planning and Development
Tentative timetable:
1. Create user stories and wireframes (~2 hours)
2. Create database table design (~2 hours)
4. Create API backend in Rails (1 day)
5. Create front end/client using Ember framework and evaluate progress (limit to 1 day)
6. Continue using Ember or switch to browser-template (3 days)

My initial design included three resources - User, Restaurant, City. I wanted
to allow users to create Cities and within each City they would add Restaurants.
Upon review with the consultants they advised to keep it simple and start with
two resources (User and Restaurant) and add the third resource if time permits.
I'm glad I took their recommendation because I knew a major challenge would be
using the Ember framework. I allocated myself one day to try Ember knowing that
I could switch to the browser-template instead. My first day developing in
Ember I was able to successfully complete three of the four CRUD actions but
was faced with a roadblock when trying to perform an update. By the end of my
first day using Ember I decided to switch to browser-template and build the
CRUD actions there before revisiting Ember, by then it was more for practice
as I did not intend to deploy the Ember client.

## Technologies Used
-   HTML
-   CSS
-   jQuery
-   AJAX
-   JavaScript
-   Handlebars.js
-   Bootstrap

## Screenshot
Below is a screenshot of the Eatalog application. Note the Dine Date field can
accept any dates including future dates as I use it not only to mark when I
dined at a restaurant but also when I plan to.

![alt text](http://i.imgur.com/cykDj5b.png)

## Open Issues
Update modal - when a user makes changes to fields in the Update modal and
closes the modal by clicking on the 'x' instead of submitting the updates, when
the modal is reopened the changes previously made are still present. The changes
are not committed to the database and doesn't cause issues but is a poor user
experience.

## Installation
1. Install with 'npm install'.
2. Start with 'grunt serve'.
