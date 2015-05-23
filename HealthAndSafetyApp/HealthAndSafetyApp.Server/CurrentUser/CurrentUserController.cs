using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LightSwitchApplication.CurrentUser
{
    public class CurrentUserController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            var currentUser = string.Empty;

            using (ServerApplicationContext context = ServerApplicationContext.CreateContext())
            {
                currentUser = context.Application.User.Name;
            }
            return new string[] { currentUser };
        }
    }
}