import{An as _m,Bn as bl,Bt as Re,C as Ew,Ci as vl,Cn as Yt,Cr as ke,D as Fi,Dr as lh,Dt as QN,E as FK,Fi as yb,Fr as mx,H as I,Ht as Rn,I as HM,Ii as zD,It as Qx,J,Jn as cw,K as Is,Kt as Ss,L as He,Li as zl,Lr as nm,M as Gr,Mt as Qo,Nr as me,Oi as xn$1,On as Zt,Or as li,Ot as QR,Pn as at,R as Hh,S as En,Si as vb,St as Ot,Ti as x,Tt as QD,Ut as S,Vn as bs,Vr as oZ,W as In,Wr as ox,Wt as SD,Xr as qD,Xt as To,Y as Jc,Zt as Ts,_i as ux,_r as jD,_t as OD,ai as rm,at as Kr,b as E6,ci as sK,cn as Wx,di as tm,dr as he,dt as Lx,en as Ux,f as Bx,g as Co,gr as j,hi as ue$1,i as $n,in as Vr,ir as fo,ji as y5,jt as Qm,k as Fu,kn as _D,l as B,lr as gl,lt as Li,m as CD,mn as Xp,nr as f,nt as KD,on as WD,ot as Kx,p as C,pr as ie,qn as ch,qr as pt,rt as KR,sn as We,sr as ge$1,t as $,ti as rZ,tt as K,u as BM,ui as ti,un as XN,ur as gs,ut as Lt,vi as v,vr as jK,wi as wD,wn as Yx,yi as vR,yn as YN}from"./chunk-Bm4bxsn3.js";import{B as en,C as So,F as ca,I as cd,N as ai,O as Xi,Q as pn$1,R as cl,T as Ve,V as fa$1,X as oa,at as ul,et as ra,h as Li$1,j as _o,l as Ie,nt as td,ot as uo,r as Ao,tt as sa}from"./chunk-R0wqJ2O_.js";import{a as je,c as ze,i as Ve$1,n as Be,o as tt,r as Re$1,s as w,t as $t}from"./chunk-CzvIMx5k.js";import{D as i,a as He$1,m as Ua$1,u as Qi}from"./main-2QKM3JVW.js";import{h as ti$1,i as m,p as oi}from"./chunk-CxASEFIs.js";import{a as gt,i as ft,n as Et}from"./chunk-Doa5hOLl.js";import{a as Mc,c as Sc,g as vc,n as Cc,p as kc}from"./chunk-CYLbdkyM.js";import"./chunk-CJryNN16.js";import"./chunk-CBE-sqE4.js";import{r as q,t as Y}from"./chunk-mU2VnSqe.js";import{r as nt}from"./chunk-BEF5t7TT.js";import"./chunk-B5TvzSwT.js";import{t as Ii}from"./chunk-BIcPLJ2G.js";import"./chunk-C0PQPlSM.js";var Ha=new v(`MatTabContent`);var ja=(()=>{class a{template=f(En);static ɵfac=function(e){return new(e||a)};static ɵdir=ue$1({type:a,selectors:[[``,`matTabContent`,``]],features:[QD([{provide:Ha,useExisting:a}])]})}return a})();var za=new v(`MatTabLabel`);var ya=new v(`MAT_TAB`);var ye=(()=>{class a extends cl{_closestTab=f(ya,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵdir=ue$1({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[QD([{provide:za,useExisting:a}]),ti]})}return a})();var xa=new v(`MAT_TAB_GROUP`);var xe=(()=>{class a{_viewContainerRef=f(Ot);_closestTabGroup=f(xa,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new j;position=null;origin=null;isActive=!1;constructor(){f(xn$1).load(Ew)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ie(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,s){n&1&&Lt(0)}return We({type:a,selectors:[[`mat-tab`]],contentQueries:function(s,b,u){if(s&1&&vl(u,ye,5)(u,ja,7,En),s&2){let M;tm(M=nm())&&(b.templateLabel=M.first),tm(M=nm())&&(b._explicitContent=M.first)}},viewQuery:function(s,b){if(s&1&&OD(En,7),s&2){let u;tm(u=nm())&&(b._implicitContent=u.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(s,b){s&2&&In(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Re],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[QD([{provide:ya,useExisting:a}]),Zt],ngContentSelectors:t,decls:1,vars:0,template:function(s,b){s&1&&(Gr(),wD(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var ue=`mdc-tab-indicator--active`;var fa=`mdc-tab-indicator--no-transition`;var fe=class{_items;_currentItem;constructor(h){this._items=h}hide(){this._items.forEach(h=>h.deactivateInkBar()),this._currentItem=void 0}alignToElement(h){let t=this._items.find(n=>n.elementRef.nativeElement===h),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Va=(()=>{class a{_elementRef=f(ie);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ue);return}let n=e.getBoundingClientRect(),s=t.width/n.width,b=t.left-n.left;e.classList.add(fa),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${b}px) scaleX(${s})`),e.getBoundingClientRect(),e.classList.remove(fa),e.classList.add(ue),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ue)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=ue$1({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Re]}})}return a})();var Ca=(()=>{class a extends Va{elementRef=f(ie);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵdir=ue$1({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(In(`aria-disabled`,!!n.disabled),Yt(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Re]},features:[ti]})}return a})();var ga={passive:!0};var Ga=650;var $a=100;function _e(a){let h=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(h)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(h)?h:``}var Wa=(()=>{class a{_elementRef=f(ie);_changeDetectorRef=f(Kr);_viewportRuler=f(Ve);_dir=f(QR,{optional:!0});_ngZone=f(B);_platform=f(He);_sharedResizeObserver=f(Li$1);_injector=f(J);_renderer=f(pt);_animationsDisabled=li();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new j;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new j;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new ge$1;indexFocused=new ge$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ga),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ga))}ngAfterContentInit(){let t=this._dir?this._dir.change:I(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe($n(32),at(this._destroyed)),n=this._viewportRuler.change(150).pipe(at(this._destroyed)),s=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ch(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),gs(s,{injector:this._injector}),Co(t,n,e,this._items.changes,this._itemsResized()).pipe(at(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),s()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(b=>{this.indexFocused.emit(b),this._setTabFocus(b)})}_itemsResized(){return typeof ResizeObserver!=`function`?me:this._items.changes.pipe(To(this._items),ke(t=>new x(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(s=>e.next(s));return t.forEach(s=>n.observe(s.elementRef.nativeElement)),()=>{n.disconnect()}}))),Fi(1),he(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!cw(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:b}=e.elementRef.nativeElement,u,M;this._getLayoutDirection()==`ltr`?(u=s,M=u+b):(M=this._tabListInner.nativeElement.offsetWidth-s,u=M-b);let N=this.scrollDistance,f=this.scrollDistance+n;u<N?this.scrollDistance-=N-u:M>f&&(this.scrollDistance+=Math.min(M-f,u-N))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Li(Ga,$a).pipe(at(Co(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:s}=this._scrollHeader(t);(s===0||s>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=ue$1({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Re],selectedIndex:[2,`selectedIndex`,`selectedIndex`,_m]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Qa=(()=>{class a extends Wa{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new fe(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],s=[`nextPaginator`],b=[`previousPaginator`];return We({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(N,f,p){if(N&1&&vl(p,Ca,4),N&2){let x;tm(x=nm())&&(f._items=x)}},viewQuery:function(N,f){if(N&1&&OD(t,7)(e,7)(n,7)(s,5)(b,5),N&2){let p;tm(p=nm())&&(f._tabListContainer=p.first),tm(p=nm())&&(f._tabList=p.first),tm(p=nm())&&(f._tabListInner=p.first),tm(p=nm())&&(f._nextPaginator=p.first),tm(p=nm())&&(f._previousPaginator=p.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(N,f){N&2&&Yt(`mat-mdc-tab-header-pagination-controls-enabled`,f._showPaginationControls)(`mat-mdc-tab-header-rtl`,f._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Re]},features:[ti],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(N,f){N&1&&(Gr(),Jc(0,`div`,5,0),bl(`click`,function(){return f._handlePaginatorClick(`before`)})(`mousedown`,function(x){return f._handlePaginatorPress(`before`,x)})(`touchend`,function(){return f._stopInterval()}),gl(2,`div`,6),Xp(),Jc(3,`div`,7,1),bl(`keydown`,function(x){return f._handleKeydown(x)}),Jc(5,`div`,8,2),bl(`cdkObserveContent`,function(){return f._onContentChanges()}),Jc(7,`div`,9,3),Lt(9),Xp()()(),Jc(10,`div`,10,4),bl(`mousedown`,function(x){return f._handlePaginatorPress(`after`,x)})(`click`,function(){return f._handlePaginatorClick(`after`)})(`touchend`,function(){return f._stopInterval()}),gl(12,`div`,6),Xp()),N&2&&(Yt(`mat-mdc-tab-header-pagination-disabled`,f._disableScrollBefore),CD(`matRippleDisabled`,f._disableScrollBefore||f.disableRipple),bs(3),Yt(`_mat-animation-noopable`,f._animationsDisabled),bs(2),In(`aria-label`,f.ariaLabel||null)(`aria-labelledby`,f.ariaLabelledby||null),bs(5),Yt(`mat-mdc-tab-header-pagination-disabled`,f._disableScrollAfter),CD(`matRippleDisabled`,f._disableScrollAfter||f.disableRipple))},dependencies:[sK,E6],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var qa=new v(`MAT_TABS_CONFIG`);var va=(()=>{class a extends ul{_host=f(ge);_ngZone=f(B);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(To(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Qo(a)))(n||a)}})();static ɵdir=ue$1({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[ti]})}return a})();var ge=(()=>{class a{_elementRef=f(ie);_dir=f(QR,{optional:!0});_ngZone=f(B);_injector=f(J);_renderer=f(pt);_diAnimationsDisabled=li();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new ge$1;_beforeCentering=new ge$1;_afterLeavingCenter=new ge$1;_onCentered=new ge$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=f(Kr);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),gs(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),gs(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,s){}return We({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(s,b){if(s&1&&OD(va,5)(t,5),s&2){let u;tm(u=nm())&&(b._portalHost=u.first),tm(u=nm())&&(b._contentElement=u.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(s,b){s&2&&In(`inert`,b._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(s,b){s&1&&(Jc(0,`div`,1,0),_D(2,e,0,0,`ng-template`,2),Xp()),s&2&&Yt(`mat-tab-body-content-left`,b._position===`left`)(`mat-tab-body-content-right`,b._position===`right`)(`mat-tab-body-content-can-animate`,b._position===`center`||b._previousPosition===`center`)},dependencies:[va,Ao],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Ta=(()=>{class a{_elementRef=f(ie);_changeDetectorRef=f(Kr);_ngZone=f(B);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=li();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Vr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=_e(t.body),this._headerAnimationDuration=_e(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=_e(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new ge$1;focusChange=new ge$1;animationDone=new ge$1;selectedTabChange=new ge$1(!0);_groupId;_isServer=!f(He).isBrowser;constructor(){let t=f(qa,{optional:!0});this._groupId=f(lh).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,s)=>n.isActive=s===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let s=0;s<e.length;s++)if(e[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,n=e[s];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(To(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ve;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Co(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function s(p,x){}function b(p,x){if(p&1&&_D(0,s,0,0,`ng-template`,12),p&2){let m=ux().$implicit;CD(`cdkPortalOutlet`,m.templateLabel)}}function u(p,x){if(p&1&&Lx(0),p&2){let m=ux().$implicit;zD(m.textLabel)}}function M(p,x){if(p&1){let m=ox();Jc(0,`div`,7,2),bl(`click`,function(){let T=vb(m),L=T.$implicit,re=T.$index,Aa=ux(),Pa=mx(1);return yb(Aa._handleClick(L,Pa,re))})(`cdkFocusChange`,function(T){let L=vb(m).$index,re=ux();return yb(re._tabFocusChanged(T,L))}),gl(2,`span`,8)(3,`div`,9),Jc(4,`span`,10)(5,`span`,11),Is(6,b,1,1,null,12)(7,u,1,1),Xp()()()}if(p&2){let m=x.$implicit,k=x.$index,T=mx(1),L=ux();Ts(m.labelClass),Yt(`mdc-tab--active`,L.selectedIndex===k),CD(`id`,L._getTabLabelId(m,k))(`disabled`,m.disabled)(`fitInkBarToContent`,L.fitInkBarToContent),In(`tabIndex`,L._getTabIndex(k))(`aria-posinset`,k+1)(`aria-setsize`,L._tabs.length)(`aria-controls`,L._getTabContentId(k))(`aria-selected`,L.selectedIndex===k)(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,!m.ariaLabel&&m.ariaLabelledby?m.ariaLabelledby:null),bs(3),CD(`matRippleTrigger`,T)(`matRippleDisabled`,m.disabled||L.disableRipple),bs(3),Ss(m.templateLabel?6:7)}}function N(p,x){p&1&&Lt(0)}function f(p,x){if(p&1){let m=ox();Jc(0,`mat-tab-body`,13),bl(`_onCentered`,function(){vb(m);let T=ux();return yb(T._removeTabBodyWrapperHeight())})(`_onCentering`,function(T){vb(m);let L=ux();return yb(L._setTabBodyWrapperHeight(T))})(`_beforeCentering`,function(T){vb(m);let L=ux();return yb(L._bodyCentered(T))}),Xp()}if(p&2){let m=x.$implicit,k=x.$index,T=ux();Ts(m.bodyClass),CD(`id`,T._getTabContentId(k))(`content`,m.content)(`position`,m.position)(`animationDuration`,T._bodyAnimationDuration)(`preserveContent`,T.preserveContent),In(`tabindex`,T.contentTabIndex!=null&&T.selectedIndex===k?T.contentTabIndex:null)(`aria-labelledby`,T._getTabLabelId(m,k))(`aria-hidden`,T.selectedIndex!==k)}}return We({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(x,m,k){if(x&1&&vl(k,xe,5),x&2){let T;tm(T=nm())&&(m._allTabs=T)}},viewQuery:function(x,m){if(x&1&&OD(t,5)(e,5)(ge,5),x&2){let k;tm(k=nm())&&(m._tabBodyWrapper=k.first),tm(k=nm())&&(m._tabHeader=k.first),tm(k=nm())&&(m._tabBodies=k)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(x,m){x&2&&(In(`mat-align-tabs`,m.alignTabs),Ts(`mat-`+(m.color||`primary`)),jD(`--%NS%mat-tab-body-animation-duration`,m._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,m._headerAnimationDuration),Yt(`mat-mdc-tab-group-dynamic-height`,m.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,m.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,m.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Re],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Re],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Re],selectedIndex:[2,`selectedIndex`,`selectedIndex`,_m],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,_m],disablePagination:[2,`disablePagination`,`disablePagination`,Re],disableRipple:[2,`disableRipple`,`disableRipple`,Re],preserveContent:[2,`preserveContent`,`preserveContent`,Re],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[QD([{provide:xa,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(x,m){x&1&&(Gr(),Jc(0,`mat-tab-header`,3,0),bl(`indexFocused`,function(T){return m._focusChanged(T)})(`selectFocusedIndex`,function(T){return m.selectedIndex=T}),QN(2,M,8,17,`div`,4,YN),Xp(),Is(4,N,1,0),Jc(5,`div`,5,1),QN(7,f,1,10,`mat-tab-body`,6,YN),Xp()),x&2&&(CD(`selectedIndex`,m.selectedIndex||0)(`disableRipple`,m.disableRipple)(`disablePagination`,m.disablePagination),SD(`aria-label`,m.ariaLabel)(`aria-labelledby`,m.ariaLabelledby),bs(2),XN(m._tabs),bs(2),Ss(m._isServer?4:-1),bs(),Yt(`_mat-animation-noopable`,m._bodyAnimationsDisabled()),bs(2),XN(m._tabs))},dependencies:[Qa,Ca,vR,sK,ul,ge],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var ve=class{index;tab};var Ua=(a,h)=>h.link;function Ka(a,h){if(a&1&&(Lx(0),Kx(1,`translate`)),a&2){let t=ux().$implicit;rm(` `,Yx(1,1,t.label),` `)}}function Za(a,h){a&1&&(Jc(0,`mat-tab`),_D(1,Ka,2,3,`ng-template`,1),Xp())}var ka=(()=>{class a{constructor(t,e){this._router=t,this._route=e,this.navLinks=[]}ngOnInit(){this.init(),this.setActiveIndex()}ngOnDestroy(){this.subscription.unsubscribe()}onTabChanged(t){this._router.navigate([this.navLinks.find(e=>e.index===t.index)?.link])}init(){this.subscription=this._router.events.subscribe(t=>{this.setActiveIndex()})}setActiveIndex(){this.activeLinkIndex=this.navLinks.find(t=>t.link===this._router.url)?.index}static{this.ɵfac=function(e){return new(e||a)($(fo),$(Rn))}}static{this.ɵcmp=We({type:a,selectors:[[`app-menu-tab`]],inputs:{navLinks:`navLinks`},decls:3,vars:1,consts:[[3,`selectedIndexChange`,`selectedTabChange`,`selectedIndex`],[`mat-tab-label`,``]],template:function(e,n){e&1&&(Jc(0,`mat-tab-group`,0),KD(`selectedIndexChange`,function(b){return Ux(n.activeLinkIndex,b)||(n.activeLinkIndex=b),b}),bl(`selectedTabChange`,function(b){return n.onTabChanged(b)}),QN(1,Za,2,0,`mat-tab`,null,Ua),Xp()),e&2&&(qD(`selectedIndex`,n.activeLinkIndex),bs(),XN(n.navLinks))},dependencies:[Ta,xe,ye,y5],encapsulation:2,changeDetection:1})}}return a})();function Xa(a,h){if(a&1&&(Jc(0,`div`,0)(1,`div`,1),gl(2,`app-menu-tab`,2),Jc(3,`div`,3),gl(4,`router-outlet`),Xp()()()),a&2){let t=ux();bs(2),CD(`navLinks`,t.navLinks)}}function Ja(a,h){a&1&&(Jc(0,`div`,4),gl(1,`mat-spinner`),Xp())}var Ia=(()=>{class a{constructor(t,e,n){this._route=t,this._firmService=e,this._translateService=n,this.navLinks=[]}ngOnInit(){this.firmId=this._route.snapshot.paramMap.get(`id`),this.getFirm(),this.prepareNavLinks()}getFirm(){this._firmService.getById(this.firmId).subscribe(t=>{this.firm=t})}prepareNavLinks(){this.navLinks=[{label:`BASIC_INFO`,link:`/firm/show/${this.firmId}`,index:0},{label:`EMPLOYEES`,link:`/firm/show/${this.firmId}/users`,index:1}]}static{this.ɵfac=function(e){return new(e||a)($(Rn),$(Y),$(Qm))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-show`]],decls:2,vars:1,consts:[[1,`container-fluid`],[1,`row`],[3,`navLinks`],[1,`col-12`,`mt-3`],[1,`spinner-wrap`]],template:function(e,n){e&1&&(Is(0,Xa,5,1,`div`,0),_D(1,Ja,2,0,`ng-template`)),e&2&&Ss(n.firm?0:-1)},dependencies:[ka,Hh,Et],encapsulation:2,changeDetection:1})}}return a})();var Sa=(()=>{class a{constructor(t){this._route=t}ngOnInit(){this.firmUuid=this._route.parent?.snapshot.paramMap.get(`id`)}static{this.ɵfac=function(e){return new(e||a)($(Rn))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-users`]],decls:2,vars:1,consts:[[3,`firmUuid`]],template:function(e,n){e&1&&(Jc(0,`div`),gl(1,`app-user-table`,0),Xp()),e&2&&(bs(),CD(`firmUuid`,n.firmUuid))},dependencies:[Ii],encapsulation:2,changeDetection:1})}}return a})();var oe=(()=>{class a extends m{constructor(t){super(t,`${td.backendUrl}/contact`)}getContactsByOperationId(t){return this.httpClient.get(`${this.apiUrl}/all/${t}`)}static{this.ɵfac=function(e){return new(e||a)(S(zl))}}static{this.ɵprov=C({token:a,factory:a.ɵfac,providedIn:`root`})}}return a})();var Te=a=>({LENGTH:a});function nn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),rm(` `,Yx(2,1,`FIRST_NAME_REQUIRED`),` `))}function on(a,h){if(a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2){let t=ux();bs(),rm(` `,Qx(2,1,`GENERAL.MAX_LENGTH`,Wx(4,Te,t.formGroup.get(`firstName`)?.errors?.maxlength?.requiredLength)),` `)}}function rn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),rm(` `,Yx(2,1,`LAST_NAME_REQUIRED`),` `))}function sn(a,h){if(a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2){let t=ux();bs(),rm(` `,Qx(2,1,`GENERAL.MAX_LENGTH`,Wx(4,Te,t.formGroup.get(`lastName`)?.errors?.maxlength?.requiredLength)),` `)}}function ln(a,h){if(a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2){let t=ux();bs(),rm(` `,Qx(2,1,`GENERAL.MAX_LENGTH`,Wx(4,Te,t.formGroup.get(`position`)?.errors?.maxlength?.requiredLength)),` `)}}function dn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),rm(` `,Yx(2,1,`EMAIL_INVALID`),` `))}function cn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),rm(` `,Yx(2,1,`PHONE_INVALID`),` `))}var Na=(()=>{class a{constructor(t,e,n,s,b,u){this._fb=t,this._contactService=e,this._snackBarService=n,this._dialogRef=s,this._translateService=b,this.data=u,this.formGroup=this._fb.group({id:u.contact?.id,firstName:[u.contact?.firstName||``,[en.required,en.maxLength(50)]],lastName:[u.contact?.lastName||``,[en.required,en.maxLength(50)]],position:[u.contact?.position||``,en.maxLength(50)],email:[u.contact?.email||``,[en.email]],phone:[u.contact?.phone||``,en.pattern(/^\+?\d(?:[\d ]{9,15})$/)],operationId:[this.data.operationId],firmId:[this.data.firmId]})}submit(){Ua$1(this._translateService.instant(`PLEASE_CHECK_THE_FORM`),this.formGroup,this._snackBarService)||(this.data.contact?.id?this._contactService.update(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`CONTACT_UPDATED`),`success`)}):this._contactService.create(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`CONTACT_CREATED`),`success`)}))}close(){this._dialogRef.close()}static{this.ɵfac=function(e){return new(e||a)($(ca),$(oe),$(i),$(w),$(Qm),$($t))}}static{this.ɵcmp=We({type:a,selectors:[[`app-contact-dialog`]],decls:58,vars:54,consts:[[3,`ngSubmit`,`formGroup`],[`mat-dialog-title`,``],[1,`mat-typography`],[1,`row`],[1,`col-sm-6`],[`appearance`,`fill`,1,`w-100`,`custom-mat-field`],[`matInput`,``,`formControlName`,`firstName`,`max`,`50`,3,`placeholder`],[`matInput`,``,`formControlName`,`lastName`,`max`,`50`,3,`placeholder`],[`matInput`,``,`formControlName`,`position`,`max`,`50`,3,`placeholder`],[`matInput`,``,`formControlName`,`email`,3,`placeholder`],[`matInput`,``,`formControlName`,`phone`,3,`placeholder`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``],[`mat-flat-button`,``,`cdkFocusInitial`,``,`color`,`primary`]],template:function(e,n){e&1&&(Jc(0,`form`,0),bl(`ngSubmit`,function(){return n.submit()}),Jc(1,`h2`,1),Lx(2),Kx(3,`translate`),Kx(4,`translate`),Xp(),Jc(5,`mat-dialog-content`,2)(6,`div`,3)(7,`div`,4)(8,`mat-form-field`,5)(9,`mat-label`),Lx(10),Kx(11,`translate`),Xp(),Jc(12,`input`,6),Kx(13,`translate`),BM(),Xp(),Is(14,nn,3,3,`mat-error`),Is(15,on,3,6,`mat-error`),Xp()(),Jc(16,`div`,4)(17,`mat-form-field`,5)(18,`mat-label`),Lx(19),Kx(20,`translate`),Xp(),Jc(21,`input`,7),Kx(22,`translate`),BM(),Xp(),Is(23,rn,3,3,`mat-error`),Is(24,sn,3,6,`mat-error`),Xp()()(),Jc(25,`div`,3)(26,`div`,4)(27,`mat-form-field`,5)(28,`mat-label`),Lx(29),Kx(30,`translate`),Xp(),Jc(31,`input`,8),Kx(32,`translate`),BM(),Xp(),Is(33,ln,3,6,`mat-error`),Xp()(),Jc(34,`div`,4)(35,`mat-form-field`,5)(36,`mat-label`),Lx(37),Kx(38,`translate`),Xp(),Jc(39,`input`,9),Kx(40,`translate`),BM(),Xp(),Is(41,dn,3,3,`mat-error`),Xp()()(),Jc(42,`div`,3)(43,`div`,4)(44,`mat-form-field`,5)(45,`mat-label`),Lx(46),Kx(47,`translate`),Xp(),Jc(48,`input`,10),Kx(49,`translate`),BM(),Xp(),Is(50,cn,3,3,`mat-error`),Xp()()()(),Jc(51,`mat-dialog-actions`,11)(52,`button`,12),Lx(53),Kx(54,`translate`),Xp(),Jc(55,`button`,13),Lx(56),Kx(57,`translate`),Xp()()()),e&2&&(CD(`formGroup`,n.formGroup),bs(2),rm(` `,n.data.contact?.id?Yx(3,26,`EDIT_CONTACT`):Yx(4,28,`ADD_CONTACT`),` `),bs(8),zD(Yx(11,30,`FIRST_NAME`)),bs(2),CD(`placeholder`,Bx(Yx(13,32,`ENTER_FIRST_NAME`))),HM(),bs(2),Ss(n.formGroup.get(`firstName`)?.hasError(`required`)?14:-1),bs(),Ss(n.formGroup.get(`firstName`)?.hasError(`maxlength`)?15:-1),bs(4),zD(Yx(20,34,`LAST_NAME`)),bs(2),CD(`placeholder`,Bx(Yx(22,36,`ENTER_LAST_NAME`))),HM(),bs(2),Ss(n.formGroup.get(`lastName`)?.hasError(`required`)?23:-1),bs(),Ss(n.formGroup.get(`lastName`)?.hasError(`maxlength`)?24:-1),bs(5),zD(Yx(30,38,`POSITION`)),bs(2),CD(`placeholder`,Bx(Yx(32,40,`ENTER_POSITION`))),HM(),bs(2),Ss(n.formGroup.get(`position`)?.hasError(`maxlength`)?33:-1),bs(4),zD(Yx(38,42,`EMAIL`)),bs(2),CD(`placeholder`,Bx(Yx(40,44,`ENTER_EMAIL`))),HM(),bs(2),Ss(n.formGroup.get(`email`)?.hasError(`email`)?41:-1),bs(5),zD(Yx(47,46,`PHONE`)),bs(2),CD(`placeholder`,Bx(Yx(49,48,`ENTER_PHONE`))),HM(),bs(2),Ss(n.formGroup.get(`phone`)?.hasError(`pattern`)?50:-1),bs(3),zD(Yx(54,50,`CANCEL`)),bs(3),zD(Yx(57,52,`SAVE`)))},dependencies:[Ve$1,Re$1,Be,ze,je,fa$1,sa,ai,ra,oa,uo,_o,cd,Xi,pn$1,So,ft,gt,jK,FK,y5],encapsulation:2,changeDetection:1})}}return a})();function bn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),zD(Yx(2,1,`TITLE_REQUIRED`)))}function pn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),zD(Yx(2,1,`TITLE_TOO_LONG`)))}function hn(a,h){a&1&&(Jc(0,`mat-error`),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),zD(Yx(2,1,`ADDRESS_TOO_LONG`)))}var La=(()=>{class a{constructor(t,e,n,s,b,u){this._fb=t,this._operationService=e,this._snackBarService=n,this._dialogRef=s,this._translateService=b,this.data=u,this.formGroup=this._fb.group({id:u.operation?.id,title:[u.operation?.title||``,[en.required,en.maxLength(255)]],address:[u.operation?.address||``,en.maxLength(255)],firmId:[this.data.firmId]})}submit(){Ua$1(this._translateService.instant(`PLEASE_CHECK_THE_FORM`),this.formGroup,this._snackBarService)||(this.data.operation?.id?this._operationService.update(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`OPERATION_UPDATED`),`success`)}):this._operationService.create(this.formGroup.value).subscribe(()=>{this._dialogRef.close(!0),this._snackBarService.snack(this._translateService.instant(`OPERATION_CREATED`),`success`)}))}close(){this._dialogRef.close()}static{this.ɵfac=function(e){return new(e||a)($(ca),$(nt),$(i),$(w),$(Qm),$($t))}}static{this.ɵcmp=We({type:a,selectors:[[`app-operation-dialog`]],decls:28,vars:29,consts:[[3,`ngSubmit`,`formGroup`],[`mat-dialog-title`,``],[1,`mat-typography`],[`appearance`,`fill`,1,`w-100`,`custom-mat-field`],[`matInput`,``,`formControlName`,`title`,3,`placeholder`],[`matInput`,``,`formControlName`,`address`,3,`placeholder`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``,3,`click`],[`mat-flat-button`,``,`cdkFocusInitial`,``,`color`,`primary`]],template:function(e,n){e&1&&(Jc(0,`form`,0),bl(`ngSubmit`,function(){return n.submit()}),Jc(1,`h2`,1),Lx(2),Kx(3,`translate`),Kx(4,`translate`),Xp(),Jc(5,`mat-dialog-content`,2)(6,`mat-form-field`,3)(7,`mat-label`),Lx(8),Kx(9,`translate`),Xp(),Jc(10,`input`,4),Kx(11,`translate`),BM(),Xp(),Is(12,bn,3,3,`mat-error`),Is(13,pn,3,3,`mat-error`),Xp(),Jc(14,`mat-form-field`,3)(15,`mat-label`),Lx(16),Kx(17,`translate`),Xp(),Jc(18,`input`,5),Kx(19,`translate`),BM(),Xp(),Is(20,hn,3,3,`mat-error`),Xp()(),Jc(21,`mat-dialog-actions`,6)(22,`button`,7),bl(`click`,function(){return n.close()}),Lx(23),Kx(24,`translate`),Xp(),Jc(25,`button`,8),Lx(26),Kx(27,`translate`),Xp()()()),e&2&&(CD(`formGroup`,n.formGroup),bs(2),zD(n.data.operation?Yx(3,13,`EDIT_OPERATION`):Yx(4,15,`OPERATION.ADD`)),bs(6),zD(Yx(9,17,`TITLE`)),bs(2),CD(`placeholder`,Bx(Yx(11,19,`ENTER_OPERATION_TITLE`))),HM(),bs(2),Ss(n.formGroup.get(`title`)?.hasError(`required`)?12:-1),bs(),Ss(n.formGroup.get(`title`)?.hasError(`maxlength`)?13:-1),bs(3),zD(Yx(17,21,`ADDRESS`)),bs(2),CD(`placeholder`,Bx(Yx(19,23,`ENTER_OPERATION_ADDRESS`))),HM(),bs(2),Ss(n.formGroup.get(`address`)?.hasError(`maxlength`)?20:-1),bs(3),zD(Yx(24,25,`CANCEL`)),bs(3),zD(Yx(27,27,`SAVE`)))},dependencies:[Ve$1,Re$1,Be,ze,je,fa$1,sa,ai,ra,oa,uo,_o,cd,Xi,pn$1,So,ft,gt,jK,FK,y5],encapsulation:2,changeDetection:1})}}return a})();function un(a,h){if(a&1){let t=ox();Jc(0,`div`)(1,`div`,21)(2,`div`)(3,`strong`),Lx(4),Xp(),Jc(5,`span`,22),Lx(6),Xp(),Jc(7,`span`,22),Lx(8),Xp()(),Jc(9,`div`)(10,`button`,12),Kx(11,`translate`),Kx(12,`translate`),bl(`click`,function(){let n=vb(t).$implicit,s=ux(2).$implicit,b=ux(2);return yb(b.openContactDialog(s,n))}),Jc(13,`mat-icon`,13),Lx(14,`edit`),Xp()(),Jc(15,`button`,12),Kx(16,`translate`),Kx(17,`translate`),bl(`click`,function(){let n=vb(t).$implicit,s=ux(4);return yb(s.deleteContact(n.id))}),Jc(18,`mat-icon`,13),Lx(19,`delete`),Xp()()()()()}if(a&2){let t=h.$implicit;bs(4),WD(``,t.firstName,` `,t.lastName),bs(2),zD(t.position),bs(2),WD(``,t.email,` | `,t.phone),bs(2),CD(`matTooltip`,Bx(Yx(11,11,`EDIT_CONTACT`))),In(`aria-label`,Yx(12,13,`EDIT_CONTACT`)),bs(5),CD(`matTooltip`,Bx(Yx(16,15,`DELETE_CONTACT`))),In(`aria-label`,Yx(17,17,`DELETE_CONTACT`))}}function _n(a,h){if(a&1&&(Jc(0,`div`),QN(1,un,20,19,`div`,null,YN),Xp()),a&2){let t=ux().$implicit;bs(),XN(t.contacts)}}function fn(a,h){a&1&&(Jc(0,`p`,20),Lx(1),Kx(2,`translate`),Xp()),a&2&&(bs(),zD(Yx(2,1,`NO_CONTACTS`)))}function gn(a,h){if(a&1){let t=ox();Jc(0,`div`,5)(1,`div`,6)(2,`div`,7)(3,`div`)(4,`div`,8)(5,`div`,9)(6,`mat-icon`),Lx(7,`business`),Xp()(),Jc(8,`div`)(9,`mat-card-title`),Lx(10),Xp(),Jc(11,`mat-card-subtitle`,10),Lx(12),Xp()()()(),Jc(13,`div`,11)(14,`button`,12),Kx(15,`translate`),Kx(16,`translate`),bl(`click`,function(){let n=vb(t).$implicit,s=ux(2);return yb(s.openOperationDialog(n))}),Jc(17,`mat-icon`,13),Lx(18,`edit`),Xp()(),Jc(19,`div`,14),Kx(20,`translate`),Kx(21,`translate`),Jc(22,`button`,15),bl(`click`,function(){let n=vb(t).$implicit,s=ux(2);return yb(s.deleteOperation(n.id))}),Jc(23,`mat-icon`,13),Lx(24,`delete`),Xp()()()()(),gl(25,`mat-divider`,16),Jc(26,`div`)(27,`div`,17)(28,`h6`,18),Lx(29),Kx(30,`translate`),Xp(),Jc(31,`button`,19),bl(`click`,function(){let n=vb(t).$implicit,s=ux(2);return yb(s.openContactDialog(n))}),Jc(32,`mat-icon`),Lx(33,`person_add`),Xp(),Lx(34),Kx(35,`translate`),Xp()(),Is(36,_n,3,0,`div`)(37,fn,3,3,`p`,20),Xp()()()}if(a&2){let t=h.$implicit;bs(10),zD(t.title),bs(2),zD(t.address),bs(2),CD(`matTooltip`,Bx(Yx(15,11,`EDIT_OPERATION`))),In(`aria-label`,Yx(16,13,`EDIT_OPERATION`)),bs(5),CD(`matTooltip`,Bx(t.contacts.length>0?Yx(20,15,`CANNOT_DELETE_WITH_CONTACTS`):Yx(21,17,`DELETE_OPERATION`))),bs(3),CD(`disabled`,t.contacts.length>0),bs(7),zD(Yx(30,19,`OPERATION_CONTACTS`)),bs(5),rm(` `,Yx(35,21,`ADD_CONTACT`),` `),bs(2),Ss(t.contacts.length>0?36:37)}}function vn(a,h){if(a&1&&(Jc(0,`div`,4),QN(1,gn,38,23,`div`,5,YN),Xp()),a&2){let t=ux();bs(),XN(t.operations)}}function yn(a,h){a&1&&(Jc(0,`div`,4)(1,`div`,23)(2,`div`,24)(3,`p`,20),Lx(4),Kx(5,`translate`),Xp()()()()),a&2&&(bs(4),zD(Yx(5,1,`NO_OPERATIONS`)))}var Ba=(()=>{class a{constructor(t,e,n,s,b,u){this._operationService=t,this._contactService=e,this._dialog=n,this._snackbarService=s,this._translateService=b,this._route=u,this.operations=[]}ngOnInit(){this.loadOperations()}loadOperations(){this._operationService.getOperationsByFirmId(this._route.parent?.snapshot.paramMap.get(`id`)).subscribe(t=>{this.operations=t})}openOperationDialog(t){this._dialog.open(La,{data:{firmId:this._route.parent?.snapshot.paramMap.get(`id`),operation:t},disableClose:!0}).afterClosed().subscribe(n=>{n&&this.loadOperations()})}openContactDialog(t,e){this._dialog.open(Na,{data:{operationId:t.id,firmId:this._route.parent?.snapshot.paramMap.get(`id`),contact:e},disableClose:!0}).afterClosed().subscribe(s=>{s&&this.loadOperations()})}deleteOperation(t){this._operationService.deleteById(t).subscribe(()=>{this.loadOperations(),this._snackbarService.snack(this._translateService.instant(`OPERATION_DELETE_SUCCESS`),`success`)})}deleteContact(t){this._contactService.deleteById(t).subscribe(()=>{this.loadOperations(),this._snackbarService.snack(this._translateService.instant(`CONTACT_DELETE_SUCCESS`),`success`)})}static{this.ɵfac=function(e){return new(e||a)($(nt),$(oe),$(tt),$(i),$(Qm),$(Rn))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-operation`]],decls:12,vars:7,consts:[[1,`mt-4`],[1,`d-flex`,`align-items-center`,`justify-content-between`],[1,`mb-0`,`text-app-color-theme`],[`mat-stroked-button`,``,`color`,`primary`,1,`my-3`,3,`click`],[1,`row`],[1,`col-lg-6`,`mb-3`],[1,`box`],[1,`d-flex`,`justify-content-between`,`align-items-start`],[1,`d-flex`,`align-items-start`],[`mat-card-avatar`,``,1,`operation-avatar`,`me-2`],[1,`d-block`],[1,`d-flex`,`align-items-center`],[`mat-icon-button`,``,3,`click`,`matTooltip`],[1,`text-theme`],[1,`d-inline-flex`,3,`matTooltip`],[`appShowIfAdmin`,``,`mat-icon-button`,``,3,`click`,`disabled`],[1,`my-3`],[1,`d-flex`,`justify-content-between`,`align-items-center`,`mb-3`],[1,`mb-0`],[`mat-button`,``,`color`,`primary`,3,`click`],[1,`text-muted`],[1,`d-flex`,`justify-content-between`,`align-items-center`,`py-2`],[1,`d-block`,`text-muted`],[1,`col-12`],[1,`text-center`]],template:function(e,n){e&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`mat-card-title`,2),Lx(3),Kx(4,`translate`),Xp(),Jc(5,`a`,3),bl(`click`,function(){return n.openOperationDialog()}),Jc(6,`mat-icon`),Lx(7,`add_circle`),Xp(),Lx(8),Kx(9,`translate`),Xp()(),Is(10,vn,3,0,`div`,4)(11,yn,6,3,`div`,4),Xp()),e&2&&(bs(3),zD(Yx(4,3,`FIRM_OPERATION`)),bs(5),rm(` `,Yx(9,5,`ADD_FIRM_OPERATION`),` `),bs(2),Ss(n.operations.length>0?10:11))},dependencies:[Sc,Cc,kc,Mc,oZ,rZ,jK,FK,KR,Qi,He$1,ti$1,oi,q,y5],encapsulation:2,changeDetection:1})}}return a})();var xn=a=>[`/firm/edit`,a];function Cn(a,h){if(a&1&&(Jc(0,`div`,0)(1,`div`,2)(2,`div`,3)(3,`div`,4)(4,`div`)(5,`mat-card-subtitle`,5),Lx(6),Kx(7,`translate`),Xp(),Jc(8,`p`),Lx(9),Xp()(),Jc(10,`div`,6)(11,`button`,7),Kx(12,`translate`),Kx(13,`translate`),Jc(14,`mat-icon`,8),Lx(15,`edit`),Xp()()()()(),Jc(16,`div`,9)(17,`div`,2)(18,`div`,3)(19,`mat-card-subtitle`,5),Lx(20),Kx(21,`translate`),Xp(),Jc(22,`p`),Lx(23),Xp()(),Jc(24,`div`,3)(25,`mat-card-subtitle`,5),Lx(26),Kx(27,`translate`),Xp(),Jc(28,`p`),Lx(29),Xp()()()(),Jc(30,`div`,9)(31,`div`,2)(32,`div`,3)(33,`mat-card-subtitle`,5),Lx(34),Kx(35,`translate`),Xp(),Jc(36,`p`),Lx(37),Xp()(),Jc(38,`div`,3)(39,`mat-card-subtitle`,5),Lx(40),Kx(41,`translate`),Xp(),Jc(42,`p`),Lx(43),Xp()()()(),Jc(44,`div`,10)(45,`div`,2)(46,`div`,3)(47,`mat-card-subtitle`,5),Lx(48),Kx(49,`translate`),Xp(),Jc(50,`p`),Lx(51),Xp()()()()()()),a&2){let t=ux();bs(6),rm(``,Yx(7,16,`FIRM_TITLE`),`:`),bs(3),zD(t.firm.title),bs(2),CD(`matTooltip`,Bx(Yx(12,18,`EDIT_FIRM`)))(`routerLink`,Wx(32,xn,t.firm.id)),In(`aria-label`,Yx(13,20,`EDIT_FIRM`)),bs(9),rm(``,Yx(21,22,`FIRM_ADDRESS`),`:`),bs(3),zD(t.firm.address||`-`),bs(3),rm(``,Yx(27,24,`FIRM_BUSINESS_ID`),`:`),bs(3),zD(t.firm.businessId||`-`),bs(5),rm(``,Yx(35,26,`FIRM_EMAIL`),`:`),bs(3),zD(t.firm.email||`-`),bs(3),rm(``,Yx(41,28,`FIRM_PHONE`),`:`),bs(3),zD(t.firm.phone||`-`),bs(5),rm(``,Yx(49,30,`NOTE`),`:`),bs(3),zD(t.firm.note||`-`)}}function Tn(a,h){a&1&&(Jc(0,`div`),gl(1,`app-firm-operation`),Xp())}function kn(a,h){a&1&&(Jc(0,`div`,1),gl(1,`mat-spinner`),Xp())}var bo=[{path:``,component:Ia,children:[{path:``,component:(()=>{class a{constructor(t,e){this._route=t,this._firmService=e}ngOnInit(){this.getFirm()}getFirm(){this._firmService.getById(this._route.parent?.snapshot.paramMap.get(`id`)).subscribe(t=>{this.firm=t})}static{this.ɵfac=function(e){return new(e||a)($(Rn),$(Y))}}static{this.ɵcmp=We({type:a,selectors:[[`app-firm-info`]],decls:3,vars:3,consts:[[`appEmptyFields`,``,1,`box`],[1,`spinner-wrap`],[1,`row`],[1,`col-12`],[1,`d-flex`,`justify-content-between`],[1,`mb-1`],[`appShowIfAdmin`,``],[`mat-icon-button`,``,1,`text-app-color-theme`,3,`routerLink`,`matTooltip`],[1,`text-theme`],[1,`col-md-6`],[1,`col-md-12`]],template:function(e,n){e&1&&(Is(0,Cn,52,34,`div`,0),Is(1,Tn,2,0,`div`),Is(2,kn,2,0,`div`,1)),e&2&&(Ss(n.firm?0:-1),bs(),Ss(n.firm?1:-1),bs(),Ss(n.firm?-1:2))},dependencies:[vc,kc,q,KR,Fu,He$1,rZ,Ba,Et,y5],encapsulation:2,changeDetection:1})}}return a})()},{path:`users`,component:Sa}]}];export{bo as FIRM_SHOW_ROUTES};