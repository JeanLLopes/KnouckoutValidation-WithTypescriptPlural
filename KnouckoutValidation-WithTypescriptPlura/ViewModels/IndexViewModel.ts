/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

module kjs.validation {
    export class IndexViewModel {
        //    public FavoriteSport: KnockoutObservable<string> = ko.observable("Futeball")
        //        .extend({ required: true });
        //}
        public FavoriteSport: KnockoutObservable<string> = ko.observable("Futeball");
        public FullName: KnockoutObservable<string> = ko.observable("Test Do Not Book");
        public Age: KnockoutObservable<number> = ko.observable(1);
        public IfEqualValue: KnockoutObservable<string> = ko.observable("");
        public IfNotEqualValue: KnockoutObservable<string> = ko.observable("");
        public NonObjectValue: KnockoutObservable<string> = ko.observable("");

        constructor() {
            this.SetupValidation();
        };

        private SetupValidation() {
            this.FavoriteSport.extend({ required: true });
            this.FullName.extend({ required: true });
            //this.Age.extend({ required: true, min: 5, max: 17 });
            this.Age.extend({ required: true })
                .extend({ min: { params: 5, message: "Must be 4" } })
                .extend({ max: { params: 17, message: "Mest be 17" } })

            //EXPECT IS "Futeball"
            this.IfEqualValue.extend({ equal: this.FavoriteSport });
            this.IfNotEqualValue.extend({
                notEqual: {
                    params: this.FavoriteSport,message: "The Value is equal to Futeball"
                }
            })
            this.NonObjectValue.extend({ equal: { params: "Red",message: "value expect is 'Red'"}})
        };
    }
}