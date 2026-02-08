import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {
  const params = useParams();
  console.log(params);

  return <div>contact-detail {params.id}</div>;
};

export default ContactDetail;
