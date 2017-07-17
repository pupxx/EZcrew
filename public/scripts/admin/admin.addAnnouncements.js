(function(){
  angular.module('app')
  .component('admin.addAnnouncements', {
    controller: controller,
    templateUrl: './scripts/admin/admin.addAnnouncements.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this


    vm.$onInit = onInit;
    vm.addAnnouncement = addAnnouncement;
    vm.getAllAnnouncements = getAllAnnouncements;



    function onInit (){
      vm.show = false

      vm.getAllAnnouncements()

    }


    function addAnnouncement(){
      let body = {announcement: vm.announcement}
      delete vm.announcement
      adminService.addAnnouncement(body).then(()=>{
        vm.addedAnnouncement = adminService.addedAnnouncement.announcement
      }).then(()=>{
        vm.getAllAnnouncements()
      })
    }

    function getAllAnnouncements(){
      adminService.getAllAnnouncements().then((allAnnouncements)=>{
        vm.allAnnouncements = allAnnouncements;
        vm.allAnnouncements.forEach((el)=>{
          el.created_at = moment(el.created_at).format('MMMM Do')
        })
      })
    }

  }
})()
