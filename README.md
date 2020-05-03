## Fissara Technical Test
Requirements:
- Use whatever preferred UI libraries, for example, styled-components, react-bootstrap, react-material UIs etc
- Should have 3 different pages, the details are as following
- The login page should have a form, centre-aligned, support input Email/Username, and password
- List page's content should fetch from http://dummy.restapiexample.com/api/v1/employees, and use FlatList display all of the names, - - should have a text input box to search by keywords
- Click the list item should navigate to the details page to display its content
- Must Redux to manage the state, better to integrate with Redux-thunk, Redux-Saga or Redux-Observable to handle actions
- Once logged in, it's not allowed to navigate back to login page again unless actively log out
- Better to have Webpack development server

## Tech Stack

- redux
- redux-thunk
- react-redux
- react-boostrap
- react-router-dom
- sessionStorage to emulate login/logout

## Captures/Deliverables

- 3 pages Login, Employee List and Employee Details Page
- To login please use {username: mark, password: admin}, this is only static credential data
- captures

![Image description](https://github.com/markortiz905/emp-app/blob/master/captures/login.PNG)
![Image description](https://github.com/markortiz905/emp-app/blob/master/captures/listView.PNG)
![Image description](https://github.com/markortiz905/emp-app/blob/master/captures/filter.PNG)
![Image description](https://github.com/markortiz905/emp-app/blob/master/captures/detailsView.PNG)

