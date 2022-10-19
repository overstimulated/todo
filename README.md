# Developer Assessment

This repository contains code used in the interview process for developers joining the Microsoft Engineering Practice at ClearPoint.

There are two parts to this solution and depending on the type of role you are applying for you will be asked to contribute to one or both areas.
The application is a simple to-do list that allows a user to create items in a list and mark them as complete.
It is a React-based front end application that uses a Microsoft Web API at the backend to facilitate using and persisting items in this to-do list.
<br/><br/>

## FOR THOSE APPLYING FOR A BACK-END DEVELOPER ROLE

For this exercise you are asked to refactor the back end code in this solution. This code is in the **Backend** folder.
You are free to make changes as and where you see fit. Think about how you might structure the solution, add appropriate tests using a framework of your choice, and leave the solution in a more maintainable and more easily understood state than it was originally.
<br/><br/>

## FOR THOSE APPLYING FOR A FULL-STACK DEVELOPER ROLE

For this exercise you are asked to complete the requirements for the *back end developer role above as well as* enhance the UI functionality in the **Frontend** folder.
The front end functionality requires the following to be added:

1. The ability to surface any errors from the backend API in the UI
2. The ability to mark an item in the to-do list as complete
3. Add unit tests to cover the new functionality using a framework of your choice

<br/>
For both role types, remember that *maintainability and clarity* is key in your solution. 
You are welcome to use comments in the code to outline any assumptions you might make and/or outline your thinking at various points.
Once completed you can either push the completed solution to your own repo and send us the link.
<br/><br/>
We look forward to seeing your submission and have fun!


## What I could have done further
### Backend
I would have added basic authentication functionality to the server to provide some security.

Also, to effectively work with large amount of todos, pagination would have been nice! - combine that with a standardized response object for all the APIs

For better monitoring,
I would have exposed a correlationId header key and capture that via middleware so I can have traceability of the request and then it can be included in the logger.

I could have used Automapper, but it's a simple model.

I could have added functional tests, and more tests

### Frontend
I would have liked the packages critical vulnerabilities fixed! there were 9 at the time. But somehow, VisualStudio was needed to be installed in my machine so it can be fixed...?

I could have added more tests to cover more scenarios of how a user would use or interact with the webapp.

I could have standardized the todo response from the server and also added strongly type todo model used throughout the app