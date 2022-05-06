# Travelr

![Screen Shot 2022-04-16 at 10 18 03 PM](https://user-images.githubusercontent.com/60331384/163701522-dad8fa9a-57e5-43c5-9464-0cac67d31a89.png)

[Travelr](https://large-medium.herokuapp.com/) is a platform where users can share diverse thoughts, read and write stories of any topic, follow certain topics of interest, as well as follow other users. It is inspired by the the social publishing platform Medium.

| [Live Site](https://large-medium.herokuapp.com/) | [MVP Feature List](https://github.com/ethanchen7/Large/wiki/Features-List) | [Database Schema](https://github.com/ethanchen7/Large/wiki/Database-Schema) | [Frontend Routes](https://github.com/ethanchen7/Large/wiki/Front-End-Routes) | [API Documentation](https://github.com/ethanchen7/Large/wiki/API-Documentation) | [User Stories](https://github.com/ethanchen7/Large/wiki/User-Stories) |

# Technologies Used

Large is built on Node JS, HTML, and CSS for its frontend, Express and Sequelize for its backend, and a PostgreSQL database.


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=40/>
          <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


# Getting Started

1. Clone this repository <br />

&ensp;&ensp;`git clone git@github.com:ethanchen7/Large.git`

2. Install dependencies  <br />

&ensp;&ensp;`npm install`

3. Create a .env file in the root direction based on the .env.example given.  <br />

4. Create a user in psql based on your .env DATABASE_URL app_name   <br />

&ensp;&ensp;`psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

5. Create a database in psql based on your .env DATABASE_URL db_name.  <br />

6. Start your shell and migrate and seed the database.   <br />

&ensp;&ensp;`npx dotenv sequelize db:migrate`   <br />

&ensp;&ensp;`npx dotenv sequelize db:seed:all`








