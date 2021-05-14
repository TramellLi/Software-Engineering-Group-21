# Sprints & Project Management


We have chosen Waterfall model to develop our app, it follows a sequential process flow in which team completes the project management steps in stages, pretty much in the same way water cascades from top fownwards in a waterfall. It is strickly linear in nature and relies on team members to follow a sequence of steps and only move forward when the current stage is done. This would be the most suitable model for us given we have a small and its distinct stages of development will help us to better define and tack the progress from the start.

![Waterfall](https://i.imgur.com/hGtCfyQ.png=centerme)

Here are the 3 key principles of the WaterFall model:
| Principle 1: Sequential project structure    | Principle 2: Low degree of customer involvement | Principle 3: Strong project documentation|
| :-----------                                 | :-----------                                     | :-----------                              |
|- Project activities are broken down into strictly sequential phases      | - Low client participation      | - Advocates the so-called “big bang approach” it requires lots of details upfront |
|- Once a phase is complete, it is be difficult to make changes to it  | - After requirement phase customer involvement is limited        |   -  Include the deliverables criteria, the specific skills needed to complete the project, the project’s timeline, and how the team plans to tackle the project from beginning to end |



According to this model, project would not be able to proceed until the first step is complete, so when problems arise, it will be brought to attention right away, forcing team members to react right away and to refine tasks of each stage before proceeding. This is especially apparent with the first stage of our project where we took our time in identifying deliverables and requirments of our product, however later on in the implementation stage we also ran into technical issues causing us to go back and review our design and to slightly push our schedule back to allow more time to find new approaches.  (Details of implementation and issues encountered will be found in [ [System Implementation] ] )



![Project Timeline](https://i.imgur.com/WqCwqLX.png=centerme)

**1. Idea pitching and define requirement (11/02 – 09/03)**
We started off with brainstorming and idea pitching and have steered towards creating an a health-related Single-page application. Over the course of the following weeks, we have decided to shrink the scope of our product down to a postural-related occupational diseases/discomfort body map for office workers. With the rough idea in mind, group members were set off to do some research on currently available health-related apps for inspirations, helping us to finally decide on what sections to include in our single webpage application. 

Please click [ here ] to see our proposal.

**2. Product design (28/02 – 15/03)**
After research we have agreed to divide our website into four big sections (for more design details, please see [[UX Design]] ): 
1) Headers sections:
	- Product Name
	- Logo
2) Barchart section:
	- Bar chart that demonstrates voting statistics
	- Is to receive data from back-end
3) Mainbody section:
	- Human body diagram
	- Clickable areas on human body
	- Popup window when areas are clicked
4) Footer section:
	- Disclaimer text

This is one of the very first few drafts of how the website would look like:
![Waterfall](https://i.imgur.com/QBdys5i.png=centerme)



	
Team members have decided to use MEAN stack to realize our project and have assigned roles to team members:

- Front-End: Chongyan Qi , Wayne GuangZhe Wen
- Back-End: Jian Chen
- Verification & UT: Tramell Li
- Documentation: Yanjun Liu

**3. Implementation(10/03-30/04):**

Parallel working and code sharing with our Frond-end and Back-end coders.
Building docker file, and different versions of code has been uploaded to our [dev branch] .
A few implementations have deviated from the original design of our project and in trying to solve issues such as linking up the Front-end and Back-end, we have pushed our schedules for UAT testing back by 7 days, from 04/21 to 30/04. And details for solving issues please see [System Implementation] .

Waterfall model insists that teams wait until implementation finishes before starting the UAT-testing, which would lead to have a small window of time left to do a large revision of our product.


**4. System Verification(30/04-07/05):**

UAT - testing: We have interviewed two users furing the Design phase, and for the UAT, we have went back to the same people and asked them to fill up our questionnaire and a short interview.  For details of their response please goto our [ [evaluation]] section

We have been experiencing ceratin difficulties with testing sending data from backend to front-end, and team members have been meeting up frequently for a sprint starting from 29th April.



### MeetingLogs

                       Meeting 1                    Feb 09 
- Group members self introduction and team building 
- Everyone talks about their background and related experience. 
- Clarify the requirement of the group project together
- Brainstorm the project idea together:
- Idea 1: occupational diseases of engineers   bad habits pains
Related monitoring and correcting webs and apps
mouse hand, tech neck, death from stress……
- Idea 2: COVID-19 related good habits and bad habits
Finally decide on taking on idea 1.


                        Meeting 2                   Feb 16th 
- Version control & Git
- Create a public repository and assign one person to be in charge of the git version control work. 
- Everyone tried Git together.
- Docker - Go through docker commands and get familiar with docker. 
- Task for following week:
- Clarify further research areas.
- Read up related research and come up with motivation



                 Meeting 3                      Feb 18th 
- Settle down the final idea and talk that in detail.
- Agree on motivation, objectives and problems to solve -> collectively work on Proposal
- Discuss this week’s learning content and what the teachers said in live classes. 
- Talk about docker and mirror.
Task for next week : 
- Web scraping
- look for inspiration and readily made code for front-end
- Roles:
Yan jun Liu - Report writing documentation   front-end
Qi Chongyan - front end & back end coding
Wen Guangzhe – front end & back end coding 
Chen jian - back end 
Li Rang – back end & test 
Ask teacher about the advice we give to people 
- Task for following week:
- Content research
- Background research


              Meeting 4                         Feb 23th

- Decision on sections/ information to display on the front-end
- Figure out MongoDB
- Collect content research after finalizing website visual design
- Discussion on backend data
- Paper prototype for next meeting
- Content research for next meeting
- Make it into wireframe


             Meeting 5                           9th March
- Follow tutorials discuss docker image usage in our team
-	Try to pull docker image from docker desktop
- finish background research


             Meeting 6                          March 18th
-	Discuss what are we going to present to teachers and what we are going to ask teachers during the feedback discussion session. 
-	Discuss about this week’s contents
-	Clarify everyone’s tasks during Easter holiday and ddl for each task


            Meeting 7                            March 25th

- Front-end first version(barchart part)
- Change of product name
- Starting tutorials for backend


            Meeting 8                           April 1st
- Front-end second version(body parts)
-	Discuss about current issues in front end: the webpage positioning issue. Try to solve that together by going through different methods together like using Canvas or doing positioning directly. 
- 	Discuss about the structure of data in database. 


           Meeting 9                          April 6th

-	Solve bar chart area interaction issue together 
-	Write the RESTful API codes and test data transfer from database to front end together 
-	Solve issues in the testing process: database authentication issue


          Meeting 10                        April 22th
- Test data transfer from front end to back end together and solve issues during the testing process
- Discuss about unit testing and test plan together. Pick up certain functions to test. 


            Meeting 11                     April 27th
- Discuss about user acceptance testing feedback together and discuss how to improve users’ feelings. 
- Plan for next user acceptance testing.
- Discuss data storage and seeding issue.

---
Sprint for data transfer

---

         Meeting 12                       April 29th
-	Try data seeding from data.json to database
-	Try the whole data transfer process and API together


        Meeting 13                         May 4th
- Testing transfering data from backend to frontend
- finding out where to set the commands get post restful API 
 Sovled by: editing parts of:  api.js   service.ts   component.ts
- Mongodb authenticate : “Cannot find user” 


        Meeting 14                        May 6th
- Solving MongoDB authenticate: 
we tried to insert data manually into a new database.  
In admin, the docker-compose.yml file helps us create a new user. 
And we create new database under admin-new user.  


        Meeting 15                         May 7th
- test data.json seeding to mongodb  
-There are many options to   seed data into database 
Through docker image;  through CLI tools; through describing import data in JavaScript or TypeScript files 

[System Implementation]:https://github.com/TramellLi/Software-Engineering-Group-21/blob/main/Documentation/2_systemImplementation.md
[dev branch]: https://github.com/TramellLi/Software-Engineering-Group-21/tree/dev 
[UX Design]: https://github.com/TramellLi/Software-Engineering-Group-21/blob/main/Documentation/3_uxDesign.md
[ here ]: https://github.com/TramellLi/Software-Engineering-Group-21/blob/main/Documentation/proposal.md
[evaluation]: https://github.com/TramellLi/Software-Engineering-Group-21/blob/main/Documentation/5_Evaluation.md