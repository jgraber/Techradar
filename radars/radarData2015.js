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
        	{"name":"Refactoring", "pc":{"r":20,"t":145},"movement":"c"},
        	{"name":"TDD", "pc":{"r":40,"t":120},"movement":"c"}, 
			{"name":"Continuous Integration", "pc":{"r":50,"t":145},"movement":"c"},    
            {"name":"Kanban", "pc":{"r":75,"t":110},"movement":"c"},
            {"name":"DDD", "pc":{"r":80,"t":150},"movement":"c"},   
            {"name":"Exploratory Testing", "pc":{"r":80,"t":130},"movement":"t"}, 
            {"name":"Structured Logging ^", "pc":{"r":85,"t":170},"movement":"t"},

			{"name":"Minimum Marketable Feature", "pc":{"r":115,"t":170},"movement":"c"},
			{"name":"Outside in TDD", "pc":{"r":120,"t":160},"movement":"c"},
			{"name":"Polygot Programming", "pc":{"r":125,"t":120},"movement":"c"},
			{"name":"Continuous Delivery", "pc":{"r":155,"t":100},"movement":"c", "url":"http://www.google.com"},
            {"name":"Hexagonal Architecture", "pc":{"r":175,"t":155},"movement":"c"}, 
                     
			{"name":"Visualisation & Metrics", "pc":{"r":220,"t":100},"movement":"c"},
            {"name":"Impact Maps", "pc":{"r":240,"t":135},"movement":"c"},    
            {"name":"Polygot Persistence", "pc":{"r":275,"t":170},"movement":"c"}            
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 20,
        "color" : "#587486",
        "items" : [ 
            {"name":"ReSharper", "pc":{"r":20,"t":35},"movement":"c"},   
            {"name":"NuGet", "pc":{"r":40,"t":50},"movement":"c"},   
            {"name":"Moq", "pc":{"r":50,"t":25},"movement":"c"},
            {"name":"Git", "pc":{"r":70,"t":80},"movement":"c"},
            {"name":"Balsamiq Mockup ^", "pc":{"r":80,"t":60},"movement":"t"},
            {"name":"Octopus Deploy ^", "pc":{"r":90,"t":40},"movement":"t"},			
            
            {"name":"Serilog ^", "pc":{"r":120,"t":10},"movement":"t"},
            {"name":"Miniprofiler", "pc":{"r":130,"t":70},"movement":"c"}, 
            {"name":"Glimpse", "pc":{"r":150,"t":50},"movement":"c"}, 
            {"name":"Nodatime", "pc":{"r":170,"t":20},"movement":"c"},
            {"name":"Micro ORM", "pc":{"r":180,"t":60},"movement":"t"}, 
             
            {"name":"Entity Framework 7 ^", "pc":{"r":220,"t":10},"movement":"c"}, 
            {"name":"SpecFlow", "pc":{"r":260,"t":30},"movement":"c"},    
            {"name":"Puppet/Chef", "pc":{"r":280,"t":65},"movement":"c"},   
            
            {"name":"Subversion", "pc":{"r":330,"t":10},"movement":"c"},
            {"name":"TFS (On-Premise)", "pc":{"r":380,"t":30},"movement":"c"}
        ]
    },
    { "quadrant": "Infrastructure",
        "left" :45,
         "top" : (h/2 + 38),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"PostgreSQL", "pc":{"r":20,"t":230},"movement":"c"},   
            {"name":"GitHub", "pc":{"r":60,"t":250},"movement":"c"},   
            {"name":"RavenDB", "pc":{"r":85,"t":195},"movement":"t"},

            {"name":"SQL Server 2014", "pc":{"r":120,"t":200},"movement":"t"}, 			
            {"name":"Code Climate", "pc":{"r":130,"t":220},"movement":"c"},
            {"name":"Travis CI", "pc":{"r":160,"t":195},"movement":"t"},
            {"name":"TFS Online Services", "pc":{"r":180,"t":235},"movement":"t"},

			{"name":"Mobile Devices", "pc":{"r":215,"t":190},"movement":"c"},
            {"name":"SharePoint 2016 ^", "pc":{"r":220,"t":210},"movement":"t"},
            {"name":"Amazon Cloud", "pc":{"r":230,"t":225},"movement":"c"},   
            {"name":"Docker ^", "pc":{"r":250,"t":240},"movement":"t"},
            {"name":"Azure", "pc":{"r":260,"t":255},"movement":"c"}                 
            
        ]
    },
    { "quadrant": "Lang. & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 38),
        "items" : [ 
            {"name":"Bootstrap", "pc":{"r":25,"t":315},"movement":"c"}, 
            {"name":"Ruby 2", "pc":{"r":70,"t":325},"movement":"c"},  
            {"name":"Rails 4", "pc":{"r":80,"t":350},"movement":"c"},

            {"name":"HTML 5", "pc":{"r":115,"t":280},"movement":"c"},
            {"name":"OWIN", "pc":{"r":125,"t":300},"movement":"t"},   
            {"name":"Nancy", "pc":{"r":135,"t":320},"movement":"t"}, 
            {"name":"C# 6 ^", "pc":{"r":155,"t":340},"movement":"t"},   
            {"name":"Jasmin", "pc":{"r":170,"t":355},"movement":"c"},   
            {"name":"f() JavaScript", "pc":{"r":180,"t":290},"movement":"t"}, 

            {"name":"ASP.net 5 (vNext) ^", "pc":{"r":230,"t":300},"movement":"t"},
            {"name":"Swift ^", "pc":{"r":230,"t":320},"movement":"t"},
            {"name":"Go Language ^", "pc":{"r":260,"t":340},"movement":"t"},
            {"name":"AngularJS 2 ^", "pc":{"r":280,"t":350},"movement":"t"}, 

            {"name":"TypeScript ^", "pc":{"r":320,"t":282},"movement":"c"},
            {"name":"ASP.net WebForms", "pc":{"r":330,"t":290},"movement":"c"},
            {"name":"WinForms", "pc":{"r":360,"t":310},"movement":"c"},            
            {"name":"Silverlight", "pc":{"r":370,"t":340},"movement":"c"},
            {"name":"WPF", "pc":{"r":380,"t":350},"movement":"c"}
        ]
    }
];
