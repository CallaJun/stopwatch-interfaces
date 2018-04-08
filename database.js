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
			
			//alert(name); //Remove first to slashes to alert the name
			
			//If there's already a name it is removed  
			if(document.getElementById("result")){
				document.getElementById("placeholder").removeChild(document.getElementById("result"));
			}
			
			if(name.length>7 || name.indexOf('aa') != -1 || name.indexOf('eee') != -1 || name.indexOf('ii') != -1 || name.indexOf('lld') != -1 || name.indexOf('nnn') != -1 || name.indexOf('mmm') != -1 ||
			   name.indexOf('ssv') != -1 || name.indexOf('ssnk') != -1 || name.indexOf('knk') != -1 || name.indexOf('eaea') != -1 || name.indexOf('Chrm') != -1 || name.indexOf('lln') != -1 || name.indexOf('aen') != -1)
			{
				generator();
				return;
			}
			// A div element is created to show the generated name. The Name is added as a textnode. Textnode is added to the placeholder.
			var element = document.createElement("div");
			element.setAttribute("id", "result");
			element.appendChild(document.createTextNode(name));
			document.getElementById("placeholder").appendChild(element);
		}		