/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.ShowBrowseHealthAndSafetyIncidents_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileFirstAidKit.png)'
    });
};
myapp.MobileHome.ShowBrowseIncidentsReportedToMe_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileStethoscope.png)'
    });
};
myapp.MobileHome.ShowBrowseOpenIncidents_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileAmbulance.png)'
    });
};
myapp.MobileHome.ShowBrowseEmployees_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileEmployees.png)'
    });
};
myapp.MobileHome.ShowBrowseIncidentOutcomes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileDoctor.png)'
    });
};
myapp.MobileHome.ShowBrowseIncidentStatuses_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileDanger.png)'
    });
};

myapp.MobileHome.ShowBrowseInjuryTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileBandAid.png)'
    });
};
myapp.MobileHome.ShowBrowsePersonTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobilePerson.png)'
    });
};
myapp.MobileHome.DaysSinceLastIncident_postRender = function (element, contentItem) {
    $(element).addClass("delordson-mobile-stats-style");
    $(element).css("color", "green");
    $(element).find("div").css('height', '50px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.MobileHome.WorkDaysLostThisMonth_postRender = function (element, contentItem) {
    $(element).addClass("delordson-mobile-stats-style");
    $(element).css("color", "red");
    $(element).find("div").css('height', '50px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.MobileHome.NumberOfIncidentsThisMonth_postRender = function (element, contentItem) {
    $(element).addClass("delordson-mobile-stats-style");
    $(element).css("color", "blue");
    $(element).find("div").css('height', '50px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.MobileHome.NumberOfOpenIncidents_postRender = function (element, contentItem) {
    $(element).addClass("delordson-mobile-stats-style");
    $(element).css("color", "orange");
    $(element).find("div").css('height', '50px');
    $(element).find("div").css('padding-top', '25px');
};
myapp.MobileHome.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
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
myapp.MobileHome.ShowBrowseHealthAndSafetyIncidents_Tap_execute = function (screen) {
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
myapp.MobileHome.ShowBrowseIncidentsReportedToMe_Tap_execute = function (screen) {
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
myapp.MobileHome.ShowBrowseOpenIncidents_Tap_execute = function (screen) {
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