//$("#main").append("Mariya");
/*var email = "turkomariya@yandex.ru";
var newEmail = email.replace("yandex.ru", "gmail.com");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Mariya and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);*/

var name = "Mariya Turko";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
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
		"programming", "teaching", "Javascript", "HTML", "CSS"
	]
}
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedBioPicture = HTMLbioPic.replace("%data%", bio.bioPicture);
$("#header").append(formattedBioPicture);
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
		"url": "http://pgasa.dp.ua",
		"major": "Economics"
	}
	],
	"onlineCourses": [
	{
	"title": "JavaScript Basics",	
	"school": "Udacity",
	"dates": "December 2014",
	"url": "https://www.udacity.com/course/ud804",
	"major": "Computer science"
	},
	{
	"title": "How to use Git and GitHub",	
	"school": "Udacity",
	"dates": "December 2014",
	"url": "https://www.udacity.com/course/ud775",
	"major": "Computer science"
	},
	{
	"title": "Intro to HTML and CSS",	
	"school": "Udacity",
	"dates": "December 2014",
	"url": "https://www.udacity.com/course/ud304",
	"major": "Computer science"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "CV",
		"dates": "December 2014",
		"description": "created CV-page from the skretch"
	},
	{
		"title": "Final Project at Intro to HTML & CSS Udacity Courses",
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

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	/*for (i=0; i < bio.skills.length; i++) {
		$("#header").append(HTMLskills);
	}*/
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
};

// my version of code
var displayWork = function() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", 
		work.jobs[job].employer);
	$(".work-entry:last").append(formattedEmployer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedTitle);
	var formattedWorkDates = HTMLworkDates.replace("%data%", 
		work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", 
		work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);
	}
}
displayWork();
/* The Udacity mentor's version of code
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", 
		work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedWorkDates = HTMLworkDates.replace("%data%", 
		work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);

	var formattedWorkLocation = HTMLworkLocation.replace("%data%", 
		work.jobs[job].location);
	$(".work-entry").append(formattedWorkLocation);
};*/

/* For the task in second lesson:
function locationizer(work_object) {
	var locationsOfWork = [];
	for (job in work_object.jobs) {
		var newLocation = work_object.jobs[job].location;
		locationsOfWork.push(newLocation);
	}
	return locationsOfWork;
};

function inName(name) {
	name = name.trim().split(" ");
	var x = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	var y = name[1].toUpperCase();
	return x + " " + y;
}
$("#main").append(internationalizeButton);*/

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", 
			projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", 
			projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", 
			projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

	}
}
displayProjects();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", 
			education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", 
			education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", 
			education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", 
			education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", 
			education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", 
			education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", 
			education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", 
			education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
displayEducation();

$("#mapDiv").append(googleMap);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);