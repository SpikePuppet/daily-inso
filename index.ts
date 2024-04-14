function main(): void {
  const fileLocation = "./quotes.txt";
  const rawQuotes: string = new TextDecoder().decode(
    Deno.readFileSync(fileLocation),
  );
  const quotes: string[] = rawQuotes.split("\n");
  const quoteIndex: number = Math.floor(Math.random() * quotes.length);

  console.log(quotes[quoteIndex]);
}

main();
