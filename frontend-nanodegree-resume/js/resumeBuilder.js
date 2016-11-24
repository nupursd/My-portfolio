
var bio = {
    "name": "Nupur Sood",
    "role": "Web Developer",
    "contacts": {
        "mobile": "66911111234",
        "email": "nupursood05@gmail.com",
        "github": "nupursd",
        "location": "San Jose"
    },
    "welcomeMessage": "I am a software engineer in process of enhancing my skillset, and currently learning Front end Web Development through Udacity Nanodegree program.",
    "skills": ["HTML5", "CSS3", "Javascript", "jQuery"],
    "biopic": "images/fry.jpg",
    display: function(){

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
        $("#topContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
        $("#topContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
        $("#topContacts").append(formattedGithub);

        var formattedLoc = HTMLlocation.replace("%data%", bio.contacts["location"]);
        $("#topContacts").append(formattedLoc);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

            if(bio.skills.length > 0){
                $("#header").append(HTMLskillsStart);

                var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);

                $("#skills").append(formattedSkill);
                formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

                $("#skills").append(formattedSkill);
                formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
                $("#skills").append(formattedSkill);

                formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
                $("#skills").append(formattedSkill);
            }
      }
};

var education = {
    "schools" : [
    {
        "name": "Punjab Technical University",
        "location": "Punjab, India",
        "degree": "Bachelor of Technology",
        "majors": "Electronics and Communication",
        "dates": "August 2008 - May 2012"
    }],
    displaySchools: function(){
 if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(var i=0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
},
    "onlineCourses": [
    {
        "title": "Front end web development nanodegree",
        "school": "Udacity",
        "dates": "September 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    displayOnlineCourses: function(){
                if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

var work = {
    "jobs": [
    {
        "employer": "Capgemini India",
        "title": "Software Engineer",
        "dates": "March 2013 - May 2016",
        "location": "Hyderabad, India",
        "description": "Worked in Igate computer systems (now renamed Capgemini) as a Software Engineer. "
    }],
    display: function(){
            for(var i=0; i< work.jobs.length; i++){
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

                $(".work-entry:last").append(formattedEmployerTitle);
            }
        }
    };

var projects = {
    "projects": [
    {
        "title": "Portfolio builder",
        "dates": "September 2016",
        "description": "Developing an online portfolio website using HTML5 and CSS3 and displaying responsive behaviour to showcase my work as a front end developer.",
        "images": ["images/project1.jpg"]
    },
    {
        "title": "Interactive Resume",
        "dates": "September 2016",
        "description": "Developing an interactive resume webpage using javascript showcasing the google maps interactivity.",
        "images": ["images/project2.jpg"]
    }],
    display: function(){
    for(var project=0; project< projects.projects.length; project++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        for(var image=0; image< projects.projects[project].images.length; image++){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
       }
    }
    }
  };

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.displaySchools();
education.displayOnlineCourses();
projects.display();


