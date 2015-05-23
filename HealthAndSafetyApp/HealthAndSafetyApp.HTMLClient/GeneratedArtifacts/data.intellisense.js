/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.HealthAndSafetyIncident, {
        /// <field>
        /// Called when a new healthAndSafetyIncident is created.
        /// <br/>created(msls.application.HealthAndSafetyIncident entity)
        /// </field>
        created: [lightSwitchApplication.HealthAndSafetyIncident]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.IncidentPerson, {
        /// <field>
        /// Called when a new incidentPerson is created.
        /// <br/>created(msls.application.IncidentPerson entity)
        /// </field>
        created: [lightSwitchApplication.IncidentPerson]
    });

    msls._addEntryPoints(lightSwitchApplication.PersonType, {
        /// <field>
        /// Called when a new personType is created.
        /// <br/>created(msls.application.PersonType entity)
        /// </field>
        created: [lightSwitchApplication.PersonType]
    });

    msls._addEntryPoints(lightSwitchApplication.InjuryType, {
        /// <field>
        /// Called when a new injuryType is created.
        /// <br/>created(msls.application.InjuryType entity)
        /// </field>
        created: [lightSwitchApplication.InjuryType]
    });

    msls._addEntryPoints(lightSwitchApplication.IncidentOutcome, {
        /// <field>
        /// Called when a new incidentOutcome is created.
        /// <br/>created(msls.application.IncidentOutcome entity)
        /// </field>
        created: [lightSwitchApplication.IncidentOutcome]
    });

    msls._addEntryPoints(lightSwitchApplication.IncidentWitness, {
        /// <field>
        /// Called when a new incidentWitness is created.
        /// <br/>created(msls.application.IncidentWitness entity)
        /// </field>
        created: [lightSwitchApplication.IncidentWitness]
    });

    msls._addEntryPoints(lightSwitchApplication.IncidentStatus, {
        /// <field>
        /// Called when a new incidentStatus is created.
        /// <br/>created(msls.application.IncidentStatus entity)
        /// </field>
        created: [lightSwitchApplication.IncidentStatus]
    });

}(msls.application));
