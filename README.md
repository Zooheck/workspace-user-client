# workspace-user-client

**Part two, due Thursday**

- implement a React client:
  - use `create-react-app` to generate a application to server as the client for the Web API.
  - inside the React application add **client-side routes** and components for `signup`, `signin` and showing the `list of users` stored in the database.
  - the `/signup` route should provide a form to gather `username`, `password` and `department` for the user and make a `POST` request to the `/api/register` route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the `/users` route, where they should see the list of users.
  - the `/signin` route should provide a form to gather `username` and `password` for the user and make a `POST` request to the `/api/login` route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the `/users` route.
  - the `/users` route should read the token from local storage and make a `GET` request to the `/api/users` route on the API attaching the token as the value of the `Authorization` header.
  - provide a button to `sign out` that will remove the token from local storage.

## Stretch Problem

- add the code necessary so that when a client makes a `GET` request to `/api/users` the server only returns documents with the `same department` as the logged in user. For example if the logged in user belongs to the finance department, then only users with the _finance_ department should be returned; if the logged in user is in _sales_ only users on the sales department should be returned.
- add any extra functionality to make the application more user friendly like showing a message and redirecting to `/signin` if an unauthenticated user tries to access the list of users in the `/users` route.
