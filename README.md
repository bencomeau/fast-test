# Fast Test README

Fast Test allows you to quickly run tests on your currently active file.

![Test Current File Demo](/test-current-file.gif)

## Features

- Run a single test on the currently active file.
- Reuses any existing 'Fast Test' terminals to remain performant.
- Watch the currently active file for changes and rerun tests related to changed files.
- Does not run Coverage since the idea is to target development speed while writing tests.

## Installation

- Open Extensions View (`⇧⌘X` on Mac, `Ctrl+Shift+X` on Windows/Linux).
- Search `bencomeau.fast-test`.
- Select to install extension.

## Usage

While active on a test file:

- Open the Command Palette (`⇧⌘P` on Mac, `Ctrl+Shift+P` on Windows/Linux).
- Type `Fast Test` and select the desired option.
- See test results in the terminal.

## Requirements

- node: `>=5.2` (support for npx)

## Extension Settings

#### fastTest.testRunner (default: `jest`)
Set the test runner used to run the tests. The default command for each runner is used (ie: `npx jest filename.js`).

## Release Notes

### 1.3.0

You can now set your preferred test runner in the configuration settings. In **Settings**, search `Fast Test` then select your desired test runner from the list.

### 1.1.0

Minor release to improve documentation including example videos.

### 1.0.0

Initial release of Fast Test.

-----------------------------------------------------------------------------------------------------------

## Roadmap

### Extension Configuration Support

Add configuration settings to allow:

- default terminal (integrated or external)

### External Terminal Support

Allow the extension to execute the test commands to your preferred terminal.

### Tests

Ironically, I need to add tests.

-----------------------------------------------------------------------------------------------------------

## Example Usage

### Test Current File
![Test Current File Demo](/test-current-file.gif)

### Watch Current File
![Watch Current File Demo](/watch-current-file.gif)
