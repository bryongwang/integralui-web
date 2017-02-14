/*
  filename: integralui.module.js
  version : 0.7.5 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(a,b,d,e){var f=arguments.length,c=3>f?b:null===e?e=Object.getOwnPropertyDescriptor(b,d):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(a,b,d,e);else for(var h=a.length-1;0<=h;h--)if(g=a[h])c=(3>f?g(c):3<f?g(b,d,c):g(b,d))||c;return 3<f&&c&&Object.defineProperty(b,d,c),c},__metadata=this&&this.__metadata||function(a,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,
b)},core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_accordion_1=require("./components/integralui.accordion"),integralui_core_1=require("./components/integralui.core"),integralui_base_list_1=require("./components/integralui.base.list"),integralui_combobox_1=require("./components/integralui.combobox"),integralui_contextmenu_1=require("./directives/integralui.contextmenu"),integralui_frame_1=require("./directives/integralui.frame"),integralui_groupbox_1=
require("./components/integralui.groupbox"),integralui_listbar_1=require("./components/integralui.listbar"),integralui_listbox_1=require("./components/integralui.listbox"),integralui_listgroup_1=require("./components/integralui.listgroup"),integralui_listitem_1=require("./components/integralui.listitem"),integralui_listview_1=require("./components/integralui.listview"),integralui_menu_1=require("./components/integralui.menu"),integralui_menuitem_1=require("./components/integralui.menuitem"),integralui_paginator_1=
require("./components/integralui.paginator"),integralui_range_1=require("./directives/integralui.range"),integralui_slidebar_1=require("./components/integralui.slidebar"),integralui_splitcontainer_1=require("./components/integralui.splitcontainer"),integralui_splitter_1=require("./components/integralui.splitter"),integralui_tab_1=require("./components/integralui.tab"),integralui_tabstrip_1=require("./components/integralui.tabstrip"),integralui_tooltip_1=require("./directives/integralui.tooltip"),
integralui_treeitem_1=require("./components/integralui.treeitem"),integralui_treelist_1=require("./components/integralui.treelist"),integralui_treeview_1=require("./components/integralui.treeview"),integralui_common_service_1=require("./services/integralui.common.service"),integralui_dragdrop_service_1=require("./services/integralui.dragdrop.service"),IntegralUIModule=function(){function a(){}return a=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule],declarations:[integralui_accordion_1.IntegralUIAccordion,
integralui_base_list_1.IntegralUIBaseList,integralui_combobox_1.IntegralUIComboBox,integralui_contextmenu_1.IntegralUIContextMenu,integralui_contextmenu_1.IntegralUIContextMenuComponent,integralui_core_1.IntegralUIDragWindow,integralui_core_1.IntegralUIFocus,integralui_frame_1.IntegralUIFrame,integralui_groupbox_1.IntegralUIGroupBox,integralui_core_1.IntegralUIHeaderItem,integralui_core_1.IntegralUIItem,integralui_listbar_1.IntegralUIListBar,integralui_listbox_1.IntegralUIListBox,integralui_listgroup_1.IntegralUIListGroup,
integralui_listitem_1.IntegralUIListItem,integralui_listview_1.IntegralUIListView,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem,integralui_paginator_1.IntegralUIPaginator,integralui_range_1.IntegralUIRange,integralui_slidebar_1.IntegralUISlideBar,integralui_slidebar_1.IntegralUISlide,integralui_splitcontainer_1.IntegralUISplitContainer,integralui_splitcontainer_1.IntegralUISplitContainerTags,integralui_splitter_1.IntegralUISplitter,integralui_tab_1.IntegralUITab,integralui_tabstrip_1.IntegralUITabStrip,
integralui_core_1.IntegralUITComponent,integralui_core_1.IntegralUITemplate,integralui_tooltip_1.IntegralUITooltip,integralui_tooltip_1.IntegralUITooltipComponent,integralui_treeitem_1.IntegralUITreeItem,integralui_treelist_1.IntegralUITreeList,integralui_treelist_1.IntegralUITreeListItem,integralui_treeview_1.IntegralUITreeView],exports:[integralui_accordion_1.IntegralUIAccordion,integralui_combobox_1.IntegralUIComboBox,integralui_contextmenu_1.IntegralUIContextMenu,integralui_core_1.IntegralUIFocus,
integralui_frame_1.IntegralUIFrame,integralui_groupbox_1.IntegralUIGroupBox,integralui_core_1.IntegralUIHeaderItem,integralui_core_1.IntegralUIItem,integralui_listbar_1.IntegralUIListBar,integralui_listbox_1.IntegralUIListBox,integralui_listgroup_1.IntegralUIListGroup,integralui_listitem_1.IntegralUIListItem,integralui_listview_1.IntegralUIListView,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem,integralui_paginator_1.IntegralUIPaginator,integralui_range_1.IntegralUIRange,
integralui_slidebar_1.IntegralUISlideBar,integralui_slidebar_1.IntegralUISlide,integralui_splitcontainer_1.IntegralUISplitContainer,integralui_splitcontainer_1.IntegralUISplitContainerTags,integralui_splitter_1.IntegralUISplitter,integralui_tab_1.IntegralUITab,integralui_tabstrip_1.IntegralUITabStrip,integralui_core_1.IntegralUITemplate,integralui_tooltip_1.IntegralUITooltip,integralui_treeitem_1.IntegralUITreeItem,integralui_treelist_1.IntegralUITreeList,integralui_treeview_1.IntegralUITreeView],
entryComponents:[integralui_contextmenu_1.IntegralUIContextMenuComponent,integralui_core_1.IntegralUIDragWindow,integralui_core_1.IntegralUITComponent,integralui_tooltip_1.IntegralUITooltipComponent],providers:[integralui_common_service_1.IntegralUICommonService,integralui_dragdrop_service_1.IntegralUIDragDropService]}),__metadata("design:paramtypes",[])],a)}();exports.IntegralUIModule=IntegralUIModule;