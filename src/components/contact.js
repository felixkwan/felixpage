import React, { useState } from "react"
import Select from 'react-select';
import nesTheme from "react-select-nes-css-theme"; 

const StyledSelectComponent = () => {
  const [value, setValue] = useState();

  return (
    <Select
      value={value}
      styles={nesTheme} // HERE: Pass the theme object as a prop
      onChange={setValue}
      options={[
        { value: 0, label: 'I would like to have a brand new website' },
        { value: 1, label: 'It is time to renew my online store theme on shopify' },
        { value: 2, label: 'My company needs a new branding strategy and logo.'}
      ]}
    />
  );
};

const Contact = () => {

  return (
    <>
      <div className="wrapper">
      <section id="contact" style={{
        paddingTop:' 1.5rem',
        paddingBottom: '6.5rem',
      }}>

        <div className="has-border-top">
        </div>

        <div className="contact-form grid-4-6">
          <div className="muted"><h2>Contact</h2></div>
          <div>
            <div className="contact-item">
              <StyledSelectComponent/>
            </div>
            <div className="contact-item">
              <label htmlFor="name_field">Your name</label>
              <input type="text" id="name_field" className="nes-input"/>
            </div>

            <div className="contact-item">
              <label htmlFor="contact_field">Your email</label>
              <input type="text" id="contact_field" className="nes-input"/>
            </div>

            <div className="contact-item">
              <label htmlFor="company_field">Your company</label>
              <input type="text" id="company_field" className="nes-input" placeholder="Level Ninty Nine"/>
            </div>

            <div className="contact-item">
              <label htmlFor="textarea_field">Message</label>
              <textarea id="textarea_field" className="nes-textarea" style={{ height: '180px', }}></textarea>
            </div>

            <button style={{
              marginTop: '1.5rem',
            }} type="button" className="nes-btn is-primary">Submit</button>

          </div>

        </div>
        
      </section>
      </div>
    </>
  )
}

export default Contact
