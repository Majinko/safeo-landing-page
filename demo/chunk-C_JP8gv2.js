import{$t as To,A as En,Br as ml,Ct as O,Ei as vl,En as Yt,Er as kD,Fr as li,Gr as nr,Hn as bs,Hr as nh,I as Gr,J as J$1,Jn as de,Jt as Se,K as In,Lt as Qo,Mi as xD,Ni as xn,Nn as _w,Nr as le,O as De,Ot,P as G9,Pt as QR,Qn as el,Qt as Te,R as H,Rr as lw,U as I$1,V as Hn,Vn as bl,W as ID,Wr as nm,Wt as Re,Xr as oh,Xt as Sw,Yn as dx,Yr as oc,Z as J_,_i as tu,bi as ui$1,br as j,cn as We,d as Ae$1,ei as pt,fn as XD,fr as hh,gi as tr,gr as ie,hi as ti$1,ht as Lt,it as K,ji as x,jn as _6,kn as Zt,kr as ke,li as rm,lr as ge,lt as Kr,m as Bg,nn as V,nr as f,p as B,pi as sh,qn as ch,sr as g,tt as Js,v as C,vn as Xp,vt as Mc,wr as jt,x as Co,xi as v,xr as j9,yi as uh,yt as Ms,z as He,zi as yl,zn as be}from"./chunk-CriTSX_T.js";import{T as Ve,a as En$1,f as Je,g as Mn,l as Ie,n as Ae$2,x as On,y as No}from"./chunk-DnzjziX7.js";import{C as ke$1,T as xe,_ as Ve$1,c as Kn,f as Se$1,h as Ut,n as Fa,o as Ht}from"./main-465LRRQ4.js";var I;(function(E){E.ROAD_VEHICLE=`ROAD_VEHICLE`,E.CONSTRUCTION_MACHINE=`CONSTRUCTION_MACHINE`,E.AGRICULTURAL_MACHINE=`AGRICULTURAL_MACHINE`,E.FORESTRY_MACHINE=`FORESTRY_MACHINE`,E.FORKLIFT=`FORKLIFT`,E.OTHER=`OTHER`})(I||(I={}));var R;(function(E){E.GASOLINE=`GASOLINE`,E.DIESEL=`DIESEL`,E.ELECTRIC=`ELECTRIC`,E.HYBRID=`HYBRID`,E.LPG=`LPG`,E.CNG=`CNG`})(R||(R={}));var _;(function(E){E.FRONT_WHEEL=`FRONT_WHEEL`,E.REAR_WHEEL=`REAR_WHEEL`,E.FOUR_X_FOUR=`FOUR_X_FOUR`,E.SIX_X_SIX=`SIX_X_SIX`,E.EIGHT_X_EIGHT=`EIGHT_X_EIGHT`})(_||(_={}));var J=class{source;option;constructor(ei,t){this.source=ei,this.option=t}};var Jt=new v(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var Gi=(()=>{class n{_changeDetectorRef=f(Kr);_elementRef=f(ie);_defaults=f(Jt);_animationsDisabled=li();_activeOptionChanges=K.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(t){this._color=t,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new be;opened=new be;closed=new be;optionActivated=new be;set classList(t){this._classList=t,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}id=f(uh).getId(`mat-autocomplete-`);inertGroups;constructor(){let t=f(He);this.inertGroups=t?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ch(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){let i=new J(this,t);this.optionSelected.emit(i)}_getPanelAriaLabelledby(t){if(this.ariaLabel)return null;let i=t?t+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:t}_skipPredicate(){return!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`panel`],i=[`*`];function e(a,l){if(a&1&&(tr(0,`div`,1,0),Lt(2),nr()),a&2){let c=l.id,m=dx();Ms(m._classList),Yt(`mat-mdc-autocomplete-visible`,m.showPanel)(`mat-mdc-autocomplete-hidden`,!m.showPanel)(`mat-autocomplete-panel-animations-enabled`,!m._animationsDisabled)(`mat-primary`,m._color===`primary`)(`mat-accent`,m._color===`accent`)(`mat-warn`,m._color===`warn`),xD(`id`,m.id),In(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,m._getPanelAriaLabelledby(c))}}return We({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(l,c,m){if(l&1&&yl(m,ke$1,5)(m,Se$1,5),l&2){let o;nm(o=rm())&&(c.options=o),nm(o=rm())&&(c.optionGroups=o)}},viewQuery:function(l,c){if(l&1&&kD(En,7)(t,5),l&2){let m;nm(m=rm())&&(c.template=m.first),nm(m=rm())&&(c.panel=m.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,Re],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,Re],requireSelection:[2,`requireSelection`,`requireSelection`,Re],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,Re],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Re]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[XD([{provide:xe,useExisting:n}])],ngContentSelectors:i,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(l,c){l&1&&(Gr(),ID(0,e,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})})()}return n})();var Ki=(()=>{class n{elementRef=f(ie);static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,selectors:[[``,`matAutocompleteOrigin`,``]],exportAs:[`matAutocompleteOrigin`]})}return n})();var mi={provide:Ae$2,useExisting:oc(()=>ci),multi:!0};var si=new v(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=f(J$1);return()=>Mn(n)}});var ci=(()=>{class n{_environmentInjector=f(le);_element=f(ie);_injector=f(J$1);_viewContainerRef=f(Ot);_zone=f(B);_changeDetectorRef=f(Kr);_dir=f(QR,{optional:!0});_formField=f(No,{optional:!0,host:!0});_viewportRuler=f(Ve);_scrollStrategy=f(si);_renderer=f(pt);_animationsDisabled=li();_defaults=f(Jt,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new j;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=K.EMPTY;_breakpointObserver=f(sh);_handsetLandscapeSubscription=K.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new j;_overlayPanelClass=tu(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Co(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ge(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ge(()=>this._overlayAttached)):I$1()).pipe(O(t=>t instanceof Ve$1?t:null))}optionSelections=Hn(()=>{let t=this.autocomplete?this.autocomplete.options:null;return t?t.changes.pipe(To(t),ke(()=>Co(...t.map(i=>i.onSelectionChange)))):this._initialized.pipe(ke(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new x(t=>{let i=a=>{let l=jt(a),c=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,m=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&l!==this._element.nativeElement&&!this._hasFocus()&&(!c||!c.contains(l))&&(!m||!m.contains(l))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(l)&&t.next(a)},e=[this._renderer.listen(`document`,`click`,i),this._renderer.listen(`document`,`auxclick`,i),this._renderer.listen(`document`,`touchend`,i)];return()=>{e.forEach(a=>a())}})}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){let i=t,e=i.keyCode,a=lw(i);if(e===27&&!a&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&e===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let l=this.autocomplete._keyManager.activeItem,c=e===38||e===40;e===9||c&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):c&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(c||this.autocomplete._keyManager.activeItem!==l)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let i=t.target,e=i.value;if(i.type===`number`&&(e=e==``?null:parseFloat(e)),this._previousValue!==e){if(this._previousValue=e,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(e),!e)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(l=>l.selected);if(a){let l=this._getDisplayValue(a.value);e!==l&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return nh()===this._element.nativeElement}_floatLabel(t=!1){this._formField&&this._formField.floatLabel===`auto`&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let t=new x(e=>{bs(()=>{e.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(De(()=>this._positionStrategy.reapplyLastPosition()),Bg(0))??I$1();return Co(t,i).pipe(ke(()=>this._zone.run(()=>{let e=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),e!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Se(1)).subscribe(e=>this._setValueAndClose(e))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(t){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(t):t}_assignOptionValue(t){let i=this._getDisplayValue(t);t??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??``)}_updateNativeInputValue(t){let i=this._formField?._control;i?Mc(i.value)?i.value.set(t):i.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){let i=this.autocomplete,e=t?t.source:this._pendingAutoselectedOption;e?(this._clearPreviousSelectedOption(e),this._assignOptionValue(e.value),this._onChange(e.value),i._emitSelectEvent(e),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(t,i){this.autocomplete?.options?.forEach(e=>{e!==t&&e.selected&&e.deselect(i)})}_openPanelInternal(t=this._element.nativeElement.value){this._attachOverlay(t),this._floatLabel()}_attachOverlay(t){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Ie(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=On(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(j9.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=t,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let e=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&e!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=t=>{(t.keyCode===27&&!lw(t)||t.keyCode===38&&lw(t,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),t.stopPropagation(),t.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let t=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=t.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=t.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Je({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let t=En$1(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){let i=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],e=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:e},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:e}],l;this.position===`above`?l=a:this.position===`below`?l=i:l=[...i,...a],t.withPositions(l)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let t=this.autocomplete;if(t.autoActiveFirstOption){let i=-1;for(let e=0;e<t.options.length;e++)if(!t.options.get(e).disabled){i=e;break}t._keyManager.setActiveItem(i)}else t._keyManager.setActiveItem(-1)}_canOpen(){let t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this.autocompleteDisabled}_scrollToOption(t){let i=this.autocomplete,e=Ht(t,i.options,i.optionGroups);if(t===0&&e===1)i._setScrollTop(0);else if(i.panel){let a=i.options.toArray()[t];if(a){let l=a._getHostElement(),c=Ut(l.offsetTop,l.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(c)}}}static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(i,e){i&1&&vl(`focusin`,function(){return e._handleFocus()})(`blur`,function(){return e._onTouched()})(`input`,function(l){return e._handleInput(l)})(`keydown`,function(l){return e._handleKeydown(l)})(`click`,function(){return e._handleClick()}),i&2&&In(`autocomplete`,e.autocompleteAttribute)(`role`,e.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,e.autocompleteDisabled?null:`list`)(`aria-activedescendant`,e.panelOpen&&e.activeOption?e.activeOption.id:null)(`aria-expanded`,e.autocompleteDisabled?null:e.panelOpen.toString())(`aria-controls`,e.autocompleteDisabled||!e.panelOpen?null:e.autocomplete?.id)(`aria-haspopup`,e.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,Re]},exportAs:[`matAutocompleteTrigger`],features:[XD([mi]),Zt]})}return n})();var oi=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=G9(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=G9(t)}_inset=!1;static ɵfac=function(i){return new(i||n)};static ɵcmp=We({type:n,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(i,e){i&2&&(In(`aria-orientation`,e.vertical?`vertical`:`horizontal`),Yt(`mat-divider-vertical`,e.vertical)(`mat-divider-horizontal`,!e.vertical)(`mat-divider-inset`,e.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(i,e){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var ti=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ae$1({type:n});static ɵinj=Te({imports:[ui$1]})}return n})();var ri=new v(`ListOption`);var di=(()=>{class n{_elementRef=f(ie);static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return n})();var hi=(()=>{class n{_elementRef=f(ie);static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return n})();var pi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return n})();var ii=(()=>{class n{_listOption=f(ri,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,hostVars:4,hostBindings:function(i,e){i&2&&Yt(`mdc-list-item__start`,e._isAlignedAtStart())(`mdc-list-item__end`,!e._isAlignedAtStart())}})}return n})();var gi=(()=>{class n extends ii{static ɵfac=(()=>{let t;return function(e){return(t||(t=Qo(n)))(e||n)}})();static ɵdir=de({type:n,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[ti$1]})}return n})();var _i=(()=>{class n extends ii{static ɵfac=(()=>{let t;return function(e){return(t||(t=Qo(n)))(e||n)}})();static ɵdir=de({type:n,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[ti$1]})}return n})();var bi=new v(`MAT_LIST_CONFIG`);var tt=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=G9(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(G9(t))}_disabled=H(!1);_defaultOptions=f(bi,{optional:!0});static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,hostVars:1,hostBindings:function(i,e){i&2&&In(`aria-disabled`,e.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var ui=(()=>{class n{_elementRef=f(ie);_ngZone=f(B);_listBase=f(tt,{optional:!0});_platform=f(He);_hostElement;_isButtonElement;_noopAnimations=li();_avatars;_icons;set lines(t){this._explicitLines=oh(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=G9(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(G9(t))}_disabled=H(!1);_subscriptions=new K;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){f(xn).load(_w);let t=f(hh,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new Js(this,this._ngZone,this._hostElement,this._platform,f(J$1)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Co(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),e=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,i<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,i<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,i===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;e.classList.toggle(`mdc-list-item__primary-text`,a),e.classList.toggle(`mdc-list-item__secondary-text`,!a)}else e.classList.remove(`mdc-list-item__primary-text`),e.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(i){return new(i||n)};static ɵdir=de({type:n,contentQueries:function(i,e,a){if(i&1&&yl(a,gi,4)(a,_i,4),i&2){let l;nm(l=rm())&&(e._avatars=l),nm(l=rm())&&(e._icons=l)}},hostVars:4,hostBindings:function(i,e){i&2&&(In(`aria-disabled`,e.disabled)(`disabled`,e._isButtonElement&&e.disabled||null),Yt(`mdc-list-item--disabled`,e.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Oe=(()=>{class n extends tt{static ɵfac=(()=>{let t;return function(e){return(t||(t=Qo(n)))(e||n)}})();static ɵcmp=(function(){return We({type:n,selectors:[[`mat-list`]],hostAttrs:[1,`mat-mdc-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matList`],features:[XD([{provide:tt,useExisting:n}]),ti$1],ngContentSelectors:[`*`],decls:1,vars:0,template:function(e,a){e&1&&(Gr(),Lt(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2})})()}return n})();var Ae=(()=>{class n extends ui{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=G9(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let t;return function(e){return(t||(t=Qo(n)))(e||n)}})();static ɵcmp=(function(){let t=[`unscopedContent`],i=[`text`],e=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];return We({type:n,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(c,m,o){if(c&1&&yl(o,hi,5)(o,di,5)(o,pi,5),c&2){let f;nm(f=rm())&&(m._lines=f),nm(f=rm())&&(m._titles=f),nm(f=rm())&&(m._meta=f)}},viewQuery:function(c,m){if(c&1&&kD(t,5)(i,5),c&2){let o;nm(o=rm())&&(m._unscopedContent=o.first),nm(o=rm())&&(m._itemText=o.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(c,m){c&2&&(In(`aria-current`,m._getAriaCurrent()),Yt(`mdc-list-item--activated`,m.activated)(`mdc-list-item--with-leading-avatar`,m._avatars.length!==0)(`mdc-list-item--with-leading-icon`,m._icons.length!==0)(`mdc-list-item--with-trailing-meta`,m._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,m._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,m._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[ti$1],ngContentSelectors:[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`],decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(c,m){c&1&&(Gr(e),Lt(0),el(1,`span`,1),Lt(2,1),Lt(3,2),el(4,`span`,2,0),vl(`cdkObserveContent`,function(){return m._updateItemLines(!0)}),Lt(6,3),Xp()(),Lt(7,4),Lt(8,5),bl(9,`div`,3))},dependencies:[_6],encapsulation:2})})()}return n})();var Le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ae$1({type:n});static ɵinj=Te({imports:[J_,Sw,Kn,ui$1,ti]})}return n})();var m=(()=>{class n{constructor(t,e){this.httpClient=t,this.apiUrl=e,this.pageIndex=0,this.pageSize=15,this._selectedIds=new Set}getSelectedIds(){return this._selectedIds}setSelectedIds(t){this._selectedIds=new Set(t)}clearSelectedIds(){this._selectedIds.clear()}getById(t){return this.httpClient.get(`${this.apiUrl}/${t}`)}update(t){return this.httpClient.put(`${this.apiUrl}/update`,t)}updateUuid(t,e){return this.httpClient.put(`${this.apiUrl}/update/${t}`,e)}saveWithFile(t,e,r,i=!0){let a=this.createFormData(t,r,e),s=i?`${this.apiUrl}/create`:`${this.apiUrl}/update`;return this.httpClient.post(s,a)}saveWithFiles(t,e,r,i=!0){let a=this.createFormData(t,r,null,e),s=i?`${this.apiUrl}/create`:`${this.apiUrl}/update`;return i?this.httpClient.post(s,a):this.httpClient.put(s,a)}create(t){return this.httpClient.post(`${this.apiUrl}/create`,t)}paginate(t,e,r){let i=Fa(V(g({},r),{pageNumber:t,pageSize:e}));return this.httpClient.get(`${this.apiUrl}`,{params:i})}findAll(){return this.httpClient.get(`${this.apiUrl}/findAll`)}deleteById(t){return this.httpClient.delete(`${this.apiUrl}/delete/${t}`)}createFormData(t,e,r,i){let a=new FormData;if(r&&a.append(`file`,r,r.name),i&&i.length>0)for(let s=0;s<i.length;s++)a.append(`files`,i[s],i[s].name);return a.append(t,new Blob([JSON.stringify(e)],{type:`application/json`})),a}static{this.ɵfac=function(e){ml()}}static{this.ɵprov=C({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();export{Le as a,ci as c,oi as d,pi as f,_ as g,R as h,Ki as i,di as l,I as m,Ae as n,Oe as o,ti as p,Gi as r,_i as s,m as t,hi as u};