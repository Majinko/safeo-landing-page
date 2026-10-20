import{$r as pA,Ai as wm,An as Zx,C as D5,D as Db,Di as vs,Ei as vl,En as Yt,Er as kD,F as GD,Gr as nr,Ir as ln$1,Jr as oZ,K as In,L as Gx,Nt as QN,Qn as el,Qr as om,Qt as Te,Ri as yb,S as Cs,Sn as Xx,U as I,Vn as bl,Vt as Qx,Wr as nm,X as JN,Yn as dx,Yr as oc,Yt as Ss,Zt as TD,bi as ui,cn as We,d as Ae,ei as pt,en as UD,fn as XD,gi as tr,gn as Xm,gr as ie,hr as iZ,in as VR,jt as Px,li as rm,lt as Kr,mn as XN,n as $M,nr as f,on as Vx,ot as KR,p as B,rn as VM,rr as fA,sn as WD,tn as UK,ui as rr,vi as uA,vn as Xp,xi as v,yr as ix,yt as Ms,zn as be}from"./chunk-CriTSX_T.js";import{$ as po,C as So,O as Xi,Q as pn,V as fa,et as ra,n as Ae$1,nt as td,rt as ua}from"./chunk-DnzjziX7.js";import{o as tt}from"./chunk-CH4pb-dP.js";import{C as ke,D as i,a as He$1,d as Qt,i as Ha,k as F,u as Qi,v as Wa}from"./main-465LRRQ4.js";import{a as Le,f as pi,l as di,n as Ae$2,o as Oe,s as _i,u as hi}from"./chunk-C_JP8gv2.js";import{n as Tt,t as Et}from"./chunk-SzPjdHkR.js";import{t as Y}from"./chunk-SSW5mjK6.js";import{m as rn$1,r as Ia}from"./chunk-BIO0Wes4.js";function He(r,c){if(r&1&&(el(0,`mat-option`,2),Px(1),Xp()),r&2){let e=c.$implicit;TD(`value`,e),vs(),om(` `,e.title,` `)}}function Qe(r,c){r&1&&(el(0,`span`),Px(1),Zx(2,`translate`),Xp()),r&2&&(vs(),om(` `,Qx(2,1,`FIRM.REQUIRED`),` `))}function Ke(r,c){if(r&1&&(el(0,`span`),Px(1),Xp()),r&2){let e=dx(2);vs(),om(` `,e.control.errors?.customError,` `)}}function Je(r,c){if(r&1&&(el(0,`mat-error`),Ss(1,Qe,3,3,`span`),Ss(2,Ke,2,1,`span`),Xp()),r&2){let e=dx();vs(),Cs(e.control?.errors?.required?1:-1),vs(),Cs(e.control?.errors?.customError?2:-1)}}var Sn=(()=>{class r{constructor(){this.firms=[],this.firmService=f(Y),this.compareFn=(e,n)=>e?.id===n?.id}ngOnInit(){this.firmService.findAllByLoggedUser().pipe(ln$1(()=>I([]))).subscribe(e=>{this.firms=e;let n=this.control.value;if(n&&e.length){let t=e.find(a=>a.id===n.id);t&&this.control.setValue(t)}e.length===1&&!this.control.value&&this.control.setValue(e[0])})}static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=We({type:r,selectors:[[`app-firm-select`]],inputs:{control:`control`},features:[XD([{provide:Ae$1,useExisting:oc(()=>r),multi:!0}])],decls:8,vars:6,consts:[[`appearance`,`fill`,1,`w-100`,`custom-mat-field`],[3,`formControl`,`compareWith`],[3,`value`]],template:function(n,t){n&1&&(el(0,`mat-form-field`,0)(1,`mat-label`),Px(2),Zx(3,`translate`),Xp(),el(4,`mat-select`,1),VM(),XN(5,He,2,2,`mat-option`,2,QN),Xp(),Ss(7,Je,3,2,`mat-error`),Xp()),n&2&&(vs(2),WD(Qx(3,4,`FIRM.FIRM`)),vs(2),TD(`formControl`,t.control)(`compareWith`,t.compareFn),$M(),vs(),JN(t.firms),vs(2),Cs(t.control?.invalid&&(t.control?.touched||t.control?.dirty)?7:-1))},dependencies:[Xi,pn,Qt,ua,ra,fa,po,ke,So,D5],encapsulation:2,changeDetection:1})}}return r})();var Ye=new v(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var qe=(()=>{class r{_elementRef=f(ie);_ngZone=f(B);_changeDetectorRef=f(Kr);_renderer=f(pt);_cleanupTransitionEnd;constructor(){let e=VR(),n=f(Ye,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=Ze(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ze(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new be;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||r)};static ɵcmp=(function(){function e(n,t){n&1&&rr(0,`div`,2)}return We({type:r,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(t,a){t&2&&(In(`aria-valuenow`,a._isIndeterminate()?null:a.value)(`mode`,a.mode),Ms(`mat-`+a.color),Yt(`_mat-animation-noopable`,a._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!a._isNoopAnimation)(`mdc-linear-progress--indeterminate`,a._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,wm],bufferValue:[2,`bufferValue`,`bufferValue`,wm],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(t,a){t&1&&(tr(0,`div`,0),rr(1,`div`,1),Ss(2,e,1,0,`div`,2),nr(),tr(3,`div`,3),rr(4,`span`,4),nr(),tr(5,`div`,5),rr(6,`span`,4),nr()),t&2&&(vs(),UD(`flex-basis`,a._getBufferBarFlexBasis()),vs(),Cs(a.mode===`buffer`?2:-1),vs(),UD(`transform`,a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return r})();function Ze(r,c=0,e=100){return Math.max(c,Math.min(e,r))}var Ge=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵmod=Ae({type:r});static ɵinj=Te({imports:[ui]})}return r})();var nn=[`fileInput`];var rn=r=>({size:r});function tn(r,c){r&1&&(el(0,`div`,5),bl(1,`mat-spinner`,7),Xp())}function an(r,c){if(r&1){let e=ix();el(0,`mat-list-item`,10)(1,`mat-icon`,11),Px(2),Xp(),el(3,`div`,12),Px(4),Xp(),el(5,`div`,13)(6,`span`),Px(7),Zx(8,`translate`),Zx(9,`date`),Xp()(),el(10,`div`,14)(11,`button`,15),Zx(12,`translate`),Zx(13,`translate`),vl(`click`,function(){let t=yb(e).$implicit,a=dx(3);return Db(a.download(t))}),el(14,`mat-icon`),Px(15,`download`),Xp()(),el(16,`button`,16),Zx(17,`translate`),Zx(18,`translate`),vl(`click`,function(t){let a=yb(e).$implicit,g=dx(3);return Db(g.deleteFile(t,a.id))}),el(19,`mat-icon`),Px(20,`delete`),Xp()()()()}if(r&2){let e=c.$implicit,n=dx(3);vs(2),WD(n.iconFor(e)),vs(2),WD(e.fileName),vs(3),GD(``,Qx(8,10,`FILE.UPLOADED`),` `,Xx(9,12,e.createdAt,`dd.MM.yyyy HH:mm`)),vs(4),TD(`matTooltip`,Vx(Qx(12,15,`FILE.DOWNLOAD`))),In(`aria-label`,Qx(13,17,`FILE.DOWNLOAD`)),vs(5),TD(`matTooltip`,Vx(Qx(17,19,`FILE.DELETE`))),In(`aria-label`,Qx(18,21,`FILE.DELETE`))}}function on(r,c){if(r&1&&(el(0,`mat-list`,8),XN(1,an,21,23,`mat-list-item`,10,QN),Xp()),r&2){let e=dx(2);vs(),JN(e.files)}}function sn(r,c){r&1&&(el(0,`div`,9)(1,`mat-icon`),Px(2,`insert_drive_file`),Xp(),el(3,`p`),Px(4),Zx(5,`translate`),Xp()()),r&2&&(vs(4),WD(Qx(5,1,`FILE.NO_FILES`)))}function mn(r,c){if(r&1&&Ss(0,on,3,0,`mat-list`,8)(1,sn,6,3,`div`,9),r&2){let e=dx();Cs(e.files?.length?0:1)}}function ln(r,c){if(r&1&&(el(0,`div`,17)(1,`mat-icon`),Px(2,`upload`),Xp(),el(3,`div`,18),Px(4),Xp(),bl(5,`mat-progress-bar`,19),el(6,`div`,20),Px(7),Zx(8,`number`),Xp()()),r&2){let e=c.$implicit;vs(4),WD(e.key.split(`-`)[0]),vs(),TD(`value`,e.value),vs(2),om(``,Xx(8,3,e.value,`1.0-0`),`%`)}}function cn(r,c){if(r&1&&(el(0,`div`,6),XN(1,ln,9,6,`div`,17,QN),Zx(3,`keyvalue`),Xp()),r&2){let e=dx();vs(),JN(Qx(3,0,e.uploadProgress))}}function dn(r,c){r&1&&(el(0,`div`,5),bl(1,`mat-spinner`),Xp())}var sr=(()=>{class r{constructor(){this.maxSize=td.fileMaxSize,this.files=[],this.isLoadingResult=!0,this.isDragging=!1,this.uploadProgress={},this.storageService=f(Ia),this.dialog=f(tt),this.snack=f(i),this.translateService=f(Xm)}ngOnInit(){this.getFiles()}getFiles(){this.isLoadingResult=!0,this.storageService.getFiles(this.fileAbleType,this.fileAbleId).subscribe({next:e=>{this.files=e,this.isLoadingResult=!1},error:()=>this.isLoadingResult=!1})}triggerFilePicker(){this.fileInput?.nativeElement.click()}onFilesChosen(e){let n=e.target;!n.files||n.files.length===0||(this.uploadFiles(Array.from(n.files)),n.value=``)}onDragOver(e){e.preventDefault(),this.isDragging=!0}onDragLeave(e){e.preventDefault(),this.isDragging=!1}onDrop(e){if(e.preventDefault(),this.isDragging=!1,!e.dataTransfer)return;let n=Array.from(e.dataTransfer.files);n.length&&this.uploadFiles(n)}uploadFiles(e){for(let n of e){let t=`${n.name}-${n.size}-${n.lastModified}`;this.uploadProgress[t]=0,this.storageService.uploadWithProgress(this.fileAbleType,this.fileAbleId,this.businessId,n).subscribe({next:a=>{a.type===`progress`?this.uploadProgress[t]=a.progress:a.type===`response`&&(this.files=[a.body,...this.files],delete this.uploadProgress[t],this.snack.snack(this.translateService.instant(`FILE.UPLOAD_SUCCESS`),`success`))},error:()=>{delete this.uploadProgress[t],this.snack.error(this.translateService.instant(`FILE.UPLOAD_ERROR`))}})}}deleteFile(e,n){e.preventDefault(),this.dialog.open(F,{width:`100%`,maxWidth:`350px`,autoFocus:!1}).afterClosed().subscribe(a=>{a&&this.storageService.deleteById(n).subscribe(()=>{this.snack.snack(this.translateService.instant(`FILE.DELETE_SUCCESS`),`success`),this.files=this.files.filter(g=>g.id!==n)})})}download(e){this.storageService.downloadFile(e.id).subscribe(n=>{Ha(n,Wa(e.fileName),n.type)})}iconFor(e){let n=(e.fileName||``).toLowerCase();return n.endsWith(`.pdf`)?`picture_as_pdf`:/(png|jpg|jpeg|gif|webp|svg)$/.test(n)?`image`:/(mp4|mov|avi|mkv)$/.test(n)?`movie`:/(mp3|wav|aac|flac)$/.test(n)?`audio_file`:/(doc|docx)$/.test(n)?`description`:/(xls|xlsx|csv)$/.test(n)?`grid_on`:/(ppt|pptx)$/.test(n)?`slideshow`:/(zip|rar|7z|tar|gz)$/.test(n)?`folder_zip`:`insert_drive_file`}static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=We({type:r,selectors:[[`app-file-manager`]],viewQuery:function(n,t){if(n&1&&kD(nn,5),n&2){let a;nm(a=rm())&&(t.fileInput=a.first)}},inputs:{fileAbleId:`fileAbleId`,fileAbleType:`fileAbleType`,businessId:`businessId`},decls:20,vars:19,consts:[[`fileInput`,``],[1,`fm-card`,3,`dragover`,`dragleave`,`drop`],[`type`,`file`,`multiple`,``,`hidden`,``,3,`change`],[1,`dropzone`],[1,`link`,3,`click`],[1,`spinner-wrap`],[1,`uploads`],[`diameter`,`36`],[1,`fm-list`],[1,`empty`],[`lines`,`2`],[`matListItemIcon`,``],[`matListItemTitle`,``],[`matListItemLine`,``],[`matListItemMeta`,``,1,`actions`],[`mat-icon-button`,``,3,`click`,`matTooltip`],[`mat-icon-button`,``,`color`,`warn`,3,`click`,`matTooltip`],[1,`row`],[1,`name`],[`mode`,`determinate`,3,`value`],[1,`pct`]],template:function(n,t){n&1&&(el(0,`div`,1),vl(`dragover`,function(g){return t.onDragOver(g)})(`dragleave`,function(g){return t.onDragLeave(g)})(`drop`,function(g){return t.onDrop(g)}),el(1,`input`,2,0),vl(`change`,function(g){return t.onFilesChosen(g)}),Xp(),el(3,`div`,3)(4,`mat-icon`),Px(5,`cloud_upload`),Xp(),el(6,`div`),Px(7),Zx(8,`translate`),el(9,`span`,4),vl(`click`,function(){return t.triggerFilePicker()}),Px(10),Zx(11,`translate`),Xp()(),el(12,`small`),Px(13),Zx(14,`translate`),Xp()(),Ss(15,tn,2,0,`div`,5)(16,mn,2,1),Ss(17,cn,4,2,`div`,6),Zx(18,`keyvalue`),Xp(),Ss(19,dn,2,0,`div`,5)),n&2&&(vs(3),Yt(`dragging`,t.isDragging),vs(4),om(` `,Qx(8,8,`FILE.DRAG_DROP`),` `),vs(3),WD(Qx(11,10,`FILE.ADD_FILES`)),vs(3),WD(Xx(14,12,`FILE.MAX_INFO`,Gx(17,rn,t.maxSize))),vs(2),Cs(t.isLoadingResult?15:16),vs(2),Cs(Qx(18,15,t.uploadProgress).length?17:-1),vs(2),Cs(t.isLoadingResult?19:-1))},dependencies:[rn$1,Le,Oe,Ae$2,_i,hi,di,pi,UK,KR,iZ,oZ,Tt,Et,Ge,qe,Qi,He$1,pA,uA,fA,D5],styles:[`.fm-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 10px 30px #11182714;padding:8px 8px 16px}.fm-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 0}.fm-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.fm-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-weight:700}.fm-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.dropzone[_ngcontent-%COMP%]{margin:12px 0 8px;border:2px dashed var(--%NS%app-color-border-strong);background:var(--%NS%app-color-bg);border-radius:14px;padding:20px;text-align:center;color:var(--%NS%app-color-text-secondary);transition:.2s ease;cursor:pointer}.dropzone[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--%NS%app-color-theme);text-decoration:underline}.dropzone.dragging[_ngcontent-%COMP%]{background:var(--%NS%app-color-theme-soft);border-color:var(--%NS%app-color-brand)}.dropzone[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px;display:block;margin:0 auto 6px;color:var(--%NS%app-color-brand)}.spinner-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:20px}.fm-list[_ngcontent-%COMP%]{padding:0 4px}.fm-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{border-radius:12px;margin:4px 0}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.empty[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%app-color-text-secondary);padding:24px 0}.empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#cbd5d1;font-size:40px;width:40px;height:40px;display:block;margin:0 auto 8px}.uploads[_ngcontent-%COMP%]{margin-top:10px;padding:0 8px}.uploads[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 1fr 1fr 60px;gap:8px;align-items:center;margin:6px 0}.uploads[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{height:8px;border-radius:8px}.uploads[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uploads[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .pct[_ngcontent-%COMP%]{text-align:right;font-variant-numeric:tabular-nums}`],changeDetection:1})}}return r})();export{sr as n,Sn as t};