import Card from './Card'
import JobCard from './JobCard'
import MeetupCard from './MeetupCard'

const CardSection = () => {
  return (
    <div className='grid-container'>
        <div className="grid-item grid-item-colspan">
            <div className="posts">
                <Card
                    postImage= "/images/postfirst.png"
                    title= "Article"
                    content= "What if famous brands had regular fonts? Meet RegulaBrands!"
                    authorimage= "/images/auth1.png"
                    authorname= "Sarthak Kamra"
                    authorviews= "1.9k"
                />
                <Card
                    postImage="/images/postsecond.png"
                    title="🔬️ Education"
                    content="Tax Benefits for Investment under National Pension Scheme launched by Government"
                    authorimage="/images/auth2.png"
                    authorname="Sarah West"
                    authorviews="1.9k"
                />  
                <MeetupCard
                    postImage= "/images/postthird.png"
                    title= "🗓️ Meetup"
                    content= "Finance & Investment Elite Social Mixer @Lujiazui"
                    date= "Fri, 12 Oct, 2018"
                    location= "Ahmedabad, India"
                    website= "Visit Website"
                    authorimage= "/images/auth3.png"
                    authorname= "Ronal Jones"
                    authorviews= "1.4k"
                />
                <JobCard
                    title="💼️ Job"
                    content="Software Developer"
                    company="Innovaccer Analytics Private Ltd."
                    location="Noida, India"
                    buttonText="Apply on Timesjobs"
                    authorimage="/images/auth4.png"
                    authorname="Joseph Gray"
                    authorviews="1.4k"
                    />
            </div>
        </div>
        <div className="grid-item grid-item2">
            <div className="location-input">
                <i className="fas fa-map-marker-alt"></i>
                <input 
                type="text"
                id="location"
                name="location"
                value="Bangalore, India"
                placeholder="Enter a location" />
                <i className="fas fa-search"></i>
            </div>
        </div>
    </div>
  )
}

export default CardSection