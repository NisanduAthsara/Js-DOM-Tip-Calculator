document.getElementById("form").addEventListener("click",
	function(event){
		event.preventDefault();
	}
)

document.querySelector(".reset-btn").addEventListener("click",
	function(){
		location.reload();
	}
)

let user_val;
let final_user_bill;
let tip_amount;
let final_tip_amount;
let final_bill_amount;

document.querySelector(".val5").addEventListener("click",
	function(){
		tip_amount = 5/100;
	}
)

document.querySelector(".val10").addEventListener("click",function(){
	tip_amount = 10/100;
})

document.querySelector(".val15").addEventListener("click",function(){
	tip_amount = 15/100;
})

document.querySelector(".val20").addEventListener("click",function(){
	tip_amount = 20/100;
})

document.querySelector(".val25").addEventListener("click",function(){
	tip_amount = 25/100;
})


document.querySelector(".calculate").addEventListener("click",
	function(){
		user_val = document.querySelector("#val").value;
		final_user_bill = parseFloat(user_val);
		
		final_tip_amount = tip_amount*final_user_bill;

		final_bill_amount = final_tip_amount+final_user_bill;

		final_tip_amount = final_tip_amount.toFixed(2);
		final_bill_amount = final_bill_amount.toFixed(2);

		document.querySelector(".final-vals").style.display = "block";
		document.querySelector(".final-tip").style.display = "block";
		document.querySelector(".final-vals").innerHTML = `Bill Amount  <span>$${final_bill_amount}</span>`;
		document.querySelector(".final-tip").innerHTML = `Tip Amount  <span>$${final_tip_amount}</span>`;
	}
)