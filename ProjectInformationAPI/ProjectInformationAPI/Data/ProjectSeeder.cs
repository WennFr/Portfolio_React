using ProjectInformationAPI.Models;

namespace ProjectInformationAPI.Data
{
	public static class ProjectSeeder
	{

		public static List<ProjectData> SeedAllProjects()
		{
			var projects = new List<ProjectData>
			{
				new ProjectData
				{
					Title = "BankManagerApp",
					Description =
						"BankManagerApp är ett .NET-projekt skapat i razor pages som ger en simulerad bankadministrationsupplevelse. Det innehåller fyra projekt som alla är relaterade till samma fiktiva bank vid namn Blue Ridge Bank som hanterar skandinaviska konton.",
					Year = "2023",
					Month = "Maj",
					GitUrl = "https://github.com/WennFr/BankManagerApp",
					DemoUrl = "",
					Image = ""
				},

				new ProjectData
				{
					Title = "AdSiteWebAPI",
					Description = "Ett .NET web-API för en fiktiv annonssida.Skapa,läs,uppdatera och radera annonser och bud!  ",
					Year = "2023",
					Month = "Maj",
					GitUrl = "https://github.com/WennFr/AdSiteWebAPI",
					DemoUrl = "",
					Image = ""
				},
				new ProjectData
				{
					Title = "Case_fixxo",
					Description = "En fiktiv online-klädesbutik formad efter en designmall.",
					Year = "2023",
					Month = "Apr",
					GitUrl = "https://github.com/WennFr/Case_fixxo_FW",
					DemoUrl = "",
					Image = ""
				},
				new ProjectData
				{
					Title = "KyhProject1",
					Description = "Ett tredelat konsolprojekt som inehåller en formskapare, miniräknare och sten,sax,påse-spel. Skapat i C# med ef code first.",
					Year = "2023",
					Month = "Jan",
					GitUrl = "https://github.com/WennFr/KyhProject1FW",
					DemoUrl = "",
					Image = ""
				},
				new ProjectData
				{
					Title = "HotelRoomManager",
					Description = "Ett administrationssystem för ett fiktivt hotell.CRUDa kunder och rum samt skapa nya bokningar!Utvecklats i C# med ef code first.",
					Year = "2023",
					Month = "Jan",
					GitUrl = "https://github.com/WennFr/HotelRoomManager",
					DemoUrl = "",
					Image = ""
				},

			};
			
			return projects;
		}



	}
}
