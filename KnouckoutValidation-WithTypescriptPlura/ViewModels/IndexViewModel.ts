/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

module kjs.validation {
    export class IndexViewModel {
        //    public FavoriteSport: KnockoutObservable<string> = ko.observable("Futeball")
        //        .extend({ required: true });
        //}

        public FavoriteSport: KnockoutObservable<string> = ko.observable("Futeball");

        constructor() {
            this.SetupValidation();
        };

        private SetupValidation() {
            this.FavoriteSport.extend({ required: true });
        };
    }
}