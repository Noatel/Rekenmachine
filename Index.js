
    var  Display = document.getElementById("Display"), // Scherm van het rekenmachine
         Button = document.getElementsByClassName("Button"),
         Weg = document.getElementById("Clear"),

         Som = ["+","-","*"],
         EersteVariable = "",
         TweedeVariable = "",
         store = "";


    Weg.addEventListener("click", Clear);           // Voert functie Clear uit als je dr op klikt


    for (i = 0; i < Button.length; i++)
    {
        Button[i].addEventListener("click", Scherm);     // Loopt door elke button heen
    }

    function Clear(){
        DisplayText.innerText = "";
        EersteVariable = "";
        TweedeVariable = "";
        store = "";

    }// End Function Clear

    function Scherm(){
        DisplayText.innerText += this.innerText;

        var Waarde = this.innerText;

        if (Waarde == "=") // Als de innertext van de display een = bevat gaat die dr doorheen
        {
            var resultaat;

            switch (store)// Een switch met de rekenfuncties
            {
                case "+":
                    resultaat = parseInt(EersteVariable) + parseInt(TweedeVariable);
                    break;
                case "-":
                    resultaat = parseInt(EersteVariable) - parseInt(TweedeVariable);
                    break;
                case "*":
                    resultaat = parseInt(EersteVariable) * parseInt(TweedeVariable);
                    break;
                case "/":
                    resultaat = parseInt(EersteVariable) / parseInt(TweedeVariable);
                    break;
                default:
            }

            Clear();
            DisplayText.innerText = resultaat;
            EersteVariable = resultaat;

            }
            else
            {

                if (store == "")
                {
                    EersteVariable += this.innerText;
                }
                else
                {
                    TweedeVariable += this.innerText;
                }





            }

        if (Som.indexOf(this.innerText) != -1)// Als
        {
            store = this.innerText;
        }
    }// End Function Scherm




