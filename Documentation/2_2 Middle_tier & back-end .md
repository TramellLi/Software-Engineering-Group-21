# Middle-tier:

In our project, middle tier is more concerned about data transfer and the application of API and it helps define routing. 
Node.js & RESTful API

For the middle tier, the major technique we use are node.js and RESTful API. 
Firstly, we used Node.js routing and two major routes in our project are /Comments and /BodyParts. 
Additionally, we used two approaches under Node.js RESTful API which are ‘GET’ & ‘PUT’. 

Examples: 
GET /BodyParts/ID to get certain body parts’ 
PUT /BarChart/ID to update bar chart data. 
As for data transfer between front end and server, we had two options to choose from 1) using form 2) using AJAX. Considering that not only would our app need to transfer data from back-end to front-end but also did the other way transfer, AJAX allows this and makes it more efficient. The user interaction has a design involving real time update of part of the webpage. When user click on the bar chart to vote for the occupational diseases they have, the corresponding bar chart number would grow by one. Therefore, the data transfer is not limited to from back-end to front-end but also involves from front-end to back-end and we need AJAX here to help us deal with it. With AJAX, we do not need to load the entire page again to see some updates to certain part.  
So we planned to use AJAX and its request & response framework: 

        $.ajax({
        Type:”PUT”.
        url:”../BarChart”.
        Data.sendData.
        Success:function(data){…}
        });


**（这里可能还有需要添加的地方，留个记号，是接在ajax后面的）**

As for server interaction with back-end, we have chosen to use ODM “Mongoose” to interact with the database as it is designed to work with asynchronous environment. It corresponds with our app’s demand for some asynchronous data transfer. 
 
Therefore, for middle tier, we need to import Mongoose and the three APIs: db.js, BodyParts.js and Comments.js. 




# Back-end:

In our project, back-end is more concerned about data structure and data storage. The main data that needs to be read from database to front end is body parts’ symptoms and advice as well as data for the diseases situation bar chart. 

**(1)	MongoDB 数据库部分（数据关系图….）chen jian    **

(2)	Data persistent storage: 
We have some static data which would not be changed by users, so we need to make it persistent. We tried to include the binary files inside  the database folder to build the image, however, different machines would read them differently. As we need to deploy the database  server inside a container through a image rather than a stable physical server,  the local static data may be exported to a json file either included in the database image or the project image. In order to keep the database image specific,  we chose only to use the official Mongodb image and create an empty database folder in the volume mounted on run time machine when data server is settings up.  

Due to the docker image characteristic, there would be no database in the main image of the project as the database would be in a separate image when docker compose up. Therefore, we were forced to come up with other ways to deal with data storage issue. Our resolution is to store all the raw data in data.json and then write up a script to automatically read data from data.json to a new database. Later on, data would be read from database to front end. 

(3)	Data seeding from data.json to MongoDB:  
Since that we need to seed data from json to database, we need to write up seed script. 
Firstly, we tried to use seed.js and add seeding script to package.json to run npm run seed in order to seed data into MongoDB. 
 
![json](https://i.imgur.com/mMiSV3u.pngstyle=centerme)

Package.json
 
![json](https://i.imgur.com/TQvErLt.pngstyle=centerme)

**seeding这里还得尝试，还未确定最终方案。**



Deployment details (including Docker), include how you have been achieving continuous integration and deployment.
Our group uses Docker image to help us with deployment and continuous integration. As for deployment, our group uses Docker to unify the web development environment. We all practiced the use of Docker and one of us uploaded his image. Then all other group mates pulled this image and started to use this image.
We also authorize the github project on dockHub to achieve continuous integration. By doint so, when there are updates on github project, the Dockerfile would automatically be executed and be composed up. The new compose up result would be saved in the dockerHub container. 
