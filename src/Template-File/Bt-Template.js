import React from "react";
import { Container } from 'react-bootstrap';
import './Template-File/Bt-Template.css'

class Section extends React.Component {
  render() {
      return (
          <>
              <nav id="navbar-example2" class="navbar bg-body-tertiary " >
                  <a class="navbar-brand head" href="#" id="#top">MEDICARE</a>
                  <ul class="nav nav-pills">
                      <li class="nav-item">
                          <a class="nav-link" href="#scrollspyHeading1">PATIENT SERVICES</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#scrollspyHeading2">MEDICAL <br/>SERVICES</a>
                      </li> 
                      <li class="nav-item dropdown ">
                          <a class="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button"
                              aria-expanded="false">DROPDOWN</a>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#scrollspyHeading3">PREVENTIVE SERVICES</a></li>
                              <li><a class="dropdown-item" href="#scrollspyHeading4">OUR SERVICES</a></li>
                              <li><hr class="dropdown-divider" /></li>
                              <li><a class="dropdown-item" href="#scrollspyHeading5">DENTAL CARE</a></li>
                              <li><a class="dropdown-item" href="#scrollspyHeading6">PRIMARY CARE</a></li>
                              <li><hr class="dropdown-divider" /></li>
                              <li><a class="dropdown-item" href="#scrollspyHeading7">LET'S CONNECT</a></li>
                              <li><a class="dropdown-item" href="#scrollspyHeading8">FOOTER</a></li>
                          </ul>
                      </li>
                  </ul>
                  <button class="btn btn-primary m-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling">MENU</button>
              </nav>
          </>
      )
  }
}


class Section1 extends React.Component
{
  render(){
    return(
      <Container className="text-end " id="scrollspyHeading1">


                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu List</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p><a href="#about">About</a></p><br />
                        <p><a href="#contact">contact</a></p><br />

                    </div>
                </div>
                <div class="card bg">
                    <div class="card-body " className="height">
                        <h1 class="p-3">PATIENT  SERVICES</h1>
                        <p class="card-text p-3">We provide the broadest range of accredited, innovative patient services</p>
                    </div>
                </div>
            </Container>
    )
  }
}

class Section2 extends React.Component {
  render() {
      return (
          <div class="container text-center" id="scrollspyHeading2">
              <h1 class="card-title m-5">MEDICAL SERVICES</h1>
              <p class="m-3">Our Center offers you and your family the complete range of healthcare services. </p>
              <div class="row">
                  <div class="col">
                      <div class="card bg-success-subtle">
                          <div class="card-body ">
                              <h2 class="card-title text-success-emphasis m-4">FAMILY CARE</h2>
                              <p class="card-text text">Our doctors, nurses, and clinic staff work together to provide friendly, personalized
                                  care to all members of your family, from birth to age 100+.</p>
                              <a href="#" class="btn btn-primary m-3">Go somewhere</a>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card bg-success-subtle">
                          <div class="card-body ">
                              <h2 class="card-title text-success-emphasis m-4">URGENT CARE</h2>
                              <p class="card-text text">From walk-in care, same-day appointments to online visits with OnCare,
                                  we’ll take good care of you. If you are experiencing an emergency</p>
                              <a href="#" class="btn btn-primary m-3">Go somewhere</a>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card bg-success-subtle">
                          <div class="card-body ">
                              <h2 class="card-title text-success-emphasis m-4">PEDIATRIC</h2>
                              <p class="card-text text">Our care team has earned a reputation for providing expert care to kids,
                                  including treating many complex conditions. If your child needs an even</p>
                              <a href="#" class="btn btn-primary m-3">Go somewhere</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">

                  <div class="col">
                      <div class="card bg-success-subtle">
                          <div class="card-body ">
                              <h2 class="card-title text-success-emphasis m-4">LAB SERVICES</h2>
                              <p class="card-text text">We can help you know what to expect before, during and after your test. Use this information,
                                  and always follow the directions your physician’s office gives.</p>
                              <a href="#" class="btn btn-primary m-3">Go somewhere</a>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card bg-success-subtle">
                          <div class="card-body ">
                              <h2 class="card-title text-success-emphasis m-4">SURGERY</h2>
                              <p class="card-text text">With pioneering medical research achievements, education programs defining
                                  the future of healthcare, and wide-ranging community benefit,</p>
                              <a href="#" class="btn btn-primary m-3">Go somewhere</a>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card bg-success-subtle">
                          <div class="card-body ">
                              <h2 class="card-title text-success-emphasis m-4">PALLIATIVE CARE</h2>
                              <p class="card-text text">Palliative care is active comprehensive care of the physical, psychological, emotional
                                  , and spiritual needs of patients who have chronic, debilitating</p>
                              <a href="#" class="btn btn-primary m-3">Go somewhere</a>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      )
  }
}

class Section3 extends React.Component {
  render() {
      return (
          <div class="container bg-success-subtle" id="scrollspyHeading3">
              <h1 class="p-3 text-center">PREVENTIVE SERVICES</h1>
              <div class="row">
                  <div class="col ">
                      <img class="img-fluid p-5" src="https://lh3.googleusercontent.com/9EF7jdyq0TE_xNhvyCQKd-Ps7cLzxTZK5SzqLdJqbGccTLHw2EyqcxUlAhSh3lYReW7FfWFj8qNnhhgt8qn4b3WdG_AvMIN7ZFnG3etH" />
                  </div>
                  <div class="col ">
                      <ul class="list-group text-right p-5 text">
                          <li >DENTURES</li> <br />
                          <li >EXTRACTIONS</li><br />
                          <li >GUM TREATMENT</li><br />
                          <li >IMPLANTS</li><br />
                          <li >ORAL SURGERY</li><br />
                          <li >LAMINATES</li><br />
                          <li >TOOTH WHITENING</li><br />
                          <li >TOOTH FIXING</li><br />
                      </ul>
                  </div>
                  <div class="col text-left p-5 text">
                      <h4>Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.  Velit ut tortor pretium
                          viverra suspendisse potenti. Ut enim blandit  volutpat maecenas volutpat blandit aliquam.
                          Vel fringilla est ullamcorper eget nulla.</h4>
                      <button class="btn btn-primary p-3 m-5">BOOK APPOINTMENT</button>
                  </div>
              </div>
          </div>
      )
  }
}

class Section4 extends React.Component {
  render() {
      return (
          <div class="container text-center" id="scrollspyHeading4">
              <div class="container text-center">
                  <div class="row">
                      <div class="col">
                          <div class="card p-5">
                              <div class="card-header">
                                  OUR SERVICES
                              </div>
                              <div class="card-body">
                                  <h1 class="card-title">SPECIFIC GOALS FOR THERAPY WILL BE DETERMINED BY YOU AND YOUR THERAPIST</h1>
                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                          </div>
                      </div>
                      <div class="col">
                          <p class="m-5 p-5 text">Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ac tortor
                              dignissim convallis aeneanet tortor at risus viverra.Nec feugiat in fermentum posuere urnanec
                              tincidunt praesent.Venenatis lectus magna fringilla urna porttitor rhoncus. Nam aliquam sem et
                              tortor consequatid porta nibh. Urna et pharetra pharetra massa massa.</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <h3 class="p-3">OUR MISSION</h3>
                      <p class="p-3 text">Making professional counseling accessible, affordable, convenient - so
                          anyone who struggles with life’s challenges can get help, anytime, anywhere.</p>
                  </div>
                  <div class="col">
                      <h3 class="p-3">OUR COUNSELORS</h3>
                      <p class="p-3 text">We are passionate and compassionate professionals, driven by the mission
                          of helping more people live a better and happier life every day. </p>
                  </div>
                  <div class="col">
                      <h3 class="p-3">OUR SUPPORT</h3>
                      <p class="p-3 text">Our support team is always here to answer any question and resolve
                          any problem. Vitae tortor condimentum. Just contact us!</p>
                  </div>
              </div>
          </div>
      )
  }
}


class Section5 extends React.Component {
  render() {
      return (
          <div class="container text-center bg-success-subtle" id="scrollspyHeading5">
              <h1 class="card-title  p-5">DENTAL CARE</h1>
              <p class="m-3">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
                  sagittis suscipit ultrices. </p>
              <div class="row">
                  <div class="col m-5">
                      <img class="img-fluid" src="https://st3.depositphotos.com/4431055/35558/i/450/depositphotos_355581866-stock-photo-big-tooth-model-toothbrush-dentist.jpg" />
                      <h3 class="p-3">GENERAL INFORMATION</h3>
                      <p class="p-3 text">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
                          sagittis suscipit ultrices.</p>
                  </div>
                  <div class="col m-5">
                      <img class="img-fluid" src="https://img.freepik.com/premium-photo/doctor-s-hand-shows-tooth-dentist-mirror_488220-21291.jpg?w=996" />
                      <h3 class="p-3">CHILD DENTAL HEALTH</h3>
                      <p class="p-3 text">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
                          sagittis suscipit ultrices. </p>
                  </div>
                  <div class="col m-5">
                      <img class="img-fluid" src="https://3.imimg.com/data3/LJ/FG/MY-12297514/tooth-whitening-treatment-service-1000x1000.png" />
                      <h3 class="p-3">DIAGNOSIS AND TESTS</h3>
                      <p class="p-3 text">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
                          sagittis suscipit ultrices.</p>
                  </div>
              </div>
          </div>
      )
  }
}


class Section6 extends React.Component {
  render() {
      return (
          <div class="card text-center   p-5" id="scrollspyHeading6">
              <div class="card-body">
                  <img class="img-fluid" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61bwYtWrytL._UY879_.jpg" />
                  <h1 class="card-title">DIRECT PRIMARY CARE</h1>
                  <p class="card-text text">Direct Primary Care is a modern healthcare model which makes
                      managing your healthcare so much easier and more affordable.</p>
                  <button class="btn btn-primary" type="button">BOOK APPOINTMENT</button>
              </div>
          </div>
      )
  }
}


class Section7 extends React.Component {
  render() {
      return (
          <div class="container text-center  bg-success-subtle" id="scrollspyHeading7">
              <h1 class="card-title m-5">LET'S CONNECT</h1>
              <div class="row" id="about">
                  <div class="col m-5">
                      <h4>OUR MAIN OFFICE</h4>
                      <p>SoHo 94 Broadway St New York, <br /> NY 1001</p>
                  </div>
                  <div class="col m-5">
                      <h4>PHONE NUMBER</h4>
                      <p>234-9876-5400 <br />
                          888-0123-4567 (Toll Free)</p>
                  </div>
                  <div class="col m-5">
                      <h4>FAX</h4>
                      <p>1-234-567-8900</p>
                  </div>
                  <div class="col m-5">
                      <h4>MAIL</h4>
                      <p>hello@theme.com</p>
                  </div>
              </div>

              <div class="container ">
                  <h5 class="card-title">GET A FREE CASE EVALUATION TODAY!</h5>
                  <p class="m-3">AVAILABLE 24 HOURS A DAY!</p>
                  <div class="row">
                      <div class="col" id="contact">
                          <form class="row g-3 needs-validation" novalidate>
                              <div class="col-md-4">
                                  <label for="validationCustom01" class="form-label">First name</label>
                                  <input type="text" class="form-control" id="validationCustom01" value="" required></input>
                                  <div class="valid-feedback">
                                      Looks good!
                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <label for="validationCustom02" class="form-label">Last name</label>
                                  <input type="text" class="form-control" id="validationCustom02" value="" required></input>
                                  <div class="valid-feedback">
                                      Looks good!
                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <label for="validationCustomUsername" class="form-label">Gmail </label>
                                  <div class="input-group has-validation">
                                      <span class="input-group-text" id="inputGroupPrepend">@</span>
                                      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                                      <div class="invalid-feedback">
                                          Please choose a username.
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <label for="validationCustom03" class="form-label">City</label>
                                  <input type="text" class="form-control" id="validationCustom03" required></input>
                                  <div class="invalid-feedback">
                                      Please provide a valid city.
                                  </div>
                              </div>
                              <div class="col-md-3">
                                  <label for="validationCustom04" class="form-label">State</label>
                                  <select class="form-select" id="validationCustom04" required>
                                      <option selected disabled value="">Choose...</option>
                                      <option>United States</option>
                                      <option>Mexico</option>
                                      <option>Caneada</option>
                                      <option>India</option>
                                      <option>United Kingdom</option>
                                  </select>
                                  <div class="invalid-feedback">
                                      Please select a valid state.
                                  </div>
                              </div>
                              <div class="col-md-3">
                                  <label for="validationCustom05" class="form-label">Zip</label>
                                  <input type="text" class="form-control" id="validationCustom05" required></input>
                                  <div class="invalid-feedback">
                                      Please provide a valid zip.
                                  </div>
                              </div>
                              <div class="form-floating">
                                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                  <label for="floatingTextarea">Comments</label>
                              </div>
                              <div class="col-12">
                                  <div class="form-check text-start">
                                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                      <label class="form-check-label " for="invalidCheck">
                                          Agree to terms and conditions
                                      </label>
                                      <div class="invalid-feedback">
                                          You must agree before submitting.
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <button class="btn btn-primary" type="submit">Submit form</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}


class Section8 extends React.Component {
  render() {
      return (
          <div class="card text-center p-5  bg-dark" id="scrollspyHeading8">
              <div class="text-light">
                  <p>Sample text. Click to select the text box. Click again or double <br /> click to start editing the text.</p>
                  <p><a href="">Website Template</a> Created With <a href="">Website Builder Software</a></p>

                  <a href="top" class="btn btn-primary text-end">TOP</a>
              </div>
          </div>
      )
  }
}


function WebView(){
  return(
    <>
    <Section/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    </>
  )
}

export default WebView;