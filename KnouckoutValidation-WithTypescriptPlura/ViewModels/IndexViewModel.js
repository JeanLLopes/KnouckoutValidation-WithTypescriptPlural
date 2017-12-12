//add references
/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var kjs;
(function (kjs) {
    var validation;
    (function (validation) {
        var IndexViewModel = (function () {
            function IndexViewModel() {
                var _this = this;
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
                //CUSTOM 2
                this.CustomValidationValue1 = ko.observable(0);
                this.CustomValidationValue2 = ko.observable(0);
                //CONDICIONAL VALIDATION
                this.RequiresValidation = ko.observable(false);
                this.ValueToValidate = ko.observable(0);
                //HTML5 VALIDATION
                this.RequiredValidation = ko.observable("");
                this.RangeFieldValidation = ko.observable(0);
                this.SetupValidation();
                this.SetupCustomValidation();
                this.CustomValidationTotal = ko.computed(function () {
                    return _this.CustomValidationValue1() + _this.CustomValidationValue2();
                });
                this.SetupCustomValidationComputed();
                this.SetupCustomValidationConditinal();
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
            IndexViewModel.prototype.SetupCustomValidationComputed = function () {
                ko.validation.rules['isPositiveNumber'] = {
                    validator: function (val, otherVal) {
                        return val >= 0;
                    },
                    message: "Total must be positive"
                };
                ko.validation.registerExtenders();
                this.CustomValidationTotal.extend({
                    isPositiveNumber: {
                        message: "Total cannot be less than 0",
                    }
                });
            };
            IndexViewModel.prototype.SetupCustomValidationConditinal = function () {
                var _this = this;
                this.ValueToValidate.extend({
                    required: {
                        message: "Need to populate with text",
                        onlyIf: function () { return _this.RequiresValidation() === true; }
                    }
                });
            };
            return IndexViewModel;
        }());
        validation.IndexViewModel = IndexViewModel;
    })(validation = kjs.validation || (kjs.validation = {}));
})(kjs || (kjs = {}));
//# sourceMappingURL=IndexViewModel.js.map