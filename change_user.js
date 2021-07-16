
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
//cleck on profile button
  profileHomeButton=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[5]")
    profileHomeButton.click();


    //click on profile in top screen
    profileTopScreen=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView");
profileTopScreen.click();

	  chosenProfile=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup[2]/android.widget.LinearLayout[1]/android.widget.TextView[1]")
 
  chosenProfile.getAttribute('text').then((txt)=>{
    console.log('lkjh '+txt)
    if(txt==='tik_models'){

      chosenProfile.getAttribute('displayed').then(async(obj)=>{
            console.log('fd '+ obj)
            chosenProfile.click();
            validateNumberPopup=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[4]")

            validateNumberPopup.getAttribute('text').then((txt)=>{
              if(txt==='Pas maintenant'){
            
                validateNumberPopup.getAttribute('displayed').then((obj)=>{
                      console.log('fd '+ obj)
                      chosenProfile.click();
                    })
                
              }
              
             })

          })
      
    }


i=1
setTimeout(async function run() {

    //flowbutton.click();
 
 // txt=await followTxt.getText();
  //console.log('kljlkj '+ txt)
  

  }).catch(()=>{
    
    
  //  i=1
  
  }
    
    )
 // if ( flowbutton.getAttribute('displayed')) {
 // console.log('lkjlkj '+ typeof flowbutton)
  
  
 // }
 // else{
   // i=1;
 // }//clearTimeout();
  i++;

    setTimeout(run, randomNumber(3000,10000));
}, 3000);


  }

main();