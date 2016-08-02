import {Control} from "angular2/common";

export class UserValidators {
    static validEmail(control:Control) {
        if (control.value == '') {
            return null;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(control.value)) ? null : {email: true};
    }
}