function initApp() {
    // console.log("Verify OTP");
    const OTPinput = document.querySelectorAll("input");
    const btn = document.querySelector("button");
    if (OTPinput) {
        
        window.addEventListener("load", () => OTPinput[0].focus());

        OTPinput.forEach((input) => {
            input.addEventListener("input", () => {

                const currentInput = input;
                const nextInput = input.nextElementSibling;

                if (currentInput.value.length > 1) {
                    currentInput.value = "";
                }

                //hien tai da co, va input ke tiep co ton tai input, 
                // va input ke tiep co thuoc tinh disable
                if (currentInput.value !== "" && nextInput !== null && nextInput.hasAttribute("disabled")) {
                    nextInput.removeAttribute("disabled");
                    nextInput.focus();
                }

                if (!OTPinput[3].disabled && OTPinput[3].value !== "") {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
                
            });

            input.addEventListener("keyup", (e) => {
                const previousInput = input.previousElementSibling;
                if (e.key === "Backspace") {
                    if (previousInput !== null) {
                        e.target.value = "";
                        e.target.setAttribute("disabled", true);
                        previousInput.focus();
                    }
                }
            });

        });

        if(btn){
            var arr = [];
            btn.addEventListener("click", ()=>{
                OTPinput.forEach((input) => arr.push(input.value));
                alert(`Your One Time Password is: ${arr}`);
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", initApp());