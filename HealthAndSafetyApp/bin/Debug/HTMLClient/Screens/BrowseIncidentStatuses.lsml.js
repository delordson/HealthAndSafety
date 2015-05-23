/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseIncidentStatuses.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditIncidentStatuses"]) {
        screen.findContentItem("AddIncidentStatus").isEnabled = true;
    }
    else {
        screen.findContentItem("AddIncidentStatus").isEnabled = false;
    }
};