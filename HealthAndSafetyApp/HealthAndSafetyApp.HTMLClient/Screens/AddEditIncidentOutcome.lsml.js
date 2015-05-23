/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIncidentOutcome.created = function (screen) {
    var outcome;

    if (screen.IncidentOutcome.Outcome !== undefined) {
        outcome = screen.IncidentOutcome.Outcome;
        screen.details.displayName = "Edit " + outcome;
    }
    else {
        screen.details.displayName = "Add New Incident Outcome";
    }


    if (myapp.permissions["LightSwitchApplication:CanEditIncidentOutcomes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};