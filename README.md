# Business Operations Dashboard
Biz Dashboard is designed for business owners to handle all their business processes including order fulfillment, inventory management, project scheduling, and more through a intuitive, clean and simple to use interface. 

# Goals:
Engineer a microservices architecture and implement the most essential business ops features. 

# Built using
Frontend:
Backend:
Libraries:

## Data Model
The application will store Users, Inventory Directory, and a mapping/layout of warehouse space


* managers can have access to multiple users
* each staff has a list of tasks (via forms)
* users have access to inventory directory and warehouse map 
* each list can have multiple items (by embedding)
* users can have multiple lists (via references)

An Example User:

```javascript
{
  username: "manager",
  password: // a login password hash,
  staff: // an array of references to staff lists
}
{
  username: "staff",
  password: // a login password hash,
  tasks: // an array of tasks
}
{
  product id: // string
  status: // an array of status options(ie. raw, processing, processed, ready to ship, shipped, collected payment)
  task: [
    { name: "mike", time: "9:20", task: 'spraypaint black', completed: false},
    { name: "alice", time: "9:20", task: 'installed handle', completed: false},
    { name: "bob", time: "10:00", task: 'boxed and labeled package', completed: true},
  ] // name of person , time started on product, details of task, completed status
}
```
## Wireframes
/login - page for user login

![list create](documentation/Login.png)

/manager - page for manager 

![list create](documentation/M1.png)
![list create](documentation/M2.png)
![list create](documentation/M3.png)
![list create](documentation/M4.png)

/Data - analytics page for manager
![list create](documentation/Data.png)

/staff - page for staff

![list](documentation/S1.png)

## Site map
![list](documentation/Sitemap.png)

## User Stories or Use Cases
1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site, view the inventory, view the warehouse layout, and other shared tools.
3. as a manager, I can: 
  - create a new staff, task, invoice(for the customer)
  - drop tasks to staff
  - move tasks between staff
  - see which parts of the warehouse are underallocated
  - see what supplies I am low on
  - pay my workers
  - monitor my workers hours and breaks
4. as a Staff, I can:
  - view all of the tasks that I am assigned for the day
  - see where things are located and the optimal route to get there
  - I need to work with an easy interface with minimal customization where I can easily see what my manager has assigned me
5. As a new User:
  I can create a new warehouse
 


## Research Topics
* ( 5 points) react.js for frontend // challenging library to learn
  * drag and drop
  * drop down menus
* ( 2 points) research optimal user interfaces
* ( 2 points) collect payments and link bank accounts
* ( 1 points) Design a warehouse layout map
* ( 1 points) Secure logins // might not get to

## Annotations / References Used
1. 
2.



