import { ComponentFactoryResolver, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIGroupBox } from './integralui.groupbox';
export declare class IntegralUIAccordion extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private numGroups;
    contentList: QueryList<IntegralUIGroupBox>;
    contentRef: ViewContainerRef;
    private groupList;
    private currentSelection;
    private currentSelectedIndex;
    private selectedComponent;
    private prevComponent;
    private removeIndex;
    private trialRef;
    groups: Array<any>;
    selectedIndex: number;
    selectedGroup: any;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    groupAdding: EventEmitter<any>;
    groupAdded: EventEmitter<any>;
    clear: EventEmitter<any>;
    groupRemoving: EventEmitter<any>;
    groupRemoved: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    addGroup(group: any): void;
    clearGroups(): void;
    insertGroupAt(group: any, index: number): void;
    insertGroupBefore(group: any, refGroup: any): void;
    insertGroupAfter(group: any, refGroup: any): void;
    removeGroup(group: any): void;
    removeGroupAt(index: number): void;
    private callEventAdd(type, group, index?, refGroup?, flag?);
    private callEventRemove(group);
    private closeGroups(cmp);
    private toggleGroups();
    private getGroupCurrentIndex(cmp);
    private getGroupDataIndex(cmp);
    private getGroupData(index);
    private getGroupIndex(group);
    private getComponentData(cmp);
    invokeEvent(key: string, cmp: IntegralUIGroupBox): boolean;
    invokeMethod(key: string, cmp: IntegralUIGroupBox): boolean;
    private isIndexInRange(index);
    updateLayout(): void;
    protected clearSelection(cmp: IntegralUIGroupBox): void;
    private selectComponent(cmp);
    private selectComponentByIndex(index);
    selectGroup(group: any): void;
}
