(function(t){function e(e){for(var o,r,a=e[0],u=e[1],s=e[2],b=0,d=[];b<a.length;b++)r=a[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},c={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ea0":function(t,e,n){"use strict";n("7cfd")},1492:function(t,e,n){"use strict";n("8138")},"15b9":function(t,e,n){"use strict";n("f642")},"1d805":function(t,e,n){},3678:function(t,e,n){"use strict";n("a4b8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=Object(o["f"])("h1",null,"Kocsmahoot",-1),i={key:0,id:"nav"},r=Object(o["g"])("JOIN GAME"),a=Object(o["g"])(" | "),u=Object(o["g"])("CREATE GAME"),s=Object(o["g"])(" | "),l=Object(o["g"])("HOW TO PLAY"),b=Object(o["g"])(" | "),d=Object(o["g"])("UPLOAD GAME"),f=Object(o["g"])(" | "),p=Object(o["g"])("LEADERBOARD"),O={key:1,id:"nav"},j=Object(o["f"])("div",{id:"footer"},"© copyright 2010 Sütő Zoltán",-1);function m(t,e,n,m,h,v){var g=Object(o["z"])("router-link"),y=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["e"])("div",null,[c,this.$store.getters.getGameStartedState?(Object(o["s"])(),Object(o["e"])("div",O)):(Object(o["s"])(),Object(o["e"])("div",i,[Object(o["h"])(g,{style:{"text-decoration":"none"},to:"/"},{default:Object(o["F"])((function(){return[r]})),_:1}),a,Object(o["h"])(g,{style:{"text-decoration":"none"},to:"/create-game"},{default:Object(o["F"])((function(){return[u]})),_:1}),s,Object(o["h"])(g,{style:{"text-decoration":"none"},to:"/how-to-play"},{default:Object(o["F"])((function(){return[l]})),_:1}),b,Object(o["h"])(g,{style:{"text-decoration":"none"},to:"/upload-game"},{default:Object(o["F"])((function(){return[d]})),_:1}),f,Object(o["h"])(g,{style:{"text-decoration":"none"},to:"/leaderboard"},{default:Object(o["F"])((function(){return[p]})),_:1})])),Object(o["h"])(y),j])}var h={data:function(){return{ShowNavBar:!0}}},v=(n("8223"),n("6b0d")),g=n.n(v);const y=g()(h,[["render",m]]);var w=y,S=n("6c02"),q=function(t){return Object(o["v"])("data-v-635d3eb6"),t=t(),Object(o["t"])(),t},k={id:"enter-pin-component"},x=q((function(){return Object(o["f"])("h2",null,"Enter your PIN below:",-1)})),G={id:"pin-enter-form"},_=q((function(){return Object(o["f"])("input",{type:"text"},null,-1)})),z=Object(o["g"])("GO!"),T=Object(o["g"])("foo"),C=q((function(){return Object(o["f"])("p",null,"You can get the game-PIN from the admin of your team.",-1)}));function N(t,e,n,c,i,r){var a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",k,[x,Object(o["f"])("div",G,[Object(o["f"])("div",null,[_,Object(o["f"])("button",{onClick:e[0]||(e[0]=function(){return r.SetGameStarted&&r.SetGameStarted.apply(r,arguments)})},[Object(o["h"])(a,{style:{"text-decoration":"none"},to:"/waiting-for-game-start-guest"},{default:Object(o["F"])((function(){return[z]})),_:1})]),Object(o["h"])(a,{onClick:r.SetGameStarted,to:"/waiting-for-game-start-guest",tag:"button"},{default:Object(o["F"])((function(){return[T]})),_:1},8,["onClick"])])]),C])}var D={props:{},methods:{SetGameStarted:function(){this.$store.commit("setGameStarted")}}};n("15b9");const B=g()(D,[["render",N],["__scopeId","data-v-635d3eb6"]]);var I=B,P=(n("a4d3"),n("e01a"),function(t){return Object(o["v"])("data-v-2b7a6af8"),t=t(),Object(o["t"])(),t}),F={key:0},A={key:1},E=P((function(){return Object(o["f"])("h2",null,"Choose your Kocsmahoot!",-1)})),L={class:"list-of-quizzes"};function Q(t,e,n,c,i,r){var a=Object(o["z"])("quiz-list-item");return Object(o["s"])(),Object(o["e"])("div",null,[i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",F,[Object(o["f"])("h2",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",A,[E,Object(o["f"])("ul",L,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(i.listOfQuizzes,(function(t){return Object(o["s"])(),Object(o["e"])("li",{key:t.title},[Object(o["h"])(a,{title:t.title,description:t.description},null,8,["title","description"])])})),128))])])):Object(o["d"])("",!0)])}var R=n("1da1"),M=(n("96cf"),n("d3b7"),{class:"quiz-list-item"}),W={id:"title"},H={id:"start-button"},$=Object(o["g"])("Start this quiz"),J={key:0};function U(t,e,n,c,i,r){var a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",M,[Object(o["f"])("div",null,[Object(o["f"])("p",W,Object(o["B"])(n.title),1),Object(o["f"])("button",{id:"desc-button",onClick:e[0]||(e[0]=function(){return r.ToggleShowDescription&&r.ToggleShowDescription.apply(r,arguments)})},Object(o["B"])(i.ShowDescriptionText),1),Object(o["f"])("button",H,[Object(o["h"])(a,{style:{"text-decoration":"none"},to:{name:"EnterTeamName",params:{name:this.title}}},{default:Object(o["F"])((function(){return[$]})),_:1},8,["to"])])]),i.ShowDescription?(Object(o["s"])(),Object(o["e"])("p",J,Object(o["B"])(n.description),1)):Object(o["d"])("",!0)])}var Y={props:{title:{required:!0,type:String},description:{required:!0,type:String}},methods:{ToggleShowDescription:function(){this.ShowDescription=!this.ShowDescription,this.ShowDescription?this.ShowDescriptionText="Hide description":this.ShowDescriptionText="Show description"}},data:function(){return{ShowDescription:!1,ShowDescriptionText:"Show description"}}};n("8577");const K=g()(Y,[["render",U],["__scopeId","data-v-7ea621ae"]]);var V=K,X="",Z={props:{},components:{QuizListItem:V},data:function(){return{loadingText:"Loading available quizzes...",loaded:!1,post:null,error:null,listOfQuizzes:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(X+"/quiz-list");case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,t.listOfQuizzes=o.list,t.loaded=!0,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.loadingText="Can't load quiz list. Drink a beer instead!",console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}};n("1492");const tt=g()(Z,[["render",Q],["__scopeId","data-v-2b7a6af8"]]);var et=tt,nt=Object(o["f"])("h2",null," Upload new game ",-1),ot=[nt];function ct(t,e,n,c,i,r){return Object(o["s"])(),Object(o["e"])("div",null,ot)}var it={props:{}};const rt=g()(it,[["render",ct]]);var at=rt,ut=function(t){return Object(o["v"])("data-v-4ae15b90"),t=t(),Object(o["t"])(),t},st=ut((function(){return Object(o["f"])("h2",null,"How to play this game?",-1)})),lt=ut((function(){return Object(o["f"])("iframe",{src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)})),bt=[st,lt];function dt(t,e,n,c,i,r){return Object(o["s"])(),Object(o["e"])("div",null,bt)}var ft={props:{}};n("0ea0");const pt=g()(ft,[["render",dt],["__scopeId","data-v-4ae15b90"]]);var Ot=pt,jt=Object(o["f"])("h2",null,"Leaderboard",-1),mt=[jt];function ht(t,e,n,c,i,r){return Object(o["s"])(),Object(o["e"])("div",null,mt)}var vt={props:{}};const gt=g()(vt,[["render",ht]]);var yt=gt,wt=(n("b0c0"),function(t){return Object(o["v"])("data-v-fa8af3c2"),t=t(),Object(o["t"])(),t}),St=wt((function(){return Object(o["f"])("h2",null,"Enter the name of your team!",-1)})),qt={id:"teamname-enter-form"},kt=wt((function(){return Object(o["f"])("input",{type:"text"},null,-1)})),xt=Object(o["g"])("GO!");function Gt(t,e,n,c,i,r){var a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("h2",null,Object(o["B"])(t.$route.params.name),1),St,Object(o["f"])("div",qt,[Object(o["f"])("div",null,[kt,Object(o["f"])("button",{onClick:e[0]||(e[0]=function(){return r.SetGameStarted&&r.SetGameStarted.apply(r,arguments)})},[Object(o["h"])(a,{style:{"text-decoration":"none"},to:{name:"WaitingForGameStartAdmin"}},{default:Object(o["F"])((function(){return[xt]})),_:1})])])])])}var _t={props:{},methods:{SetGameStarted:function(){this.$store.commit("setGameStarted")}},data:function(){return{}}};n("3678");const zt=g()(_t,[["render",Gt],["__scopeId","data-v-fa8af3c2"]]);var Tt=zt,Ct=function(t){return Object(o["v"])("data-v-b327ec24"),t=t(),Object(o["t"])(),t},Nt={id:"holder"},Dt=Ct((function(){return Object(o["f"])("h2",null,"Waiting for guests to join.",-1)})),Bt={id:"spinner-holder"},It={id:"buttons-holder"},Pt={id:"start-button"},Ft=Object(o["g"])("Start");function At(t,e,n,c,i,r){var a=Object(o["z"])("half-circle-spinner"),u=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",Nt,[Dt,Object(o["f"])("h2",null,"PIN: "+Object(o["B"])(i.PIN),1),Object(o["f"])("div",Bt,[Object(o["h"])(a,{id:"spinner","animation-duration":1e3,size:120,color:"#000000"})]),Object(o["f"])("div",It,[Object(o["f"])("button",Pt,[Object(o["h"])(u,{style:{"text-decoration":"none"},to:"/question"},{default:Object(o["F"])((function(){return[Ft]})),_:1})]),Object(o["f"])("button",{onClick:e[0]||(e[0]=function(){return r.navigateBack&&r.navigateBack.apply(r,arguments)}),id:"cancel-button"},"Cancel")])])}var Et=n("4583"),Lt={components:{HalfCircleSpinner:Et["a"]},beforeRouteLeave:function(t,e,n){if(console.log(t.path),"/question"==t.path)n();else{var o=window.confirm("Do you really want to leave?");o?(n(),this.$store.commit("unsetGameStarted")):n(!1)}},methods:{navigateBack:function(){history.back()}},data:function(){return{PIN:null}}};n("e7c2");const Qt=g()(Lt,[["render",At],["__scopeId","data-v-b327ec24"]]);var Rt=Qt,Mt=function(t){return Object(o["v"])("data-v-d94398b0"),t=t(),Object(o["t"])(),t},Wt={id:"holder"},Ht=Mt((function(){return Object(o["f"])("h2",null,"Waiting for the game to start.",-1)})),$t={id:"spinner-holder"};function Jt(t,e,n,c,i,r){var a=Object(o["z"])("half-circle-spinner");return Object(o["s"])(),Object(o["e"])("div",Wt,[Ht,Object(o["f"])("h2",null,"PIN: "+Object(o["B"])(i.PIN),1),Object(o["f"])("div",$t,[Object(o["h"])(a,{id:"spinner","animation-duration":1e3,size:120,color:"#000000"})]),Object(o["f"])("button",{onClick:e[0]||(e[0]=function(){return r.navigateBack&&r.navigateBack.apply(r,arguments)})},"Cancel")])}var Ut={components:{HalfCircleSpinner:Et["a"]},beforeRouteLeave:function(t,e,n){var o=window.confirm("Do you really want to leave?");o?(n(),this.$store.commit("unsetGameStarted")):n(!1)},methods:{navigateBack:function(){history.back()}},data:function(){return{PIN:null}}};n("9115");const Yt=g()(Ut,[["render",Jt],["__scopeId","data-v-d94398b0"]]);var Kt=Yt,Vt={key:0},Xt={key:1};function Zt(t,e,n,c,i,r){var a=Object(o["z"])("question-item");return Object(o["s"])(),Object(o["e"])("div",null,[i.loaded?Object(o["d"])("",!0):(Object(o["s"])(),Object(o["e"])("div",Vt,[Object(o["f"])("h2",null,Object(o["B"])(this.loadingText),1)])),i.loaded?(Object(o["s"])(),Object(o["e"])("div",Xt,[Object(o["h"])(a,{questions:this.questions},null,8,["questions"])])):Object(o["d"])("",!0)])}var te=function(t){return Object(o["v"])("data-v-148bc5b0"),t=t(),Object(o["t"])(),t},ee={key:0,class:"choice-container"},ne={class:"option-container",for:"option1"},oe={class:"option-label"},ce={class:"option-text"},ie={class:"option-container"},re={class:"option-label"},ae={class:"option-text"},ue={class:"option-container"},se={class:"option-label"},le={class:"option-text"},be={class:"option-container"},de={class:"option-label"},fe={class:"option-text"},pe={key:1,class:"tf-container"},Oe={class:"option-container",for:"optionT"},je={class:"option-label"},me=te((function(){return Object(o["f"])("span",{class:"option-text"},"True",-1)})),he={class:"option-container"},ve={class:"option-label"},ge=te((function(){return Object(o["f"])("span",{class:"option-text"},"False",-1)})),ye={key:2,class:"numeric-container"},we={class:"option-container"},Se={id:"submit-button-holder"};function qe(t,e,n,c,i,r){return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("div",null,[Object(o["f"])("h2",null,Object(o["B"])(n.questions[i.questionNumber]["question"]),1)]),"choice"===this.questions[this.questionNumber]["type"]?(Object(o["s"])(),Object(o["e"])("div",ee,[Object(o["f"])("div",ne,[Object(o["f"])("label",oe,[Object(o["f"])("input",{type:"radio",id:"option1",name:"option",value:"1",onClick:e[0]||(e[0]=function(t){return r.update(1)})}),Object(o["f"])("span",ce,Object(o["B"])(n.questions[i.questionNumber]["answers"][0]),1)])]),Object(o["f"])("div",ie,[Object(o["f"])("label",re,[Object(o["f"])("input",{type:"radio",id:"option2",name:"option",value:"2",onClick:e[1]||(e[1]=function(t){return r.update(2)})}),Object(o["f"])("span",ae,Object(o["B"])(n.questions[i.questionNumber]["answers"][1]),1)])]),Object(o["f"])("div",ue,[Object(o["f"])("label",se,[Object(o["f"])("input",{type:"radio",id:"option3",name:"option",value:"3",onClick:e[2]||(e[2]=function(t){return r.update(3)})}),Object(o["f"])("span",le,Object(o["B"])(n.questions[i.questionNumber]["answers"][2]),1)])]),Object(o["f"])("div",be,[Object(o["f"])("label",de,[Object(o["f"])("input",{type:"radio",id:"option4",name:"option",value:"4",onClick:e[3]||(e[3]=function(t){return r.update(4)})}),Object(o["f"])("span",fe,Object(o["B"])(n.questions[i.questionNumber]["answers"][3]),1)])])])):Object(o["d"])("",!0),"tf"===this.questions[this.questionNumber]["type"]?(Object(o["s"])(),Object(o["e"])("div",pe,[Object(o["f"])("div",Oe,[Object(o["f"])("label",je,[Object(o["f"])("input",{type:"radio",id:"optionT",name:"option",value:"true",onClick:e[4]||(e[4]=function(t){return r.update(!0)})}),me])]),Object(o["f"])("div",he,[Object(o["f"])("label",ve,[Object(o["f"])("input",{type:"radio",id:"optionF",name:"option",value:"false",onClick:e[5]||(e[5]=function(t){return r.update(!1)})}),ge])])])):Object(o["d"])("",!0),"numeric"===this.questions[this.questionNumber]["type"]?(Object(o["s"])(),Object(o["e"])("div",ye,[Object(o["f"])("div",we,[Object(o["G"])(Object(o["f"])("input",{type:"number",id:"numeric-ans","onUpdate:modelValue":e[6]||(e[6]=function(t){return i.numericAns=t})},null,512),[[o["D"],i.numericAns,void 0,{lazy:!0,trim:!0}]])])])):Object(o["d"])("",!0),Object(o["f"])("div",Se,[Object(o["f"])("button",{id:"submit-button",onClick:e[7]||(e[7]=function(t){return r.submit()})},"Submit")])])}var ke={props:{questions:{required:!0}},data:function(){return{answer:0,numericAns:0,questionNumber:0}},methods:{update:function(t){this.answer=t},submit:function(){"numeric"===this.questions[this.questionNumber]["type"]?console.log(this.numericAns):console.log(this.answer),this.questionNumber+=1}}};n("e2f0");const xe=g()(ke,[["render",qe],["__scopeId","data-v-148bc5b0"]]);var Ge=xe,_e="",ze={components:{QuestionItem:Ge},data:function(){return{loadingText:"Loading questions",loaded:!1,post:null,error:null,questions:null}},created:function(){console.log("Fetching questions..."),this.fetchQuestions()},methods:{fetchQuestions:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(_e+"/quiz-questions");case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,t.questions=o.list,console.log(t.questions),console.log(t.questions[0]["question"]),t.loaded=!0,console.log("loaded questions"),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),t.loadingText="Can't load questions. Drink a beer instead!",console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}};const Te=g()(ze,[["render",Zt]]);var Ce=Te,Ne=[{path:"/",name:"JoinGame",component:I},{path:"/create-game",name:"CreateGame",component:et},{path:"/enter-team-name/:name",name:"EnterTeamName",component:Tt},{path:"/waiting-for-game-start-admin",name:"WaitingForGameStartAdmin",component:Rt},{path:"/waiting-for-game-start-guest",name:"WaitingForGameStartGuest",component:Kt},{path:"/upload-game",name:"UploadGame",component:at},{path:"/how-to-play",name:"HowToPlay",component:Ot},{path:"/leaderboard",name:"Leaderboard",component:yt},{path:"/question",name:"Question",component:Ce}],De=Object(S["a"])({history:Object(S["b"])("/"),routes:Ne}),Be=De,Ie=n("5502"),Pe=Object(Ie["a"])({state:{GameStarted:!1},mutations:{setGameStarted:function(t){console.log("Setting game started"),t.GameStarted=!0},unsetGameStarted:function(t){t.GameStarted=!1}},actions:{},modules:{},getters:{getGameStartedState:function(t){return t.GameStarted}}});Object(o["c"])(w).use(Pe).use(Be).mount("#app")},"7cfd":function(t,e,n){},8138:function(t,e,n){},8223:function(t,e,n){"use strict";n("f084")},8577:function(t,e,n){"use strict";n("df78")},9115:function(t,e,n){"use strict";n("c1be")},a4b8:function(t,e,n){},c1be:function(t,e,n){},c9da:function(t,e,n){},df78:function(t,e,n){},e2f0:function(t,e,n){"use strict";n("c9da")},e7c2:function(t,e,n){"use strict";n("1d805")},f084:function(t,e,n){},f642:function(t,e,n){}});
//# sourceMappingURL=app.694c83bb.js.map