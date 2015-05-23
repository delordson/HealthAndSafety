/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseIncidentOutcomes.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditIncidentOutcomes"]) {
        screen.findContentItem("AddIncidentOutcome").isEnabled = true;
    }
    else {
        screen.findContentItem("AddIncidentOutcome").isEnabled = false;
    }
};