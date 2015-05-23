/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
    $.getJSON("../CurrentUser/CurrentUser/", function (data) {
        myapp.currentUserArray = data;
    });

    myapp.activeDataWorkspace.ApplicationData.HealthAndSafetyIncidents.orderByDescending("IncidentDate").top(1).execute().then(function (results) {
        screen.DaysSinceLastIncident = DaysSinceLastIncident(results).toString();
    });
    myapp.activeDataWorkspace.ApplicationData.IncidentsThisMonth().execute().then(function (results) {
        screen.NumberOfIncidentsThisMonth = IncidentsThisMonth(results).toString();
    });
    myapp.activeDataWorkspace.ApplicationData.IncidentPersonsThisMonth().execute().then(function (results) {
        screen.WorkDaysLostThisMonth = WorkingDaysLost(results).toString();
    });
    myapp.activeDataWorkspace.ApplicationData.OpenIncidents().execute().then(function (results) {
        screen.NumberOfOpenIncidents = OpenIncidents(results).toString();
    });
};
myapp.Home.ShowBrowseHealthAndSafetyIncidents_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/FirstAidKit.png)'
    });
};
myapp.Home.ShowBrowseIncidentsReportedToMe_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Stethoscope.png)'
    });
};
myapp.Home.ShowBrowseOpenIncidents_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Ambulance.png)'
    });
};
myapp.Home.ShowBrowseEmployees_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Employees.png)'
    });
};
myapp.Home.ShowBrowseIncidentOutcomes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Doctor.png)'
    });
};
myapp.Home.ShowBrowseIncidentStatuses_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Danger.png)'
    });
};
myapp.Home.ShowBrowseInjuryTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/BandAid.png)'
    });
};
myapp.Home.ShowBrowsePersonTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Person.png)'
    });
};
myapp.Home.DaysSinceLastIncident_postRender = function (element, contentItem) {
    $(element).addClass("delordson-stats-style");
    $(element).css("color", "green");
    $(element).find("div").css('height', '75px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.Home.WorkDaysLostThisMonth_postRender = function (element, contentItem) {
    $(element).addClass("delordson-stats-style");
    $(element).css("color", "red");
    $(element).find("div").css('height', '75px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.Home.NumberOfIncidentsThisMonth_postRender = function (element, contentItem) {
    $(element).addClass("delordson-stats-style");
    $(element).css("color", "blue");
    $(element).find("div").css('height', '75px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.Home.NumberOfOpenIncidents_postRender = function (element, contentItem) {
    $(element).addClass("delordson-stats-style");
    $(element).css("color", "orange");
    $(element).find("div").css('height', '75px');
    $(element).find("div").css('padding-top', '25px');
};


myapp.Home.ShowBrowseHealthAndSafetyIncidents_Tap_execute = function (screen) {
    myapp.showBrowseHealthAndSafetyIncidents({
        afterClosed: function (browseHealthAndSafetyIncidents, navigationAction) {
            myapp.activeDataWorkspace.ApplicationData.HealthAndSafetyIncidents.orderByDescending("IncidentDate").top(1).execute().then(function (results) {
                screen.DaysSinceLastIncident = DaysSinceLastIncident(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.IncidentsThisMonth().execute().then(function (results) {
                screen.NumberOfIncidentsThisMonth = IncidentsThisMonth(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.IncidentPersonsThisMonth().execute().then(function (results) {
                screen.WorkDaysLostThisMonth = WorkingDaysLost(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.OpenIncidents().execute().then(function (results) {
                screen.NumberOfOpenIncidents = OpenIncidents(results).toString();
            });
        }
    })
};
myapp.Home.ShowBrowseIncidentsReportedToMe_Tap_execute = function (screen) {
    myapp.showBrowseIncidentsReportedToMe({
        afterClosed: function (browseIncidentsReportedToMe, navigationAction) {
            myapp.activeDataWorkspace.ApplicationData.HealthAndSafetyIncidents.orderByDescending("IncidentDate").top(1).execute().then(function (results) {
                screen.DaysSinceLastIncident = DaysSinceLastIncident(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.IncidentsThisMonth().execute().then(function (results) {
                screen.NumberOfIncidentsThisMonth = IncidentsThisMonth(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.IncidentPersonsThisMonth().execute().then(function (results) {
                screen.WorkDaysLostThisMonth = WorkingDaysLost(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.OpenIncidents().execute().then(function (results) {
                screen.NumberOfOpenIncidents = OpenIncidents(results).toString();
            });
        }
    })
};
myapp.Home.ShowBrowseOpenIncidents_Tap_execute = function (screen) {
    myapp.showBrowseOpenIncidents({
        afterClosed: function (browseOpenIncidents, navigationAction) {
            myapp.activeDataWorkspace.ApplicationData.HealthAndSafetyIncidents.orderByDescending("IncidentDate").top(1).execute().then(function (results) {
                screen.DaysSinceLastIncident = DaysSinceLastIncident(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.IncidentsThisMonth().execute().then(function (results) {
                screen.NumberOfIncidentsThisMonth = IncidentsThisMonth(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.IncidentPersonsThisMonth().execute().then(function (results) {
                screen.WorkDaysLostThisMonth = WorkingDaysLost(results).toString();
            });
            myapp.activeDataWorkspace.ApplicationData.OpenIncidents().execute().then(function (results) {
                screen.NumberOfOpenIncidents = OpenIncidents(results).toString();
            });
        }
    })
};