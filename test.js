$(document).ready(function () {
  var MortgageToolModel = Backbone.Epoxy.Model.extend({
    defaults: {
      mortgage_amortization: 25,
      mortgage_downpayment: null,
      mortgage_downpayment_percent: 20,
      mortgage_home_insurance: 0,
      mortgage_include_taxes_insurance: false,
      mortgage_insurance_payment: 0,
      mortgage_interest_percent: 3,
      mortgage_interest_payment: 0,
      mortgage_interest_total: 0,
      mortgage_is_vip_active: 0,
      mortgage_listing_type: '',
      mortgage_maintenance: 0,
      mortgage_monthly_maintenance: 0,
      mortgage_maintenance_payment: 0,
      mortgage_insurance: 0,
      mortgage_payment: 0,
      mortgage_total: 0,
      mortgage_payment_total: 0,
      mortgage_payment_period: 'monthly',
      mortgage_price: 300000,
      mortgage_principle: 270000,
      mortgage_principle_payment: 0,
      mortgage_rebate_amount: 0,
      mortgage_rental_income: 0,
      mortgage_rental_income_payment: 0,
      mortgage_taxes: null,
      mortgage_taxes_payment: 0,
      mortgage_tax_percent: 1
    },
    computeds: {
      mortgage_downpayment: {
        get: function () {
          console.log('get downpayment');
          var mortgage_downpayment = this.get('mortgage_price') * this.get('mortgage_downpayment_percent') / 100;
          return mortgage_downpayment;
        },
        set: function (value) {
          console.log('set downpayment');
          var downpayment_percent = value / this.get('mortgage_price') * 100;
          return { mortgage_downpayment_percent: downpayment_percent }
        }
      }
    }
  });

  var BindingView = Backbone.Epoxy.View.extend({
    el: "#app-luke",
    bindingFilters: {
      priceFilter: {
        get: function (value) {
          console.log('get filter');
          var value = s.numberFormat(value);
          return value;
        },
        set: function (value) {
          console.log('set filter');
          var value = s.toNumber(value.replace(',',''));
          return value;
        }
      },
      percentFilter: {
        get: function (value) {
          var value = s.numberFormat(value, 2);
          return value;
        },
        set: function (value) {
          var value = s.toNumber(value.replace(',',''), 2);
          return value;
        }
      }
    },
    bindings: {
      "input#mortgage-price": "value:priceFilter(mortgage_price), events:['blur']",
      "input#mortgage-downpayment": "value:priceFilter(mortgage_downpayment), events:['blur']",
      "input#mortgage-downpayment-percent": "value:percentFilter(mortgage_downpayment_percent), events:['blur']",
      "input#mortgage-amortization": "value:priceFilter(mortgage_maintenance),events:['blur']",
      "input#mortgage-interest-percent": "value:percentFilter(mortgage_interest_percent),events:['blur']"
    },
    initialize: function () {
      this.template = _.template($('#template').html());
    },
    render: function () {
      var self = this;
      var $el = $(this.el);
      $el.html(this.template(this.model.toJSON()));
      this.applyBindings();
      console.log(this.bindingFilters);
      return this;
    }
  });

  var view = new BindingView({model: new MortgageToolModel()});
  view.render();
});