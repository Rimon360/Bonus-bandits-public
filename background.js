async function wait(a){return new Promise(t=>{setTimeout(()=>{t()},1e3*a)})}function activateBackground(){console.log("Background script activated.")}!async function(){async function a(a,t){await chrome.storage.local.set({[a]:t})}async function t(a){return(await chrome.storage.local.get(a))[a]}function e(){return Math.round(new Date().getTime()/1e3)}let c=t("lk"),o=86400;async function n(n,r,i){if(!c)return;let s=n+"_timer",u=await t(s),l=e();if(null!=u&&l>u){o="chanced_timer"===s?3630:"stake_timer"===s?86430:86400,a(s,e()+o),a("run_"+n,!0),console.log("...starting  "+r+"...");let $=await chrome.tabs.query({url:i});0==$.length?chrome.tabs.create({url:r,active:!1}):chrome.tabs.reload($[0].id)}}for(let r of["fortunecoins_timer","chumbacasino_timer","zulacasino_timer","stake_timer","sportzino_timer","chanced_timer","globalpoker_timer"])await t(r)||(o="chanced_timer"===r?3630:"stake_timer"===r?86430:86400,a(r,e()+o));c&&(setInterval(()=>{n("fortunecoins","https://fortunecoins.com/",["*://*.fortunecoins.com/*"])},3e3),setInterval(()=>{n("chumbacasino","https://chumbacasino.com/",["*://*.chumbacasino.com/*"])},3e3),setInterval(()=>{n("zulacasino","https://zulacasino.com/",["*://*.zulacasino.com/*"])},3e3),setInterval(()=>{n("stake","https://stake.us/?c=wrLxMU8A",["*://*.stake.us/*"])},3e3),setInterval(()=>{n("sportzino","https://sportzino.com/",["*://*.sportzino.com/*"])},3e3),setInterval(()=>{n("chanced","https://www.chanced.com/",["*://*.chanced.com/*"])},3e3),setInterval(()=>{n("globalpoker","https://globalpoker.com/",["*://*.globalpoker.com/*","*://login.auth.poker/*"])},3e3)),chrome.runtime.onMessage.addListener(async(t,e,o)=>{if(!c)return;let n=t.ref+"_timer",r="run_"+t.ref;switch(t.ref){case"fortunecoins":case"chumbacasino":case"zulacasino":case"stake":case"sportzino":case"chanced":case"globalpoker":a(n,0),a(r,!0);break;case"start_all":for(let i of["fortunecoins","chumbacasino","zulacasino","stake","sportzino","chanced","globalpoker"])a(i+"_timer",0),a(r,!0),await wait(.1);case"close_tab_act":e.tab?.id&&chrome.tabs.remove(e.tab.id)}})}(),chrome.alarms.onAlarm.addListener(function(a){"activateBackgroundAlarm"===a.name&&activateBackground()}),chrome.alarms.create("activateBackgroundAlarm",{periodInMinutes:10});