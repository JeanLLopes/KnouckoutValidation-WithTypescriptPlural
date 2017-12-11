/// <reference path="../scripts/typings/knockout.validation/knockout.validation.d.ts" />

interface KnockoutValidationRuleDefinition {
    isPositiveNumber: KnockoutValidationRuleDefinition 
}

(function () {
    ko.validation.rules['isPositiveNumber'] = {
        validator: (value, mustBePositive) => {
            if (!mustBePositive) {
                return true;
            }
            return value >= 0;
        },
        message: "The must be positive number"
    };

    ko.validation.registerExtenders();
})();