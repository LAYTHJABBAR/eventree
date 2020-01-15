This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# EVENTREE
React app for users to create and manage events. If you need to organize and keep track of attendees for an event, this web app provides an easy-to-use interface.

The list of available events is available to anyone to view, whereas creating, managing and joining events require users to be logged in.

Users have profile pages where they can view a list of events they have created or are attending, and upload pictures.

## Screenshots

### Events list
!["Events list"](/docs/01-events-list.png)
### Event detail
!["Event detail"](/docs/02-event-detail.png)
### Map of event venue
!["Event map"](/docs/03-event-map.png)

## Videos
### Authentication and User Profile
![Alt Text](https://github.com/samirparab2019/eventree/blob/master/docs/My-Movie.gif)

### Events
![Alt Text](https://github.com/samirparab2019/eventree/blob/master/docs/video2-events.gif)

## Features
* User authentication
  * Create new user
  * Validates email and password for login

* User Profile
  * Input date of birth, gender and home town

* About Me
  * For users to enter additional information

* My Photos
 * Upload photos, edit photos, and select main profile photo

### Settings dashboard

* Users can view and edit their profile:
  * All, Past, Future and Events Hosted
  * Profile images

## Events
* Ceate events page
 * input event name, category, description, city, venue, date
* Event details page
 * View attendees
 * Join an event
 * Show map
 * Cancel attendance
 * Manage event
 * Remove role as event manager
Upload images

## Tech Stack
Back end
* NodeJS

## Front-end
* React
* Redux
* Semantic-UI

## Database
* Firestore / Firebase

## Public API
* Google Maps JavaScript, Geocoding and Places

## Testing
* Cypress E2E

## Node Dependencies
    cuid
    date-fns
    firebase
    google-map-react
    moment
    react
    react-cropper
    react-datepicker
    react-dom
    react-dropzone
    react-infinite-scroller
    react-lazyload
    react-load-script
    react-loadable
    react-places-autocomplete
    react-redux
    react-redux-firebase
    react-redux-toastr
    react-router-dom
    react-scripts
    redux
    redux-auth-wrapper
    redux-firestore
    redux-form
    redux-thunk
    revalidate
    semantic-ui-react

## Node Development Dependencies
    testing-library/react
    types/react-redux-toastr
    types/react-router-dom
    cypress
    redux-devtools-extension
    source-map-explorer
    typescript

## Instructions
* Checkout project from github
* Update api keys for Google Maps and Firestore. These can be obtained from:
  `https://cloud.google.com/maps-platform/` and `https://console.firebase.google.com`
* Run `npm install` to install dependencies
* Type `npm start` and navigate to `localhost:3000`
