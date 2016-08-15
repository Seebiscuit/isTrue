Object.defineProperty(Object.prototype, "isTrue", {
    get: function () {
        var value = this.valueOf();
        if (typeof value == 'string')
            return !!value.length && !(/^(false|0)$/i).test(value);
        else
            return value ? true : false;
    }
});