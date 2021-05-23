# mac-screen-capture-permissions

> Check and request permission to capture the screen on macOS (introduced with 10.15 Catalina)

## Install

```
$ npm install github:csett86/mac-screen-capture-permissions
```

## Usage

See [example.js](https://github.com/karaggeorge/mac-screen-capture-permissions/blob/master/example.js) for usage.

```js
const {
  hasScreenCapturePermission,
  hasPromptedForPermission
} = require('mac-screen-capture-permissions');

hasPromptedForPermission();

// false

hasScreenCapturePermission();

// false

hasPromptedForPermission();

// true


// After accepting the permissions

hasScreenCapturePermission();

// true
```

## API

#### `.hasScreenCapturePermission(): boolean`

**Note:** Only works for Electron apps

Whether or not the current app has the required permissions to record the screen. It will not prompt the user to grant the permission. If the user denied the original request, you need to prompt them to enable the permissions in the System Preferences.

This can be reset by calling `resetPermissions`. The dialog will be shown again after that.

Returns `true` on macOS versions older than 10.15 since this permission wasn't present

#### `.hasPromptedForPermission(): boolean`

**Note:** Only works for Electron apps

Whether or not the permission dialog has been shown to the user. Will be `false` if you haven't called `hasScreenCapturePermission` for this app yet, and `true` otherwise.

This can be reset by calling `resetPermissions`,

Returns `false` on macOS versions older than 10.15 since this permission wasn't present

#### `.resetPermissions({bundleId?: string}): boolean`

Reset the `ScreenCapture` permissions. It will reset the permissions for **all** apps, so use with care. Provide a `bundleId` (i.e. com.apple.Terminal) to reset the permissions only for that app.

Calls `tccutil reset ScreenCapture [bundleId]`.

This will revoke access if it was previously granted.

Returns `true` if the command executed successfully and `false` otherwise.

Returns `false` on macOS versions older than 10.15 since this permission wasn't present

#### `.openSystemPreferences(): Promise<void>`

**Note:** Only works for Electron apps

Open the System Preferences in the Screen Recording permissions section under the Security pane.

Returns a Promise that resolves when the window is opened

## License

MIT
