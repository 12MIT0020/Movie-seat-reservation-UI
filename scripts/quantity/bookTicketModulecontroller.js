angular.module('bookTicketModule')
    .controller('bookTicketModuleController', ['$scope', '$window','seatsManager','ticketBookService', function($scope, $window, seatsManager,ticketBookService) {
                 var bookedSeatArr = [];
            var init = function() {
                $scope.countOfSelctedTicket = 0;
                //$scope.enableticketbook = false;
                $scope.enableButtonToBookTicket = false;
               
                //$scope.premiumSeats = seatsManager.getSeats('Premium');
                //$scope.standardSeats = seatsManager.getSeats('Standard');
                // $scope.seats = seatsManager;
                // $scope.quantities = [{
                //     id: 0,
                //     val: 0
                // }, {
                //     id: 1,
                //     val: 1
                // }, {
                //     id: 2,
                //     val: 2
                // }, {
                //     id: 3,
                //     val: 3
                // }, {
                //     id: 4,
                //     val: 4
                // }, ];
                // $scope.seatQualities = ['Premium', 'Standard'];
                // $scope.seatQuality = 'Standard';
                // $scope.selectedCount = $scope.quantities[1];
                // seatsManager.setAvailCount($scope.selectedCount);
                $scope.seatsData = [
                    [{'letter':'F',val: 1},{'letter':'F',val: 2},{'letter':'F',val: 3},{'letter':'F',val: 4},{'letter':'F',val: 5},{'letter':'F',val: 6},{'letter':'F',val: 7},{'letter':'F',val: 8},{'letter':'F',val: 9},{'letter':'F',val: 10}],
                    [{'letter':'J',val: 1},{'letter':'J',val: 2},{'letter':'J',val: 3},{'letter':'J',val: 4},{'letter':'J',val: 5},{'letter':'J',val: 6},{'letter':'J',val: 7},{'letter':'J',val: 8},{'letter':'J',val: 9},{'letter':'J',val: 10}],
                    [{'letter':'H',val: 1},{'letter':'H',val: 2},{'letter':'H',val: 3},{'letter':'H',val: 4},{'letter':'H',val: 5},{'letter':'H',val: 6},{'letter':'H',val: 7},{'letter':'H',val: 8},{'letter':'H',val: 9},{'letter':'H',val: 10}],
                    [{'letter':'I',val: 1},{'letter':'I',val: 2},{'letter':'I',val: 3},{'letter':'I',val: 4},{'letter':'I',val: 5},{'letter':'I',val: 6},{'letter':'I',val: 7},{'letter':'I',val: 8},{'letter':'I',val: 9},{'letter':'I',val: 10}],
                    [{'letter':'J',val: 1},{'letter':'J',val: 2},{'letter':'J',val: 3},{'letter':'J',val: 4},{'letter':'J',val: 5},{'letter':'J',val: 6},{'letter':'J',val: 7},{'letter':'J',val: 8},{'letter':'J',val: 9},{'letter':'J',val: 10}]
                ];
                $scope.customerName = '';
                $scope.quantityOfTicket = 1;
            }

            $scope.setQuantityOfTicket = function(){
                console.log($scope.quantityOfTicket);
                console.log($scope.customerName);
                //console.log();
                $scope.availCount = $scope.quantityOfTicket;
                $scope.disableTheInput = true;
                $scope.enableticketbook = true;
            };


            $scope.selectSeat = function(seat){
                console.log(seat);
                
                if($scope.availCount != 0){
                    $scope.countOfSelctedTicket++;
                    //if(){
                        $scope.availCount--;
                        seat.check = true;
                    bookedSeatArr.push({seat});
                   // }
                }else{
                    alert("Sorry you cannot select more");
                    $scope.enableButtonToBookTicket = true;
                    console.log(bookedSeatArr);
                    seatsManager.saveBookedTickets($scope.customerName,bookedSeatArr);
                   // ticketBookService.setBookedTicket($scope.customerName,bookedSeatArr);
                }
            };
            // $scope.storeSeat = function() {
            //     if ($scope.seats.availCount.val != 0) {
            //         $window.alert("You haven't selected " +
            //             $scope.seats.availCount.val + " seats");
            //         return;
            //     }
            //     var sessionInfo = seatsManager.bookCheckedSeats();
            //     seatsManager.setAvailCount($scope.selectedCount);

            //     // console.log(sessionInfo.checkedSeats);

            //     $scope.alertMsg = [];
            //     angular.forEach(sessionInfo.checkedSeats, function(v, k) {
            //         for (var i = 0; i < v.length; i++) {
            //             $scope.alertMsg.push(v[i].val + v[i].letter);
            //         }
            //     });
                
            //     $window.alert('Thank you for Booking ' + sessionInfo.count + ' seats. ' + 
            //             'Your seats are: ' + $scope.alertMsg.join(', '));
            // };

            $scope.storeSeat = function(){
                console.log();
                $scope.showbookedseat = seatsManager.getSavedTickets();
                console.log($scope.showbookedseat);
                

            }

            $scope.bookTicketForAnotherUser =function(){
                $scope.quantityOfTicket = 1;
                $scope.disableTheInput = false;
                $scope.enableticketbook = false;
                $scope.customerName = '';
                $scope.availCount = 0;


            }

        init();
    }]);
