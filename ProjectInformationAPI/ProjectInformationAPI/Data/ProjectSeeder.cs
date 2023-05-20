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
						"Ett .NET-razorprojekt som simulerar en bankadminsida. Innehåller fyra projekt alla relaterade till samma fiktiva bank som hanterar konton, kunder och användare.",
					Year = "2023",
					Month = "Maj",
					GitUrl = "https://github.com/WennFr/BankManagerApp",
					DemoUrl = "",
					Image = ""
				},

				new ProjectData
				{
					Title = "AdSiteWebAPI",
					Description = "Ett .NET web-API för en annonssida. CRUD:a annonser och bud!  ",
					Year = "2023",
					Month = "Maj",
					GitUrl = "https://github.com/WennFr/AdSiteWebAPI",
					DemoUrl = "",
					Image = ""
				},
				new ProjectData
				{
					Title = "Case_fixxo",
					Description = "En fiktiv onlineklädesbutik formad efter en designmall.",
					Year = "2023",
					Month = "Apr",
					GitUrl = "https://github.com/WennFr/Case_fixxo_FW",
					DemoUrl = "",
					Image = ""
				},
				new ProjectData
				{
					Title = "KyhProject1",
					Description = "Ett konsolprojekt i tre delar som inehåller en formskapare, miniräknare och sten, sax, påse-spel. Skapat i C# med EntityFramework code first.",
					Year = "2023",
					Month = "Jan",
					GitUrl = "https://github.com/WennFr/KyhProject1FW",
					DemoUrl = "",
					Image = ""
				},
				new ProjectData
				{
					Title = "HotelRoomManager",
					Description = "Ett administrationssystem för ett fiktivt hotell. CRUD:a kunder, rum samt skapa nya bokningar! Utvecklat i C# med EntityFramework code first.",
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
