const flagQuestions = [
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/us.png",
    options: ["United States", "United Kingdom", "Australia", "Canada"],
    answer: "United States"
  },
  {
    question: "Which country has this red circle on a white field?",
    image: "https://flagcdn.com/w320/jp.png",
    options: ["China", "Japan", "South Korea", "Bangladesh"],
    answer: "Japan"
  },
  {
    question: "Which African country's flag is shown?",
    image: "https://flagcdn.com/w320/ng.png",
    options: ["Ghana", "Kenya", "Nigeria", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "This flag features a maple leaf. Which country is it?",
    image: "https://flagcdn.com/w320/ca.png",
    options: ["Canada", "USA", "UK", "Switzerland"],
    answer: "Canada"
  },
  {
    question: "Which Asian country has this red flag with five stars?",
    image: "https://flagcdn.com/w320/cn.png",
    options: ["Vietnam", "South Korea", "Japan", "China"],
    answer: "China"
  },
  {
    question: "Which country has a green and yellow flag with a blue globe?",
    image: "https://flagcdn.com/w320/br.png",
    options: ["Brazil", "Colombia", "Ecuador", "Argentina"],
    answer: "Brazil"
  },
  {
    question: "This red flag with a white cross belongs to?",
    image: "https://flagcdn.com/w320/ch.png",
    options: ["Switzerland", "Denmark", "Austria", "Norway"],
    answer: "Switzerland"
  },
  {
    question: "Which country has a tricolor flag of blue, white, and red (horizontal)?",
    image: "https://flagcdn.com/w320/ru.png",
    options: ["Netherlands", "Russia", "France", "Croatia"],
    answer: "Russia"
  },
  {
    question: "Which country uses this red, white, and black flag with two green stars?",
    image: "https://flagcdn.com/w320/sy.png",
    options: ["Iraq", "Syria", "Yemen", "Egypt"],
    answer: "Syria"
  },
  {
    question: "This flag has a crescent moon and star. Which country?",
    image: "https://flagcdn.com/w320/tr.png",
    options: ["Pakistan", "Malaysia", "Turkey", "Algeria"],
    answer: "Turkey"
  },
  {
    question: "Which country has a red and white flag with a red dragon?",
    image: "https://flagcdn.com/w320/gb-wls.png",
    options: ["Scotland", "Wales", "England", "Ireland"],
    answer: "Wales"
  },
  {
    question: "Which country has a red flag with a white crescent and star?",
    image: "https://flagcdn.com/w320/tn.png",
    options: ["Tunisia", "Turkey", "Morocco", "Algeria"],
    answer: "Tunisia"
  },
  {
    question: "This green, white, and orange vertical tricolor flag belongs to?",
    image: "https://flagcdn.com/w320/ie.png",
    options: ["India", "Ivory Coast", "Ireland", "Italy"],
    answer: "Ireland"
  },
  {
    question: "Which Scandinavian country has a blue flag with a yellow cross?",
    image: "https://flagcdn.com/w320/se.png",
    options: ["Finland", "Sweden", "Norway", "Denmark"],
    answer: "Sweden"
  },
  {
    question: "Which country has a red and white flag with a maple leaf?",
    image: "https://flagcdn.com/w320/ca.png",
    options: ["Canada", "Austria", "Denmark", "Japan"],
    answer: "Canada"
  }
,
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ke.png",
    options: ["Greece", "Denmark", "Philippines", "Kenya"],
    answer: "Kenya"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ir.png",
    options: ["Iran", "Kazakhstan", "Slovakia", "Czech Republic"],
    answer: "Iran"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ar.png",
    options: ["India", "South Korea", "Pakistan", "Argentina"],
    answer: "Argentina"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/in.png",
    options: ["India", "Kenya", "Philippines", "Bulgaria"],
    answer: "India"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ua.png",
    options: ["Ukraine", "Malaysia", "Singapore", "Thailand"],
    answer: "Ukraine"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/at.png",
    options: ["Slovenia", "Austria", "Croatia", "Pakistan"],
    answer: "Austria"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/fi.png",
    options: ["Finland", "Saudi Arabia", "Portugal", "Mexico"],
    answer: "Finland"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/gh.png",
    options: ["Ghana", "France", "Italy", "Iran"],
    answer: "Ghana"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/pl.png",
    options: ["Algeria", "Poland", "Germany", "Hungary"],
    answer: "Poland"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/id.png",
    options: ["Slovakia", "Bangladesh", "Indonesia", "Portugal"],
    answer: "Indonesia"
  }
,
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/pk.png",
    options: ["Indonesia", "Poland", "Algeria", "Pakistan"],
    answer: "Pakistan"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/se.png",
    options: ["Bangladesh", "Indonesia", "Sweden", "Singapore"],
    answer: "Sweden"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ke.png",
    options: ["Kenya", "New Zealand", "Argentina", "Morocco"],
    answer: "Kenya"
  }
,
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/fr.png",
    options: ["France", "Brazil", "Croatia", "Mexico"],
    answer: "France"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/mx.png",
    options: ["Italy", "Mexico", "Indonesia", "Philippines"],
    answer: "Mexico"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/il.png",
    options: ["Israel", "India", "Sri Lanka", "Pakistan"],
    answer: "Israel"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/vn.png",
    options: ["Thailand", "Vietnam", "Malaysia", "Bangladesh"],
    answer: "Vietnam"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/th.png",
    options: ["Thailand", "Japan", "South Korea", "China"],
    answer: "Thailand"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/pt.png",
    options: ["Portugal", "France", "Belgium", "Poland"],
    answer: "Portugal"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/au.png",
    options: ["Australia", "New Zealand", "United Kingdom", "South Africa"],
    answer: "Australia"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ph.png",
    options: ["Philippines", "Thailand", "Malaysia", "Indonesia"],
    answer: "Philippines"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/ae.png",
    options: ["Saudi Arabia", "UAE", "Qatar", "Bahrain"],
    answer: "UAE"
  },
  {
    question: "Which country does this flag belong to?",
    image: "https://flagcdn.com/w320/sa.png",
    options: ["Iran", "Saudi Arabia", "UAE", "Egypt"],
    answer: "Saudi Arabia"
  }
];

export default flagQuestions;
