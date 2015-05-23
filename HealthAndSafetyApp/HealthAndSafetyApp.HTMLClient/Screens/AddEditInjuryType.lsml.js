/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditInjuryType.created = function (screen) {
    var injury;

    if (screen.InjuryType.Injury !== undefined) {
        injury = screen.InjuryType.Injury;
        screen.details.displayName = "Edit " + injury;
    }
    else {
        screen.details.displayName = "Add New Injury Type";
    }



    if (myapp.permissions["LightSwitchApplication:CanEditInjuryTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};