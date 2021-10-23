import React,{useState} from 'react'
import '../App.css'

function Form() {
    const [inputValue, setValue] = useState({
        fname:"",
        lname:"",
        contact:"",
        email:"",
        yrs:"",
        org:"",
        domain:"",
        skills:""
    });
    const onChangeHandler = (event) => {
        const name=event.target.name;
        const value=event.target.value;
        console.log(name,value);

        setValue({...inputValue,[name]:value});
      };

    return (
        <div className="form-horizontal">
            <form>
             <div className="form-group">
          <h3 class="col-sm-offset-2 col-sm-10">  RESUME</h3>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="fname" required>First Name :</label>
          <div className="col-sm-10">
          <input id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName" value={inputValue.fname} onChange={onChangeHandler}/>
          </div>
          </div>
          <div className="form-group">
              <label className="control-label col-sm-2" for="lname">Last Name </label>
              <div className="col-sm-10">
          <input id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName" value={inputValue.lname} onChange={onChangeHandler}/>
          </div>
        </div>
        <div className="form-group"> 
              <label className="control-label col-sm-2" for="contact">Contact Number :  </label>
              <div className="col-sm-10">
          <input id="contact" class="form-field" type="tel" placeholder="Contact Number" name="Contact"/>
        </div>
        </div>
        <div className="form-group">
              <label className="control-label col-sm-2" for="email">Email :  </label>
              <div className="col-sm-10">
          <input id="email" class="form-field" type="email" placeholder="Email" name="Email"/>
        </div>
        </div>
        <div className="form-group">
        <label className="control-label col-sm-2" for="yrs">Years of Experience:   </label>
        <div className="col-sm-10">
<select name="yrs" id="yrs">
<option value="0">Less than one year</option>
  <option value="1">1+</option>
  <option value="2">2+</option>
  <option value="3">3+</option>
  <option value="4">4+</option>
  <option value="5">5+</option>
</select>
</div>
</div>
<div className="form-group">
        <label className="control-label col-sm-2" for="Previous Organization">Previous Organization :  </label>
        <div className="col-sm-10">
          <input id="org" class="form-field" type="text" placeholder="Previous Organization" name=""/>
        </div>
        </div>
<div className="form-group">
<label className="control-label col-sm-2" for="domain">Domain:   </label>
<div className="col-sm-10">
<select name="domain" id="domain">
<option value="1">Networking</option>
  <option value="2">Automation Testing</option>
  <option value="3">Manual Testing</option>
  <option value="4">Software Development</option>
  <option value="5">Management</option>

</select>
</div>

</div>
<div className="form-group">
<label className="control-label col-sm-2" for="Skills">Skills:   </label>
<div className="col-sm-10"> <textarea></textarea></div>
</div>
<div className="form-group">
<div class="col-sm-offset-2 col-sm-10">
    <button className="btn btn-default" type="submit">Submit</button>
</div>
</div>
</form>
        </div>
    )
}


export default Form

