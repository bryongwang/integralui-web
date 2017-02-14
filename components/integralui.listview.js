/*
  filename: integralui.listview.js
  version : 0.7.5 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,b){function a(){this.constructor=e}for(var c in b)b.hasOwnProperty(c)&&(e[c]=b[c]);e.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(e,b,a,c){var g=arguments.length,f=3>g?b:null===c?c=Object.getOwnPropertyDescriptor(b,a):c,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(e,b,a,c);else for(var h=e.length-1;0<=h;h--)if(d=e[h])f=(3>g?d(f):3<g?d(b,a,f):
d(b,a))||f;return 3<g&&f&&Object.defineProperty(b,a,f),f},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_dragdrop_service_1=require("../services/integralui.dragdrop.service"),
integralui_base_list_1=require("./integralui.base.list"),integralui_listitem_1=require("./integralui.listitem"),IntegralUIListView=function(e){function b(a,b,g,f,d,h,k){e.call(this,a,b,g,f,d);this.dataService=a;this.dragDropService=b;this.elemRef=g;this.elemRenderer=f;this.commonService=d;this.cmpResolver=h;this.baseService=k;this.currentScrollMode="horizontal";this.overflowSettings={horizontal:"auto",vertical:"auto"};this.trialRef=null;this.itemList=[]}__extends(b,e);Object.defineProperty(b.prototype,
"scrollMode",{get:function(){return this.currentScrollMode},set:function(a){this.currentScrollMode!=a&&(this.currentScrollMode=a,this.overflowSettings="horizontal"==a?{horizontal:"auto",vertical:"hidden"}:{horizontal:"hidden",vertical:"auto"},this.updateLayout())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.items}]);this.updateCurrentList();this.generalClassName="iui-listview";this.initStyle()};b.prototype.ngAfterViewInit=
function(){var a=this,b=setTimeout(function(){var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(c));clearTimeout(b)},100)};b.prototype.ngAfterContentInit=function(){this.updateLayout()};b.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};b.prototype.addItem=function(a){this.callEventAdd("add",a)};b.prototype.clearItems=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.insertItemAt=
function(a,b){this.callEventAdd("at",a,b)};b.prototype.removeItemAt=function(a){return this.callEventRemove(null,a)};b.prototype.updateCurrentList=function(){var a=this;a.currentList.length=0;var b=a.dataService.getList();b&&b.forEach(function(b){return a.addItemToCurrentList(b)})};b.prototype.addItemToCurrentList=function(a){a.type="item";a[this.options.dataFields.id]||(a[this.options.dataFields.id]=this.commonService.getUniqueId());this.currentList.push(a)};b.prototype.cloneItem=function(a){return this.dataService.clone(a)};
b.prototype.getItem=function(a){return this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};b.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};b.prototype.getItemIndex=function(a){return this.itemList&&0<this.itemList.length?this.itemList.indexOf(a):-1};b.prototype.getContentSize=
function(){return this.contentElem?{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}:{width:0,height:0}};b.prototype.updateLayout=function(){var a=this,b=setTimeout(function(){a.updateCurrentList();a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var c={x:0,y:0};"horizontal"==a.scrollMode?a.itemList.forEach(function(b){var d=b.getSize();c.y+d.height>a.elemRef.nativeElement.firstElementChild.clientHeight&&(c={x:c.x+d.width,y:0});
b.updatePos(c);c.y+=d.height}):a.itemList.forEach(function(b){var d=b.getSize();c.x+d.width>a.elemRef.nativeElement.firstElementChild.clientWidth&&(c={x:0,y:c.y+d.height});b.updatePos(c);c.x+=d.width})}a.selectedItem&&a.updateSelectedItem(a.selectedItem);clearTimeout(b)},10)};b.prototype.clearSelection=function(){(this.itemList=this.contentList.toArray())&&0<this.itemList.length&&this.itemList.forEach(function(a){a.state&=~integralui_core_1.IntegralUIObjectState.selected})};b.prototype.selectItem=
function(a){a&&(this.clearSelection(),a.state|=integralui_core_1.IntegralUIObjectState.selected)};b.prototype.updateSelectedItemFromElem=function(a){if(this.itemList&&0<this.itemList.length){var b=-1;a&&(b=this.itemList.indexOf(a));0<=b&&b<this.items.length&&(this.selectedItem=this.items[b])}};b.prototype.updateSelectedItem=function(a){if(this.items&&0<this.items.length){var b=-1;a&&(b=this.items.indexOf(a));0<=b&&b<this.itemList.length&&this.selectItem(this.itemList[b])}};__decorate([core_1.ContentChildren(integralui_listitem_1.IntegralUIListItem),
__metadata("design:type",core_1.QueryList)],b.prototype,"contentList",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],b.prototype,"contentRef",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"contentElem",void 0);__decorate([core_1.Input(),__metadata("design:type",String),__metadata("design:paramtypes",[String])],b.prototype,"scrollMode",
null);return b=__decorate([core_1.Component({selector:"iui-listview",template:'\n\t\t<div [ngClass]="getControlClass()" (mouseenter)="onCtrlMouseEnter($event)" (mouseleave)="onCtrlMouseLeave($event)" (dragleave)="ctrlDragLeave($event)" (dragover)="ctrlDragOver($event)" (drop)="ctrlDragDrop($event)" [ngStyle]="{ \'overflow-x\': overflowSettings.horizontal, \'overflow-y\': overflowSettings.vertical }">\n\t\t\t<ul style="margin:0;padding:0;" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t</div>\n\t',
styleUrls:["./css/integralui.listview.css"],inputs:"appRef controlStyle data items selectedItem state".split(" "),outputs:"afterSelect beforeSelect clear dragDrop dragOver itemAdding itemAdded itemRemoving itemRemoved selectionChanged".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,integralui_dragdrop_service_1.IntegralUIDragDropService,core_1.ElementRef,
core_1.Renderer,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],b)}(integralui_base_list_1.IntegralUIBaseList);exports.IntegralUIListView=IntegralUIListView;