using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KnouckoutValidation_WithTypescriptPlura.Startup))]
namespace KnouckoutValidation_WithTypescriptPlura
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
