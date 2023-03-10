import React, {Component} from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from 'yup';

const fields= {
    sections: [
    [
        {name:'name', elementName:'input', type: 'text', placeholder:'Your name'},
        {name:'email', elementName:'input', type: 'email', placeholder:'Your email'},
        {name:'phone', elementName:'input', type: 'text', placeholder:'Your phone number'},
    ],
    [
        {name:'message', elementName:'textarea', type: 'text', placeholder:'Type your message'},
    ]
]
}



class Contact extends Component{


    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={this.props.handleSubmit} id="contactForm"  name='sentMessage' noValidate='novalidate'>
                        <div className="row align-items-stretch mb-5">

                            {
                                fields.sections.map((section, sectionindex) => {

                                    return (
                                        <div className="col-md-6" key={sectionindex}>
                                            {section.map((field, i)=>{
                                                return <Field
                                                {...field}
                                                key={i}
                                                value = {this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                                />
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="clearfix"></div>
                    
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button
                            className="btn btn-primary btn-xl text-uppercase"
                            type="submit"
                            >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () =>({
        name:'',
        email:'',
        phone:'',
        message:'',
    }),
    // validate: values => {
    //     const errors = {};

    //     Object.keys(values).map((v) => {
    //         if(!values[v]){
    //             errors[v] = 'Required!';
    //         }
    //     })

    //     return errors;
    // },
    validationSchema:Yup.object().shape({
        name:Yup.string().min(3,'Your name is longer than that!').required('You must give us your name!'),
        email:Yup.string().email('Kindly share a valid email!').required('Share your email'),
        phone:Yup.string()
                .min(10,'Provide full number')
                .max(12,'Max number exceeded')
                .required('Provide valid number'),
        message:Yup.string().min(50,'Provide more detailed information').required('Message required')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert('Form Submitted! Kudos manenoz!!!',JSON.stringify(values))
    }
})(Contact);