# FANPAGE APP
## [Homepage](https://rustydcoder.github.io/GOT-fanapp/) 
This is a game of thrones fan page app built with Facebook's REACT. Built on a 3rd party API [TVMAZE](http://tvmaze.com).

## RESOURCES

#

### API

- [HOMEPAGE](http://api.tvmaze.com/shows/82)

- [SEASONS](http://api.tvmaze.com/shows/82/seasons)

- [EPISODES](http://api.tvmaze.com/shows/82/episodes)

- [CAST](http://api.tvmaze.com/shows/82/cast)

### BLOG POST FOR BUGS

1. Had problems with displaying the full info gotten from the api about each cast. This was solved using the concept of modal - [Stack Overflow](https://stackoverflow.com/questions/54276832/react-how-to-display-a-modal-popup-only-for-that-specific-div)

2. Had memory leak problem because of multiple requests without unmounting component - [Medium](https://medium.com/@selvaganesh93/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7#:~:text=Warning%3A%20Can't%20perform%20a,tasks%20in%20the%20componentWillUnmount%20method.&text=an%20unmounted%20component.-,This%20is%20a%20no%2Dop%2C%20but%20it%20indicates%20a,memory%20leak%20in%20your%20application.)

3. Had a problem with routing in general: nested routing, modal routing. But it just required me reading and going through the examples of the official documentation of react-router-dom - [react-router-dom](https://reactrouter.com/web/example/nesting)
