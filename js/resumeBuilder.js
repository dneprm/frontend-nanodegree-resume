//$("#main").append("Mariya");
/*var email = "turkomariya@yandex.ru";
var newEmail = email.replace("yandex.ru", "gmail.com");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Mariya and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);*/

/*var name = "Mariya Turko";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var boi = {
	"name": "Mariya",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+380676119551",
		"email": "turkomariya@gmail.com",
		"location": "Dnipropetrovsk, Ukraine"
	},
	"welcomeMessage": "Everything happens for a reason",
	"bioPicture": "images/picture.jpg",
	"skills": [
		"awesome", "programming", "teaching", "Javascript", "HTML", "CSS"
	]
}

/*var work = {};
work.jobPosition1 = "Frontend Developer at Udacity couses";
work.employer1 = "Udacity";
work.yearsWorked1 = "December 2014 - present time";
work.jobPosition2 = "Associate Prof.";
work.employer2 = "Prydniprovs'ka State Academy of Civil Engineering and Architecture";
work.yearsWorked2 = "September 2009 - present time";*/

var work = {
	"jobs": [
	{
		"employer": "Udacity",
		"title": "Frontend Developer at Udacity couses",
		"location": "USA",
		"dates": "December 2014 - present time"
	},
	{
		"employer": "Prydniprovs'ka State Academy of Civil Engineering and Architecture",
		"title": "Associate Prof.",
		"location": "Dnipropetrovsk, Ukraine",
		"dates": "September 2009 - present time"
	}
	]
}

/*var education = {};
education["schoolName"] = "Udacity";
education["years"] = "2014";*/

var education = {
	"schools": [
	{
		"name": "Prydniprovs'ka State Academy of Civil Engineering and Architecture",
		"location": "Dnipropetrovsk, Ukraine",
		"degree": "PhD",
		"dates": "2004-2012",
		"url": "http://pgasa.dp.ua"
	}
	],
	"onlineCourses": [
	{
	"title": "JavaScript Basics",	
	"school": "Udacity",
	"dates": "2014",
	"url": "https://www.udacity.com/course/ud804"
	},
	{
	"title": "How to use Git and GitHub",	
	"school": "Udacity",
	"dates": "2014",
	"url": "https://www.udacity.com/course/ud775"
	},
	{
	"title": "Intro to HTML and CSS",	
	"school": "Udacity",
	"dates": "2014",
	"url": "https://www.udacity.com/course/ud304"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "CV",
		"dates": "December 2014",
		"description": "created CV from the skretch"
	},
	{
		"title": "Final Project from Intro to HTML & CSS Udacity Courses",
		"dates": "December 2014",
		"description": "Created a page from a given mockup with less than 8% decline"
	}
	]
}


/*$("#header").append(boi.name);
$("#header").append(boi.bioPicture);
$("#header").append(boi.skills[1]);
$("#header").append(work["jobPosition1"]);
$("#header").append(education.schoolName);*/


