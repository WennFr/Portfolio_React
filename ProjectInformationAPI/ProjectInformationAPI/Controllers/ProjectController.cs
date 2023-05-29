using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectInformationAPI.Data;
using ProjectInformationAPI.Models;
using System.Data;

namespace ProjectInformationAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[EnableCors("AllowLocalhostAndAzure")]
	public class ProjectController : ControllerBase
	{
		private readonly List<ProjectData> _projects;

		public ProjectController()
		{
			_projects = ProjectSeeder.SeedAllProjects();
		}


		[HttpGet]
		public ActionResult<List<ProjectData>> GetAll()
		{
			return Ok(_projects);
		}

	}
}
