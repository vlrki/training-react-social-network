import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Input, Textarea, Checkbox } from "../../common/FormsControls/FormsControls";
import { minLengthCreator, maxLengthCreator, required } from "../../../utils/validators/validators";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import profileImage from '../../../assets/profile.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return (
            <Preloader />
        )
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const goToEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData) => {        
    //TODO: Хранить состояние в state
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <Row>
            <Col xs={8}>
                <ProfileStatus status={status} updateStatus={updateStatus} />
                {editMode ? <ReduxProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} /> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode} />}
            </Col>
            <Col xs={4}>
                <div><img src={profile.photos.large === null ? profileImage : profile.photos.large} alt={profile.fullName} /></div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            </Col>
        </Row>
    );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <>
        {isOwner && <div><Button variant="primary" onClick={goToEditMode}>edit</Button></div>}

        <div><b>Name:</b> {profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        <div><b>Looking for a job description:</b> {profile.lookingForAJobDescription}</div>
        <div><b>About me:</b> {profile.aboutMe}</div>

        {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </>
}

const ProfileDataForm = ({ handleSubmit, error, initialValues, profile }) => {
    return <Form onSubmit={handleSubmit}>
        <div><Button variant="primary" type="submit">save</Button></div>        

        { error &&
            <div class="alert alert-danger" role="alert">
                {error}
            </div>
        }

        <Form.Group controlId="formBasicLogin">
            <Form.Label>Name</Form.Label>
            <Field
                component={Input}
                name={"fullName"}
                type={"text"}
                placeholder="Name"
            />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
            <Field component={Checkbox} name={"lookingForAJob"} label={"Looking for a job"} />
        </Form.Group>

        <Form.Group controlId="formBasicLogin">
            <Form.Label>Looking for a job description:</Form.Label>
            <Field
                component={Textarea}
                name={"lookingForAJobDescription"}
                placeholder="Name"
            />
        </Form.Group>

        <Form.Group controlId="formBasicLogin">
            <Form.Label>About me:</Form.Label>
            <Field
                component={Input}
                name={"aboutMe"}
                type={"text"}
                placeholder="Name"
            />
        </Form.Group>

        {Object.keys(profile.contacts).map(key => {
            return <ContactField key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </Form>
}


const ReduxProfileDataForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);

const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>;
}

const ContactField = ({ contactTitle, contactValue }) => {
    let name = "contacts." + contactTitle;

    return <Form.Group controlId="formBasicLogin">
        <Form.Label>{contactTitle}</Form.Label>
        <Field
            component={Input}
            name={name}
            type={"text"}
            placeholder={contactTitle}
        />
    </Form.Group>;
}

export default ProfileInfo;