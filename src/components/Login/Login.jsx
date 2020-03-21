import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { login, logout } from '../../redux/auth-reducer';

import { minLengthCreator, maxLengthCreator, required } from "../../utils/validators/validators";
import { Input, Password } from "../common/FormsControls/FormsControls";
import { Redirect } from 'react-router-dom';

const minLength2 = minLengthCreator(2);
const minLength6 = minLengthCreator(6);
const maxLength50 = maxLengthCreator(50);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

    const ReduxFormControl = ({ input, meta, type, placeholder, min, max }) => {
        return (
            <Form.Control
                type={type}
                name={input.name}
                placeholder={placeholder}
                min={min}
                max={max}
                value={input.value}
                onChange={input.onChange} />
        )
    }

    const ReduxFormCheckbox = ({ input, meta, type, label }) => {
        return (
            <Form.Check
                type={type}
                name={input.name}
                label={label}
                value={input.value}
                checked={input.checked}
                onChange={input.onChange} />
        )
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Field
                component={Input}
                name={"email"}
                type={"email"}
                placeholder="Login"
                validate={[required, minLength2, maxLength50]}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Field
                component={Password}
                name={"password"}
                type={"password"}
                placeholder="Password"
                validate={[required, minLength6, maxLength50]}
            />
        </Form.Group>

        { captchaUrl &&
            <>
                <img src={captchaUrl} />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Captcha</Form.Label>
                    <Field
                        component={Password}
                        name={"captcha"}
                        type={"text"}
                        placeholder=""
                        validate={[required]}
                    />
                </Form.Group>
            </>
        }

        <Form.Group controlId="formBasicCheckbox">
            <Field component={ReduxFormCheckbox} name={"rememberMe"} type={"checkbox"} label={"Remember me"} />
        </Form.Group>

        { error &&
            <div class="alert alert-danger" role="alert">
                {error}
            </div>
        }

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <Container>
        <Row>
            <Col>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </Col>
        </Row>
    </Container>;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login, logout })(Login);