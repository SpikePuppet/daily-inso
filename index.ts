import { parseArgs } from "https://deno.land/std@0.207.0/cli/parse_args.ts";

/*
 *  Author: Rhys Johns
 *
 *  This is honestly just a super basic program - we load up a list of quotes,
 *  then print one at random to the console. That's it really!
 */
function main(fileLocation: string): void {
  const rawQuotes: string = new TextDecoder().decode(
    Deno.readFileSync(fileLocation),
  );
  const quotes: string[] = rawQuotes.split("\n");
  const quoteIndex: number = Math.floor(Math.random() * quotes.length);

  console.log(quotes[quoteIndex]);
}

// This is pretty neat! Based on minimistjs
const args = parseArgs(Deno.args, {
  string: ["location"],
});

// Run the main program
main(args.location ?? "quotes.txt");
