import {useState} from 'react';

const Register = () => {
    //initial state using state hooks
    const [formData, setFormdata] = useState({
        fullname: '',
        email: '',
        password:''
    });
    //create callback on change function with e 
    const changeFormdata = (e)=>{
      
        setFormdata({
            ...formData,
            [e.target.name] : e.target.value
        });
        console.log(formData);
    };
    //submit handler
    const submitHandler =(e)=>{
        //prevent refreshing of page
        e.preventDefault();
        console.log(formData);
    };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input 
            onChange={changeFormdata}
            className="form-control" 
            type="text" 
            placeholder="Fullname" 
            value={formData.fullname}
            name="fullname"
            />
        </div>
        <div className="mb-3">
          <input
            onChange={changeFormdata}
            className="form-control"
            type="email"
            placeholder="account@facebook.com"
            value={formData.email}
            name="email"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeFormdata}
            className="form-control"
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">GET this for FREE!</button>
        </div>
      </form>
    </div>
  );
}

export default Register