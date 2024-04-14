# Terminal Inspiration!

![Martial Artist in a cyberpunk style]("artist.png")

This is a little fun project for me - it just prints out an inspirational quote. I've been using it to print it out when I open up a new zsh instance, but you can use it for whatever you want!

## Requirements

You have two options to run this:

1. You can clone this repo and run `index.ts` directly - you'll need to install Deno for this. You can use any version at this point.
2. You can download a binary from the releases section - which has no dependencies

I also recommend using this on MacOS - i've compliled the bianries for this platform (Apple Silicon specifically), but you can download and compile it yourself for whatever platform you want!

## Usage

If you run the project/binary on it's own, it will look for a file called `quotes.txt`. If it exists it will pull out a line from this. If it doesn't, you can pass in the file location by using the `--location` flag, e.g. `--location="~/quotes.txt"`.
