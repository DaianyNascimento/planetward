# PLANETWARD

## Description

Prepare your trip wisely to survive on Mars! Signup, choose your items and find out whether or not you will survive your journey.
 
## User Stories

- **404** - This error page shows up whenever requested page is not available
- **500** - This error page shows up whenever there is a server conection problem
- **homepage** - The user can access the homepage to see what the app is about, signup and login 
- **sign up** - The user can sign up on the webpage to see all the events that he could attend
- **login** - The user can login on the webpage to see all the events that he could attend and also see his profile page
- **logout** - The user can logout from the webpage to make sure no one will access his account
- **success** - The user can see a message "You successfully made it to mars!". Also, he can go back to the profile page
- **failure** - The user can see a message "Oh no! You ran out of supplies and did not make it to mars.". Also, he can go back to the profile page
- **journeypage** - The user can choose any item he wants, according to the amount of credits available, to try to get to Mars. If he has already chosen his items, he can edit them.
- **profilepage** - The user can check his profile page information and see, edit or delete his itens. Also, the user can start a new journey. 

## Backlog

List of other features outside of the MVPs scope

User profile page:
- Show an user avatar image

User journey:
- Ticket with date and name on it when the user successfully goes to Mars
- Use an API to get the icons
- Create fill in form for user to create his own item


## ROUTES:

- GET / 
  - renders the homepage
- GET /signup
  - renders signup page
- POST /signup
  - redirects to login page
  - body:
    - username
    - password
- GET /login
  - renders the login page
- POST /login
  - renders the  profile page
  - body:
    - username
    - password
- GET /logout
  - renders logout
- POST /logout (destroy user session)
  - redirect to login page 
- GET /profilepage
  - renders profilepage (the profile overview and get user current item )
- POST /items/:id/edit (to edit items)
  - redirects to success, failure page or even profilepage 
  - body: 
     - credits
     - spacesuitQuantity
     - foodQuantity
     - oxygenQuantity
     - fuelQuantity
     - solarpanelQuantity
     - sproutQuantity
     - waterbottleQuantity
     - userId 
- GET /items/:id/edit (to get username and all items)
  - renders the journey page
- POST /item/:id/delete (to delete all items) 
  - redirects to profile page
  - body: 
    - item id 
- GET /journeypage
     - renders the journeypage page and get the username
- POST /currentUser/:id/delete (find by id and delete the user item)
    - renders the profilepage
- GET /failure
    - renders the failure page
- GET /success
    - renders the success page

## Models
  
  - userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    items: { type: Schema.Types.ObjectId, ref: 'Item' },
  },
  {
    timestamps: true,
  }
);

  - packinglistSchema = new Schema(
  {
    credits: {
      type: Number,
      unique: true,
    },
    spacesuitQuantity: {
      type: Number,
      unique: true,
    },
    foodQuantity: {
      type: Number,
      unique: true,
    },
    oxygenQuantity: {
      type: Number,
      unique: true,
    },
    fuelQuantity: {
      type: Number,
      unique: true,
    },
    solarpanelQuantity: {
      type: Number,
      unique: true,
    },
    sproutQuantity: {
      type: Number,
      unique: true,
    },
    waterbottleQuantity: {
      type: Number,
      unique: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
  );

## Links

### Trello

[Trello board](https://trello.com/b/KxsSvweU/planetward)

### Git

[Repository](https://github.com/DaianyNascimento/planetward)

[Deploy](http://heroku.com)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1aCpBeRYQWNh3zm9vxSlDv70VkrSoxoROuP1cvW9qts4/edit?usp=sharing)
