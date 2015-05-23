using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class IncidentWitness
    {
        partial void StatementDate_Validate(EntityValidationResultsBuilder results)
        {
            if (this.StatementDate != null && ((DateTime)this.StatementDate).Date > DateTime.Today.Date)
            {
                results.AddPropertyError("A witness statement cannot be dated in the future");
            }
        }
    }
}
