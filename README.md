# tasker-types
Typescript definitions for Tasker functions

Provides type definitions for [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm)'s built in JavaScript(let) functions to help with developing Tasker JavaScript(lets) when using TypeScript and VSCode (or other TS Language Server).

This module exports Tasker's built in `tk` object if running from Tasker, or exports a dummy (empty object) otherwise.

Based on the [Tasker Userguide](https://tasker.joaoapps.com/userguide/en/javascript.html)

# Getting Started
Add tasker-types to your project using:
```
npm i --save tasker-types
```

In a TypeScript file, import `tk` from tasker types. You now have type definitions and autocomplete in

Example:
```
import { tk as tasker } from "tasker-types";

tasker.mediaVol(5, true, true);

tasker.flashLong(Math.floor(Math.random() * 100).toString());

tasker.exit();
```

This example imports `tk` (the Tasker library object) and aliases it to `tasker`.\
`tasker.mediaVol(5, true, true)` sets the media volume to 5, displays the new volume on screen and plays a sound.\
`tasker.flashLong(Math.floor(Math.random() * 100).toString())` flashes a random number on the screen.\
`tasker.exit()` ends the JS and continues to the next action in the task.
