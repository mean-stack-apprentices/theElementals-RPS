"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2],{6424:(V,v,r)=>{r.r(v),r.d(v,{GameModule:()=>$});var p=r(8583),d=r(3735);function y(n,s,t,o,i,a,l){try{var u=n[a](l),g=u.value}catch(m){return void t(m)}u.done?s(g):Promise.resolve(g).then(o,i)}function h(n){return function(){var s=this,t=arguments;return new Promise(function(o,i){var a=n.apply(s,t);function l(g){y(a,o,i,l,u,"next",g)}function u(g){y(a,o,i,l,u,"throw",g)}l(void 0)})}}var c=r(7238),S=r(7865),f=r(9456),e=r(7716),M=r(6767),C=r(4220);let b=(()=>{class n{constructor(){this.selctions=["rock","paper","scissors"]}computerSelection(){const t=Math.floor(3*Math.random());return console.log(this.selctions[t]),this.selctions[t]}findRoundWinner(t,o){if(t.optionSelction&&o.optionSelction){const i=t.optionSelction,a=o.optionSelction;return"rock"===i&&"rock"===a?"draw":"rock"===i&&"paper"===a?"pRight":"rock"===i&&"scissors"===a||"paper"===i&&"rock"===a?"pLeft":"paper"===i&&"paper"===a?"draw":"paper"===i&&"scissors"===a||"scissors"===i&&"rock"===a?"pRight":"scissors"===i&&"paper"===a?"pLeft":"scissors"===i&&"scissors"===a?"draw":(console.log("something went very wrong lol"),"something went very wrong lol")}return console.log("something went very wrong lol"),"something went very wrong lol"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=r(9565),_=r(5447);let w=(()=>{class n{constructor(t){this.sounds=t,this.volumeLevel=1,this.muteOption="Mute"}volumeUp(){this.sounds.volumeUp(),this.volumeLevel+=1}volumeDown(){this.sounds.volumeDown(),this.volumeLevel-=1}volumeMute(){this.sounds.volumeMute(),this.muteOption=this.sounds.isMuted?"Unmute":"Mute"}playSelectSound(){this.sounds.playSelectSound()}playHoverSound(){this.sounds.playHoverSound()}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-volume-control"]],decls:9,vars:2,consts:[[1,"volume-control-container"],[3,"click","mouseover"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return o.volumeDown(),o.playSelectSound()})("mouseover",function(){return o.playHoverSound()}),e._uU(4,"Volume Down"),e.qZA(),e.TgZ(5,"button",1),e.NdJ("click",function(){return o.volumeUp(),o.playSelectSound()})("mouseover",function(){return o.playHoverSound()}),e._uU(6,"Volume Up"),e.qZA(),e.TgZ(7,"button",1),e.NdJ("click",function(){return o.volumeMute(),o.playSelectSound()})("mouseover",function(){return o.playHoverSound()}),e._uU(8),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.hij("Volume: ",o.volumeLevel,""),e.xp6(6),e.Oqu(o.muteOption))},styles:[".volume-control-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:30px;border-radius:15px;border:solid 1px black;font-family:inherit;font-size:20px;padding:0 10px;text-align:center;margin-left:12px;background-color:#fff}button[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.2)}button[_ngcontent-%COMP%]:active{transform:scale(1.1)}p[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:20px;height:30px;width:100px;background:black;color:#fff;border-radius:15px;border:solid 1px black}"]}),n})(),T=(()=>{class n{constructor(t){this.sounds=t,this.songName=""}ngOnInit(){this.songName=this.sounds.songTitle}nextFightSong(){this.sounds.nextFightSong(),this.songName=this.sounds.songTitle}previousFightSong(){this.sounds.previousFightSong(),this.songName=this.sounds.songTitle}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-music-selector"]],decls:6,vars:1,consts:[[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return o.previousFightSong()}),e._uU(3,"Previous"),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return o.nextFightSong()}),e._uU(5,"Next"),e.qZA()),2&t&&(e.xp6(1),e.hij("Song: ",o.songName,""))},styles:["p[_ngcontent-%COMP%]{font-size:20px;background-color:#fff;width:200px}"]}),n})();const k=function(n){return{"background-color":n}};function A(n,s){if(1&n&&(e.ynx(0),e._UZ(1,"div",20),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngStyle",e.VKq(3,k,t.healthBarColor(e.lcZ(2,1,t.pLeft$).health)))}}function R(n,s){if(1&n&&(e.ynx(0),e._UZ(1,"div",20),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngStyle",e.VKq(3,k,t.healthBarColor(e.lcZ(2,1,t.pRight$).health)))}}function O(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.makeReady("pLeft"),i.playMoveSelect()}),e._uU(1,"Ready For War?"),e.qZA()}}function P(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.select("pLeft","rock"),i.playMoveSelect()}),e._uU(2,"Rock"),e.qZA(),e.TgZ(3,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.select("pLeft","paper"),i.playMoveSelect()}),e._uU(4,"Paper"),e.qZA(),e.TgZ(5,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.select("pLeft","scissors"),i.playMoveSelect()}),e._uU(6,"Scissors"),e.qZA(),e.qZA()}}function I(n,s){if(1&n&&(e.TgZ(0,"div",21),e.YNc(1,O,2,0,"button",22),e.YNc(2,P,7,0,"div",23),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.gameState.isStarted),e.xp6(1),e.Q6J("ngIf",t.gameState.isStarted)}}function L(n,s){1&n&&(e.TgZ(0,"div",21),e._UZ(1,"img",25),e.qZA())}function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.makeReady("pRight"),i.playMoveSelect()}),e._uU(1,"Ready For War?"),e.qZA()}}function G(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.select("pRight","rock"),i.playMoveSelect()}),e._uU(2,"Rock"),e.qZA(),e.TgZ(3,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.select("pRight","paper"),i.playMoveSelect()}),e._uU(4,"Paper"),e.qZA(),e.TgZ(5,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.select("pRight","scissors"),i.playMoveSelect()}),e._uU(6,"Scissors"),e.qZA(),e.qZA()}}function N(n,s){if(1&n&&(e.TgZ(0,"div",26),e.YNc(1,U,2,0,"button",22),e.YNc(2,G,7,0,"div",23),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.gameState.isStarted),e.xp6(1),e.Q6J("ngIf",t.gameState.isStarted)}}function F(n,s){1&n&&(e.TgZ(0,"div",26),e._UZ(1,"img",25),e.qZA())}const Z=function(){return[]};let q=(()=>{class n{constructor(t,o,i,a,l,u){this.socketService=t,this.store=o,this.route=i,this.gameService=a,this.navigation=l,this.sounds=u,this.pLeft$=null,this.pRight$=null,this.loggedInUsername=void 0,this.fightImgShowing=!1,this.drawImgString=null,this.drawImgShowing=!1,this.fatalityImgShowing=!1,this.vsComputer=!1,this.backgroundString=this.getBackground(),this.store.select(S.P4).subscribe(m=>this.loggedInUsername=null==m?void 0:m.username),this.store.select(f.Mi).subscribe(m=>this.gameState=Object.assign({},m)),console.log(this.gameState),this.pLeft$=this.store.select(f.FE),this.pRight$=this.store.select(f.fK)}ngOnInit(){this.sounds.stopMenuMusic(),this.sounds.randomizeSong(),this.sounds.playFightMusic()}ngOnDestroy(){this.sounds.stopFightMusic(),this.sounds.resetHitSoundVolume(),this.sounds.resetVolumeMute(),this.sounds.resetDrawSoundVolume(),this.sounds.resetGameOverMusicVolume(),this.sounds.resetGameEndMusicVolume()}healthBarColor(t){switch(t){case 3:return"green";case 2:return"yellow";default:return"red"}}getBackground(){const t=["Street-Fighter-background-Street-fighter-characters-.jpg","Mm6kmlz.gif","Blanka-Stage-Background-Bitmap-GIF-Without-Characters-from-Street-Fighter-Alpha-3-Arcade.gif","animated-gifs-of-fighting-game-backgrounds-51.gif","80f9d4af066c7c4245b80ffd41975f29.gif"];return t[Math.floor(Math.random()*t.length)]}getDrawImg(){const t=["knot0.png","tie0.png","tie1.png","tie2.gif"],o=Math.floor(Math.random()*t.length);console.log(t[o]),this.drawImgString=t[o]}playFight(){this.fightImgShowing=!0;let t=new Audio;t.src="../assets/sounds/321913__jrc-yt__fight.mp3",t.autoplay=!0,t.muted=!1,t.load(),t.play(),console.log("sound??")}checkPlayersReady(){if(!this.gameState.isStarted&&this.gameState.pLeft.ready&&this.gameState.pRight.ready)this.vsComputer?this.gameState.isStarted=!0:this.socketService.setIsStarted(this.gameState.gamePin,!0),this.playFight(),setTimeout(()=>{this.fightImgShowing=!1,this.makeAllNotReady()},2e3);else if(this.gameState.isStarted&&this.gameState.pLeft.ready&&this.gameState.pRight.ready)switch(this.gameService.findRoundWinner(this.gameState.pLeft,this.gameState.pRight)){case"draw":this.getDrawImg(),this.drawImgShowing=!0,console.log("twas a draw"),setTimeout(()=>{this.drawImgShowing=!1,this.makeAllNotReady()},2e3),this.sounds.playDrawSound();break;case"pLeft":this.vsComputer?this.gameState.pRight.loseHealth():this.socketService.decreasePlayersHealth(this.gameState.gamePin,"pRight"),0===this.gameState.pRight.health?this.gameOver(this.gameState.pLeft):setTimeout(()=>{this.makeAllNotReady()},2e3),this.sounds.playHitSound();break;case"pRight":this.vsComputer?this.gameState.pLeft.loseHealth():this.socketService.decreasePlayersHealth(this.gameState.gamePin,"pLeft"),0===this.gameState.pLeft.health?this.gameOver(this.gameState.pRight):setTimeout(()=>{this.makeAllNotReady()},2e3),this.sounds.playHitSound()}}makeReady(t){var o=this;return h(function*(){o.vsComputer?(o.gameState[t].makeReady(),o.checkPlayersReady()):(yield o.socketService.setSideToReady(o.gameState.gamePin,t),setTimeout(()=>{o.checkPlayersReady()},2e3))})()}makeNotReady(t){var o=this;return h(function*(){yield o.socketService.setSideToNotReady(o.gameState.gamePin,t)})()}makeAllNotReady(){this.vsComputer?(this.gameState.pLeft.ready=!1,this.gameState.pRight.ready=!1,setTimeout(()=>{this.select("pRight",this.gameService.computerSelection())},2e3*Math.random()+2e3)):(this.makeNotReady("pLeft"),this.makeNotReady("pRight"))}select(t,o){var i=this;return h(function*(){i.vsComputer?(i.gameState[t].optionSelction=o,i.gameState[t].ready=!0,i.checkPlayersReady()):(yield i.socketService.setPlayersSelection(i.gameState.gamePin,t,o),i.checkPlayersReady())})()}gameOver(t){this.fatalityImgShowing=!0,this.sounds.stopFightMusic(),this.sounds.playGameOverMusic(),setTimeout(()=>{this.sounds.playGameEndMusic()},3e3),console.log(`${t.username} Wins!!`)}playMoveSelect(){this.sounds.playMoveSelectSound()}back(){this.navigation.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(M.$),e.Y36(C.yh),e.Y36(d.gz),e.Y36(b),e.Y36(x.f),e.Y36(_.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-game"]],decls:43,vars:39,consts:[["id","background","alt","image",3,"src"],["id","popUpImgContainer"],["id","fightImg","src","assets/images/178-1784143_photo-street-fighter-fight-png.png","alt",""],["id","drawImg","alt","",3,"src"],["id","fatalityImg","src","assets/images/fatality.gif","alt",""],["id","pLeft"],["id","pLeftInfo"],["src","","alt",""],[1,"username"],[1,"healthBar","left"],[4,"ngFor","ngForOf"],["id","pRight",1,""],["id","pRightInfo",1,"right"],[1,"healthBar","right"],["id","wrapper"],["id","inputAreaContainer"],["class","inputArea",4,"ngIf"],["class","inputArea right",4,"ngIf"],[1,"options"],["id","back",3,"click"],[1,"healthCell",3,"ngStyle"],[1,"inputArea"],[3,"click",4,"ngIf"],[4,"ngIf"],[3,"click"],["src","assets/images/b4d657e7ef262b88eb5f7ac021edda87.gif","alt","",1,"waitingRing"],[1,"inputArea","right"]],template:function(t,o){1&t&&(e._UZ(0,"img",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e._UZ(3,"img",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"nav"),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e._UZ(8,"img",7),e.TgZ(9,"span",8),e._uU(10),e.ALo(11,"async"),e.qZA(),e.qZA(),e.TgZ(12,"div",9),e.YNc(13,A,3,5,"ng-container",10),e.ALo(14,"async"),e.qZA(),e.qZA(),e.TgZ(15,"div",11),e.TgZ(16,"div",12),e._UZ(17,"img",7),e.TgZ(18,"span",8),e._uU(19),e.ALo(20,"async"),e.qZA(),e.qZA(),e.TgZ(21,"div",13),e.YNc(22,R,3,5,"ng-container",10),e.ALo(23,"async"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",14),e.TgZ(25,"div",15),e.YNc(26,I,3,2,"div",16),e.ALo(27,"async"),e.ALo(28,"async"),e.YNc(29,L,2,0,"div",16),e.ALo(30,"async"),e.ALo(31,"async"),e.YNc(32,N,3,2,"div",17),e.ALo(33,"async"),e.ALo(34,"async"),e.YNc(35,F,2,0,"div",17),e.ALo(36,"async"),e.ALo(37,"async"),e.qZA(),e.qZA(),e.TgZ(38,"div",18),e.TgZ(39,"button",19),e.NdJ("click",function(){return o.back()}),e._uU(40,"Back"),e.qZA(),e._UZ(41,"app-volume-control"),e._UZ(42,"app-music-selector"),e.qZA()),2&t&&(e.MGl("src","assets/images/",o.backgroundString,"",e.LSH),e.xp6(2),e.Q6J("@inOut",o.fightImgShowing?"in":"out"),e.xp6(1),e.MGl("src","assets/images/",o.drawImgString,"",e.LSH),e.Q6J("@inOut",o.drawImgShowing?"in":"out"),e.xp6(1),e.Q6J("@inOut",o.fatalityImgShowing?"in":"out"),e.xp6(6),e.Oqu(e.lcZ(11,13,o.pLeft$).username),e.xp6(3),e.Q6J("ngForOf",e.DdM(37,Z).constructor(e.lcZ(14,15,o.pLeft$).health)),e.xp6(6),e.Oqu(e.lcZ(20,17,o.pRight$).username),e.xp6(3),e.Q6J("ngForOf",e.DdM(38,Z).constructor(e.lcZ(23,19,o.pRight$).health)),e.xp6(4),e.Q6J("ngIf",!e.lcZ(27,21,o.pLeft$).ready&&e.lcZ(28,23,o.pLeft$).username===o.gameState.activePlayerUsername),e.xp6(3),e.Q6J("ngIf",!e.lcZ(30,25,o.pLeft$).ready&&e.lcZ(31,27,o.pLeft$).username!==o.gameState.activePlayerUsername),e.xp6(3),e.Q6J("ngIf",!e.lcZ(33,29,o.pRight$).ready&&e.lcZ(34,31,o.pRight$).username===o.gameState.activePlayerUsername),e.xp6(3),e.Q6J("ngIf",!e.lcZ(36,33,o.pRight$).ready&&e.lcZ(37,35,o.pRight$).username!==o.gameState.activePlayerUsername))},directives:[p.sg,p.O5,w,T,p.PC],pipes:[p.Ov],styles:["#background[_ngcontent-%COMP%]{width:100%;height:100%;opacity:60%;position:absolute;z-index:-1000}#popUpImgContainer[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;display:flex;justify-content:center;align-items:center;z-index:-500}#fightImg[_ngcontent-%COMP%]{height:45%}#drawImg[_ngcontent-%COMP%]{height:45%}#fatalityImg[_ngcontent-%COMP%]{height:100%}nav[_ngcontent-%COMP%]{margin:5px 15px;display:flex;justify-content:space-between}.right[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;margin-left:auto}.username[_ngcontent-%COMP%]{font-size:25px;color:#000;letter-spacing:.03em}.healthBar[_ngcontent-%COMP%]{display:flex;flex-direction:row}.healthCell[_ngcontent-%COMP%]{height:10px;width:80px;margin:0 2px;border:thin solid black;background-color:green}#wrapper[_ngcontent-%COMP%]{height:80%}#inputAreaContainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.inputArea[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:50%;border:2px solid black;height:inherit;background-color:#0000008a}.inputArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:6vw;border-radius:10px;font-family:inherit;font-size:5vw;padding:0 10px;text-align:center;margin-bottom:15px;background-color:#fff}.inputArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.2)}.inputArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:scale(1.1)}.inputArea[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:35%;justify-content:space-between}.inputArea[_ngcontent-%COMP%]   .waitingRing[_ngcontent-%COMP%]{height:30%}#back[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;height:30px;border-radius:15px;border:solid 1px black;font-family:inherit;font-size:20px;padding:0 10px;text-align:center;margin-right:12px;margin-left:5px;background-color:#fff}#back[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.2)}#back[_ngcontent-%COMP%]:active{transform:scale(1.1)}.options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:75%;margin-top:5px}"],data:{animation:[(0,c.X$)("inOut",[(0,c.SB)("in",(0,c.oB)({display:"block"})),(0,c.SB)("out",(0,c.oB)({height:"0px"})),(0,c.eR)("* => in",[(0,c.jt)("1s")]),(0,c.eR)("in => out",[(0,c.jt)("0.3s")])])]}}),n})();var J=r(5257);const B=[{path:"",component:q,resolve:{userState:(()=>{class n{constructor(t){this.store=t}resolve(t,o){return this.store.select(S.qL).pipe((0,J.q)(1))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(B)],d.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,H]]}),n})()}}]);