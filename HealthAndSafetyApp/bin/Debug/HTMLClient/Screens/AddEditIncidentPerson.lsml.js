/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIncidentPerson.created = function (screen) {



    if (myapp.permissions["LightSwitchApplication:CanEditIncidentPersons"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};