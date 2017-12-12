/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

module kjs.validation {
    export class IndexValidationAdvancedConfigViewModel {
        public FirstName: KnockoutObservable<string> = ko.observable("");
        public LastName: KnockoutObservable<string> = ko.observable("");
        public Age: KnockoutObservable<number> = ko.observable(0);


        constructor() {
            this.SetupValidation()    
        }

        private SetupValidation() {
            this.FirstName.extend({
                required: true
            });
            this.LastName.extend({
                required: true
            });
            this.Age.extend({
                min: 1,
                max: 99
            });

            //IF YOU NEED SHOW ALL VALIDATIONS INSERT THIS LINE
            ko.validation.group(this).showAllMessages();
        }
    }
}