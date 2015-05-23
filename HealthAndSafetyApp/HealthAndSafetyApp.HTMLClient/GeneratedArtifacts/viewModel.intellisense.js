/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }]
    });

    lightSwitchApplication.AddEditHealthAndSafetyIncident.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.HealthAndSafetyIncident
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.HealthAndSafetyIncident
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        ReportedBy: {
            _$class: msls.ContentItem,
            _$name: "ReportedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.Employee
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "ReportedBy",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.Employee,
            value: String
        },
        IncidentDate: {
            _$class: msls.ContentItem,
            _$name: "IncidentDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        IncidentDescription: {
            _$class: msls.ContentItem,
            _$name: "IncidentDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        IncidentStatus: {
            _$class: msls.ContentItem,
            _$name: "IncidentStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.IncidentStatus
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "IncidentStatus",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentStatus,
            value: lightSwitchApplication.IncidentStatus
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.HealthAndSafetyIncident
        },
        PersonsInjured: {
            _$class: msls.ContentItem,
            _$name: "PersonsInjured",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        IncidentAtWork: {
            _$class: msls.ContentItem,
            _$name: "IncidentAtWork",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        IncidentLocation: {
            _$class: msls.ContentItem,
            _$name: "IncidentLocation",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        ReportedTo: {
            _$class: msls.ContentItem,
            _$name: "ReportedTo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.Employee
        },
        Employee1: {
            _$class: msls.ContentItem,
            _$name: "Employee1",
            _$parentName: "ReportedTo",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "Employee1",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "Employee1",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.Employee,
            value: String
        },
        TargetInvestigationDate: {
            _$class: msls.ContentItem,
            _$name: "TargetInvestigationDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        DateReported: {
            _$class: msls.ContentItem,
            _$name: "DateReported",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        IncidentPersons: {
            _$class: msls.ContentItem,
            _$name: "IncidentPersons",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        IncidentPersons1: {
            _$class: msls.ContentItem,
            _$name: "IncidentPersons1",
            _$parentName: "IncidentPersons",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
                _$entry: {
                    elementType: lightSwitchApplication.IncidentPerson
                }
            }
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "IncidentPersons1",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.IncidentPerson
        },
        IncidentPersonForename: {
            _$class: msls.ContentItem,
            _$name: "IncidentPersonForename",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: String
        },
        IncidentPersonSurname: {
            _$class: msls.ContentItem,
            _$name: "IncidentPersonSurname",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: String
        },
        PersonType1: {
            _$class: msls.ContentItem,
            _$name: "PersonType1",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.PersonType
        },
        InjuryType: {
            _$class: msls.ContentItem,
            _$name: "InjuryType",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.InjuryType
        },
        IncidentOutcomes: {
            _$class: msls.ContentItem,
            _$name: "IncidentOutcomes",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.IncidentOutcome
        },
        WorkDaysLost: {
            _$class: msls.ContentItem,
            _$name: "WorkDaysLost",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentPerson,
            value: Number
        },
        IncidentWitnesses: {
            _$class: msls.ContentItem,
            _$name: "IncidentWitnesses",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        IncidentWitnesses1: {
            _$class: msls.ContentItem,
            _$name: "IncidentWitnesses1",
            _$parentName: "IncidentWitnesses",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
                _$entry: {
                    elementType: lightSwitchApplication.IncidentWitness
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "IncidentWitnesses1",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentWitness,
            value: lightSwitchApplication.IncidentWitness
        },
        Forename: {
            _$class: msls.ContentItem,
            _$name: "Forename",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        Surname: {
            _$class: msls.ContentItem,
            _$name: "Surname",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        PersonType: {
            _$class: msls.ContentItem,
            _$name: "PersonType",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentWitness,
            value: lightSwitchApplication.PersonType
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        EMail: {
            _$class: msls.ContentItem,
            _$name: "EMail",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        ImmediateActionGroup: {
            _$class: msls.ContentItem,
            _$name: "ImmediateActionGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        ImmediateAction: {
            _$class: msls.ContentItem,
            _$name: "ImmediateAction",
            _$parentName: "ImmediateActionGroup",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: String
        },
        AdditionalCommentGroup: {
            _$class: msls.ContentItem,
            _$name: "AdditionalCommentGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        AdditionalComments: {
            _$class: msls.ContentItem,
            _$name: "AdditionalComments",
            _$parentName: "AdditionalCommentGroup",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: String
        },
        InvestigationGroup: {
            _$class: msls.ContentItem,
            _$name: "InvestigationGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: lightSwitchApplication.AddEditHealthAndSafetyIncident
        },
        HealthAndSafetyIncident_InvestigationStart: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncident_InvestigationStart",
            _$parentName: "InvestigationGroup",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: Date
        },
        HealthAndSafetyIncident_RootCauseIdentified: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncident_RootCauseIdentified",
            _$parentName: "InvestigationGroup",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: String
        },
        HealthAndSafetyIncident_PreventativeAction: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncident_PreventativeAction",
            _$parentName: "InvestigationGroup",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            data: lightSwitchApplication.AddEditHealthAndSafetyIncident,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHealthAndSafetyIncident
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditHealthAndSafetyIncident, {
        /// <field>
        /// Called when a new AddEditHealthAndSafetyIncident screen is created.
        /// <br/>created(msls.application.AddEditHealthAndSafetyIncident screen)
        /// </field>
        created: [lightSwitchApplication.AddEditHealthAndSafetyIncident],
        /// <field>
        /// Called before changes on an active AddEditHealthAndSafetyIncident screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditHealthAndSafetyIncident screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditHealthAndSafetyIncident],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("left"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ReportedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReportedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("ReportedBy"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("Employee"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("LastName"); }],
        /// <field>
        /// Called after the IncidentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentDate"); }],
        /// <field>
        /// Called after the IncidentDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentDescription"); }],
        /// <field>
        /// Called after the IncidentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentStatus"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("right"); }],
        /// <field>
        /// Called after the PersonsInjured content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonsInjured_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("PersonsInjured"); }],
        /// <field>
        /// Called after the IncidentAtWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentAtWork_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentAtWork"); }],
        /// <field>
        /// Called after the IncidentLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentLocation"); }],
        /// <field>
        /// Called after the ReportedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReportedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("ReportedTo"); }],
        /// <field>
        /// Called after the Employee1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("Employee1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the TargetInvestigationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetInvestigationDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("TargetInvestigationDate"); }],
        /// <field>
        /// Called after the DateReported content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateReported_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("DateReported"); }],
        /// <field>
        /// Called after the IncidentPersons content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentPersons_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentPersons"); }],
        /// <field>
        /// Called after the IncidentPersons1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentPersons1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentPersons1"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the IncidentPersonForename content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentPersonForename_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentPersonForename"); }],
        /// <field>
        /// Called after the IncidentPersonSurname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentPersonSurname_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentPersonSurname"); }],
        /// <field>
        /// Called after the PersonType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("PersonType1"); }],
        /// <field>
        /// Called after the InjuryType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InjuryType_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("InjuryType"); }],
        /// <field>
        /// Called after the IncidentOutcomes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentOutcomes_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentOutcomes"); }],
        /// <field>
        /// Called after the WorkDaysLost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkDaysLost_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("WorkDaysLost"); }],
        /// <field>
        /// Called after the IncidentWitnesses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentWitnesses_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentWitnesses"); }],
        /// <field>
        /// Called after the IncidentWitnesses1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentWitnesses1_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("IncidentWitnesses1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Forename content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Forename_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("Forename"); }],
        /// <field>
        /// Called after the Surname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Surname_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("Surname"); }],
        /// <field>
        /// Called after the PersonType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("PersonType"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("Phone"); }],
        /// <field>
        /// Called after the EMail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EMail_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("EMail"); }],
        /// <field>
        /// Called after the ImmediateActionGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImmediateActionGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("ImmediateActionGroup"); }],
        /// <field>
        /// Called after the ImmediateAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImmediateAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("ImmediateAction"); }],
        /// <field>
        /// Called after the AdditionalCommentGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdditionalCommentGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("AdditionalCommentGroup"); }],
        /// <field>
        /// Called after the AdditionalComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdditionalComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("AdditionalComments"); }],
        /// <field>
        /// Called after the InvestigationGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvestigationGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("InvestigationGroup"); }],
        /// <field>
        /// Called after the HealthAndSafetyIncident_InvestigationStart content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncident_InvestigationStart_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("HealthAndSafetyIncident_InvestigationStart"); }],
        /// <field>
        /// Called after the HealthAndSafetyIncident_RootCauseIdentified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncident_RootCauseIdentified_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("HealthAndSafetyIncident_RootCauseIdentified"); }],
        /// <field>
        /// Called after the HealthAndSafetyIncident_PreventativeAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncident_PreventativeAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditHealthAndSafetyIncident().findContentItem("HealthAndSafetyIncident_PreventativeAction"); }]
    });

    lightSwitchApplication.AddEditIncidentOutcome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentOutcome
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIncidentOutcome,
            data: lightSwitchApplication.AddEditIncidentOutcome,
            value: lightSwitchApplication.AddEditIncidentOutcome
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIncidentOutcome,
            data: lightSwitchApplication.AddEditIncidentOutcome,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentOutcome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIncidentOutcome, {
        /// <field>
        /// Called when a new AddEditIncidentOutcome screen is created.
        /// <br/>created(msls.application.AddEditIncidentOutcome screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIncidentOutcome],
        /// <field>
        /// Called before changes on an active AddEditIncidentOutcome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIncidentOutcome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIncidentOutcome],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentOutcome().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentOutcome().findContentItem("Outcome"); }]
    });

    lightSwitchApplication.AddEditIncidentPerson.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentPerson
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.AddEditIncidentPerson,
            value: lightSwitchApplication.AddEditIncidentPerson
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.AddEditIncidentPerson,
            value: lightSwitchApplication.IncidentPerson
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.IncidentPerson
        },
        IncidentPersonForename: {
            _$class: msls.ContentItem,
            _$name: "IncidentPersonForename",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: String
        },
        IncidentPersonSurname: {
            _$class: msls.ContentItem,
            _$name: "IncidentPersonSurname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: String
        },
        PersonType: {
            _$class: msls.ContentItem,
            _$name: "PersonType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.PersonType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PersonType",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.PersonType,
            value: lightSwitchApplication.PersonType
        },
        Occupation: {
            _$class: msls.ContentItem,
            _$name: "Occupation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.IncidentPerson
        },
        InjuryType: {
            _$class: msls.ContentItem,
            _$name: "InjuryType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.InjuryType
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "InjuryType",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.InjuryType,
            value: lightSwitchApplication.InjuryType
        },
        IncidentOutcomes: {
            _$class: msls.ContentItem,
            _$name: "IncidentOutcomes",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: lightSwitchApplication.IncidentOutcome
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "IncidentOutcomes",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentOutcome,
            value: lightSwitchApplication.IncidentOutcome
        },
        WorkDaysLost: {
            _$class: msls.ContentItem,
            _$name: "WorkDaysLost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIncidentPerson,
            data: lightSwitchApplication.IncidentPerson,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentPerson
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIncidentPerson, {
        /// <field>
        /// Called when a new AddEditIncidentPerson screen is created.
        /// <br/>created(msls.application.AddEditIncidentPerson screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIncidentPerson],
        /// <field>
        /// Called before changes on an active AddEditIncidentPerson screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIncidentPerson screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIncidentPerson],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("left"); }],
        /// <field>
        /// Called after the IncidentPersonForename content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentPersonForename_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("IncidentPersonForename"); }],
        /// <field>
        /// Called after the IncidentPersonSurname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentPersonSurname_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("IncidentPersonSurname"); }],
        /// <field>
        /// Called after the PersonType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("PersonType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Occupation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Occupation_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("Occupation"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("right"); }],
        /// <field>
        /// Called after the InjuryType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InjuryType_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("InjuryType"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the IncidentOutcomes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentOutcomes_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("IncidentOutcomes"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the WorkDaysLost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkDaysLost_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentPerson().findContentItem("WorkDaysLost"); }]
    });

    lightSwitchApplication.AddEditIncidentStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentStatus
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIncidentStatus,
            data: lightSwitchApplication.AddEditIncidentStatus,
            value: lightSwitchApplication.AddEditIncidentStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIncidentStatus,
            data: lightSwitchApplication.AddEditIncidentStatus,
            value: lightSwitchApplication.IncidentStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIncidentStatus,
            data: lightSwitchApplication.IncidentStatus,
            value: String
        },
        StatusType: {
            _$class: msls.ContentItem,
            _$name: "StatusType",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIncidentStatus,
            data: lightSwitchApplication.IncidentStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIncidentStatus, {
        /// <field>
        /// Called when a new AddEditIncidentStatus screen is created.
        /// <br/>created(msls.application.AddEditIncidentStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIncidentStatus],
        /// <field>
        /// Called before changes on an active AddEditIncidentStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIncidentStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIncidentStatus],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentStatus().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentStatus().findContentItem("Status"); }],
        /// <field>
        /// Called after the StatusType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusType_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentStatus().findContentItem("StatusType"); }]
    });

    lightSwitchApplication.AddEditIncidentWitness.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentWitness
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.AddEditIncidentWitness,
            value: lightSwitchApplication.AddEditIncidentWitness
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.AddEditIncidentWitness,
            value: lightSwitchApplication.IncidentWitness
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: lightSwitchApplication.IncidentWitness
        },
        Forename: {
            _$class: msls.ContentItem,
            _$name: "Forename",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        Surname: {
            _$class: msls.ContentItem,
            _$name: "Surname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        PersonType: {
            _$class: msls.ContentItem,
            _$name: "PersonType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: lightSwitchApplication.PersonType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PersonType",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.PersonType,
            value: lightSwitchApplication.PersonType
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        EMail: {
            _$class: msls.ContentItem,
            _$name: "EMail",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: lightSwitchApplication.IncidentWitness
        },
        Statement: {
            _$class: msls.ContentItem,
            _$name: "Statement",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: String
        },
        StatementDate: {
            _$class: msls.ContentItem,
            _$name: "StatementDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIncidentWitness,
            data: lightSwitchApplication.IncidentWitness,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIncidentWitness
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIncidentWitness, {
        /// <field>
        /// Called when a new AddEditIncidentWitness screen is created.
        /// <br/>created(msls.application.AddEditIncidentWitness screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIncidentWitness],
        /// <field>
        /// Called before changes on an active AddEditIncidentWitness screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIncidentWitness screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIncidentWitness],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("left"); }],
        /// <field>
        /// Called after the Forename content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Forename_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("Forename"); }],
        /// <field>
        /// Called after the Surname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Surname_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("Surname"); }],
        /// <field>
        /// Called after the PersonType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("PersonType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("Phone"); }],
        /// <field>
        /// Called after the EMail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EMail_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("EMail"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("right"); }],
        /// <field>
        /// Called after the Statement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Statement_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("Statement"); }],
        /// <field>
        /// Called after the StatementDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatementDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIncidentWitness().findContentItem("StatementDate"); }]
    });

    lightSwitchApplication.AddEditInjuryType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditInjuryType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditInjuryType,
            data: lightSwitchApplication.AddEditInjuryType,
            value: lightSwitchApplication.AddEditInjuryType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditInjuryType,
            data: lightSwitchApplication.AddEditInjuryType,
            value: lightSwitchApplication.InjuryType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditInjuryType,
            data: lightSwitchApplication.InjuryType,
            value: lightSwitchApplication.InjuryType
        },
        Injury: {
            _$class: msls.ContentItem,
            _$name: "Injury",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInjuryType,
            data: lightSwitchApplication.InjuryType,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditInjuryType,
            data: lightSwitchApplication.InjuryType,
            value: lightSwitchApplication.InjuryType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditInjuryType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditInjuryType, {
        /// <field>
        /// Called when a new AddEditInjuryType screen is created.
        /// <br/>created(msls.application.AddEditInjuryType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditInjuryType],
        /// <field>
        /// Called before changes on an active AddEditInjuryType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditInjuryType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditInjuryType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditInjuryType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditInjuryType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditInjuryType().findContentItem("left"); }],
        /// <field>
        /// Called after the Injury content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Injury_postRender: [$element, function () { return new lightSwitchApplication.AddEditInjuryType().findContentItem("Injury"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditInjuryType().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditPersonType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPersonType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPersonType,
            data: lightSwitchApplication.AddEditPersonType,
            value: lightSwitchApplication.AddEditPersonType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditPersonType,
            data: lightSwitchApplication.AddEditPersonType,
            value: lightSwitchApplication.PersonType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPersonType,
            data: lightSwitchApplication.PersonType,
            value: lightSwitchApplication.PersonType
        },
        TypeOfPerson: {
            _$class: msls.ContentItem,
            _$name: "TypeOfPerson",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPersonType,
            data: lightSwitchApplication.PersonType,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPersonType,
            data: lightSwitchApplication.PersonType,
            value: lightSwitchApplication.PersonType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPersonType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPersonType, {
        /// <field>
        /// Called when a new AddEditPersonType screen is created.
        /// <br/>created(msls.application.AddEditPersonType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPersonType],
        /// <field>
        /// Called before changes on an active AddEditPersonType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPersonType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPersonType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditPersonType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPersonType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPersonType().findContentItem("left"); }],
        /// <field>
        /// Called after the TypeOfPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfPerson_postRender: [$element, function () { return new lightSwitchApplication.AddEditPersonType().findContentItem("TypeOfPerson"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPersonType().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseHealthAndSafetyIncidents.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents
        },
        HealthAndSafetyIncidentList: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncidentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            value: lightSwitchApplication.BrowseHealthAndSafetyIncidents
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "HealthAndSafetyIncidentList",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            value: String
        },
        HealthAndSafetyIncident: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncident",
            _$parentName: "HealthAndSafetyIncidentList",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
                _$entry: {
                    elementType: lightSwitchApplication.HealthAndSafetyIncident
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "HealthAndSafetyIncident",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.HealthAndSafetyIncident
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        IncidentDate: {
            _$class: msls.ContentItem,
            _$name: "IncidentDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        IncidentDescription: {
            _$class: msls.ContentItem,
            _$name: "IncidentDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        HappenedAtWork: {
            _$class: msls.ContentItem,
            _$name: "HappenedAtWork",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        PersonsInjured: {
            _$class: msls.ContentItem,
            _$name: "PersonsInjured",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        DateReported: {
            _$class: msls.ContentItem,
            _$name: "DateReported",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        ReportedTo: {
            _$class: msls.ContentItem,
            _$name: "ReportedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "ReportedTo",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "ReportedTo",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.Employee,
            value: String
        },
        IncidentStatus: {
            _$class: msls.ContentItem,
            _$name: "IncidentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.IncidentStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHealthAndSafetyIncidents
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseHealthAndSafetyIncidents, {
        /// <field>
        /// Called when a new BrowseHealthAndSafetyIncidents screen is created.
        /// <br/>created(msls.application.BrowseHealthAndSafetyIncidents screen)
        /// </field>
        created: [lightSwitchApplication.BrowseHealthAndSafetyIncidents],
        /// <field>
        /// Called before changes on an active BrowseHealthAndSafetyIncidents screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseHealthAndSafetyIncidents screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseHealthAndSafetyIncidents],
        /// <field>
        /// Called after the HealthAndSafetyIncidentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncidentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("HealthAndSafetyIncidentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("Search"); }],
        /// <field>
        /// Called after the HealthAndSafetyIncident content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncident_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("HealthAndSafetyIncident"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("Reference"); }],
        /// <field>
        /// Called after the IncidentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("IncidentDate"); }],
        /// <field>
        /// Called after the IncidentDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("IncidentDescription"); }],
        /// <field>
        /// Called after the HappenedAtWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HappenedAtWork_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("HappenedAtWork"); }],
        /// <field>
        /// Called after the PersonsInjured content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonsInjured_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("PersonsInjured"); }],
        /// <field>
        /// Called after the DateReported content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateReported_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("DateReported"); }],
        /// <field>
        /// Called after the ReportedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReportedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("ReportedTo"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("LastName"); }],
        /// <field>
        /// Called after the IncidentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseHealthAndSafetyIncidents().findContentItem("IncidentStatus"); }]
    });

    lightSwitchApplication.BrowseIncidentOutcomes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIncidentOutcomes
        },
        IncidentOutcomeList: {
            _$class: msls.ContentItem,
            _$name: "IncidentOutcomeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIncidentOutcomes,
            data: lightSwitchApplication.BrowseIncidentOutcomes,
            value: lightSwitchApplication.BrowseIncidentOutcomes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "IncidentOutcomeList",
            screen: lightSwitchApplication.BrowseIncidentOutcomes,
            data: lightSwitchApplication.BrowseIncidentOutcomes,
            value: String
        },
        IncidentOutcome: {
            _$class: msls.ContentItem,
            _$name: "IncidentOutcome",
            _$parentName: "IncidentOutcomeList",
            screen: lightSwitchApplication.BrowseIncidentOutcomes,
            data: lightSwitchApplication.BrowseIncidentOutcomes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIncidentOutcomes,
                _$entry: {
                    elementType: lightSwitchApplication.IncidentOutcome
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "IncidentOutcome",
            screen: lightSwitchApplication.BrowseIncidentOutcomes,
            data: lightSwitchApplication.IncidentOutcome,
            value: lightSwitchApplication.IncidentOutcome
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentOutcomes,
            data: lightSwitchApplication.IncidentOutcome,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIncidentOutcomes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIncidentOutcomes, {
        /// <field>
        /// Called when a new BrowseIncidentOutcomes screen is created.
        /// <br/>created(msls.application.BrowseIncidentOutcomes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIncidentOutcomes],
        /// <field>
        /// Called before changes on an active BrowseIncidentOutcomes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIncidentOutcomes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIncidentOutcomes],
        /// <field>
        /// Called after the IncidentOutcomeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentOutcomeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentOutcomes().findContentItem("IncidentOutcomeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentOutcomes().findContentItem("Search"); }],
        /// <field>
        /// Called after the IncidentOutcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentOutcome_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentOutcomes().findContentItem("IncidentOutcome"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentOutcomes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentOutcomes().findContentItem("Outcome"); }]
    });

    lightSwitchApplication.BrowseIncidentsReportedToMe.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe
        },
        HealthAndSafetyIncidentList: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncidentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.BrowseIncidentsReportedToMe,
            value: lightSwitchApplication.BrowseIncidentsReportedToMe
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "HealthAndSafetyIncidentList",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.BrowseIncidentsReportedToMe,
            value: String
        },
        HealthAndSafetyIncident: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncident",
            _$parentName: "HealthAndSafetyIncidentList",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.BrowseIncidentsReportedToMe,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
                _$entry: {
                    elementType: lightSwitchApplication.HealthAndSafetyIncident
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "HealthAndSafetyIncident",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.HealthAndSafetyIncident
        },
        IncidentDate: {
            _$class: msls.ContentItem,
            _$name: "IncidentDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        IncidentDescription: {
            _$class: msls.ContentItem,
            _$name: "IncidentDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        IncidentAtWork: {
            _$class: msls.ContentItem,
            _$name: "IncidentAtWork",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        PersonsInjured: {
            _$class: msls.ContentItem,
            _$name: "PersonsInjured",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        DateReported: {
            _$class: msls.ContentItem,
            _$name: "DateReported",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        IncidentStatus: {
            _$class: msls.ContentItem,
            _$name: "IncidentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.IncidentStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIncidentsReportedToMe
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIncidentsReportedToMe, {
        /// <field>
        /// Called when a new BrowseIncidentsReportedToMe screen is created.
        /// <br/>created(msls.application.BrowseIncidentsReportedToMe screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIncidentsReportedToMe],
        /// <field>
        /// Called before changes on an active BrowseIncidentsReportedToMe screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIncidentsReportedToMe screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIncidentsReportedToMe],
        /// <field>
        /// Called after the HealthAndSafetyIncidentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncidentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("HealthAndSafetyIncidentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("Search"); }],
        /// <field>
        /// Called after the HealthAndSafetyIncident content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncident_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("HealthAndSafetyIncident"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the IncidentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("IncidentDate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("Reference"); }],
        /// <field>
        /// Called after the IncidentDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("IncidentDescription"); }],
        /// <field>
        /// Called after the IncidentAtWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentAtWork_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("IncidentAtWork"); }],
        /// <field>
        /// Called after the PersonsInjured content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonsInjured_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("PersonsInjured"); }],
        /// <field>
        /// Called after the DateReported content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateReported_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("DateReported"); }],
        /// <field>
        /// Called after the IncidentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentsReportedToMe().findContentItem("IncidentStatus"); }]
    });

    lightSwitchApplication.BrowseIncidentStatuses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIncidentStatuses
        },
        IncidentStatusList: {
            _$class: msls.ContentItem,
            _$name: "IncidentStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIncidentStatuses,
            data: lightSwitchApplication.BrowseIncidentStatuses,
            value: lightSwitchApplication.BrowseIncidentStatuses
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "IncidentStatusList",
            screen: lightSwitchApplication.BrowseIncidentStatuses,
            data: lightSwitchApplication.BrowseIncidentStatuses,
            value: String
        },
        IncidentStatus: {
            _$class: msls.ContentItem,
            _$name: "IncidentStatus",
            _$parentName: "IncidentStatusList",
            screen: lightSwitchApplication.BrowseIncidentStatuses,
            data: lightSwitchApplication.BrowseIncidentStatuses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIncidentStatuses,
                _$entry: {
                    elementType: lightSwitchApplication.IncidentStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "IncidentStatus",
            screen: lightSwitchApplication.BrowseIncidentStatuses,
            data: lightSwitchApplication.IncidentStatus,
            value: lightSwitchApplication.IncidentStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentStatuses,
            data: lightSwitchApplication.IncidentStatus,
            value: String
        },
        StatusType: {
            _$class: msls.ContentItem,
            _$name: "StatusType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIncidentStatuses,
            data: lightSwitchApplication.IncidentStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIncidentStatuses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIncidentStatuses, {
        /// <field>
        /// Called when a new BrowseIncidentStatuses screen is created.
        /// <br/>created(msls.application.BrowseIncidentStatuses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIncidentStatuses],
        /// <field>
        /// Called before changes on an active BrowseIncidentStatuses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIncidentStatuses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIncidentStatuses],
        /// <field>
        /// Called after the IncidentStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentStatuses().findContentItem("IncidentStatusList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentStatuses().findContentItem("Search"); }],
        /// <field>
        /// Called after the IncidentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentStatuses().findContentItem("IncidentStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentStatuses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentStatuses().findContentItem("Status"); }],
        /// <field>
        /// Called after the StatusType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusType_postRender: [$element, function () { return new lightSwitchApplication.BrowseIncidentStatuses().findContentItem("StatusType"); }]
    });

    lightSwitchApplication.BrowseInjuryTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseInjuryTypes
        },
        InjuryTypeList: {
            _$class: msls.ContentItem,
            _$name: "InjuryTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseInjuryTypes,
            data: lightSwitchApplication.BrowseInjuryTypes,
            value: lightSwitchApplication.BrowseInjuryTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "InjuryTypeList",
            screen: lightSwitchApplication.BrowseInjuryTypes,
            data: lightSwitchApplication.BrowseInjuryTypes,
            value: String
        },
        InjuryType: {
            _$class: msls.ContentItem,
            _$name: "InjuryType",
            _$parentName: "InjuryTypeList",
            screen: lightSwitchApplication.BrowseInjuryTypes,
            data: lightSwitchApplication.BrowseInjuryTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseInjuryTypes,
                _$entry: {
                    elementType: lightSwitchApplication.InjuryType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "InjuryType",
            screen: lightSwitchApplication.BrowseInjuryTypes,
            data: lightSwitchApplication.InjuryType,
            value: lightSwitchApplication.InjuryType
        },
        Injury: {
            _$class: msls.ContentItem,
            _$name: "Injury",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseInjuryTypes,
            data: lightSwitchApplication.InjuryType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseInjuryTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseInjuryTypes, {
        /// <field>
        /// Called when a new BrowseInjuryTypes screen is created.
        /// <br/>created(msls.application.BrowseInjuryTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseInjuryTypes],
        /// <field>
        /// Called before changes on an active BrowseInjuryTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseInjuryTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseInjuryTypes],
        /// <field>
        /// Called after the InjuryTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InjuryTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseInjuryTypes().findContentItem("InjuryTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseInjuryTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the InjuryType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InjuryType_postRender: [$element, function () { return new lightSwitchApplication.BrowseInjuryTypes().findContentItem("InjuryType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseInjuryTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Injury content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Injury_postRender: [$element, function () { return new lightSwitchApplication.BrowseInjuryTypes().findContentItem("Injury"); }]
    });

    lightSwitchApplication.BrowseOpenIncidents.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOpenIncidents
        },
        HealthAndSafetyIncidentList: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncidentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.BrowseOpenIncidents,
            value: lightSwitchApplication.BrowseOpenIncidents
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "HealthAndSafetyIncidentList",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.BrowseOpenIncidents,
            value: String
        },
        HealthAndSafetyIncident: {
            _$class: msls.ContentItem,
            _$name: "HealthAndSafetyIncident",
            _$parentName: "HealthAndSafetyIncidentList",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.BrowseOpenIncidents,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseOpenIncidents,
                _$entry: {
                    elementType: lightSwitchApplication.HealthAndSafetyIncident
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "HealthAndSafetyIncident",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.HealthAndSafetyIncident
        },
        IncidentDate: {
            _$class: msls.ContentItem,
            _$name: "IncidentDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Date
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        IncidentDescription: {
            _$class: msls.ContentItem,
            _$name: "IncidentDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: String
        },
        IncidentAtWork: {
            _$class: msls.ContentItem,
            _$name: "IncidentAtWork",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        PersonsInjured: {
            _$class: msls.ContentItem,
            _$name: "PersonsInjured",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: Boolean
        },
        ReportedTo: {
            _$class: msls.ContentItem,
            _$name: "ReportedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.Employee
        },
        IncidentStatus: {
            _$class: msls.ContentItem,
            _$name: "IncidentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOpenIncidents,
            data: lightSwitchApplication.HealthAndSafetyIncident,
            value: lightSwitchApplication.IncidentStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOpenIncidents
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseOpenIncidents, {
        /// <field>
        /// Called when a new BrowseOpenIncidents screen is created.
        /// <br/>created(msls.application.BrowseOpenIncidents screen)
        /// </field>
        created: [lightSwitchApplication.BrowseOpenIncidents],
        /// <field>
        /// Called before changes on an active BrowseOpenIncidents screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseOpenIncidents screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseOpenIncidents],
        /// <field>
        /// Called after the HealthAndSafetyIncidentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncidentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("HealthAndSafetyIncidentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("Search"); }],
        /// <field>
        /// Called after the HealthAndSafetyIncident content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HealthAndSafetyIncident_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("HealthAndSafetyIncident"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the IncidentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("IncidentDate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("Reference"); }],
        /// <field>
        /// Called after the IncidentDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("IncidentDescription"); }],
        /// <field>
        /// Called after the IncidentAtWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentAtWork_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("IncidentAtWork"); }],
        /// <field>
        /// Called after the PersonsInjured content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonsInjured_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("PersonsInjured"); }],
        /// <field>
        /// Called after the ReportedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReportedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("ReportedTo"); }],
        /// <field>
        /// Called after the IncidentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IncidentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseOpenIncidents().findContentItem("IncidentStatus"); }]
    });

    lightSwitchApplication.BrowsePersonTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePersonTypes
        },
        PersonTypeList: {
            _$class: msls.ContentItem,
            _$name: "PersonTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePersonTypes,
            data: lightSwitchApplication.BrowsePersonTypes,
            value: lightSwitchApplication.BrowsePersonTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "PersonTypeList",
            screen: lightSwitchApplication.BrowsePersonTypes,
            data: lightSwitchApplication.BrowsePersonTypes,
            value: String
        },
        PersonType: {
            _$class: msls.ContentItem,
            _$name: "PersonType",
            _$parentName: "PersonTypeList",
            screen: lightSwitchApplication.BrowsePersonTypes,
            data: lightSwitchApplication.BrowsePersonTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePersonTypes,
                _$entry: {
                    elementType: lightSwitchApplication.PersonType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PersonType",
            screen: lightSwitchApplication.BrowsePersonTypes,
            data: lightSwitchApplication.PersonType,
            value: lightSwitchApplication.PersonType
        },
        TypeOfPerson: {
            _$class: msls.ContentItem,
            _$name: "TypeOfPerson",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePersonTypes,
            data: lightSwitchApplication.PersonType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePersonTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePersonTypes, {
        /// <field>
        /// Called when a new BrowsePersonTypes screen is created.
        /// <br/>created(msls.application.BrowsePersonTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePersonTypes],
        /// <field>
        /// Called before changes on an active BrowsePersonTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePersonTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePersonTypes],
        /// <field>
        /// Called after the PersonTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePersonTypes().findContentItem("PersonTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowsePersonTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the PersonType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonType_postRender: [$element, function () { return new lightSwitchApplication.BrowsePersonTypes().findContentItem("PersonType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePersonTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TypeOfPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfPerson_postRender: [$element, function () { return new lightSwitchApplication.BrowsePersonTypes().findContentItem("TypeOfPerson"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        StatsGroup: {
            _$class: msls.ContentItem,
            _$name: "StatsGroup",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        DaysSinceLastIncident: {
            _$class: msls.ContentItem,
            _$name: "DaysSinceLastIncident",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        NumberOfIncidentsThisMonth: {
            _$class: msls.ContentItem,
            _$name: "NumberOfIncidentsThisMonth",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        WorkDaysLostThisMonth: {
            _$class: msls.ContentItem,
            _$name: "WorkDaysLostThisMonth",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        NumberOfOpenIncidents: {
            _$class: msls.ContentItem,
            _$name: "NumberOfOpenIncidents",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ShowBrowseHealthAndSafetyIncidents: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseHealthAndSafetyIncidents",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseIncidentsReportedToMe: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseIncidentsReportedToMe",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseOpenIncidents: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseOpenIncidents",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ShowBrowseEmployees: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseEmployees",
            _$parentName: "Settings",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseIncidentOutcomes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseIncidentOutcomes",
            _$parentName: "Settings",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseIncidentStatuses: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseIncidentStatuses",
            _$parentName: "Settings",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseInjuryTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseInjuryTypes",
            _$parentName: "Settings",
            screen: lightSwitchApplication.Home
        },
        ShowBrowsePersonTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowsePersonTypes",
            _$parentName: "Settings",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ShowBrowseHealthAndSafetyIncidents_Tap method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ShowBrowseHealthAndSafetyIncidents_Tap_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ShowBrowseHealthAndSafetyIncidents_Tap method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ShowBrowseHealthAndSafetyIncidents_Tap_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ShowBrowseIncidentsReportedToMe_Tap method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ShowBrowseIncidentsReportedToMe_Tap_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ShowBrowseIncidentsReportedToMe_Tap method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ShowBrowseIncidentsReportedToMe_Tap_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ShowBrowseOpenIncidents_Tap method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ShowBrowseOpenIncidents_Tap_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ShowBrowseOpenIncidents_Tap method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ShowBrowseOpenIncidents_Tap_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Menu"); }],
        /// <field>
        /// Called after the StatsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatsGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("StatsGroup"); }],
        /// <field>
        /// Called after the DaysSinceLastIncident content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DaysSinceLastIncident_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("DaysSinceLastIncident"); }],
        /// <field>
        /// Called after the NumberOfIncidentsThisMonth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NumberOfIncidentsThisMonth_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("NumberOfIncidentsThisMonth"); }],
        /// <field>
        /// Called after the WorkDaysLostThisMonth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkDaysLostThisMonth_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("WorkDaysLostThisMonth"); }],
        /// <field>
        /// Called after the NumberOfOpenIncidents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NumberOfOpenIncidents_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("NumberOfOpenIncidents"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the ShowBrowseHealthAndSafetyIncidents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseHealthAndSafetyIncidents_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseHealthAndSafetyIncidents"); }],
        /// <field>
        /// Called after the ShowBrowseIncidentsReportedToMe content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseIncidentsReportedToMe_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseIncidentsReportedToMe"); }],
        /// <field>
        /// Called after the ShowBrowseOpenIncidents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseOpenIncidents_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseOpenIncidents"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Settings"); }],
        /// <field>
        /// Called after the ShowBrowseEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseEmployees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseEmployees"); }],
        /// <field>
        /// Called after the ShowBrowseIncidentOutcomes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseIncidentOutcomes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseIncidentOutcomes"); }],
        /// <field>
        /// Called after the ShowBrowseIncidentStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseIncidentStatuses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseIncidentStatuses"); }],
        /// <field>
        /// Called after the ShowBrowseInjuryTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseInjuryTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseInjuryTypes"); }],
        /// <field>
        /// Called after the ShowBrowsePersonTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePersonTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowsePersonTypes"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        StatsGroup: {
            _$class: msls.ContentItem,
            _$name: "StatsGroup",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        DaysSinceLastIncident: {
            _$class: msls.ContentItem,
            _$name: "DaysSinceLastIncident",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        WorkDaysLostThisMonth: {
            _$class: msls.ContentItem,
            _$name: "WorkDaysLostThisMonth",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        NumberOfIncidentsThisMonth: {
            _$class: msls.ContentItem,
            _$name: "NumberOfIncidentsThisMonth",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        NumberOfOpenIncidents: {
            _$class: msls.ContentItem,
            _$name: "NumberOfOpenIncidents",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ShowBrowseHealthAndSafetyIncidents: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseHealthAndSafetyIncidents",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseIncidentsReportedToMe: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseIncidentsReportedToMe",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseOpenIncidents: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseOpenIncidents",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ShowBrowseEmployees: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseEmployees",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseIncidentOutcomes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseIncidentOutcomes",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseIncidentStatuses: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseIncidentStatuses",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseInjuryTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseInjuryTypes",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowsePersonTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowsePersonTypes",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to determine if the ShowBrowseHealthAndSafetyIncidents_Tap method can be executed.
        /// <br/>canExecute(msls.application.MobileHome screen)
        /// </field>
        ShowBrowseHealthAndSafetyIncidents_Tap_canExecute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to execute the ShowBrowseHealthAndSafetyIncidents_Tap method.
        /// <br/>execute(msls.application.MobileHome screen)
        /// </field>
        ShowBrowseHealthAndSafetyIncidents_Tap_execute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to determine if the ShowBrowseIncidentsReportedToMe_Tap method can be executed.
        /// <br/>canExecute(msls.application.MobileHome screen)
        /// </field>
        ShowBrowseIncidentsReportedToMe_Tap_canExecute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to execute the ShowBrowseIncidentsReportedToMe_Tap method.
        /// <br/>execute(msls.application.MobileHome screen)
        /// </field>
        ShowBrowseIncidentsReportedToMe_Tap_execute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to determine if the ShowBrowseOpenIncidents_Tap method can be executed.
        /// <br/>canExecute(msls.application.MobileHome screen)
        /// </field>
        ShowBrowseOpenIncidents_Tap_canExecute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to execute the ShowBrowseOpenIncidents_Tap method.
        /// <br/>execute(msls.application.MobileHome screen)
        /// </field>
        ShowBrowseOpenIncidents_Tap_execute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Menu"); }],
        /// <field>
        /// Called after the StatsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatsGroup_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("StatsGroup"); }],
        /// <field>
        /// Called after the DaysSinceLastIncident content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DaysSinceLastIncident_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("DaysSinceLastIncident"); }],
        /// <field>
        /// Called after the WorkDaysLostThisMonth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkDaysLostThisMonth_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("WorkDaysLostThisMonth"); }],
        /// <field>
        /// Called after the NumberOfIncidentsThisMonth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NumberOfIncidentsThisMonth_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("NumberOfIncidentsThisMonth"); }],
        /// <field>
        /// Called after the NumberOfOpenIncidents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NumberOfOpenIncidents_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("NumberOfOpenIncidents"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Group"); }],
        /// <field>
        /// Called after the ShowBrowseHealthAndSafetyIncidents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseHealthAndSafetyIncidents_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseHealthAndSafetyIncidents"); }],
        /// <field>
        /// Called after the ShowBrowseIncidentsReportedToMe content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseIncidentsReportedToMe_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseIncidentsReportedToMe"); }],
        /// <field>
        /// Called after the ShowBrowseOpenIncidents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseOpenIncidents_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseOpenIncidents"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }],
        /// <field>
        /// Called after the ShowBrowseEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseEmployees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseEmployees"); }],
        /// <field>
        /// Called after the ShowBrowseIncidentOutcomes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseIncidentOutcomes_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseIncidentOutcomes"); }],
        /// <field>
        /// Called after the ShowBrowseIncidentStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseIncidentStatuses_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseIncidentStatuses"); }],
        /// <field>
        /// Called after the ShowBrowseInjuryTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseInjuryTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseInjuryTypes"); }],
        /// <field>
        /// Called after the ShowBrowsePersonTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePersonTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowsePersonTypes"); }]
    });

}(msls.application));