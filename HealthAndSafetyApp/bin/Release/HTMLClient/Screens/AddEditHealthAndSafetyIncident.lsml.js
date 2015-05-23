/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditHealthAndSafetyIncident.created = function (screen) {
    var incidentDate;
    var reference;

    if (screen.HealthAndSafetyIncident.Reference !== undefined) {
        incidentDate = screen.HealthAndSafetyIncident.IncidentDate;
        reference = screen.HealthAndSafetyIncident.Reference;
        screen.details.displayName = "Incident " + reference + " on " + incidentDate.toLocaleDateString();
    }
    else {
        screen.details.displayName = "Add new H&S Incident";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditHealthAndSafetyIncidents"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("IncidentPersons").isReadOnly = false;
        screen.findContentItem("IncidentWitnesses").isReadOnly = false;
        screen.findContentItem("ImmediateActionGroup").isReadOnly = false;
        screen.findContentItem("AdditionalCommentGroup").isReadOnly = false;
        screen.findContentItem("AddIncidentPerson").isEnabled = true;
        screen.findContentItem("AddIncidentWitness").isEnabled = true;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("IncidentPersons").isReadOnly = true;
        screen.findContentItem("IncidentWitnesses").isReadOnly = true;
        screen.findContentItem("ImmediateActionGroup").isReadOnly = true;
        screen.findContentItem("AdditionalCommentGroup").isReadOnly = true;
        screen.findContentItem("AddIncidentPerson").isEnabled = false;
        screen.findContentItem("AddIncidentWitness").isEnabled = false;
    }

    if (screen.HealthAndSafetyIncident.ReportedTo !== undefined) {
        if ($.inArray(screen.HealthAndSafetyIncident.ReportedTo.UserName, myapp.currentUserArray) == 0) {
            screen.findContentItem("InvestigationGroup").isVisible = true;
        }
    }

};