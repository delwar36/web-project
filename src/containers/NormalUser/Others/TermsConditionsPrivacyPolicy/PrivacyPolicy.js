import React from "react"
import classes from "./TermsPrivacy.module.css"
import axios from "../../../../axios"
import { Languages } from "../../../../../src/assets/langs"
import { PolicyData } from "./Data";

export default class PrivacyPolicy extends React.Component {
   constructor() {
      super()
      this.handleChange = this.handleChange.bind(this)
      this.fetchTranslatedData = this.fetchTranslatedData.bind(this)
      this.state = {
         translation: [],
         selectedValue: "en",
      }
   }
   componentDidMount() {
      window.scroll(0, 0)
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevState.selectedValue !== this.state.selectedValue) {
         //  console.log("Api call")
         this.fetchTranslatedData()
         // console.log(Languages)
      }
      // console.log("UPDATE")
   }

   handleChange(e) {
      this.setState({
         selectedValue: e.target.value,
      })
   }

   fetchTranslatedData() {
      axios
         .post("/translate/translatedText", {
            text: PolicyData,
            targetLanguage: this.state.selectedValue,
         })
         .then((response) => {
            this.setState({
               translation: response.data.data,
            })
         })
         .catch((error) => console.log(error))
   }

   render() {
      let { translation } = this.state;
      return (
         <div className={classes.TermsPrivacy}>
            <div className={classes.FloatDiv}>
               <div className={classes.TranslateSelect}>
                  <div className={classes.Label}><span> Translate to</span></div>
                  <div>
                     <select
                     className={classes.DownArrow}
                     value={this.state.selectedValue}
                     onChange={this.handleChange}
                  >
                     {Languages.map((lang) => (
                        <option key={lang[1]} value={lang[1]}>
                           {lang[0]}
                        </option>
                     ))}
                  </select>
                  </div>
               </div>
            </div>
            <br />
            <br />
            <div className={classes.Main}>
               <div className={classes.Header}>
                  <h3>PRIVACY POLICY</h3>
               </div>
               <div className={classes.Divider1}></div>
               <div className={classes.SubHeader}>
                  <p>This Privacy Policy applies to: umediad.com</p>
               </div>
               <div className={classes.Divider2}></div>
               <span>Last update: September 22, 2020</span>
               <div className={classes.Divider1}></div>
               <span>
                  {translation.length === 0 ? PolicyData[0] : translation[0]}
               </span>
               <div className={classes.Divider2}></div>
               <span>
                  {translation.length === 0 ? PolicyData[1] : translation[1]}
               </span>
               <div className={classes.Divider2}></div>
               <div className={classes.AimsLayout}>
                  <ul>
                     <li>
                        {translation.length === 0 ? PolicyData[2] : translation[2]}
                     </li>
                     <li>{translation.length === 0 ? PolicyData[3] : translation[3]}</li>
                     <li>
                        {translation.length === 0 ? PolicyData[4] : translation[4]}
                     </li>
                     <li>{translation.length === 0 ? PolicyData[5] : translation[5]}</li>
                     <li>
                        {translation.length === 0 ? PolicyData[6] : translation[6]}
                     </li>
                  </ul>
               </div>
               <div className={classes.Divider2}></div>
               <div>
                  <span>
                     {translation.length === 0 ? PolicyData[7] : translation[7]}
                  </span>
                  <div className={classes.Divider2}></div>
                  <div className={classes.Link}>
                     {" "}
                     <p>www.umediad.com/terms-and-conditions</p>
                  </div>
               </div>
               <div className={classes.Divider1}></div>
               <div className={classes.MainSection}>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[8] : translation[8]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>{translation.length === 0 ? PolicyData[9] : translation[9]}</span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>Last Name</li>
                           <li>First name</li>
                           <li>Mailing address</li>
                           <li>Postal code</li>
                           <li>Email address</li>
                           <li>Phone and/or fax number</li>
                           <li>Credit card number</li>
                           <li>Gender</li>
                           <li>Date of birth/age</li>
                           <li>Social/ethnic background</li>
                           <li>Occupation</li>
                           <li>Income/financial resources</li>
                           <li>Preferences (literature, music, films...)</li>
                           <li>Driver licence number</li>
                           <li>Other:</li>
                           <span>ID Numbers</span>
                        </ul>
                     </div>
                  </div>
                  <div className={classes.Divider1}></div>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[10] : translation[10]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[11] : translation[11]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>Website registration form</li>
                           <li>Order form</li>
                           <li>Survey form</li>
                           <li>Contest</li>
                        </ul>
                     </div>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[12] : translation[12]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>Order tracking</li>
                           <li>Special offers</li>
                           <li>Statistics</li>
                           <li>Contact</li>
                           <li>Managing the website</li>
                           <li>Other:</li>
                           <span>- Employee Training</span>
                           <br />
                           <span>- Regulatory requirements</span>
                        </ul>
                     </div>
                  </div>
                  <div className={classes.Divider1}></div>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[13] : translation[13]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[14] : translation[14]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>Forum</li>
                           <li>Comments</li>
                           <li>Correspondence</li>
                           <li>Information for promotional offers</li>
                           <li> Other:</li>
                           <span>
                              - Publication of the users on the website and Apps
                           </span>
                           <br />
                           <span>
                              - Correspondence with the website manager
                           </span>
                        </ul>
                     </div>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[15] : translation[15]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>Statistics</li>
                           <li>Contact</li>
                           <li>Website management</li>
                           <li>Other:</li>
                           <span>- Regulatory requirements</span>
                        </ul>
                     </div>
                  </div>
                  <div className={classes.Divider1}></div>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[16] : translation[16]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[17] : translation[17]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[18] : translation[18]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[19] : translation[19]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <strong>a) Cookies {translation.length === 0 ? PolicyData[20] : translation[20]}</strong>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[21] : translation[21]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>IP address</li>
                           <li>Operating system</li>
                           <li>Pages visited and queries</li>
                           <li>Day and time of connection</li>
                           <li>Other:</li>
                           <span>
                              - Provenance of users and visitors of the website
                              and apps
                           </span>
                        </ul>
                     </div>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[22] : translation[22]}
                     </span>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>
                              {translation.length === 0 ? PolicyData[23] : translation[23]}
                           </li>
                           <li>{translation.length === 0 ? PolicyData[24] : translation[24]}</li>
                           <li>{translation.length === 0 ? PolicyData[25] : translation[25]}</li>
                           <li>{translation.length === 0 ? PolicyData[26] : translation[26]}</li>
                           <li>{translation.length === 0 ? PolicyData[27] : translation[27]}</li>
                           <span>- {translation.length === 0 ? PolicyData[28] : translation[28]}</span>
                           <br />
                           <span>- {translation.length === 0 ? PolicyData[29] : translation[29]}</span>
                        </ul>
                     </div>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[30] : translation[30]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <span>- Managers</span>
                           <br />
                           <span>- Partners</span>
                        </ul>
                     </div>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[31] : translation[31]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[32] : translation[32]}
                     </span>
                     <div className={classes.Divider1}></div>
                     <strong>
                        b) {translation.length === 0 ? PolicyData[33] : translation[33]}
                     </strong>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[34] : translation[34]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[35] : translation[35]}
                     </span>
                     <div className={classes.Divider2}></div>
                  </div>
                  <div className={classes.Divider1}></div>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[36] : translation[36]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[37] : translation[37]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.AimsLayout}>
                        <ul>
                           <li>Consumption profils</li>
                           <li>Order fulfillment</li>
                           <li>Partnership</li>
                           <li>Advertising</li>
                           <li>Other:</li>
                           <span>- Regulatory requirements</span>
                        </ul>
                     </div>
                  </div>
                  <div className={classes.Divider1}></div>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[38] : translation[38]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[39] : translation[39]}
                     </span>
                     <div className={classes.Divider2}></div>
                  </div>
                  <div className={classes.Divider1}></div>
                  <div>
                     <h6>{translation.length === 0 ? PolicyData[40] : translation[40]}</h6>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[41] : translation[41]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <div className={classes.Link}>
                        {" "}
                        <p>
                           Canada 5063 North Service Road Suite 100 Burlington,
                           ON L7L 5H6.
                        </p>
                     </div>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[42] : translation[42]}
                        1-888-959-PAPA [7272] / 1(905) 315-345.
                     </span>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[43] : translation[43]}
                     </span>
                     <div className={classes.Divider2}></div>
                     <span>
                        {translation.length === 0 ? PolicyData[44] : translation[44]}
                     </span>

                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>{translation.length === 0 ? PolicyData[45] : translation[45]}</h6>
                        <div className={classes.Divider2}></div>
                        <strong>a) {translation.length === 0 ? PolicyData[46] : translation[46]}</strong>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[47] : translation[47]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <div className={classes.Link}>
                           <span>Name-Md.Rahat mia.</span>
                           <br />
                           <span>
                              Address-bhaluka, mymensingh, dhaka. Bangladesh
                           </span>
                           <div className={classes.Divider2}></div>
                           <span>Phone- +8801713223213</span>
                           <br />
                           <span>Gamil-innovexit.net@gmail.com</span>
                        </div>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[48] : translation[48]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <strong>b) {translation.length === 0 ? PolicyData[49] : translation[49]}</strong>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[50] : translation[50]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[51] : translation[51]}
                        </span>
                     </div>
                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>{translation.length === 0 ? PolicyData[52] : translation[52]}</h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[53] : translation[53]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[54] : translation[54]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <div className={classes.Link}>
                           <p>Send email at controller@umediad.com</p>
                        </div>
                     </div>
                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>
                           {translation.length === 0 ? PolicyData[55] : translation[55]}
                        </h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[56] : translation[56]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <div className={classes.Link}>
                           <p>Send email at rectification@umediad.com</p>
                        </div>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[57] : translation[57]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <div className={classes.Link}>
                           <p>Send email at rectification@umediad.com</p>
                        </div>
                     </div>

                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>
                           {translation.length === 0 ? PolicyData[58] : translation[58]}
                        </h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[59] : translation[59]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <div className={classes.AimsLayout}>
                           <ul>
                              <li>
                                 {translation.length === 0 ? PolicyData[60] : translation[60]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[61] : translation[61]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[62] : translation[62]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[63] : translation[63]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[64] : translation[64]}
                              </li>
                           </ul>
                        </div>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[65] : translation[65]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <div className={classes.AimsLayout}>
                           <ul>
                              <li>{translation.length === 0 ? PolicyData[66] : translation[66]}</li>
                              <li>
                                 {translation.length === 0 ? PolicyData[67] : translation[67]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[68] : translation[68]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[69] : translation[69]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[70] : translation[70]}
                              </li>
                              <li>
                                 {translation.length === 0 ? PolicyData[71] : translation[71]}
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>
                           {translation.length === 0 ? PolicyData[72] : translation[72]}
                        </h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[73] : translation[73]} Jean
                           Kindar BURY.
                        </span>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[74] : translation[74]}
                        </span>

                        <div className={classes.Divider2}></div>

                        <div className={classes.Link}>
                           <p>Phone 438 -407-9841 jeankindarbury@hotmail.com</p>
                        </div>
                     </div>

                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>
                           {translation.length === 0 ? PolicyData[75] : translation[75]}
                        </h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[76] : translation[76]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[77] : translation[77]}
                        </span>

                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[78] : translation[78]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <strong>
                           a) {translation.length === 0 ? PolicyData[79] : translation[79]}
                        </strong>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[80] : translation[80]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <div className={classes.Link}>
                           <p>Send email at controller@umediad.com</p>
                        </div>
                        <div className={classes.Divider2}></div>
                        <strong>
                           b) {translation.length === 0 ? PolicyData[81] : translation[81]}
                        </strong>
                        <div className={classes.Divider2}></div>

                        <span>
                           {translation.length === 0 ? PolicyData[82] : translation[82]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <strong>
                           c) {translation.length === 0 ? PolicyData[83] : translation[83]}
                        </strong>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[84] : translation[84]}
                        </span>
                     </div>

                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>{translation.length === 0 ? PolicyData[85] : translation[85]}</h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[86] : translation[86]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[87] : translation[87]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <div className={classes.AimsLayout}>
                           <ul>
                              <li>SSL (Security Sockets Layer) Protocol</li>
                              <li>Automatic backup</li>
                              <li>Username/password</li>
                           </ul>
                        </div>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[88] : translation[88]}
                        </span>
                     </div>

                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>
                           {translation.length === 0 ? PolicyData[89] : translation[89]}
                        </h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[90] : translation[90]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <span>
                           {translation.length === 0 ? PolicyData[91] : translation[91]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <span>
                           {translation.length === 0 ? PolicyData[92] : translation[92]}
                        </span>
                     </div>
                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>{translation.length === 0 ? PolicyData[93] : translation[93]}</h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[94] : translation[94]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <div className={classes.Link}>
                           <p>www.umediad.com/privacy-policy</p>
                        </div>
                        <div className={classes.Divider2}></div>

                        <span>
                           {translation.length === 0 ? PolicyData[95] : translation[95]}
                        </span>
                        <div className={classes.Divider2}></div>

                        <span>
                           {translation.length === 0 ? PolicyData[96] : translation[96]}
                        </span>
                     </div>
                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>{translation.length === 0 ? PolicyData[97] : translation[97]}</h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[98] : translation[98]}
                        </span>
                     </div>
                     <div className={classes.Divider1}></div>
                     <div>
                        <h6>{translation.length === 0 ? PolicyData[99] : translation[99]}</h6>
                        <div className={classes.Divider2}></div>
                        <span>
                           {translation.length === 0 ? PolicyData[100] : translation[100]}
                        </span>
                        <div className={classes.Divider2}></div>
                        <span className={classes.Italic}>
                           Personal Information Protection and Electronic
                           Documents Act,
                        </span>
                        <span> SC 2000, c 5; and/or</span>
                        <div className={classes.Divider2}></div>
                        <span className={classes.Italic}>
                           Act Respecting the Protection of Personal Information
                           in the Private Sector,
                        </span>
                        <span> CQLR cP-39.1 ; and</span>
                        <div className={classes.Divider2}></div>

                        <span className={classes.Italic}>
                           General Data Protection Regulation,
                        </span>
                        <span>
                           {" "}
                           Regulation (EU) 2016/679 of the European Parliament
                           and the Council of 27 April 2016 for the protection
                           of natural persons with regard to the processing of
                           personal data and on the free movement of such data,
                           and repealing Directive 95/46/EC.
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

// export default PrivacyPolicy;
