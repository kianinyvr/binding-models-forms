function orderForm() {
  return {
    restrict: 'E', //tell angular that we're using an element directive
    scope: {},
    bindToController: {
      data: '=',
      submit: '&' //allows us to delegte functions into our directive under an alias
    },
    controller: 'OrderFormController as form',
    template: `
      <form name="orderForm" novalidate ng-submit="form.onSubmit();">
        <input name="name" required="" type="text" ng-model="form.data.name" placeholder="Your name">
        <div ng-show="orderForm.name.$error.required && orderForm.name.$touched"> 
          Name is required
        </div>
        <input name="email" required="" type="email" ng-model="form.data.email" placeholder="Your email">
        <div ng-show="orderForm.email.$error.required && orderForm.email.$touched">
          Email is required
        </div>
        <div ng-show="orderForm.email.$error.email && orderForm.email.$touched">
        Email is invalid
        </div>
        <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
        <div ng-show="orderForm.location.$error.required && orderForm.location.$touched">
          Location is required
        </div>
        <select
          name="OrderChoice"
          required=""
          ng-model="form.data.product"
          ng-options="product.label for product in form.products "
        >
          <option value="">Select...</option>
        </select>
        <textarea name="comments"  ng-model="form.data.comments" placeholder="Any message (optional)" ></textarea>
        <button type="submit" ng-disabled="orderForm.$invalid">
          Order
        </button>
      </form>
    `
  };
}

angular
  .module('app')
  .directive('orderForm', orderForm);
