using System;
using System.Net.Http;
using System.Net;
using Microsoft.AspNetCore;
using DataSource;
using System.Web.Http;
using System.Data.Entity.Validation;
using System.Linq;

namespace WebApp.Controllers
{
    public class UserController : ApiController
    {
        
        private static BikeLoanDBEntities entities = new BikeLoanDBEntities();
        [Route("user/signup")]
        [HttpPost]
        public HttpResponseMessage signup([FromBody]User user)
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


        [Route("user/login")]
        [HttpPost]
        public HttpResponseMessage login([FromBody] Login login)
        {
            AuthController auth = new AuthController();
            System.Diagnostics.Debug.WriteLine(login.email);
            System.Diagnostics.Debug.WriteLine(login.password);

            if (auth.isUserPresent(login))
            {
                var message = Request.CreateResponse(HttpStatusCode.OK, "User");
                var user = entities.Users.FirstOrDefault(us => us.email == login.email);
                var admin = entities.Admins.FirstOrDefault(ad => ad.email == login.email);
                if (user != null)
                {
                    message.Headers.Location = new Uri(Request.RequestUri + "Valid user");
                }
                return message;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid user");
            }
        }
    }
}
