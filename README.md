# Travelr

<img width="1787" alt="Screen Shot 2022-05-05 at 8 04 30 PM" src="https://user-images.githubusercontent.com/60331384/167060136-f6db1830-6c4f-4492-bc64-40946085f0dd.png">

Inspired by Flickr, [Travelr](https://travelr-ec.herokuapp.com/) is a platform where users build a profile and collection of images related to travel, save images they like by favoriting them, share their thoughts on images through comments, and tag their images to locations.

| [Live Site](https://travelr-ec.herokuapp.com/) | [MVP Feature List](https://github.com/ethanchen7/Travelr/wiki/Travelr-Features-List) | [Database Schema](https://github.com/ethanchen7/Travelr/wiki/Database-Schema) 

# Technologies Used

Travelr is built on React/Redux, HTML, and CSS for its frontend, Express and Sequelize for its backend, and a PostgreSQL database.

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=40/>
          <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


# Getting Started

1. Clone this repository <br />

&ensp;&ensp;`git clone git@github.com:ethanchen7/Travelr.git`

2. Install dependencies  <br />

&ensp;&ensp;`npm install`

3. Create a .env file in the root direction based on the .env.example given.  <br />

4. Create a user in psql based on your .env DB_USERNAME. <br />

&ensp;&ensp;`psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

5. Create a database in psql based on your .env DB_DATABASE. <br />

6. Start your shell and migrate and seed the database.   <br />

&ensp;&ensp;`npx dotenv sequelize db:migrate`   <br />

&ensp;&ensp;`npx dotenv sequelize db:seed:all`

7. Change directory into the frontend and backend folders in two shells. Run both servers with: <br />

&ensp;&ensp;`npm start`

## Explore Page

Images are rendered by pulling a random selection of images from the image state. Image selections are refreshed upon component rerender / state changes. Users can hover over the image cards to favorite the image and view the user who published it and any tags they left related to that image. The image gallery is designed with a CSS grid, where the number of rows and columns an image takes up is dynamically calculated by using its height and width as a proportion to the total number of rows and columns in the gallery grid.

![Screen Shot 2022-05-07 at 12 10 53 PM](https://user-images.githubusercontent.com/60331384/167268565-c8191e91-d275-4892-b028-e9d06788b44f.png)

## User Profile

The profile page displays the user's published images, profile details, and the user's favorited images. The gallery component within the user page can be toggled to show the user's published images or "Photostream", or the user's favorited images. There is also an option to edit the profile details, including the profile picture, if the user is authenticated and is the owner of that profile. 

![Screen Shot 2022-05-07 at 12 33 12 PM](https://user-images.githubusercontent.com/60331384/167269186-58689b5e-a346-44aa-961c-1ce24098315e.png)

## Favorites

Users are able to navigate to a page dedicated to showcasing their favorited images. Images are rendered from the user's profile state, which houses all the images that the user has favorited.

![Screen Shot 2022-05-07 at 12 37 45 PM](https://user-images.githubusercontent.com/60331384/167269302-993a8f8a-4939-425c-81c0-21b385caea4e.png)

## Images

Clicking an image routes the user to a page that renders the image's comments, total favorite count, image owner, and tags. Users are able to interact with the image on this page through favoriting/unfavoriting, adding, editing, and deleting comments, or editing the image's tags if they are the owner of that image. Clicking the image on the page opens a zoom modal to bring focus to the image and its description.

The upload button in the navigation bar allows users to upload an image of their choice. Once successfully uploaded, the user is redirected to their profile page, where they can view the photo in their photostream.

![Screen Shot 2022-05-07 at 12 45 20 PM](https://user-images.githubusercontent.com/60331384/167269501-b87e0707-79a0-440d-82bb-027e6ebeb33f.png)![Screen Shot 2022-05-07 at 12 49 54 PM](https://user-images.githubusercontent.com/60331384/167269649-22575469-a91b-44c4-9776-b819e1e171ce.png)

![Screen Shot 2022-05-07 at 12 48 05 PM](https://user-images.githubusercontent.com/60331384/167269589-6ddb8444-9369-4a19-85cb-b7f01a7b29c8.png)
![Screen Shot 2022-05-07 at 12 52 09 PM](https://user-images.githubusercontent.com/60331384/167269717-c1955591-0e8d-4287-bb33-b02227d67570.png)
![Screen Shot 2022-05-07 at 12 52 50 PM](https://user-images.githubusercontent.com/60331384/167269757-97e2cca4-70d2-41fa-af14-fb04c2d8f915.png)

## Search

Users are able to search for particular images, by submitting a search query with the tag of their interest in the search bar. Images with that tag are rendered in the gallery.

![Screen Shot 2022-05-07 at 12 53 27 PM](https://user-images.githubusercontent.com/60331384/167269791-ad6c3708-833f-46e1-b061-e519a858eaca.png)

## Tags

Clicking on a tag button from an image redirects the user to a page of images with that tag. 

![Screen Shot 2022-05-07 at 12 54 48 PM](https://user-images.githubusercontent.com/60331384/167269821-0c1b9e00-e133-4a12-ba8b-5aae8f7a16a0.png)

## 404 

If the user navigates to a page that doesn't exist, they are brought to a page not found view, which features my Github and LinkedIn (and a picture of myself traveling in Seoul) :) 

![Screen Shot 2022-05-07 at 12 57 13 PM](https://user-images.githubusercontent.com/60331384/167269875-47ffdd57-1bb9-42bf-b266-17f3f62ea44e.png)
