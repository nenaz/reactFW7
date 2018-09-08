export const object = {
    value: 'HELLO',
    oldValue: 'HELLO',
    toUpper: function() {
        this.value = this.value.toUpperCase()
        return this
    },
    toLower: function() {
        this.value = this.value.toLowerCase()
        return this
    },
    toReverse: function() {
        const arrStart = this.value.split('')
        const arrEnd = arrStart.reverse()
        this.value = arrEnd.join('')
        return this
    },
    setValue: function(value) {
        this.value = value
        this.oldValue = value
        return this
    },
    getValue: function() {
        return this.value
    },
    getOldValue: function() {
        return this.oldValue
    },
}