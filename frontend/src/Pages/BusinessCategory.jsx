import { useState } from 'react'
import '../App.css'   
import { Link } from 'react-router-dom';

function BusinessCategory() {
  const [businessCategory] = useState([
    {
      category_name: 'Restaurants',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=96&q=75',
    },
    {
      category_name: 'Hotels',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=96&q=75',
    },
    {
      category_name: 'Beauty Spa',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=96&q=75',
    },
    {
      category_name: 'Home Decor',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=96&q=75',
    },
    {
      category_name: 'Wedding Planning',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif?w=96&q=75',
    },
    {
      category_name: 'Education',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=96&q=75',
    },
    {
      category_name: 'Rent & Hire',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=96&q=75',
    },
    {
      category_name: 'Hospital',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=96&q=75',
    },
    {
      category_name: 'Contractor',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=96&q=75',
    },
    {
      category_name: 'Pet Shops',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=96&q=75',
    },
    {
      category_name: 'PG Hostels',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=96&q=75',
    },
    {
      category_name: 'Estate Agent',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=96&q=75',
    },
    {
      category_name: 'Dentist',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=96&q=75',
    },
    {
      category_name: 'Gym',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=96&q=75',
    },
    {
      category_name: 'Loan',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newhotkey/loans.svg?w=96&q=75',
    },
    {
      category_name: 'Event Organizers',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=96&q=75',
    },
    {
      category_name: 'Driving School',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=96&q=75',
    },
    {
      category_name: 'Packers Movers',
      icon_url: 'https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=96&q=75',
    },
  ]);

  return (
    <ul className="grid-list">
      {businessCategory.map((cv, idx) => (
        <li key={idx} className="grid-item">
         <Link to={`/business-listing/${cv.category_name}`}>
          <img src={cv.icon_url} alt={cv.category_name} />
          <p>{cv.category_name}</p>
        </Link>
        </li>
      ))}
    </ul>
  )
}

export default BusinessCategory;
