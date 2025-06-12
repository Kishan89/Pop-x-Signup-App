import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SignupPage.css"
import Footer from "./Footer"

const SignupPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agency: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(formData))
    navigate("/account", {
      state: {
        fullName: formData.fullName,
        email: formData.email
      }
    })
  }

  return (
    <>
      <div className="signup-page-wrapper">
        <div className="signup-container">
          <h2>Create your</h2>
          <h3>PopX account</h3>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label>
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>
              Phone number<span className="required">*</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>
              Email address<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Company name</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />

            <p>
              Are you an Agency?<span className="required">*</span>
            </p>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  onChange={handleChange}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  onChange={handleChange}
                  required
                />{" "}
                No
              </label>
            </div>

            <button className="primary-btn" type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignupPage
