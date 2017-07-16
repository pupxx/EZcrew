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
    vm.editPractice = editPractice;
    vm.hideForm = hideForm;



    function onInit (){
      vm.show = false

    vm.getAllPractices();



    }

    function toggleForm(practice){
    vm.practice = practice
      if(vm.show === false){
        vm.show = true
      } else{
        vm.show = false
      }
    }

    function hideForm(){
      if(vm.show === true){
        vm.show = false;
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

    function editPractice(){
      let id = vm.practice.id
      let date = vm.practice.date
      vm.practice.date = moment(date).format('ll')
      let body = {
        practiceDescription: vm.practice.practiceDescription,
        date: vm.practice.date
      }
      adminService.editPractice(id, body).then(()=>{
        vm.getAllPractices();
        vm.toggleForm();
      })

    }


  }
})()
