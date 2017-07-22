(function (){
  angular.module('app')
  .component('adminPractice', {
    controller: adminPracticeController,
    templateUrl: './scripts/admin/admin.practice.html'
  })

  adminPracticeController.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'practiceService']

  function adminPracticeController (baseUrl, $http, $state, adminService, practiceService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.getAllPractices = getAllPractices;
    vm.editPractice = editPractice;
    vm.hideForm = hideForm;
    vm.deletePractice = deletePractice;
    vm.getAttendees = getAttendees;
    vm.setTab = setTab;
    vm.attendees = [];
    vm.filteredDates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    vm.filteredYear = [];


    function onInit (){
      vm.show = false;
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
        vm.show = false
      }
    }

    function getAllPractices (){

      adminService.getAllPractices().then(()=>{
        vm.practices = adminService.allPractices
        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('LL')
          el.filterDate = moment(el.date).format('MMMM')
          el.filterYear = moment(el.date).format('YYYY')
          vm.filteredYear.push(el.filterYear);
          vm.filteredYear = vm.filteredYear.filter(function(el, i, collec) {
            return i == collec.indexOf(el);
          })

        })
      })
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

    function deletePractice(practice){
      let id = practice.id
      adminService.deletePractice(id).then(()=>{
        vm.getAllPractices()
      })
    }

    function getAttendees(practice){
      delete vm.noOneIsComing;
      let id = practice.id
      practiceService.whoIsAttendingPractice(id).then((attendees)=>{
        vm.attendees = attendees
        adminService.displayPosition(vm.attendees)
      }).then(()=>{
        vm.selectedPracticeDate = 'Attendance' + ' ' + practice.date
        if(vm.attendees.length === 0){
          vm.noOneIsComing = "No one is coming to practice today"
        }
      })
    }

    function setTab(num){
        vm.tab = num;
    }
  }



})()
