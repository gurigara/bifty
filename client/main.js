import { Template } from 'meteor/templating';

import './main.html';

Template.sideBar.onRendered(function () {
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true,
    onOpen: function(el) {},
    onClose: function(el) {},
  });
});
