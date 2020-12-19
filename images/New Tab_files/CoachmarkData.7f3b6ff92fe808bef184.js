(window.webpackJsonp=window.webpackJsonp||[]).push([["CoachmarkData"],{QnRU:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return w})),r.d(t,"b",(function(){return D}));var a=r("D57K"),i=r("tMmC"),s=r("a0gC");const n=new class{getAllCampaigns(){return new Promise(e=>Object(a.b)(this,void 0,void 0,(function*(){try{(yield s.a.isUserNurturingApiAvailableToUse())?s.a.getUserNurturingPreferenceSetting("campaigns").then(t=>{t||i.a.logError("PSL: window.chrome.ntpSettingsPrivate.getPref does not have campaigns."),e(t||[])}):(i.a.logError("PSL: Error fetching campaigns due to window.chrome.ntpSettingsPrivate.getPref api not available for this version of EDGE"),e([]))}catch(t){i.a.logError(t),e([])}})))}persistCampaigns(e){return new Promise(t=>Object(a.b)(this,void 0,void 0,(function*(){try{(yield s.a.isUserNurturingApiAvailableToUse())?(yield s.a.saveUserNurturingPreferenceSetting("campaigns",e),i.a.log(`PSL: Number of campaigns persisted: ${e.length||0}.`),t(!0)):i.a.logError("PSL: Error persisting campaigns due to window.chrome.ntpSettingsPrivate.getPref api not available for this version of EDGE")}catch(e){i.a.logError(e)}t(!1)})))}clearPersistentStorage(){return this.persistCampaigns([])}};var o=r("dTwT");const c=new class{constructor(){this.storageKey="irisNewsLocalStorage"}getAllCampaigns(){try{return Object(o.a)().getObject(this.storageKey)}catch(e){return i.a.logError(`Exception ${e} occurred retrieving user nurturing campaigns from local storage`),[]}}storeCampaigns(e){try{return Object(o.a)().setObject(this.storageKey,e),i.a.log(`Number of campaigns persisted in local storage: ${e.length||0}.`),!0}catch(e){return i.a.logError(`Exception ${e} occurred storing user nurturing campaigns in local storage`),!1}}clearLocalStorage(){return this.storeCampaigns([])}};var u=r("HxRh"),d=r("rvYQ"),g=r("ADRF"),h=r("ax+D"),f=r("y+Kz"),l=r("I6Lx"),m=r("ypwz"),p=r("s9+9"),b=r("KRKw"),C=r("tERu"),v=r("ljWX"),S=r("VZ41"),I=r("XgsJ"),y=r("HDSB"),E=r("9J8d"),A=r("gqHb"),O=r("XLvf");const j=new class{constructor(){this.cachedSurfaceMap=new Map,this.irisSessionContextAttributes=new Map,this.enabledFeatures=[],this.millisecondsInADay=864e5,this.timeNow=(new Date).getTime(),this.appType=d.b&&d.b.AppType,this.appType===m.a.EdgeChromium&&this.getConfigDataAsync()}get isEnabled(){return!!this.shouldUseCache()||!(!this.irisDataConfig||!this.irisDataConfig.enableCaching)&&this.isCookieConsentNotRequired()}set IrisDataConfig(e){this.irisDataConfig=e}clearCachedSurfaceMap(){this.isEnabled&&this.cachedSurfaceMap.clear()}populateCachedSurfaceMap(){return Object(a.b)(this,void 0,void 0,(function*(){if(this.isEnabled)try{if(this.purgeCacheWithQsp())return yield this.clearCachedSurfacesFromStorage(),void i.a.log("Cache purged!");this.clearCachedSurfaceMap();let e=[];if(e=d.b.AppType===m.a.EdgeChromium?yield n.getAllCampaigns():c.getAllCampaigns(),!e||0===e.length)return void i.a.log("Bulk read of surfaces from local/persistent storage didn't return a surface.");const{subscribers:t}=this.irisDataConfig,r=[];Object.keys(t).forEach(e=>{t[e].active||r.push(v.c[e])}),e.forEach(e=>{e&&e.placement&&(0===r.length||-1===r.indexOf(e.placement))&&(i.a.log(`Populated ${e.placement} from local/persistent storage.`),this.cachedSurfaceMap.set(e.placement,e),this.highestLastAddedTime=0,e.creatives&&e.creatives.length>0&&e.creatives.forEach(e=>{e&&e.storageInfo&&e.storageInfo.lastAddedTime&&(this.highestLastAddedTime=e.storageInfo.lastAddedTime>=this.highestLastAddedTime?e.storageInfo.lastAddedTime:this.highestLastAddedTime)}))})}catch(e){i.a.logError("Bulk read of surfaces from local/persistent storage threw error: "+e)}}))}getLatestCachedSurface(e,t){if(!e||0===e.length||0===this.cachedSurfaceMap.size)return null;if(!this.cachedSurfaceMap.has(e))return null;const r=this.cachedSurfaceMap.get(e);if(!r||!r.creatives||0===r.creatives.length)return null;if(t!==v.d.MSNAnaheimNewsNTPImages)return r;const a=this.getStorageCachingExpiration();let i=!1;return r.creatives.forEach(e=>{e&&e.storageInfo&&e.storageInfo.lastAddedTime&&this.timeNow-e.storageInfo.lastAddedTime<a&&(i=!0)}),i?r:null}addSurfaceToMap(e){if(!e||!e.placement)return;const t=e.placement,r=new Map;if(this.cachedSurfaceMap.has(t)){this.cachedSurfaceMap.get(t).creatives.forEach(e=>{r.set(e.creativeId,e)})}e.creatives&&e.creatives.forEach(e=>{const t={useCount:0,lastAddedTime:this.timeNow};e.storageInfo=t,r.set(e.creativeId,e)}),e.creatives=[...r.values()],i.a.log(`Adding SurfaceInfo ${t} in storage.`),this.cachedSurfaceMap.set(t,e)}addSurfaceCollectionToStorage(e){return Object(a.b)(this,void 0,void 0,(function*(){e&&e.length>0&&(e.forEach(e=>{e.placement!==v.c[v.d.MSNAnaheimNewsNTPImages]&&e.placement!==v.c[v.d.MSNAnaheimNewsNTPImages+v.b]&&this.addSurfaceToMap(e)}),yield this.persistAllSurfaces())}))}persistAllSurfaces(){return Object(a.b)(this,void 0,void 0,(function*(){if(this.isEnabled){if(d.b.AppType===m.a.EdgeChromium)return void(yield n.persistCampaigns([...this.cachedSurfaceMap.values()]));c.storeCampaigns([...this.cachedSurfaceMap.values()])}}))}clearCachedSurfacesFromStorage(){return Object(a.b)(this,void 0,void 0,(function*(){this.isEnabled&&(this.clearCachedSurfaceMap(),d.b.AppType!==m.a.EdgeChromium?c.clearLocalStorage():yield n.clearPersistentStorage())}))}getCachedSurfaceMap(){return this.cachedSurfaceMap}HaveWeShownASurfaceRecently(){return this.highestLastAddedTime>0&&this.timeNow-this.highestLastAddedTime<this.getTimeBetweenShowingDifferentCreatives()}isUserSeenAllCreativesInSurface(e){if(!e||0===e.length)return!1;if(this.cachedSurfaceMap.has(e)){const t=this.cachedSurfaceMap.get(e);let r=0;if(t&&t.creatives&&t.creatives.length>0)return t.creatives.forEach(e=>{e.storageInfo&&e.storageInfo.useCount&&e.storageInfo.lastAddedTime&&(e.storageInfo.useCount>=this.getReshowingCounterForEachCreative()||this.timeNow-e.storageInfo.lastAddedTime<=this.getTimeBetweenReshowingSameCreative())&&r++}),t.creatives.length===r}return!1}filterCreatives(e){if(!e||!this.shouldUseMaximumCapPerCreative())return e;const t=this.irisDataConfig&&this.irisDataConfig.maximumCapPerCreative||2,r=[];return e.creatives.forEach(e=>{e.storageInfo&&e.storageInfo.useCount<=t&&r.push(e)}),e.creatives=r,e}updateAction(e,t,r){if(e&&t&&this.cachedSurfaceMap.has(e)){const a=this.cachedSurfaceMap.get(e);a&&a.creatives&&a.creatives.forEach(e=>{e.creativeId===t&&e.storageInfo&&(e.storageInfo.irisAction=r)})}}markCreativeAsSeenByUser(e,t){if(e&&t&&this.cachedSurfaceMap.has(e)){const r=this.cachedSurfaceMap.get(e);r&&r.creatives&&r.creatives.forEach(e=>{e&&e.creativeId&&e.creativeId===t&&e.storageInfo&&(e.storageInfo.useCount++,e.storageInfo.lastAddedTime=this.timeNow)})}}hasUserDismissedAllStoredSurfaceCreatives(e){if(!e||0===e.length)return!1;if(this.cachedSurfaceMap.has(e)){const t=this.cachedSurfaceMap.get(e);let r=0;if(t&&t.creatives&&t.creatives.length>0)return t.creatives.forEach(e=>{if(!e.storageInfo||!e.storageInfo.irisAction||e.storageInfo.irisAction!==S.a.Dismiss)return!1;r++}),t.creatives.length===r}return!1}updateCreativeLatestAddedTime(e,t,r){if(!this.cachedSurfaceMap.has(e))return;const a=this.cachedSurfaceMap.get(e);a&&a.creatives&&0!==a.creatives.length&&a.creatives.forEach(e=>{e&&e.creativeId===t&&e.storageInfo&&e.storageInfo.lastAddedTime&&(e.storageInfo.lastAddedTime=r)})}getStorageCachingExpiration(){return(this.irisDataConfig&&this.irisDataConfig.storageCachingExpiration||1)*this.millisecondsInADay}getReshowingCounterForEachCreative(){return this.irisDataConfig&&this.irisDataConfig.frequency||2}getTimeBetweenReshowingSameCreative(){return(this.irisDataConfig&&this.irisDataConfig.frequencyInterval||14)*this.millisecondsInADay}getTimeBetweenShowingDifferentCreatives(){return(this.irisDataConfig&&this.irisDataConfig.frequencyIntervalBetweenCreatives||1)*this.millisecondsInADay}purgeCacheWithQsp(){const e=Object(I.m)();if(e){const t=g.a.getQueryParameterByName("purgeCache",e);if(t&&"true"===t.toLocaleLowerCase())return!0}return!1}shouldUseCache(){const e=Object(I.m)();if(e){const t=g.a.getQueryParameterByName("useCache",e);if(t)return"true"===t.toLocaleLowerCase()}return!1}shouldUseMaximumCapPerCreative(){const e=Object(I.m)();if(e){const t=g.a.getQueryParameterByName("useMaxCapPerCreative",e);if(t)return"true"===t.toLocaleLowerCase()}return!0}isCookieConsentNotRequired(){const e=E.a.getInstance().rootReducer.connector(p.a.SharedState),t=e&&e.getCurrentState();return(t&&t.cookieConsentStatus)===b.b.NotRequired}getConfigDataAsync(){return Object(a.b)(this,void 0,void 0,(function*(){return this.getConfigDataPromise=new Promise(e=>{try{Object(y.a)()&&window&&window.chrome&&window.chrome.ntpSettingsPrivate&&"function"==typeof window.chrome.ntpSettingsPrivate.getConfigData?window.chrome.ntpSettingsPrivate.getConfigData(t=>{void 0!==t?(this.profileCreationTimeInMs=t.profileCreationTime,this.enabledFeatures=t.enabledFeatures,this.getIrisSessionContextAttributes(t.irisAttributes),this.configData=t,e()):(A.a.trackAppErrorEvent(Object.assign(Object.assign({},u.ab),{message:"Config data is undefined"})),e())}):(A.a.trackAppErrorEvent(Object.assign(Object.assign({},u.Kb),{message:"Failed to fetch config data from chromium API"})),e())}catch(t){A.a.trackAppErrorEvent(Object.assign(Object.assign({},u.Fb),{message:"Exception fetching config data from chromium API",pb:Object.assign(Object.assign({},u.Fb.pb),{customMessage:"Exception: "+t})})),e()}}),this.getConfigDataPromise}))}isBlackoutPeriodOver(){return Object(a.b)(this,void 0,void 0,(function*(){this.appType===m.a.EdgeChromium&&(yield this.getConfigDataPromise);const e=this.irisDataConfig.blackoutPeriodInDays&&this.irisDataConfig.blackoutPeriodInDays*this.millisecondsInADay||7*this.millisecondsInADay;return!!this.profileCreationTimeInMs&&this.timeNow-this.profileCreationTimeInMs>e}))}getIrisSessionContextAttribute(e){return Object(a.b)(this,void 0,void 0,(function*(){return this.appType===m.a.EdgeChromium&&(yield this.getConfigDataPromise),this.irisSessionContextAttributes.has(e)?this.irisSessionContextAttributes.get(e):""}))}getIrisSessionContextAttributes(e){if(h.a.isNotNullOrUndefined(e)&&e.length>0){e.startsWith("&")&&e.length>=1&&(e=e.substring(1));e.split("&").map(e=>e.split("=")).forEach(e=>{this.irisSessionContextAttributes.set(e[0],e[1])})}}isDefaultBrowserUpsellEnabled(){return Object(a.b)(this,void 0,void 0,(function*(){return this.appType===m.a.EdgeChromium&&(yield this.getConfigDataPromise),!!this.enabledFeatures&&this.enabledFeatures.indexOf("msNtpSpotlightSetEdgeAsDefault")>=0}))}isNurturingEnabled(){return Object(a.b)(this,void 0,void 0,(function*(){return this.appType===m.a.EdgeChromium&&(yield this.getConfigDataPromise),!!this.enabledFeatures&&this.enabledFeatures.indexOf("msUserNurturing")>=0}))}getConfigData(){return this.configData}};function w(){return Object(a.b)(this,void 0,void 0,(function*(){if(yield D())return!1;try{return!1!==Object(o.a)().getObject(f.t)}catch(e){return A.a.trackAppErrorEvent(Object.assign(Object.assign({},u.Ob),{message:"Failed to fetch nurturing accepted key from local storage",pb:Object.assign(Object.assign({},u.Ob.pb),{customMessage:`Exception: ${e} occurred while reading key: ${f.t} from local storage.`})})),!1}}))}function D(){return Object(a.b)(this,void 0,void 0,(function*(){yield d.b.AccountInfoPromise;const e=d.b.ResolvedAccountInfo;return Object(O.isNullOrUndefined)(l.b.AadState)?C.b.AAD===(e&&e.account_type):l.b.AadState}))}},U6Xm:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("G82u");class i{}i.addCoachmark=new a.a("AddCoachmark"),i.updateCoachmarkVisibleStatus=new a.a("UpdateCoachmarkVisibleStatus")},g7TJ:function(e,t,r){"use strict";r.r(t),r.d(t,"CoachmarkDataActions",(function(){return n.a})),r.d(t,"CoachmarkDataConnector",(function(){return b})),r.d(t,"CoachmarkDataReducer",(function(){return v})),r.d(t,"CoachmarkPayload",(function(){return a.a})),r.d(t,"CoachmarkPlacement",(function(){return a.b})),r.d(t,"CoachmarkPointerPosition",(function(){return a.c})),r.d(t,"CoachmarkSize",(function(){return a.d})),r.d(t,"CoachmarkSource",(function(){return a.e})),r.d(t,"FloatingCoachmarkPosition",(function(){return a.f})),r.d(t,"IrisAction",(function(){return i.a})),r.d(t,"IrisSurfaceName",(function(){return s.d})),r.d(t,"irisStorageUtility",(function(){return p.a})),r.d(t,"IrisTelemetryEventType",(function(){return i.b})),r.d(t,"RegisterErrorTrackingCallback",(function(){return l.a})),r.d(t,"ToolingInfo",(function(){return S}));var a=r("rcIs"),i=r("VZ41"),s=r("ljWX"),n=r("U6Xm"),o=r("D57K"),c=r("HxRh"),u=r("1w6q"),d=r("tMmC"),g=r("z5Om"),h=r("s9+9"),f=r("9J8d"),l=r("MLMI");class m{static getCoachmarksFromDataConnector(e){return Object(o.b)(this,void 0,void 0,(function*(){if(this.irisDataConnector=yield f.a.getInstance().rootReducer.getDataConnector(h.a.IrisData),!this.irisDataConnector)return l.a.trackAppErrorEvent(Object.assign(Object.assign({},c.P.IrisDataConnectorUndefined),{message:"No Iris data connector"})),null;const t=yield this.irisDataConnector.getPayload(e);if(!this.validateSurface(t,e))return null;const r=t.creatives,a=r[Math.floor(Math.random()*r.length)];return this.extractCoachmarkCreativeMessages(a,t.placement)}))}static fireIrisBeacon(e,t,r,a,i){return Object(o.b)(this,void 0,void 0,(function*(){this.irisDataConnector=yield f.a.getInstance().rootReducer.getDataConnector(h.a.IrisData),this.irisDataConnector?this.irisDataConnector.sendActionUpdate(i,a,e,t,r):l.a.trackAppErrorEvent(Object.assign(Object.assign({},c.P.IrisDataConnectorUndefined),{message:"No Iris data connector",pb:Object.assign(Object.assign({},c.P.EventTypeUndefined.pb),{customMessage:`Error reporting iris beacons eventType: ${e}, telemetryInfo: ${t}, irisAction: ${r}, creativeId: ${a}, placementId:${i}`})}))}))}static validateSurface(e,t){return e?!g.a.infoHasErrors(e)||(e.errors.forEach(e=>{2040!=e.code&&l.a.trackAppErrorEvent(Object.assign(Object.assign({},c.P.ErrorFoundForSurface),{message:"Surface errors discovered",pb:Object.assign(Object.assign({},c.P.ErrorFoundForSurface.pb),{customMessage:"Error with surface: "+s.d.MSNNewsCoachmark+" Code: "+e.code+" Message: "+e.msg})}))}),!1):(d.a.log("IrisHandler: Iris surface not found for the campaign: "+e),!1)}static extractCoachmarkCreativeMessages(e,t){const r=[];let i;return e&&e.content&&e.content.cm&&!e.content.rewards&&e.telemetry&&e.creativeId&&t&&e.content.cm.forEach(s=>{i=Object.assign(Object.assign({},s),{coachmarkSource:a.e.Iris,creativeId:e.creativeId,ctaList:s.cta,ecsFeatureFlags:e.content.ecsFeatureFlags,eventUrl:e.telemetry,frequency:Number(e.content.frequency),frequencyInterval:Number(e.content.frequencyInterval),isEcsExperiment:"true"===e.content.isEcsExperiment,placementId:t,timeoutMilliseconds:Number(s.timeoutMilliseconds)}),r.push(i)}),r}}var p=r("QnRU");class b extends u.a{addCoachmark(e){return Object(o.b)(this,void 0,void 0,(function*(){let t=!1;if(yield Object(p.c)()){const r=a.a.extractMessages(e);if(!r||0===r.length)return!1;const i=new Promise(e=>{n.a.updateCoachmarkVisibleStatus.registerObserver(()=>{t=this.getCurrentState().isCoachmarkOnScreen,e()})});n.a.addCoachmark.getActionSender(this).send(r),yield i}return t}))}reportEvent(e,t,r,a,s){e?t?e!==i.b.Action||r?m.fireIrisBeacon(e,t,r,a,s):l.a.trackAppErrorEvent(Object.assign(Object.assign({},c.P.IrisActionUndefined),{message:"Iris action undefined",pb:Object.assign(Object.assign({},c.P.EventTypeUndefined.pb),{customMessage:`Error reporting iris beacons eventType: ${e}, telemetryInfo: ${JSON.stringify(t)}, irisAction: ${r}, creativeId: ${a}, placementId: ${s}`})})):l.a.trackAppErrorEvent(Object.assign(Object.assign({},c.P.TelemetryInfoUndefined),{message:"Iris telemetry info not found",pb:Object.assign(Object.assign({},c.P.EventTypeUndefined.pb),{customMessage:`Error reporting iris beacons eventType: ${e}, telemetryInfo: ${JSON.stringify(t)}, irisAction: ${r}, creativeId: ${a}, placementId: ${s}`})})):l.a.trackAppErrorEvent(Object.assign(Object.assign({},c.P.EventTypeUndefined),{message:"Event type is undefined",pb:Object.assign(Object.assign({},c.P.EventTypeUndefined.pb),{customMessage:`Error reporting iris beacons eventType: ${e}, telemetryInfo: ${JSON.stringify(t)}, irisAction: ${r}, creativeId: ${a}, placementId: ${s}`})}))}getCoachmarks(e){return Object(o.b)(this,void 0,void 0,(function*(){return yield m.getCoachmarksFromDataConnector(e)}))}}var C=r("05Au");class v{reduce(e,t){if(!e)return{coachmarkMessages:void 0,isCoachmarkOnScreen:void 0};if(!t)return e;let r,a=!1;return a=a||C.a.handleAction(t,n.a.addCoachmark,t=>{r=Object.assign(Object.assign({},e),{coachmarkMessages:t})}),a=a||C.a.handleAction(t,n.a.updateCoachmarkVisibleStatus,t=>{r=Object.assign(Object.assign({},e),{isCoachmarkOnScreen:t})}),r||e}}const S={experienceConfigSchema:{}}}}]);