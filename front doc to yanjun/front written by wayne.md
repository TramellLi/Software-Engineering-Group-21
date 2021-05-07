# Title: 

​	**Front end Part of the whole porject.**





# Outline: 

 	1. Main framework: Angular.
      	1. Angular Introduction
      	2. Front end Introduction
      	3. Balance Between those two
 	2. Functionalities of our project
      	1. body click
      	2. vote
      	3. comments
	3. Layout of the single page web application.
     	1. bootstrap
     	2. div
     	3. table
 	4. Features  implementation
      	1. positions
      	2. components
      	3. codes

![SPA info net](/Users/wayne/Desktop/front doc to yanjun/image000.png)



# Content:

​	In this project, we will learn and use MEAN stack which is a development toolkit for creating single page applications. The whole project is aiming at practice of full stack development and MEAN is the abbrevation of four development tools, Mongo Database for data storage, Express web application framework, Angular  Javascript web frontend, Node.js application server. The third part of that, 'A', Angular is going to be used as the framework of the frontend for the project. There's going to be a model from front to back, where frontend is in charge of display all the content we want to show to the users, not only the pure data and characters, but also the decoration and style pattern, apart from this, it also provides the features of interactions between users and the web page, as well as data transport from database behind backend to the components on the top of the frontend. In this part of documentation, we will be focusing on the frontend disign and implementation, including appearence and data, and some of the connection to the back end.

![image-20210506182709078](/Users/wayne/Desktop/front doc to yanjun/image001.png)

**1 .   Main framework: Angular.**

Angular is an application design framework and development platform for creating efficient and sophisticated sigle-page apps.

![image002](/Users/wayne/Desktop/front doc to yanjun/image002.png)

There are some frameworks at the same level as Angular, like React, Angular uses the browser's DOM, while React uses the virtual DOM. Virtual DOM is a simplified version of DOM. By using the virtual DOM, you can change any element very quickly without having to render the entire DOM. It changes performance from excellent to excellent.

![image-20210506180343126](/Users/wayne/Desktop/front doc to yanjun/image003.png)

Angular the a pretty integrated and mature framework, wihch means it is more powerful but tough to get started for freshmen. We are going to use some basic features from Angurlar 11, which is stable and useful, supported and developed by Google. With the help of that, many processes could be simplified a lot no matter which stage we are. We make using angular easier by making use of Angular CLI tool, representing Command Line Interfaces, in some basic example we know that it could help create folders and files, put the template content into them and setup the configuration file and environment well automatically, which is helpful and friendly to new users but not good for new developers. 



**1.1 Angular Introduction**

We are going to be using Angular for our client side development. Angular is used as a cross-platform tool, constructing applications with it makes codes can be used on different platform such as web, mobile web, mobile app, native app and desktop app. And Angular has the highest speed  and performance on web platform because it renders bu web worker and service, as well as high scalability based on RxJS Immutables.js and other modules which suitable for huge amount data. Developers and fans of Angular make this community active and vibrant, i.g. components, templates, toolkits, packages, pulgins in IDE, etc. As a result, a virtuous circle has been formed, in which more and more useful tools can appear, and developers can easily use them. 

There are some prerequisites. To use the Angular framework, you should be familiar with the following: HTML, CSS, Javascript. Knowledge of [TypeScript](https://www.typescriptlang.org/) is helpful, but not required.

To install Angular on your local system, we need the following: Node.js and npm package manager.

To install the Angular CLI, which will help us create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:

```shell
npm install -g @angular/cli
```

In this chapter, I only mention it to here. In the following chapters, I will explain in detail how to build an angular application from scratch.

I have to mention a concept here, that is, the angular workspace and project file structure.
When we create a new project with angular cli, we will find that there will be a folder named after the project in the current directory. Open this folder, you will find that some basic files needed by the front end of the project already exist, and cli helped us create them. We need to make some appropriate modifications, additions and deletions to it.
It contains some configuration type files, source code files, dependent files, test files, etc.
Such as angular.json package.json src node_modules tsconfig.json and so on.

**IMAGE: workspace configuration files**

![image-20210506214315625](/Users/wayne/Desktop/front doc to yanjun/image004.png)



**IMAGE: Application source files**

![image-20210506214427210](/Users/wayne/Desktop/front doc to yanjun/image005.png)



**1.2 Front end Introduction**

As mentioned above, as a preparatory work, you need some foundation to learn and use angular, which includes html css and JavaScript.
In fact, the above three main knowledge are enough to complete the design and development of a web page, but if you want to run it completely, including the entire process of data from the server back-end database to the front-end, as well as the front-end page interacting with users Relying on some packages and tools is very necessary, only when writing some time-consuming, relatively simple pages, and relatively balanced static and dynamic, only use the above three skills. But if we want to make our application not only static pages, animations, interactions, not just aesthetically simple, display boring single pages, there is little interaction, there is no data flow page, you still need to be other Understand the use of tools. However, these three must be the foundation, that is to say, the three are fully proficient in order to master other tools faster. The tool only saves time and enhances the effect, but the basic principles are the same.
Here is a simple explanation. We are responsible for the front-end. Before using angular, we have completed the basic learning of the above three knowledge by ourselves. HTML builds the structure of the entire web page, CSS typesets the structure to make it beautiful, and Javascript is the key to truly allowing users to communicate with the page, enough to make the page move and data flow.



**1.3 Balance Between those two**

Therefore, as a beginner in web page development, it is very important to be able to find a balance between the two points. Why is it important? The important thing is how to make a decent application in a short period of time, and also have a certain learning and understanding of full-stack development. This is a challenge.
One of the first points is that, starting from the basics, understand the principles and syntax from the bottom. The second point is to start directly from the angular framework to simplify the development process and save development time. The advantages and disadvantages of the two are very obvious. The former is simple and easy to learn, but it is far away from the real development, and the results produced are also very simple. If you don't need a lot of time to research, it is difficult to go deep and gain results. Create a powerful and beautiful interface. As for the latter, if you are eager to achieve success and have not a solid foundation, you will be blindfolded during the development process. Many things do not understand why you want to do this, and you don't know how to solve the problem. This is what we have summed up in actual learning and development.
Therefore, combined with the lecture provided by the teacher in the web chapter of the software tools classroom, we are committed to finding a kind of front-end development, and finding a balance between the old technology and the mature framework. Use the corresponding technology in the right and appropriate place to improve the high flexibility of the project and shorten the learning time, and smoothly complete the transition from the ignorant to the familiar.

**Examples:**

Here is a brief list of two practical cases, but also to the following paragraph of the drama. First, why don't we use bootstrap, but directly use div tags and css statements to divide the page structure. Because our demand for bootstrap is not high, our need is simply to divide the page area, without taking into account the display on devices that are not used. Because of the precise operation of the mouse in our functional design, we didn't expect the application to run on a small-screen device during the development phase, but one of the features of bootstrap is the adaptively changing layout. We can do it in other ways, and it's just in line with the pace of learning, and of course, we don't deny that if we do it later, we'll choose bootstrap, just say that the result of the current balance is deprecation. In the second example, we added a script tag to the index .html file, and there are two reasons why the scripting language is not completely in the .ts file. One is that large-length scripts placed in ts files are not conducive to debugging at development time and can be falsely reported due to syntax limitations. Second, the function is actually different, it seems to be a mix of script tags and ts files, not standardized, but in fact, the response to special events pulled out, is organized. Of course, there are improvements, you can say that the statements in the script tag in the external file, replaced by the external introduction of script types, more regular.







**2 . Functionalities of our project**

In this section, I'm going to cover the main features that our application will implement, because the determination of functionality doesn't fall into the front-end category, but it's relevant, and I'll briefly cover it here.
After all, we wouldn't develop features that the front end can't implement, or that are very difficult to implement. So we're still very confident in our understanding of Serious Play, just to say that we've made concessions on the feasibility of it. So from the first time we met to discuss what we wanted to do, we had a lot of whimsy about making our pages useful and playful, but after a period of study and discussion, we scaled back our engineering. Animations and effects that were initially expected but phased out are placed in future iterations and are currently only available in versions that are higher than the minimum feasible version.

**prototype full of functions**

![Prototype_wayne](/Users/wayne/Desktop/front doc to yanjun/image006.jpg)

**lean mature prototype**

![image-20210506225133190](/Users/wayne/Desktop/front doc to yanjun/image007.png)

**sperate targets:**

Doing so here has the following advantages: First, clear functionality and engineering scope, can be considered to a certain degree of feasibility analysis. Second, because we are a team with a lot of members, after splitting different functions, different modules can be left to different people in the development process, both developed and integrated. Shorten the development cycle and do your job.

**difficulty of integration:**

Of course, everything is a double-edged sword, which undoubtedly adds a step, that is, integration. This is also a technical difficulty in this step. In the actual operation process, we arranged two people complex front-end development, in the integration of the time is indeed different from the desired effect, after realignment, or solve the problem, relatively speaking, overall is improved efficiency.



Our app has three functions, one is to be able to click on the human body, generate corresponding, give users feedback some valuable information, one is the voting session, the last is, the comment area. We'll cover it in more detail below.

**2.1 body click**

This feature is arguably one of the most important features we want to do, and we want users to be attracted to the images of people on the page when they open the page and eager to interact. We specifically mark the vulnerability of the characters, and the cues of these places make it feel like they can click and interact with them.
***Implementation: Chognyan qi does this part, which he writes in more detail***
One of the difficulties: Here is the point of implementing this function is positioning and mouse response, of course, this is also called the same difficulty. We don't need to capture the position of the mouse, we just need to set the events that can be triggered in the specified locale. It's hard to know how this triggerable area can be relatively fixed when the page size or scroll changes, and the positioning doesn't shift when inserted into the overall page as a component, but according to what we expect, we do encounter this problem, and finally switch between several positioning attempts and get the right solution for relative coordinates.

**2.2 vote**

**intro**

This part we think is an area that can be used as an interaction between the user and the user. The previous section was primarily about user-to-page interaction, and if voting data can be retained, user-user communication is another experience, not a similar feature, which is the main reason we want to implement this feature. To show everyone who comes to this page how many people are suffering from the same condition as him, or to see which of them is more prevalent, but they don't have it, and can be used as a reference for prevention, which makes this part very valuable, both to provide interactive entertainment and to provide value through reliable data.

**implement**

The implementation method we are going to use the chart .js or ng2-chart mentioned by the teacher in tourial, as a solution. But this is Plan B, and of course it's called Version 2.0 rather than Plan B. Because in version 1.0, front-end development had planned to set up display styles and data streams through html css and javascript homemade tables, and wanted to change the length of the bar chart with vote data. This may seem feasible, but in fact, it's not small, and the bar charts implemented in this way are a lot less than the more mature chartjs toolkits. So it's transformed into plan B, sitting on the chart with chartjs.

**key**

The main point here is to familiarize yourself with the properties and usage methods of chartjs in angular, change the style of the template to the style we expect, such as color, display of hidden axes, display of hidden table lines, whether the quantum starts from scratch, change vertical tables to horizontal, and so on.

**hard**

The difficulty here is not expected, but let us encounter, the chart will not be updated with the button pressed, data updates, we found through testing, when the button is pressed, the data has changed, but the length of the bar chart has not changed, here is a difficult point, in writing here has not been resolved, but still looking for elegant solutions.

**2.3 comments**

**brief intro**

Comments would not be so difficult if voting could be achieved. Very similar features, but can give users a different experience, because voting is a choice question, comments are a question and answer. This gives the user more freedom to express, rather than choose from just a few options, which makes sense.

**hard**

The difficulty here is the transmission of data, unlike voting, which requires only an array to get, which is not the same. A mature comment area may need to display a lot of information, such as the speaker's name, time, and content. The display area is limited, and how to select the data in the huge data to display in the limited space. When the user has entered the content in the input area and submitted it, it is critical and difficult to have the latest message appear in the display area to give the user immediate feedback.

**3 . Layout of the single page web application.**

We mentioned the functional division above, since the function needs to be divided and integrated, then the page actually needs to be divided and integrated. It makes sense to add some well-known tags such as header and footer to html5.
Our front-end design development divides our pages into three areas, which are more traditional types. Here's a quick look at each section:
The first, the title bar area, ready to place the logo project name and some potential features waiting for iterations, is reflected in our early prototypes, such as sharing settings, and so on, which we won't implement, but provides an area that can be added. Our part uses gray-blue background color, more low-key, but also more in line with our theme, the color of the font relative to the background color is relatively dark, but belongs to the same color system. At first the typography was placed in the top-only position, but also right-angle rectangle, and later felt not soft enough and beautiful to change to a sunken suspended style, and changed to fillets, and the length with the width of the page stretched.

The second area, where the main features and content are displayed, includes voting, messages, and the human body. The original plan was to divide the three sections into three sub-regions, where the tables were relatively independent, and the other two functions were located in the same component, popping up comments when body part events were triggered. But in the subsequent implementation process, changes, because of the complexity of the division of the body part independent. The bar chart and the commons are integrated because, in the bar chart component, there are clear buttons when voting, which is very much in line with the syntax of the angular. In general, the changes are intended for better development and more in line with the design of interactive logic.

**old middle area**

![WechatIMG12857](/Users/wayne/Desktop/front doc to yanjun/image008.png)

**new middle area**

![截屏2021-05-07 00.09.26](/Users/wayne/Desktop/front doc to yanjun/image009.png)

The third area, which is a footer area, was originally planned to house disclaimer, GitHub page link, issue report email, and is currently the first to be implemented.

**overall**

So what method to divide these three areas, from traditional to modern methods have about the following three, first, the use of cable tags, which is the earliest web design when developers like the most commonly used typography, but over time and the emergence of a variety of practical tools, this approach gradually eliminated. Similar but more modern than this approach there is a library of front-end components called bootstrap, which has a feature feature, a grid system, to divide the layout of pages. But in fact, bootstrap in addition to this feature has a lot of useful features, but here we only need one, layout planning. So we used more direct div blocks plus css positioning to divide the area of our web pages. The advantage of doing this over bootstrap is that div blocks can be displayed in very highly customized blocks after they have been sorted by css. For example, we want header's top bar section to always be top of everything, no matter how the page size changes and how the page scrolls, it stays in place and at the top. In another example, our body part is expected to float above the table, rather than being squeezed to the next row after the browser window width has been manually adjusted to be smaller. How to implement it I'll list the code and explain it in the next section.

**3.1 bootstrap**

Bootstrap is a popular front-end framework, based on html css jss. It is simple and flexible relatively fast for web development.

![image-20210507004526019](/Users/wayne/Desktop/front doc to yanjun/image010.png)

The advantages are as follows: 
Mobile device compatibility, all mainstream browsers support bootstrap
Easy to use, as long as you have basic knowledge of html and css, you can start learning bootstrap, responsive design, and can adapt to desktops, tablets and mobile phones.
It provides a simple and unified solution for developers to create interfaces
It contains powerful built-in components, easy to customize
It also provides opportunities for web customization
It is open source

It's really powerful, but it's also because it's so powerful that our demo application at this stage may not be able to use it, at least in terms of zoning, we have more flexibility and more appropriate options. I believe that in a real-world enterprise-level project, bootstrap has an absolute advantage, but in our project, fun itself is a part of our project, our page does not have a commercial use plan, so nothing so rigorous and have some casual style is still acceptable. Of course, we won't use bootstrap for zoning at this stage, but we'll take advantage of its other features.

**3.2 div + CSS**

This approach is best suited to layout division, but it has several advantages: first, the tool does not need to be very powerful, just good enough to achieve the requirements, and that is it. Second, the degree of customization is higher, more flexible. In my example above, it is not difficult to see its advantages.

Similarly, in the next section, I'll use our actual code and some appropriate and necessary explanations to explain how we can use this approach to solve the web page division requirement.

**3.3 table tag**

This is a traditional and outdated approach, and functional limitations exist, so this approach is not chosen to implement it.

**4 . Fitures implementation**

This chapter, is the last section of front-end development, the previous sections describe the comparative theory, stay in the design ideas and implementation ideas. In this section we'll actually paste some code in, do some explanations, and the entire development process. There may be fewer detours to show the latest code directly, but words will still be used to describe some of the key turning points and the different scenarios explored.
Below, I will cut into the different sections, detailing how to build the current page, but also mention that there are better implementation methods, room for improvement, problems that have been solved and unresolved difficulties.

**4.1 files**

The following diagram, which is part of the entire project catalog library Chinese and folders, shows two custom components that contain our main features.erdq43                                                                                                                                                                                                                                                                                                                                                                                          w	Q	a

![image-20210507010431994](/Users/wayne/Desktop/front doc to yanjun/image011.png)