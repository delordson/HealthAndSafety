/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPersonType.created = function (screen) {
    var person;

    if (screen.PersonType.TypeOfPerson !== undefined) {
        person = screen.PersonType.TypeOfPerson;
        screen.details.displayName = "Edit " + persn;
    }
    else {
        screen.details.displayName = "Add New Person Type";
    }
    
    
    if (myapp.permissions["LightSwitchApplication:CanEditPersonTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }

};