import { IdleSessionTimeout } from "idle-session-timeout";
 
//time out in 5 min on inactivity
let session = new IdleSessionTimeout(1 * 60 * 1000, "click", "mousemove");
 
session.onTimeOut = () => {
// here you can call your server to log out the user
    console.log("timeOut");
};

session.onTimeOut();
