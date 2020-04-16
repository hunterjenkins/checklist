import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable} from 'rxjs';

const LOAD_MORE = 'LOAD_MORE';








//What is the difference between a LoadmoreNode and a LoadmoreFlatNode?
// LoadmoreNode -- No Children, "Leaf Node"


/** Nested node */
export class LoadmoreNode {
  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);

  get children(): LoadmoreNode[] {
    return this.childrenChange.value;
  }

  constructor(public item: string,
              public hasChildren = false,
              public loadMoreParentItem: string | null = null) {}
}





/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
  constructor(public item: string,
              public level = 1,
              // public description = '',
              public expandable = false,
              public loadMoreParentItem: string | null = null) {}
}






/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
@Injectable()
export class LoadmoreDatabase {
  batchNumber = 5;
  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
  nodeMap = new Map<string, LoadmoreNode>();

  /** The data */
  rootLevelNodes: string[] = ['1.0 Trial Management', '2.0 Central Trial Documents' , '3.0 Regulatory', '4.0 IRB/IEC and Other Approvals', '5.0 Site Management (Site 001)', '5.0 Site Management (Site 002)', '5.0 Site Management (Site 003)', '5.0 Site Management (Site 004)', '6.0 IP & Trial Supplies' , '7.0 Safety Reporting' , '8.0 Central and Local Testing', '9.0 Third Parties (LabCorp)' , '9.0 Third Parties (Veristat)' , '10.0 Data Management', '11.0 Statistics'];
  dataMap = new Map<string, string[]>([
    ['1.0 Trial Management',
        ['Item1', 'Item2','Item3', 'Item4', 'Item5', 'Item6']],

    ['2.0 Central Trial Documents',
        ['2.1 Trial Documents', 'Item2','Item3', 'Item4', 'Item5', 'Item6', 'Item7','Item8', 'Item9', 'Item10', 'Item11']],

        ['2.1 Trial Documents', ['SubItem1', 'SubItem2']]



  ]);

  initialize() {
    const data = this.rootLevelNodes.map(name => this._generateNode(name));
    this.dataChange.next(data);
  }

  /** Expand a node whose children are not loaded */
  loadMore(item: string, onlyFirstTime = false) {
    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
      return;
    }
    const parent = this.nodeMap.get(item)!;
    const children = this.dataMap.get(item)!;
    if (onlyFirstTime && parent.children!.length > 0) {
      return;
    }
    const newChildrenNumber = parent.children!.length + this.batchNumber;
    const nodes = children.slice(0, newChildrenNumber)
      .map(name => this._generateNode(name));
    if (newChildrenNumber < children.length) {
      // Need a new load more node
      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
    }

    parent.childrenChange.next(nodes);
    this.dataChange.next(this.dataChange.value);
  }

  private _generateNode(item: string): LoadmoreNode {
    if (this.nodeMap.has(item)) {
      return this.nodeMap.get(item)!;
    }
    const result = new LoadmoreNode(item, this.dataMap.has(item));
    this.nodeMap.set(item, result);
    return result;
  }
}



@Component({
  selector: 'app-checklist-wrapper',
  templateUrl: './checklist-wrapper.component.html',
  styleUrls: ['./checklist-wrapper.component.css'],
  providers: [LoadmoreDatabase]
})
export class ChecklistWrapperComponent implements OnInit {

  selectedNode = LoadmoreFlatNode;

  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;

  // Flat tree data source
  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;





  constructor(private _database: LoadmoreDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
       this.isExpandable, this.getChildren);

     this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);

     this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);




     _database.dataChange.subscribe(data => {
       this.dataSource.data = data;
     });

     _database.initialize();
  }




  ngOnInit(): void {
  }


  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;

  transformer = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap.get(node.item);

    if (existingNode) {
      return existingNode;
    }

    const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
    this.nodeMap.set(node.item, newNode);
    return newNode;
  }

  getLevel = (node: LoadmoreFlatNode) => node.level;

  isExpandable = (node: LoadmoreFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;

  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;

  /** Load more nodes from data source */
  loadMore(item: string) {
    this._database.loadMore(item);
  }

  loadChildren(node: LoadmoreFlatNode) {
    this._database.loadMore(node.item, true);
  }


  selectNode(node: LoadmoreFlatNode){
    console.log(node);
  }

}
