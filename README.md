# Safe InBed

Safe InBed is a powerful text vector embedding library that allows you to safely perform vector embedding on text that exceeds the context window size supported by traditional methods. By leveraging advanced calculations, Safe InBed ensures accurate and reliable vector embeddings for large text inputs.

## Features

- Safe and reliable vector embedding for large text inputs
- Advanced calculations to handle text exceeding context window size

## Installation

To install Safe InBed, use the appropriate command for your package manager:

### <img width="24" height="24" style="vertical-align:top" src="https://jsr.io/logos/deno.svg"> Deno

```sh
deno add @zac/safe-inbed
```

### <img width="24" height="24" style="vertical-align:top" src="https://jsr.io/logos/pnpm_textless.svg"> pnpm

```shell
pnpm add @zac/safe-inbed
```

### <img width="24" height="24" style="vertical-align:top" src="https://jsr.io/logos/bun.svg"> Bun

```shell
bun add @zac/safe-inbed
```

### <img width="24" height="24" style="vertical-align:top" src="https://jsr.io/logos/npm_textless.svg"> npm

```shell
npm install @zac/safe-inbed
```

### <img width="24" height="24" style="vertical-align:top" src="https://jsr.io/logos/yarn_textless.svg"> Yarn

```shell
yarn add @zac/safe-inbed
```


## Usage

Here's a quick example of how to use Safe InBed in your project:

```ts
 * import { calculateTokenCount } from "@zac/safe-inbed";
 * 
 * console.log("Token count:", calculateTokenCount("Hello, world!"));
 * // Output: Token count: 4
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

Safe InBed is licensed under the [MIT License](https://opensource.org/licenses/MIT).
