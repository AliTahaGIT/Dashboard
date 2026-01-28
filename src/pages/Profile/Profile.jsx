import './Profile.css'
import IMG from '../../assets/ALI2 IMG.jpg'

import Avatar from '@mui/material/Avatar';

function Profile() {
  return (
    <div className='profile-main'>
        <div className='profile-top'>
            <h1 className='profile-header'>Your Profile</h1>
            <span className='dividerPage'/>
        </div>

        <div className='profile-content'>
            <div className='profile-left'>
                <img className='profile-left-img' alt='ALI' src={IMG}/>
                <div className='profile-left-data'>
                    <div className='profile-item'>
                        <h2 className='profile-item-header'>FULL NAME</h2>
                        <span className='profile-item-info'>Ali Ahmed Taha</span>
                    </div>
                    <div className='profile-item'>
                        <h2 className='profile-item-header'>DATE OF BIRTH</h2>
                        <span className='profile-item-info'>23 December 2004</span>
                        <span className='profile-item-info'>21 years old</span>
                    </div>
                    <div className='profile-item'>
                        <h2 className='profile-item-header'>ADDRESS</h2>
                        <span className='profile-item-info'>Abu Dhabi, Al Reem</span>
                    </div>
                    <div className='profile-item'>
                        <h2 className='profile-item-header'>CONTACT INFO</h2>
                        <span className='profile-item-info'>+971564712794</span>
                        <span className='profile-item-info'>aliahmedtaha7077@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className='profile-right'>
                <div className='profile-right-companyInfo'>
                    <div className='profile-companyInfo-top'>
                        <h2 className='profile-item-header'>POSITION NAME</h2>
                        <h2 className='profile-item-info'>Full-Stack Software Developer</h2>
                    </div>
                    <div className='profile-companyInfo-data'>
                        <div className='profile-item'>
                            <h2 className='profile-item-header'>DATE JOINED</h2>
                            <span className='profile-item-info'>26 January 2026</span>
                        </div>
                        <div className='profile-item'>
                            <h2 className='profile-item-header'>DATE END</h2>
                            <span className='profile-item-info'>26 March 2026</span>
                        </div>
                        <div className='profile-item'>
                            <h2 className='profile-item-header'>ANNUAL SALARY</h2>
                            <span className='profile-item-info'>$120,000</span>
                        </div>
                        <div className='profile-item'>
                            <h2 className='profile-item-header'>MONTHLY SALARY</h2>
                            <span className='profile-item-info'>$10,000</span>
                        </div>
                    </div>
                </div>

                <div className='profile-companyInfo-bottom'>
                    <div className='profile-companyInfo-mentors'>
                        <h1 className='profile-mentor-header'>My Mentors</h1>
                        <div className='profile-mentorItem'>
                            <Avatar alt="User" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop" sx={{ width: 55, height: 55 }} />
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>NAME</span>
                                <span className='profile-mentorItem-data2'>Mr. Khalid Seif</span>
                            </div>
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>POSITION</span>
                                <span className='profile-mentorItem-data2'>Service Delivery Manager (SDM)</span>
                            </div>
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>STATUS</span>
                                <span className='profile-mentorItem-data2'>Offline</span>
                            </div>
                            <button type='button' className='profile-mentorItem-btn'>Contact</button>
                        </div>
                        <div className='profile-mentorItem'>
                            <Avatar alt="User" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop" sx={{ width: 55, height: 55 }} />
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>NAME</span>
                                <span className='profile-mentorItem-data2'>Mr. Ahmed Gamil</span>
                            </div>
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>POSITION</span>
                                <span className='profile-mentorItem-data2'>Senior Software Developer</span>
                            </div>
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>STATUS</span>
                                <span className='profile-mentorItem-data2'>Online</span>
                            </div>
                            <button type='button' className='profile-mentorItem-btn'>Contact</button>
                        </div>
                        <div className='profile-mentorItem'>
                            <Avatar alt="User" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop" sx={{ width: 55, height: 55 }} />
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>NAME</span>
                                <span className='profile-mentorItem-data2'>Dr. Seif Salim</span>
                            </div>
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>POSITION</span>
                                <span className='profile-mentorItem-data2'>Senior DevOps Architect</span>
                            </div>
                            <div className='profile-mentorItem-data'>
                                <span className='profile-mentorItem-data1'>STATUS</span>
                                <span className='profile-mentorItem-data2'>Online</span>
                            </div>
                            <button type='button' className='profile-mentorItem-btn'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile