// Type Definitions for Tasker Javascipt(let)
// https://tasker.joaoapps.com/userguide/en/javascript.html

// Types for parameters that only accept certain constants
export type tkAudioStream = "call" | "system" | "ringer" | "media" | "alarm" | "notification";
export type tkAudioRecordSource = "def" | "mic" | "call" | "callout" | "callin";
export type tkAudioRecordCodec = "amrn" | "amrw" | "aac";
export type tkAudioRecordFormat = "mp4" | "3gpp" | "amrn" | "amrw";
export type tkButtonNames = "back" | "call" | "camera" | "endcall" | "menu" | "volup" | "voldown" | "search";
export type tkConversionType = "byteToKbyte" | "byteToMbyte" | "byteToGbyte" | "datetimeToSec" | "secToDatetime" | "secToDatetimeM" | "secToDatetimeL" | "htmlToText" | "celsToFahr" | "fahrToCels" | "inchToCent" | "metreToFeet" | "feetToMetre" | "kgToPound" | "poundToKg" | "kmToMile" | "mileToKm" | "urlDecode" | "urlEncode" | "binToDec" | "decToBin" | "hexToDec" | "decToHex" | "base64encode" | "base64decode" | "toMd5" | "toSha1" | "toLowerCase" | "toUpperCase" | "toUpperCaseFirst";
export type tkDirection = "up" | "down" | "left" | "right" | "press";
export type tkOrientation = "port" | "land";
export type tkTextReplace = "repl" | "start" | "end";
export type tkColourFilter = "bw" | "eblue" | "egreen" | "ered" | "grey" | "alpha";
export type tkLocationMode = "gps" | "net" | "any";
export type tkLanguageModel = "web" | "free";
export type tkMediaAction = "next" | "pause" | "prev" | "toggle" | "stop" | "play";
export type tkRebootMode = "normal" | "recovery" | "bootloader";
export type tkRotationDirection = "left" | "right";
export type tkRotationDegrees = 45 | 90 | 135 | 180;
export type tkIntentAction = "receiver" | "activity" | "service";
export type tkIntentCategory = "none" | "alt" | "browsable" | "cardock" | "home" | "info" | "launcher" | "perference" | "selectedalt" | "tab" | "test";
export type tkSettingsScreen = "all" | "accessibility" | "addacount" | "airplanemode" | "apn" | "app" | "batteryinfo" | "appmanage" | "bluetooth" | "date" | "deviceinfo" | "dictionary" | "display" | "inputmethod" | "internalstorage" | "locale" | "location" | "memorycard" | "networkoperator" | "powerusage" | "privacy" | "quicklaunch" | "security" | "mobiledata" | "search" | "sound" | "sync" | "wifi" | "wifiip" | "wireless";
export type tkDisplayAs = "Overlay" | "OverBlocking" | "OverBlockFullDisplay" | "Dialog" | "DialogBlur" | "DialogDim" | "ActivityFullWindow" | "ActivityFullDisplay" | "ActivityFullDisplayNoTitle";
export type tkSilentMode = "off" | "vibrate" | "on";
export type tkStayOnMode = "never" | "ac" | "usb" | "any";
export type tkCamera = 0 | 1;

// Interface with type definitions for Tasker functions
export interface TK {
    /**
     * Set alarm volume
     * @param level Set the relevant system volume to *level*. (0-7)
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    alarmVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set bluetooth voice volume
     * @param level Set the relevant system volume to *level*.
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    btVoiceVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set call volume
     * @param level Set the relevant system volume to *level*.
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    callVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set dtmf volume
     * @param level Set the relevant system volume to *level*.
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    dtmfVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set media volume
     * @param level Set the relevant system volume to *level*. (0-15)
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    mediaVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set notification volume
     * @param level Set the relevant system volume to *level*.
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    notificationVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set system volume
     * @param level Set the relevant system volume to *level*.
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    systemVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Set ringer volume
     * @param level Set the relevant system volume to *level*. (0-7)
     * @param display If *display* is true, the new level will be flashed up on-screen.
     * @param sound If *sound* is true, a tone will sound at the new level.
     */
    ringerVol(level: number, display: boolean, sound: boolean): boolean

    /**
     * Records audio
     *
     * The JavaScript does **not** wait for the audio recording to complete.
     *
     * See also: audioRecordStop().
     * @param destPath where to put the recording. Note that a file extension is
     * not necessary, it will correspond to the selected *format*.
     * @param source one of **def**, **mic**, **call**, **callout** or **callin**
     * @param codec one of **amrn**, **amrw** or **aac**
     * @param format one of **mp4**, **3gpp**, **amrn** or **amrw**
     */
    audioRecord(destPath: string, source: tkAudioRecordSource, codec: tkAudioRecordCodec, format: tkAudioRecordFormat): boolean

    /**
     * Stop recording previously initiated by audioRecord().
     */
    audioRecordStop(): boolean

    /**
     * Open the default browser at the specifed URL.
     * @param url URL to open
     */
    browseURL(url: string): boolean

    /**
     * Simulate a press of the named button.
     *
     * This function requires a rooted device.
     * @param name must be one of **back**, **call**, **camera**, **endcall**,
     * **menu**, **volup**, **voldown** or **search**.
     */
    button(name: tkButtonNames): boolean

    /**
     * Make a phone call
     * @param num The phone number to call
     * @param autodial If *autoDial* is **false**, the phone app will be brought
     * up with the number pre-inserted, if **true** the number will also be dialed.
     */
    call(num: string, autodial: boolean): boolean

    /**
     * Block **outgoing** calls
     * [matching](https://tasker.joaoapps.com/userguide/en/matching.html) *numMatch*.
     * @param numMatch Pattern to block
     * @param showInfo If showInfo is set, Tasker will flash a message when a call is blocked.
     */
    callBlock(numMatch: string, showInfo: boolean): boolean

    /**
     * Divert **outgoing** calls
     * [matching](https://tasker.joaoapps.com/userguide/en/matching.html)
     * *fromMatch* to the number *to*.
     * @param fromMatch Pattern to match outgoing calls
     * @param to Number to divert to
     * @param showInfo If *showInfo* is set, Tasker will flash a message when a call is diverted.
     */
    callDivert(fromMatch: string, to: string, showInfo: boolean): boolean

    /**
     * Stop blocking or diverting outgoing calls previously specified with
     * callBlock or callDivert.
     * @param numMatch Pattern to stop blocking/diverting
     */
    callRevert(numMatch: string): boolean

    /**
     * Turn on or off Android Car Mode.
     * @param onFlag On or off
     */
    carMode(onFlag: boolean): boolean

    /**
     * Clear the passphrase for the specified *keyName*.
     *
     * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html)
     * in the Userguide.
     * @param keyName key to clear
     */
    clearKey(keyName: string): boolean

    /**
     * Show an email composition dialog with any specified fields pre-filled.
     *
     * The JavaScript does **not** wait for the email to be sent before continuing.
     * @param to To field
     * @param subject Subject field
     * @param message Message body
     */
    composeEmail(to: string, subject: string, message: string): boolean

    /**
     * Show an MMS composition dialog with any specified fields pre-filled.
     *
     * The JavaScript does **not** wait for the MMS to be sent before continuing.
     * @param to MMS To Field
     * @param subject MMS Subject Field
     * @param message MMS Body
     * @param attachmentPath Path to attachment
     */
    composeMMS(to: string, subject: string, message: string, attachmentPath: string): boolean

    /**
     * Show an SMS composition dialog with any specified fields pre-filled.
     *
     * The JavaScript does **not** wait for the SMS to be sent before continuing.
     * @param to SMS To Field
     * @param message SMS Body
     */
    composeSMS(to: string, message: string): boolean

    /**
     * Convert from one type of value to another.
     *
     * See also: action [Variable Convert](https://tasker.joaoapps.com/userguide/en/help/ah_convert_variable.html).
     * @param val Value to convert
     * @param conversionType must be one of the string constants: **byteToKbyte**,
     * **byteToMbyte**, **byteToGbyte**, **datetimeToSec**, **secToDatetime**,
     * **secToDatetimeM**, **secToDatetimeL**, **htmlToText**, **celsToFahr**,
     * **fahrToCels**, **inchToCent**, **metreToFeet**, **feetToMetre**, **kgToPound**,
     * **poundToKg**, **kmToMile**, **mileToKm**, **urlDecode**, **urlEncode**,
     * **binToDec**, **decToBin**, **hexToDec**, **decToHex**, **base64encode**,
     * **base64decode**, **toMd5**, **toSha1**, **toLowerCase**, **toUpperCase**,
     * **toUpperCaseFirst**.
     */
    convert(val: string, conversionType: tkConversionType): string

    /**
     * Create a directory
     * @param dirPath Create the named *dirPath*.
     * @param createParent If *createParent* is specified and any parent
     * directory does not exist, it will also be created.
     * @param useRoot If *useRoot* is specified, the operation will be performed
     * as the root user (where available).
     */
    createDir(dirPath: string, createParent: boolean, useRoot: boolean): boolean

    /**
     * Create the named [scene](https://tasker.joaoapps.com/userguide/en/scenes.html)
     * without displaying it.
     * @param sceneName Scene to create
     */
    createScene(sceneName: string): boolean

    /**
     * Crop an image in Tasker's image buffer previously loaded via loadImage.
     * @param fromLeftPercent Percentage from left to crop
     * @param fromRightPercent Percentage from right to crop
     * @param fromTopPercent Percentage from top to crop
     * @param fromBottomPercent Percentage from bottom to crop
     */
    cropImage(fromLeftPercent: number, fromRightPercent: number, fromTopPercent: number, fromBottomPercent: number): boolean

    /**
     * As decryptFile(), but decrypts each file in the specified directory in turn.
     *
     * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html)
     * in the Userguide,
     * [Decrypt File](https://tasker.joaoapps.com/userguide/en/help/ah_decrypt_file.html)
     * action.
     * @param path Directory to decrypt
     * @param key Encryption key
     * @param removeKey If *removeKey* is not set, the entered passphrase will
     * be reapplied automatically to the next encryption/decryption operation with
     * the specified *keyName*.
     */
    decryptDir(path: string, key: string, removeKey: boolean): boolean

    /**
     * Decrypt the specified file using the encryption parameters specified in
     * `Menu / Prefs / Action`.
     *
     * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html)
     * in the Userguide,
     * [Decrypt File](https://tasker.joaoapps.com/userguide/en/help/ah_decrypt_file.html)
     * action.
     * @param path Path of file
     * @param key Encryption key
     * @param removeKey If *removeKey* is not set, the entered passphrase will
     * be reapplied automatically to the next encryption/decryption operation
     * with the specified *keyName*.
     */
    decryptFile(path: string, key: string, removeKey: boolean): boolean

    /**
     * Delete a directory
     * @param dirPath Path of directory to delete
     * @param recurse Delete recursively (if *dirPath* is not empty)
     * @param useRoot If *useRoot* is specified, the operation will be performed
     * as the root user (where available).
     */
    deleteDir(dirPath: string, recurse: boolean, useRoot: boolean): boolean

    /**
     * Delete a file
     *
     * See also: action [Delete File](https://tasker.joaoapps.com/userguide/en/help/ah_delete_file.html)
     * @param filePath Path of file to delete
     * @param shredTimes Range 0-10
     * @param useRoot If *useRoot* is specified, the operation will be performed
     * as the root user (where available).
     */
    deleteFile(filePath: string, shredTimes: number, useRoot: boolean): boolean

    /**
     * Hide the named [scene](https://tasker.joaoapps.com/userguide/en/scenes.html)
     * if it's visible, then destroy it.
     * @param sceneName Scene name
     */
    destroyScene(sceneName: string): boolean

    /**
     * Whether the display brightness should automatically adjust to the ambient
     * light or not.
     * @param onFlag On or off
     */
    displayAutoBright(onFlag: boolean): boolean

    /**
     * Whether the display orientation should change based on the physical
     * orientation of the device.
     * @param onFlag On or off
     */
    displayAutoRotate(onFlag: boolean): boolean

    /**
     * How long the period of no-activity should be before the display is turned off.
     * @param hours Hours of inactivity
     * @param minutes Minutes of inactivity
     * @param seconds Seconds of inactivity
     */
    displayTimeout(hours: number, minutes: number, seconds: number): boolean

    /**
     * Simulate a movement or press of the hardware dpad (or trackball).
     *
     * This function requires a rooted device.
     * @param direction must be one of **up**, **down**, **left**, **right** or **press**.
     * @param noRepeats
     */
    dpad(direction: tkDirection, noRepeats: number): boolean

    /**
     * Enable or disable the named Tasker profile.
     * @param name Profile name
     * @param enable Enable or disable
     */
    enableProfile(name: string, enable: boolean): boolean

    /**
     * As encryptFile(), but encrypts each file in the specified directory in turn.
     *
     * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html)
     * in the Userguide, [Encrypt File](https://tasker.joaoapps.com/userguide/en/help/ah_encrypt_file.html)
     * action.
     * @param path Path to encrypt
     * @param keyName Encryption key
     * @param rememberKey If *rememberKey* is set, the entered passphrase will
     * be reapplied automatically to the next encryption/decryption operation
     * with the specified *keyName*.
     * @param shredOriginal If *shredOriginal* is specified, the original
     * file will be overwritten several times with random bits if encryption is successful.
     */
    encryptDir(path: string, keyName: string, rememberKey: string, shredOriginal: boolean): boolean

    /**
     * Set the background [colour](https://tasker.joaoapps.com/userguide/en/javascript.html#colour)
     * of the specified [scene](https://tasker.joaoapps.com/userguide/en/scenes.html)
     * element.
     *
     * See also: action [Element Back Colour](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_background_colour.html).
     * @param scene Scene name
     * @param element Element name
     * @param startColour Background colour
     * @param endColour End Colour is only relevant if the element's background
     * has a Shader specified.
     */
    elemBackColour(scene: string, element: string, startColour: string, endColour: string): boolean

    /**
     * Set the border [colour](https://tasker.joaoapps.com/userguide/en/javascript.html#colour)
     * and width of the specified [scene](https://tasker.joaoapps.com/userguide/en/scenes.html) element.
     * @param scene Scene name
     * @param element Element name
     * @param width Border width
     * @param colour Border colour
     */
    elemBorder(scene: string, element: string, width: number, colour: string): boolean

    /**
     * Move an element within it's scene.
     *
     * See also: action [Element Position](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_position.html).
     * @param scene Scene name
     * @param element Element name
     * @param orientation Must be one of **port** or **land**
     * @param x X position
     * @param y Y position
     * @param animMS indicates the duration of the corresponding animation in MS.
     * A zero-value indicates no animation.
     */
    elemPosition(scene: string, element: string, orientation: tkOrientation, x: number, y: number, animMS: number): boolean

    /**
     * Set the text of the specified [scene](https://tasker.joaoapps.com/userguide/en/scenes.html) element.
     *
     * See also: action [Element Text](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_text.html).
     * @param scene Scene name
     * @param element Element name
     * @param position must be one of **repl** (replace existing text
     * completely), **start** (insert before existing text) or **end**
     * (append after existing text).
     * @param text Text to set
     */
    elemText(scene: string, element: string, position: tkTextReplace, text: string): boolean

    /**
     * Set the text [colour](https://tasker.joaoapps.com/userguide/en/javascript.html#colour)
     * of the specified [scene](https://tasker.joaoapps.com/userguide/en/scenes.html) element.
     *
     * See also: action [Element Text Colour](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_text_colour.html).
     * @param scene Scene name
     * @param element Element name
     * @param colour Text colour
     */
    elemTextColour(scene: string, element: string, colour: string): boolean

    /**
     * Set the text size of the specified [scene](https://tasker.joaoapps.com/userguide/en/scenes.html) element.
     *
     * See also: action [Element Text Size](https://tasker.joaoapps.com/userguide/en/help/scene_element_text_size.html).
     * @param scene Scene name
     * @param element Element name
     * @param size Text size
     */
    elemTextSize(scene: string, element: string, size: number): boolean

    /**
     * Make the specified [scene](https://tasker.joaoapps.com/userguide/en/scenes.html) element
     * visible or invisible.
     *
     * See also: action [Element Visibility](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_visibility.html).
     * @param scene Scene name
     * @param element Element name
     * @param visible Show or hide
     * @param animationTimeMS Animation length (ms)
     */
    elemVisibility(scene: string, element: string, visible: boolean, animationTimeMS: number): boolean

    /**
     * Terminate the current call (if there is one).
     */
    endCall(): boolean

    /**
     * Encrypt the specified file using the encryption parameters specified in `Menu / Prefs / Action`.
     *
     * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html)
     * in the Userguide, [Encrypt File](https://tasker.joaoapps.com/userguide/en/help/ah_encrypt_file.html)
     * action.
     * @param path File to encrypt
     * @param keyName Encryption key
     * @param rememberKey If *rememberKey* is set, the entered passphrase will be
     * reapplied automatically to the next encryption/decryption operation with
     * the specified *keyName*.
     * @param shredOriginal If *shredOriginal* is specified, the original file
     * will be overwritten several times with random bits if encryption is
     * successful.
     */
    encryptFile(path: string, keyName: string, rememberKey: string, shredOriginal: boolean): boolean

    /**
     * Show a dialog to enter the passphrase for the specified *keyName*.
     *
     * The JavaScript waits until the dialog has been dismissed or *timeoutSecs* reached.
     * @param title Title
     * @param keyName Name of key
     * @param showOverKeyguard Show scene over keyguard
     * @param confirm if set, the passphrase must be entered twice to ensure it is correct.
     * @param background [optional] a file path or file URI to a background image.
     * @param layout the name of a user-created [scene](https://tasker.joaoapps.com/userguide/en/scenes.html)
     * to use in place of the built-in scene.
     * @param timeoutSecs Time (seconds) to wait before ending
     */
    enterKey(
        title: string,
        keyName: string,
        showOverKeyguard: boolean,
        confirm: boolean,
        background: string,
        layout: string,
        timeoutSecs: number
    ): boolean


    /**
     * Filter an image previously loaded into Tasker's image buffer via loadImage()
     * @param mode Possible values of *mode* are:
     *  * **bw**: convert to black & white, using *value* as a threshold
     *  * **eblue**: enhance blue values by *value*
     *  * **egreen**: enhance green values by *value*
     *  * **ered**: enhance red values by *value*
     *  * **grey**: convert to greyscale, *value* is unused
     *  * **alpha**: set pixel alpha (opposite of transparency) to *value*
     * @param value should be 1-254
     */
    filterImage(mode: tkColourFilter, value: number): boolean

    /**
     * Flip an image previously loaded into Tasker's image buffer via loadImage()
     * @param horizontal If *horizontal* is false, the image is flipped vertically.
     */
    flipImage(horizontal: boolean): boolean

    /**
     * Stop execution of the JavaScript.
     */
    exit(): void

    /**
     * Flash a short-duration Android 'Toast' message.
     * @param message Message to display in toast
     */
    flash(message: string): void

    /**
     * Flash a long-duration Android 'Toast' message.
     * @param message Message to display in toast
     */
    flashLong(message: string): void

    /**
     * Try to get a fix of the current device location.
     *
     * Fix coordinates are stored in the global Tasker variables %**LOC** (GPS)
     * and/or %**LOCN** (Net). The value can be retrieved with the global
     * function. Several other parameters of the fix are also available,
     * see [Variables](https://tasker.joaoapps.com/userguide/en/variables.html).
     *
     * Example:
     *
     * ```js
     * var lastFix = global( 'LOC' );
     * if (
     *     getLocation( 'gps' ) &&
     *     ( global( 'LOC' ) != lastFix )
     * ) {
     *     flash( "New fix: " + global( 'LOC' ) );
     * }
     * ```
     *
     * See also: action [Get Location](https://tasker.joaoapps.com/userguide/en/help/ah_get_fix.html),
     * function stopLocation.
     * @param source must be one of **gps**, **net** or **any**.
     * @param keepTracking If *keepTracking* is set, the specified source(s)
     * will be left tracking with the purpose of providing a much quicker fix
     * next time the function is called.
     * @param timeoutSecs Timeout (seconds) for action
     */
    getLocation(source: tkLocationMode, keepTracking: boolean, timeoutSecs: number): boolean


    /**
     * Get voice input and convert to text.
     * @param prompt Label for the dialog that is shown during voice acquisition.
     * @param languageModel gives the speech recognition engine a clue as to the
     * context of the speech. It must be one of **web** for 'web search' or
     * **free** for 'free-form'.
     * @param timeout Timeout for action
     */
    getVoice(prompt: string, languageModel: tkLanguageModel, timeout: number): string

    /**
     * Retrieve the value of a Tasker global variable. Prefixing the name with % is optional.
     * @param varName Global variable name
     */
    global(varName: string): string

    /**
     * List all files in the specified *dirPath*.
     *
     * Returns a newline-separated list of subfiles.
     * If no files or found or an error occurs, the returned value will be undefined.
     * @param dirPath Directory to list files
     * @param hiddenToo If **hiddenToo** is specified, files starting with
     * period are included, otherwise they are not.
     */
    listFiles(dirPath: string, hiddenToo: boolean): string | undefined

    /**
     * Start up the named app.
     * @param name can be a package name or app label, it's tested first against
     * known package names. Note: app label could be localized to another
     * language if the script is used in an exported app.
     * @param data is in URI format and app-specific.
     * @param excludeFromRecents When *excludeFromRecents* is true, the app
     * will not appear in the home screen 'recent applications' list.
     */
    loadApp(name: string, data: string, excludeFromRecents: boolean): boolean

    /**
     * Load an image into Tasker's internal image buffer.
     *
     * See also [Load Image](https://tasker.joaoapps.com/userguide/en/help/ah_load_image.html) action.
     * @param uri Must start with `file://` followed by a local path
     */
    loadImage(uri: string): boolean

    /**
     * Show a lock screen, preventing user interaction with the covered part of
     * the screen. The JavaScript waits until the code has been entered or the
     * lock cancelled (see below).
     * @param title Lock screen title
     * @param code the numeric code which must be entered for unlock
     * @param allowCancel show a button to remove the lockscreen, which causes a
     * return to the Android home screen
     * @param rememberCode the code will be remembered and automatically entered
     * when the lock screen is show in future, until the display next turns off
     * @param fullScreen Make lockscreen fullscreen
     * @param background [optional] a file path or file URI to a background image.
     * @param layout the name of a user-created [scene](https://tasker.joaoapps.com/userguide/en/scenes.html)
     * to use in place of the built-in lock scene
     */
    lock(
        title: string,
        code: string,
        allowCancel: boolean,
        rememberCode: boolean,
        fullScreen: boolean,
        background: string,
        layout: string
    ): boolean

    /**
     * Retrieve the value of a Tasker scene-local variable. The name should not
     * be prefixed with %.
     *
     * This function is only for use by JavaScript embedded in HTML and accessed
     * via a WebView scene element.
     * @param varName
     */
    local(varName: string): string

    /**
     * Control media via simulation of hardware buttons.
     * @param action Possible *actions* are **next**, **pause**, **prev**,
     * **toggle**, **stop** or **play**.
     */
    mediaControl(action: tkMediaAction): boolean

    /**
     * Mute or unmute the device's microphone (if present),
     * @param shouldMute Should the microphone be muted
     */
    micMute(shouldMute: boolean): boolean

    /**
     * Enable or disable the system Mobile Data setting.
     *
     * See also: action [Mobile Data](https://tasker.joaoapps.com/userguide/en/help/ah_mobile_data_direct.html)
     * @param set Enable or disable
     */
    mobileData(set: boolean): boolean

    /**
     * Skip back by *seconds* during playback of a music file previously started
     * by musicPlay.
     *
     * See also: musicSkip, musicStop
     * @param seconds Seconds to skip back
     */
    musicBack(seconds: number): boolean

    /**
     * Play a music file via Tasker's internal music player.
     *
     * This function does **not** not wait for completion.
     *
     * The last 3 arguments may be ommitted, in which case they default to **0**,
     * **false** and **media** respectively.
     *
     * See also: musicStop, musicBack, musicSkip
     * @param path Path to music file
     * @param offsetSecs Seconds from beginning of file
     * @param loop Should audio loop
     * @param stream which [audio stream](https://tasker.joaoapps.com/userguide/en/javascript.html#streams)
     * the music should be played
     */
    musicPlay(path: string, offsetSecs?: number, loop?: boolean, stream?: tkAudioStream): boolean

    /**
     * Skip forwards by seconds during playback of a music file previously
     * started by musicPlay.
     *
     * See also: musicBack, musicStop
     * @param seconds Seconds to skip forward
     */
    musicSkip(seconds: number): boolean

    /**
     * Stop playback of a music file previously started by musicPlay.
     *
     * See also: musicBack, musicSkip
     */
    musicStop(): boolean

    /**
     * Turn on or off Android Night Mode.
     * @param onFlag On or off
     */
    nightMode(onFlag: boolean): boolean

    /**
     * Show a popup dialog. The JavaScript waits until the popup has been
     * dismissed or the timeout reached.
     * @param title Popup title
     * @param text Popup text
     * @param showOverKeyguard Show scene over keyguard
     * @param background [optional] a file path or file URI to a background image.
     * @param layout the name of a user-created [scene](https://tasker.joaoapps.com/userguide/en/scenes.html)
     * to use in place of the built-in popup scene.
     * @param timeoutSecs Time (seconds) to wait before ending
     */
    popup(
        title: string,
        text: string,
        showOverKeyguard: boolean,
        background: string,
        layout: string,
        timeoutSecs: number
    ): boolean

    /**
     * Run the Tasker task *taskName*.
     *
     * Note that the JavaScript does not wait for the task to complete.
     * @param taskName Task name
     * @param priority Priority
     * @param parameterOne Parameter for task
     * @param parameterTwo Parameter for task
     */
    performTask(taskName: string, priority: number, parameterOne: string, parameterTwo: string): boolean

    /**
     * Whether the named Tasker profile is currently active.
     *
     * Returns false if the profile name is unknown.
     * @param profileName Profile name
     */
    profileActive(profileName: string): boolean

    /**
     * Enable or disable the Android Notification Pulse system setting.
     * @param onFlag Enable or disable
     */
    pulse(onFlag: boolean): boolean

    /**
     * Read the contents of a text file.
     * @param path File to read
     */
    readFile(path: string): string

    /**
     * Reboot the device.
     *
     * Requires a rooted device.
     *
     * See also: function shutdown
     * @param type one of **normal**, **recovery** or **bootloader**.
     * It can be ommitted and defaults to **normal**.
     */
    reboot(type?: tkRebootMode): boolean

    /**
     * Scale the current image in Tasker's image buffer to the specified dimensions.
     * @param width Width of image
     * @param height Height of image
     */
    resizeImage(width: number, height: number): boolean

    /**
     * Rotate the current image in Tasker's image buffer.
     * @param dir must be one of **left** or **right**.
     * @param degrees must be one of **45**, **90**, **135** or **180**.
     */
    rotateImage(dir: tkRotationDirection, degrees: tkRotationDegrees): boolean

    /**
     * Save the current image in Tasker's image buffer to the specified file path.
     *
     * [Save Image](https://tasker.joaoapps.com/userguide/en/help/ah_save_image.html) action.
     * @param path
     * @param qualityPercent
     * @param deleteFromMemoryAfter
     */
    saveImage(path: string, qualityPercent: number, deleteFromMemoryAfter: boolean): boolean

    /**
     * Cause the device to say *text* out loud.
     *
     * The script waits for the speech to be finished.
     * @param text Text to say
     * @param enginge the speech engine e.g. **com.svox.classic** Defaults to the
     * system default (specify undefined for that)
     * @param voice the voice to use (must be supported by *engine*).
     * Defaults to the current system language (specify undefined for that)
     * @param stream to which [audio stream](https://tasker.joaoapps.com/userguide/en/javascript.html#streams)
     * the speech should be made
     * @param pitch 1-10
     * @param speed 1-10
     */
    say(
        text: string,
        enginge: string | undefined,
        voice: string | undefined,
        stream: tkAudioStream,
        pitch: number,
        speed: number
    ): boolean

    /**
     * Send an intent. Intents are Android's high-level application interaction system.
     *
     * Any parameter may be specified as undefined.
     *
     * See also: action [Send Intent](https://tasker.joaoapps.com/userguide/en/help/ah_send_intent.html).
     * @param action Intent action
     * @param targetComp the type of application component to target, one of
     * **receiver**, **activity** or **service**. Defaults to **receiver**.
     * @param package the application package to limt the intent to
     * @param className the application class to limit the intent to
     * @param category one of **none**, **alt**, **browsable**, **cardock**,
     * **deskdock**, **home**, **info**, **launcher**, **preference**,
     * **selectedalt**, **tab** or **test**, defaults to **none**
     * @param data Intent data
     * @param mimeType Intent mime type
     * @param extras extra data to pass, in the format key:value. May be undefined. Maximum length 2.
     */
    sendIntent(
        action: tkIntentAction,
        targetComp: string,
        package: string,
        className: string,
        category: tkIntentCategory,
        data: string,
        mimeType: string,
        extras: string[]
    ): boolean

    /**
     * Send an SMS.
     *
     * See also: action [Send SMS](https://tasker.joaoapps.com/userguide/en/help/ah_send_sms.html)
     * @param number Number to send message to
     * @param text SMS body
     * @param storeInMessagingApp Show text message in messaging app
     */
    sendSMS(number: string, text: string, storeInMessagingApp: boolean): boolean

    /**
     * Enable or disable Airplane Mode.
     *
     * Get the current value with:
     * ```js
     * var enabled = global( 'AIR' );
     * ```
     *
     * See also: function setAirplaneRadios
     * @param setOn On or off
     */
    setAirplaneMode(setOn: boolean): boolean

    /**
     * Specify the radios which will be **disabled** when the device enters Airplane Mode.
     *
     * Get the current value with:
     * ```js
     * var radios = global( 'AIRR' );
     * ```
     *
     * See also: function setAirplaneMode
     * @param disableRadios a comma-separated list with radio names from the
     * following set: **cell**, **nfc**, **wifi**, **wimax**, **bt**.
     */
    setAirplaneRadios(disableRadios: string): boolean

    /**
     * Create an alarm in the default alarm clock app.
     *
     * Requires Android version 2.3+.
     * @param hour Alarm time (hour)
     * @param min Alarm time (minute)
     * @param message Alarm message (optional)
     * @param confirmFlag specifies whether the app should confirm that the alarm has been set.
     */
    setAlarm(hour: number, min: number, message: string, confirmFlag: boolean): boolean

    /**
     * Enable or disable the global auto-sync setting.
     * @param setOn On or off
     */
    setAutoSync(setOn: boolean): boolean

    /**
     * Force the system to scan the external storage card for new/deleted media.
     *
     * See also: action [Scan Card](https://tasker.joaoapps.com/userguide/en/help/ah_scan_card.html)
     * @param path If *path* is defined, only that will be scanned.
     */
    scanCard(path?: string): boolean

    /**
     * Enable or disable the Bluetooth radio (if present).
     * Test BT state with:
     * ```js
     * if ( global( 'BLUE' ) == "on" ) { doSomething(); }
     * ```
     * @param setOn On or off
     */
    setBT(setOn: boolean): boolean

    /**
     * Set the bluetooth adapter ID (the name as seen by other devices).
     * @param toSet ID to set
     */
    setBTID(toSet: string): boolean

    /**
     * Set the value of a Tasker global user variable. Prefixing varName with % is optional.
     *
     * Arrays are **not** supported due to limitations of the Android JS interface.
     * @param varName Global variable name
     * @param newValue New value of variable
     */
    setGlobal(varName: string, newValue: string): void

    /**
     * Set the passphrase for the specified keyName.
     *
     * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html)
     * in the Userguide.
     * @param keyName Key name to set
     * @param passphrase Passphrase for key
     */
    setKey(keyName: string, passphrase: string): boolean

    /**
     * Set the value of a Tasker **scene-local** user variable. Variable names
     * should not be prefixed with %.
     *
     * This function is only for use by JavaScript embedded in HTML and accessed
     * via a WebView scene element.
     * @param varName Local variable name
     * @param newValue New value of variable
     */
    setLocal(varName: string, newValue: string): void

    /**
     * Set the global system clipboard.
     *
     * Test the value with:
     * ```js
     * var clip = global( 'CLIP' );
     * ```
     * @param text Clipboard text
     * @param appendFlag Should text be appended to current clipboard
     */
    setClip(text: string, appendFlag: boolean): boolean

    /**
     * Show an Android System Settings screen.
     * @param screenName must be one of **all**, **accessibility**, **addacount**,
     * **airplanemode**, **apn**, **app**, **batteryinfo**, **appmanage**,
     * **bluetooth**, **date**, **deviceinfo**, **dictionary**, **display**,
     * **inputmethod**, **internalstorage**, **locale**, **location**,
     * **memorycard**, **networkoperator**, **powerusage**, **privacy**,
     * **quicklaunch**, **security**, **mobiledata**, **search**, **sound**,
     * **sync**, **wifi**, **wifiip** or **wireless**.
     */
    settings(screenName: tkSettingsScreen): boolean

    /**
     * Set the system home screen wallpaper.
     * @param path Path to image file
     */
    setWallpaper(path: string): boolean

    /**
     *  Enable or disable the Wifi radio (if present).
     *
     * Test wifi state with:
     * ```js
     * if ( global( 'WIFI' ) == "on" ) { doSomething(); }
     * ```
     * @param setOn On or off
     */
    setWifi(setOn: boolean): boolean

    /**
     * Run the shell command *command*.
     *
     * Returns undefined if the shell command failed. It's maximum size is
     * restricted to around 750K.
     * @param command Command to run
     * @param asRoot Will only have effect if device is rooted.
     * @param timeoutSecs Time (seconds) to wait for task
     */
    shell(command: string, asRoot: boolean, timeoutSecs: number): string

    /**
     * Show the named scene, creating it first if necessary.
     * @param name Scene name
     * @param displayAs one of **Overlay**, **OverBlocking**, **OverBlockFullDisplay**, **Dialog**, **DialogBlur**, **DialogDim**, **ActivityFullWindow**, **ActivityFullDisplay**, **ActivityFullDisplayNoTitle**
     * @param hoffset percentage horizontal offset for the scene -100% to 100% (not relevant for full screen/window display types)
     * @param voffset percentage vertical offset for the scene -100% to 100% (not relevant for full screen/window display types)
     * @param showExitIcon display a small icon in the bottom right which destroys the scene when pressed
     * @param waitForExit whether to wait for the scene to exit before continuing the script
     */
    showScene(
        name: string,
        displayAs: tkDisplayAs,
        hoffset: number,
        voffset: number,
        showExitIcon: boolean,
        waitForExit: boolean
    ): boolean

    /**
     * Shutdown the device.
     *
     * Requires a rooted device.
     *
     * See also: reboot
     */
    shutdown(): boolean

    /**
     *
     * @param mode
     */
    silentMode(mode: tkSilentMode): boolean

    /**
     * Run a previously created [SL4A](https://code.google.com/p/android-scripting/) script.
     * @param scriptName Script name
     * @param inTerminal Open script in terminal
     */
    sl4a(scriptName: string, inTerminal: boolean): boolean

    /**
     * Setting the system *Sound Effects* setting (sound from clicking on buttons etc.
     * @param setTo On or off
     */
    soundEffects(setTo: boolean): boolean

    /**
     * Enable or disable the speakerphone function.
     * @param setFlag Enable or disable
     */
    speakerPhone(setFlag: boolean): boolean

    /**
     * Expand or contract the system status bar.
     * @param expanded **true** to expand
     */
    statusBar(expanded: boolean): boolean

    /**
     * Specify whether the device should remain on when power is connected.
     * @param mode Possible modes are **never**, **ac**, **usb**, **any**.
     */
    stayOn(mode: tkStayOnMode): boolean

    /**
     * Stop tracking a location provider. This is only relevant when a
     * getLocation function has been previously called with the keepTracking
     * parameter set.
     */
    stopLocation(): boolean

    /**
     * Turn off the display and activate the keyguard.
     *
     * Requires Tasker's Device Administrator to be enabled in Android settings.
     */
    systemLock(): boolean

    /**
     * Whether the named Tasker task is currently running. Returns false if the
     * task name is unknown.
     * @param taskName Task name to check
     */
    taskRunning(taskName: string): boolean

    /**
     * Auto-accept an incoming call (if there is one).
     */
    takeCall(): boolean

    /**
     * Take a photo with the builtin camera.
     *
     * See also: action [Take Photo](https://tasker.joaoapps.com/userguide/en/help/ah_take_photo.html)
     * @param camera 0 = rear camera, 1 = front camera
     * @param fileName Name to save photo as
     * @param resolution format WxH e.g. 640x840
     * @param insertGallery whether to insert the resulting picture in the
     * Android Gallery application
     */
    takePhoto(camera: tkCamera, fileName: string, resolution: string, insertGallery: boolean): boolean

    /**
     * Simulate keyboard typing.
     *
     * Requires a rooted device.
     * @param text Text to type
     * @param repeatCount How many times to repeat typing
     */
    type(text: string, repeatCount: number): boolean

    /**
     * Unpack a Zip archive into the parent directory of the archive.
     * @param zipPath Path to zip archive
     * @param deleteZipAfter If set, causes the zip archive to be deleted after
     * successful unpacking.
     */
    unzip(zipPath: string, deleteZipAfter: boolean): boolean

    /**
     * Enable or disable USB tethering.
     *
     * See also: action [USB Tether](https://tasker.joaoapps.com/userguide/en/help/ah_tether_usb.html)
     * @param set Enable or disable
     */
    usbTether(set: boolean): void

    /**
     * Cause the device to vibrate for the specified time.
     * @param durationMilliseconds Length of vibration
     */
    vibrate(durationMilliseconds: number): void

    /**
     * Cause the device to vibrate following the specified *pattern*
     * @param pattern consists of a sequence of off then on millisecond
     * durations e.g.
     * ```
     * 500,1000,750,1000
     * ```
     * wait for 500ms, vibrates 1000ms, wait for 750ms, then vibrate for 1000ms.
     * */
    vibratePattern(pattern: string): void

    /**
     * Pause the script for the specified time.
     *
     * Warning: may cause some preceeding functions not to complete in some
     * situations. If in doubt, use JavaScript setTimeout() instead.
     * @param durationMilliseconds Length to wait
     */
    wait(durationMilliseconds: number): void

    /**
     * Enable or disable Wifi tethering.
     *
     * See also: action [Wifi Tether](https://tasker.joaoapps.com/userguide/en/help/ah_tether_wifi.html)
     * @param set Enable or disable
     */
    wifiTether(set: boolean): boolean

    /**
     * Write *text* to *file* path.
     * @param path Path to file
     * @param text File contents
     * @param append If *append* is specified, the text will be attached to the
     * end of the existing file contents (if there are any).
     */
    writeFile(path: string, text: string, append: boolean): boolean

    /**
     * Zip a file or directory.
     * @param path Path to file to zip
     * @param level the desired compression level from 1-9, with 9 resulting in
     * the smallest file and the longest compression time.
     * @param deleteOriginalAfter If *deleteOriginalAfter* is **true**, causes
     * *path* to be deleted if the zip operation is successful.
     */
    zip(path: string, level: number, deleteOriginalAfter: boolean): boolean
}

// Associate tk var with TK interface defined above
export declare const tk: TK;
