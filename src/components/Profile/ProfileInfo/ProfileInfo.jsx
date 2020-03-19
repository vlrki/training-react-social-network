import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import profileImage from '../../../assets/profile.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    if (!profile) {
        return (
            <Preloader />
        )
    }
    
    return (
        <Row>
            <Col xs={8}>
                <ProfileStatus status={status} updateStatus={updateStatus} />
                <div>Name: {profile.fullName}</div>
                {/* <div>Date of birth: 16.03.1986</div> */}
                <div>Website: {profile.contacts.website}</div>
                <div>VK: {profile.contacts.vk}</div>
                <div>Facebook: {profile.contacts.facebook}</div>
                <div>Twitter: {profile.contacts.twitter}</div>
                <div>Instagram: {profile.contacts.instagram}</div>
                <div>YouTube: {profile.contacts.youtube}</div>
                <div>GitHub: {profile.contacts.github}</div>
            </Col>
            <Col xs={4}>
                <div><img src={profile.photos.large === null ? profileImage : profile.photos.large} alt={profile.fullName} /></div>
                <div>
                    { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
                </div>
            </Col>
        </Row>
    );
}

export default ProfileInfo;