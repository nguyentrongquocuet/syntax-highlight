import { EditorState, basicSetup  } from '@codemirror/basic-setup'
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands'
import { FlexruleLang } from './scripts'

const editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, keymap.of([indentWithTab]), FlexruleLang],
    doc: `(defun check-login (name password) ; absolutely secure
  (if (equal name "admin")
    (equal password "12345")
    #t)) 
when r1
end
    `
  }),
  parent: document.body,
  
})
