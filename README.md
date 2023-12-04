# Product Requirements Document (PRD)

# **Problem Description**

Currently, the Health Enhancement Systems that OSU uses is quite costly. Additionally, there lacks customization to meet the needs and preferences of our school's faculty and staff. Events are hosted by HES and cannot be created by OSU FSF Administrators. With such a high demand and user attendance in the HES events, OSU FSF wants to provide and create their own events for users to sign up. Currently, there is no application to have users interact with each other and track their progress as compared to HES. 

## **Scope**

### Scope: Events Management and Participation

The scope for this project will allow faculty members to create events and give instruction on how to live a healthier lifestyle through videos and other methods of presenting this information.  Our stretch goals include: hooking up fitness tracking devices to the platform, allowing faculty members to be able to post their progress, setting personal fitness goals, and a nutrition tracker.

The scope of the new application will consist of the ability to create events that teams will participate in. Participation is defined as accumulating steps to contribute to your team total. Stretch goals include:

1. The automatic grouping of members given previous statistics, keeping teams balanced
2. Individual/team based reports after an event has concluded
3. Further customization to the events, such as a different type of event (i.e., yoga), or the ability to make the event non-team based (i.e., individual)

The scope for this product will be limited to faculty being able to start and host events and allow users to register to these events and track their progress for these events. Stretch goals include, seeing other people’s projects on the events, AI generated, and nutrition and meal planning. 

## **Use Cases**

### Walktober

Walktober is a community-wide challenge event in October that promotes physical fitness offering fun walking events and encouraging participants to move and get active. Joining the Walktober event connects you with a community of participants, allows you to track walking steps to contribute to your team to gain points for rewards, and incentivizes healthy behavior.  Currently, the Walktober event is hosted on the Health Enhancement Systems (HES) website. An organization may host a walktober event through the HES website by paying a setup fee, and the cost of one of three programs for each participant. The program options are as follows:
![prices](https://github.com/OregonStateUniversity/osu-fsf/assets/102546859/57b04220-6ec9-4fcc-9791-3567d20ff9c8)

These prices are very unreasonable for the services that HES provides. Our project will come at very little cost and will be more customized for the OSU faculty experience.  

# **Purpose and Vision (Background)**

Our mission is to build a vibrant community within OSU while fostering a culture of wellness and fitness. We are committed to providing a user-centric fitness application tailored specifically for faculty and staff at OSU, with the aim of promoting and inspiring greater health and fitness engagement.

We envision a future where faculty and staff at OSU not only lead healthier lifestyles but also find joy and motivation in their wellness journeys through our OSU-themed and engaging fitness app. Our application, designed exclusively for the University, will create a seamless and enjoyable wellness experience, encouraging widespread participation.

Unlike the current system, HES, which is both expensive and generic, our fitness application will be accessible at no cost to users, offering innovative features that leverage the unique location and geography of the University to further enrich the wellness journey of our community.

## **Stakeholders**
![ioqijd](https://github.com/OregonStateUniversity/osu-fsf/assets/102546859/686d29dd-3291-4994-b338-4c36e08223f8)


## **Preliminary Context**

### **Assumptions**

- We will find a way to accurately track user steps

- We will have until the end of Fall term to prove core functionality

- We will be able to use trustworthy libraries

- We will have users that can provide feedback

- Faculty members will be motivated by incentives like “leaves” for walktober

- The final product will need little to no maintenance after our graduation

- Event organizers will have the tools to create dynamic events that promote participation

- Faculty members will be technically proficient enough to use the application

- The Ideal logic registration system will be integrated with the application and users will have no trouble registering

## **Constraints**

- Integrating with the ideal logic registration system.  Since it’s an existing system, we might have issues requesting data if they don’t already have systems in place for it.

- Maintainability.  We are not aware of how the project will be maintained after we graduate.  We are aspiring for a bug-free implementation, but this could add more time due to testing. In order to stay flexible, we included Supabase in our initial plans. Supabase can be hosted via their managed service or it can be self-hosted. We know that an AWS backend is a possible (and perhaps even likely) outcome. It’s important to keep libraries or technologies that we choose to be compatible with AWS. 

- Time.  To fully test this application the best way to do it is by initiating an event.  These events can last up to a month, which means that we need to have a production build at least a couple of months in advance so it can be user-tested on a large scale.  

  Integrating with the ideal logic registration system.  Since it’s an existing system, we might have issues requesting data if they don’t already have systems in place for it.

- Maintainability.  We are not aware of how the project will be maintained after we graduate.  We are aspiring for a bug-free implementation, but this could add more time due to testing. In order to stay flexible, we included Supabase in our initial plans. Supabase can be hosted via their managed service or it can be self-hosted. We know that an AWS backend is a possible (and perhaps even likely) outcome. It’s important to keep libraries or technologies that we choose to be compatible with AWS. 

- Time.  To fully test this application the best way to do it is by initiating an event.  These events can last up to a month, which means that we need to have a production build at least a couple of months in advance so it can be user-tested on a large scale.  

## **Dependencies**

We need a way to request data from IdealLogic.  If users register through that system then we need some of their information so they can sign up for events.  We also need a test user base so they can provide feedback like satisfaction, bug occurrences etc..

# **Market Assessment and Competition Analysis**

Our primary competition is the Health Enhancement Systems application. It is proprietary and costly for FSF at OSU.

![](https://holocron.so/uploads/102e9092-other-app-stuff.jpg.jpeg)

## **Target Demographics (User Persona)**

### Tim

_34-year-old_ 

_"Celebrate the past, understand the present, and shape the future. History is not just a chronicle of events; it's a guidebook for the journey ahead. In this classroom, we explore the narratives of our ancestors, drawing wisdom from their stories to illuminate the path forward." –ChatGPT_

**Bio**

- _Retired History instructor at OSU who manages several history clubs on campus_

- _Generous vacation days allows to spend two months per year traveling_

- _Enjoys hiking and traveling in different countries and exploring historical monuments_

**Core Needs**

- _Discovering unique travel experiences_

- _Connecting with fellow travelers_

- _Finding reliable local guides_

- _Share journey with friends and family_

**Behaviors**

- _Will depart with minimal plans to less touristy destinations_

- _Will not always have network so downloads a lot of content for offline consumption_

- _Will as much as possible meet fellow travelers and locals and change plans accordingly_

## Sarah

_35-year-old_

_On-Campus Employee_

_"Balancing work and fitness is tough, but with the right support, we can make healthy living a part of our campus culture." – Sarah_

**Bio**

- _Sarah is an avid runner who participates in local marathons. She enjoys yoga sessions to unwind and has a passion for trying new healthy recipes._

- _Sarah appreciates a sense of community and values social interactions. She enjoys spending time in the university's green spaces and attending on-campus fitness classes._

- _Sarah finds it challenging to balance work and fitness. She dislikes feeling overwhelmed and often wishes for more convenient and flexible workout options._

- _Sarah is a single parent, juggling work and parenting responsibilities._

**Core Needs**

- _Sarah needs a fitness app that accommodates her fluctuating work hours and allows her to squeeze in workouts during breaks._

- _A sense of community is crucial for Sarah. She values features that facilitate connections with colleagues and other users on campus._

- _Due to her busy schedule, Sarah requires short, effective workout routines that can be completed within a limited time frame._

- _Sarah is interested in fitness activities that she can involve her child in, promoting a healthy lifestyle for the whole family_

**Behaviors**

- _Participates in on-campus fitness events._

- _Prefers morning workouts to kickstart the day._

- _Utilizes fitness apps during breaks or downtime._

## James

_40-year-old_

_Off-Campus Employee_

_"Fitness is a personal journey. I need an app that understands my goals without adding unnecessary noise." – James_

**Bio**

- _James enjoys cycling and outdoor activities like hiking and kayaking. He's a fan of strength training and follows a disciplined workout routine._

- _James appreciates apps that provide detailed analytics and progress tracking. He values privacy and prefers individual workouts to group activities._

- _James dislikes crowded gyms and is not a fan of competitive fitness challenges. He prefers a personal approach to fitness without unnecessary pressure._

- _James has a busy work schedule and often travels for business meetings._

**Core Needs**

- _James requires a fitness app that tailors workouts based on his preferences and goals._

- _Detailed progress tracking and analytics are essential for James to monitor his fitness journey._

- _As someone who travels frequently, James needs workouts that can be adapted to different environments with minimal equipment._

- _James values privacy and wants control over the visibility of his fitness activities and achievements._

**Behaviors**

- _Utilizes the app for home and outdoor workouts._

- _Prefers evening workouts after work hours._

- _Enjoys exploring new workout routines and techniques independently._

## Mia

_26-year-old_ 

_Off-Campus Non-Employee_

_"Fitness should be enjoyable and inclusive. I want an app that helps me stay active without feeling pressured to meet unrealistic standards." – Mia_

**Bio**

- _Mia enjoys gardening, attending community events, and exploring local parks. She is a casual participant in fitness activities and prefers a mix of fun and functional exercises._

- _Mia values a balanced approach to health and fitness. She enjoys activities that promote mental well-being and stress relief._

- _Mia dislikes high-intensity workouts and finds them intimidating. She prefers a positive and inclusive fitness environment._

- _Mia is part of a local book club and enjoys socializing with neighbors._

**Core Needs**

- _Mia needs a fitness app that offers beginner-friendly and low-impact workouts suitable for her fitness level._

- _Mia values a supportive community aspect within the app, allowing her to connect with like-minded individuals in her neighborhood._

- _Mia is more likely to stick to a fitness routine that includes a variety of enjoyable activities rather than strict gym routines._

- _Mia is interested in mindfulness exercises and features that help manage stress and promote overall well-being._

**Behaviors**

- _Participates in local fitness meetups and events._

- _Prefers daytime or early afternoon workouts._

- _Enjoys integrating fitness activities with social interactions._

## Alex

_31-year-old_ 

_Fitness Event Organizer_

_"Fitness events should be dynamic, engaging, and accessible to all. Let's create experiences that leave participants inspired and motivated to make lasting lifestyle changes." – Alex_

**Bio**

- _Alex is passionate about creating unique fitness experiences. Enjoys experimenting with various workout formats, from themed fitness events to outdoor boot camps._

- _Alex appreciates collaboration and networking with fitness professionals. Enjoys staying updated on the latest fitness trends and technology._

- _Alex dislikes rigid and overly formal fitness events. Prefers a balance between structured programming and opportunities for spontaneous engagement._

- _Alex has a background in event planning and a keen interest in incorporating wellness and mindfulness into fitness events._

**Core Needs**

- _Alex requires a fitness app that allows for creative programming and customization of events, accommodating different fitness levels and preferences._

- _Connecting with fitness instructors, influencers, and participants is essential. Alex values features that facilitate communication and collaboration within the fitness community._

- _Alex needs tools to effectively promote fitness events, including social media integration, email campaigns, and participant engagement strategies._

- _Access to real-time feedback and analytics during events helps Alex adjust and enhance the participant experience on the fly._

**Behaviors**

- _Actively participates in fitness conferences and industry events._

- _Enjoys trying out new fitness classes and experiences to stay inspired._

- _Utilizes technology for event planning, promotion, and participant engagement._

# **Requirements**

## **User Stories and Features (Functional Requirements)**

### Scope: Events Management and Activity Tracking

### Priority: 1 = Low and 3 = High

![](https://holocron.so/uploads/3a791a8d-user-stories1.jpg.jpeg)


![](https://holocron.so/uploads/54c9219b-us2.jpg.jpeg)

#### 

![](https://holocron.so/uploads/dbe78f21-us3.jpg.jpeg)

## **Non-Functional Requirements**

- _The product should be available for 24/7 access except during maintenance periods._

- _The product should be available for every staff and faculty member._

- _The product should have a smooth and easy-to-use interface._

- _The code should be well documented and commented._ 

- System shall have a secure and user-friendly sign-in authentication mechanism not exclusive to OSU credentials.

- Communication to the backend will be encrypted via SSL/TLS.

- The application experience should be identical on both Android and iOS.

- Backend services should be self-sustaining, i.e., will recover in the event of a software exception and not hang or require manual intervention.

- The system shall respond to user interactions within 2-3 seconds for common operations.

- The login process should take no more than 5 seconds.

- The system should support a minimum of 100 requests per minute.

- The system should be able to scale to accommodate an increasing number of users.

- The system should be able to support 100 concurrent users.

## **Data Requirements**

We do not require specific data, but the data that will be entered by the FSF organizers through crate events, and register participants and teams.

- _Faculty and staff members_
  - _ID numbers (User info)_

  - _Account information can be stored in a table, and referenced in participation-related tables._

  - _Events they are signed up for._

    - _Events, teams, and team members can be stored in a database. These data objects will be able to be manipulated by the FSF staff_

    - _Progress on these events_

      - _Steps and approximate distance walked can be stored as integers._

  - _Team Event_

    - _Team members_

    - _Progress from each member_

    - _End goal of project_

## **Integration Requirements**

- _API to be able to track steps through user phones._

- _Android/iOS health app needed to retrieve relevant stats_

- _SSO via Google/Azure – this will provide a secure and safe authentication method for faculty/staff and organizers._

### IdealLogic Registration Software

Users register on the ideologic platform purchased by OSU. Mobile app and Web app that we are developing are not directly connected to the OSU infrastructure. We need to find a way to easily take the registration emails or users, and bring them to the back office app so that users that have downloaded the app can find and participate in the event. The preferred option would be that the ideologic platform offers an API endpoint for us for retrieve the information required.

In addition to participants, we could also retrieve classes from the software so that our members can track in their apps the fastest there are registered for.

### Steps Tracking

Apple Developer documentation exists for gathering all sorts of information regarding steps:

- [https://developer.apple.com/documentation/coremotion/cmpedometer](https://developer.apple.com/documentation/coremotion/cmpedometer)

Apple Developer documentation also has core libraries for calculating distance from coordinates, and how to receive location information in the background:

- [https://developer.apple.com/documentation/corelocation/cllocation](https://developer.apple.com/documentation/coremotion/cmpedometer)

Similar documentation for accessing a pedometer exists for Android:

- [https://developer.android.com/guide/topics/sensors/sensors_motion#sensors-motion-stepcounter](https://developer.apple.com/documentation/coremotion/cmpedometer)

As well as location libraries/functions:

- [https://developer.android.com/guide/topics/sensors/sensors_motion#sensors-motion-stepcounter](https://developer.apple.com/documentation/coremotion/cmpedometer)

### Activities Tracking

In addition to tracking steps through the phone pedometer we might want to track other activities, such as distance through watches from third-party providers, such as Fitbit, Garmin, or the Apple Watch.

All third-party providers have an API that could be used once users authorize access to retrieve their information.

# **Milestones and Timeline**

**By Tasks:**  

- **Design** 

Responsible for the look and feel of the application and creating the initial designs for

the front end. The front-end developers will try their best to replicate these designs as

closely as possible.

- **Frontend**

Responsible for writing the code that drives the client-side portion of the application.

This includes efficient communication with the backend, and proper data caching

techniques, and ensuring that end-user data is correctly handled and not lost

- **Backend**

Responsible for writing the code that drives the server-side portion of the application.

This includes handling connections made from client-side code, proper handling, and

cold-storing of application information, and ensuring that end-user data is secure and

accessible where needed

- **Scrum Master**

Responsible for facilitating the communication and collaboration between team

members. Also ensures that the scrum framework is being followed so that the project

runs smoothly

- As we continue with the project timeline, roles could be switched between the team until a

  unique strong point is discovered by each member. Although the work will be different, tasks

  should be evenly distributed in terms of difficulty.

  ![](https://lh7-us.googleusercontent.com/lvNAaggv3vOQXkK4JPgjlQlw2ZfiQ3vvkAK4RPwmMhgvfDfCdxzREDJZ9QaRqe9DZSwUXhm2vUULWGdKK8L4jCu0oKz7BhmZBWtVxTBebxUO7fFGcVEKxvKSxwOFM2PVMoEbnhbvhfkTyos0hKToUKlIwAe0sflH7Xy-T_b6eJ1ica6k18H_FYIc-r3FNQ)


# **Timeline** 

## **Milestone 1:** Project Kickoff and Planning

(October 1st – October 15th)

Duration: 

- 1 Month

Description: 

- Finalize project plan, setup communication, set up collaboration tools, and key roles/responsibilities. 

Main Features/Activities: 

- Finalize project scope

- Set up the development environment

- Conduct a kick-off meeting with stakeholders and manager 

Responsibilities: 

- Whole Team

## **Milestone 2**: Initial Design and Prototyping

(October 16th – October 31st)

Duration: 

- 1 Month

Description: 

- Develop initial UI/UX designs and create prototypes for early testing and feedback.

Main Features/Activities:

- Draw the application’s fundamental UX design elements

- For each screen, create wireframes

- Create clickable prototype to evaluate user interface and flow 

- Responsibilities: 

- Whole Team

## **Milestone 3:** Technical Specification and Planning

(November 1st – November 17th)

Duration:

- 2 Months 

Description:

- Establish a clear roadmap for development team by planning development sprints 

Main Features/Activities:

- Describe technical stack, including database, frontend, and backend.

- Prepare integrations with third parties

- Describe the resource allocation and development sprints 

Responsibilities: 

- Whole Team 

## **Milestone 4**: Application Development - Phase 1 (Core Functionality)

(November 20th – December 1st)

Duration: 

- 1 Month

Description:

- Start setting up database and frontend development 

Main Features/Activities:

- Create database, servers, and backend architecture

- Start working on Frontend by adding modules for simple events and user registration

- Testing iteratively to verify quality after each sprint 

- Fix problems and make improvements 

Responsibilities: 

- Whole team

## **Milestone 5:** Application Development - Phase 2 (Advanced Features)

(December 2nd – December 15th)

Duration: 

- 1 Month

Description:

- More improvement on application 

Main Features/Activities:

- Include cutting-edge features like social media sharing and analytics

- Integration with devices or API’s from third parties

- Iteratively testing continuously and improving in response to input 

Responsibilities: 

- Whole Team 

## **Milestone 6**: **User testing** 

Winter Break (December 16th – January 8th)

Duration:

- 1 Month

Description:

- Getting feedback from users on application improvements 

Main Features/Activities:

- Implement suggestions from users 

- Fix flaws/bugs seen by users 

# **Goals and Success Metrics**

![](https://holocron.so/uploads/ba93ec25-goal-and-success-met.jpg.jpeg)

# **FAQ’s**

- What are some ways we can promote this app for best results?

- What are some application features we can implement to promote user engagement and user fitness in a healthy manner?

  What will testing look like for individuals since our users are limited to OSU faculty?

- How will events be added to the application? Through engineers or admins?

- Will we need specific login credentials for users and admins?

- How will we verify/transfer authentication codes from IdealLogic for events users sign up for?

- Will the application be OSU-themed or should we look into UX designs best for users? 

- How much similarity will we have to the current application OSU uses for these types of events hosted? (HEC website)

  Will we have metrics implemented in the application to help with future development?

# **Out of Scope**

- **Artificial Intelligence**: Maybe use AI in some way for this project.

- **Diet**: Fitness app can only help people get involved, the food diet will become our disadvantage. 

- **Maintenance**: App is maintained after the team graduate. 

- **Users**: People who are disabled or sick, some of the functions in the app might not fit them.

- **User Interactions**: A robust messaging system.  It will probably only be one chat room because the user base is so small.  But this promotes a large group of people to be closer to one another.
