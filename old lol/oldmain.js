function processQuery(){
    const keywords = containsStopword();
    //Check if keywords is false, if not do the following:
    const keywordArray = keywords.split(" ");
    keywordArray = stemmer(keywordArray);

    //keywordArray = keywordArray.join(" ");
    console.log(keywordArray);
}

//Stop Word Removal
function containsStopword(){
    const query = (document.getElementById("search")).value;
    const stopWords = new Set([
        'a',
        'able',
        'about',
        'above',
        'abroad',
        'according',
        'accordingly',
        'across',
        'actually',
        'adj',
        'after',
        'afterwards',
        'again',
        'against',
        'ago',
        'ahead',
        'aint',
        'all',
        'allow',
        'allows',
        'almost',
        'alone',
        'along',
        'alongside',
        'already',
        'also',
        'although',
        'always',
        'am',
        'amid',
        'amidst',
        'among',
        'amongst',
        'an',
        'and',
        'another',
        'any',
        'anybody',
        'anyhow',
        'anyone',
        'anything',
        'anyway',
        'anyways',
        'anywhere',
        'apart',
        'appear',
        'appreciate',
        'appropriate',
        'are',
        'arent',
        'around',
        'as',
        'as',
        'aside',
        'ask',
        'asking',
        'associated',
        'at',
        'available',
        'away',
        'awfully',
        'b',
        'back',
        'backward',
        'backwards',
        'be',
        'became',
        'because',
        'become',
        'becomes',
        'becoming',
        'been',
        'before',
        'beforehand',
        'begin',
        'behind',
        'being',
        'believe',
        'below',
        'beside',
        'besides',
        'best',
        'better',
        'between',
        'beyond',
        'both',
        'brief',
        'but',
        'by',
        'c',
        'came',
        'can',
        'cannot',
        'cant',
        'cant',
        'caption',
        'cause',
        'causes',
        'certain',
        'certainly',
        'changes',
        'class',
        'classes',
        'clearly',
        'cmon',
        'co',
        'co.',
        'com',
        'come',
        'comes',
        'concerning',
        'consequently',
        'consider',
        'considering',
        'contain',
        'containing',
        'contains',
        'corresponding',
        'could',
        'couldnt',
        'course',
        'courses',
        'cs',
        'currently',
        'd',
        'dare',
        'darent',
        'definitely',
        'described',
        'despite',
        'did',
        'didnt',
        'different',
        'directly',
        'do',
        'does',
        'doesnt',
        'doing',
        'done',
        'dont',
        'down',
        'downwards',
        'during',
        'e',
        'each',
        'edu',
        'eg',
        'eight',
        'eighty',
        'either',
        'else',
        'elsewhere',
        'end',
        'ending',
        'enough',
        'entirely',
        'especially',
        'et',
        'etc',
        'even',
        'ever',
        'evermore',
        'every',
        'everybody',
        'everyone',
        'everything',
        'everywhere',
        'ex',
        'exactly',
        'example',
        'except',
        'f',
        'fairly',
        'far',
        'farther',
        'few',
        'fewer',
        'fifth',
        'first',
        'five',
        'followed',
        'following',
        'follows',
        'for',
        'forever',
        'former',
        'formerly',
        'forth',
        'forward',
        'found',
        'four',
        'from',
        'further',
        'furthermore',
        'g',
        'get',
        'gets',
        'getting',
        'given',
        'gives',
        'go',
        'goes',
        'going',
        'gone',
        'got',
        'gotten',
        'greetings',
        'h',
        'had',
        'hadnt',
        'half',
        'happens',
        'hardly',
        'has',
        'hasnt',
        'have',
        'havent',
        'having',
        'he',
        'hed',
        'hell',
        'hello',
        'help',
        'hence',
        'her',
        'here',
        'hereafter',
        'hereby',
        'herein',
        'heres',
        'hereupon',
        'hers',
        'herself',
        'hes',
        'hi',
        'him',
        'himself',
        'his',
        'hither',
        'hopefully',
        'how',
        'howbeit',
        'however',
        'hundred',
        'i',
        'id',
        'ie',
        'if',
        'ignored',
        'ill',
        'im',
        'immediate',
        'in',
        'inasmuch',
        'inc',
        'inc.',
        'indeed',
        'indicate',
        'indicated',
        'indicates',
        'inner',
        'inside',
        'insofar',
        'instead',
        'into',
        'inward',
        'is',
        'isnt',
        'it',
        'itd',
        'itll',
        'its',
        'its',
        'itself',
        'ive',
        'j',
        'just',
        'k',
        'keep',
        'keeps',
        'kept',
        'know',
        'known',
        'knows',
        'l',
        'last',
        'lately',
        'later',
        'latter',
        'latterly',
        'least',
        'less',
        'lest',
        'let',
        'lets',
        'like',
        'liked',
        'likely',
        'likewise',
        'little',
        'look',
        'looking',
        'looks',
        'low',
        'lower',
        'ltd',
        'm',
        'made',
        'mainly',
        'make',
        'makes',
        'many',
        'may',
        'maybe',
        'maynt',
        'me',
        'mean',
        'meantime',
        'meanwhile',
        'merely',
        'might',
        'mightnt',
        'mine',
        'minus',
        'miss',
        'more',
        'moreover',
        'most',
        'mostly',
        'mr',
        'mrs',
        'much',
        'must',
        'mustnt',
        'my',
        'myself',
        'n',
        'name',
        'namely',
        'nd',
        'near',
        'nearly',
        'necessary',
        'need',
        'neednt',
        'needs',
        'neither',
        'never',
        'neverf',
        'neverless',
        'nevertheless',
        'new',
        'next',
        'nine',
        'ninety',
        'no',
        'nobody',
        'non',
        'none',
        'nonetheless',
        'noone',
        'no-one',
        'nor',
        'normally',
        'not',
        'nothing',
        'notwithstanding',
        'novel',
        'now',
        'nowhere',
        'o',
        'obviously',
        'of',
        'off',
        'often',
        'oh',
        'ok',
        'okay',
        'old',
        'on',
        'once',
        'one',
        'ones',
        'ones',
        'only',
        'onto',
        'opposite',
        'or',
        'other',
        'others',
        'otherwise',
        'ought',
        'oughtnt',
        'our',
        'ours',
        'ourselves',
        'out',
        'outside',
        'over',
        'overall',
        'own',
        'p',
        'particular',
        'particularly',
        'past',
        'per',
        'perhaps',
        'placed',
        'please',
        'plus',
        'possible',
        'presumably',
        'probably',
        'provided',
        'provides',
        'q',
        'que',
        'quite',
        'qv',
        'r',
        'rather',
        'rd',
        're',
        'really',
        'reasonably',
        'recent',
        'recently',
        'regarding',
        'regardless',
        'regards',
        'relatively',
        'respectively',
        'right',
        'round',
        's',
        'said',
        'same',
        'saw',
        'say',
        'saying',
        'says',
        'second',
        'secondly',
        'see',
        'seeing',
        'seem',
        'seemed',
        'seeming',
        'seems',
        'seen',
        'self',
        'selves',
        'sensible',
        'sent',
        'serious',
        'seriously',
        'seven',
        'several',
        'shall',
        'shant',
        'she',
        'shed',
        'shell',
        'shes',
        'should',
        'shouldnt',
        'since',
        'six',
        'so',
        'some',
        'somebody',
        'someday',
        'somehow',
        'someone',
        'something',
        'sometime',
        'sometimes',
        'somewhat',
        'somewhere',
        'soon',
        'sorry',
        'specified',
        'specify',
        'specifying',
        'still',
        'sub',
        'such',
        'sup',
        'sure',
        't',
        'take',
        'taken',
        'taking',
        'tell',
        'tends',
        'th',
        'than',
        'thank',
        'thanks',
        'thanx',
        'that',
        'thatll',
        'thats',
        'thats',
        'thatve',
        'the',
        'their',
        'theirs',
        'them',
        'themselves',
        'then',
        'thence',
        'there',
        'thereafter',
        'thereby',
        'thered',
        'therefore',
        'therein',
        'therell',
        'therere',
        'theres',
        'theres',
        'thereupon',
        'thereve',
        'these',
        'they',
        'theyd',
        'theyll',
        'theyre',
        'theyve',
        'thing',
        'things',
        'think',
        'third',
        'thirty',
        'this',
        'thorough',
        'thoroughly',
        'those',
        'though',
        'three',
        'through',
        'throughout',
        'thru',
        'thus',
        'till',
        'to',
        'together',
        'too',
        'took',
        'toward',
        'towards',
        'tried',
        'tries',
        'truly',
        'try',
        'trying',
        'ts',
        'twice',
        'two',
        'u',
        'un',
        'under',
        'underneath',
        'undoing',
        'unfortunately',
        'unless',
        'unlike',
        'unlikely',
        'until',
        'unto',
        'up',
        'upon',
        'upwards',
        'us',
        'use',
        'used',
        'useful',
        'uses',
        'using',
        'usually',
        'v',
        'value',
        'various',
        'versus',
        'very',
        'via',
        'viz',
        'vs',
        'w',
        'want',
        'wants',
        'was',
        'wasnt',
        'way',
        'we',
        'wed',
        'welcome',
        'well',
        'well',
        'went',
        'were',
        'were',
        'werent',
        'weve',
        'what',
        'whatever',
        'whatll',
        'whats',
        'whatve',
        'when',
        'whence',
        'whenever',
        'where',
        'whereafter',
        'whereas',
        'whereby',
        'wherein',
        'wheres',
        'whereupon',
        'wherever',
        'whether',
        'which',
        'whichever',
        'while',
        'whilst',
        'whither',
        'who',
        'whod',
        'whoever',
        'whole',
        'wholl',
        'whom',
        'whomever',
        'whos',
        'whose',
        'why',
        'will',
        'willing',
        'wish',
        'with',
        'within',
        'without',
        'wonder',
        'wont',
        'would',
        'wouldnt',
        'x',
        'y',
        'yes',
        'yet',
        'you',
        'youd',
        'youll',
        'your',
        'youre',
        'yours',
        'yourself',
        'yourselves',
        'youve',
        'z',
        'zero'
    ]);

    const filteredQuery = removeStopwords(query, stopWords);

    if(filteredQuery !== query){
        console.log(filteredQuery);
        return filteredQuery;
    }else {return query;}
}
function removeStopwords(query, stopwords){
    const words = query.toLowerCase().split(/\W+/);
    const filteredWords = words.filter(word => !stopwords.has(word));

    return filteredWords.join(" ");
}


//Porter Stemming Algorithm
//reference: https://vijinimallawaarachchi.com/2017/05/09/porter-stemming-algorithm/
function stemWord(word){
    let stemmedWord = word.toLowerCase();

    /* Step 1a:
        SSES   →   SS
        IES    →   I
        SS     →   SS
        S      →
    */
    if (stemmedWord.endsWith("sses")) {
        stemmedWord = stemmedWord.slice(0, -2);
    } else if (stemmedWord.endsWith("ies")) {
        stemmedWord = stemmedWord.slice(0, -2);
    } else if (stemmedWord.endsWith("s") && !stemmedWord.endsWith("ss")) {
        stemmedWord = stemmedWord.slice(0, -1);
    }

    /* Step 1b:
        (m>0) EED    →   EE
        (*v*) ED     →
        (*v*) ING    →
    */
    if(stemmedWord.endsWith("eed")){
        if(porterMeasure(stemmedWord.slice(0, -3)) > 0){
            stemmedWord = stemmedWord.slice(0, -1);
        }else{
            return stemmedWord;
        }
    }else if(stemmedWord.endsWith("ed")){
        if(hasVowel(stemmedWord.slice(0, -2))){
            stemmedWord = porter1bHelper(stemmedWord.slice(0, -2));
        }else {
            return stemmedWord;
        }
    }else if(stemmedWord.endsWith("ing")){
        if(hasVowel(stemmedWord.endsWith(0, -3))){
            stemmedWord = porter1bHelper(stemmedWord.slice(0, -3));
        }else{
            return stemmedWord;
        }
    }

    /* Step 1c:
        (*v*) Y    →    I
    */
    if((stemmedWord.endsWith("y")) && (hasVowel(stemmedWord.slice(0, -1)))){
        stemmedWord = stemmedWord.slice(0, -1) + "i";
    }

    /* Step 2: 
        (m>0) ATIONAL  →   ATE
        (m>0) TIONAL   →   TION
        (m>0) ENCI     →   ENCE
        (m>0) ANCI     →   ANCE
        (m>0) IZER     →   IZE
        (m>0) ABLI     →   ABLE
        (m>0) ALLI     →   AL
        (m>0) ENTLI    →   ENT
        (m>0) ELI      →   E
        (m>0) OUSLI    →   OUS
        (m>0) IZATION  →   IZE
        (m>0) ATION    →   ATE
        (m>0) ATOR     →   ATE
        (m>0) ALISM    →   AL
        (m>0) IVENESS  →   IVE
        (m>0) FULNESS  →   FUL
        (m>0) OUSNESS  →   OUS
        (m>0) ALITI    →   AL
        (m>0) IVITI    →   IVE
        (m>0) BILITI   →   BLE
    */
    switch (true) {
        case stemmedWord.endsWith("ational"):
            stemmedWord = stemmedWord.replace("ational", "ate");
            break;
        case stemmedWord.endsWith("tional"):
            stemmedWord = stemmedWord.replace("tional", "tion");
            break;
        case stemmedWord.endsWith("enci"):
            stemmedWord = stemmedWord.replace("enci", "ence");
            break;
        case stemmedWord.endsWith("anci"):
            stemmedWord = stemmedWord.replace("anci", "ance");
            break;
        case stemmedWord.endsWith("izer"):
            stemmedWord = stemmedWord.replace("izer", "ize");
            break;
        case stemmedWord.endsWith("abli"):
            stemmedWord = stemmedWord.replace("abli", "able");
            break;
        case stemmedWord.endsWith("alli"):
            stemmedWord = stemmedWord.replace("alli", "al");
            break;
        case stemmedWord.endsWith("entli"):
            stemmedWord = stemmedWord.replace("entli", "ent");
            break;
        case stemmedWord.endsWith("eli"):
            stemmedWord = stemmedWord.replace("eli", "e");
            break;
        case stemmedWord.endsWith("ousli"):
            stemmedWord = stemmedWord.replace("ousli", "ous");
            break;
        case stemmedWord.endsWith("ization"):
            stemmedWord = stemmedWord.replace("ization", "ize");
            break;
        case stemmedWord.endsWith("ation"):
            stemmedWord = stemmedWord.replace("ation", "ate");
            break;
        case stemmedWord.endsWith("ator"):
            stemmedWord = stemmedWord.replace("ator", "ate");
            break;
        case stemmedWord.endsWith("alism"):
            stemmedWord = stemmedWord.replace("alism", "al");
            break;
        case stemmedWord.endsWith("iveness"):
            stemmedWord = stemmedWord.replace("iveness", "ive");
            break;
        case stemmedWord.endsWith("fulness"):
            stemmedWord = stemmedWord.replace("fulness", "ful");
            break;
        case stemmedWord.endsWith("ousness"):
            stemmedWord = stemmedWord.replace("ousness", "ous");
            break;
        case stemmedWord.endsWith("aliti"):
            stemmedWord = stemmedWord.replace("aliti", "al");
            break;
        case stemmedWord.endsWith("iviti"):
            stemmedWord = stemmedWord.replace("iviti", "ive");
            break;
        case stemmedWord.endsWith("biliti"):
            stemmedWord = stemmedWord.replace("biliti", "ble");
            break;
        default:
            stemmedWord = stemmedWord;
            break;
    }

    /* Step 3: 
        (m>0) ICATE  →  IC
        (m>0) ATIVE  →
        (m>0) ALIZE  →  AL
        (m>0) ICITI  →  IC
        (m>0) ICAL   →  IC
        (m>0) FUL    →
        (m>0) NESS   →
    */
    switch(true){
        case stemmedWord.endsWith("icate"):
            stemmedWord = stemmedWord.replace("icate", "ic");
            break;
        case stemmedWord.endsWith("ative"):
            stemmedWord = stemmedWord.replace("ative", "");
            break;
        case stemmedWord.endsWith("alize"):
            stemmedWord = stemmedWord.replace("alize", "al");
            break;
        case stemmedWord.endsWith("iciti"):
            stemmedWord = stemmedWord.replace("iciti", "ic");
            break;
        case stemmedWord.endsWith("ical"):
            stemmedWord = stemmedWord.replace("ical", "ic");
            break;
        case stemmedWord.endsWith("ful"):
            stemmedWord = stemmedWord.replace("ful", "");
            break;
        case stemmedWord.endsWith("ness"):
            stemmedWord = stemmedWord.replace("ness", "");
            break;
        default:
            stemmedWord = stemmedWord;
            break;
    }

    //Step 4
    let m = measure(stemmedWord);
    if(m > 1){
        if (stemmedWord.endsWith("al")) {
            stemmedWord = stemmedWord.slice(0, -2);
        } else if (stemmedWord.endsWith("ance")) {
            stemmedWord = stemmedWord.slice(0, -4);
        } else if (stemmedWord.endsWith("ence")) {
            stemmedWord = stemmedWord.slice(0, -4);
        } else if (stemmedWord.endsWith("er")) {
            stemmedWord = stemmedWord.slice(0, -2);
        } else if (stemmedWord.endsWith("ic")) {
            stemmedWord = stemmedWord.slice(0, -2);
        } else if (stemmedWord.endsWith("able")) {
            stemmedWord = stemmedWord.slice(0, -4);
        } else if (stemmedWord.endsWith("ible")) {
            stemmedWord = stemmedWord.slice(0, -4);
        } else if (stemmedWord.endsWith("ant")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("ement")) {
            stemmedWord = stemmedWord.slice(0, -5);
        } else if (stemmedWord.endsWith("ment")) {
            stemmedWord = stemmedWord.slice(0, -4);
        } else if (stemmedWord.endsWith("ent")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if ((stemmedWord.endsWith("s") || stemmedWord.endsWith("t")) && stemmedWord.endsWith("ion")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("ou")) {
            stemmedWord = stemmedWord.slice(0, -2);
        } else if (stemmedWord.endsWith("ism")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("ate")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("iti")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("ous")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("ive")) {
            stemmedWord = stemmedWord.slice(0, -3);
        } else if (stemmedWord.endsWith("ize")) {
            stemmedWord = stemmedWord.slice(0, -3);
        }
    }


    //Step 5 a & b
    m = measure(stemmedWord);
    let endsWithDoubleConsonant = /(bb|dd|ff|gg|mm|nn|pp|rr|tt)$/.test(stemmedWord);
    let endsWithL = /[^aeiou]l$/.test(stemmedWord);
    
    if (m > 1 && stemmedWord.endsWith("e")) {
        if (stemmedWord.endsWith("ee") || stemmedWord.endsWith("oe")) {
        return stemmedWord;
        } else if (endsWithL && !stemmedWord.endsWith("le")) {
        return stemmedWord.slice(0, -1);
        } else if (!endsWithDoubleConsonant && !endsWithL && !stemmedWord.endsWith("o")) {
        return stemmedWord.slice(0, -1);
        }
    } else if (m === 1 && !word.endsWith("o") && stemmedWord.endsWith("e")) {
        return stemmedWord.slice(0, -1);
    }
    
    if (m > 1 && endsWithDoubleConsonant && /[lsz]$/.test(stemmedWord.slice(-3, -2))) {
        return stemmedWord.slice(0, -1);
    }
    return stemmedWord;
}
//Calculate 'm' where 'm' is the number of occurances of vowel & consonant pairs
//Can be represented in the form: [C](VC)^m[V]
//Where the square brackets are optional consonants or vowels and (VC)^m rednotes VC repeated m times
function measure(word){
    let m = 0;
    let is_previous_char_vowel = false;
    const pattern = '[^aeiou][aeiouy][^aeiouy]';
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            if(!is_previous_char_vowel){
                m++;
                is_previous_char_vowel = true;
            }
        } else {
            is_previous_char_vowel = false;
        }
    }
    const regex = new RegExp(pattern, 'gi');
    const matches = (word.match(regex) || []);
    m -= matches.length;
    //Return measure if value, otherwise no pattern exists.
    return m > 0 ? m : 0;
}
//Helper functions for Porter Stemming
/* Step 1b (part 2):
                                AT  →   ATE
                                BL  →   BLE
                                IZ  →   IZE
    (*d and not (*L or *S or *Z))   →   single letter
                      (m=1 and *o)  →   E
*/
function endsWith(str, suffixes){
    return suffixes.some((suffix) => str.endsWith(suffix));
}
function hasVowel(word){
    return /[aeiouy]/.test(word);
}
function doubleConsonant(word){
    const lastTwo = word.slice(-2);
    return /(bb|cc|dd|ff|gg|hh|jj|kk|ll|mm|nn|pp|qq|rr|ss|tt|vv|ww|xx|zz)$/.test(lastTwo);
}
function porter1bHelper(word){
    if(word.endsWith("at")){
        return word + "e";
    }else if(word.endsWith("bl")){
        return word + "e";
    }else if(word.endsWith("iz")){
        return word + "e";
    }else if(doubleConsonant(word) && !endsWith(word, ["l", "s", "z"])){
        return word.slice(0, -1);
    }else if( (/[^aeiouy][aeiouy][^aeiouy]$/.test(word.slice(-3))) ){
        return word + "e";
    }else{
        return word;
    }
}

// Porter stemmer in Javascript. Few comments, but it's easy to follow against the rules in the original
// paper, in
//
//  Porter, 1980, An algorithm for suffix stripping, Program, Vol. 14,
//  no. 3, pp 130-137,
//
// see also http://www.tartarus.org/~martin/PorterStemmer

// Release 1 be 'andargor', Jul 2004
// Release 2 (substantially revised) by Christopher McKenzie, Aug 2009

var stemmer = (function(){
	var step2list = {
			"ational" : "ate",
			"tional" : "tion",
			"enci" : "ence",
			"anci" : "ance",
			"izer" : "ize",
			"bli" : "ble",
			"alli" : "al",
			"entli" : "ent",
			"eli" : "e",
			"ousli" : "ous",
			"ization" : "ize",
			"ation" : "ate",
			"ator" : "ate",
			"alism" : "al",
			"iveness" : "ive",
			"fulness" : "ful",
			"ousness" : "ous",
			"aliti" : "al",
			"iviti" : "ive",
			"biliti" : "ble",
			"logi" : "log"
		},

		step3list = {
			"icate" : "ic",
			"ative" : "",
			"alize" : "al",
			"iciti" : "ic",
			"ical" : "ic",
			"ful" : "",
			"ness" : ""
		},

		c = "[^aeiou]",          // consonant
		v = "[aeiouy]",          // vowel
		C = c + "[^aeiouy]*",    // consonant sequence
		V = v + "[aeiou]*",      // vowel sequence

		mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
		meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
		mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
		s_v = "^(" + C + ")?" + v;                   // vowel in stem

	return function (w) {
		var 	stem,
			suffix,
			firstch,
			re,
			re2,
			re3,
			re4,
			origword = w;

		if (w.length < 3) { return w; }

		firstch = w.substr(0,1);
		if (firstch == "y") {
			w = firstch.toUpperCase() + w.substr(1);
		}

		// Step 1a
		re = /^(.+?)(ss|i)es$/;
		re2 = /^(.+?)([^s])s$/;

		if (re.test(w)) { w = w.replace(re,"$1$2"); }
		else if (re2.test(w)) {	w = w.replace(re2,"$1$2"); }

		// Step 1b
		re = /^(.+?)eed$/;
		re2 = /^(.+?)(ed|ing)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			re = new RegExp(mgr0);
			if (re.test(fp[1])) {
				re = /.$/;
				w = w.replace(re,"");
			}
		} else if (re2.test(w)) {
			var fp = re2.exec(w);
			stem = fp[1];
			re2 = new RegExp(s_v);
			if (re2.test(stem)) {
				w = stem;
				re2 = /(at|bl|iz)$/;
				re3 = new RegExp("([^aeiouylsz])\\1$");
				re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
				if (re2.test(w)) {	w = w + "e"; }
				else if (re3.test(w)) { re = /.$/; w = w.replace(re,""); }
				else if (re4.test(w)) { w = w + "e"; }
			}
		}

		// Step 1c
		re = /^(.+?)y$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			re = new RegExp(s_v);
			if (re.test(stem)) { w = stem + "i"; }
		}

		// Step 2
		re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				w = stem + step2list[suffix];
			}
		}

		// Step 3
		re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				w = stem + step3list[suffix];
			}
		}

		// Step 4
		re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
		re2 = /^(.+?)(s|t)(ion)$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			re = new RegExp(mgr1);
			if (re.test(stem)) {
				w = stem;
			}
		} else if (re2.test(w)) {
			var fp = re2.exec(w);
			stem = fp[1] + fp[2];
			re2 = new RegExp(mgr1);
			if (re2.test(stem)) {
				w = stem;
			}
		}

		// Step 5
		re = /^(.+?)e$/;
		if (re.test(w)) {
			var fp = re.exec(w);
			stem = fp[1];
			re = new RegExp(mgr1);
			re2 = new RegExp(meq1);
			re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
			if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
				w = stem;
			}
		}

		re = /ll$/;
		re2 = new RegExp(mgr1);
		if (re.test(w) && re2.test(w)) {
			re = /.$/;
			w = w.replace(re,"");
		}

		// and turn initial Y back to y

		if (firstch == "y") {
			w = firstch.toLowerCase() + w.substr(1);
		}

		return w;
	}
})();