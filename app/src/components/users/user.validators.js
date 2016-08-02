System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserValidators;
    return {
        setters:[],
        execute: function() {
            UserValidators = (function () {
                function UserValidators() {
                }
                UserValidators.validEmail = function (control) {
                    if (control.value == '') {
                        return null;
                    }
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return (re.test(control.value)) ? null : { email: true };
                };
                return UserValidators;
            }());
            exports_1("UserValidators", UserValidators);
        }
    }
});
//# sourceMappingURL=user.validators.js.map