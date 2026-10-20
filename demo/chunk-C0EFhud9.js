import{$t as To,A as En,Ai as wm,An as Zx,C as D5,Ci as vR,D as Db,Di as vs,Dn as ZD,Ei as vl,En as Yt,Er as kD,F as GD,Fn as aK,Fr as li,Hn as bs,I as Gr,In as at,J,Jn as de,Jr as oZ,K as In,Kt as Rn,L as Gx,Lt as Qo,M as Fi,Ni as xn$1,Nn as _w,Nt as QN,Ot,Pr as lh,Pt as QR,Qn as el,Qr as om,Ri as yb,Rr as lw,S as Cs,Sn as Xx,Sr as jK,Tr as ju,U as I,Vn as bl,Vt as Qx,W as ID,Wr as nm,Wt as Re,X as JN,Yn as dx,Yt as Ss,Zt as TD,_ as Bx,a as $n,an as Vr,at as KD,br as j,cn as We,dr as he,ei as pt,en as UD,fn as XD,gn as Xm,gr as ie,hi as ti,hr as iZ,ht as Lt,it as K,ji as x,jn as _6,jt as Px,ki as wD,kn as Zt,kr as ke,li as rm,ln as Wl,lr as ge$1,lt as Kr,mn as XN,mt as Li,n as $M,nr as f,on as Vx,or as fo,ot as KR,p as B,pr as hx,qt as S,r as $h,rn as VM,sn as WD,t as $,tn as UK,v as C,vn as Xp,x as Co,xi as v,y as CD,yi as uh,yr as ix,yt as Ms,z as He,zi as yl,zn as be}from"./chunk-CriTSX_T.js";import{B as en,C as So,F as ca,I as cd,N as ai,O as Xi,Q as pn$1,R as cl,T as Ve,V as fa$1,X as oa,at as ul,et as ra,h as Li$1,j as _o,l as Ie,nt as td,ot as uo,r as Ao,tt as sa}from"./chunk-DnzjziX7.js";import{a as je,c as ze,i as Ve$1,n as Be,o as tt,r as Re$1,s as w,t as $t}from"./chunk-CH4pb-dP.js";import{D as i,a as He$1,m as Ua$1,u as Qi}from"./main-WSCU26CW.js";import{d as oi,p as ti$1,t as m}from"./chunk-DVXPX7lV.js";import"./chunk-CAVnsue_.js";import"./chunk-CmUAkaeT.js";import{a as gt,i as ft,n as Et}from"./chunk-DC-ea5ce.js";import{c as an,f as nn$1,h as tn,m as rn$1,s as Za$1}from"./chunk-C7V7nXYP.js";import"./chunk-BtK-bf3f.js";import"./chunk-BgnAL1mn.js";import{r as q,t as Y}from"./chunk-C-SvQPEO.js";import{r as nt}from"./chunk-DTfNhPQm.js";import{t as Ii}from"./chunk-BxgJXbdq.js";var Ha=new v(`MatTabContent`);var ja=(()=>{class a{template=f(En);static ɵfac=function(e){return new(e||a)};static ɵdir=de({type:a,selectors:[[``,`matTabContent`,``]],features:[XD([{provide:Ha,useExisting:a}])]})}return a})();var za=new v(`MatTabLabel`);var ya=new v(`MAT_TAB`);var ye=(()=>{class a extends cl{_closestTab=f(ya,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵdir=de({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[XD([{provide:za,useExisting:a}]),ti]})}return a})();var xa=new v(`MAT_TAB_GROUP`);var xe=(()=>{class a{_viewContainerRef=f(Ot);_closestTabGroup=f(xa,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new j;position=null;origin=null;isActive=!1;constructor(){f(xn$1).load(_w)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ie(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,s){n&1&&Lt(0)}return We({type:a,selectors:[[`mat-tab`]],contentQueries:function(s,b,u){if(s&1&&yl(u,ye,5)(u,ja,7,En),s&2){let M;nm(M=rm())&&(b.templateLabel=M.first),nm(M=rm())&&(b._explicitContent=M.first)}},viewQuery:function(s,b){if(s&1&&kD(En,7),s&2){let u;nm(u=rm())&&(b._implicitContent=u.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(s,b){s&2&&In(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Re],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[XD([{provide:ya,useExisting:a}]),Zt],ngContentSelectors:t,decls:1,vars:0,template:function(s,b){s&1&&(Gr(),ID(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var ue=`mdc-tab-indicator--active`;var fa=`mdc-tab-indicator--no-transition`;var fe=class{_items;_currentItem;constructor(h){this._items=h}hide(){this._items.forEach(h=>h.deactivateInkBar()),this._currentItem=void 0}alignToElement(h){let t=this._items.find(n=>n.elementRef.nativeElement===h),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Va=(()=>{class a{_elementRef=f(ie);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ue);return}let n=e.getBoundingClientRect(),s=t.width/n.width,b=t.left-n.left;e.classList.add(fa),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${b}px) scaleX(${s})`),e.getBoundingClientRect(),e.classList.remove(fa),e.classList.add(ue),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ue)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=de({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Re]}})}return a})();var Ca=(()=>{class a extends Va{elementRef=f(ie);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵdir=de({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(In(`aria-disabled`,!!n.disabled),Yt(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Re]},features:[ti]})}return a})();var ga={passive:!0};var Ga=650;var $a=100;function _e(a){let h=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(h)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(h)?h:``}var Wa=(()=>{class a{_elementRef=f(ie);_changeDetectorRef=f(Kr);_viewportRuler=f(Ve);_dir=f(QR,{optional:!0});_ngZone=f(B);_platform=f(He);_sharedResizeObserver=f(Li$1);_injector=f(J);_renderer=f(pt);_animationsDisabled=li();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new j;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new j;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new be;indexFocused=new be;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ga),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ga))}ngAfterContentInit(){let t=this._dir?this._dir.change:I(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe($n(32),at(this._destroyed)),n=this._viewportRuler.change(150).pipe(at(this._destroyed)),s=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new lh(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),bs(s,{injector:this._injector}),Co(t,n,e,this._items.changes,this._itemsResized()).pipe(at(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),s()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(b=>{this.indexFocused.emit(b),this._setTabFocus(b)})}_itemsResized(){return typeof ResizeObserver!=`function`?he:this._items.changes.pipe(To(this._items),ke(t=>new x(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(s=>e.next(s));return t.forEach(s=>n.observe(s.elementRef.nativeElement)),()=>{n.disconnect()}}))),Fi(1),ge$1(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!lw(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:b}=e.elementRef.nativeElement,u,M;this._getLayoutDirection()==`ltr`?(u=s,M=u+b):(M=this._tabListInner.nativeElement.offsetWidth-s,u=M-b);let N=this.scrollDistance,f=this.scrollDistance+n;u<N?this.scrollDistance-=N-u:M>f&&(this.scrollDistance+=Math.min(M-f,u-N))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Li(Ga,$a).pipe(at(Co(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:s}=this._scrollHeader(t);(s===0||s>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=de({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Re],selectedIndex:[2,`selectedIndex`,`selectedIndex`,wm]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Qa=(()=>{class a extends Wa{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new fe(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],s=[`nextPaginator`],b=[`previousPaginator`];return We({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(N,f,p){if(N&1&&yl(p,Ca,4),N&2){let x;nm(x=rm())&&(f._items=x)}},viewQuery:function(N,f){if(N&1&&kD(t,7)(e,7)(n,7)(s,5)(b,5),N&2){let p;nm(p=rm())&&(f._tabListContainer=p.first),nm(p=rm())&&(f._tabList=p.first),nm(p=rm())&&(f._tabListInner=p.first),nm(p=rm())&&(f._nextPaginator=p.first),nm(p=rm())&&(f._previousPaginator=p.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(N,f){N&2&&Yt(`mat-mdc-tab-header-pagination-controls-enabled`,f._showPaginationControls)(`mat-mdc-tab-header-rtl`,f._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Re]},features:[ti],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(N,f){N&1&&(Gr(),el(0,`div`,5,0),vl(`click`,function(){return f._handlePaginatorClick(`before`)})(`mousedown`,function(x){return f._handlePaginatorPress(`before`,x)})(`touchend`,function(){return f._stopInterval()}),bl(2,`div`,6),Xp(),el(3,`div`,7,1),vl(`keydown`,function(x){return f._handleKeydown(x)}),el(5,`div`,8,2),vl(`cdkObserveContent`,function(){return f._onContentChanges()}),el(7,`div`,9,3),Lt(9),Xp()()(),el(10,`div`,10,4),vl(`mousedown`,function(x){return f._handlePaginatorPress(`after`,x)})(`click`,function(){return f._handlePaginatorClick(`after`)})(`touchend`,function(){return f._stopInterval()}),bl(12,`div`,6),Xp()),N&2&&(Yt(`mat-mdc-tab-header-pagination-disabled`,f._disableScrollBefore),TD(`matRippleDisabled`,f._disableScrollBefore||f.disableRipple),vs(3),Yt(`_mat-animation-noopable`,f._animationsDisabled),vs(2),In(`aria-label`,f.ariaLabel||null)(`aria-labelledby`,f.ariaLabelledby||null),vs(5),Yt(`mat-mdc-tab-header-pagination-disabled`,f._disableScrollAfter),TD(`matRippleDisabled`,f._disableScrollAfter||f.disableRipple))},dependencies:[aK,_6],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return a})();var qa=new v(`MAT_TABS_CONFIG`);var va=(()=>{class a extends ul{_host=f(ge);_ngZone=f(B);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(To(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵdir=de({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[ti]})}return a})();var ge=(()=>{class a{_elementRef=f(ie);_dir=f(QR,{optional:!0});_ngZone=f(B);_injector=f(J);_renderer=f(pt);_diAnimationsDisabled=li();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new be;_beforeCentering=new be;_afterLeavingCenter=new be;_onCentered=new be(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=f(Kr);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),bs(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),bs(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,s){}return We({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(s,b){if(s&1&&kD(va,5)(t,5),s&2){let u;nm(u=rm())&&(b._portalHost=u.first),nm(u=rm())&&(b._contentElement=u.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(s,b){s&2&&In(`inert`,b._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(s,b){s&1&&(el(0,`div`,1,0),wD(2,e,0,0,`ng-template`,2),Xp()),s&2&&Yt(`mat-tab-body-content-left`,b._position===`left`)(`mat-tab-body-content-right`,b._position===`right`)(`mat-tab-body-content-can-animate`,b._position===`center`||b._previousPosition===`center`)},dependencies:[va,Ao],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Ta=(()=>{class a{_elementRef=f(ie);_changeDetectorRef=f(Kr);_ngZone=f(B);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=li();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Vr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=_e(t.body),this._headerAnimationDuration=_e(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=_e(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new be;focusChange=new be;animationDone=new be;selectedTabChange=new be(!0);_groupId;_isServer=!f(He).isBrowser;constructor(){let t=f(qa,{optional:!0});this._groupId=f(uh).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,s)=>n.isActive=s===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let s=0;s<e.length;s++)if(e[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,n=e[s];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(To(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ve;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Co(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function s(p,x){}function b(p,x){if(p&1&&wD(0,s,0,0,`ng-template`,12),p&2){let m=dx().$implicit;TD(`cdkPortalOutlet`,m.templateLabel)}}function u(p,x){if(p&1&&Px(0),p&2){let m=dx().$implicit;WD(m.textLabel)}}function M(p,x){if(p&1){let m=ix();el(0,`div`,7,2),vl(`click`,function(){let T=yb(m),L=T.$implicit,re=T.$index,Aa=dx(),Pa=hx(1);return Db(Aa._handleClick(L,Pa,re))})(`cdkFocusChange`,function(T){let L=yb(m).$index,re=dx();return Db(re._tabFocusChanged(T,L))}),bl(2,`span`,8)(3,`div`,9),el(4,`span`,10)(5,`span`,11),Ss(6,b,1,1,null,12)(7,u,1,1),Xp()()()}if(p&2){let m=x.$implicit,k=x.$index,T=hx(1),L=dx();Ms(m.labelClass),Yt(`mdc-tab--active`,L.selectedIndex===k),TD(`id`,L._getTabLabelId(m,k))(`disabled`,m.disabled)(`fitInkBarToContent`,L.fitInkBarToContent),In(`tabIndex`,L._getTabIndex(k))(`aria-posinset`,k+1)(`aria-setsize`,L._tabs.length)(`aria-controls`,L._getTabContentId(k))(`aria-selected`,L.selectedIndex===k)(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,!m.ariaLabel&&m.ariaLabelledby?m.ariaLabelledby:null),vs(3),TD(`matRippleTrigger`,T)(`matRippleDisabled`,m.disabled||L.disableRipple),vs(3),Cs(m.templateLabel?6:7)}}function N(p,x){p&1&&Lt(0)}function f(p,x){if(p&1){let m=ix();el(0,`mat-tab-body`,13),vl(`_onCentered`,function(){yb(m);let T=dx();return Db(T._removeTabBodyWrapperHeight())})(`_onCentering`,function(T){yb(m);let L=dx();return Db(L._setTabBodyWrapperHeight(T))})(`_beforeCentering`,function(T){yb(m);let L=dx();return Db(L._bodyCentered(T))}),Xp()}if(p&2){let m=x.$implicit,k=x.$index,T=dx();Ms(m.bodyClass),TD(`id`,T._getTabContentId(k))(`content`,m.content)(`position`,m.position)(`animationDuration`,T._bodyAnimationDuration)(`preserveContent`,T.preserveContent),In(`tabindex`,T.contentTabIndex!=null&&T.selectedIndex===k?T.contentTabIndex:null)(`aria-labelledby`,T._getTabLabelId(m,k))(`aria-hidden`,T.selectedIndex!==k)}}return We({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(x,m,k){if(x&1&&yl(k,xe,5),x&2){let T;nm(T=rm())&&(m._allTabs=T)}},viewQuery:function(x,m){if(x&1&&kD(t,5)(e,5)(ge,5),x&2){let k;nm(k=rm())&&(m._tabBodyWrapper=k.first),nm(k=rm())&&(m._tabHeader=k.first),nm(k=rm())&&(m._tabBodies=k)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(x,m){x&2&&(In(`mat-align-tabs`,m.alignTabs),Ms(`mat-`+(m.color||`primary`)),UD(`--%NS%mat-tab-body-animation-duration`,m._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,m._headerAnimationDuration),Yt(`mat-mdc-tab-group-dynamic-height`,m.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,m.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,m.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Re],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Re],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Re],selectedIndex:[2,`selectedIndex`,`selectedIndex`,wm],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,wm],disablePagination:[2,`disablePagination`,`disablePagination`,Re],disableRipple:[2,`disableRipple`,`disableRipple`,Re],preserveContent:[2,`preserveContent`,`preserveContent`,Re],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[XD([{provide:xa,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(x,m){x&1&&(Gr(),el(0,`mat-tab-header`,3,0),vl(`indexFocused`,function(T){return m._focusChanged(T)})(`selectFocusedIndex`,function(T){return m.selectedIndex=T}),XN(2,M,8,17,`div`,4,QN),Xp(),Ss(4,N,1,0),el(5,`div`,5,1),XN(7,f,1,10,`mat-tab-body`,6,QN),Xp()),x&2&&(TD(`selectedIndex`,m.selectedIndex||0)(`disableRipple`,m.disableRipple)(`disablePagination`,m.disablePagination),CD(`aria-label`,m.ariaLabel)(`aria-labelledby`,m.ariaLabelledby),vs(2),JN(m._tabs),vs(2),Cs(m._isServer?4:-1),vs(),Yt(`_mat-animation-noopable`,m._bodyAnimationsDisabled()),vs(2),JN(m._tabs))},dependencies:[Qa,Ca,vR,aK,ul,ge],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var ve=class{index;tab};var Ua=(a,h)=>h.link;function Ka(a,h){if(a&1&&(Px(0),Zx(1,`translate`)),a&2){let t=dx().$implicit;om(` `,Qx(1,1,t.label),` `)}}function Za(a,h){a&1&&(el(0,`mat-tab`),wD(1,Ka,2,3,`ng-template`,1),Xp())}var ka=(()=>{class a{constructor(t,e){this._router=t,this._route=e,this.navLinks=[]}ngOnInit(){this.init(),this.setActiveIndex()}ngOnDestroy(){this.subscription.unsubscribe()}onTabChanged(t){this._router.navigate([this.navLinks.find(e=>e.index===t.index)?.link])}init(){this.subscription=this._router.events.subscribe(t=>{this.setActiveIndex()})}setActiveIndex(){this.activeLinkIndex=this.navLinks.find(t=>t.link===this._router.url)?.index}static{this.ɵfac=function(e){return new(e||a)($(fo),$(Rn))}}static{this.ɵcmp=We({type:a,selectors:[[`app-menu-tab`]],inputs:{navLinks:`navLinks`},decls:3,vars:1,consts:[[3,`selectedIndexChange`,`selectedTabChange`,`selectedIndex`],[`mat-tab-label`,``]],template:function(e,n){e&1&&(el(0,`mat-tab-group`,0),ZD(`selectedIndexChange`,function(b){return Bx(n.activeLinkIndex,b)||(n.activeLinkIndex=b),b}),vl(`selectedTabChange`,function(b){return n.onTabChanged(b)}),XN(1,Za,2,0,`mat-tab`,null,Ua),Xp()),e&2&&(KD(`selectedIndex`,n.activeLinkIndex),vs(),JN(n.navLinks))},dependencies:[Ta,xe,ye,D5],encapsulation:2,changeDetection:1})}}return a})();function Xa(a,h){if(a&1&&(el(0,`div`,0)(1,`div`,1),bl(2,`app-menu-tab`,2),el(3,`div`,3),bl(4,`router-outlet`),Xp()()()),a&2){let t=dx();vs(2),TD(`navLinks`,t.navLinks)}}function Ja(a,h){a&1&&(el(0,`div`,4),bl(1,`mat-spinner`),Xp())}var Ia=(()=>{class a{constructor(t,e,n){this._route=t,this._firmService=e,this._translateService=n,this.navLinks=[]}ngOnInit(){this.firmId=this._route.snapshot.paramMap.get(`id`),this.getFirm(),this.prepareNavLinks()}getFirm(){this._firmService.getById(this.firmId).subscribe(t=>{this.firm=t})}prepareNavLinks(){this.navLinks=[{label:`BASIC_INFO`,link:`/firm/show/${this.firmId}`,index:0},{label:`EMPLOYEES`,link:`/firm/show/${this.firmId}/users`,index:1}]}static{this.ɵfac=function(e){return new(e||a)($(Rn),$(Y),$(Xm))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-show`]],decls:2,vars:1,consts:[[1,`container-fluid`],[1,`row`],[3,`navLinks`],[1,`col-12`,`mt-3`],[1,`spinner-wrap`]],template:function(e,n){e&1&&(Ss(0,Xa,5,1,`div`,0),wD(1,Ja,2,0,`ng-template`)),e&2&&Cs(n.firm?0:-1)},dependencies:[ka,$h,Et],encapsulation:2,changeDetection:1})}}return a})();var Sa=(()=>{class a{constructor(t){this._route=t}ngOnInit(){this.firmUuid=this._route.parent?.snapshot.paramMap.get(`id`)}static{this.ɵfac=function(e){return new(e||a)($(Rn))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-users`]],decls:2,vars:1,consts:[[3,`firmUuid`]],template:function(e,n){e&1&&(el(0,`div`),bl(1,`app-user-table`,0),Xp()),e&2&&(vs(),TD(`firmUuid`,n.firmUuid))},dependencies:[Ii],encapsulation:2,changeDetection:1})}}return a})();var oe=(()=>{class a extends m{constructor(t){super(t,`${td.backendUrl}/contact`)}getContactsByOperationId(t){return this.httpClient.get(`${this.apiUrl}/all/${t}`)}static{this.ɵfac=function(e){return new(e||a)(S(Wl))}}static{this.ɵprov=C({token:a,factory:a.ɵfac,providedIn:`root`})}}return a})();var Te=a=>({LENGTH:a});function nn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),om(` `,Qx(2,1,`FIRST_NAME_REQUIRED`),` `))}function on(a,h){if(a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2){let t=dx();vs(),om(` `,Xx(2,1,`GENERAL.MAX_LENGTH`,Gx(4,Te,t.formGroup.get(`firstName`)?.errors?.maxlength?.requiredLength)),` `)}}function rn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),om(` `,Qx(2,1,`LAST_NAME_REQUIRED`),` `))}function sn(a,h){if(a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2){let t=dx();vs(),om(` `,Xx(2,1,`GENERAL.MAX_LENGTH`,Gx(4,Te,t.formGroup.get(`lastName`)?.errors?.maxlength?.requiredLength)),` `)}}function ln(a,h){if(a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2){let t=dx();vs(),om(` `,Xx(2,1,`GENERAL.MAX_LENGTH`,Gx(4,Te,t.formGroup.get(`position`)?.errors?.maxlength?.requiredLength)),` `)}}function dn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),om(` `,Qx(2,1,`EMAIL_INVALID`),` `))}function cn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),om(` `,Qx(2,1,`PHONE_INVALID`),` `))}var Na=(()=>{class a{constructor(t,e,n,s,b,u){this._fb=t,this._contactService=e,this._snackBarService=n,this._dialogRef=s,this._translateService=b,this.data=u,this.formGroup=this._fb.group({id:u.contact?.id,firstName:[u.contact?.firstName||``,[en.required,en.maxLength(50)]],lastName:[u.contact?.lastName||``,[en.required,en.maxLength(50)]],position:[u.contact?.position||``,en.maxLength(50)],email:[u.contact?.email||``,[en.email]],phone:[u.contact?.phone||``,en.pattern(/^\+?\d(?:[\d ]{9,15})$/)],operationId:[this.data.operationId],firmId:[this.data.firmId]})}submit(){Ua$1(this._translateService.instant(`PLEASE_CHECK_THE_FORM`),this.formGroup,this._snackBarService)||(this.data.contact?.id?this._contactService.update(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`CONTACT_UPDATED`),`success`)}):this._contactService.create(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`CONTACT_CREATED`),`success`)}))}close(){this._dialogRef.close()}static{this.ɵfac=function(e){return new(e||a)($(ca),$(oe),$(i),$(w),$(Xm),$($t))}}static{this.ɵcmp=We({type:a,selectors:[[`app-contact-dialog`]],decls:58,vars:54,consts:[[3,`ngSubmit`,`formGroup`],[`mat-dialog-title`,``],[1,`mat-typography`],[1,`row`],[1,`col-sm-6`],[`appearance`,`fill`,1,`w-100`,`custom-mat-field`],[`matInput`,``,`formControlName`,`firstName`,`max`,`50`,3,`placeholder`],[`matInput`,``,`formControlName`,`lastName`,`max`,`50`,3,`placeholder`],[`matInput`,``,`formControlName`,`position`,`max`,`50`,3,`placeholder`],[`matInput`,``,`formControlName`,`email`,3,`placeholder`],[`matInput`,``,`formControlName`,`phone`,3,`placeholder`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``],[`mat-flat-button`,``,`cdkFocusInitial`,``,`color`,`primary`]],template:function(e,n){e&1&&(el(0,`form`,0),vl(`ngSubmit`,function(){return n.submit()}),el(1,`h2`,1),Px(2),Zx(3,`translate`),Zx(4,`translate`),Xp(),el(5,`mat-dialog-content`,2)(6,`div`,3)(7,`div`,4)(8,`mat-form-field`,5)(9,`mat-label`),Px(10),Zx(11,`translate`),Xp(),el(12,`input`,6),Zx(13,`translate`),VM(),Xp(),Ss(14,nn,3,3,`mat-error`),Ss(15,on,3,6,`mat-error`),Xp()(),el(16,`div`,4)(17,`mat-form-field`,5)(18,`mat-label`),Px(19),Zx(20,`translate`),Xp(),el(21,`input`,7),Zx(22,`translate`),VM(),Xp(),Ss(23,rn,3,3,`mat-error`),Ss(24,sn,3,6,`mat-error`),Xp()()(),el(25,`div`,3)(26,`div`,4)(27,`mat-form-field`,5)(28,`mat-label`),Px(29),Zx(30,`translate`),Xp(),el(31,`input`,8),Zx(32,`translate`),VM(),Xp(),Ss(33,ln,3,6,`mat-error`),Xp()(),el(34,`div`,4)(35,`mat-form-field`,5)(36,`mat-label`),Px(37),Zx(38,`translate`),Xp(),el(39,`input`,9),Zx(40,`translate`),VM(),Xp(),Ss(41,dn,3,3,`mat-error`),Xp()()(),el(42,`div`,3)(43,`div`,4)(44,`mat-form-field`,5)(45,`mat-label`),Px(46),Zx(47,`translate`),Xp(),el(48,`input`,10),Zx(49,`translate`),VM(),Xp(),Ss(50,cn,3,3,`mat-error`),Xp()()()(),el(51,`mat-dialog-actions`,11)(52,`button`,12),Px(53),Zx(54,`translate`),Xp(),el(55,`button`,13),Px(56),Zx(57,`translate`),Xp()()()),e&2&&(TD(`formGroup`,n.formGroup),vs(2),om(` `,n.data.contact?.id?Qx(3,26,`EDIT_CONTACT`):Qx(4,28,`ADD_CONTACT`),` `),vs(8),WD(Qx(11,30,`FIRST_NAME`)),vs(2),TD(`placeholder`,Vx(Qx(13,32,`ENTER_FIRST_NAME`))),$M(),vs(2),Cs(n.formGroup.get(`firstName`)?.hasError(`required`)?14:-1),vs(),Cs(n.formGroup.get(`firstName`)?.hasError(`maxlength`)?15:-1),vs(4),WD(Qx(20,34,`LAST_NAME`)),vs(2),TD(`placeholder`,Vx(Qx(22,36,`ENTER_LAST_NAME`))),$M(),vs(2),Cs(n.formGroup.get(`lastName`)?.hasError(`required`)?23:-1),vs(),Cs(n.formGroup.get(`lastName`)?.hasError(`maxlength`)?24:-1),vs(5),WD(Qx(30,38,`POSITION`)),vs(2),TD(`placeholder`,Vx(Qx(32,40,`ENTER_POSITION`))),$M(),vs(2),Cs(n.formGroup.get(`position`)?.hasError(`maxlength`)?33:-1),vs(4),WD(Qx(38,42,`EMAIL`)),vs(2),TD(`placeholder`,Vx(Qx(40,44,`ENTER_EMAIL`))),$M(),vs(2),Cs(n.formGroup.get(`email`)?.hasError(`email`)?41:-1),vs(5),WD(Qx(47,46,`PHONE`)),vs(2),TD(`placeholder`,Vx(Qx(49,48,`ENTER_PHONE`))),$M(),vs(2),Cs(n.formGroup.get(`phone`)?.hasError(`pattern`)?50:-1),vs(3),WD(Qx(54,50,`CANCEL`)),vs(3),WD(Qx(57,52,`SAVE`)))},dependencies:[Ve$1,Re$1,Be,ze,je,fa$1,sa,ai,ra,oa,uo,_o,cd,Xi,pn$1,So,ft,gt,UK,jK,D5],encapsulation:2,changeDetection:1})}}return a})();function bn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),WD(Qx(2,1,`TITLE_REQUIRED`)))}function pn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),WD(Qx(2,1,`TITLE_TOO_LONG`)))}function hn(a,h){a&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),WD(Qx(2,1,`ADDRESS_TOO_LONG`)))}var La=(()=>{class a{constructor(t,e,n,s,b,u){this._fb=t,this._operationService=e,this._snackBarService=n,this._dialogRef=s,this._translateService=b,this.data=u,this.formGroup=this._fb.group({id:u.operation?.id,title:[u.operation?.title||``,[en.required,en.maxLength(255)]],address:[u.operation?.address||``,en.maxLength(255)],firmId:[this.data.firmId]})}submit(){Ua$1(this._translateService.instant(`PLEASE_CHECK_THE_FORM`),this.formGroup,this._snackBarService)||(this.data.operation?.id?this._operationService.update(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`OPERATION_UPDATED`),`success`)}):this._operationService.create(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`OPERATION_CREATED`),`success`)}))}close(){this._dialogRef.close()}static{this.ɵfac=function(e){return new(e||a)($(ca),$(nt),$(i),$(w),$(Xm),$($t))}}static{this.ɵcmp=We({type:a,selectors:[[`app-operation-dialog`]],decls:28,vars:29,consts:[[3,`ngSubmit`,`formGroup`],[`mat-dialog-title`,``],[1,`mat-typography`],[`appearance`,`fill`,1,`w-100`,`custom-mat-field`],[`matInput`,``,`formControlName`,`title`,3,`placeholder`],[`matInput`,``,`formControlName`,`address`,3,`placeholder`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``,3,`click`],[`mat-flat-button`,``,`cdkFocusInitial`,``,`color`,`primary`]],template:function(e,n){e&1&&(el(0,`form`,0),vl(`ngSubmit`,function(){return n.submit()}),el(1,`h2`,1),Px(2),Zx(3,`translate`),Zx(4,`translate`),Xp(),el(5,`mat-dialog-content`,2)(6,`mat-form-field`,3)(7,`mat-label`),Px(8),Zx(9,`translate`),Xp(),el(10,`input`,4),Zx(11,`translate`),VM(),Xp(),Ss(12,bn,3,3,`mat-error`),Ss(13,pn,3,3,`mat-error`),Xp(),el(14,`mat-form-field`,3)(15,`mat-label`),Px(16),Zx(17,`translate`),Xp(),el(18,`input`,5),Zx(19,`translate`),VM(),Xp(),Ss(20,hn,3,3,`mat-error`),Xp()(),el(21,`mat-dialog-actions`,6)(22,`button`,7),vl(`click`,function(){return n.close()}),Px(23),Zx(24,`translate`),Xp(),el(25,`button`,8),Px(26),Zx(27,`translate`),Xp()()()),e&2&&(TD(`formGroup`,n.formGroup),vs(2),WD(n.data.operation?Qx(3,13,`EDIT_OPERATION`):Qx(4,15,`OPERATION.ADD`)),vs(6),WD(Qx(9,17,`TITLE`)),vs(2),TD(`placeholder`,Vx(Qx(11,19,`ENTER_OPERATION_TITLE`))),$M(),vs(2),Cs(n.formGroup.get(`title`)?.hasError(`required`)?12:-1),vs(),Cs(n.formGroup.get(`title`)?.hasError(`maxlength`)?13:-1),vs(3),WD(Qx(17,21,`ADDRESS`)),vs(2),TD(`placeholder`,Vx(Qx(19,23,`ENTER_OPERATION_ADDRESS`))),$M(),vs(2),Cs(n.formGroup.get(`address`)?.hasError(`maxlength`)?20:-1),vs(3),WD(Qx(24,25,`CANCEL`)),vs(3),WD(Qx(27,27,`SAVE`)))},dependencies:[Ve$1,Re$1,Be,ze,je,fa$1,sa,ai,ra,oa,uo,_o,cd,Xi,pn$1,So,ft,gt,UK,jK,D5],encapsulation:2,changeDetection:1})}}return a})();function un(a,h){if(a&1){let t=ix();el(0,`div`)(1,`div`,21)(2,`div`)(3,`strong`),Px(4),Xp(),el(5,`span`,22),Px(6),Xp(),el(7,`span`,22),Px(8),Xp()(),el(9,`div`)(10,`button`,12),Zx(11,`translate`),Zx(12,`translate`),vl(`click`,function(){let n=yb(t).$implicit,s=dx(2).$implicit,b=dx(2);return Db(b.openContactDialog(s,n))}),el(13,`mat-icon`,13),Px(14,`edit`),Xp()(),el(15,`button`,12),Zx(16,`translate`),Zx(17,`translate`),vl(`click`,function(){let n=yb(t).$implicit,s=dx(4);return Db(s.deleteContact(n.id))}),el(18,`mat-icon`,13),Px(19,`delete`),Xp()()()()()}if(a&2){let t=h.$implicit;vs(4),GD(``,t.firstName,` `,t.lastName),vs(2),WD(t.position),vs(2),GD(``,t.email,` | `,t.phone),vs(2),TD(`matTooltip`,Vx(Qx(11,11,`EDIT_CONTACT`))),In(`aria-label`,Qx(12,13,`EDIT_CONTACT`)),vs(5),TD(`matTooltip`,Vx(Qx(16,15,`DELETE_CONTACT`))),In(`aria-label`,Qx(17,17,`DELETE_CONTACT`))}}function _n(a,h){if(a&1&&(el(0,`div`),XN(1,un,20,19,`div`,null,QN),Xp()),a&2){let t=dx().$implicit;vs(),JN(t.contacts)}}function fn(a,h){a&1&&(el(0,`p`,20),Px(1),Zx(2,`translate`),Xp()),a&2&&(vs(),WD(Qx(2,1,`NO_CONTACTS`)))}function gn(a,h){if(a&1){let t=ix();el(0,`div`,5)(1,`div`,6)(2,`div`,7)(3,`div`)(4,`div`,8)(5,`div`,9)(6,`mat-icon`),Px(7,`business`),Xp()(),el(8,`div`)(9,`mat-card-title`),Px(10),Xp(),el(11,`mat-card-subtitle`,10),Px(12),Xp()()()(),el(13,`div`,11)(14,`button`,12),Zx(15,`translate`),Zx(16,`translate`),vl(`click`,function(){let n=yb(t).$implicit,s=dx(2);return Db(s.openOperationDialog(n))}),el(17,`mat-icon`,13),Px(18,`edit`),Xp()(),el(19,`div`,14),Zx(20,`translate`),Zx(21,`translate`),el(22,`button`,15),vl(`click`,function(){let n=yb(t).$implicit,s=dx(2);return Db(s.deleteOperation(n.id))}),el(23,`mat-icon`,13),Px(24,`delete`),Xp()()()()(),bl(25,`mat-divider`,16),el(26,`div`)(27,`div`,17)(28,`h6`,18),Px(29),Zx(30,`translate`),Xp(),el(31,`button`,19),vl(`click`,function(){let n=yb(t).$implicit,s=dx(2);return Db(s.openContactDialog(n))}),el(32,`mat-icon`),Px(33,`person_add`),Xp(),Px(34),Zx(35,`translate`),Xp()(),Ss(36,_n,3,0,`div`)(37,fn,3,3,`p`,20),Xp()()()}if(a&2){let t=h.$implicit;vs(10),WD(t.title),vs(2),WD(t.address),vs(2),TD(`matTooltip`,Vx(Qx(15,11,`EDIT_OPERATION`))),In(`aria-label`,Qx(16,13,`EDIT_OPERATION`)),vs(5),TD(`matTooltip`,Vx(t.contacts.length>0?Qx(20,15,`CANNOT_DELETE_WITH_CONTACTS`):Qx(21,17,`DELETE_OPERATION`))),vs(3),TD(`disabled`,t.contacts.length>0),vs(7),WD(Qx(30,19,`OPERATION_CONTACTS`)),vs(5),om(` `,Qx(35,21,`ADD_CONTACT`),` `),vs(2),Cs(t.contacts.length>0?36:37)}}function vn(a,h){if(a&1&&(el(0,`div`,4),XN(1,gn,38,23,`div`,5,QN),Xp()),a&2){let t=dx();vs(),JN(t.operations)}}function yn(a,h){a&1&&(el(0,`div`,4)(1,`div`,23)(2,`div`,24)(3,`p`,20),Px(4),Zx(5,`translate`),Xp()()()()),a&2&&(vs(4),WD(Qx(5,1,`NO_OPERATIONS`)))}var Ba=(()=>{class a{constructor(t,e,n,s,b,u){this._operationService=t,this._contactService=e,this._dialog=n,this._snackbarService=s,this._translateService=b,this._route=u,this.operations=[]}ngOnInit(){this.loadOperations()}loadOperations(){this._operationService.getOperationsByFirmId(this._route.parent?.snapshot.paramMap.get(`id`)).subscribe(t=>{this.operations=t})}openOperationDialog(t){this._dialog.open(La,{data:{firmId:this._route.parent?.snapshot.paramMap.get(`id`),operation:t},disableClose:!0}).afterClosed().subscribe(n=>{n&&this.loadOperations()})}openContactDialog(t,e){this._dialog.open(Na,{data:{operationId:t.id,firmId:this._route.parent?.snapshot.paramMap.get(`id`),contact:e},disableClose:!0}).afterClosed().subscribe(s=>{s&&this.loadOperations()})}deleteOperation(t){this._operationService.deleteById(t).subscribe(()=>{this.loadOperations(),this._snackbarService.snack(this._translateService.instant(`OPERATION_DELETE_SUCCESS`),`success`)})}deleteContact(t){this._contactService.deleteById(t).subscribe(()=>{this.loadOperations(),this._snackbarService.snack(this._translateService.instant(`CONTACT_DELETE_SUCCESS`),`success`)})}static{this.ɵfac=function(e){return new(e||a)($(nt),$(oe),$(tt),$(i),$(Xm),$(Rn))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-operation`]],decls:12,vars:7,consts:[[1,`mt-4`],[1,`d-flex`,`align-items-center`,`justify-content-between`],[1,`mb-0`,`text-app-color-theme`],[`mat-stroked-button`,``,`color`,`primary`,1,`my-3`,3,`click`],[1,`row`],[1,`col-lg-6`,`mb-3`],[1,`box`],[1,`d-flex`,`justify-content-between`,`align-items-start`],[1,`d-flex`,`align-items-start`],[`mat-card-avatar`,``,1,`operation-avatar`,`me-2`],[1,`d-block`],[1,`d-flex`,`align-items-center`],[`mat-icon-button`,``,3,`click`,`matTooltip`],[1,`text-theme`],[1,`d-inline-flex`,3,`matTooltip`],[`appShowIfAdmin`,``,`mat-icon-button`,``,3,`click`,`disabled`],[1,`my-3`],[1,`d-flex`,`justify-content-between`,`align-items-center`,`mb-3`],[1,`mb-0`],[`mat-button`,``,`color`,`primary`,3,`click`],[1,`text-muted`],[1,`d-flex`,`justify-content-between`,`align-items-center`,`py-2`],[1,`d-block`,`text-muted`],[1,`col-12`],[1,`text-center`]],template:function(e,n){e&1&&(el(0,`div`,0)(1,`div`,1)(2,`mat-card-title`,2),Px(3),Zx(4,`translate`),Xp(),el(5,`a`,3),vl(`click`,function(){return n.openOperationDialog()}),el(6,`mat-icon`),Px(7,`add_circle`),Xp(),Px(8),Zx(9,`translate`),Xp()(),Ss(10,vn,3,0,`div`,4)(11,yn,6,3,`div`,4),Xp()),e&2&&(vs(3),WD(Qx(4,3,`FIRM_OPERATION`)),vs(5),om(` `,Qx(9,5,`ADD_FIRM_OPERATION`),` `),vs(2),Cs(n.operations.length>0?10:11))},dependencies:[rn$1,nn$1,an,tn,iZ,oZ,UK,jK,KR,Qi,He$1,ti$1,oi,q,D5],encapsulation:2,changeDetection:1})}}return a})();var xn=a=>[`/firm/edit`,a];function Cn(a,h){if(a&1&&(el(0,`div`,0)(1,`div`,2)(2,`div`,3)(3,`div`,4)(4,`div`)(5,`mat-card-subtitle`,5),Px(6),Zx(7,`translate`),Xp(),el(8,`p`),Px(9),Xp()(),el(10,`div`,6)(11,`button`,7),Zx(12,`translate`),Zx(13,`translate`),el(14,`mat-icon`,8),Px(15,`edit`),Xp()()()()(),el(16,`div`,9)(17,`div`,2)(18,`div`,3)(19,`mat-card-subtitle`,5),Px(20),Zx(21,`translate`),Xp(),el(22,`p`),Px(23),Xp()(),el(24,`div`,3)(25,`mat-card-subtitle`,5),Px(26),Zx(27,`translate`),Xp(),el(28,`p`),Px(29),Xp()()()(),el(30,`div`,9)(31,`div`,2)(32,`div`,3)(33,`mat-card-subtitle`,5),Px(34),Zx(35,`translate`),Xp(),el(36,`p`),Px(37),Xp()(),el(38,`div`,3)(39,`mat-card-subtitle`,5),Px(40),Zx(41,`translate`),Xp(),el(42,`p`),Px(43),Xp()()()(),el(44,`div`,10)(45,`div`,2)(46,`div`,3)(47,`mat-card-subtitle`,5),Px(48),Zx(49,`translate`),Xp(),el(50,`p`),Px(51),Xp()()()()()()),a&2){let t=dx();vs(6),om(``,Qx(7,16,`FIRM_TITLE`),`:`),vs(3),WD(t.firm.title),vs(2),TD(`matTooltip`,Vx(Qx(12,18,`EDIT_FIRM`)))(`routerLink`,Gx(32,xn,t.firm.id)),In(`aria-label`,Qx(13,20,`EDIT_FIRM`)),vs(9),om(``,Qx(21,22,`FIRM_ADDRESS`),`:`),vs(3),WD(t.firm.address||`-`),vs(3),om(``,Qx(27,24,`FIRM_BUSINESS_ID`),`:`),vs(3),WD(t.firm.businessId||`-`),vs(5),om(``,Qx(35,26,`FIRM_EMAIL`),`:`),vs(3),WD(t.firm.email||`-`),vs(3),om(``,Qx(41,28,`FIRM_PHONE`),`:`),vs(3),WD(t.firm.phone||`-`),vs(5),om(``,Qx(49,30,`NOTE`),`:`),vs(3),WD(t.firm.note||`-`)}}function Tn(a,h){a&1&&(el(0,`div`),bl(1,`app-firm-operation`),Xp())}function kn(a,h){a&1&&(el(0,`div`,1),bl(1,`mat-spinner`),Xp())}var bo=[{path:``,component:Ia,children:[{path:``,component:(()=>{class a{constructor(t,e){this._route=t,this._firmService=e}ngOnInit(){this.getFirm()}getFirm(){this._firmService.getById(this._route.parent?.snapshot.paramMap.get(`id`)).subscribe(t=>{this.firm=t})}static{this.ɵfac=function(e){return new(e||a)($(Rn),$(Y))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-info`]],decls:3,vars:3,consts:[[`appEmptyFields`,``,1,`box`],[1,`spinner-wrap`],[1,`row`],[1,`col-12`],[1,`d-flex`,`justify-content-between`],[1,`mb-1`],[`appShowIfAdmin`,``],[`mat-icon-button`,``,1,`text-app-color-theme`,3,`routerLink`,`matTooltip`],[1,`text-theme`],[1,`col-md-6`],[1,`col-md-12`]],template:function(e,n){e&1&&(Ss(0,Cn,52,34,`div`,0),Ss(1,Tn,2,0,`div`),Ss(2,kn,2,0,`div`,1)),e&2&&(Cs(n.firm?0:-1),vs(),Cs(n.firm?1:-1),vs(),Cs(n.firm?-1:2))},dependencies:[Za$1,an,q,KR,ju,He$1,oZ,Ba,Et,D5],encapsulation:2,changeDetection:1})}}return a})()},{path:`users`,component:Sa}]}];export{bo as FIRM_SHOW_ROUTES};