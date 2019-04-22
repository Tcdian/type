import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isNumber(value: any): value is number {
    return _baseGetTypeTag(value) === _TYPE_TAG.Number
}

export default isNumber
