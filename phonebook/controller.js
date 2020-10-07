angular.module('app', [])
    .controller('PhoneBookController', function()
        {
            var phoneBook = this;

            phoneBook.list = [];

            phoneBook.operators = ['OI', 'VIVO', 'CLARO', 'TIM'];

            phoneBook.add = function()
            {

                phoneBook.list.push({ name: phoneBook.name, phone: phoneBook.phone, operator: phoneBook.operator, date: new Date() });
                
                phoneBook.name = "";
                phoneBook.phone = "";
                phoneBook.operator = "";

            }

            phoneBook.delete = function()
            {
                phoneBook.list = phoneBook.list.filter(item => !item.selected);
                    
            }

            phoneBook.organize = function (field) {
                
                phoneBook.criterionOrganize = field
                phoneBook.directionOrganize = !phoneBook.directionOrganize

            }

        });