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
            title: "4.1 IRB/IEC and Other Approvals ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "4.1.1 IRB/IEC and Other Approvals ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'IRB/IEC and Other Approvals',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The IRB/IEC and Other Approvals document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
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
                title: 'IRB/IEC and Other Approvals- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'IRB/IEC and Other Approvals 1A is a document that includes the first round of results to the IRB/IEC and Other Approvals Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The IRB/IEC and Other Approvals 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'IRB/IEC and Other Approvals- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The IRB/IEC and Other Approvals 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The IRB/IEC and Other Approvals 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "5.1 Site Management (Site 001) ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "5.1.1 Site Management (Site 001) ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Site Management (Site 001)',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Site Management (Site 001) document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Site Management (Site 001) for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 001)- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Site Management (Site 001) 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 001) 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 001)- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Site Management (Site 001) 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 001) 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "5.1 Site Management (Site 002) ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "5.1.1 Site Management (Site 002) ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Site Management (Site 002)',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Site Management (Site 002) document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Site Management (Site 002) for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 002)- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Site Management (Site 002) 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 002) 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 002)- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Site Management (Site 002) 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 002) 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "5.1 Site Management (Site 003)",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "5.1.1 Site Management (Site 003)",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Site Management (Site 003)',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Site Management (Site 003) document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Site Management (Site 003) for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 003)- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Site Management (Site 003)1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 003) 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 003)- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Site Management (Site 003) 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 003) 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "5.1 Site Management (Site 004)",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "5.1.1 Site Management (Site 004)",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Site Management (Site 004)',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Site Management (Site 004) document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Site Management (Site 004) for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 004)- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Site Management (Site 004) 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 004) 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Site Management (Site 004)- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Site Management (Site 004) 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Site Management (Site 004) 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "6.1 IP & Trial Supplies ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "6.1.1 IP & Trial Supplies ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'IP & Trial Supplies',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The IP & Trial Supplies document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'IP & Trial Supplies for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'IP & Trial Supplies- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'IP & Trial Supplies 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The IP & Trial Supplies 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'IP & Trial Supplies- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The IP & Trial Supplies 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The IP & Trial Supplies 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "7.1 Safety Reporting ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "7.1.1 Safety Reporting ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Safety Reporting',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Safety Reporting document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Safety Reporting for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Safety Reporting- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Safety Reporting 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Safety Reporting 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Safety Reporting- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Safety Reporting 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Safety Reporting 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "8.1 Central and Local Testing",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "8.1.1 Central and Local Testing",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Central and Local Testing',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Central and Local Testing document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Central and Local Testing for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Central and Local Testing- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Central and Local Testing 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Central and Local Testing 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Central and Local Testing- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Central and Local Testing 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Central and Local Testing 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "9.1 Third Parties (LabCorp) ",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "9.1.1 Third Parties (LabCorp) ",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Third Parties (LabCorp)',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The RThird Parties (LabCorp) document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Third Parties (LabCorp) for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Third Parties (LabCorp)- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Third Parties (LabCorp) 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Third Parties (LabCorp) 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Third Parties (LabCorp)- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Third Parties (LabCorp) 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Third Parties (LabCorp) 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              }
            ]
          }
        ],
        childrenLineItems: []
      },


      {
        icon: "folder",
        title: "10.0 Third Parties (Veristat)",
        type: "Section",
        childrenSections: [
          {
            icon: "folder",
            title: "10.1 Third Parties (Veristat)",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "10.1.1 Third Parties (Veristat)",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Third Parties (Veristat)',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Third Parties (Veristat) document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Third Parties (Veristat) for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Third Parties (Veristat)- 1A',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'Third Parties (Veristat) 1A is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Anderson', 'Alicia Smith'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Third Parties (Veristat) 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Third Parties (Veristat)- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Third Parties (Veristat) 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Third Parties (Veristat) 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
            title: "11.1 Statistics",
            type: "Section",
            childrenSections: [
              {
                icon: "folder",
                title: "11.1.1 Statistics",
                type: "Section",
                childrenSections: [],
                childrenLineItems:[
                  {
                    icon: 'assignment',
                    modifyRights: ['Study Director', 'Study Facilitator'],
                    title: 'Statistics',
                    workflow: ['Workflow1', 'Workflow2', 'workflow3'],
                    description: 'The Statistics document is a document that includes the instruction to the investigators at each site for how the study will be managed by bhe PI',
                    assignee: ['Rob Carpenter', 'John Smith'],
                    dueDate: 'Yesterday',
                    qcCheck: ['Passed'],
                    lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                    milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                    country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                    siteNumber: ['1', '2', '3', '4'],
                    patientNumber: ['111', '112', '113', '114'],
                    comments: 'Statistics for this study will be delivered to investigator site in person by the CRA'
                  },
                ],
              }

            ],
            childrenLineItems: [
              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Statistics- 1A',
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
                comments: 'The Statistics 1A was conducted on patients with mild conditions related to treatment from the medicine 120-1a. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
              },

              {
                icon: 'assignment',
                modifyRights: ['Study Director', 'Study Facilitator', 'Study Secretary'],
                title: 'Statistics- 1B',
                workflow: ['Workflow3', 'Workflow4'],
                description: 'The Statistics 1B is a document that includes the first round of results to the Regulatory Study conducted on site',
                assignee: ['Jon Beckstrand', 'Alicia Garcia'],
                dueDate: 'Today',
                qcCheck: ['Passed'],
                lifecycle: ['Study 123-All Sites LC', 'Study 234- Select Sites LC'],
                milestone: ['Study Start Up', 'Study Implement', 'Study Conclusion'],
                country: ['USA', 'Canada', 'Mexico', 'Japan', 'Australia'],
                siteNumber: ['1', '2', '3', '4'],
                patientNumber: ['111', '112', '113', '114'],
                comments: 'The Statistics 1B was conducted on patients with mild conditions related to treatment from the medicine 120-1b. These patients are to go undergo further trial of medicine 120-1a with variations. See 9.0 Third Parties sections for more information.'
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
