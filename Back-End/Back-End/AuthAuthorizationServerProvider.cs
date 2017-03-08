using Microsoft.Owin.Security.OAuth;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;

namespace Back_End
{
    public class AuthAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        // Valida token no cache antes de qualquer coisa
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            try
            {
                var userName = context.UserName;
                var password = context.Password;

                if (userName != "renangarcia" || password != "renangarcia")
                {
                    context.SetError("invalid_grant", "Usuário ou senha inválidos");
                    return;
                }

                var identity = new ClaimsIdentity(context.Options.AuthenticationType);

                identity.AddClaim(new Claim(ClaimTypes.Name, userName));

                var roles = new List<string>();
                //roles.Add("Admin");
                roles.Add("User");

                foreach (var role in roles)
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, role));
                }

                var principal = new GenericPrincipal(identity, roles.ToArray());
                Thread.CurrentPrincipal = principal;

                context.Validated(identity);
            }
            catch
            {
                context.SetError("invalid_grant", "Falha ao autenticar.");
            }
        }
    }
}