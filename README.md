# Tech Blog
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
This is a simple blog site where users can publish, edit and delete their own blog posts and comment on other posts.

View the deployed application on Heroku: [https://agile-headland-59274.herokuapp.com/](https://agile-headland-59274.herokuapp.com/)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Credits](#credits)

## Installation
In order to use this project, the user must have Node.js and MySQL installed on their local machine.

To clone the repository to the local machine, type `git clone git@github.com:kaylab78/mvc-tech-blog.git` in the command line interface.

This project requires several npm packages as listed in the [Technologies](#technologies) section below. First use `npm init -y` to initialize. Then use `npm install` to install the required packages.

## Usage
When the user visits the website for the first time, they are presented with the homepage that lists posts that have already been created. They can click on the post title, view the contents and comments, but they aren't able to comment on the post.

![The gif shows the user clicking on one of the blog post titles to see the post and its comments.](/assets/screenshot-1.gif)

If they click on the Dashboard or Login links in the navigation, they are brought to the login/sign up page.

![The user clicks the Dashboard link and the Login link and both lead to a log in page.](/assets/screenshot-2.gif)

When the user signs up with their email, username and password, they are directed to their own dashboard. This is where their posts will show up, once they create them.

![The user enters a generic username, email and password to make and account for the blog and sign in.](/assets/screenshot-3.gif)

If they already have an account, they can log in to the website with their email and password. They can create their posts on their dashboard by entering the post title and post body.

![The user logs into the blog site with a generic email and password. They create a blog post with the title "I'm excited!" The post body reads, "I'm looking forward to using this blog regularly."](/assets/screenshot-4.gif)

They can edit their own post by clicking on the edit link below the individual post. Then they can update the post title and/or body. When they click save, the post is updated. If they want to leave a comment on their own post, they have that option.

![The user edits the title of their blog post.](/assets/screenshot-5.gif)

They can delete their post by clicking on the delete button for the individual post.

![The user clicks on the edit link below their own post. They click the delet button and are redirected to their dashboard.](/assets/screenshot-6.gif)

The user can comment on posts published by other users by clicking on the link to that post from homepage.

![The gif shows a list of three blog posts all about web development. The user is adding a comment to one of the posts.](/assets/screenshot-7.gif)


## Technologies
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- CSS
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express.js](https://expressjs.com/)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)
- HTML
- JavaScript
- [JawsDB](https://elements.heroku.com/addons/jawsdb)
- [jest](https://www.npmjs.com/package/jest)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Node.js](https://nodejs.dev/)
- [Sequelize](https://www.npmjs.com/package/sequelize)

## License
&copy; 2022 by Kayla Backus

This project is licensed under the MIT license.

[License: MIT License](https://opensource.org/licenses/MIT)

## Credits
Boot Camp Modules 13 and 14

*CSS Forms.* n.d. W3Schools. Retrieved July 24, 2022 from [https://www.w3schools.com/css/css_form.asp](https://www.w3schools.com/css/css_form.asp)

Meg Meyers, boot camp tutor, assisted with fixing the functionality of the sign up form, post delete and post save buttons.