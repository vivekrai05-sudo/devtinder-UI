LECTURE-01->introduction to project
SDLC->
requirement->design->development->testing->deployment->Maintaince
.REQUIREMENT->PROJECT MANAGER->TAKES HELP OF DISIGNER TO CREATE UI
.DESIGN->senior engineer/EM/hld/lld
.DEVELOPMENT->SDE1,SDE2
.TESTING->SDET->job of testing /writing test cases
.DEPLOYMENT->Devops engineers
.MAINTENCE->following the same steps again and again

---

MONOLITH AND MICROSERVICE
MONOLITH->one big project->BACKEND,DB CONNECTION,FRONTEND,AUTH,EMAILS,ANALYSIS
MICROSERVICES->only for frontend,only for auth,only for backend,only for dashboard,only for analytics->different services->alag alag team hr kaam ke liye
MONOLITH->1.dev speed->sl0w
2.scalablity->very tough
3.coce repo->more
4.Deployment->deployed in one go
5.Tech stack->restricted with one tech stack
6.INFRA COST->easier infra cost
7.Complexity->easy in monolithic

MICROSERVICES->1.Fault ISolation->is there in microservices
2.maintences and Rewamps->easy
3.Debugging->hard
4.Dev experience->microservices is good

---

LECTURE-02->FEATURES,HLD,LLD AND PLANNING
DEV TINDER
1.CREATE AN ACCOUNT
2.LOGIN
3.UPDATE YOUR PROFILE
4.FEED PAGE EXPLORE
5.SEND CONNECTION REQUEST
6.SEE Y0UR MATCHES
7.SEE THE REQUEST WE'VE SEND PREVIEWD
8.UPDATE YOUR PROFILE
->NOW THE TECHSTACK COMES UNDER IT

TECH PLANNING
1.FRONTEND
->React.js
2.BACKEND
->NODE JS
->MONGODB

LLD->LOW LEVEL DESIGN
#DB DESIGn
->USER COLLECTION
.FIRST NAME,LAST NAME,EMAIL ID,AGE GENDER
->CONNECTION REQUST
.Who is sending,whom to send,status of the connection
#API DESIGN
{rest api}->frontend application communicate with backend
//HTTP METHODS
.GET->to get the data from database
.POST->to send the data
.PUT->UPDATE THE DATA fully
.PATCH->UPDATE THE DATA WHERE IT NEEDED
.DELETE->To delete the data

//CRUD OPERATION
POST/SIGNUP
POST/LOGIN
GET/PROFILE
POST/PROFILE
PATCH/PROFILE
DELETE/PROFILE
POST/SEND REQUESST
POST/REVIEW REQUEST

---

LECTURE-03
src->for source folder
app.js->write all the code
express.js->framework for node
node modules->all the source code of express came here
dependicies->it is the package on which aour project is depended on.
package.lock.json->The package-lock.json file is a large, complex snapshot generated automatically by npm whenever node_modules or package.json are modified. It acts as a safety mechanism by performing the following tasks:
pacakge.json->The package.json file is the central manifest and configuration file located in the root directory of every Node.js project. It acts as an "identity card" for your application, storing crucial metadata and defining how the project should be managed, built, and executed
version ->4.19.2->small change or bug fix->2 will become 3->patch
->4.20.3->minor change or back compability
^->automatically version get updated->auto updated to latest versions

//how to takes all the code
step-1->git init
step2->git add .
step3->git commit -m "created a server"
step4->git remote add origin https://github.com/vivekrai05-sudo/devtinder-UI.git
// git branch -M main
// git push -u origin main

Har baar code change karne ke baad bas ye 4 commands yaad rakho:

git status
git add .
git commit -m "Describe what you changed"
git push

---

HTTP METHODS:->
