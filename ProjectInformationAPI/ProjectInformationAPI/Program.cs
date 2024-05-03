var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

x
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowLocalhostAndAzure",
		builder =>
		{
			builder.WithOrigins("http://localhost:3000", "https://frederick-portfolio.azurewebsites.net")
				.AllowAnyHeader()
				.AllowAnyMethod();
		});
});




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseCors("AllowLocalhost");

app.UseAuthorization();

app.MapControllers();

app.Run();
