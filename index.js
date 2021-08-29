
var wd = require('wd');
//var assert = require('assert');
var asserters = wd.asserters;
_p = require('./helpers/promise-utils');

    Q = require('q');



args=process.argv.slice(2);
desiredCaps1= {

    'phone1': {
        'build': 'Node Android',
        'name': 'single_test',
        'device': '192.168.1.94:5555',
        'app': 'undefined',
        'platformName': 'Android',
        'automationName': 'UiAutomator2',
        'deviceName': '7f3a87e80221',
        'platformVersion': '10',
        app: undefined, // Will be added in tests
        'port_num':'4733',
      //  'appPackage': 'com.zhiliaoapp.musically',
        //'appActivity': 'com.ss.android.ugc.aweme.splash.SplashActivity',

    },
    'phone2': {
        'build': 'Node Android',
        'name': 'single_test',
        'device': 'R9EM90TQ1QJ',
        'app': 'undefined',
        'platformName': 'Android',
        'automationName': 'UiAutomator2',
        'deviceName': 'R9EM90TQ1QJ',
        'platformVersion': '11',
        app: undefined, // Will be added in tests
        'port_num':'4734'

    }


}

console.log(desiredCaps1)
desiredCaps =desiredCaps1[args[0]]


var k=0;
accounts=[

];


function delay(t, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}
driver = wd.promiseRemote("http://0.0.0.0:"+desiredCaps.port_num+"/wd/hub");
ff=0;
follow1=()=>{

    driver.init(desiredCaps)
        .then(function(){
            return driver.startActivity({appPackage: 'com.zhiliaoapp.musically.go',appActivity: 'com.ss.android.ugc.aweme.splash.SplashActivity'})
            // return true;
        })
        .then(function (){return driver.waitForElementById('com.zhiliaoapp.musically.go:id/agr', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function (searchElement) {
            searchElement.click();
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/x8', asserters.isDisplayed && asserters.isEnabled, 1000);
        })
        .then(function (searchInput) {
            searchInput.click();
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/x8', asserters.isDisplayed && asserters.isEnabled, 1000);
        })
        .then(function (searchInput) {
            searchInput.sendKeys(accounts[ff].follower);
        })
        .then(async function (){

        return driver.waitForElementById('com.zhiliaoapp.musically.go:id/bcw',1000);
        // let isDisplayed = await element.isDisplayed();


        //  console.log(driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+' T")]', asserters.isDisplayed && asserters.isEnabled, 5000).inspect() );
        // return driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+' T")]', asserters.isDisplayed && asserters.isEnabled, 5000).isDisplayed() || driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+'")]', asserters.isDisplayed && asserters.isEnabled, 30000).isDisplayed() ;
    })
.then(function(searchBtn){
        searchBtn.click();

    })

        .then(async function (){

        //  return driver.waitForElementById('com.zhiliaoapp.musically.go:id/bjh',5000);
        // let isDisplayed = await element.isDisplayed();


        //  console.log(driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+' T")]', asserters.isDisplayed && asserters.isEnabled, 5000).inspect() );
        return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.LinearLayout', asserters.isDisplayed && asserters.isEnabled, 3000) ;
    })
.then(function (firstResult) {
        console.log('mlkmlks')
        return firstResult.click();
    })
    /*.then(function (){
     return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout', asserters.isDisplayed && asserters.isEnabled, 5000);
     })
     .then(function (userTab) {
     return userTab.click();
     })
     .then(function (){
     return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout', asserters.isDisplayed && asserters.isEnabled, 5000);
     })
     .then(function (userTab1) {
     console.log('lkjl')
     return userTab1.click();
     })*/
        .then(async function (){
                 return driver.waitForElementByXPath('//android.widget.TextView[@text="Abonnés"]', 3000)
        })
        .then(async (follower)=>{
                return follower.click();
        })
        .then(function (){
        return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/androidx.appcompat.app.a.b[2]/android.widget.TextView', 10000);
        })
        .then(function(){
            j=1;
            i=1


            ii=0;
            setTimeout(async function run() {
                if(j<200) {
                  followBtn=await  driver.elementsByXPath('//android.widget.TextView[contains(@text, "S\'abonner")]')
                        .then(_p.filterDisplayed)
                    inival=followBtn.length
                    if(followBtn.length>ii){
                      //  if(inival)
                        console.log('iiiih'+ j)


                        followBtn.map((val,idx)=>{
                            delay(500*idx).then(function() {
                            return val.click();


                        });

                        j++
                        ii=idx+1;

                        })
                    }
                   else{

                        i=2;
                        ii=0;
                        action = new wd.TouchAction(driver)
                            action.press({x: 450, y:1300 }).wait(500).moveTo({x:450, y: 410}).release().perform();

                    //  driver.setImplicitWaitTimeout(5000);



                }



                    setTimeout(run,1000);
                }
                else{
                    ff++;
                    return setTimeout(function(){signOut()},5000)


                }

            }, 5000);
        }).catch(function(e){
            console.log('--------------------------')
            follow1()
        })
        .done();


}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

follow=()=>{

    driver.init(desiredCaps)
        .then(function(){
            return driver.startActivity({appPackage: 'com.zhiliaoapp.musically.go',appActivity: 'com.ss.android.ugc.aweme.splash.SplashActivity'})
           // return true;
        })
        .then(function (){return driver.waitForElementById('com.zhiliaoapp.musically.go:id/akw', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function (searchElement) {
            searchElement.click();
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/z9', asserters.isDisplayed && asserters.isEnabled, 3000);
        })
        .then(function (searchInput) {
            searchInput.click();
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/z9', asserters.isDisplayed && asserters.isEnabled, 3000);
        })
        .then(function (searchInput) {
            searchInput.sendKeys(accounts[ff].follower);
        })
        .then(async function (){

        return driver.waitForElementById('com.zhiliaoapp.musically.go:id/bjh',5000);
        // let isDisplayed = await element.isDisplayed();


        //  console.log(driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+' T")]', asserters.isDisplayed && asserters.isEnabled, 5000).inspect() );
       // return driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+' T")]', asserters.isDisplayed && asserters.isEnabled, 5000).isDisplayed() || driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+'")]', asserters.isDisplayed && asserters.isEnabled, 30000).isDisplayed() ;
        })
        .then(function(searchBtn){
        searchBtn.click();

         })

        .then(async function (){

          //  return driver.waitForElementById('com.zhiliaoapp.musically.go:id/bjh',5000);
           // let isDisplayed = await element.isDisplayed();


            //  console.log(driver.waitForElementByXPath('//*[(@text, "'+account[ff].follower+' T")]', asserters.isDisplayed && asserters.isEnabled, 5000).inspect() );
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.LinearLayout', asserters.isDisplayed && asserters.isEnabled, 10000) ;
        })
        .then(function (firstResult) {
            console.log('mlkmlks')
            return firstResult.click();
        })
        /*.then(function (){
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function (userTab) {
            return userTab.click();
        })
        .then(function (){
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function (userTab1) {
            console.log('lkjl')
            return userTab1.click();
        })*/
        .then(function (){
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.TextView[1]', asserters.isDisplayed && asserters.isEnabled, 10000);
        })
        .then(async function (follower) {
            console.log('followers')
            return await follower.click();
        })
        .then(function (){
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function(){
            j=1;
            i=1


            setTimeout(async function run() {
                if(j<160) {

                    driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout["+i+"]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView", asserters.isDisplayed && asserters.isEnabled, 3000)
                        .then(function(followText){
                            return followText.text()
                        })
                        .then(function(tex){
                            console.log('text')
                            console.log(tex)
                            aaa=tex
                            console.log(aaa)
                            if(tex=='S\'abonner'){
                                console.log(true);
                                driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout["+i+"]/android.widget.RelativeLayout", asserters.isDisplayed && asserters.isEnabled, 3000)

                                    .then(async function(fff) {

                                    j++;
                                     fff.click();


                                })

                            }
                            i++;

                        }).catch(async()=>{
                        action = new wd.TouchAction(driver);
                    action.press({xx: 441, y: 1500});
                    action.wait(400);
                    action.moveTo({xx: 441, y: 1700})
                    action.wait(400);
                    action.moveTo({x: 430, y: 414});
                    action.release();
                    await action.perform();
                    i=2;
                  //  driver.setImplicitWaitTimeout(5000);



                })



                    setTimeout(run,2000);
                }
                else{
                    ff++;
                  return setTimeout(function(){signOut()},10000)


                }

            }, 3000);
        })
        .done();


}
nextProfile=()=>{
    console.log('lklsfjmqksdùaqpslù')
    connexion(follow,signOut)
}
connexion=async()=>{
    driver
        .init(desiredCaps)
        .then(function(){
            return driver.startActivity({appPackage: 'com.zhiliaoapp.musically.go',appActivity: 'com.ss.android.ugc.aweme.splash.SplashActivity'})
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/agu', asserters.isDisplayed && asserters.isEnabled, 4000);
        })
        .then(function (searchElement) {
            console.log('succes')
            return searchElement.click();
        })
        .then(async function(){
            try {
                elm= await driver.waitForElementById('com.zhiliaoapp.musically.go:id/jv', asserters.isDisplayed && asserters.isEnabled, 4000)
            }catch(e){
console.log('lkjmlzqkdqldùmql')
                throw 'need_signout'

            }
            return elm;

        })
        .then(function(connexionBtn){
            return connexionBtn.click()

        })
        .then(function(){
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/a2q', asserters.isDisplayed && asserters.isEnabled, 2000)
        })
        .then(async function(){
        action = new wd.TouchAction(driver);
        action.press({xx: 441, y: 1800});
        action.wait(300);
        action.moveTo({x: 430, y: 414});
        action.release();
        await action.perform();

        })
        .then(async function(){
                action = new wd.TouchAction(driver);
                action.press({xx: 441, y: 1800});
                action.wait(300);
                action.moveTo({x: 430, y: 414});
                action.release();
                await action.perform();

            })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/e3', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (addExistingAccount) {
            return addExistingAccount.click();
        })
        .then(function () {
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.TextView', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (connectAccount) {
            return connectAccount.click();
        })
        .then(function () {
            return driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/androidx.appcompat.app.a.b[2]/android.widget.TextView', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (emailTab) {
            return emailTab.click();
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/a5x', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (user) {
            return user.click()
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/a5x', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (user) {
            console.log('sensing key')
            console.log(accounts[k].name)
            return user.sendKeys(accounts[k].name)
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/x6', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (passInput) {
            return passInput.click();
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/x6', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (passInput) {
            return passInput.sendKeys(accounts[k].pass);
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/aff', asserters.isDisplayed && asserters.isEnabled, 2000);
        })
        .then(function (connexionBtn) {
            return connexionBtn.click();
        })



         .then(function () {
         return driver.waitForElementById('com.zhiliaoapp.musically.go:id/a1x', asserters.isDisplayed && asserters.isEnabled, 2000);
         })
        .then(function() { return  setTimeout(follow1,5000)})
        .catch(function(e){
            console.log('--------------------------')
            if(e=='need_signout'){
                signOutLaunchFollow();
            }else{
                console.log(accounts)
                console.log(k)
                console.log(accounts[k])
                connexion()
            }

        })
        .done();
}

signOutLaunchFollow=()=>{
    driver
        .init(desiredCaps)
        .then(function(){
            //  return true;
            return driver.startActivity({appPackage: 'com.zhiliaoapp.musically.go',appActivity: 'com.ss.android.ugc.aweme.splash.SplashActivity'})
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/agu', asserters.isDisplayed && asserters.isEnabled, 3000);
        })
        .then(function (searchElement) {
            console.log('succes')
            return searchElement.click();
        })
        .then(function(){
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/ai9', asserters.isDisplayed && asserters.isEnabled, 3000)
        })
        .then(function(menuBtn){
            return menuBtn.click()

        })
        .then(function(){

            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/b85', asserters.isDisplayed && asserters.isEnabled, 3000);
        })
        .then(async function(){
        action = await new wd.TouchAction(driver);

        return action.press({xx: 441, y: 1726}).wait(1000).moveTo({x: 430, y: 414}).release().perform();

    })
.then(function () {
        return driver.waitForElementById('com.zhiliaoapp.musically.go:id/ag6', asserters.isDisplayed && asserters.isEnabled, 3000);
    })
        .then(function (disconnectBtn) {
            return disconnectBtn.click();
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/apr', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function (validateSignOut) {
            return validateSignOut.click();
        })

        /*
         .then(function () {
         return driver.elementsByClassName('android.widget.TextView');
         })
         .then(function (search_results) {
         assert(search_results.length > 0);
         })*/
        .then(function() {  driver.quit(); return setTimeout(connexion,4000) })
        .catch(function(e){
            console.log('-----------signout---------------')
            signOutLaunchFollow()
        })
        .done();

}
signOut=()=>{
    driver
        .init(desiredCaps)
        .then(function(){
            //  return true;
            return driver.startActivity({appPackage: 'com.zhiliaoapp.musically.go',appActivity: 'com.ss.android.ugc.aweme.splash.SplashActivity'})
        })
        .then(function (){

            //profiles=await client.$('//*[contains(@resource-id, "com.zhiliaoapp.musically.go:id/akz")]')
            //await profiles.click()
            console.log('mlkmlk')
            //driver.execute("mobile: shell", {'command':'am start','args': ["-a", "android.intent.action.VIEW","-d","'https://www.tiktok.com/@elmonsifio' com.zhiliaoapp.musically"]});
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/agu', asserters.isDisplayed && asserters.isEnabled, 3000);
        })
        .then(function (searchElement) {
            console.log('succes')
            return searchElement.click();
        })
        .then(function(){
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/ai9', asserters.isDisplayed && asserters.isEnabled, 3000)
        })
        .then(function(menuBtn){
            return menuBtn.click()

        })
        .then(function(){

            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/b85', asserters.isDisplayed && asserters.isEnabled, 3000);
        })
        .then(async function(){
        action = await new wd.TouchAction(driver);

        return action.press({xx: 441, y: 1726}).wait(1000).moveTo({x: 430, y: 414}).release().perform();

    })
.then(function () {
        return driver.waitForElementById('com.zhiliaoapp.musically.go:id/ag6', asserters.isDisplayed && asserters.isEnabled, 3000);
    })
        .then(function (disconnectBtn) {
            return disconnectBtn.click();
        })
        .then(function () {
            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/apr', asserters.isDisplayed && asserters.isEnabled, 5000);
        })
        .then(function (validateSignOut) {
            return validateSignOut.click();
        })
        .then(function (){
        k++

        })

        /*
         .then(function () {
         return driver.elementsByClassName('android.widget.TextView');
         })
         .then(function (search_results) {
         assert(search_results.length > 0);
         })*/
        .then(function() {  driver.quit(); return setTimeout(main,5000) })
        .catch(function(e){
            console.log('-----------signout---------------')
            signOut()
        })
        .done();

}
autoDM=()=>{


    j=1;
    i=2

    driver
        .init(desiredCaps)
        .then(function(){
            //  return true;
            // return driver.startActivity({appPackage: 'com.zhiliaoapp.musically.go',appActivity: 'com.ss.android.ugc.aweme.splash.SplashActivity'})

            setTimeout(async function run() {
                if(j<160) {
                    profileName='';

                    driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/dmt.viewpager.DmtViewPager.d/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup["+i+"]", asserters.isDisplayed && asserters.isEnabled, 2000)
                        .then(function(newfollower){

                            return newfollower.click()
                        })

                        .then(function(){
                            return driver.waitForElementById('com.zhiliaoapp.musically.go:id/b3s',6000);
                        })
                        .then(function(messageBtn){
                            return messageBtn.click()
                        })
                        .then(async function(){
                        return driver.waitForElementById("com.zhiliaoapp.musically.go:id/amx",8000);

                    })
                .then(function (el2) {
                        return el2.click();
                    })

                        .then(function(){
                            return driver.elementById('com.zhiliaoapp.musically.go:id/bdl',6000);
                        })
                        .then(function(title){
                            return title.text()
                        })
                        .then(function(txt){
                            return profileName=txt
                        })
                        .then(async function(){
                        return driver.waitForElementById("com.zhiliaoapp.musically.go:id/amx",8000);

                    })
                .then(async function(el2){
                        return el2.sendKeys("hello "+profileName+", check my bio for live");
                    })
                .then(async function(){
                        return driver.waitForElementById("com.zhiliaoapp.musically.go:id/b3p",10000);

                    })
                .then(async function(send){
                        send.click();
                    })
                .then(async function(){
                        return driver.waitForElementByXPath("//android.widget.LinearLayout[@content-desc=\"Retour\"]/android.widget.ImageView",5000);
                    })
                .then(async function(back){
                        back.click();
                        i++;

                    })
                .then(async function(){
                        return driver.waitForElementById("com.zhiliaoapp.musically.go:id/hq",5000);
                    })
                .then(async function(backFromProfile){
                        backFromProfile.click();
                        i++;

                    }).catch(async(err)=>{
                        console.log(err)
                    action = new wd.TouchAction(driver);
                    action.press({xx: 441, y: 1726});
                    action.wait(600);
                    action.moveTo({x: 430, y: 414});
                    action.release();
                    await action.perform();
                    i=2;
                    //  driver.setImplicitWaitTimeout(5000);



                })



                    setTimeout(run,10000);
                }
                else{
                    ff++;
                    return setTimeout(function(){signOut()},10000)


                }

            }, 3000);
        })

}

alreadyConnected=()=>{


}

main=async()=>{
    console.log('ffff '+ k)

    console.log(accounts.length)

    if(k<accounts.length)
   connexion()
    //follow()



    //autoDM();
//
//signOut();

    //follow1()
    //swipeUp();
        //takeScreenShot();

}

takeScreenShot=()=>{
    let originalImage = ''
    driver.init(desiredCaps)
        .then(function() {
            driver.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile('out.png', image, 'base64', function (err) {
                        console.log(err);
                    });
                    originalImage='out.png'
                }
            );
        })
        .then(function() {
           return driver.getElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.app.Dialog/android.view.View[3]/android.view.View[2]/android.view.View[2]');
        })
        .then(function(elm) {
            var smile = new wd.TouchAction(elm);
            smile
                .press({x:110, y:200})
                .moveTo({x:1, y:1})
                .moveTo({x:3, y:1})
                .moveTo({x:6, y:1})
                .moveTo({x:9, y:1})
                .moveTo({x:12, y:1})
                .moveTo({x:15, y:1})
                .moveTo({x:18, y:1})
                .moveTo({x:21, y:1})
                .moveTo({x:24, y:1})
                .moveTo({x:27, y:1})
                .moveTo({x:30, y:1})
                .release();
            })


}
swipeUp=()=>{
    driver
        .init(desiredCaps).unlock();


    // j=1;
          //  i=1

            //  driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout', asserters.isDisplayed && asserters.isEnabled, 10000);

             // setTimeout(async function run() {

            /*    action = new wd.TouchAction(driver);
                action.press({xx: 441, y: 1726});
                action.wait(1000);
                action.moveTo({x: 430, y: 414});
                action.release();
                 action.perform()*/






              //  setTimeout(run, 6000);



          //  }, 3000);



}
main();
