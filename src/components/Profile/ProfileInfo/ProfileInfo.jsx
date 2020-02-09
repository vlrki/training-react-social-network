import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    } else {
        return (
            <Row>
                <Col xs={8}>
                    <div>Name: {props.profile.fullName}</div>
                    {/* <div>Date of birth: 16.03.1986</div> */}
                    <div>Website: {props.profile.contacts.website}</div>
                    <div>VK: {props.profile.contacts.vk}</div>
                    <div>Facebook: {props.profile.contacts.facebook}</div>
                    <div>Twitter: {props.profile.contacts.twitter}</div>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>YouTube: {props.profile.contacts.youtube}</div>
                    <div>GitHub: {props.profile.contacts.github}</div>
                </Col>
                <Col xs={4}>
                    <div><img src={props.profile.photos.large} alt={props.profile.fullName} /></div>
                </Col>
            </Row>
        );
    }
}

export default ProfileInfo;