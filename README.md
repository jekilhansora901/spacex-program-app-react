# spacex-program-app-react

### Tech Stack USed
- ReactJs
- Redux
- Redux-Thunk

### Description
- Created Front end application for list and browse all launches by SpaceX program. User React.js as front end library along with Redux for state management. As middleware used Redux-Thunk and Redux-DevTool for easy debugging application. 
- Site make API call on load to get data coming from (API: https://api.spacexdata.com/v3/launches?limit=100) where user has option to filter the Launches by following option:
```
 - Launch Year
 - Successful Launch
 - Successful Landing
```
- Upon selecting on any year it will call API along with selected Year and get data for that year. Once user clicks back on same year it will reset the filter for Year.
- User has option to click on filter for each category, i.e. User can select Year, Successful Launch and Successful Landing at same time and upon selection on each filter option API will be triggered to get filtered data

### How to Run this application in local
- Clone this repo in your local
- Make sure you have Node.js installed in your system
- Go to Terminal and run below commands:
```
 - cd spacex-program-app-react
 - npm i
 - npm run start
```
### Demo
- Application is deployed to Heroku on below URL:
 http://spacex-program-app-v1.herokuapp.com/

### Lighthouse Performance Report
![Lighthouse Performance Report](https://github.com/jekilhansora901/spacex-program-app-react/blob/master/react-performance.PNG)

### Task 
- [x] Responsive layout
- [x] Server Side Rendering
- [ ] Build and Packaging
- [x] Deploy

### Screenshot
* 320 PX 
- ![320 px view](https://github.com/jekilhansora901/spacex-program-app-react/blob/master/sc_320.PNG)
* 701 PX 
- ![701 px view](https://github.com/jekilhansora901/spacex-program-app-react/blob/master/sc_701.PNG)
* 1440 PX 
- ![1440 px view](https://github.com/jekilhansora901/spacex-program-app-react/blob/master/sc_1440.PNG)
* 1660 PX 
- ![1660 px view](https://github.com/jekilhansora901/spacex-program-app-react/blob/master/sc_1660.PNG)

