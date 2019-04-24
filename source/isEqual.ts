import _baseIsEqual from './_common/_baseIsEqual'
import isFunction from './isFunction'
import isUndefined from './isUndefined'

type PropertyName = string | number | symbol
type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: PropertyName, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined

function isEqual(value: any, other: any, customizer?: TIsEqualCustomizer | undefined): boolean | never {
  const customizerFunc: TIsEqualCustomizer | undefined = isFunction(customizer) ? customizer : void 0
  const customizerResult: boolean | undefined = isUndefined(customizerFunc) ? void 0 : customizerFunc(value, other)
  return isUndefined(customizerResult) ? _baseIsEqual(value, other, customizerFunc) : !!customizerResult
}

export default isEqual
