import{$ as Jp,$n as em,Ai as wm,An as Zx,C as D5,Ct as O,D as Db,Di as vs,Ei as vl,En as Yt$1,Er as kD,Et as Ob,Fn as aK,Fr as li,I as Gr,Ir as ln,Jr as oZ,K as In,L as Gx,Mi as xD,Ni as xn,Nn as _w,Nt as QN,Or as kb,Qn as el,Qr as om,R as H,Ri as yb,S as Cs,Sn as Xx,Sr as jK,U as I,Ur as ni,Vn as bl,Vt as Qx,Wr as nm,Wt as Re,X as JN,Yn as dx,Yr as oc$1,Yt as Ss,Zt as TD,cn as We,fn as XD,gn as Xm,gr as ie,hi as ti,ht as Lt,jt as Px,ki as wD,kn as Zt,li as rm,ln as Wl,lt as Kr,mn as XN,n as $M,nn as V,nr as f,on as Vx,ot as KR,p as B,pr as hx,qt as S,rn as VM,sn as WD,sr as g,t as $,v as C,vi as uA,vn as Xp,xi as v,yi as uh,yr as ix,yt as Ms,zn as be}from"./chunk-CriTSX_T.js";import{B as en,C as So,F as ca,G as ho,N as ai,O as Xi,Q as pn,V as fa,W as gn,X as oa,_ as Mo,et as ra,it as ue,j as _o,n as Ae,nt as td,ot as uo,rt as ua,tt as sa}from"./chunk-DnzjziX7.js";import{a as je,c as ze,n as Be,r as Re$1,s as w,t as $t$1}from"./chunk-CH4pb-dP.js";import{C as ke,D as i,S as ja,a as He,d as Qt$1,m as Ua,t as Ba}from"./main-XK6D2BFM.js";import{i as gt,o as qe,t as Et}from"./chunk-SzPjdHkR.js";import{g as m}from"./chunk-CNNAnjFx.js";import{a as Lt$1,c as Pt,d as zt,i as It,l as Vt$1,n as Bt,o as Nt,r as Ht$1,s as Ot,t as At,u as jt$1}from"./chunk-DhHY86GC.js";import{_ as xa,a as Pr,d as mt,g as w$1,i as Na,l as cn,n as Dn,o as Yr,p as pr,t as $$1,u as mr}from"./chunk-Ds2ve_5Y.js";import{t as G}from"./chunk-CmUAkaeT.js";var W={SAFETY_TRAINING:{periodicity:36},SAFETY_TRAINING_AND_FIRE_SAFETY_TRAINING:{periodicity:24},WORK_AT_HEIGHTS:{periodicity:12},PRESSURE_EQUIPMENT_OPERATION:{periodicity:36},GAS_EQUIPMENT_OPERATION:{periodicity:36},LIFTING_EQUIPMENT_OPERATION:{periodicity:36},FIRE_SAFETY_TRAINING:{periodicity:24},FIRE_PATROL_TRAINING:{periodicity:12},FIRE_ASSISTANCE_PATROL_TRAINING:{periodicity:12},NON_WORKING_HOURS:{periodicity:12},FIRST_AID_COURSE:{periodicity:36},WELDER:{periodicity:24},REVISION_TECHNICIAN_PRESSURE:{periodicity:60},REVISION_TECHNICIAN_LIFTING:{periodicity:60},REVISION_TECHNICIAN_GAS:{periodicity:60},REVISION_TECHNICIAN_ELECTRICAL:{periodicity:60},ELECTROTECHNICIAN_MANAGER:{periodicity:60},INDEPENDENT_ELECTROTECHNICIAN:{periodicity:60},ELECTROTECHNICIAN:{periodicity:60},BOILER_OPERATION:{periodicity:60},BOILER_REPAIR:{periodicity:60},CRANE_OPERATION:{periodicity:60},MOBILE_PLATFORM_OPERATION:{periodicity:60},MOBILE_PLATFORM_OPERATION_NO_SPZ:{periodicity:36},ELEVATOR_REPAIR:{periodicity:60},LOAD_BINDER:{periodicity:36},GAS_VTZ_OPERATION:{periodicity:60},GAS_VTZ_REPAIR:{periodicity:60},FORKLIFT_OPERATOR:{periodicity:24},WORK_AT_HEIGHTS_CLIMBING:{periodicity:36},SCAFFOLDER:{periodicity:36},CONSTRUCTION_MACHINERY:{periodicity:36},AGRICULTURAL_MACHINERY:{periodicity:36},FORESTRY_MACHINERY:{periodicity:36},CHAINSAW_OPERATOR:{periodicity:36},CHAINSAW_OPERATOR_OTHER_ACTIVITIES:{periodicity:36},CUSTOM_TRAINING:{periodicity:0}};var te={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Wt=new v(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>te});var p=(function(t){return t[t.Init=0]=`Init`,t[t.Checked=1]=`Checked`,t[t.Unchecked=2]=`Unchecked`,t[t.Indeterminate=3]=`Indeterminate`,t})(p||{});var ce=class{source;checked};var Vt=(()=>{class t{_elementRef=f(ie);_changeDetectorRef=f(Kr);_ngZone=f(B);_animationsDisabled=li();_options=f(Wt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let a=new ce;return a.source=this,a.checked=e,a}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new be;indeterminateChange=new be;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=p.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){f(xn).load(_w);let e=f(new ni(`tabindex`),{optional:!0});this._options=this._options||te,this.color=this._options.color||te.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=f(uh).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let a=e!=this._indeterminate();this._indeterminate.set(e),a&&(e?this._transitionCheckState(p.Indeterminate):this._transitionCheckState(this.checked?p.Checked:p.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=H(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let a=this._currentCheckState,n=this._getAnimationTargetElement();if(!(a===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let s=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(s)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?p.Checked:p.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,a){if(this._animationsDisabled)return``;switch(e){case p.Init:if(a===p.Checked)return this._animationClasses.uncheckedToChecked;if(a==p.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case p.Unchecked:return a===p.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case p.Checked:return a===p.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case p.Indeterminate:return a===p.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let a=this._inputElement;a&&(a.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){let e=[`input`];return We({type:t,selectors:[[`mat-checkbox`]],viewQuery:function(s,r){if(s&1&&kD(e,5),s&2){let v;nm(v=rm())&&(r._inputElement=v.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(s,r){s&2&&(xD(`id`,r.id),In(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Ms(r.color?`mat-`+r.color:`mat-accent`),Yt$1(`_mat-animation-noopable`,r._animationsDisabled)(`mdc-checkbox--disabled`,r.disabled)(`mat-mdc-checkbox-disabled`,r.disabled)(`mat-mdc-checkbox-checked`,r.checked)(`mat-mdc-checkbox-disabled-interactive`,r.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Re],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Re],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Re],tabIndex:[2,`tabIndex`,`tabIndex`,n=>n==null?void 0:wm(n)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Re],checked:[2,`checked`,`checked`,Re],disabled:[2,`disabled`,`disabled`,Re],indeterminate:[2,`indeterminate`,`indeterminate`,Re]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[XD([{provide:Ae,useExisting:oc$1(()=>t),multi:!0},{provide:ue,useExisting:t,multi:!0}]),Zt],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(s,r){if(s&1&&(Gr(),el(0,`label`,3),vl(`click`,function(L){return r._preventBubblingFromLabel(L)}),el(1,`span`,4,0),bl(3,`span`,5),el(4,`input`,6,1),vl(`blur`,function(){return r._onBlur()})(`click`,function(){return r._onInputClick()})(`change`,function(L){return r._onInteractionEvent(L)}),Xp(),bl(6,`span`,7),el(7,`span`,8),Ob(),el(8,`svg`,9),bl(9,`path`,10),Xp(),kb(),bl(10,`span`,11),Xp(),bl(11,`span`,12),Xp(),el(12,`span`,13,2),Lt(14),Xp()()),s&2){let v=hx(2);TD(`labelPosition`,r.labelPosition)(`for`,r.inputId),vs(4),Yt$1(`mdc-checkbox--selected`,r.checked),TD(`checked`,r.checked)(`indeterminate`,r.indeterminate)(`disabled`,r.disabled&&!r.disabledInteractive)(`id`,r.inputId)(`required`,r.required)(`tabIndex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex),In(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-checked`,r.indeterminate?`mixed`:null)(`aria-controls`,r.ariaControls)(`aria-disabled`,r.disabled&&r.disabledInteractive?!0:null)(`aria-expanded`,r.ariaExpanded)(`aria-owns`,r.ariaOwns)(`name`,r.name)(`value`,r.value),vs(7),TD(`matRippleTrigger`,v)(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleCentered`,!0)}},dependencies:[aK,cn],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return t})();var Z;(function(t){t.EMPTY_EMPLOYEES=`emptyEmployees`})(Z||(Z={}));var Ht=(()=>{class t extends m{constructor(e){super(e,`${td.backendUrl}/userTraining`)}findByUserId(e){return this.httpClient.get(`${this.apiUrl}/${e}`).pipe(O(a=>a.map(n=>(n.isWarning=ja(n.validTo),n))))}markResolved(e){return this.httpClient.get(`${this.apiUrl}/markResolved/${e}`)}print(e,a){return this.httpClient.get(`${this.apiUrl}/printCart/${e}/${a}`,{responseType:`blob`})}static{this.ɵfac=function(a){return new(a||t)(S(Wl))}}static{this.ɵprov=C({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var Q=class{constructor(d){this._dialogRef=d,this.users=[],this.failedUserIds=[]}deleteBulkUser(d){this.users=this.users.filter(e=>e.id!==d),this.users.length===0&&this._dialogRef.close(Z.EMPTY_EMPLOYEES)}};function Qt(t,d){t&1&&(el(0,`th`,15),Px(1),Zx(2,`translate`),Xp()),t&2&&(vs(),WD(Qx(2,1,`EMPLOYEE_PERSONAL_NUMBER`)))}function Jt(t,d){t&1&&(bl(0,`mat-icon`,18),Zx(1,`translate`)),t&2&&TD(`matTooltip`,Vx(Qx(1,2,`USER_TRAINING.EXIST`)))}function ec(t,d){if(t&1&&(el(0,`td`,16)(1,`div`,17),Ss(2,Jt,2,4,`mat-icon`,18),Px(3),Xp()()),t&2){let e=d.$implicit,a=dx();vs(2),Cs(a.failedUserIds.includes(e.id)?2:-1),vs(),om(` `,e.personalNumber??`-`,` `)}}function tc(t,d){t&1&&(el(0,`th`,15),Px(1),Zx(2,`translate`),Xp()),t&2&&(vs(),WD(Qx(2,1,`EMPLOYEE_FIRST_NAME`)))}function cc(t,d){if(t&1&&(el(0,`td`,16),Px(1),Xp()),t&2){let e=d.$implicit;vs(),WD(e.firstName)}}function nc(t,d){t&1&&(el(0,`th`,15),Px(1),Zx(2,`translate`),Xp()),t&2&&(vs(),WD(Qx(2,1,`EMPLOYEE_LAST_NAME`)))}function ac(t,d){if(t&1&&(el(0,`td`,16),Px(1),Xp()),t&2){let e=d.$implicit;vs(),WD(e.lastName)}}function ic(t,d){t&1&&(el(0,`th`,15),Px(1),Zx(2,`translate`),Xp()),t&2&&(vs(),WD(Qx(2,1,`EMPLOYEE_WORK_POSITION`)))}function oc(t,d){if(t&1&&(el(0,`td`,16),Px(1),Xp()),t&2){let e=d.$implicit;vs(),WD(e.workPosition??`-`)}}function rc(t,d){t&1&&(el(0,`th`,15),Px(1),Zx(2,`translate`),Xp()),t&2&&(vs(),WD(Qx(2,1,`EMPLOYEE_START_WORK_DATE`)))}function dc(t,d){if(t&1&&(el(0,`td`,16),Px(1),Zx(2,`date`),Xp()),t&2){let e=d.$implicit;vs(),WD(Xx(2,1,e.startWorkDate,`dd.MM.yyyy`)??`-`)}}function mc(t,d){t&1&&(el(0,`th`,15),Px(1),Zx(2,`translate`),Xp()),t&2&&(vs(),WD(Qx(2,1,`EMPLOYEE_EMAIL`)))}function lc(t,d){if(t&1&&(el(0,`td`,16),Px(1),Xp()),t&2){let e=d.$implicit;vs(),WD(e.email)}}function sc(t,d){t&1&&bl(0,`th`,15)}function bc(t,d){if(t&1){let e=ix();el(0,`td`,19)(1,`button`,20),Zx(2,`translate`),Zx(3,`translate`),vl(`click`,function(){let n=yb(e).$implicit,s=dx();return Db(s.delete(n.id))}),el(4,`mat-icon`,21),Px(5,`delete`),Xp()()()}t&2&&(vs(),TD(`matTooltip`,Vx(Qx(2,3,`DELETE_EMPLOYEE`))),In(`aria-label`,Qx(3,5,`DELETE_EMPLOYEE`)))}function hc(t,d){t&1&&bl(0,`tr`,22)}function kc(t,d){t&1&&bl(0,`tr`,23)}function pc(t,d){if(t&1&&(el(0,`tr`,24)(1,`td`,25)(2,`div`,26),Px(3),Zx(4,`translate`),Xp()()()),t&2){let e=dx();vs(),In(`colspan`,e.displayedColumns.length),vs(2),WD(Qx(4,2,`EMPTY.SHORT`))}}var Yt=(()=>{class t{constructor(){this.users=[],this.failedUserIds=[],this.deleteUserEmit=new be,this.displayedColumns=[`personalNumber`,`firstName`,`lastName`,`email`,`action`]}delete(e){this.deleteUserEmit.emit(e)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=We({type:t,selectors:[[`app-bulk-table-user`]],inputs:{users:`users`,failedUserIds:`failedUserIds`},outputs:{deleteUserEmit:`deleteUserEmit`},decls:26,vars:3,consts:[[1,`table-wrap`],[`mat-table`,``,`matSort`,``,`matSortActive`,`created`,`matSortDisableClear`,``,`matSortDirection`,`desc`,1,`example-table`,3,`dataSource`],[`matColumnDef`,`personalNumber`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`firstName`],[`matColumnDef`,`lastName`],[`matColumnDef`,`workPosition`],[`matColumnDef`,`startWorkDate`],[`matColumnDef`,`email`],[`matColumnDef`,`action`],[`mat-cell`,``,`class`,`w-s-n`,4,`matCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,`class`,`cursor-pointer detail-row element-row`,4,`matRowDef`,`matRowDefColumns`],[`class`,`mat-mdc-row no-data-row`,4,`matNoDataRow`],[`mat-header-cell`,``],[`mat-cell`,``],[1,`d-flex`,`align-items-center`],[`color`,`warn`,`fontIcon`,`info`,1,`me-2`,3,`matTooltip`],[`mat-cell`,``,1,`w-s-n`],[`mat-icon-button`,``,1,`invisible`,`text-app-color-theme`,3,`click`,`matTooltip`],[1,`text-theme`],[`mat-header-row`,``],[`mat-row`,``,1,`cursor-pointer`,`detail-row`,`element-row`],[1,`mat-mdc-row`,`no-data-row`],[1,`mat-mdc-cell`],[1,`empty-state`,`compact`]],template:function(a,n){a&1&&(el(0,`div`,0)(1,`table`,1),Jp(2,2),wD(3,Qt,3,3,`th`,3)(4,ec,4,2,`td`,4),em(),Jp(5,5),wD(6,tc,3,3,`th`,3)(7,cc,2,1,`td`,4),em(),Jp(8,6),wD(9,nc,3,3,`th`,3)(10,ac,2,1,`td`,4),em(),Jp(11,7),wD(12,ic,3,3,`th`,3)(13,oc,2,1,`td`,4),em(),Jp(14,8),wD(15,rc,3,3,`th`,3)(16,dc,3,4,`td`,4),em(),Jp(17,9),wD(18,mc,3,3,`th`,3)(19,lc,2,1,`td`,4),em(),Jp(20,10),wD(21,sc,1,0,`th`,3)(22,bc,6,7,`td`,11),em(),wD(23,hc,1,0,`tr`,12)(24,kc,1,0,`tr`,13)(25,pc,5,4,`tr`,14),Xp()()),a&2&&(vs(),TD(`dataSource`,n.users),vs(22),TD(`matHeaderRowDef`,n.displayedColumns),vs(),TD(`matRowDefColumns`,n.displayedColumns))},dependencies:[jt$1,Nt,G,At,It,Ht$1,Ot,Pt,oZ,He,KR,zt,Bt,Lt$1,Vt$1,uA,D5],encapsulation:2,changeDetection:1})}}return t})();var jt=(()=>{class t{constructor(e){this._httpClient=e,this.apiUrl=`${td.backendUrl}/bulk`}employeeTraining(e,a,n){let s=new FormData;if(n&&n.length>0)for(let r of n)s.append(`files`,r,r.name);return s.append(`userIds`,new Blob([JSON.stringify(e)],{type:`application/json`})),s.append(`userTraining`,new Blob([JSON.stringify(a)],{type:`application/json`})),this._httpClient.post(`${this.apiUrl}/employeeTraining`,s)}static{this.ɵfac=function(a){return new(a||t)(S(Wl))}}static{this.ɵprov=C({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var qt=t=>({MIN:t});var $t=t=>({MAX:t});function uc(t,d){t&1&&(el(0,`div`,4),bl(1,`mat-spinner`),Xp())}function _c(t,d){if(t&1&&(el(0,`mat-option`,10),Px(1),Zx(2,`translate`),Xp()),t&2){let e=d.$implicit;TD(`value`,e.type),vs(),om(` `,Qx(2,2,e.type),` `)}}function fc(t,d){if(t&1){let e=ix();el(0,`mat-checkbox`,28),VM(),vl(`change`,function(n){yb(e);let s=dx();return Db(s.setIsRefreshingPeriodicity(n))}),Px(1),Zx(2,`translate`),Xp()}t&2&&($M(),vs(),om(` `,Qx(2,1,`IS_AOP`),` `))}function vc(t,d){t&1&&(el(0,`div`,12)(1,`mat-form-field`,8)(2,`mat-label`),Px(3),Zx(4,`translate`),Xp(),el(5,`input`,29),Zx(6,`translate`),VM(),Xp()()()),t&2&&(vs(3),WD(Qx(4,3,`USER_TRAINING.CUSTOM_TITLE`)),vs(2),TD(`placeholder`,Vx(Qx(6,5,`USER_TRAINING.CUSTOM_TITLE`))),$M())}function gc(t,d){if(t&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),t&2){let e=dx();vs(),om(` `,Xx(2,1,`GENERAL.MIN_VALUE`,Gx(4,qt,e.formGroup.get(`periodicity`)?.errors?.min?.min)),` `)}}function yc(t,d){if(t&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),t&2){let e=dx();vs(),om(` `,Xx(2,1,`GENERAL.MAX_VALUE`,Gx(4,$t,e.formGroup.get(`periodicity`)?.errors?.max?.max)),` `)}}function Cc(t,d){if(t&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),t&2){let e=dx();vs(),om(` `,Xx(2,1,`GENERAL.MIN_VALUE`,Gx(4,qt,e.formGroup.get(`price`)?.errors?.min?.min)),` `)}}function Ec(t,d){if(t&1&&(el(0,`mat-error`),Px(1),Zx(2,`translate`),Xp()),t&2){let e=dx();vs(),om(` `,Xx(2,1,`GENERAL.MAX_VALUE`,Gx(4,$t,e.formGroup.get(`price`)?.errors?.max?.max)),` `)}}function Ic(t,d){if(t&1&&(el(0,`div`,19),bl(1,`app-simple-file-manager`,30),Xp()),t&2){let e=dx();vs(),TD(`fileAbleId`,e.data.training.id)}}function Tc(t,d){if(t&1){let e=ix();el(0,`div`,24)(1,`p`,31),Px(2),Zx(3,`translate`),Xp(),el(4,`app-bulk-table-user`,32),vl(`deleteUserEmit`,function(n){yb(e);let s=dx();return Db(s.deleteBulkUser(n))}),Xp()()}if(t&2){let e=dx();vs(2),WD(Qx(3,3,`BULK_ACTION.EMPLOYEES.FOR_EMPLOYEE`)),vs(2),TD(`users`,e.users)(`failedUserIds`,e.failedUserIds)}}var Fn=(()=>{class t extends Q{constructor(e,a,n,s,r,v,L,Xt){super(n),this.data=e,this.fb=a,this._dialogRef=n,this.userTrainingService=s,this.snackbarService=r,this._translateService=v,this._uploadHelper=L,this._bulkActionService=Xt,this.isLoading=!1,this.refresherTrainingTypes=[`LOAD_BINDER`,`FORKLIFT_OPERATION`,`WORK_AT_HEIGHTS_CLIMBING`,`SCAFFOLDER`,`CONSTRUCTION_MACHINERY`,`AGRICULTURAL_MACHINERY`,`FORESTRY_MACHINERY`,`CHAINSAW_OPERATOR`,`CHAINSAW_OPERATOR_OTHER_ACTIVITIES`,`FORKLIFT_OPERATOR`],this.userTrainingMapEntries=[],this.currentDate=new Date,this.users=this.data.users??[],this.formGroup=this.fb.group(V(g({id:[e.training?.id||null]},this.users.length>0?{}:{appUserId:[e.appUserId,[en.required]]}),{trainingType:[e.training?.trainingType||null,[en.required]],periodicity:[e.training?.periodicity||null,[en.required,en.min(0),en.max(1e3)]],validFrom:[e.training?.validFrom||new Date,en.required],note:[e.training?.note||``,en.maxLength(500)],price:[e.training?.price||null,[en.min(0),en.max(1e5)]],customTitle:[e.training?.customTitle||null],isRefresherTraining:[null]}))}ngOnInit(){this.initializeTrainingTypes(),this.setupFormListeners()}initializeTrainingTypes(){this.userTrainingMapEntries=Object.keys(W).map(e=>({type:e,periodicity:W[e].periodicity}))}setupFormListeners(){this.formGroup.get(`trainingType`)?.valueChanges.subscribe(e=>this.updatePeriodicity(e))}updatePeriodicity(e){let a=W[e],n=this.formGroup.get(`periodicity`);a?n?.setValue(a.periodicity):n?.reset()}setIsRefreshingPeriodicity(e){let a=this.formGroup.get(`periodicity`);e.checked?a?.setValue(60):this.updatePeriodicity(this.formGroup.get(`trainingType`)?.value)}submit(){if(Ua(this._translateService.instant(`PLEASE_CHECK_THE_FORM`),this.formGroup,this.snackbarService))return;let e=this.formGroup.getRawValue();if(this.isLoading=!0,this.users.length>0){this.storeBulkAction();return}this.data.training?.id?this.userTrainingService.saveWithFiles(`userTraining`,this._uploadHelper.files,e,!1).subscribe({next:()=>{this.isLoading=!1,this._uploadHelper.resetFile(),this._dialogRef.close(!0),this.snackbarService.snack(this._translateService.instant(`TRAINING_UPDATED_SUCCESS`),`success`)},error:()=>{this.isLoading=!1}}):this.userTrainingService.saveWithFiles(`userTraining`,this._uploadHelper.files,e).subscribe({next:()=>{this.isLoading=!1,this._uploadHelper.resetFile(),this._dialogRef.close(!0),this.snackbarService.snack(this._translateService.instant(`TRAINING_CREATED_SUCCESS`),`success`)},error:()=>{this.isLoading=!1}})}storeBulkAction(){let e=this.formGroup.getRawValue(),a=this.users.map(n=>n.id);this._bulkActionService.employeeTraining(a,e,this._uploadHelper.files).pipe(ln(n=>(this.isLoading=!1,I(null)))).subscribe(n=>{this.isLoading=!1,n&&(this.failedUserIds=n??[],this.failedUserIds.length>0?this.snackbarService.error(this._translateService.instant(`BULK_ACTION.EMPLOYEES.FAILED_DUPLICATES`)):(this._dialogRef.close(),this.snackbarService.snack(this._translateService.instant(`BULK_ACTION.EMPLOYEES.CREATED_SUCCESS`),`success`)))})}static{this.ɵfac=function(a){return new(a||t)($($t$1),$(ca),$(w),$(Ht),$(i),$(Xm),$(Yr),$(jt))}}static{this.ɵcmp=We({type:t,selectors:[[`app-user-training-dialog`]],features:[XD([{provide:w$1,useClass:Dn,deps:[mt,Na]},{provide:Na,useValue:{useUtc:!0}},{provide:$$1,useValue:Ba}]),ti],decls:64,vars:45,consts:[[`picker`,``],[3,`ngSubmit`,`formGroup`],[`mat-dialog-title`,``],[1,`mat-typography`],[1,`spinner-wrap`],[1,`row`,`mt-3`],[1,`col-md-4`],[1,`d-flex`,`align-items-center`],[`appearance`,`fill`,1,`w-100`,`custom-mat-field`],[`formControlName`,`trainingType`],[3,`value`],[`formControlName`,`isRefresherTraining`],[1,`col-sm-12`,`col-md-4`],[1,`col-sm-12`,`col-md-3`],[`matInput`,``,`type`,`number`,`formControlName`,`periodicity`,3,`placeholder`],[`matInput`,``,`formControlName`,`validFrom`,3,`matDatepicker`,`max`],[`matIconSuffix`,``,3,`for`],[1,`col-sm-12`,`col-md-2`],[`matInput`,``,`type`,`number`,`formControlName`,`price`,3,`placeholder`],[1,`col-12`,`mt-3`],[1,`custom-mat-field`,`w-100`],[`matInput`,``,`formControlName`,`note`,`cdkTextareaAutosize`,``,`cdkAutosizeMinRows`,`1`,`cdkAutosizeMaxRows`,`5`],[1,`col-12`,`col-md-5`,`mt-2`],[`multiple`,``,`type`,`file`,`id`,`formFile`,1,`form-control`,3,`change`],[1,`my-4`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``],[`mat-flat-button`,``,`cdkFocusInitial`,``,`color`,`primary`],[`formControlName`,`isRefresherTraining`,3,`change`],[`matInput`,``,`formControlName`,`customTitle`,`max`,`255`,3,`placeholder`],[`fileAbleType`,`userTraining`,3,`fileAbleId`],[1,`text-app-color-theme`],[3,`deleteUserEmit`,`users`,`failedUserIds`]],template:function(a,n){if(a&1&&(el(0,`form`,1),vl(`ngSubmit`,function(){return n.submit()}),el(1,`h2`,2),Px(2),Zx(3,`translate`),Xp(),el(4,`mat-dialog-content`,3),Ss(5,uc,2,0,`div`,4),el(6,`div`,5)(7,`div`,6)(8,`div`,7)(9,`mat-form-field`,8)(10,`mat-label`),Px(11),Zx(12,`translate`),Xp(),el(13,`mat-select`,9),VM(),XN(14,_c,3,4,`mat-option`,10,QN),Xp()(),Ss(16,fc,3,3,`mat-checkbox`,11),Xp()(),Ss(17,vc,7,7,`div`,12),el(18,`div`,13)(19,`mat-form-field`,8)(20,`mat-label`),Px(21),Zx(22,`translate`),Xp(),el(23,`input`,14),Zx(24,`translate`),VM(),Xp(),Ss(25,gc,3,6,`mat-error`),Ss(26,yc,3,6,`mat-error`),Xp()(),el(27,`div`,13)(28,`mat-form-field`,8)(29,`mat-label`),Px(30),Zx(31,`translate`),Xp(),el(32,`input`,15),VM(),Xp(),el(33,`mat-hint`),Px(34,`DD.MM.YYYY`),Xp(),bl(35,`mat-datepicker-toggle`,16)(36,`mat-datepicker`,null,0),Xp()(),el(38,`div`,17)(39,`mat-form-field`,8)(40,`mat-label`),Px(41),Zx(42,`translate`),Xp(),el(43,`input`,18),Zx(44,`translate`),VM(),Xp(),Ss(45,Cc,3,6,`mat-error`),Ss(46,Ec,3,6,`mat-error`),Xp()(),el(47,`div`,19)(48,`mat-form-field`,20)(49,`mat-label`),Px(50),Zx(51,`translate`),Xp(),el(52,`textarea`,21),VM(),Xp()()(),el(53,`div`,22)(54,`input`,23),vl(`change`,function(r){return n._uploadHelper.handleUploadFilesEdit(r.target.files)}),Xp()(),Ss(55,Ic,2,1,`div`,19),Ss(56,Tc,5,5,`div`,24),Xp()(),el(57,`mat-dialog-actions`,25)(58,`button`,26),Px(59),Zx(60,`translate`),Xp(),el(61,`button`,27),Px(62),Zx(63,`translate`),Xp()()()),a&2){let s=hx(37);TD(`formGroup`,n.formGroup),vs(2),WD(Qx(3,25,n.data.training?.id?`USER_TRAINING.EDIT`:`USER_TRAINING.ADD`)),vs(3),Cs(n.isLoading?5:-1),vs(6),WD(Qx(12,27,`TRAINING`)),vs(2),$M(),vs(),JN(n.userTrainingMapEntries),vs(2),Cs(n.refresherTrainingTypes.includes(n.formGroup.get(`trainingType`)?.value)?16:-1),vs(),Cs(n.formGroup.get(`trainingType`)?.value===`CUSTOM_TRAINING`?17:-1),vs(4),WD(Qx(22,29,`REVISION_PERIODICITY_MONTHS`)),vs(2),TD(`placeholder`,Vx(Qx(24,31,`REVISION_PERIODICITY`))),$M(),vs(2),Cs(n.formGroup.get(`periodicity`)?.hasError(`min`)?25:-1),vs(),Cs(n.formGroup.get(`periodicity`)?.hasError(`max`)?26:-1),vs(4),WD(Qx(31,33,`USER_TRAINING.DATE`)),vs(2),TD(`matDatepicker`,s)(`max`,n.currentDate),$M(),vs(3),TD(`for`,s),vs(6),WD(Qx(42,35,`PRICE`)),vs(2),TD(`placeholder`,Vx(Qx(44,37,`PRICE`))),$M(),vs(2),Cs(n.formGroup.get(`price`)?.hasError(`min`)?45:-1),vs(),Cs(n.formGroup.get(`price`)?.hasError(`max`)?46:-1),vs(4),WD(Qx(51,39,`NOTE`)),vs(2),$M(),vs(3),Cs(n.data.training?55:-1),vs(),Cs(n.users.length>0?56:-1),vs(3),WD(Qx(60,41,`CANCEL`)),vs(3),WD(Qx(63,43,`SAVE`))}},dependencies:[ua,sa,ai,ho,ra,oa,fa,uo,_o,Be,je,Et,Xi,pn,Qt$1,ke,Vt,gt,So,xa,gn,pr,Mo,mr,qe,Pr,Yt,ze,jK,Re$1,D5],encapsulation:2,changeDetection:1})}}return t})();export{Z as a,W as i,Ht as n,Vt as r,Fn as t};