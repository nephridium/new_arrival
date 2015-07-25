(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.minVersion = {
    globals: '1.0.0',
    milestones: '1.1.0'
  };

  app.updateRequired = function(datastore, version) {
    console.log('Version', datastore, version, 'required:', app.minVersion[datastore]);
    return (app.minVersion[datastore] > version);
  };

  app.toastMilestoneAddedToReached = function() {
    document.querySelector('#milestone-added-to-reached').show();
  };

  app.toastMilestoneRemovedFromReached = function() {
    document.querySelector('#milestone-removed-from-reached').show();
  };

  app.toastAlreadyFullyCollapsed = function() {
    document.querySelector('#already-fully-collapsed').show();
  };

  app.toastAlreadyFullyExpanded = function() {
    document.querySelector('#already-fully-expanded').show();
  };


  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);
