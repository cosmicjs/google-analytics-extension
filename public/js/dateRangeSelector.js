// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/* global gapi */


/**
 * A DateRangeSelector component for the Embed API.
 */
gapi.analytics.ready(function() {
  gapi.analytics.createComponent('DateRangeSelector', {

    /**
     * Initialize the DateRangeSelector instance and render it to the page.
     * @return {DateRangeSelector} The instance.
     */
    execute: function() {
      let options = this.get();
      options['start-date'] = options['start-date'] || '7daysAgo';
      options['end-date'] = options['end-date'] || 'yesterday';

      // Allow container to be a string ID or an HTMLElement.
      this.container = typeof options.container == 'string' ?
        document.getElementById(options.container) : options.container;

      // Allow the template to be overridden.
      if (options.template) this.template = options.template;

      this.container.innerHTML = this.template;
      this.dateInputs = this.container.querySelectorAll('input');

      this.container.onchange = this.onChange.bind(this);
      $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        startDate: moment().add(-30, 'days'),
        endDate: moment(new Date()),
        locale: {
          format: 'YYYY-MM-DD'
        }
      });
      return this;
    },

    /**
     * Emit a change event based on the currently selected dates.
     * Pass an object containing the start date and end date.
     */
    onChange: function() {
      var dates = this.dateInputs[0].value.split(' - ');
      this.setValues();
      this.emit('change', {
        'start-date': dates[0],
        'end-date': dates[1],
      });
    },

    /**
     * Updates the instance properties based on the input values.
     */
    setValues: function() {
      var dates = this.dateInputs[0].value.split(' - ');
      this['start-date'] = dates[0];
      this['end-date'] = dates[1];
    },

    /**
     * Updates the input min and max attributes so there's no overlap.
     */
    setMinMax: function() {
      // this.startDateInput.max = this.endDateInput.value;
      // this.endDateInput.min = this.startDateInput.value;
    },

    /**
     * The html structure used to build the component. Developers can
     * override this by passing it to the component constructor.
     * The only requirement is that the structure contain two inputs, the
     * first will be the start date and the second will be the end date.
     */
    template:
      '  <div class="col-md-6">' +
      '   <input type="text" class="form-control" name="datetimes" /> ' +
      '  </div>',
  });
});