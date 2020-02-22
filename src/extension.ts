// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const EXTENSION_NAME: string = 'Fast Test';

/**
 * Displays the given text in the error message of the window.
 */
const error = (text: string): Thenable<string | undefined> => vscode.window.showErrorMessage(text);

/**
 * Returns the currently active file, if any.
 */
const getCurrentFile = (): string | undefined => {
	const file: string | undefined = vscode.window.activeTextEditor?.document.uri.path;

	if (file) {
		const workspaceName: string = vscode.workspace.name || "/";

		return file.substring(file.indexOf(workspaceName));
	}

	return file;
};

/**
 * Get the command which executes the test runner. No need to create a map yet as the config
 * values match the CLI commands at the moment. Can expand this if needed in future.
 */
const testRunnerCommand: string = vscode.workspace.getConfiguration('fastTest').get('testRunner') || "jest";

/**
 * Finds existing Fast Test terminal, if any.
 */
const getTerminal = (): vscode.Terminal | undefined => vscode.window.terminals.find(({ name }) => name === EXTENSION_NAME);

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('extension.test', () => {
		const file = getCurrentFile();

		if (!file) {
			return error('You must have an open file in order to run the test!');
		}

		// Create the terminal, either reusing the existing or creating a new one
		const terminal = getTerminal() || vscode.window.createTerminal(EXTENSION_NAME);

		// Clear the current terminal's content and show but don't focus
		terminal.sendText('clear');
		terminal.show(true);

		// Send the command to the terminal
		terminal.sendText(`npx ${testRunnerCommand} ${file} --coverage=false`);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('extension.watch', () => {
		const file = getCurrentFile();

		if (!file) {
			return error('You must have an open file in order watch it!');
		}

		// Create the terminal, either reusing the existing or creating a new one
		const terminal = getTerminal() || vscode.window.createTerminal(EXTENSION_NAME);

		// Clear the current terminal's content and show but don't focus
		terminal.sendText('clear');
		terminal.show(true);

		// Send the command to the terminal
		terminal.sendText(`npx ${testRunnerCommand} ${file} --watch --coverage=false`);
	}));
}

// this method is called when your extension is deactivated
export function deactivate() { }
