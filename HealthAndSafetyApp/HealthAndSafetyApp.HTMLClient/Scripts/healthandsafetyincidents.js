
function DaysSinceLastIncident(Incident) {
    var totalDays = 0;
    var today = new Date();
    var ONE_DAY = 1000 * 60 * 60 * 24

    var incident = Incident.results;

    var today_ms = today.getTime()
    var incidentDate_ms = incident[0].IncidentDate.getTime()

    var difference_ms = Math.abs(today_ms - incidentDate_ms)

    totalDays = Math.floor(difference_ms / ONE_DAY);

    return totalDays;
}

function IncidentsThisMonth(Incidents) {
    var incidentsThisMonth = 0;

    var incidents = Incidents.results;

    incidents.forEach(function (incident) {
        incidentsThisMonth = incidentsThisMonth + 1;
    });

    return incidentsThisMonth;
}

function WorkingDaysLost(IncidentPersons) {
    var totalDays = 0;

    var incidentPersons = IncidentPersons.results;

    incidentPersons.forEach(function (person) {
        totalDays = totalDays + person.WorkDaysLost;
    });

    return totalDays;
}

function OpenIncidents(Incidents) {
    var openIncidents = 0;

    var incidents = Incidents.results;

    incidents.forEach(function (incident) {
        openIncidents = openIncidents + 1;
    });

    return openIncidents;
}