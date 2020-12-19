(window.webpackJsonp=window.webpackJsonp||[]).push([["conditionalBanner"],{"/5+W":function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e[e.Top=0]="Top",e[e.Bottom=1]="Bottom"}(a||(a={}))},QSRu:function(e,n,t){"use strict";t.r(n),t.d(n,"ConditionalBanner",(function(){return K})),t.d(n,"ConditionalBannerInspector",(function(){return E})),t.d(n,"ConditionalBannerConnector",(function(){return H})),t.d(n,"ConditionalBannerReducer",(function(){return _})),t.d(n,"ConditionalBannerReduxSubspaceName",(function(){return W})),t.d(n,"ToolingInfo",(function(){return V}));var a,r,o,i,s,l,c,d,u=t("5mwN"),m=t("xDbA"),g=t("NS3c"),p=t("HxRh"),b=t("gqHb");!function(e){e.SLIDEUP="SLIDEUP",e.FADEIN="FADEIN",e.SLIDERIGHT="SLIDERIGHT"}(a||(a={})),function(e){e.Top="Top",e.Bottom="Bottom"}(r||(r={})),function(e){e.TEXT="TEXT",e.IMAGE="IMAGE"}(o||(o={})),function(e){e.FullBleed="FullBleed",e.ContentWidth="ContentWidth"}(i||(i={})),function(e){e.Left="Left",e.Right="Right",e.Center="Center"}(s||(s={})),function(e){e.NONE="NONE",e.LINK="LINK",e.BUTTON="BUTTON",e.IMAGE="IMAGE"}(l||(l={})),function(e){e.Banner_Generic1="Banner_Generic1"}(c||(c={})),function(e){e.SameTab="SameTab",e.NewTab="NewTab",e.NewWindow="NewWindow"}(d||(d={}));class h{static extractMessage(e){let n=null;return 0==e.length||(h.hasMessageData(e[0])?n=h.mapMessageResponseForProps(e[0]):b.a.trackAppErrorEvent(Object.assign(Object.assign({},p.U),{message:"Conditional message passed is invalid or malformed",pb:Object.assign(Object.assign({},p.U.pb),{customMessage:""+!e[0]?"Empty cbanner":"Malformed cbanner encountered"})}))),n}static hasMessageData(e){return null!=(e&&e.BannerName&&e.Headline&&e.Image1)}static extractStyles(e){return{headlineFontColor:e.headlineFontColor,leadFontColor:e.leadFontColor,backgroundColor:e.backgroundColor,button1BgColor:e.button1BgColor,button1FontColor:e.button1FontColor,button2BgColor:e.button2BgColor,button2FontColor:e.button2FontColor}}static mapMessageResponseForProps(e){if(!e)return null;return{bannerName:e.BannerName,durationInMinutes:Number(e.Duration),transitionEffect:a[e.TransitionEffect],position:r[e.Position],bannerType:o[e.BannerType],bannerWidth:i[e.BannerWidth],headline:e.Headline,lead:e.Lead,headlineFontColor:e.HeadlineFontColor,leadFontColor:e.LeadFontColor,destinationUrl:e.DestinationUrl,leadDestinationUrl:e.LeadDestinationUrl,destinationTarget:d[e.DestinationTarget],textAlignment:s[e.TextAlignment],image1Url:e.Image1,image2Url:e.Image2,dismissalOption:l[e.DismissalOption],dismissalText:e.DismissalText,backgroundColor:e.BackgroundColor,backgroundImageUrl:e.BackgroundImage,button1Label:e.Button1_Label,button1Url:e.Button1_URL,button1BgColor:e.Button1_BGColor,button1FontColor:e.Button1_FontColor,button2Label:e.Button2_Label,button2Url:e.Button2_URL,button2BgColor:e.Button2_BGColor,button2FontColor:e.Button2_FontColor,altText:e.AltText,template:c[e.Template],flightId:e.Flightid,creativeId:e.creativeId,placementId:e.placementId,telemetry:e.telemetry}}}var C=t("VZ41"),f=t("/5+W"),B=t("mDtb"),v=t("rRWH"),T=t("qibw");const O={button:{padding:"0","min-width":"auto",width:"55px","min-height":"auto",height:"28px","border-width":"1px",top:"8px"}};var x=t("Zn5T"),y=t("ERkP"),I=t.n(y);class w extends u.a{constructor(e){super(e),this.handledProps=Object.assign(Object.assign({},u.b),{customField:void 0,experienceName:void 0,bannerId:void 0,showBanner:void 0,hideBanner:void 0,noBanner:void 0,currentConditionalBanner:void 0,irisCallOccurred:void 0,autoDismissTimeoutSeconds:void 0,telemetryTags:void 0,requestContext:void 0,onExperienceMilestoneTimingUpdate:void 0,managedClasses:void 0,cbannerStyles:void 0,reportEvent:void 0}),this.onClickWithTargetAndUrl=(e,n)=>{e===d.SameTab?window.open(n,"_self"):e===d.NewTab?window.open(n,"_blank"):window.open(n);const{currentConditionalBanner:t,reportEvent:a}=this.props;a&&a(C.b.Action,t.telemetry,C.a.Click,t.creativeId,t.placementId)},this.showConditionalBanner=()=>{const{bannerId:e,showBanner:n}=this.props;n&&setTimeout((function(){n(e,f.a.Top)}),2e3)},this.receivedEmptyConditionalBanner=()=>{const{bannerId:e,noBanner:n}=this.props;n&&n(e)},this.dismissBannerClickHandler=this.dismissBannerClickHandler.bind(this)}componentDidMount(){super.componentDidMount();const{irisCallOccurred:e}=this.props;e&&this.informBannerManager()}componentDidUpdate(e){const{irisCallOccurred:n}=this.props;n!=e.irisCallOccurred&&this.informBannerManager()}informBannerManager(){const{currentConditionalBanner:e,reportEvent:n}=this.props;e?(this.showConditionalBanner(),this.addAutoDismiss(),n&&n(C.b.Impression,e.telemetry,void 0,e.creativeId,e.placementId)):this.receivedEmptyConditionalBanner()}render(){super.render();const{currentConditionalBanner:e,managedClasses:n,cbannerStyles:t}=this.props;if(!e)return null;const a=t.backgroundColor?{background:t.backgroundColor}:{};return I.a.createElement("div",Object.assign({className:n.cbannerContainer,style:a},this.unhandledProps()),I.a.createElement("div",{className:n.cbannerImagesAndText},this.renderImage1(e),this.renderHeadlineAndLead(e),this.renderImage2(e)),I.a.createElement("div",{className:n.cbannerDismissAndButtons},this.renderDismissalText(e),this.renderButton2(e),this.renderButton1(e),this.renderDismissalOptionImage(e)))}renderImage1(e){return e.image1Url?I.a.createElement("img",{alt:e.altText,className:this.props.managedClasses.cbannerImage1,src:e.image1Url}):null}renderImage2(e){return e.image2Url?I.a.createElement("img",{alt:e.altText,className:this.props.managedClasses.cbannerImage2,src:e.image2Url}):null}renderHeadlineAndLead(e){const{managedClasses:n,cbannerStyles:t,telemetryTags:a}=this.props;if(!e.headline)return null;const r=t.headlineFontColor?{color:t.headlineFontColor}:{},o=t.leadFontColor?{color:t.leadFontColor}:{};return I.a.createElement("div",Object.assign({},a.headlineTelemetry,{className:n.cbannerHeadlineAndLead,onClick:()=>this.onClickWithTargetAndUrl(e.destinationTarget,e.leadDestinationUrl)}),I.a.createElement("div",{className:n.cbannerHeadline,style:r},e.headline),e.lead&&e.lead.length>0&&I.a.createElement("div",{className:n.cbannerLead,style:o},e.lead))}renderDismissalText(e){const{managedClasses:n,cbannerStyles:t,telemetryTags:a}=this.props;if(e.dismissalOption!=l.LINK||!e.dismissalText)return null;const r=t.headlineFontColor?{color:t.headlineFontColor}:{};return I.a.createElement("a",Object.assign({href:"javascript:void(0)"},a.closeTelemetry,{className:n.cbannerDismiss,style:r,onClick:this.dismissBannerClickHandler}),e.dismissalText)}renderButton1(e){const{managedClasses:n,cbannerStyles:t,telemetryTags:a}=this.props;if(!e.button1Label)return null;const r=new Object;return t.button1BgColor&&(r.background=t.button1BgColor),t.button1FontColor&&(r.color=t.button1FontColor),I.a.createElement(m.a,Object.assign({},a.buttonTelemetry,{className:n.cbannerButton,style:r,onClick:()=>this.onClickWithTargetAndUrl(e.destinationTarget,e.button1Url)}),e.button1Label)}renderButton2(e){const{managedClasses:n,cbannerStyles:t,telemetryTags:a}=this.props;if(!e.button2Label)return null;const r=new Object;return t.button2BgColor&&(r.background=t.button2BgColor),t.button2FontColor&&(r.color=t.button2FontColor),I.a.createElement(m.a,Object.assign({},a.buttonTelemetry,{className:n.cbannerButton,style:r,onClick:()=>this.onClickWithTargetAndUrl(e.destinationTarget,e.button2Url)}),e.button2Label)}renderDismissalOptionImage(e){const{managedClasses:n,telemetryTags:t}=this.props;return e.dismissalOption!=l.IMAGE?null:I.a.createElement(m.a,Object.assign({},t.closeTelemetry,{jssStyleSheet:O,appearance:g.a.lightweight,onClick:this.dismissBannerClickHandler}),this.dismissSvg(n.cbannerDismissSvg))}dismissSvg(e){return I.a.createElement("svg",{className:e,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},I.a.createElement("path",{d:"M6.84961 6L12 11.1504L11.1504 12L6 6.84961L0.849609 12L0 11.1504L5.15039 6L0 0.849609L0.849609 0L6 5.15039L11.1504 0L12 0.849609L6.84961 6Z"}))}addAutoDismiss(){const{autoDismissTimeoutSeconds:e,bannerId:n,hideBanner:t,currentConditionalBanner:a}=this.props;let r=0;a&&a.durationInMinutes>0&&(r=60*a.durationInMinutes),e&&e>0&&(0==r||e<r)&&(r=e),r>0&&t&&window.setTimeout(()=>{t(n)},1e3*r)}dismissBannerClickHandler(){const{hideBanner:e,bannerId:n,currentConditionalBanner:t,reportEvent:a}=this.props;e&&(e(n),a&&a(C.b.Action,t.telemetry,C.a.Dismiss,t.creativeId,t.placementId))}}w.defaultProps={experienceName:x.a.conditionalBanner};var E,j=t("D57K");(E||(E={})).inspect=function(e){const{config:n,state:t,connectorArgs:a}=e;let r;return t.currentConditionalBanner&&(r=h.extractStyles(t.currentConditionalBanner)),{props:Object.assign(Object.assign({},a),{autoDismissTimeoutSeconds:n.autoDismissTimeoutSeconds,currentConditionalBanner:t.currentConditionalBanner,irisCallOccurred:t.irisCallOccurred,cbannerStyles:r,telemetryTags:{}}),missingChildren:[]}};var D=t("ljWX"),k=t("Am8i"),A=t("WfnD"),F=t("G82u");class L{}L.updateConditionalBannerMessage=new F.a("UpdateConditionalBannerMessage");var S=t("z5Om"),N=t("s9+9"),U=t("9J8d");class M{static getConditionalBannersFromDataConnector(e){return Object(j.b)(this,void 0,void 0,(function*(){const n=yield U.a.getInstance().rootReducer.getDataConnector(N.a.IrisData);if(!n)return b.a.trackAppErrorEvent(Object.assign(Object.assign({},p.W),{message:"No Iris data connector for conditional banner"})),null;const t=yield n.getPayload(e);return M.validateSurface(t,e)?h.extractMessage(M.extractConditionalBannerCreativeMessages(t)):null}))}static reportEvent(e,n,t,a,r){return Object(j.b)(this,void 0,void 0,(function*(){if(!e)return void b.a.trackAppErrorEvent(Object.assign(Object.assign({},p.T),{message:"Event type is undefined for conditional banner"}));if(!n)return void b.a.trackAppErrorEvent(Object.assign(Object.assign({},p.X),{message:"Iris telemetry info not found for conditional banner"}));if(e===C.b.Action&&!t)return void b.a.trackAppErrorEvent(Object.assign(Object.assign({},p.V),{message:"Iris action undefined for conditional banner"}));const o=yield U.a.getInstance().rootReducer.getDataConnector(N.a.IrisData);o&&o.sendActionUpdate(r,a,e,n,t)}))}static validateSurface(e,n){return!!e&&(!S.a.infoHasErrors(e)||(e.errors.forEach(e=>{2040!=e.code&&b.a.trackAppErrorEvent(Object.assign(Object.assign({},p.S),{message:"Surface errors discovered for conditional banner",pb:Object.assign(Object.assign({},p.S.pb),{customMessage:"Error with surface: "+D.d.ConditionalBanner+" Code: "+e.code+" Message: "+e.msg})}))}),!1))}static extractConditionalBannerCreativeMessages(e){const n=[];return e.creatives.forEach(t=>{if(t.content&&t.telemetry&&t.creativeId){const a=Object.assign(Object.assign({},t.content),{telemetry:t.telemetry,creativeId:t.creativeId,placementId:e.placement});n.push(a)}}),n}}class H extends A.a{constructor(e,n,t,a,r,o,i){super(e,n,t,a,r,o,i),this.reportEvent=(e,n,t,a,r)=>{M.reportEvent(e,n,t,a,r)}}onComponentConnect(e){return Object(j.b)(this,void 0,void 0,(function*(){yield A.a.prototype.onComponentConnect.call(this,e),this.setTelemetryTags(e.parentTelemetry),M.getConditionalBannersFromDataConnector(D.d.ConditionalBanner).then(e=>{L.updateConditionalBannerMessage.getActionSender(this).send(e)})}))}setTelemetryTags(e){if(!e)return;const n=e.addOrUpdateChild({name:"ConditionalBanner_button",type:k.e.ActionButton}),t=e.addOrUpdateChild({name:"ConditionalBanner_close",behavior:k.b.Close}),a=e.addOrUpdateChild({name:"ConditionalBanner_headline",type:k.e.Headline});this.cBannerTelemetryTags={buttonTelemetry:n?n.render():null,closeTelemetry:t?t.render():null,headlineTelemetry:a?a.render():null}}mapStateToProps(e,n){const t={config:this.config,state:e,connectorArgs:{reportEvent:this.reportEvent}},a=E.inspect(t);return Object.assign(Object.assign(Object.assign({},n),a.props),{telemetryTags:this.cBannerTelemetryTags||{}})}}var R=t("05Au");const W="MsnConditionalBanner";class _{reduce(e,n){if(!e)return{};if(!n)return e;let t=null,a=!1;return a=a||R.a.handleAction(n,L.updateConditionalBannerMessage,n=>{t=Object.assign({},e),t.currentConditionalBanner=n,t.irisCallOccurred=!0}),t||e}}var G=t("+viU"),P=t("v6uQ"),z=t("ltIV");const K=Object(G.a)(e=>{const n=e&&e.direction?e.direction:T.a.ltr;return{cbannerContainer:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-around",width:"100%",height:"48px",background:"#1679c3",color:"#fff"},cbannerHeadlineAndLead:{display:"flex","flex-direction":"column","justify-content":"space-around","text-decoration":"none","&:hover":{"text-decoration":"underline","text-decoration-color":"#FFFFFF"}},cbannerImagesAndText:{display:"flex","flex-direction":"row",[Object(v.b)("margin-left","margin-right",n)]:"40px"},cbannerHeadline:Object.assign(Object.assign({},Object(B.d)()),{height:"20px","font-size":"14px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}),cbannerLead:{"font-size":"12px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},cbannerDismissAndButtons:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between",[Object(v.b)("margin-right","margin-left",n)]:"20px"},cbannerDismiss:Object.assign(Object.assign({},Object(B.d)()),{"font-size":"14px",[Object(v.b)("margin-right","margin-left",n)]:"30px",color:"inherit","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","text-decoration":"none"}),cbannerImage1:{[Object(v.b)("margin-right","margin-left",n)]:"12px",width:"40px",height:"40px"},cbannerImage2:{float:Object(v.b)("left","right",n),"margin-right":Object(v.b)("16px","0px",n),"margin-left":Object(v.b)("0px","16px",n),"margin-top":"10px",width:"20px"},cbannerButton:Object.assign(Object.assign({background:"#fff",color:"#187bb9",width:"120px",height:"20px",opacity:".9"},Object(B.d)()),{"font-size":"14px",[Object(v.b)("margin-right","margin-left",n)]:"20px","&:hover":{opacity:"1"}}),cbannerDismissSvg:{width:"8px",height:"8px",fill:"#fff","& path":{stroke:"#fff","stroke-width":".5"}}}})(w),V={reactComponent:K,experienceConfigSchema:P.ConditionalBannerConfigSchema,defaultMockState:{},mockState:[{key:"preview",value:{}}],mockConfig:z.mockConfig,inspector:E.inspect}},ltIV:function(e,n){},v6uQ:function(e,n){}}]);