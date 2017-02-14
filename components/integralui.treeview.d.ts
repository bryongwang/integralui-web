import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUITreeItem } from './integralui.treeitem';
export declare class IntegralUITreeView extends IntegralUIBaseList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    protected isThereChildItems: boolean;
    private blockSize;
    contentList: QueryList<IntegralUITreeItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    itemTemplate: any;
    private trialRef;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    protected updateOptions(value?: any): void;
    protected updateDataFields(fields?: any): void;
    private updateCurrentList();
    private addChildItems(parentItem, pid, flag, parent?);
    private addItemToCurrentList(item, pid, flag, parent);
    getItemFromComponent(cmp: any): any;
    getItemIndex(item: IntegralUITreeItem): number;
    protected getParent(item: any): any;
    protected isChildOf(targetItem: any, item: any): boolean;
    isItemExpanded(item: any): boolean;
    protected isParentOf(targetItem: any, item: any): boolean;
    isThereChildren(): boolean;
    private isThereVisibleChildren(item);
    invokeMethod(key: string, data: any): boolean;
    private changeExpanded(cmp);
    protected getContentSize(): {
        width: any;
        height: any;
    };
    refresh(): void;
    getComponentFromItem(item: any): any;
    updateLayout(): void;
    protected clearComponentSelection(): void;
}
