(function(e){function t(t){for(var o,s,c=t[0],a=t[1],u=t[2],d=0,b=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0366d":function(e,t,n){},"0ea0":function(e,t,n){"use strict";n("7cfd")},2355:function(e,t,n){"use strict";n("3b18")},"2b1d":function(e,t,n){"use strict";n("4e82")},"2bcf":function(e,t,n){},"3b18":function(e,t,n){},"47dc":function(e,t,n){},"4e82":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["f"])("h1",null,"Kocsmahoot",-1),i={key:0,id:"nav"},s=Object(o["g"])("JOIN GAME"),c=Object(o["g"])(" | "),a=Object(o["g"])("CREATE GAME"),u=Object(o["g"])(" | "),l=Object(o["g"])("HOW TO PLAY"),d=Object(o["g"])(" | "),b=Object(o["g"])("LEADERBOARD"),f={key:1,id:"nav"},p=Object(o["f"])("div",{id:"footer"},"© copyright 2021 Kocsmahoot ",-1);function O(e,t,n,O,m,j){var h=Object(o["z"])("router-link"),v=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["e"])("div",null,[r,this.$store.getters.getGameStartedState?(Object(o["s"])(),Object(o["e"])("div",f)):(Object(o["s"])(),Object(o["e"])("div",i,[Object(o["h"])(h,{style:{"text-decoration":"none"},to:"/"},{default:Object(o["F"])((function(){return[s]})),_:1}),c,Object(o["h"])(h,{style:{"text-decoration":"none"},to:"/create-game"},{default:Object(o["F"])((function(){return[a]})),_:1}),u,Object(o["h"])(h,{style:{"text-decoration":"none"},to:"/how-to-play"},{default:Object(o["F"])((function(){return[l]})),_:1}),d,Object(o["h"])(h,{style:{"text-decoration":"none"},to:"/leaderboard"},{default:Object(o["F"])((function(){return[b]})),_:1})])),Object(o["h"])(v),p])}var m={data:function(){return{ShowNavBar:!0}}},j=(n("2355"),n("6b0d")),h=n.n(j);const v=h()(m,[["render",O]]);var g=v,q=n("6c02"),w=function(e){return Object(o["v"])("data-v-4be68f14"),e=e(),Object(o["t"])(),e},y={id:"enter-pin-component"},x=w((function(){return Object(o["f"])("h2",null,"Join Game",-1)})),I=w((function(){return Object(o["f"])("h3",null,"Enter your PIN below:",-1)})),S={id:"pin-enter-form"},k=w((function(){return Object(o["f"])("p",null,"You can get the game-PIN from the admin of your team.",-1)}));function D(e,t,n,r,i,s){var c=this;return Object(o["s"])(),Object(o["e"])("div",y,[x,I,Object(o["f"])("div",S,[Object(o["f"])("div",null,[Object(o["G"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.PIN=e})},null,512),[[o["D"],this.PIN]]),Object(o["f"])("button",{onClick:t[1]||(t[1]=function(){return s.goButtonPushed&&s.goButtonPushed.apply(s,arguments)})},"GO!")])]),k])}var N=n("1da1"),z=(n("96cf"),n("d3b7"),""),T={props:{},data:function(){return{PIN:null}},methods:{goButtonPushed:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=z+"join-game?pin="+String(e.PIN),console.log("Requesting:"+n),t.next=5,fetch(n);case 5:return o=t.sent,t.next=8,o.json();case 8:r=t.sent,1==r.validPin?(e.$store.commit("loadQuestions",r.list),e.$store.commit("updatePIN",e.PIN),e.$store.commit("setBoardID",r.boardID),e.$store.commit("setTeamName",r.teamName),e.$store.commit("setGameStarted"),e.$router.push({name:"WaitingForGameStartGuest"})):e.PIN="Invalid PIN",t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}};n("c2be");const Q=h()(T,[["render",D],["__scopeId","data-v-4be68f14"]]);var $=Q,B=(n("a4d3"),n("e01a"),function(e){return Object(o["v"])("data-v-fb357b5a"),e=e(),Object(o["t"])(),e}),G={key:0},P={key:1},R=B((function(){return Object(o["f"])("h2",null,"Choose your Kocsmahoot!",-1)})),C={class:"list-of-quizzes"};function A(e,t,n,r,i,s){var c=Object(o["z"])("quiz-list-item");return Object(o["s"])(),Object(o["e"])("div",null,[i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",G,[Object(o["f"])("h2",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",P,[R,Object(o["f"])("ul",C,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(i.listOfQuizzes,(function(e){return Object(o["s"])(),Object(o["e"])("li",{key:e.title},[Object(o["h"])(c,{quizID:e.id,title:e.title,description:e.description},null,8,["quizID","title","description"])])})),128))])])):Object(o["d"])("",!0)])}var _={class:"quiz-list-item"},F={id:"title"},L=Object(o["g"])("Start this quiz"),E={key:0};function U(e,t,n,r,i,s){var c=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",_,[Object(o["f"])("div",null,[Object(o["f"])("p",F,Object(o["B"])(n.title),1),Object(o["f"])("button",{id:"desc-button",onClick:t[0]||(t[0]=function(){return s.ToggleShowDescription&&s.ToggleShowDescription.apply(s,arguments)})},Object(o["B"])(i.ShowDescriptionText),1),Object(o["f"])("button",{id:"start-button",onClick:t[1]||(t[1]=function(){return s.saveQuizID&&s.saveQuizID.apply(s,arguments)})},[Object(o["h"])(c,{style:{"text-decoration":"none"},to:{name:"EnterTeamName",params:{name:this.title}}},{default:Object(o["F"])((function(){return[L]})),_:1},8,["to"])])]),i.ShowDescription?(Object(o["s"])(),Object(o["e"])("p",E,Object(o["B"])(n.description),1)):Object(o["d"])("",!0)])}n("a9e3");var W={props:{quizID:{required:!0,type:Number},title:{required:!0,type:String},description:{required:!0,type:String}},data:function(){return{ShowDescription:!1,ShowDescriptionText:"Show description"}},methods:{ToggleShowDescription:function(){this.ShowDescription=!this.ShowDescription,this.ShowDescription?this.ShowDescriptionText="Hide description":this.ShowDescriptionText="Show description"},saveQuizID:function(){console.log("Saving quizID to vuex:",this.$props.quizID),this.$store.commit("setQuizID",this.$props.quizID)}}};n("c429");const H=h()(W,[["render",U],["__scopeId","data-v-70fae85c"]]);var J=H,M="",V={components:{QuizListItem:J},props:{},data:function(){return{loadingText:"Loading available quizzes...",loaded:!1,post:null,error:null,listOfQuizzes:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(M+"/quiz-list");case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,e.listOfQuizzes=o.list,console.log("LIST OF QUIZZES"),console.log(e.listOfQuizzes),e.loaded=!0,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](0),e.loadingText="Can't load quiz list. Drink a beer instead!",console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}};n("68b2");const Y=h()(V,[["render",A],["__scopeId","data-v-fb357b5a"]]);var K=Y,Z=Object(o["f"])("h2",null," Upload new game ",-1),X=[Z];function ee(e,t,n,r,i,s){return Object(o["s"])(),Object(o["e"])("div",null,X)}var te={props:{}};const ne=h()(te,[["render",ee]]);var oe=ne,re=function(e){return Object(o["v"])("data-v-4ae15b90"),e=e(),Object(o["t"])(),e},ie=re((function(){return Object(o["f"])("h2",null,"How to play this game?",-1)})),se=re((function(){return Object(o["f"])("iframe",{src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)})),ce=[ie,se];function ae(e,t,n,r,i,s){return Object(o["s"])(),Object(o["e"])("div",null,ce)}var ue={props:{}};n("0ea0");const le=h()(ue,[["render",ae],["__scopeId","data-v-4ae15b90"]]);var de=le,be=function(e){return Object(o["v"])("data-v-7fc9d45e"),e=e(),Object(o["t"])(),e},fe=be((function(){return Object(o["f"])("h2",null,"Leaderboard",-1)})),pe={key:0},Oe={key:1},me={class:"list-of-quizzes"};function je(e,t,n,r,i,s){var c=Object(o["z"])("results-list-item");return Object(o["s"])(),Object(o["e"])("div",null,[fe,i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",pe,[Object(o["f"])("h3",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",Oe,[Object(o["f"])("ul",me,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(this.results,(function(e){return Object(o["s"])(),Object(o["e"])("li",{key:e.id},[Object(o["h"])(c,{quizName:e.quizName,count:e.count,teams:e.teams},null,8,["quizName","count","teams"])])})),128))])])):Object(o["d"])("",!0)])}var he=n("b85c"),ve={class:"quiz-list-item"},ge={id:"title"},qe={key:0},we={class:"list-of-quizzes"};function ye(e,t,n,r,i,s){return Object(o["s"])(),Object(o["e"])("div",ve,[Object(o["f"])("div",null,[Object(o["f"])("p",ge,Object(o["B"])(n.quizName),1),Object(o["f"])("button",{id:"desc-button",onClick:t[0]||(t[0]=function(){return s.ToggleShowDescription&&s.ToggleShowDescription.apply(s,arguments)})},Object(o["B"])(i.ShowDescriptionText),1)]),i.ShowDescription?(Object(o["s"])(),Object(o["e"])("div",qe,[Object(o["f"])("ul",we,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(n.teams,(function(e){return Object(o["s"])(),Object(o["e"])("li",{key:e.TeamName},[Object(o["f"])("p",null,Object(o["B"])(e.TeamName),1),Object(o["f"])("p",null,Object(o["B"])(e.score)+" / "+Object(o["B"])(n.count),1)])})),128))])])):Object(o["d"])("",!0)])}var xe={props:{quizName:{required:!0,type:String},count:{required:!0,type:Number},teams:{required:!0}},data:function(){return{ShowDescription:!1,ShowDescriptionText:"Show results"}},created:function(){console.log("added new quiz element"),console.log(this.$props.quizName)},methods:{ToggleShowDescription:function(){this.ShowDescription=!this.ShowDescription,this.ShowDescription?this.ShowDescriptionText="Hide results":this.ShowDescriptionText="Show results"}}};n("dca0");const Ie=h()(xe,[["render",ye],["__scopeId","data-v-23eafb1c"]]);var Se=Ie,ke="",De={components:{ResultsListItem:Se},data:function(){return{loadingText:"Loading leaderboard ...",loaded:!1,post:null,error:null,results:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o,r,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(ke+"/get-leaderboard");case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,e.results=o.list,r=0,i=Object(he["a"])(e.results);try{for(i.s();!(s=i.n()).done;)c=s.value,c["id"]=r,r++}catch(a){i.e(a)}finally{i.f()}console.log(e.results),e.loaded=!0,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),e.loadingText="Can't load leaderboard. Drink a beer instead!",console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}};n("f840");const Ne=h()(De,[["render",je],["__scopeId","data-v-7fc9d45e"]]);var ze=Ne,Te=(n("b0c0"),function(e){return Object(o["v"])("data-v-3b50fe9c"),e=e(),Object(o["t"])(),e}),Qe=Te((function(){return Object(o["f"])("h2",null,"Enter the name of your team!",-1)})),$e={id:"teamname-enter-form"},Be=Object(o["g"])("GO!");function Ge(e,t,n,r,i,s){var c=this,a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("h2",null,Object(o["B"])(e.$route.params.name),1),Qe,Object(o["f"])("div",$e,[Object(o["f"])("div",null,[Object(o["G"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.teamName=e})},null,512),[[o["D"],this.teamName]]),Object(o["f"])("button",{onClick:t[1]||(t[1]=function(){return s.SetGameStarted&&s.SetGameStarted.apply(s,arguments)})},[Object(o["h"])(a,{style:{"text-decoration":"none"},to:{name:"WaitingForGameStartAdmin",params:{teamName:this.teamName}}},{default:Object(o["F"])((function(){return[Be]})),_:1},8,["to"])])])])])}var Pe={props:{},data:function(){return{teamName:null}},methods:{SetGameStarted:function(){this.$store.commit("setGameStarted"),this.$store.commit("setTeamName",this.teamName)}}};n("9b66");const Re=h()(Pe,[["render",Ge],["__scopeId","data-v-3b50fe9c"]]);var Ce=Re,Ae=function(e){return Object(o["v"])("data-v-707def51"),e=e(),Object(o["t"])(),e},_e={id:"holder"},Fe={key:0},Le={key:1},Ee=Ae((function(){return Object(o["f"])("h2",null,"Waiting for guests to join.",-1)})),Ue={id:"spinner-holder"},We={id:"buttons-holder"},He={id:"start-button"},Je=Object(o["g"])("Start");function Me(e,t,n,r,i,s){var c=Object(o["z"])("half-circle-spinner"),a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",_e,[i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",Fe,[Object(o["f"])("h2",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",Le,[Ee,Object(o["f"])("h3",null,"PIN: "+Object(o["B"])(i.PIN),1),Object(o["f"])("h3",null,"Team name: "+Object(o["B"])(this.$store.getters.getTeamName),1),Object(o["f"])("div",Ue,[Object(o["h"])(c,{id:"spinner","animation-duration":1e3,size:120,color:"#000000"})]),Object(o["f"])("div",We,[Object(o["f"])("button",He,[Object(o["h"])(a,{style:{"text-decoration":"none"},to:"/question"},{default:Object(o["F"])((function(){return[Je]})),_:1})]),Object(o["f"])("button",{onClick:t[0]||(t[0]=function(){return s.navigateBack&&s.navigateBack.apply(s,arguments)}),id:"cancel-button"},"Cancel")])])):Object(o["d"])("",!0)])}var Ve=n("4583"),Ye="",Ke={components:{HalfCircleSpinner:Ve["a"]},data:function(){return{PIN:null,loadingText:"Loading questions...",loaded:!1,post:null,error:null}},created:function(){console.log("QuizID, "+String(this.$store.getters.getQuizID)),console.log("Teamname: "+String(this.$route.params.teamName)),this.fetchQuestionsAndPIN(),window.addEventListener("beforeunload",this.onClose)},beforeRouteLeave:function(e,t,n){var o=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.path),"/question"!=e.path){t.next=5;break}n(),t.next=24;break;case 5:if(r=window.confirm("Do you really want to leave?"),!r){t.next=23;break}return n(),o.$store.commit("unsetGameStarted"),t.prev=9,i=Ye+"/cancel?pin="+String(o.$store.getters.getPIN),console.log("Requesting:"+i),t.next=14,fetch(i);case 14:s=t.sent,console.log(s),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](9),console.log(t.t0);case 21:t.next=24;break;case 23:n(!1);case 24:case"end":return t.stop()}}),t,null,[[9,18]])})))()},methods:{navigateBack:function(){this.$router.push({name:"CreateGame"})},fetchQuestionsAndPIN:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=Ye+"/quiz-questions?quizID="+String(e.$store.getters.getQuizID)+"&teamName="+String(e.$route.params.teamName),console.log("Requesting:"+n),t.next=5,fetch(n);case 5:return o=t.sent,t.next=8,o.json();case 8:r=t.sent,e.$store.commit("loadQuestions",r.list),e.$store.commit("updatePIN",r.pin),e.PIN=r.pin,e.loaded=!0,console.log("Loaded questions"),console.log("Questions:",e.$store.getters.getQuestions),t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](0),e.loadingText="Can't load questions. Drink a beer instead!",console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()},onClose:function(e){navigator.sendBeacon(Ye+"/cancel?pin="+String(this.PIN)),delete e["returnValue"]}}};n("649b");const Ze=h()(Ke,[["render",Me],["__scopeId","data-v-707def51"]]);var Xe=Ze,et=function(e){return Object(o["v"])("data-v-1d3220f0"),e=e(),Object(o["t"])(),e},tt={id:"holder"},nt=et((function(){return Object(o["f"])("h2",null,"Waiting for the game to start.",-1)})),ot={id:"spinner-holder"};function rt(e,t,n,r,i,s){var c=Object(o["z"])("half-circle-spinner");return Object(o["s"])(),Object(o["e"])("div",tt,[nt,Object(o["f"])("h3",null,"PIN: "+Object(o["B"])(this.$store.getters.getPIN),1),Object(o["f"])("h3",null,"Team name: "+Object(o["B"])(this.$store.getters.getTeamName),1),Object(o["f"])("div",ot,[Object(o["h"])(c,{id:"spinner","animation-duration":1e3,size:120,color:"#000000"})]),Object(o["f"])("h3",null,Object(o["B"])(this.statusText),1),Object(o["f"])("div",null,[Object(o["f"])("button",{id:"button-refresh",onClick:t[0]||(t[0]=function(){return s.refresh&&s.refresh.apply(s,arguments)})},"Refresh"),Object(o["f"])("button",{id:"button-cancel",onClick:t[1]||(t[1]=function(){return s.navigateBack&&s.navigateBack.apply(s,arguments)})},"Cancel")])])}var it="",st={components:{HalfCircleSpinner:Ve["a"]},data:function(){return{statusText:null}},beforeRouteLeave:function(e,t,n){var o=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"/question-guest"==e.path?n():(r=window.confirm("Do you really want to leave?"),r?(o.$store.commit("unsetGameStarted"),n()):n(!1));case 1:case"end":return t.stop()}}),t)})))()},methods:{navigateBack:function(){history.back()},refresh:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=it+"/get-current-question?pin="+String(e.$store.getters.getPIN)+"&boardID="+String(e.$store.getters.getBoardID),console.log("Requesting:"+n),t.next=5,fetch(n);case 5:return o=t.sent,t.next=8,o.json();case 8:r=t.sent,console.log("response",r),console.log("finished",r.finished),e.statusText="",0==r.finished?(console.log("Game is running"),-1==r.questionID?e.statusText="The quiz is not yet started.":(console.log("Quiz is started. Question ID = ",r.questionID),e.$router.push({name:"QuestionGuest"}))):1==r.finished?(e.$store.commit("unsetGameStarted"),e.$router.push({name:"ShowResult",params:{correctAnswers:r.score,allQuestions:e.$store.getters.getQuestions.length}})):2==r.finished&&(console.log("Quiz was cancelled."),e.$store.commit("unsetGameStarted"),e.statusText="The quiz was cancelled."),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}};n("d44f");const ct=h()(st,[["render",rt],["__scopeId","data-v-1d3220f0"]]);var at=ct,ut={key:0},lt={key:1};function dt(e,t,n,r,i,s){var c=Object(o["z"])("question-item");return Object(o["s"])(),Object(o["e"])("div",null,[i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",ut,[Object(o["f"])("h2",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",lt,[Object(o["h"])(c,{inputQuestions:this.questions},null,8,["inputQuestions"])])):Object(o["d"])("",!0)])}var bt=function(e){return Object(o["v"])("data-v-22819fcc"),e=e(),Object(o["t"])(),e},ft={key:0,class:"choice-container"},pt={class:"option-container",for:"option1"},Ot={class:"option-label"},mt={class:"option-text"},jt={class:"option-container"},ht={class:"option-label"},vt={class:"option-text"},gt={class:"option-container"},qt={class:"option-label"},wt={class:"option-text"},yt={class:"option-container"},xt={class:"option-label"},It={class:"option-text"},St={key:1,class:"tf-container"},kt={class:"option-container",for:"optionT"},Dt={class:"option-label"},Nt=bt((function(){return Object(o["f"])("span",{class:"option-text"},"True",-1)})),zt={class:"option-container"},Tt={class:"option-label"},Qt=bt((function(){return Object(o["f"])("span",{class:"option-text"},"False",-1)})),$t={key:2,class:"numeric-container"},Bt={class:"option-container"},Gt={id:"submit-button-holder"};function Pt(e,t,n,r,i,s){return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("div",null,[Object(o["f"])("h2",null,Object(o["B"])(i.questions[i.questionNumber]["question"]),1)]),0===this.questions[this.questionNumber]["layoutID"]?(Object(o["s"])(),Object(o["e"])("div",ft,[Object(o["f"])("div",pt,[Object(o["f"])("label",Ot,[Object(o["f"])("input",{type:"radio",id:"option1",name:"option",value:"1",onClick:t[0]||(t[0]=function(e){return s.update(1)})}),Object(o["f"])("span",mt,Object(o["B"])(i.questions[i.questionNumber]["A1"]),1)])]),Object(o["f"])("div",jt,[Object(o["f"])("label",ht,[Object(o["f"])("input",{type:"radio",id:"option2",name:"option",value:"2",onClick:t[1]||(t[1]=function(e){return s.update(2)})}),Object(o["f"])("span",vt,Object(o["B"])(i.questions[i.questionNumber]["A2"]),1)])]),Object(o["f"])("div",gt,[Object(o["f"])("label",qt,[Object(o["f"])("input",{type:"radio",id:"option3",name:"option",value:"3",onClick:t[2]||(t[2]=function(e){return s.update(3)})}),Object(o["f"])("span",wt,Object(o["B"])(i.questions[i.questionNumber]["A3"]),1)])]),Object(o["f"])("div",yt,[Object(o["f"])("label",xt,[Object(o["f"])("input",{type:"radio",id:"option4",name:"option",value:"4",onClick:t[3]||(t[3]=function(e){return s.update(4)})}),Object(o["f"])("span",It,Object(o["B"])(i.questions[i.questionNumber]["A4"]),1)])])])):Object(o["d"])("",!0),1===this.questions[this.questionNumber]["layoutID"]?(Object(o["s"])(),Object(o["e"])("div",St,[Object(o["f"])("div",kt,[Object(o["f"])("label",Dt,[Object(o["f"])("input",{type:"radio",id:"optionT",name:"option",value:"true",onClick:t[4]||(t[4]=function(e){return s.update(1)})}),Nt])]),Object(o["f"])("div",zt,[Object(o["f"])("label",Tt,[Object(o["f"])("input",{type:"radio",id:"optionF",name:"option",value:"false",onClick:t[5]||(t[5]=function(e){return s.update(2)})}),Qt])])])):Object(o["d"])("",!0),2===this.questions[this.questionNumber]["layoutID"]?(Object(o["s"])(),Object(o["e"])("div",$t,[Object(o["f"])("div",Bt,[Object(o["G"])(Object(o["f"])("input",{type:"number",id:"numeric-ans","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.numericAns=e})},null,512),[[o["D"],i.numericAns,void 0,{lazy:!0,trim:!0}]])])])):Object(o["d"])("",!0),Object(o["f"])("div",Gt,[Object(o["f"])("button",{id:"submit-button",onClick:t[7]||(t[7]=function(e){return s.cancel()})},"Cancel"),Object(o["f"])("button",{id:"submit-button",onClick:t[8]||(t[8]=function(e){return s.submit()})},"Submit")])])}n("e9c4");var Rt="",Ct={props:{inputQuestions:{required:!0}},data:function(){return{questions:null,noOfQuestions:0,answer:-1,collectedAnswers:[],numericAns:0,questionNumber:0}},created:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.questions=e.$props.inputQuestions,e.noOfQuestions=e.questions.length,n=Rt+"/set-current-question?pin="+String(e.$store.getters.getPIN)+"&questionID="+String(e.questions[0]["questionID"]),console.log("Requesting:"+n),t.next=6,fetch(n);case 6:o=t.sent,console.log(o);case 8:case"end":return t.stop()}}),t)})))()},methods:{update:function(e){this.answer=e},submit:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(-1!==e.answer||2==e.questions[e.questionNumber]["layoutID"]){t.next=4;break}window.alert("You have to enter an answer."),t.next=29;break;case 4:if(2==e.questions[e.questionNumber]["layoutID"]?(console.log(e.numericAns),e.collectedAnswers.push({questionID:e.questions[e.questionNumber]["questionID"],answer:e.numericAns})):(console.log(e.answer),e.collectedAnswers.push({questionID:e.questions[e.questionNumber]["questionID"],answer:e.answer})),e.answer=-1,console.log("All answers",e.collectedAnswers),e.questionNumber!=e.noOfQuestions-1){t.next=22;break}return console.log("Finished quiz"),n=JSON.stringify({pin:e.$store.getters.getPIN,answers:e.collectedAnswers}),console.log("Body of request",n),t.next=13,fetch(Rt+"/submit-quiz",{method:"POST",body:n,headers:{"Content-type":"application/json; charset=UTF-8"}});case 13:return o=t.sent,t.next=16,o.json();case 16:r=t.sent,console.log("Result of quiz",r.score),e.$store.commit("unsetGameStarted"),e.$router.push({name:"ShowResult",params:{correctAnswers:r.score,allQuestions:e.noOfQuestions}}),t.next=29;break;case 22:return i=Rt+"/set-current-question?pin="+String(e.$store.getters.getPIN)+"&questionID="+String(e.questions[e.questionNumber+1]["questionID"]),console.log("Requesting:"+i),t.next=26,fetch(i);case 26:s=t.sent,console.log(s),e.questionNumber+=1;case 29:case"end":return t.stop()}}),t)})))()},cancel:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push({name:"CreateGame"});case 1:case"end":return t.stop()}}),t)})))()}}};n("c0de");const At=h()(Ct,[["render",Pt],["__scopeId","data-v-22819fcc"]]);var _t=At,Ft="",Lt={components:{QuestionItem:_t},data:function(){return{loadingText:"Loading questions.",loaded:!1,post:null,error:null,questions:null}},created:function(){try{this.questions=this.$store.getters.getQuestions,this.loaded=!0}catch(e){this.loadingText="Can't load questions. Drink a beer instead!",console.log(e)}},beforeRouteLeave:function(e,t,n){var o=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.path),"/question"!=e.path){t.next=5;break}n(),t.next=26;break;case 5:if(r=window.confirm("Do you really want to leave?"),!r){t.next=25;break}return t.prev=7,i=Ft+"/cancel?pin="+String(o.$store.getters.getPIN),console.log("Requesting:"+i),t.next=12,fetch(i);case 12:s=t.sent,console.log(s),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](7),console.log(t.t0);case 19:return t.prev=19,n(),o.$store.commit("unsetGameStarted"),t.finish(19);case 23:t.next=26;break;case 25:n(!1);case 26:case"end":return t.stop()}}),t,null,[[7,16,19,23]])})))()}};const Et=h()(Lt,[["render",dt]]);var Ut=Et,Wt={key:0},Ht={key:1};function Jt(e,t,n,r,i,s){var c=Object(o["z"])("question-guest-item");return Object(o["s"])(),Object(o["e"])("div",null,[i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",Wt,[Object(o["f"])("h2",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",Ht,[Object(o["h"])(c,{inputQuestions:this.questions},null,8,["inputQuestions"])])):Object(o["d"])("",!0)])}var Mt=function(e){return Object(o["v"])("data-v-4a35c116"),e=e(),Object(o["t"])(),e},Vt={key:0,class:"choice-container"},Yt={class:"option-container",for:"option1"},Kt={class:"option-label"},Zt={class:"option-text"},Xt={class:"option-container"},en={class:"option-label"},tn={class:"option-text"},nn={class:"option-container"},on={class:"option-label"},rn={class:"option-text"},sn={class:"option-container"},cn={class:"option-label"},an={class:"option-text"},un={key:1,class:"tf-container"},ln={class:"option-container",for:"optionT"},dn={class:"option-label"},bn=Mt((function(){return Object(o["f"])("span",{class:"option-text"},"True",-1)})),fn={class:"option-container"},pn={class:"option-label"},On=Mt((function(){return Object(o["f"])("span",{class:"option-text"},"False",-1)})),mn={key:2,class:"numeric-container"},jn={class:"option-container"},hn={id:"refresh-button-holder"};function vn(e,t,n,r,i,s){return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("div",null,[Object(o["f"])("h2",null,Object(o["B"])(i.questions[i.questionNumber]["question"]),1)]),0===this.questions[this.questionNumber]["layoutID"]?(Object(o["s"])(),Object(o["e"])("div",Vt,[Object(o["f"])("div",Yt,[Object(o["f"])("label",Kt,[Object(o["f"])("input",{type:"radio",id:"option1",name:"option",value:"1",onClick:t[0]||(t[0]=function(e){return s.update(1)})}),Object(o["f"])("span",Zt,Object(o["B"])(i.questions[i.questionNumber]["A1"]),1)])]),Object(o["f"])("div",Xt,[Object(o["f"])("label",en,[Object(o["f"])("input",{type:"radio",id:"option2",name:"option",value:"2",onClick:t[1]||(t[1]=function(e){return s.update(2)})}),Object(o["f"])("span",tn,Object(o["B"])(i.questions[i.questionNumber]["A2"]),1)])]),Object(o["f"])("div",nn,[Object(o["f"])("label",on,[Object(o["f"])("input",{type:"radio",id:"option3",name:"option",value:"3",onClick:t[2]||(t[2]=function(e){return s.update(3)})}),Object(o["f"])("span",rn,Object(o["B"])(i.questions[i.questionNumber]["A3"]),1)])]),Object(o["f"])("div",sn,[Object(o["f"])("label",cn,[Object(o["f"])("input",{type:"radio",id:"option4",name:"option",value:"4",onClick:t[3]||(t[3]=function(e){return s.update(4)})}),Object(o["f"])("span",an,Object(o["B"])(i.questions[i.questionNumber]["A4"]),1)])])])):Object(o["d"])("",!0),1===this.questions[this.questionNumber]["layoutID"]?(Object(o["s"])(),Object(o["e"])("div",un,[Object(o["f"])("div",ln,[Object(o["f"])("label",dn,[Object(o["f"])("input",{type:"radio",id:"optionT",name:"option",value:"true",onClick:t[4]||(t[4]=function(e){return s.update(1)})}),bn])]),Object(o["f"])("div",fn,[Object(o["f"])("label",pn,[Object(o["f"])("input",{type:"radio",id:"optionF",name:"option",value:"false",onClick:t[5]||(t[5]=function(e){return s.update(2)})}),On])])])):Object(o["d"])("",!0),2===this.questions[this.questionNumber]["layoutID"]?(Object(o["s"])(),Object(o["e"])("div",mn,[Object(o["f"])("div",jn,[Object(o["G"])(Object(o["f"])("input",{type:"number",id:"numeric-ans","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.numericAns=t})},null,512),[[o["D"],e.numericAns,void 0,{lazy:!0,trim:!0}]])])])):Object(o["d"])("",!0),Object(o["f"])("p",null,Object(o["B"])(this.statusText),1),Object(o["f"])("div",hn,[Object(o["f"])("button",{id:"refresh-button",onClick:t[7]||(t[7]=function(e){return s.refresh()})},"Refresh")])])}var gn="",qn={props:{inputQuestions:{required:!0}},created:function(){this.questions=this.$props.inputQuestions,this.noOfQuestions=this.questions.length,this.refresh()},data:function(){return{questions:null,noOfQuestions:0,questionNumber:0,statusText:"This answer is only visible on this device."}},methods:{update:function(e){this.answer=e},refresh:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=gn+"/get-current-question?pin="+String(e.$store.getters.getPIN)+"&boardID="+String(e.$store.getters.getBoardID),console.log("Requesting:"+n),t.next=5,fetch(n);case 5:return o=t.sent,t.next=8,o.json();case 8:r=t.sent,0==r.finished?e.questionNumber=r.questionID-1:1==r.finished?(e.$store.commit("unsetGameStarted"),e.$router.push({name:"ShowResult",params:{correctAnswers:r.score,allQuestions:e.$store.getters.getQuestions.length}})):2==r.finished&&(console.log("The quiz was cancelled."),e.statusText="Quiz was cancelled.",e.$store.commit("unsetGameStarted")),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}};n("2b1d");const wn=h()(qn,[["render",vn],["__scopeId","data-v-4a35c116"]]);var yn=wn,xn={components:{QuestionGuestItem:yn},data:function(){return{loadingText:"Loading questions.",loaded:!1,post:null,error:null,questions:null}},created:function(){try{this.questions=this.$store.getters.getQuestions,this.loaded=!0}catch(e){this.loadingText="Can't load questions. Drink a beer instead!",console.log(e)}}};const In=h()(xn,[["render",Jt]]);var Sn=In;function kn(e,t,n,r,i,s){return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("h2",null," The result of the quiz: "+Object(o["B"])(e.$route.params.correctAnswers)+" / "+Object(o["B"])(e.$route.params.allQuestions),1)])}var Dn={created:function(){this.$store.commit("unsetGameStarted")}};const Nn=h()(Dn,[["render",kn]]);var zn=Nn,Tn=[{path:"/",name:"JoinGame",component:$},{path:"/create-game",name:"CreateGame",component:K},{path:"/enter-team-name",name:"EnterTeamName",component:Ce},{path:"/waiting-for-game-start-admin",name:"WaitingForGameStartAdmin",component:Xe},{path:"/waiting-for-game-start-guest",name:"WaitingForGameStartGuest",component:at},{path:"/upload-game",name:"UploadGame",component:oe},{path:"/how-to-play",name:"HowToPlay",component:de},{path:"/leaderboard",name:"Leaderboard",component:ze},{path:"/question",name:"Question",component:Ut},{path:"/question-guest",name:"QuestionGuest",component:Sn},{path:"/show-result",name:"ShowResult",component:zn}],Qn=Object(q["a"])({history:Object(q["b"])("/"),routes:Tn}),$n=Qn,Bn=n("5502"),Gn=Object(Bn["a"])({state:{GameStarted:!1,QuizID:null,Questions:null,PIN:null,BoardID:null,TeamName:null},mutations:{setGameStarted:function(e){console.log("Setting game started"),e.GameStarted=!0},unsetGameStarted:function(e){e.GameStarted=!1},setQuizID:function(e,t){e.QuizID=t},loadQuestions:function(e,t){e.Questions=t},updatePIN:function(e,t){e.PIN=t},setBoardID:function(e,t){e.BoardID=t},setTeamName:function(e,t){e.TeamName=t}},actions:{},modules:{},getters:{getGameStartedState:function(e){return e.GameStarted},getQuizID:function(e){return e.QuizID},getQuestions:function(e){return e.Questions},getPIN:function(e){return e.PIN},getBoardID:function(e){return e.BoardID},getTeamName:function(e){return e.TeamName}}});Object(o["c"])(g).use(Gn).use($n).mount("#app")},"649b":function(e,t,n){"use strict";n("2bcf")},"68b2":function(e,t,n){"use strict";n("a78f")},"7cfd":function(e,t,n){},"9b66":function(e,t,n){"use strict";n("cab9")},a4cd:function(e,t,n){},a78f:function(e,t,n){},ad53:function(e,t,n){},c0de:function(e,t,n){"use strict";n("ad53")},c2be:function(e,t,n){"use strict";n("47dc")},c429:function(e,t,n){"use strict";n("f5a8")},cab9:function(e,t,n){},d44f:function(e,t,n){"use strict";n("a4cd")},dca0:function(e,t,n){"use strict";n("e879")},e879:function(e,t,n){},f5a8:function(e,t,n){},f840:function(e,t,n){"use strict";n("0366d")}});
//# sourceMappingURL=app.831ec616.js.map