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
            title: "1.1 Trial Oversight ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.1.1 Trial Master File (TMF) Plan ",
                type: "Section",
                childrenSections: [


                ],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Trial Management Brochure 1a',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Trial Management Brochure document is a document that includes the instruction to the managers at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Trial Management Brochures for this study will be delivered to management site in person by the CRA'
                  },
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Trial Management Brochure 1b',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Trial Management Brochure document is a document that includes the instruction to the managers at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Trial Management Brochures for this study will be delivered to management site in person by the CRA'
                  }
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Trial Management Results- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Trial Management Results 1A is a document that includes the first round of results to the Trial Management Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Trial Management Results 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Trial Management Results- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Trial Management Results 1B is a document that includes the first round of results to the Trial Management Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Trial Management Results 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              }
            ]
          },
          {
            icon: "folder",
            title: "1.2 Trial Team ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.2.1 Trial Team Details",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Trial Team Details 1a',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Trial Team Details document is a document that includes the team at each site',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Trial Team CVs for this study will be delivered to management site in person by the CRA'
                  },
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Trial Team CVs',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Trial Team CVs document is a document that includes the teams at each site',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Trial Team CVs for this study will be delivered to management site in person by the CRA'
                  }
                ],
              }

            ],
            childrenLineItems: []
          },
          {
            icon: "folder",
            title: "1.3 Trial Committee",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "1.3.1 Committee Process",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Committee Process 1a',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Committee Process document is a document that includes the process at each site',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Committee Process for this study will be delivered to management site in person by the CRA'
                  }
                ],
              }

            ],
            childrenLineItems: []
          }
        ],
        childrenLineItems: [
          {
            icon: 'assignment',
            modifyRights: ['Study Director', 'Study Facilitator'],
            title: 'Trial Management Brochure 1a',
            workflow: ['Workflow1', 'Workflow2', 'workflow3'],
            description: 'The Trial Management Brochure document is a document that includes the instruction to the managers at each site for how the study will be managed by bhe PI',
            assignee: ['Rob Carpenter', 'John Smith'],
            dueDate: 'Yesterday',
            qcCheck: ['Passed'],
            lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
            milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
            country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
            siteNumber: ['1', '2', '3', '4'],
            patientNumber: ['111', '112', '113', '114'],
            comments: 'Trial Management Brochures for this study will be delivered to management site in person by the CRA'
          }
        ]
      },

      {
        icon: "folder",
        title: "2.0 Central Trial Documents",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "2.1 Prod & Trial Docs",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "2.1.1 Investigators Brochure ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Trial Management Brochure',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Investigator Brochure document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Investigator Brochures for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Central Trial Results- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Central Trial Results 1A is a document that includes the first round of results to the Central Trial Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Central TrialResults 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Central Trial Results- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Central Trial Results 1B is a document that includes the first round of results to the Central Trial Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Central Trial Results 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "3.1 Trial Approval",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "3.1.1 Regulatory Submission",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Regulatory Brochure',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Regulatory Brochure document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Investigator Brochures for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Regulatory Results- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Regulatory Results 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The RegulatoryResults 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Regulatory Results- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Regulatory Results 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Regulatory Results 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
