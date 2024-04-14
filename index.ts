/*
 *  Author: Rhys Johns
 *
 *  This is honestly just a super basic program - we load up a list of quotes,
 *  then print one at random to the console. That's it really!
 */
function main(): void {
  const fileLocation = "./quotes.txt";
  const rawQuotes: string = new TextDecoder().decode(
    Deno.readFileSync(fileLocation),
  );
  const quotes: string[] = rawQuotes.split("\n");
  const quoteIndex: number = Math.floor(Math.random() * quotes.length);

  console.log(quotes[quoteIndex]);
}

// Run the main program
main();
