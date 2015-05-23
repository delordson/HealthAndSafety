/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIncidentWitness.created = function (screen) {



    if (myapp.permissions["LightSwitchApplication:CanEditIncidentWitnesses"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};