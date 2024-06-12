import React from 'react'
import './Searchbar.css'

function SearchBar() {
  return (
    <div class="filter-sec">
        
    <form >
    <div class="form-group row">
    <label for="input" class="col-sm-2 col-form-label">Going </label>
    <div class="col-sm-10">
      <input type="input" class="form-control" id="inputPassword" placeholder="Region city"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="input" class="col-sm-2 col-form-label">Search </label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword" placeholder="Hotel name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="input" class="col-sm-2 col-form-label">In </label>
    <div class="col-sm-10">
      <input type="input" class="form-control" id="inputPassword" placeholder="check-in"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="input" class="col-sm-2 col-form-label" > Out </label>
    <div class="col-sm-10">
      <input type="input" class="form-control" id="inputPassword" placeholder="check-out"/>
    </div>
  </div>


    </form>
  </div>


            
          
          

           
        
  )
}

export default SearchBar