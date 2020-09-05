This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Live on [click here](https://cocky-bohr-f86217.netlify.app/)

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
### Validation
 * Email and password are validated on registration and login

### All users (general public) can:
* Register with their username, email address and password
* View a list of recent event activities
* View a list of all events
* Open an event to view its details
* View a map of an event's location
* See a list of an event's attendees

### In addition, registered users can also:
* Log in with a valid email address and password
* Create, update and cancel events
* Join upcoming events
* Cancel their place at upcoming events
* Remove themselves as host of an event
* Take over as host of an event having no host
* View the profile page of any user

## User Profiles
### Registered users can:
* View events they have signed for: All, Past, Future and Events Hosted
* Edit their user profile information
* Input their interests
* Upload photos to their profile and edit profile photos
* Change password

## Tech Stack
### Back end
* NodeJS

### Front-end
* React
* Redux
* Semantic-UI

### Database
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
* In another terminal, type `npm run cypress` for end-to-end testing

## Contributors

* [Samir Parab](https://github.com/samirparab2019)
* [Layth Jabbar](https://github.com/LAYTHJABBAR)
* [Jamaal Ahmed](https://github.com/jamaal729)


