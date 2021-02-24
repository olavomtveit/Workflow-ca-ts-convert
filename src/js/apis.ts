window.nextLaunch = nextLaunch;
window.previousLaunch = previousLaunch;

const upcomingLaunchesUrl = `https://api.spacexdata.com/v3/launches/upcoming`;
const launchContainer = document.getElementById(
  "launchContainer"
) as HTMLElement | null;

let launchIndex: number = 0;
let launchArray: any = [];

fetch(upcomingLaunchesUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    launchSchedule(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function launchSchedule(json: any) {
  json.forEach((launch: any) => {
    const html: string = `<h2 id="nextLaunchName">${launch.mission_name}</h2>
    <div class="launchImgContainer">
      <div class="launchImgBlock"></div>
      <img class="launchImg" src="./img/spaceXConsole/starship_mk1_night_v2.jpg" alt="">
    </div>
    <div class="launchText">
      <div class="txt-left"><b>Launch Vehicle:</b> ${launch.rocket.rocket_name}</div>
      <div class="txt-left"><b>Launch Time:</b> ${launch.launch_date_local}</div>
      <div class="txt-left"><b>Launch Site:</b> ${launch.launch_site.site_name}, ${launch.launch_site.site_name_long}</div>
      <div class="txt-main">For additional informat please see the mission overview at our <a href="${launch.links.reddit_campaign}">Reddit Campaign.</a></div>
      <div class="btnContainer">
        <button class="btn-launch previous-btn" onclick="nextLaunch()">Previous</button>
        <button class="btn-launch btn-next" onclick="previousLaunch()">Next</button>
      </div>
    </div>`;
    launchArray.push(html);
  });
  if (launchContainer) {
    launchContainer.innerHTML = launchArray[launchIndex];
  }
}

function nextLaunch() {
  if (launchIndex >= launchArray.length - 1) {
    launchIndex = 0;
  } else {
    launchIndex++;
  }
  if (launchContainer) {
    launchContainer.innerHTML = launchArray[launchIndex];
  }
}

function previousLaunch() {
  if (launchIndex <= 0) {
    launchIndex = launchArray.length - 1;
  } else {
    launchIndex--;
  }
  if (launchContainer) {
    launchContainer.innerHTML = launchArray[launchIndex];
  }
}

/* ////////////////////// */
const pastLaunchesUrl: string = `https://api.spacexdata.com/v3/launches/past`;
const launchCard: any = document.querySelector(".launchCard");

fetch(pastLaunchesUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    pastLaunches(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function pastLaunches(json: any) {
  let html: string = "";

  json.forEach((result: any) => {
    html += `<div class="launchFlex">
                <div class="previousLaunchContainer plc-date previousLaunchTxt">
                    <p>${result.launch_year}</p>
                </div>
                <div class="previousLaunchContainer plc-customer previousLaunchTxt">
                    <p>${result.rocket.second_stage.payloads[0].customers[0]}</p>
                </div>
                <div class="previousLaunchContainer plc-launchSite previousLaunchTxt">
                    <p>${result.launch_site.site_name}</p>
                </div>
                <div class="previousLaunchContainer plc-vehicle previousLaunchTxt">
                    <p>${result.rocket.rocket_name}</p>
                </div>
            </div>`;
  });
  if (launchCard) {
    launchCard.innerHTML = html;
  }
}
