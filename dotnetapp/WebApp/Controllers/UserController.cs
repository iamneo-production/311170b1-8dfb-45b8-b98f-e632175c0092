using Microsoft.AspNetCore.Http;

using System.Net.Http;
using System.Web.Http;
using DataSource;
using System.Net;
using System;
using System.Data.Entity.Validation;

namespace WebApp.Controllers
{

    public class UserController : ApiController
    {
        private static BikeLoanDBEntities entities = new BikeLoanDBEntities();
        [Route("user/signup")]
        [HttpPost]
        public HttpResponseMessage signup([FromBody] User user)
        {
            try
            {
                entities.Users.Add(user);
                entities.SaveChanges();
                var message = Request.CreateResponse(HttpStatusCode.OK, "user added");
                message.Headers.Location = new Uri(Request.RequestUri + " " + user.email);
                return message;
            }
            catch (DbEntityValidationException ex)
            {
                Console.WriteLine(ex);
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }
        }
    }
}
