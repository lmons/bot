
const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "7",
    deviceName: "localhost:5555",
    automationName: "UiAutomator2",
  //appPackage: "com.zhiliaoapp.musically",
    //appActivity: "com.ss.android.ugc.aweme.splash.SplashActivity",

  }
};
async function  swipeOnFollow(client){
  const windowSize = await client.getWindowSize();
console.log(windowSize.width);
console.log(windowSize.height);

  const right2leftSwipeOptions = {
          startX: windowSize.width/2,
          startY: windowSize.height -20,
          endX: windowSize.width /2,
          endY: windowSize.height-(windowSize.height-200),
          delay: 10000
        };
  
  await client.touchPerform([
          {
            action: "press",
            options: {
              x: right2leftSwipeOptions.startX,
              y: right2leftSwipeOptions.startY
            }
          },
          { action: "wait", options: { mseconds: right2leftSwipeOptions.delay } },
          {
            action: "moveTo",
            options: {
              x: right2leftSwipeOptions.endX,
              y: right2leftSwipeOptions.endY
            }
          },
          { action: "release" }
        ]);
}


function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 
async function main () {
  const client = await wdio.remote(opts);

  const arraOfPeaple= ["gotcha_h36t_daddy", "urlocal_idiot._.lxser","xx_your_local_shadow_xx","emilygamespetlover"]
 

arraOfPeaple.forEach((elem,i)=>{
  setTimeout(
  async  function(){
      await client.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@"+elem+"' com.zhiliaoapp.musically"]});
      followButton=await client.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[1]')
      followButton.click()
    }
, randomNumber(i*3000,i*10000));

})

i=2
setTimeout(async function run() {


    setTimeout(run, randomNumber(3000,10000));
}, 3000);








}

main();