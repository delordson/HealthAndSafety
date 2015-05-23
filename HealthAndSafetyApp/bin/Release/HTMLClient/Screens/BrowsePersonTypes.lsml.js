/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePersonTypes.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditPersonTypes"]) {
        screen.findContentItem("AddPersonType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddPersonType").isEnabled = false;
    }
};