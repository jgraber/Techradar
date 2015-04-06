//This is the title for your window tab, and your Radar
document.title = "Johnny's Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 800;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 20,
        "color" : "#8FA227",
        "items" : [ 
        	{"name":"Refactoring", "pc":{"r":15,"t":145},"movement":"t"},
        	{"name":"TDD", "pc":{"r":35,"t":120},"movement":"t"}, 
			{"name":"Continuous Integration", "pc":{"r":50,"t":145},"movement":"t"},    
            {"name":"Kanban", "pc":{"r":75,"t":110},"movement":"t"},
            {"name":"DDD", "pc":{"r":80,"t":170},"movement":"t"}, 

			{"name":"Minimum Marketable Feature", "pc":{"r":115,"t":170},"movement":"t"},
			{"name":"Outside in TDD", "pc":{"r":120,"t":160},"movement":"t"},
			{"name":"Polygot Programming", "pc":{"r":125,"t":120},"movement":"t"},
			{"name":"Impact Maps", "pc":{"r":155,"t":98},"movement":"t"},   
            {"name":"Exploratory Testing", "pc":{"r":170,"t":135},"movement":"t"},
            {"name":"Hexagonal Architecture", "pc":{"r":175,"t":155},"movement":"t"}, 
            {"name":"Logs as Data", "pc":{"r":180,"t":175},"movement":"t"},         
			
            {"name":"Continuous Delivery", "pc":{"r":215,"t":100},"movement":"t", "url":"http://www.google.com"},
            {"name":"Polygot Persistence", "pc":{"r":220,"t":115},"movement":"t"},    
            {"name":"Simulation Testing", "pc":{"r":225,"t":125},"movement":"t"},   
            {"name":"Business Event Tracking", "pc":{"r":240,"t":135},"movement":"t"},   
            {"name":"Visualisation & Metrics", "pc":{"r":255,"t":170},"movement":"t"},   
            {"name":"Story Maps", "pc":{"r":275,"t":145},"movement":"t"},   
            
            {"name":"Database Limitations in API", "pc":{"r":385,"t":135},"movement":"t"}            
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 20,
        "color" : "#587486",
        "items" : [ 
            {"name":"ReSharper", "pc":{"r":20,"t":20},"movement":"t"},   
            {"name":"NuGet", "pc":{"r":40,"t":50},"movement":"t"},   
            {"name":"Moq", "pc":{"r":50,"t":25},"movement":"t"},
            {"name":"Git", "pc":{"r":70,"t":80},"movement":"t"},			
            
            {"name":"Miniprofiler", "pc":{"r":130,"t":50},"movement":"t"}, 
            {"name":"Glimpse", "pc":{"r":150,"t":35},"movement":"t"}, 
            {"name":"Nodatime", "pc":{"r":170,"t":20},"movement":"t"}, 
            
            {"name":"TeamPulse", "pc":{"r":220,"t":5},"movement":"t"},   
            {"name":"MSpec", "pc":{"r":235,"t":25},"movement":"t"},   
            {"name":"SpecFlow", "pc":{"r":240,"t":30},"movement":"t"},  
            {"name":"NDepend", "pc":{"r":245,"t":40},"movement":"t"},  
            {"name":"FakeIt Easy", "pc":{"r":250,"t":50},"movement":"t"},   
            {"name":"Micro ORM", "pc":{"r":260,"t":60},"movement":"t"},   
            {"name":"Puppet/Chef", "pc":{"r":270,"t":65},"movement":"t"},   
            
            {"name":"Subversion", "pc":{"r":330,"t":10},"movement":"t"},
            {"name":"JMockit", "pc":{"r":360,"t":20},"movement":"t"},
            {"name":"TFS (On-Premise)", "pc":{"r":380,"t":30},"movement":"t"}
        ]
    },
    { "quadrant": "Infrastructure",
        "left" :45,
         "top" : (h/2 + 38),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"PostgreSQL", "pc":{"r":20,"t":230},"movement":"t"},   
            {"name":"GitHub", "pc":{"r":60,"t":250},"movement":"t"},   
            {"name":"SQL Server 2012", "pc":{"r":90,"t":230},"movement":"t"}, 

			{"name":"RavenDB", "pc":{"r":115,"t":195},"movement":"t"},
            {"name":"Code Climate", "pc":{"r":140,"t":225},"movement":"t"}, 
            {"name":"SharePoint 2013", "pc":{"r":175,"t":255},"movement":"t"},

			{"name":"Mobile Devices", "pc":{"r":220,"t":225},"movement":"t"},
            {"name":"Amazon Cloud", "pc":{"r":230,"t":200},"movement":"t"},   
            {"name":"Travis CI", "pc":{"r":240,"t":185},"movement":"t"},  
            {"name":"Azure", "pc":{"r":260,"t":255},"movement":"t"},                  
            {"name":"TFS Online Services", "pc":{"r":280,"t":245},"movement":"t"}
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 38),
        "items" : [ 
            {"name":"C# 5", "pc":{"r":20,"t":295},"movement":"t"},
            {"name":"Bootstrap", "pc":{"r":40,"t":315},"movement":"t"}, 
            {"name":"Ruby 2", "pc":{"r":70,"t":345},"movement":"t"},  
            {"name":"Rails 4", "pc":{"r":80,"t":350},"movement":"t"},

            {"name":"HTML 5", "pc":{"r":110,"t":320},"movement":"t"},   
            {"name":"AngularJS", "pc":{"r":120,"t":310},"movement":"t"},   
            {"name":"Jasmin", "pc":{"r":140,"t":305},"movement":"t"},   
            {"name":"f() JavaScript", "pc":{"r":150,"t":320},"movement":"t"}, 

            {"name":"OWIN", "pc":{"r":215,"t":350},"movement":"t"},   
            {"name":"Nancy", "pc":{"r":225,"t":355},"movement":"t"},   
            {"name":"RubyMotion", "pc":{"r":250,"t":280},"movement":"t"},   
            {"name":"ASP.net MVC 5", "pc":{"r":270,"t":320},"movement":"t"},   
            {"name":"ASP.net Web API", "pc":{"r":280,"t":330},"movement":"t"},

            {"name":"WPF", "pc":{"r":320,"t":282},"movement":"t"},
            {"name":"ASP.net WebForms", "pc":{"r":330,"t":290},"movement":"t"},
            {"name":"WinForms", "pc":{"r":360,"t":310},"movement":"t"},            
            {"name":"Silverlight", "pc":{"r":370,"t":340},"movement":"t"},
            {"name":"TypeScript", "pc":{"r":380,"t":350},"movement":"t"}
        ]
    }
];
