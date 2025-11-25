# In the *first terminal* (backend)
cd backend
npm i
node server.js

# In the *second terminal* (frontend)
cd frontend
npm i
npm start



# For Admin page ==> localhost:3000/admin/login
# Admin Credentials
Username: admin
Password: 12345

# For Reviewer page ==> localhost:3000/reviewer/login



## TEAM MEMBERS AND CONTRIBUTIONS
1. **RITESH**
  - Backend ==> routers(admin, reviewer)
  - Frontend ==> Components[Admin(EirRequests.jsx, GrantRequests.jsx, GrantsSelectReview.jsx, Progress.jsx, Temp.jsx)]

2. **NIKHIL**
   - Backend ==> routers(user)
   - Frontend ==> Components[user(Register.jsx, Home.jsx, Startupdetails.jsx, Messages.jsx, GrantDetails.jsx), NotFound.jsx, Toast.jsx]

3. **Sai Kiran**
   - Backend ==> models(EirSchema.js, GrandschemeSchema.js, reviewers.js)
   - Frontend ==> Complete reviewer Components

4. **Hyndavi**
   - Backend ==> models(ScaleUp.js, startupmodel.js, usermodel.js)
   - Frontend ==> Components[user(EirDetails.jsx, Landing.jsx, Login.jsx, Monthlyform.jsx, Monthlyorogress.jsx, Navbar.jsx), Loader.jsx]

5. **Harsha**
   - Backend ==> models(adminmessages.js, adrequests.js, advertisements.js)
   - Frontend ==> Components[Admin(Admin.jsx, AdminNavbar.jsx, ConfirmPopUp.jsx, Login.jsx, ReviewerPage.jsx, Reviewrs.jsx, ReviewsPopup.jsx)]