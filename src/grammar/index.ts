import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, } from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"
import {parser} from "./syntax.grammar"

export const EXAMPLELanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        ConDec(node, state) {
          return {
            from: node.from+1,
            to: node.to-1,
          }
        },
      }),
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        LineComment: t.lineComment,
        BinaryCompare: t.operatorKeyword,
        Given: t.operatorKeyword,
      }),
    ]
  }),
  languageData: {
    commentTokens: {line: "!"},
  }
})

const FlexruleLang = new LanguageSupport(EXAMPLELanguage)

export {
  FlexruleLang,
}

