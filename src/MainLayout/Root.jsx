import React from 'react';

const Root = () => {


  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password}
    console.log(user);

    fetch('http://localhost:5000/users', {
      method:"POST",
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  return (
    <div>
      <h1 className='text-3xl text-center my-5 font-bold'>Simple CRUD</h1>

      <div className="hero h-[560px]  bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add User</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Root;