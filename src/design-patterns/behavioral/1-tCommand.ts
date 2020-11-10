
abstract class Command {
    protected  app: Application
    protected  editor: Editor
    protected  backup: string

    constructor (app: Application, editor: Editor) {
        this.app = app
        this.editor = editor
    }

    // Make a backup of the editor's state.
     saveBackup() {
        this.backup = this.editor.text
     }

    // Restore the editor's state.
     undo() {
        this.editor.text = this.backup
     }

    // The execution  { declared abstract to force all
    // concrete commands to provide their own implementations.
    // The  must return true or false depending on whether
    // the command changes the editor's state.
    abstract  execute()
}

// The concrete commands go here.
class CopyCommand extends Command {
    // The copy command isn't saved to the history since it
    // doesn't change the editor's state.
     execute() {
        this.app.clipboard = this.editor.getSelection()
        return false
     }

}
class CutCommand extends Command {
    // The cut command does change the editor's state, therefore
    // it must be saved to the history. And it'll be saved as
    // long as the  returns true.
     execute() {
        this.saveBackup()
        this.app.clipboard = this.editor.getSelection()
        this.editor.deleteSelection()
        return true
     }
}

class PasteCommand extends Command {
     execute() {
        this.saveBackup()
        this.editor.replaceSelection(this.app.clipboard)
        return true
     }
}

// The undo operation { also a command.
class UndoCommand extends Command {
     execute() {
        this.app.undo()
        return false
     }
}


// The global command history is just a stack.
class CommandHistory {
    private  history: Array<Command>

    // Last in...
     push(c: Command) {
         this.history.push(c)
        // Push the command to the end of the history array.
     }

    // ...first out
     pop():Command {
        return this.history.pop()
        // Get the most recent command from the history.
     }
}


// The editor class has actual text editing operations. It plays
// the role of a receiver: all commands end up delegating
// execution to the editor's methods.
class Editor {
     shortcuts: EventManager
     text: string

     getSelection():string {
         return 'abc'
        // Return selected text.
     }

     deleteSelection() {
        // Delete selected text.
     }

     replaceSelection(text) {
        // Insert the clipboard's contents at the current
        // position.
     }
}


// The application class sets up object relations. It acts as a
// sender: when something needs to be done, it creates a command
// object and executes it.
class Application {
     clipboard: string
     editors: Array<Editor>
     activeEditor: Editor
     history: CommandHistory

    // The code which assigns commands to UI objects may look
    // like this.
     createUI() {
        // ...
        const copy = function() { this.executeCommand(
            new CopyCommand(this, this.activeEditor)) }
        copyButton.setCommand(copy)
        shortcuts.onKeyPress("Ctrl+C", copy)

        const cut = function() { this.executeCommand(
            new CutCommand(this, this.activeEditor)) }
        cutButton.setCommand(cut)
        shortcuts.onKeyPress("Ctrl+X", cut)

        const paste = function() { this.executeCommand(
            new PasteCommand(this, this.activeEditor)) }
        pasteButton.setCommand(paste)
        shortcuts.onKeyPress("Ctrl+V", paste)

        const undo = function() { this.executeCommand(
            new UndoCommand(this, this.activeEditor)) }
        undoButton.setCommand(undo)
        shortcuts.onKeyPress("Ctrl+Z", undo)
     }
    // Execute a command and check whether it has to be added to
    // the history.
     executeCommand(command) {
        if (command.execute)
            this.history.push(command)
     }

    // Take the most recent command from the history and run its
    // undo . Note that we don't know the class of that
    // command. But we don't have to, since the command knows
    // how to undo its own action.
     undo() {
        const command = this.history.pop()
        if (command != null)
            command.undo()
     }
}

class EventManager {
    private listeners: Map<EventType, Command>

    subscribe(eventType, listener) {
        this.listeners.set(eventType, listener)
    }
    unsubscribe(eventType, listener) {
        this.listeners.delete(eventType)
    }
    notify(eventType, data) {
        this.listeners.forEach(element => {
            element.execute()  
        })

    }
}