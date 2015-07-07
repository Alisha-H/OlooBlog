// Data

var posts = [{
		title	: "Q&A: Jason Silva",
		excerpt	: "Brain Games host and Shots of Awe creator tells us what happiness is and who his favourite authors are."
	},{
		title	: "Mirroring Gods",
		excerpt	: "Technology brings us closer and closer to becoming the Gods we envisioned. But what kind of Gods will we be?" 
	},{
		title	: "Getting Indian Women Online",
		excerpt	: "India is one of the largest internet userbases in the world. But only a third of those users are women."
	},{
		title	: "North Korea, South Korea: A Tale of Two Countries",
		excerpt	: "The drastic differences between North and South Korea depicted in these images speak volumes about the status of both countries." 
	}
]

// Storage

var greyImg = 0

$("#big").on('hover','img', function(){
	reveal = $(this).index();

	$(".hidden div").show();
	$(".hidden h3").text(posts[0].title);
});

