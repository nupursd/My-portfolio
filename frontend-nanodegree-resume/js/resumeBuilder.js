
var bio = {
    "name": "Nupur Sood",
    "role": "Web Developer",
    "contacts": {
        "mobile": "6692418638",
        "email": "nupursood05@gmail.com",
        "github": "nupursd",
        "location": "San Jose",
        "linkedin": "www.linkedin.com/in/nupursd"
    },
    "welcomeMessage": "I'm a self-taught passionate front-end web developer currently looking for an opportunity to apply my skills to create wonderful webpages. ",
    "skills": ["HTML5", "CSS3", "Javascript", "jQuery","Website-optimization", "Bootstrap", "Github"],
    "biopic": "images/fry.jpg",
    display: function(){

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);


        var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);


        var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts["linkedin"]);
        $("#footerContacts").append(formattedlinkedin);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

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

                formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
                $("#skills").append(formattedSkill);

                formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
                $("#skills").append(formattedSkill);

                formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
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
    }],
    displayOnlineCourses: function(){
                if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                //var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                //$(".education-entry:last").append(formattedOnlineURL);
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
        "description": "Worked in Capgemini, India as a Software Engineer. Worked in a team of 10 developers and built web forms for customers of an insurance service provider using HTML, javascript, Lotusnotes DB. Before that, worked in a project to maintain and support the life insurance web application of the same insurance provider to achieve 99.99% availability to customers."
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

// var work = {
//     "employer": "Capgemini India",
//     "title": "Software Engineer",
//         "dates": "March 2013 - May 2016",
//         "location": "Hyderabad, India",
//         "description": [""],
// display: function(){

//         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
//         var formattedDates = HTMLworkDates.replace("%data%", work.dates);
//         var formattedLocation = HTMLworkLocation.replace("%data%", work.location);

//             if(work.description.length > 0){
//                 $(".work-entry:last").append(HTMLworkDescription);
//                 var formattedDescription = HTMLworkDescription.replace("%data%", work.description[0]);
//                 $(".work-entry:last").append(HTMLworkDescription);
//                 formattedDescription = HTMLworkDescription.replace("%data%", work.description[1]);
//             }

//                 var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

//                 $(".work-entry:last").append(formattedEmployerTitle);
//         }
//     };

var projects = {
    "projects": [
    {
        "title": "My Web Portfolio",
        "url": "https://github.com/nupursd/My-portfolio",
        "dates": "September 2016",
        "description": "Developed an online portfolio website using HTML5 and CSS3 and displaying responsive behaviour to showcase my work as a front end developer.",
        // "images": ["images/project1.jpg"]
    },
    {
        "title": "Arcade game clone",
        "url": "https://github.com/nupursd/frontend-nanodegree-arcade-game",
        "dates": "October 2016",
        "description": "This is a clone of the famous arcade game Frogger. This game is developed using the concepts of Object oriented Javascript.",
        // "images": ["images/project2.jpg"]
    },
    {
        "title": "Website optimization",
        "url": "https://github.com/nupursd/Frontend-website-optimization",
        "dates": "November 2016",
        "description": "Optimized the critical rendering path of a website to achieve PageSpeeds insights score of above 90. Also, optimized a website's scroll animation for it to scroll at 60 frames per second.",
        // "images": ["images/project2.jpg"]
    },
    {
        "title": "Neighborhood Map",
        "url": "https://github.com/nupursd/frontend-nanodegree-arcade-game",
        "dates": "December 2016",
        "description": "This web app is a neighborhood map page that shows popular places in the user defined location. The project is built on Google App Engine, with Knockout.js framwork. The project is focused on using external APIs and MVVM pattern to make a single page web app.",
        // "images": ["images/project2.jpg"]
    }],
    display: function(){
    for(var project=0; project< projects.projects.length; project++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedTitle = formattedTitle.replace("%url%", projects.projects[project].url);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

       //  for(var image=0; image< projects.projects[project].images.length; image++){
       //  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
       //  $(".project-entry:last").append(formattedImage);
       // }
    }
    }
  };

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.displaySchools();
education.displayOnlineCourses();
projects.display();


