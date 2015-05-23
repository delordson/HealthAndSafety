using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class HealthAndSafetyIncident
    {
        partial void IncidentDate_Validate(EntityValidationResultsBuilder results)
        {
            if(this.IncidentDate.Date > DateTime.Today.Date)
            {
                results.AddPropertyError("Incident date cannot be in the future");
            }
        }
    }
}
