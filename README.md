# tasker-types
Typescript definitions for Tasker functions

Provides type definitions for [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm)'s built in JavaScript(let) functions to help with developing Tasker JavaScript(lets) when using TypeScript and VSCode (or other TS Language Server).

Based on the [Tasker Userguide](https://tasker.joaoapps.com/userguide/en/javascript.html)

# Getting Started
Add tasker-types to your project using:
```
npm i --save-dev tasker-types
```

Example:
```js
// include types without importing module
/// <reference types="tasker-types" />

// alternatively
// import type {} from "tasker-types";

// Helpful JSDoc comments provided in intellisense
mediaVol(5, true, true);

flashLong(Math.floor(Math.random() * 100).toString());

// Valid - autocomplete via intellisense
audioRecord("/my/path/to/file.3gpp", "mic", "aac", "3gpp");

// Invalid - throws error if ts checking enabled
audioRecord("/my/path/to/file.3gpp", "mic", "aac", "mp3");
// Error: Argument of type '"mp3"' is not assignable to parameter of type 'tkAudioRecordFormat'

// you can also use functions via the tk interface
tk.browseURL("https://google.com");

exit();
```

`mediaVol(5, true, true)` sets the media volume to 5, displays the new volume on screen and plays a sound.\
`flashLong(Math.floor(Math.random() * 100).toString())` flashes a random number on the screen.\
`audioRecord("/my/path/to/file.3gpp", "mic", "aac", "3gpp")` records from mic, using codec aac, in format 3gpp.\
`tk.browseURL("https://google.com")` launches Google in your default browser.\
`exit()` ends the JS and continues to the next action in the task.

# Importing Types

To include a type in a script, you can use either a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) or a [Type-only import](https://www.typescriptlang.org/docs/handbook/modules/reference.html#type-only-imports-and-exports)

## Triple Slash Directive

This will import the type definitions, but won't actually *import* the module. Since nothing is actually being imported, the script will not be treated as a module, allowing the output from `tsc` to be used directly in Tasker. (Provided you don't have any other imports)

```
/// <reference types="tasker-types" />
```

## Type-only import

This will import the type definitions, but won't actually import the module. Unlike the triple slash directive, the script will still be treated as a module. The output from `tsc` can't be used directly in Tasker without modification. However, it will work if you're using a bundler (such as `webpack`).

```
import type {} from "tasker-types";
```
