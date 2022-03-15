import { EditorState, basicSetup  } from '@codemirror/basic-setup'
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands'
import { FlexruleLang } from './scripts'

const editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, keymap.of([indentWithTab]), FlexruleLang],
    doc: `given quoc
    when r1
      quoc is now 20
    end
    `
  }),
  parent: document.body,
  
})
