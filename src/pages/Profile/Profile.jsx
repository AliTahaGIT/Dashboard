import './Profile.css'
import IMG from '../../assets/ALI2 IMG.jpg'
import Avatar from '@mui/material/Avatar';


const personalInfo = [
  { label: "First Name", value: "Ali" },
  { label: "Last Name", value: "Taha" },
  { label: "Date of Birth", value: "23-12-2004" },
  { label: "Email Address", value: "aliahmedtaha7077@gmail.com" },
  { label: "Phone Number", value: "(+971) 564712794" },
  { label: "User Role", value: "Employee" },
];

const addressInfo = [
  { label: "Country", value: "United Arab Emirates" },
  { label: "City", value: "Abu Dhabi" },
  { label: "Area", value: "Al Reem Island" },
  { label: "Street", value: "Mohammed Ahmed the 3rd ST" },
];

function Profile() {
  return (
    <div className='profile-main'>
        <div className='profile-top'>
            <Avatar src={IMG} sx={{
                width: { xs: 80, sm: 100, md: 120 },
                height: { xs: 80, sm: 100, md: 120 },
            }}/>
            <div className='profile-top-data'>
                <h1 className='profile-top-name'>Mr. Ali Ahmed Taha</h1>
                <span className='profile-top-role'>Software Developer</span>
                <span className='profile-top-role'>Abu Dhabi, UAE</span>
            </div>
        </div>

        <div className='profile-card'>
            <div className='profile-card-top'>
                <h1 className='profile-card-header'>Personal Information</h1>
                <span className='dividerPage'/>
            </div>
            <div className='profile-items'>
                {personalInfo.map((p) =>(
                    <div className='profile-item'>
                        <span className='profile-item-label'>{p.label}</span>
                        <span className='profile-item-value'>{p.value}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className='profile-card'>
            <div className='profile-card-top'>
                <h1 className='profile-card-header'>Address</h1>
                <span className='dividerPage'/>
            </div>
            <div className='profile-items'>
                {addressInfo.map((p) =>(
                    <div className='profile-item'>
                        <span className='profile-item-label'>{p.label}</span>
                        <span className='profile-item-value'>{p.value}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Profile