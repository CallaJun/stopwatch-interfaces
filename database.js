function generator(){
	var wordlist1 = [
		"Ale","Alex","Ali","Alli","Am","Ame","An","Ana","Andro","Anna","Anth","Ari","Ath","Athe","Au","Aud","Ave","Aver",
		"Bail","Bea","Ben","Beni","Bella","Brook","Brooke",
		"Ca","Calin","Call","Cas","Cass","Cassa","Cin","Char","Chr","Chri","Chris","Chrom","Ceci",
		"Da","Dan","Demi",
		"Elan","Elean","Eli","Em","Emi","Er","Eri","Eric","Erin","Ev","Eve",
		"Fe","Fi",
		"Gabri","Gabi","Gi","Gia",
		"Harri","Hil","Hem",
		"I","Irma","Iva","Ivan",
		"Ja","Jade","Jas","Jo","Jun","June",
		"Laur","Le","Leo","Lil","Lila","Lili","Lill","Lo","Luke",
		"Kay","Kend","Kri","Kris","Ky",
		"Mar","Mari","Mel","Mi","Mik",
		"Nal","Nat","Nish","Nor",
		"O","Owe","Olg",
		"Pey",
		"Quin",
		"Rach","Ril","Rile","Rose","Rosa","Rub",
		"Sa","Sam","Sandi","Sar","Sara","Sav","Savan","Savann","Silv","Soph","Stel","Stell","Stella","Syd",
		"Victor","Vik","Vio","Viol",
		"Will",
		"Xav","Xavi",
		"Yo","Yoda","Yola","Yoko",
		"Zach","Zil"];

		var wordlist2 = [
			"a","abeth","able","aire","all","ana","anda","anna","ara","are",
			"beth","ble",
			"ca","ce",
			"da","dette","dne","dra",
			"e","eaux","el","elle","ella","ema","emma","en","ena","ery","es","et","etta","ette",
			"go","gold","gail",
			"ia","iana","iba","ica","ice","igold","ilda","ily","is","ise","isha","issa","ista","ivia","ix",
			"ka","ko",
			"la","ley","lotte","lucy","luna","ly","lyn",
			"ma","mae","may","meda","mei","min","mine","more","mu",
			"n","na","nah","nia","nka",
			"o","oa","od","or","ora","ow",
			"pessa",
			"ra","ri","rose",
			"sha","sa","sell","sia","sty",
			"ta","tana","tha","to","ton","trice","trix","ty",
			"usa",
			"va","via","vy",
			"y","ya",
			"za","zie","zu"]

			// Random numbers are made
			var randomNumber1 = parseInt(Math.random() * wordlist1.length);
			var randomNumber2 = parseInt(Math.random() * wordlist2.length);
			var name = wordlist1[randomNumber1] + wordlist2[randomNumber2];
			if(name.length>7 || name.indexOf('aa') != -1 || name.indexOf('eee') != -1 || name.indexOf('ii') != -1 || name.indexOf('lld') != -1 || name.indexOf('nnn') != -1 || name.indexOf('mmm') != -1 ||
			name.indexOf('ssv') != -1 || name.indexOf('ssnk') != -1 || name.indexOf('knk') != -1 || name.indexOf('eaea') != -1 || name.indexOf('Chrm') != -1 || name.indexOf('lln') != -1 || name.indexOf('aen') != -1)
			{
				generator();
				return;
			}
			document.getElementById("result").innerHTML = name;
}

function generate_characters() {
	var list = ["A vampire", "A professor", "An archeologist", "JD", "Sorelle", "Dave",
	"A Haverford student", "A dragon", "A penguin who can fly", "Kim Benston", "Nora",
	"Ronald McDonald", "Kim Cassidy","A Bryn Mawr student", "Professor Lindell", "A young waitress",
	"Sophia"];
	var randomNumber = parseInt(Math.random() * list.length);
	document.getElementById("characters").innerHTML = list[randomNumber];
}

function generate_action() {
	var list = ["murders a Haverford student", "commits a crime", "wins the lottery",
	"presents a paper", "learns to speak Esperanto", "gets married", "launches an SQL injection attack",
	"runs a marathon", "finds a handful of magic beans", "buys a guillotine", "enters a time portal",
	"has a midlife crisis"];
	var randomNumber = parseInt(Math.random() * list.length);
	document.getElementById("action").innerHTML = list[randomNumber];
}

function generate_setting() {
	var list = ["online", "at college", "on the beach", "in a cave", "in the ocean",
	"in an elevator", "in a Chinese restaurant", "in Founders", "in the DC", "in Carnegie Hall",
	"in Madison Square Garden", "in an alley behind a rundown building"];
	var randomNumber = parseInt(Math.random() * list.length);
	document.getElementById("setting").innerHTML = list[randomNumber];
}
