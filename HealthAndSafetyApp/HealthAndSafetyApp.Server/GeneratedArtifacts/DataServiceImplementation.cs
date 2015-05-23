﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using global::System.Linq;

namespace LightSwitchApplication.Implementation
{
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataDataService
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataService<global::LightSwitchApplication.Implementation.ApplicationData>
    {
    
        public ApplicationDataDataService() : base()
        {
        }
    
        protected override global::Microsoft.LightSwitch.IDataService GetDataService(global::Microsoft.LightSwitch.IDataWorkspace dataWorkspace)
        {
            return ((global::LightSwitchApplication.DataWorkspace)dataWorkspace).ApplicationData;
        }
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataServiceImplementation
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceImplementation<global::LightSwitchApplication.Implementation.ApplicationData>
    {
        public ApplicationDataServiceImplementation(global::Microsoft.LightSwitch.IDataService dataService) : base(dataService)
        {
        }
    
    #region Queries
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> IncidentsReportedToMe()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> query;
            query = global::System.Linq.Queryable.OrderByDescending(
                this.GetQuery<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident>("HealthAndSafetyIncidents"),
                (h) => h.IncidentDate);
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> IncidentsThisMonth()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> query;
            global::System.DateTime startOfMonth1 = global::Microsoft.LightSwitch.RelativeDates.StartOfMonth();
            global::System.DateTime endOfMonth1 = global::Microsoft.LightSwitch.RelativeDates.EndOfMonth();
            query = global::System.Linq.Queryable.Where(
                this.GetQuery<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident>("HealthAndSafetyIncidents"),
                (h) => ((h.IncidentDate >= startOfMonth1) && (h.IncidentDate <= endOfMonth1)));
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> OpenIncidents()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> query;
            query = global::System.Linq.Queryable.Where(
                this.GetQuery<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident>("HealthAndSafetyIncidents"),
                (h) => (h.IncidentStatus.StatusType.CompareTo("O") == 0));
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> ReverseOrderedIncidents()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident> query;
            query = global::System.Linq.Queryable.OrderByDescending(
                this.GetQuery<global::LightSwitchApplication.Implementation.HealthAndSafetyIncident>("HealthAndSafetyIncidents"),
                (h) => h.IncidentDate);
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.IncidentPerson> IncidentPersonsThisMonth()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.IncidentPerson> query;
            global::System.DateTime startOfMonth1 = global::Microsoft.LightSwitch.RelativeDates.StartOfMonth();
            global::System.DateTime endOfMonth1 = global::Microsoft.LightSwitch.RelativeDates.EndOfMonth();
            query = global::System.Linq.Queryable.Where(
                this.GetQuery<global::LightSwitchApplication.Implementation.IncidentPerson>("IncidentPersons"),
                (i) => ((i.HealthAndSafetyIncident.IncidentDate >= startOfMonth1) && (i.HealthAndSafetyIncident.IncidentDate <= endOfMonth1)));
            return query;
        }
    
    #endregion

    #region Protected Methods
        protected override object CreateObject(global::System.Type type)
        {
            if (type == typeof(global::LightSwitchApplication.Implementation.Employee))
            {
                return new global::LightSwitchApplication.Implementation.Employee();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.HealthAndSafetyIncident))
            {
                return new global::LightSwitchApplication.Implementation.HealthAndSafetyIncident();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.IncidentOutcome))
            {
                return new global::LightSwitchApplication.Implementation.IncidentOutcome();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.IncidentPerson))
            {
                return new global::LightSwitchApplication.Implementation.IncidentPerson();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.IncidentStatus))
            {
                return new global::LightSwitchApplication.Implementation.IncidentStatus();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.IncidentWitness))
            {
                return new global::LightSwitchApplication.Implementation.IncidentWitness();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.InjuryType))
            {
                return new global::LightSwitchApplication.Implementation.InjuryType();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.PersonType))
            {
                return new global::LightSwitchApplication.Implementation.PersonType();
            }
    
            return base.CreateObject(type);
        }
    
        protected override global::LightSwitchApplication.Implementation.ApplicationData CreateObjectContext()
        {
            string assemblyName = global::System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
            return new global::LightSwitchApplication.Implementation.ApplicationData(this.GetEntityConnectionString(
                "_IntrinsicData",
                "res://" + assemblyName + "/ApplicationData.csdl|res://" + assemblyName + "/ApplicationData.ssdl|res://" + assemblyName + "/ApplicationData.msl",
                "System.Data.SqlClient",
                true));
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IEntityImplementation CreateEntityImplementation<T>()
        {
            if (typeof(T) == typeof(global::LightSwitchApplication.Employee))
            {
                return new global::LightSwitchApplication.Implementation.Employee();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.HealthAndSafetyIncident))
            {
                return new global::LightSwitchApplication.Implementation.HealthAndSafetyIncident();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.IncidentOutcome))
            {
                return new global::LightSwitchApplication.Implementation.IncidentOutcome();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.IncidentPerson))
            {
                return new global::LightSwitchApplication.Implementation.IncidentPerson();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.IncidentStatus))
            {
                return new global::LightSwitchApplication.Implementation.IncidentStatus();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.IncidentWitness))
            {
                return new global::LightSwitchApplication.Implementation.IncidentWitness();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.InjuryType))
            {
                return new global::LightSwitchApplication.Implementation.InjuryType();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.PersonType))
            {
                return new global::LightSwitchApplication.Implementation.PersonType();
            }
            return null;
        }
    
    #endregion
    
    }
    
    #region DataServiceImplementationFactory
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.IDataServiceFactory))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __DataServiceFactory :
        global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceFactory
    {
    
        protected override global::Microsoft.LightSwitch.IDataService CreateDataService(global::System.Type dataServiceType)
        {
            if (dataServiceType == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.ApplicationDataService();
            }
            return base.CreateDataService(dataServiceType);
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IDataServiceImplementation CreateDataServiceImplementation<TDataService>(TDataService dataService)
        {
            if (typeof(TDataService) == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.Implementation.ApplicationDataServiceImplementation(dataService);
            }
            return base.CreateDataServiceImplementation(dataService);
        }
    }
    #endregion
    
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.ITypeMappingProvider))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __TypeMapping
        : global::Microsoft.LightSwitch.Internal.ITypeMappingProvider
    {
        global::System.Type global::Microsoft.LightSwitch.Internal.ITypeMappingProvider.GetImplementationType(global::System.Type definitionType)
        {
            if (typeof(global::LightSwitchApplication.Employee) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.Employee);
            }
            if (typeof(global::LightSwitchApplication.HealthAndSafetyIncident) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.HealthAndSafetyIncident);
            }
            if (typeof(global::LightSwitchApplication.IncidentOutcome) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.IncidentOutcome);
            }
            if (typeof(global::LightSwitchApplication.IncidentPerson) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.IncidentPerson);
            }
            if (typeof(global::LightSwitchApplication.IncidentStatus) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.IncidentStatus);
            }
            if (typeof(global::LightSwitchApplication.IncidentWitness) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.IncidentWitness);
            }
            if (typeof(global::LightSwitchApplication.InjuryType) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.InjuryType);
            }
            if (typeof(global::LightSwitchApplication.PersonType) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.PersonType);
            }
            return null;
        }
    }
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class Employee :
        global::LightSwitchApplication.Employee.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.Employee.DetailsClass.IImplementation.HealthAndSafetyIncidents
        {
            get
            {
                return this.HealthAndSafetyIncidents;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.Employee.DetailsClass.IImplementation.ReportedByHealthAndSafetyIncidents
        {
            get
            {
                return this.ReportedByHealthAndSafetyIncidents;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class HealthAndSafetyIncident :
        global::LightSwitchApplication.HealthAndSafetyIncident.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.HealthAndSafetyIncident.DetailsClass.IImplementation.ReportedBy
        {
            get
            {
                return this.ReportedBy;
            }
            set
            {
                this.ReportedBy = (global::LightSwitchApplication.Implementation.Employee)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("ReportedBy");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.HealthAndSafetyIncident.DetailsClass.IImplementation.IncidentStatus
        {
            get
            {
                return this.IncidentStatus;
            }
            set
            {
                this.IncidentStatus = (global::LightSwitchApplication.Implementation.IncidentStatus)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("IncidentStatus");
                }
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.HealthAndSafetyIncident.DetailsClass.IImplementation.IncidentWitnesses
        {
            get
            {
                return this.IncidentWitnesses;
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.HealthAndSafetyIncident.DetailsClass.IImplementation.ReportedTo
        {
            get
            {
                return this.ReportedTo;
            }
            set
            {
                this.ReportedTo = (global::LightSwitchApplication.Implementation.Employee)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("ReportedTo");
                }
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.HealthAndSafetyIncident.DetailsClass.IImplementation.IncidentPersons
        {
            get
            {
                return this.IncidentPersons;
            }
        }
        
        partial void OnHealthAndSafetyIncident_Employee1Changed()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("ReportedBy");
            }
        }
        
        partial void OnIncidentStatus_HealthAndSafetyIncidentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("IncidentStatus");
            }
        }
        
        partial void OnHealthAndSafetyIncident_EmployeeChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("ReportedTo");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class IncidentOutcome :
        global::LightSwitchApplication.IncidentOutcome.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.IncidentOutcome.DetailsClass.IImplementation.IncidentPerson
        {
            get
            {
                return this.IncidentPerson;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class IncidentPerson :
        global::LightSwitchApplication.IncidentPerson.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.IncidentPerson.DetailsClass.IImplementation.PersonType
        {
            get
            {
                return this.PersonType;
            }
            set
            {
                this.PersonType = (global::LightSwitchApplication.Implementation.PersonType)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("PersonType");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.IncidentPerson.DetailsClass.IImplementation.InjuryType
        {
            get
            {
                return this.InjuryType;
            }
            set
            {
                this.InjuryType = (global::LightSwitchApplication.Implementation.InjuryType)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("InjuryType");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.IncidentPerson.DetailsClass.IImplementation.IncidentOutcomes
        {
            get
            {
                return this.IncidentOutcomes;
            }
            set
            {
                this.IncidentOutcomes = (global::LightSwitchApplication.Implementation.IncidentOutcome)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("IncidentOutcomes");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.IncidentPerson.DetailsClass.IImplementation.HealthAndSafetyIncident
        {
            get
            {
                return this.HealthAndSafetyIncident;
            }
            set
            {
                this.HealthAndSafetyIncident = (global::LightSwitchApplication.Implementation.HealthAndSafetyIncident)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("HealthAndSafetyIncident");
                }
            }
        }
        
        partial void OnIncidentPerson_PersonTypeChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("PersonType");
            }
        }
        
        partial void OnInjuryType_IncidentPersonChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("InjuryType");
            }
        }
        
        partial void OnIncidentOutcome_IncidentPersonChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("IncidentOutcomes");
            }
        }
        
        partial void OnIncidentPerson_HealthAndSafetyIncidentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("HealthAndSafetyIncident");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class IncidentStatus :
        global::LightSwitchApplication.IncidentStatus.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.IncidentStatus.DetailsClass.IImplementation.HealthAndSafetyIncident
        {
            get
            {
                return this.HealthAndSafetyIncident;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class IncidentWitness :
        global::LightSwitchApplication.IncidentWitness.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.IncidentWitness.DetailsClass.IImplementation.PersonType
        {
            get
            {
                return this.PersonType;
            }
            set
            {
                this.PersonType = (global::LightSwitchApplication.Implementation.PersonType)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("PersonType");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.IncidentWitness.DetailsClass.IImplementation.HealthAndSafetyIncident
        {
            get
            {
                return this.HealthAndSafetyIncident;
            }
            set
            {
                this.HealthAndSafetyIncident = (global::LightSwitchApplication.Implementation.HealthAndSafetyIncident)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("HealthAndSafetyIncident");
                }
            }
        }
        
        partial void OnIncidentWitness_PersonTypeChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("PersonType");
            }
        }
        
        partial void OnIncidentWitness_HealthAndSafetyIncidentChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("HealthAndSafetyIncident");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class InjuryType :
        global::LightSwitchApplication.InjuryType.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.InjuryType.DetailsClass.IImplementation.IncidentPersons
        {
            get
            {
                return this.IncidentPersons;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class PersonType :
        global::LightSwitchApplication.PersonType.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.PersonType.DetailsClass.IImplementation.IncidentPersons
        {
            get
            {
                return this.IncidentPersons;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.PersonType.DetailsClass.IImplementation.IncidentWitnesses
        {
            get
            {
                return this.IncidentWitnesses;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
}

