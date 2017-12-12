using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnouckoutValidation_WithTypescriptPlura.Controllers
{
    public class KnockoutController : Controller
    {
        // GET: Knockout
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult IndexValidationAdvancedConfig()
        {
            return View();
        }
    }
}