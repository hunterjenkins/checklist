import { Component, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';


export class LineItemNode {
  icon = "assignment";
  modifyRights: string[];
  title: string;
  workflow: string[];
  description: string;
  assignee: string[];
  dueDate: string;
  qcCheck: string[];
  lifecycle: string[]
  milestone: string[];
  country: string[];
  siteNumber: string[];
  patientNumber: string[];
  comments: string;
}



export class SectionNode {
  childrenSections: SectionNode[];
  childrenLineItems: LineItemNode[];
  title: string;
  type: any;
  icon = "folder";
}


@Component({
  selector: 'app-checklist-wrapper',
  templateUrl: './checklist-wrapper.component.html',
  styleUrls: ['./checklist-wrapper.component.css'],
})
export class ChecklistWrapperComponent  {

  treeControl: NestedTreeControl<SectionNode>;
  nestedDataSource: MatTreeNestedDataSource<SectionNode>;
  dataChange: BehaviorSubject<SectionNode[]> = new BehaviorSubject<SectionNode[]>([]);
  modifyRights: string[];
  title: string;
  workflow: string[];
  description: string;
  assignee: string[];
  dueDate: string;
  qcCheck: string[];
  lifecycle: string[]
  milestone: string[];
  country: string[];
  siteNumber: string[];
  patientNumber: string[];
  comments: string;

  test: string;

  selectedLineItem: LineItemNode;

  constructor() {
    this.treeControl = new NestedTreeControl<SectionNode>(this.getSectionChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.test = "Brandon Rights";
    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        icon: "folder",
        title: "1.0 Trial Management",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Hunter Rights'],
                    title: 'Hunter',
                    workflow: ['Workflow1', 'Workflow2'],
                    description: 'This is a cool thing',
                    assignee: ['Donald Trump'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Dead', 'alive'],
                    milestone: ['Study Start Up'],
                    country: ['USA'],
                    siteNumber: ['1', '2', '3'],
                    patientNumber: ['111', '112', '113'],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Dan Rights', 'Brandon Rights', 'Phil Rights'],
                title: 'Dan',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Joe Exotic is innocent',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Dead', 'alive'],
                milestone: ['Study Start Up'],
                country: ['USA', 'Canada'],
                siteNumber: ['1', '2', '3'],
                patientNumber: ['111', '112', '113'],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: ['Workflow1', 'Workflow2'],
                description: 'This is a cool thing',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "2.0 Central Trial Documents",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: ['Workflow1', 'Workflow2'],
                    description: 'This is a cool thing',
                    assignee: ['Tiger King', 'Ronald McDonald'],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: ['Dead', 'alive'],
                    milestone: ['Study Start Up'],
                    country: ['USA'],
                    siteNumber: ['1', '2', '3'],
                    patientNumber: ['111', '112', '113'],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Dwight Shrute', 'Gabe Lewis'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: ['Workflow1', 'Workflow2'],
                description: 'This is a cool thing',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: ['Dead', 'alive'],
                milestone: ['Study Start Up'],
                country: ['USA'],
                siteNumber: ['1', '2', '3'],
                patientNumber: ['111', '112', '113'],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "3.0 Regulatory",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a', 'b', 'c'],
                    title: 'test',
                    workflow: ['Workflow1', 'Workflow2'],
                    description: 'This is a cool thing',
                    assignee: ['Tiger King', 'Ronald McDonald'],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a', 'b', 'c'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: ['Workflow1', 'Workflow2'],
                description: 'This is a cool thing',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: ['Dead', 'alive'],
                milestone: ['Study Start Up'],
                country: ['USA'],
                siteNumber: ['1', '2', '3'],
                patientNumber: ['111', '112', '113'],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "4.0 IRB/IEC and Other Approvals",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a', 'b', 'c'],
                    title: 'test',
                    workflow: ['Workflow1', 'Workflow2'],
                    description: 'This is a cool thing',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: ['Workflow1', 'Workflow2'],
                description: 'This is a cool thing',
                assignee: ['Tiger King', 'Ronald McDonald'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: ['Dead', 'alive'],
                milestone: ['Study Start Up'],
                country: ['USA'],
                siteNumber: ['1', '2', '3'],
                patientNumber: ['111', '112', '113'],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Michael Scott', 'Dwight Shrute'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "5.0 Site Management (Site 001)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a', 'b', 'c'],
                    title: 'test',
                    workflow: ['Workflow1', 'Workflow2'],
                    description: 'This is a cool thing',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Michael Scott', 'Dwight Shrute'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a', 'b', 'c'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "5.0 Site Management (Site 002)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: ['Tiger King', 'Ronald McDonald'],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a', 'b', 'c'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Michael Scott', 'Dwight Shrute'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "5.0 Site Management (Site 003)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a', 'b', 'c'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a', 'b', 'c'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Michael Scott', 'Dwight Shrute'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "5.0 Site Management (Site 004)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a', 'b', 'c'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: ['Michael Scott', 'Dwight Shrute'],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Michael Scott', 'Dwight Shrute'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Tiger King', 'Ronald McDonald'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },

      {
        icon: "folder",
        title: "6.0 IP & Trial Supplies",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a', 'b', 'c'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Tiger King', 'Ronald McDonald'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "7.0 Safety Reporting",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Tiger King', 'Ronald McDonald'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Tiger King', 'Ronald McDonald'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "8.0 Central and Local Testing",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: ['Tiger King', 'Ronald McDonald'],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Donald Trump', 'Mike Pence'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "9.0 Third Parties (LabCorp)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Donald Trump', 'Mike Pence'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: ''
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Donald Trump', 'Mike Pence'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "9.0 Third Parties (Veristat)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: [''],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: [''],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Donald Trump', 'Mike Pence'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "11.0 Statistics",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "1.1 -- ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 -- ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['a'],
                    title: 'test',
                    workflow: [''],
                    description: '',
                    assignee: ['Donald Trump', 'Mike Pence'],
                    dueDate: '',
                    qcCheck: ['Passed'],
                    lifecycle: [''],
                    milestone: [''],
                    country: [''],
                    siteNumber: [''],
                    patientNumber: [''],
                    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test',
                workflow: [''],
                description: '',
                assignee: ['Joe Exotic', 'Carole Baskins'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              },

              {
                icon: 'assignment',
                modifyRights: ['a'],
                title: 'test2',
                workflow: [''],
                description: '',
                assignee: ['Donald Trump', 'Mike Pence'],
                dueDate: '',
                qcCheck: ['Passed'],
                lifecycle: [''],
                milestone: [''],
                country: [''],
                siteNumber: [''],
                patientNumber: [''],
                comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


    ]);


  }

  @ViewChild('tree') tree;

  ngAfterViewInit() {
  this.tree.treeControl.expandAll();

}


  public getSectionChildren( node: SectionNode){
    return node.childrenSections;
  }

  public getLineItemChildren( node: SectionNode){
    return node.childrenLineItems;
  }


  public hasSectionChildren(_: number, node: SectionNode){
    return node.childrenSections.length !=0;

  }

  public hasLineItemChildren(_: number, node: SectionNode){
    return node.childrenLineItems.length !=0;
  }


  public displayLineItem( node: LineItemNode){
    console.log(node);

    this.selectedLineItem = node;

    this.title = node.title;
    this.modifyRights = node.modifyRights;
    this.workflow = node.workflow;
    this.description = node.description;
    this.assignee = node.assignee;
    this.dueDate = node.dueDate;
    this.qcCheck = node.qcCheck;
    this.lifecycle = node.lifecycle;
    this.milestone = node.milestone;
    this.country = node.country;
    this.siteNumber = node.siteNumber;
    this.patientNumber = node.patientNumber;
    this.comments = node.comments;
  }


}
