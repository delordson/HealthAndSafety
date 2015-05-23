/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function HealthAndSafetyIncident(entitySet) {
        /// <summary>
        /// Represents the HealthAndSafetyIncident entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this healthAndSafetyIncident.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this healthAndSafetyIncident.
        /// </field>
        /// <field name="Reference" type="String">
        /// Gets or sets the reference for this healthAndSafetyIncident.
        /// </field>
        /// <field name="ReportedBy" type="msls.application.Employee">
        /// Gets or sets the reportedBy for this healthAndSafetyIncident.
        /// </field>
        /// <field name="IncidentDate" type="Date">
        /// Gets or sets the incidentDate for this healthAndSafetyIncident.
        /// </field>
        /// <field name="IncidentDescription" type="String">
        /// Gets or sets the incidentDescription for this healthAndSafetyIncident.
        /// </field>
        /// <field name="IncidentStatus" type="msls.application.IncidentStatus">
        /// Gets or sets the incidentStatus for this healthAndSafetyIncident.
        /// </field>
        /// <field name="HappenedAtWork" type="Boolean">
        /// Gets or sets the happenedAtWork for this healthAndSafetyIncident.
        /// </field>
        /// <field name="PersonsInjured" type="Boolean">
        /// Gets or sets the personsInjured for this healthAndSafetyIncident.
        /// </field>
        /// <field name="IncidentWitnesses" type="msls.EntityCollection" elementType="msls.application.IncidentWitness">
        /// Gets the incidentWitnesses for this healthAndSafetyIncident.
        /// </field>
        /// <field name="ReportedTo" type="msls.application.Employee">
        /// Gets or sets the reportedTo for this healthAndSafetyIncident.
        /// </field>
        /// <field name="TargetInvestigationDate" type="Date">
        /// Gets or sets the targetInvestigationDate for this healthAndSafetyIncident.
        /// </field>
        /// <field name="IncidentLocation" type="String">
        /// Gets or sets the incidentLocation for this healthAndSafetyIncident.
        /// </field>
        /// <field name="DateReported" type="Date">
        /// Gets or sets the dateReported for this healthAndSafetyIncident.
        /// </field>
        /// <field name="AdditionalComments" type="String">
        /// Gets or sets the additionalComments for this healthAndSafetyIncident.
        /// </field>
        /// <field name="ImmediateAction" type="String">
        /// Gets or sets the immediateAction for this healthAndSafetyIncident.
        /// </field>
        /// <field name="IncidentPersons" type="msls.EntityCollection" elementType="msls.application.IncidentPerson">
        /// Gets the incidentPersons for this healthAndSafetyIncident.
        /// </field>
        /// <field name="InvestigationStart" type="Date">
        /// Gets or sets the investigationStart for this healthAndSafetyIncident.
        /// </field>
        /// <field name="RootCauseIdentified" type="String">
        /// Gets or sets the rootCauseIdentified for this healthAndSafetyIncident.
        /// </field>
        /// <field name="PreventativeAction" type="String">
        /// Gets or sets the preventativeAction for this healthAndSafetyIncident.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this healthAndSafetyIncident.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this healthAndSafetyIncident.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this healthAndSafetyIncident.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this healthAndSafetyIncident.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this healthAndSafetyIncident.
        /// </field>
        /// <field name="details" type="msls.application.HealthAndSafetyIncident.Details">
        /// Gets the details for this healthAndSafetyIncident.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="HealthAndSafetyIncidents" type="msls.EntityCollection" elementType="msls.application.HealthAndSafetyIncident">
        /// Gets the healthAndSafetyIncidents for this employee.
        /// </field>
        /// <field name="ReportedByHealthAndSafetyIncidents" type="msls.EntityCollection" elementType="msls.application.HealthAndSafetyIncident">
        /// Gets the reportedByHealthAndSafetyIncidents for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IncidentPerson(entitySet) {
        /// <summary>
        /// Represents the IncidentPerson entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this incidentPerson.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this incidentPerson.
        /// </field>
        /// <field name="IncidentPersonSurname" type="String">
        /// Gets or sets the incidentPersonSurname for this incidentPerson.
        /// </field>
        /// <field name="IncidentPersonForename" type="String">
        /// Gets or sets the incidentPersonForename for this incidentPerson.
        /// </field>
        /// <field name="Occupation" type="String">
        /// Gets or sets the occupation for this incidentPerson.
        /// </field>
        /// <field name="PersonType" type="msls.application.PersonType">
        /// Gets or sets the personType for this incidentPerson.
        /// </field>
        /// <field name="InjuryType" type="msls.application.InjuryType">
        /// Gets or sets the injuryType for this incidentPerson.
        /// </field>
        /// <field name="IncidentOutcomes" type="msls.application.IncidentOutcome">
        /// Gets or sets the incidentOutcomes for this incidentPerson.
        /// </field>
        /// <field name="WorkDaysLost" type="Number">
        /// Gets or sets the workDaysLost for this incidentPerson.
        /// </field>
        /// <field name="HealthAndSafetyIncident" type="msls.application.HealthAndSafetyIncident">
        /// Gets or sets the healthAndSafetyIncident for this incidentPerson.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this incidentPerson.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this incidentPerson.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this incidentPerson.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this incidentPerson.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this incidentPerson.
        /// </field>
        /// <field name="details" type="msls.application.IncidentPerson.Details">
        /// Gets the details for this incidentPerson.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PersonType(entitySet) {
        /// <summary>
        /// Represents the PersonType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this personType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this personType.
        /// </field>
        /// <field name="TypeOfPerson" type="String">
        /// Gets or sets the typeOfPerson for this personType.
        /// </field>
        /// <field name="IncidentPersons" type="msls.EntityCollection" elementType="msls.application.IncidentPerson">
        /// Gets the incidentPersons for this personType.
        /// </field>
        /// <field name="IncidentWitnesses" type="msls.EntityCollection" elementType="msls.application.IncidentWitness">
        /// Gets the incidentWitnesses for this personType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this personType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this personType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this personType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this personType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this personType.
        /// </field>
        /// <field name="details" type="msls.application.PersonType.Details">
        /// Gets the details for this personType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function InjuryType(entitySet) {
        /// <summary>
        /// Represents the InjuryType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this injuryType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this injuryType.
        /// </field>
        /// <field name="Injury" type="String">
        /// Gets or sets the injury for this injuryType.
        /// </field>
        /// <field name="IncidentPersons" type="msls.EntityCollection" elementType="msls.application.IncidentPerson">
        /// Gets the incidentPersons for this injuryType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this injuryType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this injuryType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this injuryType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this injuryType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this injuryType.
        /// </field>
        /// <field name="details" type="msls.application.InjuryType.Details">
        /// Gets the details for this injuryType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IncidentOutcome(entitySet) {
        /// <summary>
        /// Represents the IncidentOutcome entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this incidentOutcome.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this incidentOutcome.
        /// </field>
        /// <field name="Outcome" type="String">
        /// Gets or sets the outcome for this incidentOutcome.
        /// </field>
        /// <field name="IncidentPerson" type="msls.EntityCollection" elementType="msls.application.IncidentPerson">
        /// Gets the incidentPerson for this incidentOutcome.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this incidentOutcome.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this incidentOutcome.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this incidentOutcome.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this incidentOutcome.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this incidentOutcome.
        /// </field>
        /// <field name="details" type="msls.application.IncidentOutcome.Details">
        /// Gets the details for this incidentOutcome.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IncidentWitness(entitySet) {
        /// <summary>
        /// Represents the IncidentWitness entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this incidentWitness.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this incidentWitness.
        /// </field>
        /// <field name="Surname" type="String">
        /// Gets or sets the surname for this incidentWitness.
        /// </field>
        /// <field name="Forename" type="String">
        /// Gets or sets the forename for this incidentWitness.
        /// </field>
        /// <field name="PersonType" type="msls.application.PersonType">
        /// Gets or sets the personType for this incidentWitness.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this incidentWitness.
        /// </field>
        /// <field name="EMail" type="String">
        /// Gets or sets the eMail for this incidentWitness.
        /// </field>
        /// <field name="Statement" type="String">
        /// Gets or sets the statement for this incidentWitness.
        /// </field>
        /// <field name="StatementDate" type="Date">
        /// Gets or sets the statementDate for this incidentWitness.
        /// </field>
        /// <field name="HealthAndSafetyIncident" type="msls.application.HealthAndSafetyIncident">
        /// Gets or sets the healthAndSafetyIncident for this incidentWitness.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this incidentWitness.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this incidentWitness.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this incidentWitness.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this incidentWitness.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this incidentWitness.
        /// </field>
        /// <field name="details" type="msls.application.IncidentWitness.Details">
        /// Gets the details for this incidentWitness.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IncidentStatus(entitySet) {
        /// <summary>
        /// Represents the IncidentStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this incidentStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this incidentStatus.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this incidentStatus.
        /// </field>
        /// <field name="StatusType" type="String">
        /// Gets or sets the statusType for this incidentStatus.
        /// </field>
        /// <field name="HealthAndSafetyIncident" type="msls.EntityCollection" elementType="msls.application.HealthAndSafetyIncident">
        /// Gets the healthAndSafetyIncident for this incidentStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this incidentStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this incidentStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this incidentStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this incidentStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this incidentStatus.
        /// </field>
        /// <field name="details" type="msls.application.IncidentStatus.Details">
        /// Gets the details for this incidentStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="HealthAndSafetyIncidents" type="msls.EntitySet">
        /// Gets the HealthAndSafetyIncidents entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="IncidentPersons" type="msls.EntitySet">
        /// Gets the IncidentPersons entity set.
        /// </field>
        /// <field name="PersonTypes" type="msls.EntitySet">
        /// Gets the PersonTypes entity set.
        /// </field>
        /// <field name="InjuryTypes" type="msls.EntitySet">
        /// Gets the InjuryTypes entity set.
        /// </field>
        /// <field name="IncidentOutcomes" type="msls.EntitySet">
        /// Gets the IncidentOutcomes entity set.
        /// </field>
        /// <field name="IncidentWitnesses" type="msls.EntitySet">
        /// Gets the IncidentWitnesses entity set.
        /// </field>
        /// <field name="IncidentStatuses" type="msls.EntitySet">
        /// Gets the IncidentStatuses entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        HealthAndSafetyIncident: $defineEntity(HealthAndSafetyIncident, [
            { name: "Id", type: Number },
            { name: "Reference", type: String },
            { name: "ReportedBy", kind: "reference", type: Employee },
            { name: "IncidentDate", type: Date },
            { name: "IncidentDescription", type: String },
            { name: "IncidentStatus", kind: "reference", type: IncidentStatus },
            { name: "HappenedAtWork", type: Boolean },
            { name: "PersonsInjured", type: Boolean },
            { name: "IncidentWitnesses", kind: "collection", elementType: IncidentWitness },
            { name: "ReportedTo", kind: "reference", type: Employee },
            { name: "TargetInvestigationDate", type: Date },
            { name: "IncidentLocation", type: String },
            { name: "DateReported", type: Date },
            { name: "AdditionalComments", type: String },
            { name: "ImmediateAction", type: String },
            { name: "IncidentPersons", kind: "collection", elementType: IncidentPerson },
            { name: "InvestigationStart", type: Date },
            { name: "RootCauseIdentified", type: String },
            { name: "PreventativeAction", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "UserName", type: String },
            { name: "FirstName", type: String },
            { name: "LastName", type: String },
            { name: "Current", type: Boolean },
            { name: "Email", type: String },
            { name: "HealthAndSafetyIncidents", kind: "collection", elementType: HealthAndSafetyIncident },
            { name: "ReportedByHealthAndSafetyIncidents", kind: "collection", elementType: HealthAndSafetyIncident },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IncidentPerson: $defineEntity(IncidentPerson, [
            { name: "Id", type: Number },
            { name: "IncidentPersonSurname", type: String },
            { name: "IncidentPersonForename", type: String },
            { name: "Occupation", type: String },
            { name: "PersonType", kind: "reference", type: PersonType },
            { name: "InjuryType", kind: "reference", type: InjuryType },
            { name: "IncidentOutcomes", kind: "reference", type: IncidentOutcome },
            { name: "WorkDaysLost", type: Number },
            { name: "HealthAndSafetyIncident", kind: "reference", type: HealthAndSafetyIncident },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PersonType: $defineEntity(PersonType, [
            { name: "Id", type: Number },
            { name: "TypeOfPerson", type: String },
            { name: "IncidentPersons", kind: "collection", elementType: IncidentPerson },
            { name: "IncidentWitnesses", kind: "collection", elementType: IncidentWitness },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        InjuryType: $defineEntity(InjuryType, [
            { name: "Id", type: Number },
            { name: "Injury", type: String },
            { name: "IncidentPersons", kind: "collection", elementType: IncidentPerson },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IncidentOutcome: $defineEntity(IncidentOutcome, [
            { name: "Id", type: Number },
            { name: "Outcome", type: String },
            { name: "IncidentPerson", kind: "collection", elementType: IncidentPerson },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IncidentWitness: $defineEntity(IncidentWitness, [
            { name: "Id", type: Number },
            { name: "Surname", type: String },
            { name: "Forename", type: String },
            { name: "PersonType", kind: "reference", type: PersonType },
            { name: "Phone", type: String },
            { name: "EMail", type: String },
            { name: "Statement", type: String },
            { name: "StatementDate", type: Date },
            { name: "HealthAndSafetyIncident", kind: "reference", type: HealthAndSafetyIncident },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IncidentStatus: $defineEntity(IncidentStatus, [
            { name: "Id", type: Number },
            { name: "Status", type: String },
            { name: "StatusType", type: String },
            { name: "HealthAndSafetyIncident", kind: "collection", elementType: HealthAndSafetyIncident },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "HealthAndSafetyIncidents", elementType: HealthAndSafetyIncident },
            { name: "Employees", elementType: Employee },
            { name: "IncidentPersons", elementType: IncidentPerson },
            { name: "PersonTypes", elementType: PersonType },
            { name: "InjuryTypes", elementType: InjuryType },
            { name: "IncidentOutcomes", elementType: IncidentOutcome },
            { name: "IncidentWitnesses", elementType: IncidentWitness },
            { name: "IncidentStatuses", elementType: IncidentStatus }
        ], [
            {
                name: "HealthAndSafetyIncidents_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.HealthAndSafetyIncidents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/HealthAndSafetyIncidents(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IncidentPersons_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IncidentPersons },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentPersons(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PersonTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PersonTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PersonTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "InjuryTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.InjuryTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/InjuryTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IncidentOutcomes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IncidentOutcomes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentOutcomes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IncidentWitnesses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IncidentWitnesses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentWitnesses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IncidentStatuses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IncidentStatuses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentStatuses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IncidentsReportedToMe", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.HealthAndSafetyIncidents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentsReportedToMe()",
                        {
                        });
                }
            },
            {
                name: "OpenIncidents", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.HealthAndSafetyIncidents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/OpenIncidents()",
                        {
                        });
                }
            },
            {
                name: "ReverseOrderedIncidents", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.HealthAndSafetyIncidents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ReverseOrderedIncidents()",
                        {
                        });
                }
            },
            {
                name: "IncidentPersonsThisMonth", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.IncidentPersons },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentPersonsThisMonth()",
                        {
                        });
                }
            },
            {
                name: "IncidentsThisMonth", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.HealthAndSafetyIncidents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IncidentsThisMonth()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
