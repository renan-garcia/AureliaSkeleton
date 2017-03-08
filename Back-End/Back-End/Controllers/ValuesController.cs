using System.Web.Http;

namespace Back_End.Controllers
{
    public class ValuesController : ApiController
    {
        [Authorize(Roles = "User")]
        public string Get()
        {
            return User.Identity.Name;
        }
    }
}