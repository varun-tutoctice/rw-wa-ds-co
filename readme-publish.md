# RewardsComponent

This project was generated with [Angular CLI] version `12.2.2`.

## Adding rewards-component to angular 2 and above

`Step 1`: import the script in `angular.json`

"scripts": [
   "node_modules/rewards-component/js/rewards-component.js"
]


`Step 2`: Add `CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA` to your AppModule so that Angular knows you will be using outside components.

@NgModule({
    declarations: [ ... ],
    bootstrap:    [ ... ],
    imports: [ ... ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})

`Step 3`: use your web component anywhere in your application with `<rewards-component></rewards-component>`


