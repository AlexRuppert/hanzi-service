import Valify from 'valify'

const defaultOptions = {
  usePromise: true,
  autoCast: true,
  overwriteUndefined: true,
}

export function vmodel(model) {
  return new Valify(model, defaultOptions)
}
export function validate(model) {
  return async (ctx, next) => {
    try {
      await model(ctx.params)
      await next()
    } catch (error) {
      ctx.status = 422
      ctx.body = Object.assign({}, error.fields)
      model.owner.errors = {
        message: '',
        fields: [],
      }
    }
  }
}
