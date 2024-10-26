import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Complexobj() {
  const library = {
    fiction: {
      authors: {
        "J.K. Rowling": [
          { title: "Harry Potter and the Philosopher's Stone", year: 1997 },
          { title: "Harry Potter and the Chamber of Secrets", year: 1998 },
        ],
        "George Orwell": [
          { title: "1984", year: 1949 },
          { title: "Animal Farm", year: 1945 },
        ],
      },
    },
    nonFiction: {
      authors: {
        "Yuval Noah Harari": [
          { title: "Sapiens: A Brief History of Humankind", year: 2011 },
          { title: "Homo Deus: A Brief History of Tomorrow", year: 2015 },
        ],
        "Malcolm Gladwell": [
          { title: "Outliers", year: 2008 },
          { title: "Blink", year: 2005 },
        ],
      },
    },
  };

  const userProfile = {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
    },
    contactDetails: {
      email: "john.doe@example.com",
      phone: "555-1234",
      socialMedia: [
        { platform: "Twitter", handle: "@johndoe" },
        { platform: "Facebook", handle: "john.doe" },
        { platform: "Instagram", handle: "@john_doe" },
      ],
    },
  };
  const socialIcons = {
    Twitter: <FaTwitter className="mr-3 my-auto w-fit text-blue-500 flex-shrink-0" />,
    Facebook: <FaFacebook className="mr-3 my-auto w-fit text-blue-700 flex-shrink-0" />,
    Instagram: <FaInstagram className="mr-3 my-auto w-fit text-pink-500 flex-shrink-0" />,
  };

  const newarr = Object.entries(library);
  console.log(newarr);

  const sndarr = newarr.flatMap(([genre, { authors }]) =>
    Object.entries(authors).flatMap(([author, arr]) =>
      arr.map((element) => ({
        genre: genre,
        author,
        title: element.title,
        year: element.year,
      }))
    )
  );

  return (
    <>
      <div>
        {sndarr.map((element, index) => (
          <div
            className="flex flex-col space-y-2 justify-center items-center"
            style={{
              backgroundColor: `hsl(${Math.random() * 1000000000}, 100%, 75%)`,
            }}
            key={index}
          >
            <div>{element.genre}</div>
            <div>{element.author}</div>
            <div>{element.title}</div>
            <div>{element.year}</div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <div className="text-3xl font-bold flex justify-center items-center">
          <span>
            <FaUser className="w-fit mr-3 mb-8 text-indigo-600" />
          </span>
          <span>User Profile</span>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4 text-indigo-600">
            Personal Information
          </h2>
          <p className="text-lg mb-2">
            <span className="font-semibold">First Name:</span>{" "}
            {userProfile.personalInfo.firstName}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Last Name:</span>{" "}
            {userProfile.personalInfo.lastName}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Age:</span>{" "}
            {userProfile.personalInfo.age}
          </p>
          <div className="text-lg p-0 flex items-center">
            <div className="flex justify-center items-center">
              <FaMapMarkerAlt className="mr-3 my-auto w-fit text-red-500 flex-shrink-0" />
              <div>
                {userProfile.personalInfo.address.street},{" "}
                {userProfile.personalInfo.address.city},{" "}
                {userProfile.personalInfo.address.state}{" "}
                {userProfile.personalInfo.address.zip}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4 text-indigo-600">
            Contact Details
          </h2>
          <div className="text-lg p-0 flex items-center">
            <div className="flex justify-center items-center">
              <FaEnvelope className="mr-3 my-auto w-fit text-green-500 flex-shrink-0" />
              <div>
                {userProfile.contactDetails.email}
              </div>
            </div>
          </div>
          <div className="text-lg p-0 flex items-center">
            <div className="flex justify-center items-center">
              <FaPhone className="mr-3 my-auto w-fit text-blue-500 flex-shrink-0" />
              <div>
                {userProfile.contactDetails.phone}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4 text-indigo-600">
            Social Media
          </h2>
          <div className="text-lg p-0 flex flex-col w-fit">
          {userProfile.contactDetails.socialMedia.map((element, index) => (
            <div
              key={index}
              id={index.toString()}
              className="bg-gray-100 w-full mb-2 rounded-lg"
            >
             <span className="inline-block">{socialIcons[element.platform]}</span>
              <span className="font-semibold">
                {element.platform}:
              </span>
              <span className="">{element.handle}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Complexobj;
