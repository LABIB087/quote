var btn = document.getElementById('btn');

var quote = document.getElementById('quote');

var quotes = [
  	"Be the change you wish to see in the world. - Mahatma Gandhi",
  	"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  	"Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
  	"Believe you can and you're halfway there. - Theodore Roosevelt",
  	"Believe in yourself. Not in the you who believes in me. Not the me who believes in you. Believe in the you who believes in yourself. - Kamina, Tengen Toppa Gurren Lagann",
  	"The best way out is always through. - Robert Frost",
  	"Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  	"The only thing we're allowed to do is believe. We can't change anything. - Kira Yoshikage, JoJo's Bizarre Adventure: Diamond is Unbreakable",
  	"It's not about whether you can or can't do something. It's about what you choose to do. - Kousaka Honoka, Love Live!",
  	"To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have. - Matsumoto Rangiku, Bleach",
  	"To be strong is not just physical power, but emotional and mental as well. - Oshino Shinobu, Monogatari Series",
  	"No matter how deep the night, it always turns to day, eventually. - Haruka Nanase, Free!",
  	"The world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so damn beautiful. - Roy Mustang, Fullmetal Alchemist",
  	"There’s no shame in falling down! True shame is to not stand up again! - Shintaro Midorima, Kuroko's Basketball",
  	"The world is merciless, and it's also very beautiful. - Mikasa Ackerman, Attack on Titan",
  	"If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be. - Naruto Uzumaki, Naruto",
  	"The only way to truly escape the mundane is for you to constantly be evolving. - Izaya Orihara, Durarara!!",
  	"There are no regrets in life. Just lessons. - Jennifer Sato, Pokémon",
  	"The world is full of things that don’t go as planned. The longer you live the more you realize reality is just made of pain, suffering and emptiness. - Madara Uchiha, Naruto Shippuden",
  	"The world's not perfect, but it's better than anything else out there. - Gintoki Sakata, Gintama",
  	"Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger. - Gildarts Clive, Fairy Tail",
  	"We are all like fireworks. We climb, shine, and always go our separate ways and become further apart. But even if that time comes, let’s not disappear like a firework, and continue to shine… forever. - Hitsugaya Toushirou, Bleach",
  	"The ticket to the future is always open. - Vash the Stampede, Trigun",
  	"People, who can’t throw something important away, can never hope to change anything. - Armin Arlert, Attack on Titan",
  	"Hard work betrays none, but dreams betray many. - Hachiman Hikigaya, My Teen Romantic Comedy SNAFU",
  	"The only true fear is the fear of the unknown. - Rikka Takanashi, Love, Chunibyo & Other Delusions",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

btn.addEventListener('click', function() {

      var randomIndex = Math.floor(Math.random() * quotes.length);
      var randomQoutes = quotes[randomIndex];

      quote.textContent = randomQoutes;

    })