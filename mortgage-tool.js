$(document).ready(function () {
  var MortgageToolModel = Backbone.Model.extend({
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
    }
  });
  var bindModel = new Backbone.Model({
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
  });
  var MortgageToolView = Backbone.Epoxy.View.extend({
    bindings: {
      "input#mortgage-price": "value:mortgage_price,events:['keyup']",
      "input#mortgage-downpayment": "value:mortgage_downpayment,events:['keyup']",
      "input#mortgage-rental-income": "value:mortgage_rental_income,events:['keyup']",
      "input#mortgage-amortization": "value:mortgage_maintenance,events:['keyup']",
      "span.price-test": "text:mortgage_price",
      "span.downpayment-test": "text:mortgage_downpayment"
    },
    initialize: function () {
      this.template = _.template($('#mortgage-tool-template').html());

      var showTitle = !$('#property-profile, #project-profile').length;
      this.model.set('showTitle', showTitle);

    },

    render: function () {
      console.log('render');
      var self = this;
      var $el = $(this.el);

      // $el.html(this.template(this.model.toJSON()));

      return this;
    }
  });
  
  var mortgageModel = new MortgageToolModel();
  var mortgageView = new MortgageToolView({
    el: '#mortgage-tool',
    model: bindModel
  });
  window.model = mortgageModel;
  mortgageView.render();
});