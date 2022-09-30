## Vue App -chuck-jokes__
A simple joke generator app.

## The Challenge
Create an application which fetches and stores the jokes from https://api.chucknorris.io and displays them in the frontend.
- You are free to use any HTTP library which fits your needs(axios, superagent etc...)
- The URL https://api.chucknorris.io/jokes/search?query=all returns the full list of all jokes. But there are also other options available. Check them out
- Try to store the entries in a way which easily allows to get them for by their specific category.
- Jokes which don’t have a category should be summarized under ‘Uncategorized’.
- Each joke have a LIKE / DISLIKE counter, and a label that is related to it’s current score.
- The “LOAD MORE” functionality could be done with pagination, on scroll, on click or as you see fit. Be creative
- The search should present a list of jokes matching the query - if there is only one matching joke, then you should land on a single joke page ( level 2 )
- Use Webpack to compile your SPA.

## The Tools and Hows
- The vue app was created using vue 3, I made use of Vue 3 because of its specific advantage over vue 2, requiring lesser boilerplate to setup as well as its lighter and faster.
- `Pinia` store was used in place of vuex for state management and `Composition-API` because of its flexibility.
- The HTTP library used is `axios`
- BASE_URL https://api.chucknorris.io/jokes/search?query=all stored in the `.env` file and assessed in the `api` file
- Jokes which don’t have a category were summarized under `Uncategorized`
- The “LOAD MORE” functionality is made using an infinite scroller package `vue-infinite-scroll`. see the `index` for more detail.

## How do I get setup ?
1. Clone Project and `cd` to project directory >> `client`
2. Run `yarn install` in root folder to install dependencies
3. Type `yarn dev` in the root folder to initialise project on local dev. env.
4. Navigate to your browser http: [your port in dev.env] e.g. http://127.0.0.1:5173/
5. To run tests cases, type  `yarn build` in your terminal/ssh client

- link to live `[https://hannah-anamen-technical-assessment.netlify.app/](https://hannah-anamen-technical-assessment.netlify.app/)

## API Reference

#### Get all jokes

```
 `[https://api.chucknorris.io/jokes/search?query=all/](https://api.chucknorris.io/jokes/search?query=all/)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. null |
| `category` | `string` | **Required**. null |
| `id` | `string` | **Required**. null |
