import { StreamLanguage  } from '@codemirror/stream-parser';
import { LRLanguage } from '@codemirror/language'

enum TOKEN_TYPES {
  keyword = 'KEY_WORD',
  operator = 'OPERATOR',
  decorator = 'DECORATOR',
  text = 'TEXT'
}

const buildPriorityMap = (list: string[]) => {
return list.reduce<Record<string, number>>((rec, cur) => {
  return {
    ...rec,
    [cur]: 1,
  }
}, {})
}

const keywords = ['given', 'when', 'then', 'end', 'is']

const KW_MAP = buildPriorityMap(keywords)

const isKeyword = (key: string) => KW_MAP[key] !== undefined

const operators = ['ge', 'gt', 'le', 'lt']

const OP_MAP = buildPriorityMap(operators)

const isOperator = (key: string) => OP_MAP[key] !== undefined

const isDecorator = (key: string) => /^@\w+/.test(key)

const getTokenType = (token: string, lastToken: string = ''): TOKEN_TYPES => {
  if (isOperator(token)) return TOKEN_TYPES.operator

  if (isKeyword(token)) return TOKEN_TYPES.keyword

  if (isDecorator(token)) return TOKEN_TYPES.decorator

  return TOKEN_TYPES.text
}

const parser = StreamLanguage.define({
  token(stream, state) {
    const currentText = stream.current()

    console.log(stream.current(), state)

    return getTokenType(currentText)
  }
})

export {
  parser
}

export default LRLanguage.define({
  parser,
})