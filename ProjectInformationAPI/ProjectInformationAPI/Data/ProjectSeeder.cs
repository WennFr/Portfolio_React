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
                    Title = "SmartApplication",
                    Description =
                        "En applikation som simulerar smartenheter och kopplar upp dessa till en kontrollpanell. Byggt i .NET WPF och använder sig av AzureFunctions för kommunikation mellan enhet och kontrollpanell.",
                    Year = "2023",
                    Month = "Okt",
                    TechStack = new string[]{"C#", "XAML", "CSS",},
                    GitUrl = "https://github.com/WennFr/SmartApplication",
                    DemoUrl = "",
                    Image = ""
                },
                 new ProjectData
                {
                    Title = "CarSimulatorApp",
                    Description =
                        "Den här applikationen är en enkel bilsimulator skriven i C#. Huvudsyftet med applikationen är att demonstrera välstrukturerad C#-kod med avseende på SRP (Single Responsibility Principle) och att implementera giltiga tester av simuleringens funktionalitet.",
                    Year = "2023",
                    Month = "Jun",
                    TechStack = new string[]{"C#"},
                    GitUrl = "https://github.com/WennFr/CarSimulatorApp",
                    DemoUrl = "",
                    Image = ""
                },
                new ProjectData
                {
                    Title = "Portfolio_React",
                    Description =
                        "Min portfolio site skapad i React. Projekten hämtas från ett .NET Api i samma lösning",
                    Year = "2023",
                    Month = "Jun",
                    TechStack = new string[]{"React", ".NET", "Html", "CSS", "JavaScript"},
                    GitUrl = "https://github.com/WennFr/Portfolio_React",
                    DemoUrl = "",
                    Image = ""
                },
                new ProjectData
				{
					Title = "BankManagerApp",
					Description =
						"Ett .NET-razorprojekt som simulerar en bankadminsida. Innehåller fyra projekt alla relaterade till samma fiktiva bank som hanterar konton, kunder och användare.",
					Year = "2023",
					Month = "Maj",
                    TechStack = new string[]{"C#", "Razor Pages", "Html", "CSS", "JavaScript"},
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
					TechStack = new string[]{"C#", "ASP .NET"},
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
                    TechStack = new string[]{"Html", "CSS", "JavaScript", "SCSS"},
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
                    TechStack = new string[]{"C#"},
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
                    TechStack = new string[]{"C#", "MSSQL"},
                    GitUrl = "https://github.com/WennFr/HotelRoomManager",
					DemoUrl = "",
					Image = ""
				},

			};
			
			return projects;
		}



	}
}
