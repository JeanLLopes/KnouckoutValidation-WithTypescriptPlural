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
                this.SetupValidation();
            }
            ;
            IndexViewModel.prototype.SetupValidation = function () {
                this.FavoriteSport.extend({ required: true });
            };
            ;
            return IndexViewModel;
        }());
        validation.IndexViewModel = IndexViewModel;
    })(validation = kjs.validation || (kjs.validation = {}));
})(kjs || (kjs = {}));
