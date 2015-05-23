/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseHealthAndSafetyIncidents.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditHealthAndSafetyIncidents"]) {
        screen.findContentItem("AddHealthAndSafetyIncident").isEnabled = true;
    }
    else {
        screen.findContentItem("AddHealthAndSafetyIncident").isEnabled = false;
    }
};