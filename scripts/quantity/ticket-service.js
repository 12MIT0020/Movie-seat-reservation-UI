//function () {
  //'use strict';

  angular.module('bookTicketModule')
          .service('ticketBookService', function () {

            this.bookTicketArr = [];
            this.setBookedTicket =  function(name,arr){
                    
                    var obj = {
                        "name" : name,
                        "bookedTicket" : arr
                    };
                    this.bookTicketArr.push(obj);
                    console.log(this.bookTicketArr);
            };

            this.getBookedTicket =  function(){
                    return this.bookTicketArr;
            };
          });
//})();