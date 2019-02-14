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
        <input name="email" required="" type="email" ng-model="form.data.email" placeholder="Your email">
        <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
        <select
          name="OrderChoice"
          required=""
          ng-model="form.data.product"
          ng-options="product.label for product in form.products "
        >
          <option value="">Select...</option>
        </select>
        <textarea name="comments" ng-model="form.data.comments" placeholder="Any message (optional)" ></textarea>
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
