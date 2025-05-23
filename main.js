// Author names for each quote
const author = [
  "Franklin D. Roosevelt",
  "Mahatma Gandhi",
  "Napoleon Hill",
  "Zoey Sayward",
  "George Halas",
  "Arnold Schwarzenegger",
  "Samuel Johnson",
  "Confucius",
  "Gary Player",
  "Napoleon Hill",
  "Henry David Thoreau",
  "Arnold Schwarzenegger",
  "Henry Ford",
  "Maya Angelou",
  "Wayne Gretzky",
  "Jim Ryun",
  "Gene Tunney",
  "Steve Prefontaine",
  "Arnold Schwarzenegger",
  "Sylvester Stallone",
  "Robert Kiyosaki",
  "Jack Dempsey",
  "Michael Jordan",
  "Muhammad Ali",
  "Mark Twain",
  "Michael Phelps",
  "Thomas Jefferson",
  "Drew Brees",
  "Les Brown",
  "Jerry Dunn",
  "Ronnie Coleman",
];

// Messages (First part of each quote)
const message = [
  "The only limit to our realisation of tomorrow is",
  "Strength does not come from physical capacity. It comes from",
  "The body achieves",
  "Don’t wait for the perfect moment. Take the moment and make it",
  "Nobody who ever gave his best regretted",
  "What I learned is that we are always stronger than",
  "Great works are performed not by strength, but by",
  "Our greatest glory is not in never falling, but in rising every time we",
  "The harder you work, the luckier you",
  "Strength and growth come only through continuous effort and",
  "The harder you work for something, the greater you’ll feel when you",
  "Strength does not come from winning. Your struggles develop your",
  "Whether you think you can or you think you can’t, you’re",
  "Nothing will work unless",
  "You miss every shot you don’t",
  "Motivation is what gets you started. Habit is what keeps you",
  "Exercise should be regarded as tribute to the",
  "To give anything less than your best is to sacrifice the",
  "The last three or four reps is what makes the muscle",
  "Success is usually the culmination of controlling",
  "Confidence comes from discipline and",
  "A champion is someone who gets up when",
  "You must expect great things of yourself before you can",
  "I don’t count my sit-ups. I only start counting when it starts hurting because",
  "The secret of getting ahead is getting",
  "When I feel tired, I just think about how great I will feel once I reach my",
  "If you want something you’ve never had, you must be willing to do something you’ve never",
  "You have to push past your perceived limits, push past that point you thought was as far as you",
  "The harder the battle, the sweeter the",
  "Don’t limit your challenges. Challenge your",
];

// Conditions (Second part of each quote)
const condition = [
  "our doubts of today",
  "an indomitable will",
  "what the mind believes",
  "perfect",
  "it",
  "know",
  "perseverance",
  "fall",
  "get",
  "struggle",
  "achieve it",
  "strengths",
  "right",
  "do",
  "take",
  "going",
  "heart",
  "gift",
  "grow",
  "failure",
  "training",
  "can’t",
  "do them",
  "count",
  "started",
  "goal",
  "done",
  "go",
  "victory",
  "limits",
];

//Random index function
const randomIndex = () => {
  return Math.floor(Math.random() * 29);
};

// Faster way to enter the random index function
const random = randomIndex();

console.log(random);

// Random Quote Generator function
const quoteGenerator = () => {
  // Accessing (with random index) and Concatenating the quote structure
  const quote = `${message[random]} ${condition[random]} - ${author[random]}`;

  console.log(quote);
};

quoteGenerator();
