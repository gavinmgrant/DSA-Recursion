// a recursive function that prints the following organization chart.

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

let ticks = 1;

const orgChart = (people, depth = 0) => {
	ticks++;
    // create repeatable indent of 4 spaces
    let indent = " ".repeat(depth * 4);
    
    // takes each person in 'organization' object
	Object.keys(people).forEach(person => {
		ticks++;
		console.log(indent + person);
        orgChart(people[person], depth + 1)
        
	});
}

orgChart(organization);
console.log('ticks: ' + ticks);