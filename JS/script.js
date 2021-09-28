// Terry Hodge 8-29-2021 
// Movie Ticket Price  bringing it all together problem 2

// movie ticket caclulator

document.querySelector("#calcTicketPrice").addEventListener("click", function(e)

{ 
    if(document.querySelector("#age").reportValidity() &&
        document.querySelector("#timeHours").reportValidity() &&
        document.querySelector("#timeMins").reportValidity()
        )
        {
            // get the values
            let age = document.querySelector("#age").value;
            let timeHour = document.querySelector("#timeHours").value;
            let timeMin = document.querySelector("#timeMins").value

            let ticketPrice = 12.00;
            if(age>=55 || age<10)
            {
                ticketPrice = 7.00;

                document.querySelector("#ticketPrice").innerHTML = `You get the discount beacaue of your age! The ticket is $${ticketPrice.toFixed(2)}.`;

            }
            else if((timeHour>=2 && timeHour<=6) && document.querySelector("#pm").checked)
            {

                // they get a discount based on time
                ticketPrice = 7.00
                document.querySelector("#ticketPrice").innerHTML = `You get the discount beacaue of the time of your movie! The ticket is $${ticketPrice.toFixed(2)}.`;

            }
            else
            {

                document.querySelector("#ticketPrice").innerHTML = `The ticket is $${ticketPrice.toFixed(2)}.`;
            }

            // no discount full price ticket


        }






});
