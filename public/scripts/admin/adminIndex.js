(function(){
  console.log('adminIndex is connected');
  angular.module('app')
  .component('adminIndex', {
    controller: controller,
    templateUrl: './scripts/admin/admin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.getAllPractices = getAllPractices;


    function onInit (){
      vm.show = false

    vm.getAllPractices();



    }

    function toggleForm(){
      if(vm.show === false){
        vm.show = true
      } else{
        vm.show = false
      }
    }


    function getAllPractices (){
      adminService.getAllPractices().then(()=>{
        vm.practices = adminService.allPractices
        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('LL')
        });
      });
    }


  }


})()
