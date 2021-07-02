# Augeo
The basis of the application is to allow users create products which other users can then bid on.

All the products in a category are assumed to be new and of the same model and type. No discrenpancies are allowed.

The products also have a duration which gives a sense of urgency to the whole thing.

The project is a long way from being complete but I would say there is some basic functionality in it.

The platform is supposed to be somewhat similar to a free market seeing as the users control the price of each category.

I do not intend to make this an actual platform/website but rather to use it as a learning experience and a place to hone my skills and bring together all the technologies I have learnt.

## Current Functionalities
- Users can currently create an account, login, logout, create a product/listing, bid on products or outright buy them.
- Form validation for register, login and create product.
- The products have a timeout function which works by assigning the product to the user with the highest bid when the duration expires.
- Retrieve products based on different search queries such as popular, recent, etc. 
- Expired products or products that have been bought are not displayed to users in the home and browse page.
- Users can view their listings, bids and purchases in the account page.
- Users cannot view their own listings on the home or browse page.
- Users can modify their personal details and password.
- Improved security in server and backend.
- Users can hide or show their password when entering it.

## Future Functionalities
- New categories can be added but they would need to be authorized first.
- An address table will be added as well as an address form in the account page.
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

## ToDo
- Add cookie policy page.
- Add Api Documentation.
- <s>Optimize for mobile.</s>
- Integrate React Redux.
