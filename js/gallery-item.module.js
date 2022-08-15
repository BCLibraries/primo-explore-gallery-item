angular
    .module('bc-gallery-item', [])
    .controller('prmGalleryItemAfterController',  [function () {
		this.$onInit = function () {
			var vm=this;
			vm.itemCount = vm.parentCtrl.item.pnx.display.lds36;
		};
    }])
    .component('prmGalleryItemAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmGalleryItemAfterController',
        templateUrl:'primo-explore-gallery-item/html/gallery-item.html'
});
