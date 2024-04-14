function main(): void {
  const fileLocation = "./quotes.txt";
  const rawQuotes = new TextDecoder().decode(Deno.readFileSync(fileLocation));
  const quotes = rawQuotes.split("\n");
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  console.log(quotes[quoteIndex]);
}

main();
