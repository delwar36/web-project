import React from "react"
import classes from "./TermsPrivacy.module.css"
import axios from "../../../../axios"
import { Languages } from "../../../../../src/assets/langs"
import { TermsData } from "./Data";

export default class TermsConditions extends React.Component {
  constructor() {
    super()
    // this.fetchData = this.fetchData.bind(this)
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
    //   console.log(this.state.count++)
    // console.log(prevProps, prevState)
    if (prevState.selectedValue !== this.state.selectedValue) {
      // console.log('Api call')
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

  //   [
  //     "这是一个非常好的API",
  //     "to jest bardzo dobre API",
  //     "это очень хороший API",
  // ]
  fetchTranslatedData() {
    axios
      .post("/translate/translatedText", {
        text: TermsData,
        targetLanguage: this.state.selectedValue,
      })
      .then((response) => {
        this.setState({
          translation: response.data.data,
        })
      })
      .catch((error) => console.log(error))
  }
  //   fetchData() {
  //     // console.log("load hoise")
  //     axios
  //       .get("http://localhost:8889/translate/langs")
  //       .then((response) => {
  //         // console.log(response.data.data)
  //         this.setState({
  //           translated: response.data.data,
  //           isLoadedTranslated: true,
  //         })
  //       })
  //       .catch((error) => console.log(error))
  //   }
  render() {
    // console.log(this.state.translation)
    // console.log(this.state.selectedValue)

    // console.log(TermsData)
    let { translation } = this.state
    // console.log(translation.length)

    return (
      <div className={classes.TermsPrivacy}>
        <div className={classes.FloatDiv}>
          <div className={classes.TranslateSelect}>
            <div className={classes.Label}><span> Translate to</span></div>
            <div><select
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

          {/* {translation.length === 0 ? (
            <h5>Loading ... </h5>
          ) : (<h5>geting</h5>)} */}
          <div>
            <div className={classes.Header}>
              <h3>
                {/* 0 */}
                  TERMS AND CONDITIONS OF WWW.UMEDIAD.COM
                </h3>
            </div>

            <div className={classes.Divider1}></div>
            <span>Last update: September 22, 2020</span>
            <div className={classes.Divider1}></div>
            <div className={classes.MainSection}>
              <div>
                <h6>
                  {/* 1  */}
                  {translation.length === 0 ? TermsData[1] : translation[1]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 2 */}
                  {translation.length === 0
                    ? TermsData[2]
                    : translation[2]}{" "}
                    Jean Kindar Bury (the "Website").
                  </span>
                <div className={classes.Divider2}></div>

                <span>
                  {/* 3  */}
                  {translation.length === 0 ? TermsData[3] : translation[3]}
                </span>
              </div>
              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 4 */}
                  {translation.length === 0 ? TermsData[4] : translation[4]}
                  {/* 1. AGE RESTRICTION */}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 5  */}
                  {translation.length === 0 ? TermsData[5] : translation[5]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 6 */}
                  {translation.length === 0 ? TermsData[6] : translation[6]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 7  */}
                  {translation.length === 0 ? TermsData[7] : translation[7]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 8 */}
                  {translation.length === 0 ? TermsData[8] : translation[8]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 9  */}
                  {translation.length === 0 ? TermsData[9] : translation[9]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 10 */}
                  {translation.length === 0 ? TermsData[10] : translation[10]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 11  */}
                  {translation.length === 0 ? TermsData[11] : translation[11]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 12 */}
                  {translation.length === 0 ? TermsData[12] : translation[12]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 13  */}
                  {translation.length === 0 ? TermsData[13] : translation[13]}
                </span>
                <div className={classes.Divider2}></div>
                <div className={classes.AimsLayout}>
                  <ul>
                    <span>
                      {/* 14  */}
                      {translation.length === 0
                        ? TermsData[14]
                        : translation[14]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 15 */}
                      {translation.length === 0
                        ? TermsData[15]
                        : translation[15]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 16  */}
                      {translation.length === 0
                        ? TermsData[16]
                        : translation[16]}
                    </span>
                    <br />
                  </ul>
                </div>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 17 */}
                  {translation.length === 0 ? TermsData[17] : translation[17]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 18  */}
                  {translation.length === 0 ? TermsData[18] : translation[18]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 19  */}
                  {translation.length === 0 ? TermsData[19] : translation[19]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 20  */}
                  {translation.length === 0 ? TermsData[20] : translation[20]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 21  */}
                  {translation.length === 0 ? TermsData[21] : translation[21]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 22  */}
                  {translation.length === 0 ? TermsData[22] : translation[22]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 23 */}
                  {translation.length === 0 ? TermsData[23] : translation[23]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 24  */}
                  {translation.length === 0 ? TermsData[24] : translation[24]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 25 */}
                  {translation.length === 0 ? TermsData[25] : translation[25]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 26, 27  */}
                  {translation.length === 0 ? TermsData[26] : translation[26]}
                  {translation.length === 0 ? TermsData[27] : translation[27]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 28  */}
                  {translation.length === 0 ? TermsData[28] : translation[28]}
                </span>
                <div className={classes.Divider2}></div>
                <div className={classes.Link}>
                  <p>jeankindarbury@umediad.ca</p>
                </div>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 29  */}
                  {translation.length === 0 ? TermsData[29] : translation[29]}
                </span>
                <div className={classes.Divider2}></div>
                <div className={classes.Link}>
                  <p>rectification@umediad.com</p>
                </div>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 30 */}
                  {translation.length === 0 ? TermsData[30] : translation[30]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 31  */}
                  {translation.length === 0 ? TermsData[31] : translation[31]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 32 */}
                  {translation.length === 0 ? TermsData[32] : translation[32]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 33 */}
                  {translation.length === 0
                    ? TermsData[33]
                    : translation[33]}{" "}
                    Jean Kindar Bury.
                  </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 34 */}
                  {translation.length === 0 ? TermsData[34] : translation[34]}
                </span>
                <div className={classes.Divider2}></div>
                <div className={classes.AimsLayout}>
                  <ul>
                    <span>
                      {/* 35 */}
                        a){" "}
                      {translation.length === 0
                        ? TermsData[35]
                        : translation[35]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 36 */}
                        b){" "}
                      {translation.length === 0
                        ? TermsData[36]
                        : translation[36]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 37 */}
                        c){" "}
                      {translation.length === 0
                        ? TermsData[37]
                        : translation[37]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 38 */}
                        d){" "}
                      {translation.length === 0
                        ? TermsData[38]
                        : translation[38]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 39 */}
                        e){" "}
                      {translation.length === 0
                        ? TermsData[39]
                        : translation[39]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 40 */}
                        f){" "}
                      {translation.length === 0
                        ? TermsData[40]
                        : translation[40]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 41 */}
                        g){" "}
                      {translation.length === 0
                        ? TermsData[41]
                        : translation[41]}
                    </span>
                    <br />
                    <div className={classes.Divider2}></div>
                    <span>
                      {/* 42 */}
                        h){" "}
                      {translation.length === 0
                        ? TermsData[42]
                        : translation[42]}
                    </span>
                    <br />
                  </ul>
                </div>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 43 */}
                  {translation.length === 0 ? TermsData[43] : translation[43]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 44 */}
                  {translation.length === 0 ? TermsData[44] : translation[44]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 45 */}
                  {translation.length === 0 ? TermsData[45] : translation[45]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 46 */}
                  {translation.length === 0 ? TermsData[46] : translation[46]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 47 */}
                  {translation.length === 0 ? TermsData[47] : translation[47]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 48 */}
                  {translation.length === 0 ? TermsData[48] : translation[48]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 49 */}
                  {translation.length === 0 ? TermsData[49] : translation[49]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 50 */}
                  {translation.length === 0 ? TermsData[50] : translation[50]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 51 */}
                  {translation.length === 0 ? TermsData[51] : translation[51]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 52 */}
                  {translation.length === 0 ? TermsData[52] : translation[52]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 53 */}
                    a){" "}
                  {translation.length === 0 ? TermsData[53] : translation[53]}
                </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 54 */}
                    b){" "}
                  {translation.length === 0 ? TermsData[54] : translation[54]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 55 */}
                  {translation.length === 0 ? TermsData[55] : translation[55]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 56 */}
                  {translation.length === 0 ? TermsData[56] : translation[56]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 57 */}
                  {translation.length === 0 ? TermsData[57] : translation[57]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 58 */}
                    You defend and indemnify Jean Kindar Bury
                    {translation.length === 0 ? TermsData[58] : translation[58]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 59 */}
                  {translation.length === 0 ? TermsData[59] : translation[59]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 60 */}
                  {translation.length === 0 ? TermsData[60] : translation[60]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 61 */}
                  {translation.length === 0 ? TermsData[61] : translation[61]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 62 */}
                  {translation.length === 0 ? TermsData[62] : translation[62]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 63 */}
                  {translation.length === 0 ? TermsData[63] : translation[63]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 64 */}
                  {translation.length === 0 ? TermsData[64] : translation[64]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 65 */}
                  {translation.length === 0 ? TermsData[65] : translation[65]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 66 */}
                  {translation.length === 0 ? TermsData[66] : translation[66]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 67 */}
                  {translation.length === 0 ? TermsData[67] : translation[67]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 68 */}
                  {translation.length === 0 ? TermsData[68] : translation[68]}
                </span>
              </div>

              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 69 */}
                  {translation.length === 0 ? TermsData[69] : translation[69]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 70 */}
                  {translation.length === 0 ? TermsData[70] : translation[70]}
                </span>
              </div>
              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 71 */}
                  {translation.length === 0 ? TermsData[71] : translation[71]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 72 */}
                  {translation.length === 0 ? TermsData[72] : translation[72]}
                    www.umediad.com/privacy-policy.
                  </span>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 73 */}
                  {translation.length === 0 ? TermsData[73] : translation[73]}
                </span>
              </div>
              <div className={classes.Divider1}></div>
              <div>
                <h6>
                  {/* 74 */}
                  {translation.length === 0 ? TermsData[74] : translation[74]}
                </h6>
                <div className={classes.Divider2}></div>
                <span>
                  {/* 75 */}
                  {translation.length === 0 ? TermsData[75] : translation[75]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default TermsConditions;
