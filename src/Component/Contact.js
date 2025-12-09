
import React,{useState} from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

function Contact(args) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
    <div>
<footer class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible',animationDelay: '0.6s',animationName: 'fadeInLeft', }}>
                                <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form action="/" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" class="form-control memail" placeholder="Email"    style={{ marginBottom: '10px' }}/>
                                        <Button color="primary " onClick={toggle}> submit </Button>
                                        <Modal isOpen={modal} toggle={toggle} {...args}   >  
                                        <ModalHeader toggle={toggle} className="text-center"></ModalHeader>
                                            <ModalBody   className="text-center"> record has been submitted </ModalBody>
                                         </Modal>  
                                     
      
                                    <p class="mchimp-errmessage" style={{ display: 'none' }}></p>
                 <p class="mchimp-sucmessage" style={{ display: 'none' }}></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible',animationDelay: '0.6s',animationName: 'fadeInLeft', }}>
                               <Link to="/ABOUTuS"><h3 class="f-title f_600 t_color f_size_18">AboutUs</h3></Link> 
                                <ul class="list-unstyled f_list">
                                    <li><Link to="/">Company</Link></li>
                                    <li><Link to="/">Android App</Link></li>
                                    <li><Link to="/">ios App</Link></li>
                                    <li><Link to="/">Desktop</Link></li>
                                    <li><Link to="/">Projects</Link></li>
                                    <li><Link to="/">My tasks</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible',animationDelay: '0.6s',animationName: 'fadeInLeft', }}>
                               <Link to ="/Help"><h3 class="f-title f_600 t_color f_size_18">Help</h3></Link> 
                                <ul class="list-unstyled f_list">
                                    <li><Link to="/">FAQ</Link></li>
                                    <li><Link to="/">Term &amp; conditions</Link></li>
                                    <li><Link to="/">Reporting</Link></li>
                                    <li><Link to="/">Documentation</Link></li>
                                    <li><Link to="/">Support Policy</Link></li>
                                    <li><Link to="/">Privacy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible',animationDelay: '0.6s',animationName: 'fadeInLeft', }}>
                                <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div class="f_social_icon">
                                    <Link to="/" class="fab fa-facebook"></Link>
                                    <Link to="/" class="fab fa-twitter"></Link>
                                    <Link to="/" class="fab fa-linkedin"></Link>
                                    <Link to="/" class="fab fa-pinterest"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-sm-7">
                            <p class="mb-0 f_400">©MYNTRA.. 2023All rights reserved.</p>
                        </div>
                        <div class="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i class="icon_heart"></i> in <Link to="https://www.myntra.com/" target="_blank">MYNTRA COLLECTION</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>





    </div>
  )
}

export default Contact