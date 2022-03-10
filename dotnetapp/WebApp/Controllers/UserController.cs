using System;
using System.web.MVC;


namespace WebApp.Controllers
{
    public class UserController : Controllers
    {
        public bool isUserPresent(LoginModel data)
        {
            return data != null && data.IsUserPresent;
        }
    }
}