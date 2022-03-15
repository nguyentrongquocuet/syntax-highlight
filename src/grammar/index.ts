import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, } from "@codemirror/language"
import {styleTags, tags as t, classHighlightStyle} from "@codemirror/highlight"
import {parser} from "./syntax.grammar"

export const EXAMPLELanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        ConDec(node, state) {
          return {
            from: node.from + 4,
            to: node.to,
          }
        },
        GivenExpression(node){
          return null
        }
      }),
      styleTags({
        Identifier: t.integer,
        LineComment: t.lineComment,
        BinaryCompare: t.keyword,
        'ConDec1/BinaryCompare': t.keyword,
        'ConDec2/BinaryCompare': t.keyword,
        'ConDec1/StartDec': t.keyword,
        'ConDec1/EndDec': t.keyword,
        'ConDec2/StartDec': t.keyword,
        'ConDec2/EndDec': t.keyword,
        'GivenExpression/Given': t.keyword,
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

