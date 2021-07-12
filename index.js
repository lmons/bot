
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

  
//client.startActivity('com.zhiliaoapp.musically','com.ss.android.ugc.aweme.splash.SplashActivity')
/* 
  let a=await client.$("//android.widget.ImageView[@content-desc=\"TikTok\"]");
a.click();

let el1 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[5]");
el1.click();
 */

//let b=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]");
//b.click();


//let c= await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextSwitcher/android.widget.TextView");
 //c.click();

  //  let d= await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.EditText");
  // await  d.setValue('onesarahhh')
  // let e=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]")
// e.click();
// let f=await client.$("//hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout")
//f.click();

//let g=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]")
//g.click();
//f=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.RelativeLayout");
//f.click();
i=2
setTimeout(async function run() {
  flowbutton=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout["+i+"]/android.widget.RelativeLayout")
  followTxt=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout["+i+"]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView")
  
  //console.log('lsdsds '+flowbutton.getAttribute('displayed')) 



  followTxt.getAttribute('text').then((txt)=>{
    if(txt!=='Abonnements'){

        flowbutton.getAttribute('displayed').then((obj)=>{
            console.log('fd '+ obj)
            flowbutton.click();
          })
      
    }
    //flowbutton.click();
 
 // txt=await followTxt.getText();
  //console.log('kljlkj '+ txt)
  

  }).catch(()=>{
    swipeOnFollow(client)
    
    
    i=2}
    
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










  
 /* setTimeout(async ()=>{
  
let d=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.TextView")
d.click();

  },15000)

  setTimeout(async ()=>{
  
    let d=await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText")
    d.click();
    d.setValue('606940834')
    
      },17000)*/
  //console.log('current_activity')
  //console.log(client.getCurrentActivity())
  //await client.launchApp();


  //driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout");
// const field = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup");
 // console.log(field)
 // field.click();
 // setTimeout(async ()=>{
  //  let el2 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup");
//el2.click();

  // },5000)
  // let el3 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[5]");
//el3.click();

/*
let a=await client.$("//android.widget.ImageView[@content-desc=\"TikTok\"]");
a.click();

let el1 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[5]");
el1.click();
let el2 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.c/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView");
el2.click();

setTimeout(async ()=>{
  let el3 = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]");
el3.click();
},5000)

setTimeout(async ()=>{
  console.log('lklkj');
  let element=client.findElement('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]', 'XCUIElementTypeApplication');
  console.log(element);

},2000)
//let el5 = await client.$("com.zhiliaoapp.musically:id/c7o");
//el5.click();
*/



  
  //await field.setValue("Hello World!");
  //const value = await field.getText();
  //assert.strictEqual(value,"Hello World!");

 // await client.deleteSession();
}

main();