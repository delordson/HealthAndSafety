using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void IncidentsReportedToMe_PreprocessQuery(ref IQueryable<HealthAndSafetyIncident> query)
        {
            query = from incident in query
                    where incident.ReportedTo.UserName == this.Application.User.Name
                    select incident;
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void HealthAndSafetyIncidents_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHealthAndSafetyIncidents);
        }

        partial void HealthAndSafetyIncidents_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHealthAndSafetyIncidents);
        }

        partial void HealthAndSafetyIncidents_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHealthAndSafetyIncidents);
        }

        partial void IncidentOutcomes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentOutcomes);
        }

        partial void IncidentOutcomes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentOutcomes);
        }

        partial void IncidentOutcomes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentOutcomes);
        }

        partial void IncidentPersons_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentPersons);
        }

        partial void IncidentPersons_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentPersons);
        }

        partial void IncidentPersons_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentPersons);
        }

        partial void IncidentStatuses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentStatuses);
        }

        partial void IncidentStatuses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentStatuses);
        }

        partial void IncidentStatuses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentStatuses);
        }

        partial void IncidentWitnesses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentWitnesses);
        }

        partial void IncidentWitnesses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentWitnesses);
        }

        partial void IncidentWitnesses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIncidentWitnesses);
        }

        partial void InjuryTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditInjuryTypes);
        }

        partial void InjuryTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditInjuryTypes);
        }

        partial void InjuryTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditInjuryTypes);
        }

        partial void PersonTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPersonTypes);
        }

        partial void PersonTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPersonTypes);
        }

        partial void PersonTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPersonTypes);
        }

        partial void HealthAndSafetyIncidents_Validate(HealthAndSafetyIncident entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateReported != null & entity.IncidentDate != null)
            {
                if (((DateTime)entity.DateReported).Date < entity.IncidentDate.Date)
                {
                    results.AddEntityError("A H&S incident cannot be reported before it has taken place");
                }
            }

            if (entity.TargetInvestigationDate != null & entity.IncidentDate != null)
            {
                if (entity.TargetInvestigationDate < entity.IncidentDate.Date)
                {
                    results.AddEntityError("The target date cannot be earlier than the incident date");
                }
            }
        }

        partial void IncidentWitnesses_Validate(IncidentWitness entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.StatementDate != null & entity.HealthAndSafetyIncident.IncidentDate != null)
            {
                if (((DateTime)entity.StatementDate).Date < entity.HealthAndSafetyIncident.IncidentDate.Date)
                {
                    results.AddEntityError("A witness statement cannot be taken before a H&S incident has happened");
                }
            }
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void HealthAndSafetyIncidents_Inserted(HealthAndSafetyIncident entity)
        {
            if (entity.ReportedBy.Email != string.Empty)
            {
                string subject = "New H&S Incident reported to you";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following H&S Incident has been assigned to you for investigation:<br></br>Incident: {2} on {3}.<br></br>Description: {4}.<br></br>Date Reported: {5}.<br></br>Target Investigation Date: {6}.<br></br></p></body></html>", entity.ReportedTo.FirstName, entity.ReportedTo.LastName, entity.Reference, entity.IncidentDate, entity.IncidentDescription, entity.DateReported, entity.TargetInvestigationDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.ReportedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }
    }
}
