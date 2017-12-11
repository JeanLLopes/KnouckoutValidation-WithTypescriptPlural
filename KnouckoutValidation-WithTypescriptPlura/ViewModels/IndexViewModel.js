//add references
/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var kjs;
(function (kjs) {
    var validation;
    (function (validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                //    public FavoriteSport: KnockoutObservable<string> = ko.observable("Futeball")
                //        .extend({ required: true });
                //}
                this.FavoriteSport = ko.observable("Futeball");
                this.FullName = ko.observable("Test Do Not Book");
                this.Age = ko.observable(1);
                this.IfEqualValue = ko.observable("");
                this.IfNotEqualValue = ko.observable("");
                this.NonObjectValue = ko.observable("");
                this.AllowLowerCase = ko.observable("");
                this.PhoneNumberCase = ko.observable("");
                //CUSTOM    
                this.MustBePositiveNumber = ko.observable(0);
                this.SetupValidation();
                this.SetupCustomValidation();
            }
            ;
            IndexViewModel.prototype.SetupValidation = function () {
                this.FavoriteSport.extend({ required: true });
                this.FullName.extend({ required: true });
                //this.Age.extend({ required: true, min: 5, max: 17 });
                this.Age.extend({ required: true })
                    .extend({ min: { params: 5, message: "Must be 4" } })
                    .extend({ max: { params: 17, message: "Mest be 17" } });
                //EXPECT IS "Futeball"
                this.IfEqualValue.extend({ equal: this.FavoriteSport });
                this.IfNotEqualValue.extend({
                    notEqual: {
                        params: this.FavoriteSport, message: "The Value is equal to Futeball"
                    }
                });
                this.NonObjectValue.extend({ equal: { params: "Red", message: "value expect is 'Red'" } });
                this.AllowLowerCase.extend({ pattern: { params: "^[a-z]*$", message: "Only Accept caraters in lowecase" } });
                this.PhoneNumberCase.extend({ pattern: { params: "[0-9]{2}-[0-9]{4}-[0-9]{4}", message: "Only accept phone number in format 12-1111-1111" } });
            };
            IndexViewModel.prototype.SetupCustomValidation = function () {
                this.MustBePositiveNumber.extend({
                    isPositiveNumber: true
                });
            };
            return IndexViewModel;
        }());
        validation.IndexViewModel = IndexViewModel;
    })(validation = kjs.validation || (kjs.validation = {}));
})(kjs || (kjs = {}));
