angular.module('app', [])
    .controller('PhoneBookController', function()
        {
            var phoneBook = this;

            phoneBook.list = [];

            phoneBook.add = function()
            {

                phoneBook.list.push({ name: phoneBook.name, phone: phoneBook.phone });

            }

            phoneBook.delete = function(contact)
                {
                    phoneBook.list = phoneBook.list.filter(item => item !== contact);
                }

        });