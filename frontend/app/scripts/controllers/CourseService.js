'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:CourseService
 * @description
 * # CourseService
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
  .service('CourseService', function () {
    var courses = [
    	{
	    	code:"TNA001", 
	    	name: "Matematisk grundkurs", 
	    	hp:6,
	    	grade:5,
	    	date:"2010-10-21",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
	    },
    	{
    		code:"TND012",
    		name:"Programmering grk",
    		hp:6,
    		grade:5,
    		date:"2010-11-10",
            languages: ["C++"],
            frameworks: [""],
            video: "",
            description:"Programming course to learn the basics in programming"
    	},
    	{
    		code:"TNA002",
    		name:"Linjär algebra",
    		hp:6,
    		grade:4,
    		date:"2010-12-16",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM088",
    		name:"Digitala medier",
    		hp:6,
    		grade:0,
    		date:"2010-12-28",
            languages: [""],
            frameworks: [""],
            video: "mzcmFvTzJVc",
            description:""
    	},
    	{
    		code:"TNMK30",
    		name:"Elektronisk publicering",
    		hp:6,
    		grade:5,
    		date:"2011-01-24",
            languages: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
            frameworks: ["JQuery", "MySQL"],
            video: "",
            description:""
    	},
    	{
    		code:"TNA003",
    		name:"Analys I",
    		hp:6,
    		grade:4,
    		date:"2011-03-17",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TND002",
    		name:"Objektorienterad programmering",
    		hp:6,
    		grade:4,
    		date:"2011-04-04",
            languages: ["Java"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNA005",
    		name:"Tillämpad matematik i teknik och naturvetenskap",
    		hp:6,
    		grade:0,
    		date:"2011-05-24",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNA004",
    		name:"Analys II",
    		hp:6,
    		grade:3,
    		date:"2011-05-30",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM046",
    		name:"Datorgrafik",
    		hp:6,
    		grade:3,
    		date:"2011-08-08",
            languages: ["Java"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNA006",
    		name:"Analys III",
    		hp:6,
    		grade:3,
    		date:"2011-10-19",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM040",
    		name:"Kommunikation och användargränssnitt",
    		hp:6,
    		grade:4,
    		date:"2011-11-28",
            languages: ["Java"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNA007",
    		name:"Vektoranalys",
    		hp:6,
    		grade:5,
    		date:"2011-12-13",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNE043",
    		name:"Mekanik och vågfysik",
    		hp:6,
    		grade:4,
    		date:"2011-12-20",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM042",
    		name:"Design",
    		hp:6,
    		grade:4,
    		date:"2011-12-21",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM059",
    		name:"Grafisk teknik",
    		hp:6,
    		grade:3,
    		date:"2012-03-09",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNG032",
    		name:"Tillämpad transformteori",
    		hp:6,
    		grade:3,
    		date:"2012-03-09",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNG015",
    		name:"Signaler och system",
    		hp:6,
    		grade:3,
    		date:"2012-05-30",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNG033",
    		name:"Programmering i C++",
    		hp:6,
    		grade:4,
    		date:"2012-06-04",
            languages: ["C++"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM061",
    		name:"3D Datorgrafik",
    		hp:6,
    		grade:4,
    		date:"2012-06-28",
            languages: ["C++"],
            frameworks: ["Ogre3D", "Bullet physics", "3DSMax"],
            video: "",
            description:""
    	},
    	{
    		code:"TNG028",
    		name:"Reglerteknik",
    		hp:6,
    		grade:3,
    		date:"2012-10-24",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNG006",
    		name:"Matematisk statistik",
    		hp:6,
    		grade:5,
    		date:"2012-10-26",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM055",
    		name:"Databaser",
    		hp:6,
    		grade:4,
    		date:"2012-12-13",
            languages: ["SQL", "PHP"],
            frameworks: ["MySQL"],
            video: "",
            description:""
    	},
    	{
    		code:"TNG022",
    		name:"Modellbygge och simulering",
    		hp:6,
    		grade:4,
    		date:"2012-12-19",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM087",
    		name:"Bildbehandling och bildanalys",
    		hp:6,
    		grade:3,
    		date:"2013-03-26",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TSBK35",
    		name:"Kompression av ljud och bild",
    		hp:6,
    		grade:3,
    		date:"2013-03-28",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM085",
    		name:"Modelleringsprojekt",
    		hp:6,
    		grade:4,
    		date:"2013-04-25",
            languages: ["C#"],
            frameworks: ["XNA"],
            video: "",
            description:""
    	},
    	{
    		code:"TFYA65",
    		name:"Ljudfysik",
    		hp:6,
    		grade:4,
    		date:"2013-06-01",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:"Min projektgrupp kodade ett program där man kan lägga på och justera reverb  på ett ljud."
    	},
    	{
    		code:"TND004",
    		name:"Datastrukturer",
    		hp:6,
    		grade:4,
    		date:"2013-06-14",
            languages: ["C++"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM066",
    		name:"Datamodeller för kognitiva processer",
    		hp:6,
    		grade:4,
    		date:"2013-10-16",
            languages: ["C++"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM034",
    		name:"Avancerad bildbehandling",
    		hp:6,
    		grade:3,
    		date:"2013-12-19",
            languages: ["Matlab"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM048",
    		name:"Informationsvisualisering",
    		hp:6,
    		grade:4,
    		date:"2014-04-01",
            languages: ["Javascript", "HTML", "CSS"],
            frameworks: ["D3.js"],
            video: "",
            description:""
    	},
    	{
    		code:"TNM060",
    		name:"Teknisk projektledning för audiovisuell medieproduktion",
    		hp:6,
    		grade:4,
    		date:"2014-04-25",
            languages: [""],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM082",
    		name:"Agil användbarhetsutveckling för handhållna enheter",
    		hp:12,
    		grade:5,
    		date:"2014-05-22",
            languages: ["Android Java", "SQL"],
            frameworks: ["SQLite"],
            video: "",
            description:""
    	},
    	{
    		code:"TNM086",
    		name:"VR-teknik",
    		hp:6,
    		grade:3,
    		date:"2014-08-12",
            languages: ["C++"],
            frameworks: ["OpenGL"],
            video: "",
            description:""
    	},
    	{
    		code:"TNM031",
    		name:"Nätverksprogrammering och säkerhet",
    		hp:6,
    		grade:3,
    		date:"2014-10-24",
            languages: ["Android Java"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNM067",
    		name:"Vetenskaplig visualisering",
    		hp:6,
    		grade:3,
    		date:"2014-10-28",
            languages: ["C++"],
            frameworks: ["VTK", "OpenGL"],
            video: "",
            description:""
    	},
    	{
    		code:"TDDB84",
    		name:"Designmönster",
    		hp:6,
    		grade:3,
    		date:"2014-10-29",
            languages: ["Java"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TDDD23",
    		name:"Design och programmering av datorspel",
    		hp:6,
    		grade:5,
    		date:"2014-10-31",
            languages: ["C#", "SQL"],
            frameworks: ["Unity", "SQLite"],
            video: "https://www.youtube.com/watch?v=dLhTD6QGi2A",
            description:""
    	},
    	{
    		code:"TDDD27",
    		name:"Avancerad webbprogrammering",
    		hp:6,
    		grade:4,
    		date:"2014-11-03",
            languages: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
            frameworks: ["Angular", "Codeigniter", "Bootstrap", "Facebook", "D3.js"],
            video: "X_RugP8or8c",
            description:""
    	},
    	{
    		code:"TDDC73",
    		name:"Interaktionsprogrammering",
    		hp:6,
    		grade:4,
    		date:"2015-01-18",
            languages: ["Android Java"],
            frameworks: [""],
            video: "",
            description:""
    	},
    	{
    		code:"TNCG13",
    		name:"SFX - Tricks of the Trade",
    		hp:6,
    		grade:4,
    		date:"2015-02-03",
            languages: ["Python"],
            frameworks: ["Maya"],
            video: "",
            description:"Min projektgrupp gjorde ett flockingplugin till Maya baserat på Boids algorithm."
    	},
        {
            code:"TQME33",
            name:"Examensarbete (Masters thesis)",
            hp:30,
            grade:0,
            date:"2015-06-10",
            languages: ["Javascript"],
            frameworks: ["Angular", "Protractor", "Codeship (CI)", "Node", "Prism", "Gulp", "NgMockE2E", "NgMock"],
            video: "",
            description:"Automated end-to-end testing on single page web applications"


        }];

        this.getCourses = function(){
            return courses;
            console.log(courses);
        };

        this.getProgrammingCourses = function(){
            var programmingCourses = [];
            for (var key in courses) {
                if (courses.hasOwnProperty(key)) {
                    var obj = courses[key];
                    if(obj.languages[0] != "")
                        programmingCourses.push(obj);
                }
            }

            return programmingCourses;
        };

        this.getCourse = function(course){
            for (var key in courses) {
                if (courses.hasOwnProperty(key)) {
                    var obj = courses[key];
                    if(obj.code == course){
                        return obj;
                    }
                }
            }
        };

        this.getProgrammingLanguages = function(){
            var programmingLanguages = [];
            for (var key in courses) {
                if (courses.hasOwnProperty(key)) {
                    var obj = courses[key];
                    if(obj.languages[0] != ""){
                        for(var i = 0; i < obj.languages.length; i++){
                            programmingLanguages.push(obj.languages[i]);
                        }
                    }
                }
            }

            return programmingLanguages;
        };

        this.getProgrammingFrameworks = function(){
            var programmingFrameworks = [];
            for (var key in courses) {
                if (courses.hasOwnProperty(key)) {
                    var obj = courses[key];
                    if(obj.frameworks[0] != ""){
                        for(var i = 0; i < obj.frameworks.length; i++){
                            programmingFrameworks.push(obj.frameworks[i]);
                        }
                    }
                }
            }

            return programmingFrameworks;
        };

  });

