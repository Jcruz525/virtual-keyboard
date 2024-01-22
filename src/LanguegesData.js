const languagesData =   [
    {
        languageName: "English",
        translatedName:"English",
        characters: [
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '.',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "type here"
    },
    {
        languageName: "Hebrew",
        translatedName:"עברית",
        characters: [
            "/", "'", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",
            "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", ".",
            "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", ","
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ], // Default to uppercase English characters
        placeholder: "הקלד כאן"
    },
    {
        languageName: "Arabic",
        translatedName:"عربيه<",
        characters: [
            'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح',
            'ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م',
            'ك', 'ط', 'ئ', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و'
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "أكتب هنا"
    },

    {
        languageName: "ukranian",
        translatedName:"українська<",
        characters: [
            'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї',
            'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є',
            'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "друкуйте тут"
    },{
        languageName: "russian",
        translatedName:"русский",
        characters: [
            'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
            'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
            'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "напечатайте здесь"
    },{
        languageName: "portuguese",
        translatedName:"Português",
        characters: [
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', ';',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "digite aqui"
    },{
        languageName: "spanish",
        translatedName:"Español",
        characters: [
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', ',', 'ç',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "escriba aquí"
    },{
        languageName: "macedonian",
        translatedName:"Македонски",
        characters: [
            'љ','њ','е','р','т','ѕ','у','и','о','п','ш','ѓ',
            'а','с','д','ф','г','х','ј','к','л','ч','ќ','ж',
            'з','џ','ц','в','б','н','м',',','.',
        ],
        shiftCharacters: [
            ...Array.from({ length: 28 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        ],
        placeholder: "пишувајте овде"
    },{
        languageName: "Persian",
        translatedName:"فارسی",
        characters: [
            'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح','ج','چ','پ',
            'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م','ک','گ',
            'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'ئ','و','.','/'
        ],
        shiftCharacters: [
            'ً','ٌ','ٍ','ريال','،','؛',',',']','[','\\','}','{','|' ,
            'َ','ُ','ِ','ّ','ۀ','آ','ـ','«','»',':','"',
            'ة','ي','ژ','ؤ','إ','أ','ء','<','>','؟'
        ],
        placeholder: "اینجا بنویس"
    }
];

export default languagesData;
const getLanguage = (languageName) => {
    const lowercasedLanguageName = languageName.toLowerCase();
    return languagesData.find((language) => language.languageName.toLowerCase() === lowercasedLanguageName);
};
export { getLanguage };
const findCharInLanguage = (language, char) => {
    const lowercasedChar = char.toLowerCase();
    const charIndex = language.characters.findIndex((c) => c === lowercasedChar);
    if (charIndex !== -1) {
        return charIndex;
    }
    const shiftCharIndex = language.shiftCharacters.findIndex((c) => c === lowercasedChar);
    return shiftCharIndex;
};

const findCharIndex = (char) => {
    for (let i = 0; i < languagesData.length; i++) {
        const language = languagesData[i];
        const indexInLanguage = findCharInLanguage(language, char);
        if (indexInLanguage !== -1) {
            return indexInLanguage;
        }
    }
    return -1; // Character not found in any language
};
export {findCharIndex}