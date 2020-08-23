import { IdleSessionTimeout } from "idle-session-timeout";
 
//time out in 5 min on inactivity
let session = new IdleSessionTimeout(1 * 60 * 1000);
 
session.onTimeOut = () => {
    // here you can call your server to log out the user
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
    alert("You are now logged out.")
    //location.href = 'logout.php'
    }   

    function resetTimer() {
        clearTimeout(session);
        session = new IdleSessionTimeout(logout, 1* 60 * 1000);
 
    }
    console.log("timeOut");
};

session.onTimeOut();
