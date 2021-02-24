window.nextLaunch = nextLaunch;
window.previousLaunch = previousLaunch;
var upcomingLaunchesUrl = "https://api.spacexdata.com/v3/launches/upcoming";
var launchContainer = document.getElementById("launchContainer");
var launchIndex = 0;
var launchArray = [];
fetch(upcomingLaunchesUrl)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    launchSchedule(json);
})["catch"](function (error) {
    console.log(error);
});
function launchSchedule(json) {
    json.forEach(function (launch) {
        var html = "<h2 id=\"nextLaunchName\">" + launch.mission_name + "</h2>\n    <div class=\"launchImgContainer\">\n      <div class=\"launchImgBlock\"></div>\n      <img class=\"launchImg\" src=\"./img/spaceXConsole/starship_mk1_night_v2.jpg\" alt=\"\">\n    </div>\n    <div class=\"launchText\">\n      <div class=\"txt-left\"><b>Launch Vehicle:</b> " + launch.rocket.rocket_name + "</div>\n      <div class=\"txt-left\"><b>Launch Time:</b> " + launch.launch_date_local + "</div>\n      <div class=\"txt-left\"><b>Launch Site:</b> " + launch.launch_site.site_name + ", " + launch.launch_site.site_name_long + "</div>\n      <div class=\"txt-main\">For additional informat please see the mission overview at our <a href=\"" + launch.links.reddit_campaign + "\">Reddit Campaign.</a></div>\n      <div class=\"btnContainer\">\n        <button class=\"btn-launch previous-btn\" onclick=\"nextLaunch()\">Previous</button>\n        <button class=\"btn-launch btn-next\" onclick=\"previousLaunch()\">Next</button>\n      </div>\n    </div>";
        launchArray.push(html);
    });
    if (launchContainer) {
        launchContainer.innerHTML = launchArray[launchIndex];
    }
}
function nextLaunch() {
    if (launchIndex >= launchArray.length - 1) {
        launchIndex = 0;
    }
    else {
        launchIndex++;
    }
    if (launchContainer) {
        launchContainer.innerHTML = launchArray[launchIndex];
    }
}
function previousLaunch() {
    if (launchIndex <= 0) {
        launchIndex = launchArray.length - 1;
    }
    else {
        launchIndex--;
    }
    if (launchContainer) {
        launchContainer.innerHTML = launchArray[launchIndex];
    }
}
/* ////////////////////// */
var pastLaunchesUrl = "https://api.spacexdata.com/v3/launches/past";
var launchCard = document.querySelector(".launchCard");
fetch(pastLaunchesUrl)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    pastLaunches(json);
})["catch"](function (error) {
    console.log(error);
});
function pastLaunches(json) {
    var html = "";
    json.forEach(function (result) {
        html += "<div class=\"launchFlex\">\n                <div class=\"previousLaunchContainer plc-date previousLaunchTxt\">\n                    <p>" + result.launch_year + "</p>\n                </div>\n                <div class=\"previousLaunchContainer plc-customer previousLaunchTxt\">\n                    <p>" + result.rocket.second_stage.payloads[0].customers[0] + "</p>\n                </div>\n                <div class=\"previousLaunchContainer plc-launchSite previousLaunchTxt\">\n                    <p>" + result.launch_site.site_name + "</p>\n                </div>\n                <div class=\"previousLaunchContainer plc-vehicle previousLaunchTxt\">\n                    <p>" + result.rocket.rocket_name + "</p>\n                </div>\n            </div>";
    });
    if (launchCard) {
        launchCard.innerHTML = html;
    }
}
