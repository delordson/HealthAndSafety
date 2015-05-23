/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditHealthAndSafetyIncident(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditHealthAndSafetyIncident screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="HealthAndSafetyIncident" type="msls.application.HealthAndSafetyIncident">
        /// Gets or sets the healthAndSafetyIncident for this screen.
        /// </field>
        /// <field name="IncidentWitnesses" type="msls.VisualCollection" elementType="msls.application.IncidentWitness">
        /// Gets the incidentWitnesses for this screen.
        /// </field>
        /// <field name="IncidentPersons" type="msls.VisualCollection" elementType="msls.application.IncidentPerson">
        /// Gets the incidentPersons for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditHealthAndSafetyIncident.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditHealthAndSafetyIncident", parameters);
    }

    function AddEditIncidentOutcome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIncidentOutcome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentOutcome" type="msls.application.IncidentOutcome">
        /// Gets or sets the incidentOutcome for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIncidentOutcome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIncidentOutcome", parameters);
    }

    function AddEditIncidentPerson(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIncidentPerson screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentPerson" type="msls.application.IncidentPerson">
        /// Gets or sets the incidentPerson for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIncidentPerson.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIncidentPerson", parameters);
    }

    function AddEditIncidentStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIncidentStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentStatus" type="msls.application.IncidentStatus">
        /// Gets or sets the incidentStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIncidentStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIncidentStatus", parameters);
    }

    function AddEditIncidentWitness(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIncidentWitness screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentWitness" type="msls.application.IncidentWitness">
        /// Gets or sets the incidentWitness for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIncidentWitness.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIncidentWitness", parameters);
    }

    function AddEditInjuryType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditInjuryType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InjuryType" type="msls.application.InjuryType">
        /// Gets or sets the injuryType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditInjuryType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditInjuryType", parameters);
    }

    function AddEditPersonType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPersonType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PersonType" type="msls.application.PersonType">
        /// Gets or sets the personType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPersonType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPersonType", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseHealthAndSafetyIncidents(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseHealthAndSafetyIncidents screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="HealthAndSafetyIncidents" type="msls.VisualCollection" elementType="msls.application.HealthAndSafetyIncident">
        /// Gets the healthAndSafetyIncidents for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseHealthAndSafetyIncidents.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseHealthAndSafetyIncidents", parameters);
    }

    function BrowseIncidentOutcomes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIncidentOutcomes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentOutcomes" type="msls.VisualCollection" elementType="msls.application.IncidentOutcome">
        /// Gets the incidentOutcomes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIncidentOutcomes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIncidentOutcomes", parameters);
    }

    function BrowseIncidentsReportedToMe(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIncidentsReportedToMe screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentsReportedToMe" type="msls.VisualCollection" elementType="msls.application.HealthAndSafetyIncident">
        /// Gets the incidentsReportedToMe for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIncidentsReportedToMe.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIncidentsReportedToMe", parameters);
    }

    function BrowseIncidentStatuses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIncidentStatuses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IncidentStatuses" type="msls.VisualCollection" elementType="msls.application.IncidentStatus">
        /// Gets the incidentStatuses for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIncidentStatuses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIncidentStatuses", parameters);
    }

    function BrowseInjuryTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseInjuryTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InjuryTypes" type="msls.VisualCollection" elementType="msls.application.InjuryType">
        /// Gets the injuryTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseInjuryTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseInjuryTypes", parameters);
    }

    function BrowseOpenIncidents(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOpenIncidents screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OpenIncidents" type="msls.VisualCollection" elementType="msls.application.HealthAndSafetyIncident">
        /// Gets the openIncidents for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOpenIncidents.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOpenIncidents", parameters);
    }

    function BrowsePersonTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePersonTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PersonTypes" type="msls.VisualCollection" elementType="msls.application.PersonType">
        /// Gets the personTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePersonTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePersonTypes", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DaysSinceLastIncident" type="String">
        /// Gets or sets the daysSinceLastIncident for this screen.
        /// </field>
        /// <field name="WorkDaysLostThisMonth" type="String">
        /// Gets or sets the workDaysLostThisMonth for this screen.
        /// </field>
        /// <field name="NumberOfIncidentsThisMonth" type="String">
        /// Gets or sets the numberOfIncidentsThisMonth for this screen.
        /// </field>
        /// <field name="NumberOfOpenIncidents" type="String">
        /// Gets or sets the numberOfOpenIncidents for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DaysSinceLastIncident" type="String">
        /// Gets or sets the daysSinceLastIncident for this screen.
        /// </field>
        /// <field name="WorkDaysLostThisMonth" type="String">
        /// Gets or sets the workDaysLostThisMonth for this screen.
        /// </field>
        /// <field name="NumberOfIncidentsThisMonth" type="String">
        /// Gets or sets the numberOfIncidentsThisMonth for this screen.
        /// </field>
        /// <field name="NumberOfOpenIncidents" type="String">
        /// Gets or sets the numberOfOpenIncidents for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddEditHealthAndSafetyIncident: $defineScreen(AddEditHealthAndSafetyIncident, [
            { name: "HealthAndSafetyIncident", kind: "local", type: lightSwitchApplication.HealthAndSafetyIncident },
            {
                name: "IncidentWitnesses", kind: "collection", elementType: lightSwitchApplication.IncidentWitness,
                getNavigationProperty: function () {
                    if (this.owner.HealthAndSafetyIncident) {
                        return this.owner.HealthAndSafetyIncident.details.properties.IncidentWitnesses;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("PersonType");
                }
            },
            {
                name: "IncidentPersons", kind: "collection", elementType: lightSwitchApplication.IncidentPerson,
                getNavigationProperty: function () {
                    if (this.owner.HealthAndSafetyIncident) {
                        return this.owner.HealthAndSafetyIncident.details.properties.IncidentPersons;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("PersonType").expand("InjuryType").expand("IncidentOutcomes");
                }
            }
        ], [
        ]),

        AddEditIncidentOutcome: $defineScreen(AddEditIncidentOutcome, [
            { name: "IncidentOutcome", kind: "local", type: lightSwitchApplication.IncidentOutcome }
        ], [
        ]),

        AddEditIncidentPerson: $defineScreen(AddEditIncidentPerson, [
            { name: "IncidentPerson", kind: "local", type: lightSwitchApplication.IncidentPerson }
        ], [
        ]),

        AddEditIncidentStatus: $defineScreen(AddEditIncidentStatus, [
            { name: "IncidentStatus", kind: "local", type: lightSwitchApplication.IncidentStatus }
        ], [
        ]),

        AddEditIncidentWitness: $defineScreen(AddEditIncidentWitness, [
            { name: "IncidentWitness", kind: "local", type: lightSwitchApplication.IncidentWitness }
        ], [
        ]),

        AddEditInjuryType: $defineScreen(AddEditInjuryType, [
            { name: "InjuryType", kind: "local", type: lightSwitchApplication.InjuryType }
        ], [
        ]),

        AddEditPersonType: $defineScreen(AddEditPersonType, [
            { name: "PersonType", kind: "local", type: lightSwitchApplication.PersonType }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", UserName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", FirstName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", LastName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseHealthAndSafetyIncidents: $defineScreen(BrowseHealthAndSafetyIncidents, [
            {
                name: "HealthAndSafetyIncidents", kind: "collection", elementType: lightSwitchApplication.HealthAndSafetyIncident,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.HealthAndSafetyIncidents.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", IncidentDescription)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", IncidentStatus/Status)") + "").orderByDescending("IncidentDate").expand("ReportedTo").expand("IncidentStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseIncidentOutcomes: $defineScreen(BrowseIncidentOutcomes, [
            {
                name: "IncidentOutcomes", kind: "collection", elementType: lightSwitchApplication.IncidentOutcome,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.IncidentOutcomes.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Outcome)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseIncidentsReportedToMe: $defineScreen(BrowseIncidentsReportedToMe, [
            {
                name: "IncidentsReportedToMe", kind: "collection", elementType: lightSwitchApplication.HealthAndSafetyIncident,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.IncidentsReportedToMe().filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", IncidentDescription)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", IncidentStatus/Status)") + "").orderByDescending("IncidentDate").expand("IncidentStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseIncidentStatuses: $defineScreen(BrowseIncidentStatuses, [
            {
                name: "IncidentStatuses", kind: "collection", elementType: lightSwitchApplication.IncidentStatus,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.IncidentStatuses.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Status)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", StatusType)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseInjuryTypes: $defineScreen(BrowseInjuryTypes, [
            {
                name: "InjuryTypes", kind: "collection", elementType: lightSwitchApplication.InjuryType,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.InjuryTypes.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Injury)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseOpenIncidents: $defineScreen(BrowseOpenIncidents, [
            {
                name: "OpenIncidents", kind: "collection", elementType: lightSwitchApplication.HealthAndSafetyIncident,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.OpenIncidents().filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", IncidentDescription)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", IncidentStatus/Status)") + "").orderBy("IncidentDate").expand("ReportedTo").expand("IncidentStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowsePersonTypes: $defineScreen(BrowsePersonTypes, [
            {
                name: "PersonTypes", kind: "collection", elementType: lightSwitchApplication.PersonType,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.PersonTypes.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", TypeOfPerson)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
            { name: "DaysSinceLastIncident", kind: "local", type: String },
            { name: "WorkDaysLostThisMonth", kind: "local", type: String },
            { name: "NumberOfIncidentsThisMonth", kind: "local", type: String },
            { name: "NumberOfOpenIncidents", kind: "local", type: String }
        ], [
            { name: "ShowBrowseHealthAndSafetyIncidents_Tap" },
            { name: "ShowBrowseIncidentsReportedToMe_Tap" },
            { name: "ShowBrowseOpenIncidents_Tap" }
        ]),

        MobileHome: $defineScreen(MobileHome, [
            { name: "DaysSinceLastIncident", kind: "local", type: String },
            { name: "WorkDaysLostThisMonth", kind: "local", type: String },
            { name: "NumberOfIncidentsThisMonth", kind: "local", type: String },
            { name: "NumberOfOpenIncidents", kind: "local", type: String }
        ], [
            { name: "ShowBrowseHealthAndSafetyIncidents_Tap" },
            { name: "ShowBrowseIncidentsReportedToMe_Tap" },
            { name: "ShowBrowseOpenIncidents_Tap" }
        ]),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditHealthAndSafetyIncident: $defineShowScreen(function showAddEditHealthAndSafetyIncident(HealthAndSafetyIncident, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditHealthAndSafetyIncident screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditHealthAndSafetyIncident", parameters, options);
        }),

        showAddEditIncidentOutcome: $defineShowScreen(function showAddEditIncidentOutcome(IncidentOutcome, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIncidentOutcome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIncidentOutcome", parameters, options);
        }),

        showAddEditIncidentPerson: $defineShowScreen(function showAddEditIncidentPerson(IncidentPerson, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIncidentPerson screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIncidentPerson", parameters, options);
        }),

        showAddEditIncidentStatus: $defineShowScreen(function showAddEditIncidentStatus(IncidentStatus, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIncidentStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIncidentStatus", parameters, options);
        }),

        showAddEditIncidentWitness: $defineShowScreen(function showAddEditIncidentWitness(IncidentWitness, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIncidentWitness screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIncidentWitness", parameters, options);
        }),

        showAddEditInjuryType: $defineShowScreen(function showAddEditInjuryType(InjuryType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditInjuryType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditInjuryType", parameters, options);
        }),

        showAddEditPersonType: $defineShowScreen(function showAddEditPersonType(PersonType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPersonType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPersonType", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseHealthAndSafetyIncidents: $defineShowScreen(function showBrowseHealthAndSafetyIncidents(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseHealthAndSafetyIncidents screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseHealthAndSafetyIncidents", parameters, options);
        }),

        showBrowseIncidentOutcomes: $defineShowScreen(function showBrowseIncidentOutcomes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIncidentOutcomes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIncidentOutcomes", parameters, options);
        }),

        showBrowseIncidentsReportedToMe: $defineShowScreen(function showBrowseIncidentsReportedToMe(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIncidentsReportedToMe screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIncidentsReportedToMe", parameters, options);
        }),

        showBrowseIncidentStatuses: $defineShowScreen(function showBrowseIncidentStatuses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIncidentStatuses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIncidentStatuses", parameters, options);
        }),

        showBrowseInjuryTypes: $defineShowScreen(function showBrowseInjuryTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseInjuryTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseInjuryTypes", parameters, options);
        }),

        showBrowseOpenIncidents: $defineShowScreen(function showBrowseOpenIncidents(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOpenIncidents screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOpenIncidents", parameters, options);
        }),

        showBrowsePersonTypes: $defineShowScreen(function showBrowsePersonTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePersonTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePersonTypes", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        })

    });

}(msls.application));
