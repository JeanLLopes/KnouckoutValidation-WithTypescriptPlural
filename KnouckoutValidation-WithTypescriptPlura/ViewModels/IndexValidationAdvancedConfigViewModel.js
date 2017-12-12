/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var kjs;
(function (kjs) {
    var validation;
    (function (validation) {
        var IndexValidationAdvancedConfigViewModel = (function () {
            function IndexValidationAdvancedConfigViewModel() {
                this.FirstName = ko.observable("");
                this.LastName = ko.observable("");
                this.Age = ko.observable(0);
                this.SetupValidation();
            }
            IndexValidationAdvancedConfigViewModel.prototype.SetupValidation = function () {
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
            };
            return IndexValidationAdvancedConfigViewModel;
        }());
        validation.IndexValidationAdvancedConfigViewModel = IndexValidationAdvancedConfigViewModel;
    })(validation = kjs.validation || (kjs.validation = {}));
})(kjs || (kjs = {}));
