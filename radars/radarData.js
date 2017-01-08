//This is the title for your window tab, and your Radar
document.title = "Johnny's Technology Radar 2017";


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
        	{"name":"Refactoring", "pc":{"r":22,"t":135},"movement":"c"},
        	{"name":"TDD", "pc":{"r":42,"t":157},"movement":"c"}, 
			{"name":"Kanban", "pc":{"r":42,"t":122},"movement":"c"},
            {"name":"Exploratory Testing", "pc":{"r":60,"t":110},"movement":"c"}, 
            {"name":"Structured Logging", "pc":{"r":60,"t":140},"movement":"t"},

			{"name":"Outside in TDD", "pc":{"r":115,"t":160},"movement":"c"},
			{"name":"Continuous Delivery", "pc":{"r":123,"t":120},"movement":"c"},             
            {"name":"Visualisation & Metrics", "pc":{"r":118,"t":140},"movement":"t"},
            {"name":"Impact Maps", "pc":{"r":160,"t":153},"movement":"t"},    
            {"name":"Hexagonal Architecture", "pc":{"r":165,"t":116},"movement":"c"},            
            
            {"name":"Data Lake", "pc":{"r":220,"t":170},"movement":"t"},
            {"name":"Living Documentation", "pc":{"r":246,"t":140},"movement":"t"}, 
            {"name":"Polygot Persistence", "pc":{"r":281,"t":96},"movement":"c"}                      
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 20,
        "color" : "#587486",
        "items" : [ 
            {"name":"ReSharper", "pc":{"r":18,"t":50},"movement":"c"},   
            {"name":"Moq", "pc":{"r":38,"t":25},"movement":"c"},
            {"name":"Git", "pc":{"r":45,"t":50},"movement":"c"},
            {"name":"DbUp", "pc":{"r":53,"t":75},"movement":"t"},
            {"name":"Octopus Deploy", "pc":{"r":60,"t":17},"movement":"c"},		
            {"name":"Serilog ^", "pc":{"r":73,"t":37},"movement":"t"},
            {"name":"Seq ^", "pc":{"r":83,"t":22},"movement":"t"},
            {"name":"Dapper ^", "pc":{"r":78,"t":63},"movement":"t"}, 
            {"name":"SpecFlow", "pc":{"r":85,"t":79},"movement":"t"},

            {"name":"Miniprofiler", "pc":{"r":130,"t":70},"movement":"c"}, 
            {"name":"Humanizer", "pc":{"r":140,"t":45},"movement":"t"}, 
            {"name":"Nodatime", "pc":{"r":170,"t":20},"movement":"c"},            
             
			{"name":"Puppet/Chef", "pc":{"r":243,"t":35},"movement":"c"},            
             
            {"name":"Entity Framework 7 ^", "pc":{"r":319,"t":10},"movement":"t"},
            {"name":"Subversion", "pc":{"r":340,"t":45},"movement":"c"},
            {"name":"TFS (On-Premise)", "pc":{"r":365,"t":76},"movement":"c"}
        ]
    },
    { "quadrant": "Infrastructure",
        "left" :45,
         "top" : (h/2 + 38),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"PostgreSQL", "pc":{"r":20,"t":220},"movement":"c"},   
            {"name":"GitHub", "pc":{"r":50,"t":200},"movement":"c"}, 
			{"name":"Visual Studio Team Services", "pc":{"r":53,"t":230},"movement":"t"},  
            {"name":"RavenDB", "pc":{"r":85,"t":248},"movement":"c"},

            {"name":"SQL Server 2016", "pc":{"r":120,"t":200},"movement":"t"}, 			
            {"name":"Code Climate", "pc":{"r":140,"t":220},"movement":"c"},
            {"name":"Travis CI", "pc":{"r":160,"t":248},"movement":"c"},

			{"name":"Mobile Devices", "pc":{"r":215,"t":190},"movement":"c"},
            {"name":"Amazon Cloud", "pc":{"r":240,"t":211},"movement":"c"},
            {"name":"Azure", "pc":{"r":260,"t":238},"movement":"c"},
            {"name":"Terraform ", "pc":{"r":269,"t":258},"movement":"t"},     

			{"name":"Docker ^", "pc":{"r":320,"t":210},"movement":"t"},
            {"name":"SharePoint 2016 ^", "pc":{"r":350,"t":240},"movement":"t"}
        ]
    },
    { "quadrant": "Lang. & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 38),
        "items" : [ 
            {"name":"Bootstrap", "pc":{"r":25,"t":315},"movement":"c"}, 
			{"name":"C# 6", "pc":{"r":46,"t":287},"movement":"t"}, 
			{"name":"HTML 5", "pc":{"r":77,"t":330},"movement":"c"},

            {"name":"Ruby 2.4", "pc":{"r":120,"t":280},"movement":"c"},  
            {"name":"Rails 5", "pc":{"r":130,"t":300},"movement":"c"},            
            {"name":"OWIN", "pc":{"r":140,"t":315},"movement":"c"},   
            {"name":"Nancy", "pc":{"r":150,"t":330},"movement":"c"}, 
            {"name":"f() JavaScript", "pc":{"r":160,"t":340},"movement":"c"}, 
            
            {"name":"Swift", "pc":{"r":238,"t":295},"movement":"c"},
            {"name":"React", "pc":{"r":260,"t":328},"movement":"t"},
			
			{"name":"ASP.net Core (vNext) ^", "pc":{"r":324,"t":278},"movement":"t"},
            {"name":"AngularJS 2", "pc":{"r":360,"t":305},"movement":"t"}, 
            {"name":"TypeScript", "pc":{"r":370,"t":310},"movement":"c"},
            {"name":"ASP.net WebForms", "pc":{"r":374,"t":351},"movement":"c"}
        ]
    }
];
