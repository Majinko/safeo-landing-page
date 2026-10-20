import{A as En,An as Zx,C as D5,D as Db,Di as vs,Ei as vl,En as Yt,Er as kD,Fr as li,Hn as bs,In as at,J,Jn as de,Jr as oZ,K as In,Kn as ce,Qn as el,Qr as om,Ri as yb,S as Cs,Sr as jK,U as I,Vn as bl,Vt as Qx,Wr as nm,Yn as dx,Yt as Ss,_r as ir,br as j,cn as We,er,gr as ie,gt as M,hi as ti,j as F,jt as Px,ki as wD,li as rm,lt as Kr,nr as f,ot as KR,p as B,pi as sh,pt as LR,sn as WD,sr as g,vn as Xp,xi as v,xr as j9,yi as uh,yr as ix,yt as Ms,z as He}from"./chunk-CriTSX_T.js";import{K as hr,at as ul,b as Nt,f as Je,l as Ie,lt as yn,nt as td,x as On}from"./chunk-DnzjziX7.js";import{D as i}from"./main-P4VQ4J6V.js";var Pt=(()=>{class e{transform(t){return td[t]}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵpipe=er({name:`env`,type:e,pure:!0})}}return e})();var Ct=Math.pow(2,31)-1;var b=class{_overlayRef;instance;containerInstance;_afterDismissed=new j;_afterOpened=new j;_onAction=new j;_durationTimeoutId;_dismissedByAction=!1;constructor(g,t){this._overlayRef=t,this.containerInstance=g,g._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(g){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(g,Ct))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var S=new v(`MatSnackBarData`);var _=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Mt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=de({type:e,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return e})();var wt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=de({type:e,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return e})();var Dt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=de({type:e,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return e})();var Et=(()=>{class e{snackBarRef=f(b);data=f(S);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){function t(n,a){if(n&1){let i=ix();el(0,`div`,1)(1,`button`,2),vl(`click`,function(){yb(i);let o=dx();return Db(o.action())}),Px(2),Xp()()}if(n&2){let i=dx();vs(2),om(` `,i.data.action,` `)}}return We({type:e,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(a,i){a&1&&(el(0,`div`,0),Px(1),Xp(),Ss(2,t,3,1,`div`,1)),a&2&&(vs(),om(` `,i.data.message,`
`),vs(),Cs(i.hasAction?2:-1))},dependencies:[jK,Mt,wt,Dt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return e})();var O=`_mat-snack-bar-enter`;var N=`_mat-snack-bar-exit`;var Tt=(()=>{class e extends Nt{_ngZone=f(B);_elementRef=f(ie);_changeDetectorRef=f(Kr);_platform=f(He);_animationsDisabled=li();snackBarConfig=f(_);_document=f(F);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=f(J);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new j;_onExit=new j;_onEnter=new j;_animationState=`void`;_live;_label;_role;_liveElementId=f(uh).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===N?this._completeExit():t===O&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?bs(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(O)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(O)},200)))}exit(){return this._destroyed?I(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?bs(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(N)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(N),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(r=>t.classList.add(r)):t.classList.add(n)),this._exposeToModals();let a=this._label.nativeElement,i=`mdc-snackbar__label`;a.classList.toggle(i,!a.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<n.length;a++){let i=n[a],r=i.getAttribute(`aria-owns`);this._trackedModals.add(i),r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let a=n.replace(this._liveElementId,``).trim();a.length>0?t.setAttribute(`aria-owns`,a):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),a=t.querySelector(`[aria-live]`);if(n&&a){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(i=document.activeElement),n.removeAttribute(`aria-hidden`),a.appendChild(n),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`label`];function n(a,i){}return We({type:e,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,r){if(i&1&&kD(ul,7)(t,7),i&2){let o;nm(o=rm())&&(r._portalOutlet=o.first),nm(o=rm())&&(r._label=o.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,r){i&1&&vl(`animationend`,function(c){return r.onAnimationEnd(c.animationName)})(`animationcancel`,function(c){return r.onAnimationEnd(c.animationName)}),i&2&&Yt(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[ti],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&(el(0,`div`,1)(1,`div`,2,0)(3,`div`,3),wD(4,n,0,0,`ng-template`,4),Xp(),bl(5,`div`),Xp()()),i&2&&(vs(5),In(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[ul],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return e})();var Rt=new v(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new _});var St=(()=>{class e{_live=f(LR);_injector=f(J);_breakpointObserver=f(sh);_parentSnackBar=f(e,{optional:!0,skipSelf:!0});_defaultConfig=f(Rt);_animationsDisabled=li();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Et;snackBarContainerComponent=Tt;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,a){let i=g(g({},this._defaultConfig),a);return i.data={message:t,action:n},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let a=n&&n.viewContainerRef&&n.viewContainerRef.injector,i=J.create({parent:a||this._injector,providers:[{provide:_,useValue:n}]}),r=new yn(this.snackBarContainerComponent,n.viewContainerRef,i),o=t.attach(r);return o.instance.snackBarConfig=n,o.instance}_attach(t,n){let a=g(g(g({},new _),this._defaultConfig),n),i=this._createOverlay(a),r=this._attachSnackBarContainer(i,a),o=new b(r,i);if(t instanceof En){let c=new Ie(t,null,{$implicit:a.data,snackBarRef:o});o.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(a,o),At=new yn(t,void 0,c);o.instance=r.attachComponentPortal(At).instance}return this._breakpointObserver.observe(j9.HandsetPortrait).pipe(at(i.detachments())).subscribe(c=>{i.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),a.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(o,a),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new Je;n.direction=t.direction;let a=hr(this._injector),i=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!i||t.horizontalPosition===`end`&&i,o=!r&&t.horizontalPosition!==`center`;return r?a.left(`0`):o?a.right(`0`):a.centerHorizontally(),t.verticalPosition===`top`?a.top(`0`):a.bottom(`0`),n.positionStrategy=a,n.disableAnimations=this._animationsDisabled,On(this._injector,n)}_createInjector(t,n){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector;return J.create({parent:a||this._injector,providers:[{provide:b,useValue:n},{provide:S,useValue:t.data}]})}static ɵfac=function(n){return new(n||e)};static ɵprov=M({token:e,factory:e.ɵfac})}return e})();var It={info:`info`,success:`check_circle`,error:`error`};var Ot=(()=>{class e{constructor(){this.data=f(S),this.ref=f(b),this.icon=It[this.data.type]}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=We({type:e,selectors:[[`app-snackbar-toast`]],decls:9,vars:7,consts:[[`role`,`status`,1,`toast`],[`aria-hidden`,`true`,1,`toast-icon`],[1,`toast-message`],[`mat-icon-button`,``,`type`,`button`,1,`toast-close`,3,`click`]],template:function(n,a){n&1&&(el(0,`div`,0)(1,`mat-icon`,1),Px(2),Xp(),el(3,`span`,2),Px(4),Xp(),el(5,`button`,3),Zx(6,`translate`),vl(`click`,function(){return a.ref.dismiss()}),el(7,`mat-icon`),Px(8,`close`),Xp()()()),n&2&&(Ms(`toast toast-`+a.data.type),vs(2),WD(a.icon),vs(2),WD(a.data.message),vs(),In(`aria-label`,Qx(6,5,`CLOSE`)))},dependencies:[oZ,KR,D5],encapsulation:2})}}return e})();var vn=(()=>{class e{constructor(){this._snackBarService=f(i),this._snackBar=f(St),this._destroyRef=f(ce)}ngOnInit(){this._snackBarService.appMessage.pipe(ir(this._destroyRef)).subscribe(t=>{this._snackBar.openFromComponent(Ot,{data:t,duration:t.type===`error`?8e3:5e3,panelClass:[`app-toast-panel`,`app-toast-${t.type}`],horizontalPosition:`center`,verticalPosition:`bottom`})})}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=We({type:e,selectors:[[`app-snackbar`]],decls:0,vars:0,template:function(n,a){},encapsulation:2})}}return e})();export{vn as n,Pt as t};