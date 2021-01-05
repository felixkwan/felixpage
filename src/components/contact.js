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
      <section id="contact" style={{
        paddingRight: '2.5rem',
        paddingLeft: '2.5rem',
        paddingBottom: '5rem',
      }}>

        <div className="has-border-top">
        </div>

        <div style={{
          display: 'grid',
          width: '100%',
          gridTemplateColumns: '35% auto',
          paddingTop: '1rem',
        }}>
          <div className="muted"><h2>Contact</h2></div>
          <div style={{
            paddingTop: '.5rem',
          }}>
            <StyledSelectComponent/>

            <div className="nes-field">
              <label htmlFor="name_field">Your name</label>
              <input type="text" id="name_field" className="nes-input"/>
            </div>

            <div className="nes-field">
              <label htmlFor="contact_field">Your email</label>
              <input type="text" id="name_field" className="nes-input"/>
            </div>

            <div className="nes-field">
              <label htmlFor="company_field">Your company</label>
              <input type="text" id="name_field" className="nes-input" placeholder="Level Ninty Nine"/>
            </div>

            <div className="nes-field">
              <label htmlFor="textarea_field">Message</label>
              <textarea id="textarea_field" class="nes-textarea"></textarea>
            </div>

            <button style={{
              marginTop: '1.5rem',
            }} type="button" className="nes-btn is-primary">Submit</button>

          </div>

        </div>
        
      </section>
    </>
  )
}

export default Contact
