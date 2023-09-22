// Cash function

// Write function which will get last visit of user
// history("I've seen 'YouTube'")
// history("I've seen 'Netflix'")
// history("I've seen 'Harry Potter'")
// history("I've seen 'Lord of the Rings'")

// history :
// 1.I've seen 'YouTube'
// 2.I've seen 'Netflix'
// 3.I've seen 'Harry Potter'
// 4.I've seen 'Lord of the Rings'

function closure() {
  let iterator = 1;
  let history = "";

  return function (movie) {
    history += `\n${iterator}. I've seen '${movie}'`;

    iterator++;

    return history;
  };
}

const history = closure();
history("YouTube");
history("Harry Potter");
history("Lord of the Rings");
const result = history("Netflix");

console.log("[result]", result);


