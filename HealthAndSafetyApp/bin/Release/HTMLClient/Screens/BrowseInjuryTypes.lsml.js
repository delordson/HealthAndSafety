/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseInjuryTypes.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditInjuryTypes"]) {
        screen.findContentItem("AddInjuryType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddInjuryType").isEnabled = false;
    }
};