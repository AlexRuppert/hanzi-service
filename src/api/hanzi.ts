import Server from '../server/server'
import { validate, vmodel } from '../server/validate'
import hanzi from 'hanzi'
import pinyinConvert from 'pinyin-tone-convert'

hanzi.start('s', false, false)
const characterModel = vmodel({
  character: {
    type: value => {
      if (typeof value !== 'string') return 'must be a string'
      if (value.length < 1) return 'must be greater than 1 chars'
      if (value.length > 300) return 'must be less than 100 chars'
      return true
    },
    default: 'a',
  },
})

export default Server.newController('/hanzi', router => {
  //configure router for incoming requests, see koa-router documentation
  router.get('/characters/:character', validate(characterModel), async ctx => {
    const decomposition = hanzi.decomposeMany(ctx.params.character, 2)
    for (const char in decomposition) {
      const data = decomposition[char]

      data.components = data.components.map(component => {
        let pinyin = ''
        if (component && component[0] !== 'N') {
          let p = hanzi.getPinyin(component)
          pinyin = ''
          if (p) {
            pinyin = p[0]
          }
        }

        return {
          radical: component,
          pinyin,
          pinyin2: pinyinConvert(pinyin),
          definitions: [hanzi.getRadicalMeaning(component)],
        }
      })
      try {
        data.translations = hanzi.definitionLookup(char, 's').map(definition => {
          return {
            pinyin: definition.pinyin,
            pinyin2: pinyinConvert(definition.pinyin),
            definitions: definition.definition.split('/'),
          }
        })
      } catch (err) {
        data.translations = [
          {
            traditional: '',
            simplified: '',
            pinyin: '',
            definition: '',
          },
        ]
      }
    }
    ctx.body = decomposition
  })
})
