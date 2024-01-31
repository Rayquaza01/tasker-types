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
// Helpful JSDoc comments provided in intellisense
mediaVol(5, true, true);

flashLong(Math.floor(Math.random() * 100).toString());


// Valid - autocomplete via intellisense
audioRecord('/my/path/to/file.3gpp', 'mic', "aac", '3gpp')

// Invalid - throws error if ts checking enabled
audioRecord('/my/path/to/file.3gpp', 'mic', "aac", 'mp3')
// Error: Argument of type '"mp3"' is not assignable to parameter of type 'tkAudioRecordFormat'

exit();
```

Because Tasker functions are in the global scope, as long as this library is installed they will appear there. This also means that these files can be directly ran by tasker w/o removing any imported variables.

`mediaVol(5, true, true)` sets the media volume to 5, displays the new volume on screen and plays a sound.\
`flashLong(Math.floor(Math.random() * 100).toString())` flashes a random number on the screen.\
`audioRecord('/my/path/to/file.3gpp', 'mic', "aac", '3gpp')` records from mic, using codec aac, in format 3gpp.\
`exit()` ends the JS and continues to the next action in the task.
