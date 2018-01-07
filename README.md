# Sitter Swap

This is a capstone project for the Turing School of Software and Design Backend Program. The goal of the project was to learn a new language.

Sitter Swap is tool to bring dog owners together to help reduce the cost of pet sitting and boarding. After creating an account, user can make requests for other users to watch their dogs while they are on vacation. Users can also apply to a request to dog sit for another user. Users have access to a profile page to add information about their dogs and a dashboard to view the status of trip requests and view messages from other users.

This is the frontend for the project. The backend repo can be found at https://github.com/blsrofe/sitter-swap-api

### Prerequisites

This project uses Auth0 for authentication. You can clone and use the project as is, but it is recommended to setup your own auth0 account and change the keys in the auth.js file.

You can create an account here https://auth0.com/

```
auth0 = new auth0.WebAuth({
  domain: your info here,
  clientID: your info here,
  redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://sitterswap.herokuapp.com/callback',
  audience: your info here,
  responseType: 'token id_token',
  scope: 'openid profile'
})
```

### Getting Started
```
git clone git@github.com:blsrofe/sitter-swap.git
cd sitter-swap
npm install
```

## Deployment

visit https://sitterswap.herokuapp.com/

The backend site can be found at https://sitter-swap-api.herokuapp.com/

## Built With

* [React](https://reactjs.org/) - A javascript library for building user interfaces

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details a code of conduct, and the process for submitting pull requests.

## Author

* **Becki Srofe** - [Blsrofe](https://github.com/blsrofe)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
