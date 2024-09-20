function Todoitem({todoitem,tododate}){
return<div className="row kgrow">
<div className="col-6">
<h1>{todoitem}</h1>
</div>
<div className="col-4">
<h1>{tododate}</h1>
</div>
<div className="col-2">
<button type="button" className="btn btn-danger kgbutton">Delete</button>
</div>
</div>
}
export default Todoitem;