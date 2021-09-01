# Augeo
The basis of the application is to allow users list products which other users can then bid on. In order for users to list products or bid on them they will have to make an account first. Creating an account requires an email address, a password with 6 or more characters, and a first and last name. When listing a product the user needs to input the initial ask, final ask and duration of the product. All the products in a category are assumed to be new and of the same model and type. No discrenpancies are allowed. Bidding involves inputting a value that is higher than the current ask and that is not greater than the final ask. 
The user with the current ask when the time runs out is assigned the product. If a user inputs the final ask as his bid value he buys the product outirght. 
On the account page users can view/update their personal information, view their bids, listings and purchased, and delete their account.

The app was a learning experience and a place to hone my skills and bring together all the technologies I had learnt. The platform is supposed to be somewhat similar to a free market seeing as the users control the price of each category. I used React for the frontend as it allowed me to create clean, reusable components and take advantage of useState and useEffect hooks to ** . For the database I went with MySQL due to the structure of the data and how they related to one another. I stumbled on a couple of occassions and faced a few challenges such as deciding how I wanted to implement authentication, or picking between a carousel versus the traditional grid view for the product list, or figuring out cors. I have several features I intent to implement and they are listed [below](#future-features).


## Current Features
- Login/Registration
  - When the application is launched for the first time it checks whether there is an existing session by accessing the jwt AccessToken cookie stored in the request and verifying it against the secret key. If it is valid it sets the req.user and if it is not we assume the jwt has expired and clear the cookie.
  Users need to log in before they can access several services on the website such as placing a bid, accessing the account page, creating a listing, or adding a category. If the user does not have an account they can create one by proving their email address, a password with 6 characters or more, and their first and last name. Once their input has been validated a post request is made to the server with their information passed in the body of the request. The server also performs input validation before checking to see if the account already exists. If it does an error code is sent back and if it does not the account is added to the database and the jwt cookie is set. Login checks if the account exists; if it does it sets the jwt cookie and if not sends an error code back.
- Home Page
  - The home page consists of different filters for the products. They are Featured Products, Most Popular, Trending, Latest Category, and Recent Bids. All queries for the products check if the duration has not expired, if the product has not been sold, and if the product was not listed by the current authenticated user.
    - Featured products works by selecting a random category from the database.
    - Most popular works by selecting the category with the most sales.
    - Trending works by selecting the category with the most bids in the latest 30 bid records.
    - Lastest category selects products from the newest category.
    - Recent Bids selects the latest 15 products that were bid on. I am considering increasing it from 15 to 30.
- Browse Page
  - Users can browse products based on their categories. Upon entering the page the user is greeted by the categories and once one is clicked on all products in that category are fetched and displayed. If a user is not logged in then all products are fetched, if a user is then products they listed are not fetched. 
 
- Sell Page 
- The products have a timeout function which works by assigning the product to the user with the highest bid when the duration expires.
- Retrieve products based on different search queries such as popular, recent, etc. 
- Expired products or products that have been bought are not displayed to users in the home and browse page.
- Users can view their listings, bids and purchases in the account page.
- Users cannot view their own listings on the home or browse page.
- Users can modify their personal details and password.
- Improved security in server and backend.
- Users can toggle password visibility.
- Users can now add their address.

## Future Features
- New categories can be added but they would need to be authorized first.
- <s>An address table will be added as well as an address form in the account page.</s>
- Ability to send messages between the seller and the buyer of the product.
- Archive a listing if it has no current bids or if it has been purchased.
- Delete expired bid records upon the users request.
- A robust search functionality for a product list.
- A minimum and maximum constraint to be placed on the product prices.
- Ability to reset password.
- Internal currency system.
## ERD Image
![ERD Image](https://github.com/TonyADI/Augeo/blob/main/src/backend/ERD%20Image.png?raw=true)

## API Documentation
### Category Endpoints
<b>Request</b>
<br>
GET https://tonyadi.loca.lt/categories
<br>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>category</td>
    <td>string</td>
    <td>Returns a list of categories.</td>
  </tr>
</table>
<b>Request</b>
<br>
GET https://tonyadi.loca.lt/categories/:category/products
<br>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>category</td>
    <td>string</td>
    <td>Required. Returns a list of products with the specified category name.</td>
  </tr>
</table>
<br>

### Product Endpoints
<b>Request</b>
<br>
POST https://tonyadi.loca.lt/products
<br>
<b>Request</b>
<br>
GET https://tonyadi.loca.lt/products
<br>
<b>Parameters in query</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>sortBy</td>
    <td>string</td>
    <td>Required. Returns a list of products based on the string provided. Supported strings include
    'popular', 'trending', 'recent', 'featured', and 'latest'.</td>
  </tr>
</table>

### Users Endpoints
<b>Request</b>
<br>
POST https://tonyadi.loca.lt/users
<br>
<b>Request</b>
<br>
GET https://tonyadi.loca.lt/users/products
<br>
<b>Paramters in query</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>Required. Returns a list of products associated with the authenticated user. Supported strings include 
    'bid', 'purchase', and 'listing'.</td>
  </tr>
</table>


<b>Request</b>
<br>
GET https://tonyadi.loca.lt/users/details
<br>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>user</td>
    <td>string</td>
    <td>Returns a user object containing the authenticted users email, first name and last name.</td>
  </tr>
</table>

## Installation
The project is currently live at https://tonyadi.com/augeo/

## Instructions


## ToDo
- Add cookie policy page.
- Complete Api Documentation.
- <s>Optimize for mobile.</s>
- Integrate React Redux.
