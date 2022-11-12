const chooseExpenseAmount=document.getElementById("Choose expense amount");
const chooseDescription=document.getElementById("choose description");
const chooseAcategory=document.getElementById("choose a category");
function saveToLocalStorage(event){
	event.preventDefault();
	localStorage.setItem('chooseExpenseAmount',chooseExpenseAmount.value);
	localStorage.setItem('chooseDescription',chooseDescription.value);
	localStorage.setItem('chooseAcategory',chooseAcategory.value);
	const obj={
		chooseExpenseAmount,
		chooseDescription,
		chooseAcategory
	};
	localStorage.setItem(obj.chooseDescription.JSON.stringify(obj))
	showUserOnScreen(obj)

}
function showUserOnScreen(expense){
	const parentNode=document.getElementById("listOfExpenses");
	const childHTML=`<li>${chooseExpenseAmount}-${chooseDescription}-${chooseAcategory}</li>`;
	parentNode.inneHTML=parentNode.innerHTML + childHTML;
}
function deleteUser(expense){
	console.log()
	localStorage.removeItem();
	removeUserFromScreen(emailId);

}

function removeUserFromScreen(expense){
	const parentNode = document.getElementById('listOfExpenses');
	const childNodeToBeDeleted = document.getElementById();

	parentNode.removeChild(childNodeToBeDeleted)