"use client"

import {useRouter} from "next/navigation";

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;

    const data = {
      firstName,
      lastName,
      email,
      phone,
      password
    };

    const endpoint = 'http://localhost:3004/user';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    const response = await fetch(endpoint, options);

    response.json().then((res) => {
      router.push('users');
    })

  }
  return (
    <form className="w-full max-w-lg" data-testid="form-element">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="grid-first-name">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="first-name" type="text" placeholder="Jane" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="grid-last-name">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="last-name" type="text" placeholder="Doe" />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="grid-first-name">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email" type="email" placeholder="Jane" />
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="grid-phone">
            Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="phone" type="tel" placeholder="12344566" />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password" type="password" placeholder="******************" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <button onClick={(e) => handleSubmit(e)}>
        SEND
      </button>
    </form>
  )
}

export default  Form;
