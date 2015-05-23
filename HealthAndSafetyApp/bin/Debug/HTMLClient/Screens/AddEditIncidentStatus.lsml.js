/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIncidentStatus.created = function (screen) {
    var status;

    if (screen.IncidentStatus.Status !== undefined) {
        status = screen.IncidentStatus.Status;
        screen.details.displayName = "Edit " + status;
    }
    else {
        screen.details.displayName = "Add New Incident Status";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditIncidentStatuses"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};